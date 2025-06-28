
export interface Model {
  id: number;
  name: string;
  image: string;
  bgColor: string;
  cardBg: string;
}

export interface CollectionImage {
  id: number;
  models: Model[];
}

export interface CollectionState {
  backgroundColor: string;
}
