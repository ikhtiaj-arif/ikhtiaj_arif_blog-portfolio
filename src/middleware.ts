import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // change if your login route is different
  },
});

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:user-info",
    "/dashboard/:blogs",
    "/dashboard/:projects",
  ],
};
