import React from 'react';
import Styles from "../styles/css/chefs-block.module.scss";
import { LinkedIn, Instagram, X } from '@mui/icons-material';
import Image from "next/image";

const ChefsBlock = () => {
  const chefsDetails = [{
    name: "John Duo", experience: "5 years",
    imgSrc: "/images/chef.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/?lang=en",
    intagram: "https://www.instagram.com/"
  },
  {
    name: "John Duo",
    experience: "5 years",
    imgSrc: "/images/chef.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/?lang=en",
    intagram: "https://www.instagram.com/"
  },
  {
    name: "John Duo",
    experience: "5 years",
    imgSrc: "/images/chef.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/?lang=en",
    intagram: "https://www.instagram.com/"
  },
  {
    name: "John Duo",
    experience: "5 years",
    imgSrc: "/images/chef.jpg",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/?lang=en",
    intagram: "https://www.instagram.com/"
  }
  ]
  return (
    <>
      <h3>Our Master Chefs</h3>
      <div className={Styles.home_chefs_block}>
        {chefsDetails?.map((itm) => (
          <>
            <div className={Styles.chefs_bg}>
              <div className={Styles.chefs_img}>
                <Image src={"/images/chef.jpg"} alt="chef" width={250} height={250} />
              </div>
              <div className={Styles.icon_name_block}>
                <h5>{itm.name}</h5> <span>{itm.experience}</span>
                <div className={Styles.icon_block}><X /> <LinkedIn /> <Instagram /></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default ChefsBlock