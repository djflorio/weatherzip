# Weather Zip
A simple web app that uses the [Open Weather Map](https://openweathermap.org/) API. This was built in a limited amount of time as an assignment.

[View live](http://weatherzip.danflorio.com)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![image](./screenshots/screenshot.png)
![image](./screenshots/screenshot2.png)

## Development setup
1. Clone the repo
2. `cd` into the project directory, then run `npm install`.
3. Run the development server with `npm start`.
4. The app will be live at localhost:3000.
5. Run tests using `npm test`.

## Thought Process
I knew that for the smoothest user experience, the data would have to be loaded asynchronously. I chose to go with React in order to easily build out the user interface while providing structure to my code. 

## If I Had More Time I'd...
* Incorporate Redux.
  * The main App component is a bit crowded with methods, and I had to pass props down mutliple generations.
* Utilize more of the data provided by the API.
* Make my own weather icons, rather than using the ones provided by the API, to better suit the overall design.
* Come up with a way to separate the results by day, rather than repeating the day in each row.
  * This would involve writing a method that iterates the API results, and use an algorithm to place them in an object where each key is a day, and each value is an array of weather data for different times on that day.
