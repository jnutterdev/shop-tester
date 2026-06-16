import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "YOUR_TINA_CLIENT_ID",
  branch:
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main",
  token: "YOUR_TINA_TOKEN",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "product",
        label: "Products",
        path: "src/content/products",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Product Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "number",
            name: "price",
            label: "Price (USD)",
            required: true,
          },
          {
            type: "number",
            name: "stock",
            label: "Stock Quantity",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Books", "Board Games", "Accessories", "Other"],
          },
          {
            type: "image",
            name: "image",
            label: "Product Image",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Product",
          },
        ],
      },
    ],
  },
});
