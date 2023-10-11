import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Produtos, ProdutosRelations} from '../models';

export class ProdutosRepository extends DefaultCrudRepository<
  Produtos,
  typeof Produtos.prototype.id,
  ProdutosRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Produtos, dataSource);
  }
}
