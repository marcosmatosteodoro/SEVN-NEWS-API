import { Category } from "./";

export type News = {
  id: string;
  title: string;
  category: Category;
  image: string;
  first_sentence: string;
  content: string;
  headline: boolean;
  created_at: string;
  author: string;
}

export type NewsHeadline = Omit<News, 'headline' | 'content' | 'first_sentence' | 'created_at' | 'author'>;
export type NewsSecondary = Omit<News, 'headline' | 'image' | 'created_at' | 'author'>;