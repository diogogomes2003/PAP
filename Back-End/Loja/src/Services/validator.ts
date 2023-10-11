import {HttpErrors} from '@loopback/rest';
import * as isEmail from 'isemail';
import {Credentials} from '../repositories';

export function validateCredentials(credentials: Credentials) {
  if (!isEmail.validate(credentials.email)) {
    throw new HttpErrors.UnprocessableEntity('Email invalido');
  }
  if (credentials.password.length < 8) {
    throw new HttpErrors.UnprocessableEntity('A password deve conter pelo menos 8 caracteres')
  }

}
