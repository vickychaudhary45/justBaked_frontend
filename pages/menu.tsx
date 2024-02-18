import React from "react";
import { useState } from "react";
import styles from "../styles/css/menu.module.scss";
import Image from "next/image";
import Main from "../components/shared/Menu/Main";

const menu = () => {
  const [activeTab, setActiveTab] = useState("Main");
  const changeTab = (type: string) => {
    setActiveTab(type);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Main":
        return <Main props={"Main Course"} />;
      case "Lunch":
        return <Main props={"Lunch"} />;
      case "Specials":
        return <Main props={"Specials"} />;
      case "catering":
        return <Main props={"Catering"} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className={`${styles.menu}`}>
        <section>
          <div className={`${styles.menu_title}`}>
            <h1 className={styles.heading}>Food Menu</h1>
            <div className={`${styles.menuButtons}`}>
              <div className={`${styles.menuButtonsOne}`}>
                <button onClick={() => changeTab("Main")}>Main Menu</button>
                <button onClick={() => changeTab("Lunch")}>
                  Lunch Happy Hour
                </button>
              </div>
              <div className={`${styles.menuButtonsTwo}`}>
                <button onClick={() => changeTab("Specials")}>Specials</button>
                <button onClick={() => changeTab("catering")}>catering</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={`${styles.menuCategory}`}>{renderContent()}</div>
    </>
  );
};

export default menu;
