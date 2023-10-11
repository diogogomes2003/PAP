import {UserService} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
// import {inject} from '@loopback/testlab';
import { } from '../application';
import {PasswordHasherBindings} from '../keys';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {BcryptHasher} from './hash.password.bcrypt';



export class MyUserService implements UserService<User, Credentials>{
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
  ) { }

  async verifyCredentials(credentials: Credentials): Promise<User> {
    //
    const foundUser = await this.userRepository.findOne({
      where: {
        email: credentials.email
      }
    });
    if (!foundUser) {
      throw new HttpErrors.NotFound('Utilizador não encontrado com este email');
    }

    const passwordMatched = await this.hasher.comparePassword(
      credentials.password,
      foundUser.password,
    );
    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('password invalida')
    }
    return foundUser;
  }
  convertToUserProfile(user: User): UserProfile {
    let username = ''
    if (user.FirstName) {
      username = user.FirstName;
    }
    if (user.LastName) {
      username = user.FirstName ?
        `${user.FirstName} ${user.LastName}` :
        user.LastName
    }
    return {
      [securityId]: `${user.id}`,
      d: `${user.id}`,
      name: username
    };
  }

}
