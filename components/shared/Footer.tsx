import React from "react";
import Image from "next/image";
import styles from "../../styles/css/footer.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollButton = document.getElementById("scrollToTop");
    if (scrollButton) {
      scrollButton.addEventListener("click", handleScrollToTop);
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener("click", handleScrollToTop);
      }
    };
  }, [handleScrollToTop]);

  const router = useRouter();
  const isHomePage =
    router.pathname === "/" || router.pathname === "/book-a-table"
      ? true
      : false;
  const isfind = router.pathname != "/book-a-table" ? true : false;

  return (
    <footer>
      <div className={`${styles.row}`}>
        {isHomePage ? (
          <>
            {isfind ? (
              <>
                <div className={`${styles.up_column_}`}>
                  <h2 className={`${styles.section_title}`}>FIND US</h2>
                </div>
              </>
            ) : null}
            <div className={`${styles.up_column}`}>
              <section className={`${styles.content_section}`}>
                <div className={`${styles.rowD}`}>
                  <div className={`${styles.down_column}`}>
                    <div className={`${styles.contact_item}`}>
                      <div>
                        <div className={`${styles.ci_icon}`}>
                          <Image
                            src="/images/icon_callB.png"
                            alt="call iconB"
                            width={18}
                            height={18}
                            className={styles.image}
                          />
                        </div>
                      </div>
                      <div>
                        <div className={`${styles.ci_title}`}>Call Us</div>
                        <div className={`${styles.ci_text}`}>01625 535 245</div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.down_column}`}>
                    <div className={`${styles.contact_item}`}>
                      <div
                        className={`${styles.ci_icon} ${styles.ci_icon_location}`}
                      >
                        <Image
                          src="/images/icon_location.png"
                          alt="call iconB"
                          width={18}
                          height={18}
                          className={styles.image}
                        />
                      </div>
                      <div>
                        <div className={`${styles.ci_title}`}>ADDRESS</div>
                        <div
                          className={`${styles.ci_text}`}
                          style={{ fontSize: "15px" }}
                        >
                          121 Wilmslow Road
                          <br />
                          Handforth
                          <br />
                          Cheshire
                          <br />
                          SK9 3HX
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.down_column}`}>
                    <div className={`${styles.contact_item}`}>
                      <div className={` ${styles.ci_icon_email}`}>
                        <Image
                          src="/images/icon_email.png"
                          alt="call iconB"
                          width={25}
                          height={25}
                          className={styles.image}
                        />
                      </div>
                      <div>
                        <div className={`${styles.ci_title}`}>EMAIL</div>
                        <div className={`${styles.ci_text}`}>
                          bookings@giulianorestaurant.co.uk
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : null}
      </div>
      <div className={`${styles.container}`}>
        <div data-wow-duration="1.5s">
          <a
            href="https://www.giulianorestaurant.co.uk/"
            title="Giuliano Italian Restaurant | Handforth | Cheshire"
          >
            <img
              src="https://www.giulianorestaurant.co.uk/wp-content/uploads/2017/10/giuliano-footer-logo-1.png"
              width="156"
              height="60"
              alt="Giuliano Italian Restaurant | Handforth | Cheshire"
            />
          </a>
        </div>

        <div className={`${styles.Dish}`}>
          <div className={`${styles.fbDish}`}>
            <a
              href="https://www.facebook.com/GiulianoRestaurant"
              target="_blank"
            >
              <img
                src="https://www.giulianorestaurant.co.uk/wp-content/uploads/2017/10/facebook.png"
                alt="Facebook logo"
                title="Like Giuliano's on Facebook"
                width="60"
                height="60"
              />
            </a>
            <a
              href="https://dishcult.com/restaurant/giulianorestaurant?sortOrder=0&amp;page=1&amp;bookingDate=2023-11-29&amp;covers=2&amp;promotionId=0&amp;bookingTime=19%3A30#reviews"
              target="_blank"
            >
              <img
                src="https://www.giulianorestaurant.co.uk/wp-content/uploads/2023/12/dish-cult-logo.png"
                alt="DishCult logo"
                title="Follow Giuliano's on DishCult"
                width="60"
                height="60"
              />
            </a>
            <a
              href="http://www.tripadvisor.co.uk/Restaurant_Review-g499510-d3958460-Reviews-Giuliano-Handforth_Cheshire_England.html"
              target="_blank"
            >
              <img
                src="https://www.giulianorestaurant.co.uk/wp-content/uploads/2017/10/trip-advisor-icon.png"
                title="Read our reviews on Trip Advisor"
                width="60"
                height="60"
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <div className={`${styles.footer_made}`}>
          <a id="scrollToTop">
            <Image
              src="/images/sort_up.png"
              alt="call iconB"
              width={30}
              height={30}
              className={styles.image}
            />
          </a>
        </div>
      </div>
      {/* <div className={styles.footer}>
          <div className={styles.imageContainer}>
            <Image src="/images/BG1.jpeg" alt="BG1" width={400} height={400} />
            <div className={`${styles.ci_text}`} style={{ fontSize: "15px" }}>
              121 Wilmslow Road
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/images/BG2.jpeg" alt="BG2" width={400} height={400} />
            <div className={`${styles.ci_text}`} style={{ fontSize: "15px" }}>
              344 lmslow Road
            </div>
          </div>
        </div> */}
    </footer>
  );
};

export default Footer;
