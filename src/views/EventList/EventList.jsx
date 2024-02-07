import React from "react";
import { useFetchEvents } from "./useFetchEvents";
import { AllEvents } from "./AllEvents";
import { SelectedEvents } from "./SelectedEvents";
import './EventList.scss'

export const EventList = () => {
  const { isLoading } = useFetchEvents();

  return (
    <div className="event-list-container">
      <AllEvents isEventLoading={isLoading} />
      <SelectedEvents />
    </div>
  );
};
