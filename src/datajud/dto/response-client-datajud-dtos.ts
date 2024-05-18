export class Classe {
  codigo: number;
  nome: string;
}

export class Sistema {
  codigo: number;
  nome: string;
}

export class Formato {
  codigo: number;
  nome: string;
}

export class ComplementoTabelado {
  codigo: number;
  valor: number;
  nome: string;
  descricao: string;
}

export class Movimento {
  complementosTabelados: ComplementoTabelado[];
  codigo: number;
  nome: string;
  dataHora: Date;
}

export class OrgaoJulgador {
  codigoMunicipioIBGE: number;
  codigo: number;
  nome: string;
}

export class Assunto {
  codigo: number;
  nome: string;
}

export class Processo {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
    numeroProcesso: string;
    classe: Classe;
    sistema: Sistema;
    formato: Formato;
    tribunal: string;
    dataHoraUltimaAtualizacao: Date;
    grau: string;
    dataAjuizamento: Date;
    movimentos: Movimento[];
    id: string;
    nivelSigilo: number;
    orgaoJulgador: OrgaoJulgador;
    assuntos: Assunto[];
  };
}
