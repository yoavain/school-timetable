import { Event } from 'react-big-calendar'
import moment from "moment";
import { EVENTS } from "./resources/events";

enum Day {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7
}

export interface ExtendedEvent extends Event {
    link?: string
}

export interface RecurringEvent extends ExtendedEvent {
    weekly?: boolean;
    daysOfWeek?: Day[]

}

export const getEvents = (weeks: number, events: ExtendedEvent[]): ExtendedEvent[] => {
    const startDay = moment().startOf('week');
    const endDay = startDay.add(weeks * 7, "day");

    return events.reduce((acc: ExtendedEvent[], event: ExtendedEvent | RecurringEvent) => {
        return acc;
    }, [])
}

getEvents(3, EVENTS);