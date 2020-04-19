// @ts-nocheck
import React from 'react';
import Clock from 'react-live-clock';
import { Calendar, Messages, momentLocalizer, Views } from 'react-big-calendar'
import * as ReactFitText from 'react-fittext';
import * as moment from 'moment';
import 'moment/locale/he';
import { EVENTS, HEADLINE } from "./resources/events";
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

const views = [Views.WEEK, Views.DAY];
const MESSAGES: Messages = {
    day: "יום",
    week: "שבוע",
    previous: "הקודם",
    next: "הבא",
    today: "היום"
}

const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
            minHeight: '80px'
        },
    })

const onDoubleClickEvent = (event) => {
    const message = `${event.title}${event.link ? `\nפותח קישור: ${event.link}` : ""}`;
    alert(message);

    if (event.link) {
        const win = window.open(event.link, '_blank');
        win.focus();
    }
}

function App() {
    return (
        <div className="App">
            <div className="top-bar">
                <ReactFitText compressor={3}>
                    <h1>
                        <span style={{ float: "right", marginRight: "15%" }}>{HEADLINE}</span>
                        <Clock
                            format="HH:mm:ss"
                            interval={1000}
                            ticking={true}
                            style={{ marginLeft: "15%" }}
                        />
                    </h1>
                </ReactFitText>
            </div>
            <Calendar
                localizer={localizer}
                rtl={true}
                messages={MESSAGES}
                events={EVENTS}
                views={views}
                step={30}
                showMultiDayTimes
                defaultDate={new Date()}
                defaultView={Views.WEEK}
                components={{ timeSlotWrapper: ColoredDateCellWrapper }}
                onDoubleClickEvent={onDoubleClickEvent}
                min={new Date(0, 0, 0, 8)}
                max={new Date(0, 0, 0, 13)}
                formats={{
                    dayFormat: "(DD/MM) dddd"
                }}
            />
        </div>
    );
}

export default App;
