import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateTimePicker({ label, selectedDate, handleDateChange }) {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div style={{ width: "100%" }}>
      <p
        style={{
          fontSize: "14px",
          color: "#8A8A8A",
          marginBottom: 0,
        }}
      >
        {label}
      </p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="d MMMM yyyy"
        customInput={
          <button type="button" className="btn-pilih-penerbangan">
            {selectedDate
              ? selectedDate.toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : currentDate}
          </button>
        }
        showPopperArrow={false}
        popperPlacement="bottom-start"
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: "viewport",
          },
        }}
      />
    </div>
  );
}

export default DateTimePicker;
