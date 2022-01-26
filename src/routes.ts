import * as authentication from "controllers/authentication";
import * as users from "controllers/users";

export const attachPublicRoutes = (app: any): void => {
  app.post("/login", authentication.login);
};

export const attachPrivateRoutes = (app: any): void => {
  app.get("/me", users.getCurrentUser);
};
