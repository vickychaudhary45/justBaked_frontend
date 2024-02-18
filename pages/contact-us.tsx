import React from "react";
import Image from "next/image";
import contactStyle from "../styles/css/contact-us.module.scss";
import DraftsIcon from "@mui/icons-material/Drafts";
import CallIcon from "@mui/icons-material/Call";
import { useForm } from "react-hook-form";

const contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={`${contactStyle.contact_us_block}`}>
      <div className={`${contactStyle.top_block}`}>
        <Image
          src="/images/contact-us.jpg"
          alt="contact-us"
          width={1000}
          height={600}
        />
      </div>
      <div className={`${contactStyle.middle_block}`}>
        <h1>Contact For Any Query</h1>
        <div className={`${contactStyle.middle_block_ele}`}>
          <div className={`${contactStyle.middle_itm}`}>
            <h3>Booking</h3>
            <p>
              <DraftsIcon />
              <a href="mailto:book@justbaked.com">book@justbaked.com</a>
            </p>
          </div>
          <div className={`${contactStyle.middle_itm}`}>
            <h3>General</h3>
            <p>
              <DraftsIcon />
              <a href="mailto:query@justbaked.com">query@justbaked.com</a>
            </p>
          </div>
          <div className={`${contactStyle.middle_itm}`}>
            <h3>Technical</h3>
            <p>
              <DraftsIcon />
              <a href="mailto:tech@justbaked.com">tech@justbaked.com</a>
            </p>
          </div>
          <div className={`${contactStyle.middle_itm}`}>
            <h3>Call Us</h3>
            <p>
              <CallIcon />
              <a href="tel:+91 9823451211">+91 9823451211</a>
            </p>
          </div>
        </div>
      </div>
      <div className={`${contactStyle.bottom_block}`}>
        <div className={`${contactStyle.left_block}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.816013620719!2d78.75019057506739!3d28.87409007307115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390af95c2aeaafa7%3A0x34b5db95bb3fd576!2sDyomore%20Cafe%2C%20Patisserie%20%26%20Restro%20Bar!5e0!3m2!1sen!2sin!4v1704053245478!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className={`${contactStyle.right_block}`}>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className={`${contactStyle.form_input}`}>
              <label>
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
              {errors.lastName && <p>Name is required.</p>}
            </div>
            <div className={`${contactStyle.form_input}`}>
              <label>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
              />
              {errors.lastName && <p>Email is required.</p>}
            </div>
            <div className={`${contactStyle.form_input}`}>
              <label>
                Subject <span style={{ color: "red" }}>*</span>
              </label>
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
              />
              {errors.lastName && <p>Subject is required.</p>}
            </div>
            <div className={`${contactStyle.form_input}`}>
              <label>
                Description <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
              />
              {errors.age && <p>Description is required</p>}
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
