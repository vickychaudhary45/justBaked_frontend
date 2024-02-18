import React from "react";
import Link from "next/link";
import Image from "next/image";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import AboutBlock from "@/components/AboutBlock";
import BookTableBlock from "@/components/BookTableBlock";
import ChefsBlock from "@/components/ChefsBlock";

function index() {
  const homeMenuItemsData = [
    {
      name: "Starters Menu",
      img_src: "/images/Starters_Menu_bg.jpg",
      alt: "starters menu",
    },
    { name: "Main Menu", img_src: "/images/Main_menu.jpg", alt: "main menu" },
    {
      name: "Drinks Menu",
      img_src: "/images/Drinks_Menu.jpg",
      alt: "drinks menu",
    },
  ];
  return (
    <div className="home">
      <div className="home-img">
        <img src="/images/bg-img2.jpg" alt="home-img.jpg" />
      </div>
      <div className="home-text-block">
        <div home-txt>
          <h1>Hundreds of Flavors Under One Roof</h1>
          <h3>Something Hot. Something Spicy.</h3>
        </div>
        <div className="order-btn-block">
          <Link href="/order-now" style={{ textDecoration: "none" }}>
            <button className="btn-order-now">
              Order Now <KeyboardDoubleArrowRightOutlinedIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="home-menu-block">
        <h3>Menus</h3>
        <div className="menu-info">
          {homeMenuItemsData.map((itm) => (
            <div className="home-menu-itm">
              <Link href="/menu">
                <Image
                  src={itm.img_src}
                  alt={itm.alt}
                  width={400}
                  height={400}
                />
                <p>{itm.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="about-us-block">
        <AboutBlock />
      </div>
      <div className="book-a-table-home-block">
       <BookTableBlock/>
      </div>
      <div className="chefs-block">
        <ChefsBlock/>
      </div>
    </div>
  );
}

export default index;
