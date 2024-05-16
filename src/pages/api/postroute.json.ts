import type { APIRoute } from "astro";

export const POST: APIRoute = () => {
  return new Response(JSON.stringify({ success: true }));
};
