import { NextResponse } from "next/server";
import { withClerkMiddleware } from "@clerk/nextjs/server";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default withClerkMiddleware(() => {
  console.log("middleware runs");

  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = {
  matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
