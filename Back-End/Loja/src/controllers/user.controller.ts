// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {Count, CountSchema, Filter, repository, Where} from '@loopback/repository';
import {getJsonSchemaRef, post,get, patch,put, requestBody,response, param, getModelSchemaRef} from '@loopback/rest';
import * as _ from 'lodash';
import { filter } from 'lodash';
//import { get } from 'lodash';
import {PasswordHasherBindings, TokenServiceBindings, UserServiceBindings} from '../keys';
import {User} from '../models';
import {Credentials, UserRepository} from '../repositories';
import {BcryptHasher} from '../Services/hash.password.bcrypt';
import {JWTService} from '../Services/jwt-service';
import {MyUserService} from '../Services/user-service';
import {validateCredentials} from '../Services/validator';


export class UserController {
  constructor(
    @repository(UserRepository)
    public UserRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public hasher: BcryptHasher,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: MyUserService,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: JWTService,
  ) { }
  
  @get('/users', {
    responses: {
      '200': {
        description: 'User',
        content: {
          'application/json': {
            schema : {
              type: 'array',
              items: getJsonSchemaRef(User, {includeRelations:true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.UserRepository.find(filter);
  }

  // @patch('/users/edit')
  // @response(200, {
  //   description: 'User PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(User, {partial: true}),
  //       },
  //     },
  //   })
  //   user: User,
  //   @param.where(User) where?: Where<User>,
  // ): Promise<Count> {
  //   return this.UserRepository.updateAll(user, where);
  // }

  @patch('/users/{id}')
  @response(204, {
    description: 'User PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: User,
  ): Promise<void> {
    await this.UserRepository.updateById(id, user);
  }

  @post('/users/signup', {
    responses: {
      '200': {
        description: 'User',
        content: {
          schema: getJsonSchemaRef(User),
        },
      },
    },
  })
  async signup(@requestBody() userData: User) {
    validateCredentials(_.pick(userData, ['email', 'password']));
    userData.password = await this.hasher.hashPassword(userData.password);
    const saveduser = await this.UserRepository.create(userData);
    return saveduser;
  }

  @put('/users/{id}')
  @response(204, {
    deion: 'User PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.UserRepository.replaceById(id, user);
  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(

    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
              email: {
                type: 'string',
                format: 'email',
              },
              password: {
                type: 'string',
                minlength: 8,
              },
            },
          },
        },
      },
    }) credentials: Credentials): Promise<{token: string}> {
    const user = await this.userService.verifyCredentials(credentials);
    //console.log(user);
    const userProfile = this.userService.convertToUserProfile(user);
    //console.log(userProfile);
    const token = await this.jwtService.generateToken(userProfile);
    return Promise.resolve({token})
  }
  // @get('/users/me')
  // @authenticate('jwt')
  // async me(): Promise<UserProfile> {
  //   return Promise.resolve({[securityId]: '1', id: '1', name: 'Diogo'});
  //}
}
