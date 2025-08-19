import styles from "./RightPage.module.css";
import urlImg from "../../../assets/images/banners-img1.png"; // Adjust the path as necessary

function RightPage() {
    return (
        <div className={styles.rightPage}>
            {/* Banner */}
            <div className={styles.banner}>
                <img src={urlImg} alt="Banner" className={styles.bannerImg} />
            </div>

            <div className={styles.tabRow}>
                <span className={styles.tabActive}>လောင်းထားသော</span>
                <select className={styles.dropdown}>
                    <option>ပထမဆုံး</option>
                    <option>အပတ်စဉ်</option>
                </select>
            </div>

            <div className={styles.list}>
                {[1, 2].map((item) => (
                    <div className={styles.item} key={item}>
                        <div className={styles.avatar}></div>
                        <div className={styles.info}>
                            <div className={styles.phone}>930****572</div>
                            <div className={styles.subPhone}>930****572</div>
                            <div className={styles.time}>
                                Aug 7, 2025, 9:07 AM
                            </div>
                        </div>
                        <div className={styles.status}>
                            <span>လောင်းလျှင်</span>
                            <span className={styles.stars}>***</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RightPage;
