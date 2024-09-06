// export { auth as middleware } from "@/auth";
// !!req.auth;
import { auth } from "@/auth";
import { PRIVATES_ROUTES } from "./constants";
export default auth((req) => {

  // Middleware currently only supports the Edge runtime. The Node.js runtime can not be used.
  // Also read about auth.js config splitting.. a walk around
  // # when I change the session.strategy to database (does that by default when i use adpaters). It doesnt work, issue with prisma client running on edge.
  // https://www.prisma.io/docs/orm/overview/databases/database-drivers#driver-adapters mysql isn't there/yet..
  if (
    !req.auth
    // &&    PRIVATES_ROUTES.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    console.log("middleware auth check: ", req.auth);
    const newUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/issues/new", "/issues/:id+/edit"],
};
