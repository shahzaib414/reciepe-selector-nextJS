import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { fetchRecipes } from "../services";
import { ContentfulApiResponse, Recipe } from "../types";
import { ContextProvider } from "../AppContext";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Avenir Next Cyr W00 Medium",Arial,sans-serif;
  background-color: #f6f6f6;
}
`;

function MyApp({
  Component,
  pageProps,
  recipes,
}: AppProps & { recipes: Recipe[] }) {
  return (
    <>
      <ContextProvider recipes={recipes}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}

MyApp.getInitialProps = async () => {
  const entries: ContentfulApiResponse<Recipe> = await fetchRecipes();

  const entryTags = new Map();

  // To perform iteration in O(n)^2
  entries.includes?.Entry.forEach((entry) => {
    if (entry.sys.contentType.sys.id === "tag") {
      entryTags.set(entry.sys.contentType.sys.id, entry.fields.name);
    }
  });

  const recipes: Recipe[] = entries.items.map((entryItem) => {
    const tags = entryItem.fields.tags?.map((tag) => {
      return {
        ...tag,
        name: entries.includes?.Entry.find(
          (entry) => entry.sys.id === tag.sys.id
        )?.fields.name,
      };
    });
    return {
      ...entryItem.fields,
      ...(entryItem.fields.chef && {
        chef: {
          ...entryItem.fields.chef,
          name:
            entries.includes?.Entry.find(
              (e) => e.sys.id === entryItem.fields.chef?.sys.id
            )?.fields.name || "",
        },
      }),
      id: entryItem.sys.id,
      ...(entryItem.fields.tags && { tags: tags }),
      photo: {
        ...entryItem.fields.photo,
        url: entries.includes?.Asset.find(
          (asset) => asset.sys.id === entryItem.fields.photo.sys.id
        )?.fields.file.url,
      },
    };
  });
  return { recipes };
};

export default MyApp;
