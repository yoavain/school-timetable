This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before running, you should (manually) create the events file. This is a temporary step until we know what kind of input we can parse. 

* You need to create "resources" folder under src/. (You can create this folder as a symbolic link to your network drive.)
* Create an "events.ts" file in the resources folder. Example:
```js
export const HEADLINE = "מערכת שעות"

export const EVENTS = [
    {
        title: 'שבת',
        allDay: true,
        start: new Date(2020, 3, 18),
        end: new Date(2020, 3, 19),
    },
    {
        title: 'לימודים מרחוק',
        link: "https://zoom.us/j/1234567890",
        start: new Date(2020, 3, 18, 8, 30),
        end: new Date(2020, 3, 18, 9),
    }
]
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
