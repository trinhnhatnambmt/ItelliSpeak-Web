import { Route, Routes } from "react-router-dom";
import Header from "./sections/Header";
import Homepage from "./pages/Homepage";
import UpgradePlan from "./pages/UpgradePlan";
import Auth from "./pages/Auth/Auth";
import { AdminLayout } from "./components/admin/AdminLayout";
import { Dashboard } from "./pages/Admin/Dashboard";
import { Products } from "./pages/Admin/Products";
import { Reports } from "./pages/Admin/Reports";
import { Settings } from "./pages/Admin/Settings";
import { Users } from "./pages/Admin/Users";
import MainPage from "./pages/main/MainPage";
import InterviewPractice from "./pages/main/mainContent/InterviewPractice";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/upgrade-plan" element={<UpgradePlan />} />
            <Route path="/main" element={<MainPage />}>
                <Route index element={<InterviewPractice />} />
                <Route path="interview" element={<InterviewPractice />} />
            </Route>

            {/* Authentication */}
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Auth />} />
            {/* Admin routes - wrapped in AdminLayout */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />} />
                <Route path="settings" element={<Settings />} />
                <Route path="reports" element={<Reports />} />
            </Route>
        </Routes>
    );
};

export default App;
