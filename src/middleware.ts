export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:user-info",
    "/dashboard/:blogs",
    "/dashboard/:projects",
  ],
};
