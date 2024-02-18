import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/css/book-a-table.module.scss";
import { format } from "date-fns";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// const bookTable = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const handleDateChange = (newDate: Date | null) => {
//     setSelectedDate(newDate);
//   };

//   return (
//     <div className={`${styles.bookTable}`}>
//       <h1>Book a Table</h1>
//       {/* <DateTimePickerComponent /> */}
//       <div className={`${styles.bookCalender}`}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DateCalendar value={selectedDate} onChange={handleDateChange} />
//         </LocalizationProvider>
//       </div>
//       <div className={`${styles.bookDropDate}`}>
//         <DateTimePickerComponent />
//       </div>
//     </div>
//   );
// };

// export default bookTable;

// const DateTimePickerComponent = () => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<Date | null>(null);
//   const formatDate = (date: Date | null) => {
//     return date ? format(date, "MMM d yyyy HH:mm:ss") : "";
//   };

//   return (
//     <div className={`${styles.bookTableDate}`}>
//       <form
//         method="POST"
//         action="https://www.giulianorestaurant.co.uk/booking/"
//         // onSubmit={handleSubmit}
//       >
//         <input type="hidden" name="action" value="booking_request" />

//         {/* Reservation Section */}
//         <div className={`${styles.EnterDetails}`}>
//           <div>
//             <fieldset className="reservation">
//               <legend>
//                 <h1>Please Enter</h1>
//               </legend>

//               {/* Date */}
//               <div className="rtb-text date">
//                 <label htmlFor="rtb-date">
//                   <h3>Date</h3>
//                 </label>
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={(date) => setSelectedDate(date)}
//                   showTimeSelect
//                   timeFormat="p"
//                   timeIntervals={15}
//                   dateFormat="Pp"
//                   placeholderText="Select Date and Time"
//                 />
//               </div>

//               {/* Party Size */}
//               {/* <div className="rtb-select party">
//               <label htmlFor="rtb-party">Party</label>
//               <select
//                 name="party"
//                 id="rtb-party"
//                 // value={bookingData.party}
//                 // onChange={handleInputChange}
//                 required
//                 aria-required="true"
//               >
//                 {Array.from({ length: 100 }, (_, index) => (
//                   <option key={index + 1} value={index + 1}>
//                     {index + 1}
//                   </option>
//                 ))}
//               </select>
//             </div> */}
//             </fieldset>
//           </div>
//           <div>
//             {/* Contact Details Section */}
//             <fieldset className="contact">
//               <legend>
//                 <h1>Contact Details</h1>
//               </legend>

//               {/* Name */}
//               <div style={{paddingBottom:"8px"}}>
//                 <label htmlFor="rtb-name">Name: </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="rtb-name"
//                   // value={bookingData.name}
//                   // onChange={handleInputChange}
//                   required
//                   aria-required="true"
//                 />
//               </div>

//               {/* Email */}
//               <div style={{paddingBottom:"8px"}}>
//                 <label htmlFor="rtb-email">Email: </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="rtb-email"
//                   // value={bookingData.email}
//                   // onChange={handleInputChange}
//                   required
//                   aria-required="true"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label htmlFor="rtb-phone">Phone: </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="rtb-phone"
//                   // value={bookingData.phone}
//                   // onChange={handleInputChange}
//                 />
//               </div>

//               {/* Message */}
//               {/* <div className="rtb-textarea message">
//                 <label htmlFor="rtb-message">Message</label>
//                 <textarea
//                   name="message"
//                   id="rtb-message"
//                   // value={bookingData.message}
//                   // onChange={handleInputChange}
//                 ></textarea>
//               </div> */}
//             </fieldset>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className={`${styles.submitButton}`}>
//           <button type="submit">Request Booking</button>
//         </div>
//       </form>
//     </div>
//   );
// };

const bookTable = () => {

  return (<>
  <div className={styles.book_table_page} >
    <div className={styles.top_block}>
    </div>
  </div>
  </>)
}
export default bookTable;
