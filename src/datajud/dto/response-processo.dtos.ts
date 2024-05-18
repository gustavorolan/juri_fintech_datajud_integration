export class ProcessoResponse {
  classe: string;
  sistema: string;
  formato: string;
  tribunal: string;
  dataUltimaAtualizacao: string;
  grau: string;
  dataAjuizamento: string;
  movimentacoes: MovimentosResponse[];
  assuntos: string[];
}

export class MovimentosResponse {
  nome: string;
  data: string;
}
