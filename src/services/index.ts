import * as contentful from "contentful";
import { Recipe } from "../types";

export const fetchRecipes = async () => {
  const client = contentful.createClient({
    accessToken: "7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c",
    space: "kk2bw5ojx476",
  });

  return await client.getEntries<Recipe>({
    content_type: "recipe",
    select: "sys.id,fields",
  });
};
