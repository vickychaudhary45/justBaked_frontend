import React, { useEffect, useState } from "react";
import styles from "../../../styles/css/menuMain.module.scss";
import Image from "next/image";

const Main = ({ props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`${styles.menuCategory}`}>
        <div className={`${styles.menuMain}`}>
          <div>{props}</div>
          <div></div>
        </div>
        <div className={`${styles.menuMainRight}`}>
          <div className={`${styles.menuTop}`}>
            <div className={`${styles.menuTopRight}`}>
              <h1>SIGNATURE SANDWICHES</h1>
              <p>
                {props} Smoked daily, all served {props} with Texas toast &
                pickles. Sold by the 1/2 lb.
              </p>
              <p>Garlic {props} 5.50 (v) Pizza bread topped with garlic</p>
              <p>
                {props} Rosmarino 6.50 (v) Pizza read with garlic & rosemary
              </p>
            </div>
            <div className={`${styles.menuTopLeft}`}>
              <Image
                src="/images/bg-img2.jpg"
                alt="call iconB"
                width={300}
                height={220}
                className={styles.image}
                style={{ borderRadius: "2px" }}
              />
            </div>
          </div>
        </div>
        {isMobile ? (
          <div className={`${styles.menuMainRight}`}>
            <div className={`${styles.menuTop}`}>
              <div className={`${styles.menuTopRight}`}>
                <h1>BARBEQUE</h1>
                <p>
                  Smoked daily, all served with Texas toast & pickles. Sold by
                  the 1/2 lb.
                </p>
              </div>
              <div className={`${styles.menuTopLeft}`}>
                <Image
                  src="/images/BG2.jpeg"
                  alt="call iconB"
                  width={300}
                  height={220}
                  className={styles.image}
                  style={{ borderRadius: "2px" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={`${styles.menuMainLeft}`}>
            <div className={`${styles.menuTop}`}>
              <div className={`${styles.menuTopLeft}`}>
                <Image
                  src="/images/BG1.jpeg"
                  alt="call iconB"
                  width={300}
                  height={220}
                  className={styles.image}
                  style={{ borderRadius: "2px" }}
                />
              </div>
              <div className={`${styles.menuTopRight}`}>
                <h1>BARBEQUE</h1>
                <p>
                  Smoked daily, all served with Texas toast & pickles. Sold by
                  the 1/2 lb.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
