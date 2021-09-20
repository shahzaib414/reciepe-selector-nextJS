import * as contentful from "contentful";
import { Recipe } from "../types";

export const fetchRecipes = async () => {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || '',
    space: process.env.NEXT_PUBLIC_SPACE_ID || '',
  });

  return await client.getEntries<Recipe>({
    content_type: "recipe",
    select: "sys.id,fields",
  });
};
