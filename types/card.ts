export interface ICard {
  slug?:string;
  date:string;

  // Photos
  normalVersion:string;
  rareVersion:string;

  // Metadata
  title:string;
  description:string;
  category:string;
}
