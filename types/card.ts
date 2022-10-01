export enum Set {
  BaseFirst = 'base-first',
  BaseShadowless = 'base-shadowless',
  BaseUnlimited = 'base-unlimited',
}

export interface ICard {
  slug?:string;
  value:string;

  // Photos
  normalVersion:string;
  rareVersion:string;

  // Metadata
  title:string;
  description:string;
  category:string;
  set:Set;
}
