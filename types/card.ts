export enum Set {
  BaseFirst = 'base-first',
  BaseShadowless = 'base-shadowless',
  BaseUnlimited = 'base-unlimited',
}

export enum Category {
  Mythical = 'mythical',
  Legendary = 'legendary',
  Epic = 'epic',
  Rare = 'rare',
  Uncommon = 'uncommon',
}

export interface ICard {
  slug?:string;
  value:number;

  // Photos
  normalVersion:string;
  rareVersion:string;

  // Metadata
  title:string;
  description:string;
  category:Category;
  set:Set;
}
