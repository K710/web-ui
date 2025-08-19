import Header from "../Header/Header.jsx";
import RightPage from "../RightPage/RightPage.jsx";
import styles from "./MainLayout.module.css";
import { Outlet, Routes } from "react-router-dom";
import HomeTab from "../Tabs/HomeTab/HomeTab.jsx";

function MainLayout() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div style={{ flex: 1 }}>
                    <Outlet />
                </div>
                <div style={{ width: 420, minWidth: 420, marginRight: 24 }}>
                    <RightPage />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
