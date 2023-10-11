import {AuthenticationStrategy} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {TokenServiceBindings} from '../keys';
import {JWTService} from '../Services/jwt-service';


export class JWTStrategy implements AuthenticationStrategy {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: JWTService,
  ) { }
  name: string = 'jwt';
  async authenticate(
    request: Request,
  ): Promise<import("@loopback/security").UserProfile | undefined> {
    const token: string = this.extractCredentials(request);
    const userProfile = await this.jwtService.verifyToken(token);
    return Promise.resolve(userProfile);
  }
  extractCredentials(request: Request): string {
    if (!request.headers.authorization) {
      throw new HttpErrors.Unauthorized('Falta o cabeçalho da autorização');
    }

    const authHeaderValue = request.headers.authorization;

    if (!authHeaderValue.startsWith('Bearer')) {
      throw new HttpErrors.Unauthorized(`
      O cabeçalho não é do tipo 'Bearer'.
      `);
    }
    const parts = authHeaderValue.split(' ');
    if (parts.length !== 2) {
      throw new HttpErrors.Unauthorized(`
      O cabeçalho tem muitas partes, deve de seguir a seguinte padrao 'Bearer xx.yy.zz' para ser valido`,
      );
    }
    const token = parts[1];
    return token;
  }
}
