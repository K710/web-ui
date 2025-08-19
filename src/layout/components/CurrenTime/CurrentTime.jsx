import moment from "moment";
import { useEffect, useState } from "react";
import "moment/locale/my";
import styles from "./CurrentTime.module.css"; // Assuming you have a CSS file for styling

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
    const [currentDate, setCurrentDate] = useState(
        moment().format("DD/MM/YYYY")
    );
    const [currentWeek, setCurrentWeek] = useState(
        moment().locale("my").format("dddd")
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format("HH:mm:ss"));
            setCurrentWeek(moment().locale("my").format("dddd"));
            setCurrentDate(moment().format("DD/MM/YYYY"));
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <div className={styles.boxUserDate}>
                <span>{currentTime}</span>
                <span className={styles.line}></span>
                <span>{`${currentWeek}, ${currentDate}`}</span>
            </div>
        </>
    );
}

export default CurrentTime;
