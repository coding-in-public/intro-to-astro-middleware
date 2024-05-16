import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // if (context.url.pathname === "/") {
  //   return Response.redirect(new URL("/redirected", context.url), 302);
  // }
  // context.locals.title = "Homepage Title";

  // check auth status

  // const response = await next();
  // const html = await response.text();
  // const redactedHtml = html.replaceAll("PRIVATE INFO", "REDACTED");

  // return new Response(redactedHtml, {
  //   status: 200,
  //   headers: response.headers,
  // });
  if (context.request.method === "POST") {
    console.log("POST ROUTE HIT");
  }
  return next();
});
