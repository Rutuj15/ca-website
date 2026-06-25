import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID || "g16uh3k7";
const dataset = process.env.SANITY_STUDIO_API_DATASET || "production";

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: {
    appId: "m2fj7cwr7vs5anovsfv2imoy",
  },
});
