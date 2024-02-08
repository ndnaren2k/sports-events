import React, { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useEventsContext } from "../../contexts/eventsContext";
import { EventCard } from "../components/EventCard/EventCard";
import { actions } from "../../reducers/Actions";
import { Button } from "../components/Button/Button";
import { MAX_SELECTED_EVENTS, eventActionMap } from "./constants";
import {
  isEventDisabled,
} from "./utils";
import './EventList.scss'
import { Loader } from "../components/Loader/Loader";

export const AllEvents = ({ isEventLoading }) => {
  const { events, selectedEvents, dispatch } = useEventsContext();

  const sortedEvents = useMemo(
    () =>
      events.sort((e1, e2) => e1.start_time - e2.start_time),
    [events.length]
  );

  const handleEventClick = (e) => {
    const { eventId, action } = e.target.dataset;

    if (action === eventActionMap.SELECT) {
      if (selectedEvents.length >= MAX_SELECTED_EVENTS) {
        return toast.error("Only 3 events can be selected");
      }
      dispatch({ type: actions.SELECT_EVENT, payload: Number(eventId) });
    }
  };



  return (
    <div className="event-list-wrapper">
      <h2 className="event-list-title">All Events</h2>
      {isEventLoading ? (
        <div className="loader-alignment">
          <Loader />
        </div>
      ) : (
        <div className="event-list" onClick={handleEventClick}>
          {sortedEvents.map((event) => {
            const isDisabled = isEventDisabled(selectedEvents, event);
            return (
              <EventCard key={event.id} {...event} isDisabled={isDisabled}>
                <Button
                  data-event-id={event.id}
                  data-action={eventActionMap.SELECT}
                  disabled={isDisabled}
                  classname="custom-btn"
                >
                  Select
                </Button>
              </EventCard>
            );
          })}
        </div>
      )}
    </div>
  );
};
