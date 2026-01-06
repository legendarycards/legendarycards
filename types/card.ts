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
  _normalVersion:string;
  _rareVersion:string;

  // Metadata
  title:string;
  description:string;
  category:Category;
  set:Set;

  // If true then this card represents a group of cards.
  multi:boolean;
  // A common separated string of cards in the multi-group.
  cards:string;

  // Once cards is parsed then group and groupPrefix are available.
  _group:Array<string>;
  _groupPrefix:string;

  // Optional TopVault UUID for linking to TopVault app
  topvault?:string;
  // Parsed array of TopVault UUIDs for multi-card groups
  _topvaultArray?:Array<string>;
}
