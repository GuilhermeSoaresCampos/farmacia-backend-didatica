export interface ClienteCreateDTO {
  nome: string;
  cpf: string;
}

export interface ClienteResponseDTO {
  idCliente?: number;
  nome: string;
  cpf: string;
}
