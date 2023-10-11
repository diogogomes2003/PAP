import {inject} from '@loopback/core';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {promisify} from 'util';
import {TokenServiceBindings} from '../keys';
const jwt = require('jsonwebtoken');
const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify)

export class JWTService {
  @inject(TokenServiceBindings.TOKEN_SECRET)
  public readonly jwtSecret: string
  @inject(TokenServiceBindings.TOKEN_EXPIRES_IN_VALUE)
  public readonly jwtExpiresIn: string

  async generateToken(userProfile: UserProfile): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized('Erro a gerar o token : userprofile é nulo',
      );
    }
    let token = '';
    try {
      token = await signAsync(userProfile, this.jwtSecret, {
        expiresIn: this.jwtExpiresIn,
      })
    } catch (err) {
      throw new HttpErrors.Unauthorized(`erro a gerar o token ${err}`);
    }
    return token;
  }
  async verifyToken(token: string): Promise<UserProfile> {
    //return Promise.resolve({[securityId]: '1', id: '1', name: 'Diogo'});
    if (!token) {
      throw new HttpErrors.Unauthorized(
        `Erro a verificar o token : 'token' e nulo`,
      );
    }
    let userProfile: UserProfile;
    try {
      const decryptedToken = await verifyAsync(token, this.jwtSecret);
      userProfile = Object.assign(
        {[securityId]: ''},
        {id: '', name: ''},
        {id: decryptedToken.id, name: decryptedToken.name}
      );
    } catch (error) {
      throw new HttpErrors.Unauthorized(
        `Erro a verificar token : ${error.message}`,
      );
    }
    return userProfile;
  }
}
