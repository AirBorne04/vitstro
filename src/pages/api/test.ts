import { APIRoute } from "astro";

export const get: APIRoute = async ({ request }) => {
  return {
    status: 200,
    body: JSON.stringify({
      message: "Hello world! (from Astro)",
    }),
  };
}