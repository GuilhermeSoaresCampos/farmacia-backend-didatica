export interface PedidoItemDTO {
  idProduto: number;
  qtdProduto: number;
  precoUnit: number;
}

export interface PedidoCreateDTO {
  idCliente: number;
  itens: PedidoItemDTO[];
}
