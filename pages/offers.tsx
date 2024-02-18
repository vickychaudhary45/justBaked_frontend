import React from "react";
import styles from "../styles/css/offfers.module.scss";

const offers = () => {
  return (
    <>
      <div className={styles.upperBlock}>
        <h1 className={styles.titleOnImageT}>Offer and Events</h1>
      </div>
      <section id={styles.resumeSection}>
        <section className={`${styles.section} ${styles.parallax2}`}>
          <div className={styles.sectionResume}>
            <a target="_blank" className={styles.btnR}>
              <span className={styles.btnR__mask}></span>
              <span
                style={{ color: "pink", fontSize: "100px" }}
                className={styles.titleOnImageBlock}
              >
                <h1 className={styles.titleOnImage}>OPENING NIGHT 2024</h1>
                <button>Click Here</button>
              </span>
              <div className={styles.titleOnImage}></div>
            </a>
          </div>
        </section>
      </section>
    </>
    // <div>offers</div>
  );
};

export default offers;
