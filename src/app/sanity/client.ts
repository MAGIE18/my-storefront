import { createClient } from "next-sanity";

// We add a check to make sure the ID exists, or use a string as a fallback
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  console.warn("Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Check your Vercel Environment Variables.");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});