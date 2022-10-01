import matter from 'gray-matter';
import {join} from 'path';
import fs from 'fs';

// structure of items
type Items =  {
  // each post has a parameter key that takes the value of a string
  [key: string] : string
}

// structure of a post
type Card = {
  data:{
    // each post has a parameter key that takes the value of a string
    [key: string] : string
  };
  // each post will include the post content associated with its parameter key
  content: string
}

// path to our list of available posts
const CARDS_PATH = join(process.cwd(), 'cards');

// get the file paths of all available list of cards
function getCardsFilePaths(): string[]{
  return (
    // return the mdx file card path
    fs.readdirSync(CARDS_PATH)
    // load the card content from the mdx files
    .filter((path) => /\.mdx?$/.test(path))
  )
}

// getting a single post
export function getCard(slug:string): Card {
  // add path/location to a single post
  const fullPath = join(CARDS_PATH, `${slug}.mdx`);
  // cards's content
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  // get the front matter data and content
  const {data, content} = matter(fileContents);
  data['normalVersion'] = `cards/${slug}/normal.jpeg`;
  data['rareVersion'] = `cards/${slug}/rare.jpeg`;
  // return the front matter data and content
  return {data, content};
}

// load the post items
export function getCardItems(filePath:string, fields:string[] = []): Items{
  // create a slug from the mdx file location
  const slug = filePath.replace(/\.mdx?$/,"");
  // get the front matter data and content
  const {data, content} = getCard(slug);

  const items: Items = {};

  // just load and include the content needed
  fields.forEach((field) => {
    // load the slug
    if (field === 'slug') {
      items[field] = slug;
    }
    // load the post content
    if (field === 'content') {
      items[field] = content;
    }

    // check if the above specified field exists on data
    if (data[field]) {
      // verify the fileds has data
      items[field] = data[field];
    }
  });
  // return the post items
  return items;
}

// getting all cards
export function getAllCards(fields: string[]): Items []{
  // add paths for getting all cards 
  const filePaths = getCardsFilePaths();
  // get the cards from the filepaths with the needed fields sorted by date
  const cards = filePaths.map((filePath) => getCardItems(filePath, fields)).sort((card1, card2) => parseInt(card1.value) < parseInt(card2.value) ? 1 : -1);
  // return the available card
  return cards;
}