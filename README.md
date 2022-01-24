# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description
This is a feedback survey that asks the user 4 questions and stores the answers in the redux store in an object. 
The user can utilize the back and next buttons to navigate and change their answers.
After reviewing their answers the user can click submit which will thank them and give them the ability to submit a new survey it then sends their inputs to the DB.
Get requests return the data from the DB to be displayed in the Admin screen.
In the admin screen the user can review all previous surveys, delete any unwanted surveys and flag them for further review.

problems I had were turning the background of the table to red when the feedback is flagged for review:
I fixed this by instead of trying to change the background based on the requests instead to just stringify the request and set the id of the lines to that string
 
 

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
