import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo-2.svg";
import styles from "./Header.module.css";
import CurrentTime from "../CurrenTime/CurrentTime.jsx";

function Header() {
    const location = useLocation();

    const menuTabs = [
        {
            name: "ပင်မစာမျက်နှာ",
            link: "/",
        },
        {
            name: "TURN",
            link: "/turn",
        },
        {
            name: "ရလဒ်",
            link: "/result",
        },
        {
            name: "စည်းကမ်းချက်များ",
            link: "/markets",
        },
    ];

    return (
        <div className={styles.headerPage}>
            <div className={styles.container}>
                <div>
                    <div className={styles.boxLogo}>
                        <div className={styles.boxLogoLogo}>
                            <a className={styles.logo} href="">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.boxMenu}>
                        {menuTabs.map((tab) => (
                            <Link
                                key={tab.link}
                                to={tab.link}
                                className={`${styles.menuItem} ${
                                    location.pathname === tab.link
                                        ? styles.active
                                        : ""
                                }`}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.boxUser}>
                    <div className={styles.btnLogin}>အကောင့် ဝင်မည်</div>
                    <CurrentTime />
                </div>
            </div>
        </div>
    );
}

export default Header;
