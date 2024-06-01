export enum TipoProjeto {
  Comercial = 1,
  Residencial = 2,
  InstitucionalPublico = 3,
  Publico = 4
}

export interface CustomData {
  images: string[];
  isProjetoArquitetonico?: boolean;
  isProjetoInteriores?: boolean;
  isProjetoPaisagismo?: boolean;
  isObraPublica?: boolean;
  anoProjeto: number;
  tipoProjeto: TipoProjeto;
}

export interface Projeto extends CustomData {
  path: string;
  nome: string;
}
