import React from "react";
import './EventCard.scss'
import { convertDateToTime } from "../../../utils/dateUtils";

/**
 * EventCard Component
 * Displays information about a specific event, including its name, category, and timing.
 * 
 * Props:
 * @param {string} id - The unique identifier for the event.
 * @param {ReactNode} children - Elements to be rendered within the event card's action area.
 * @param {string} event_name - The name of the event.
 * @param {string} event_category - The category of the event.
 * @param {string} start_time - The start time of the event in ISO string format.
 * @param {string} end_time - The end time of the event in ISO string format.
 * @param {boolean} isDisabled - Flag to indicate if the event is disabled.
 * 
 * The component uses a utility function `convertDateToTime` to format the start and end times of the event.
 */

export const EventCard = ({
  id,
  children,
  event_name,
  event_category,
  start_time,
  end_time,
  isDisabled,
}) => {
  const start = convertDateToTime(start_time);
  const end = convertDateToTime(end_time);

  return (
    <div className="event-card-container" isDisabled={isDisabled}>
      {/* Display the first letter of the event category as an abbreviation or icon */}
      <div className="event-card-category">{event_category?.[0]}</div>
      <div className="event-card-divider" />
      <div className="event-card-content">
        <div className="event-card-title">{event_name}</div>
        <div>({event_category})</div>
        <div>
          {start} - {end}
        </div>
         {/* Container for any action elements like buttons passed as children */}
        <div className="event-card-actions">{children}</div>
      </div>
    </div>
  );
};
