import { Category } from "./";

export type News = {
  id: String;
  title: String;
  category: Category;
  image: String;
  first_sentence: String;
  content: String;
  headline: Boolean;
}

export type NewsHeadline = Omit<News, 'headline' | 'content' | 'first_sentence'>;
export type NewsSecondary = Omit<News, 'headline' | 'image'>;