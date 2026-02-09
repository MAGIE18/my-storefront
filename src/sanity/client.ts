import { createClient } from "next-sanity";

// This version checks for the variable and only uses it if it's there
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hdj3mcdy", // Replace p5k92s1a with your ID as a default
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});