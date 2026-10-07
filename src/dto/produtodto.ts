export interface ProdutoCreateDTO {
  descricao: string;
  validade?: string | Date | null;
  preco: number;
  qtdEstoque: number;
  qtdMinEstoque: number;
}

export interface ProdutoUpdateDTO {
  descricao?: string;
  validade?: string | Date | null;
  preco?: number;
  qtdEstoque?: number;
  qtdMinEstoque?: number;
}
