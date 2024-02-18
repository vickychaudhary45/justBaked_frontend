import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const router = useRouter();
  const [color, setColor] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  // Change navbar color on scroll
  const changeColor = () => {
    const isSmallDevice = window.matchMedia("(max-width: 1023px)").matches;
    if (window.scrollY >= 100 || isSmallDevice) {
      setColor(true);
    }else {
      setColor(false);
    }
    if (!isSmallDevice) {
      setShowHamburger(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
      window.addEventListener("resize", changeColor);
      return () => {
        window.removeEventListener("scroll", changeColor);
        window.removeEventListener("resize", changeColor);
      };
    }
  }, []);
  useEffect(() => {
    const body = document.body;

    if (showHamburger) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.overflow = "visible";
    };
  }, [showHamburger]);

  return (
    <div
      className={
        color || router.pathname !== "/" ? "header header-scroll-bg" : "header"
      }
      style={{ borderBottom: showHamburger ? " 2px solid #fea116" : "" }}
    >
      <div className="left-section">
        <Image src="/images/logo.png" alt="Logo" height={110} width={110} />
      </div>
      <div className={showHamburger ? "medium-devices" : "right-section"}>
        <ul>
          <li>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className={router.pathname === "/menu" ? "active" : ""}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/offers"
              className={router.pathname === "/offers" ? "active" : ""}
            >
              Offers and Events
            </Link>
          </li>
          <li>
            <Link
              href="/functions"
              className={router.pathname === "/functions" ? "active" : ""}
            >
              Functions
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={router.pathname === "/contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
          <li className="book-table-btn">
            <Link href="/book-a-table">Book A Table</Link>
          </li>
        </ul>
      </div>
      <div
        className="hamburger-icon"
        onClick={() => setShowHamburger(!showHamburger)}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
