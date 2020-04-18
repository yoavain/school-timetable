This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before running:

* You need to create "resources" folder under src/
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

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
