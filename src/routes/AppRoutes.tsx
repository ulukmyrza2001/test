import { AdminRoutes } from "./AdminRoutes";
import { SuperAdmin } from "./SuperAdmin";
import { UserRoutes } from "./UserRoutes";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

export const AppRoutes = () => {
  const [role, setRole] = useState<any>("");

  const { isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    const newRole = Cookies.get("role");
    setRole(newRole);
  }, [isAuthenticated]);

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
