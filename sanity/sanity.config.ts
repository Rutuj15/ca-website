import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID || "g16uh3k7";
const dataset = process.env.SANITY_STUDIO_API_DATASET || "production";

export default defineConfig({
  name: "ca-sakshi-blog",
  title: "CA Sakshi Blog",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
