import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/components/MainLayout/MainLayout.jsx";
import HomeTab from "./layout/components/Tabs/HomeTab/HomeTab";
function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomeTab />} />
            </Route>
        </Routes>
    );
}

export default App;
