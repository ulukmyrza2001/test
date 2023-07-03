import { AdminRoutes } from "./AdminRoutes";
import { SuperAdmin } from "./SuperAdmin";
import { UserRoutes } from "./UserRoutes";
import Cookies from "js-cookie";

export const AppRoutes = () => {
  const role = Cookies.get("role");

  switch (role) {
    case "SUPER_ADMIN":
      return <SuperAdmin />;
    case "ADMIN":
      return <AdminRoutes />;
    case "USER":
      return <UserRoutes />;

    default:
      return <UserRoutes />;
  }
};
