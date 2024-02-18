import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutBlock = () => {
  return (
    <>
      <div className="about-us-left-block">
        <div className="about-us-img-1">
          <Image
            src={"/images/about-us-2.jpg"}
            alt="about-us"
            width={300}
            height={300}
          />
        </div>
        <div className="about-us-img-2">
          <Image
            src={"/images/about-us-1.jpg"}
            alt="about-us"
            width={300}
            height={300}
          />
        </div>
        <div className="about-us-img-3">
          <Image
            src={"/images/about-us-3.jpg"}
            alt="about-us"
            width={300}
            height={300}
          />
        </div>
        <div className="about-us-img-4">
          <Image
            src={"/images/about-us-4.jpg"}
            alt="about-us"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="about-us-right-block">
        <h3>About us</h3>
        <h1>We welcome you to Just Baked Restaurant</h1>
        <p>
          Embark on a culinary journey with us at Just Baked, where traditional
          Indian flavors and modern culinary artistry converge. Our kitchen is a
          canvas, painting vibrant dishes that celebrate the rich tapestry of
          Indian cuisine. From sizzling tandoori delights to aromatic curries,
          every bite tells a tale of authenticity and innovation. Join us in the
          heart of India, right here in Delhi, as we share the warmth, spices,
          and hospitality that define our unique culinary experience. Welcome to
          a taste of India, welcome to <b>Just Baked</b>
        </p>
        <div className="text-block">
          <div className="text-block-itm">
            <span>1000+</span> <p>Happy Customers</p>
          </div>
          <div className="text-block-itm">
            <span>12</span> <p>Years of Experience</p>
          </div>
          <div className="text-block-itm">
            <span>80+</span> <p>Experienced Staff and Chefs</p>
          </div>
          <div className="text-block-itm">
            <span>10</span> <p>Branches All Over India</p>
          </div>
        </div>
        <div className="explore-more-btn">
          <Link href="/offers">
          <button>Explore More</button></Link>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;
