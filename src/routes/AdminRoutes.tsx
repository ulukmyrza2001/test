import { Route, Routes } from "react-router";
import { ADMIN_ROUTES } from "../utils/constants/routes";
import { DashboardOutlet } from "../layout/dashboard/Dashboard";
import { Calendar } from "../pages/admin/Calendar/Calendar";
import { Master } from "../pages/admin/Master/MasterPage/MasterPage";
import { Services } from "../pages/admin/Services/ServicesPage/ServicesPage";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path={ADMIN_ROUTES.DEFAULT.path} element={<DashboardOutlet />}>
        <Route path={ADMIN_ROUTES.DEFAULT.path} element={<Calendar />} />
        <Route path={ADMIN_ROUTES.MASTER.path} element={<Master />} />
        <Route path={ADMIN_ROUTES.SERVICES.path} element={<Services />} />
      </Route>
    </Routes>
  );
};
