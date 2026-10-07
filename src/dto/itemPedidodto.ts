export interface ItemPedidoCreateDTO {
  idVenda: number;
  idProduto: number;
  qtdProduto: number;
  precoUnit: number;
}

export interface ItemPedidoUpdateDTO {
  qtdProduto?: number;
  precoUnit?: number;
}
