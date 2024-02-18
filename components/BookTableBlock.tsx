import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import  Link  from "next/link";

const BookTableBlock = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="book-table-left-block"></div>
      <div className="book-table-right-block">
        <h2>Reserve Your Table Online</h2>
        <div className="contact-section">
          <form>
            <div className="name-email">
              <div className="input-field">
                <label>You Name</label>
                <input {...register("name", { required: true })} />
                {errors.lastName && <p>Name is required.</p>}
              </div>
              <div className="input-field">
                <label>You Email</label>
                <input {...register("email", { required: true })} />
                {errors.lastName && <p>Email is required.</p>}
              </div>
            </div>
            <div className="date-people">
              <div className="input-field">
                <label>Date and Time</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                  />
                </LocalizationProvider>
              </div>
              <div className="input-field">
                <label>Number of People</label>
                <select>
                  <option selected>People-1</option>
                  <option>People-2</option>
                  <option>People-3</option>
                  <option>People-4</option>
                </select>
              </div>
            </div>
            <div className="input-field-text">
              <label>Anything Special for you ?</label>
              <textarea></textarea>
            </div>
            <div className="check-availabilit-btn">
              <button><Link href="/book-a-table">Check Availability</Link></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookTableBlock;
