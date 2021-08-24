# Calculate the insurance cost

This was an assignment for the Node.js portion of my coding bootcamp. It is a server that has a restful API endpoint allowing the client to submit a POST request with information on the distances a fleet of cars have driven, and responds with the corresponding insurance cost.

**Stack used**: JavaScript - Node.js - Express

## The brief

These were the detailed instructions for the assignment:

- Create a Node.js app that includes a module that calculates the insurance cost on a fleet of vehicles insured with pay-as-you-drive insurance. The app should have an endpoint that takes as input the kilometers driven for each vehicle. For each item, the app should calculate the insurance cost based on the kilometers driven, before finally summing all the values and returning it as the result.
  Use the table below to calculate insurance costs:
  | Kilometers driven | Insurance cost |
  |---|---|
  | 0-20 | R200 |
  | 21-50 | R200 + R1/km above 20km |
  | 51-100 | R220 + R0,80/km above 50km |
  | 101+ | R260 + R0,50/km above 100km |
- Write a test for your calculator, using the Mocha framework and Chai assertions.

## My contribution

Some of the files and folders in this repository are Express-generated files. The code I wrote can be found in:

- /insuranceCalculator.js
- /routes/index.js
- /test/

## How to install this project

There is no front-end to this Express app, so you can clone the repository, fire up the server on your local computer, and then use Postman to try out the API.

1. Clone the repository on Github into a directory of your choice.
2. If you don't already have Node and Npm installed, go ahead and do that first.
3. Navigate to the directory where you saved the repository, and open a new terminal window. Type `npm install` to get the node modules on your local computer.
4. Type `npm start` to get the server up and running.
5. Go to www.postman.com and dign up ior login.
6. Navigate to your dashboard and click "Create request".
7. From the dropdown menu, select "POST" as the request method.
8. The url should be 'http://localhost:3000/api'.
9. Under that, in the body tab, select "raw" as the input form.
10. In the text editor below, type a JSON object that has a key "distances" which should have as value an array of numbers representing the distances your cars have driven. It should look something like this:
    ```
    {
        "distances": [5, 25, 55, 105]
    }
    ```
11. CLick send and you'll get the result of your calculation request in the 'response' display area at the bottom of the page.
