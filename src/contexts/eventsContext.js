import { createContext, useContext, useMemo, useReducer, useEffect} from "react";
import { eventsReducer } from "../reducers/eventsReducer";
import { initialState } from "./initialState";

export const EventsContext = createContext();

export const useEventsContext = () => {
  return useContext(EventsContext);
};

const LOCAL_STORAGE_KEY = "selectedEvents";

export const EventsProvider = ({ children }) => {
  // Attempt to load initial state from localStorage
  const savedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || initialState;

  const [state, dispatch] = useReducer(eventsReducer, savedState);

  // Update localStorage when selectedEvents changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const { state: memoizedState } = useMemo(() => ({ state }), [state]);

  return (
    <EventsContext.Provider value={{ ...memoizedState, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};
