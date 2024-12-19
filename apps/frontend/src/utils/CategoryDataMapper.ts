import { CategoryType } from "../models/types";

export const CategoryDataMapper = (data: any): CategoryType => {
  const result: CategoryType = {
    id: data.id,
    publicationDate: data.publicationDate,
    content: data.content,
    favourite: data.favourite,
    title: data.title,
    image: data.image,
    episodes: data.episodes,
  };
  return result;
};
