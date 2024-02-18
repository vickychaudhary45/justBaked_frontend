import React from "react";
import styles from "../styles/css/function.module.scss";

const functions = () => {
  return (
    <>
      <section id={styles.resumeSection}>
        <section className={`${styles.section} ${styles.parallax2}`}>
          <div className={styles.sectionResume}>
            <a target="_blank" className={styles.btnR}>
              <span className={styles.btnR__mask}></span>
              <span
                style={{ color: "pink", fontSize: "100px" }}
                className={styles.btnR__text}
              >
                <h1 className={styles.titleOnImage}>Functions</h1>
              </span>
              <span className={`${styles.btnR__text} ${styles.btnR__textBis}`}>
              </span>
            </a>
          </div>
        </section>
      </section>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsRightBlock}>
          {/* <h3>About us</h3> */}
          <h1>We welcome you to Just Baked Restaurant</h1>
          <p>
            Embark on a culinary journey with us at Just Baked, where
            traditional Indian flavors and modern culinary artistry converge.
            Our kitchen is a canvas, painting vibrant dishes that celebrate the
            rich tapestry of Indian cuisine. From sizzling tandoori delights to
            aromatic curries, every bite tells a tale of authenticity and
            innovation. Join us in the heart of India, right here in Delhi, as
            we share the warmth, spices, and hospitality that define our unique
            culinary experience. Welcome to a taste of India, welcome to{" "}
            <b>Just Baked</b>
          </p>
          <div className={styles.textBlock}>
            <div className={styles.textBlockItm}>
              <span>
                <h3>1000+</h3>
              </span>
              <p>Happy Customers</p>
            </div>
            <div className={styles.textBlockItm}>
              <span>
                <h3>12+</h3>
              </span>
              <p>Years of Experience</p>
            </div>
            <div className={styles.textBlockItm}>
              <span>
                <h3>80+</h3>
              </span>
              <p>Experienced Staff and Chefs</p>
            </div>
            <div className={styles.textBlockItm}>
              <span>
                <h3>10+</h3>
              </span>
              <p>Branches All Over India</p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>functions</div>
  );
};

export default functions;
