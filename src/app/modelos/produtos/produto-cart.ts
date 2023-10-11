import { Produto } from './produto';

export class ProdutoCart {
    id: number;
    idProduto: number;
    nomeProduto: string;
    quantidade: number;
    preco: number;

  constructor(id: number, produto: ProdutoCart, quantidade = 1) {
    this.id = id;
    this.idProduto = produto.idProduto;
    this.nomeProduto = produto.nomeProduto;
    this.preco = produto.preco;
    this.quantidade = quantidade;
  }
}
