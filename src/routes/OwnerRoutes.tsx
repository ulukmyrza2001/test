import { Navigate, Route, Routes } from "react-router-dom";
import { OWNER_ROUTES } from "../utils/constants/routes";
import { OwnerOutlet } from "../layout/owner-outlet/Dashboard";
import { AdminsPage } from "../pages/owner/admins";
import { OwnerPage } from "../pages/owner";
import { SupportPage } from "../pages/owner/supports";
import { AffiliatePage } from "../pages/owner/affiliate";

export const OwnerRoutes = () => {
  return (
    <Routes>
      <Route path={OWNER_ROUTES.DEFAULT.path} element={<OwnerOutlet />}>
        <Route
          path="/"
          element={<Navigate to={OWNER_ROUTES.DASHBOARD.path} />}
        />
        <Route path={OWNER_ROUTES.DASHBOARD.path} element={<OwnerPage />} />
        <Route path={OWNER_ROUTES.ADMINS.path} element={<AdminsPage />} />
        <Route path={OWNER_ROUTES.AFFILIATE.path} element={<AffiliatePage />} />
        <Route path={OWNER_ROUTES.SUPPORT.path} element={<SupportPage />} />
      </Route>
    </Routes>
  );
};
