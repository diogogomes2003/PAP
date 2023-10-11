import {Entity, model, property} from '@loopback/repository';

@model()
export class Produtos extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @property({
    type: 'string',
    required: true,
  })
  especificacoes: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @property({
    type: 'string',
    required: true,
  })
  imageURL: string;



  constructor(data?: Partial<Produtos>) {
    super(data);
  }
}

export interface ProdutosRelations {
  // describe navigational properties here
}

export type ProdutosWithRelations = Produtos & ProdutosRelations;
