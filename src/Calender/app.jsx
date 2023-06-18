import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import "./app.css";

export default function CalendarComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from the JSON file
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="calendar">
      <div className="Header">
        <Link to="/helpline">
          <div className="backarrow">
            <IoIosArrowBack />
          </div>
        </Link>
        <p>🏳️‍🌈 Calendar</p>
        <Link to="/">
          <div className="forwardarrow">
            <IoChevronForward />
          </div>
        </Link>
      </div>
      <div className="calendarBody">
      <Calendar
        tileContent={({ date }) => {
          const event = events.find(
            (event) => {
              const eventDate = new Date(event.date);
              return (
                eventDate.getDate() === date.getDate() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear()
              );
            }
          );

          return event && <div className="event-marker">{event.name}</div>;
        }}
      />
      </div>
    </div>
  );
}
