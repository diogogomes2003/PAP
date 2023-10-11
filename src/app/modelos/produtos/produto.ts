export class Produto {
    id: string;
    nome: string;
    descricao: string;
    especificadores: string;
    tipo: string;
    quantidade: number;
    preco: number;
    imageURL: string;
    adicionado?: boolean;

  constructor(id: string, nome: string, descricao: string, especificadores: string, tipo: string, quantidade: number, preco: number, imageURL: string) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.especificadores = especificadores
    this.tipo = tipo
    this.quantidade = quantidade
    this.preco = preco
    this.imageURL = imageURL
  }
}
