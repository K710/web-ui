import styles from "./HomeTab.module.css";

function HomeTab() {
    return (
        <div className={styles.homeTab}>
            {/* Banner */}
            <div className={styles.banner}>
                <img
                    src="http://auctionmytel.arabicatech.vn/api/src/uploads/20240909/1725857496017_banner.png"
                    alt="Banner"
                    className={styles.bannerImg}
                />
            </div>

            {/* Card 1 */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardTitle}>လက်ရှိလေလံ</span>
                    <a className={styles.cardLink} href="#">
                        အသေးစိတ်
                    </a>
                </div>

                <div className={styles.cardBody}>
                    <div className={styles.productImgCol}>
                        <img
                            src="http://auctionmytel.arabicatech.vn/api/src/uploads/20240625/1719301380456_thuyy1.jpg"
                            alt="product"
                            className={styles.productImg}
                        />

                        <div className={styles.productThumbs}>
                            <img
                                src="  http://auctionmytel.arabicatech.vn/api/src/uploads/20240625/1719301402691_thuyy6.jpg"
                                alt=""
                                className={styles.thumb}
                            />

                            <div className={styles.thumbActive}>
                                <img
                                    src="http://auctionmytel.arabicatech.vn/api/src/uploads/20240625/1719301380456_thuyy1.jpg"
                                    alt=""
                                />
                            </div>
                            <img
                                src="http://auctionmytel.arabicatech.vn/api/src/uploads/20240625/1719301432421_thuyy5.png"
                                alt=""
                                className={styles.thumb}
                            />
                        </div>
                    </div>
                    <div className={styles.productInfoCol}>
                        <div className={styles.productName}>TEST TEST TEST</div>
                        <div className={styles.productDesc}>
                            မူပိုင်ခွင့်နံပါတ်: EEEE
                        </div>
                        <div className={styles.productPrice}>500,000 MMK</div>
                        <div className={styles.productTimeLabel}>
                            လေလှော်ပြီးဆုံးမည့်အချိန်
                        </div>
                        <div className={styles.productTime}>
                            03 စက်တင်ဘာ 14:00:50
                        </div>
                        <button className={styles.bidBtn}>
                            <span className={styles.bidIcon}>🔨</span>{" "}
                            လေလှော်မည်
                        </button>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardTitle}>လက်မရှိလေလှော်များ</span>
                    <a className={styles.cardLink} href="#">
                        အသေးစိတ်
                    </a>
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.productImgCol}>
                        <img
                            src="http://auctionmytel.arabicatech.vn/api/src/uploads/20240625/1719301432421_thuyy5.png"
                            alt="product"
                            className={styles.productImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeTab;
