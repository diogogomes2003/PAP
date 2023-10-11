import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  FirstName: string;

  @property({
    type: 'string',
    required: true,
  })
  LastName: string;

  @property({
    type: 'string',
    required: false,
  })
  Morada: string;

  @property({
    type: 'string',
    required: false,
  })
  CodigoPostal: string;

  @property({
    type: 'number',
    required: false,
  })
  Contacto: number;

  @property({
    type: 'string',
    required: false,
  })
  datanasc: string;

  @property({
    type: 'string',
    required: false,
  })
  sexo: string;

  @property({
    type: 'string',
    required: false,
  })
  pais: string;

  @property({
    type: 'string',
    required: false,
  })
  distrito: string;

  @property({
    type: 'string',
    required: false,
  })
  concelho: string;

  @property({
    type: 'string',
    required: false,
  })
  freguesia: string;

  @property({
    type: 'string',
    required: false,
  })
  banco: string;

  @property({
    type: 'string',
    required: false,
  })
  ncontaban: string;



  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
