# Immaculate_Wizardry
This application is run from the command line
## Video Demo
#### URL for the Video Demo: https://drive.google.com/file/d/1mybDEIoZMyGD5J1DGp99Mu99zgsyRG2c/view
#### Screenshot of the application:
<img width="1888" alt="Screenshot MyTeam" src="https://user-images.githubusercontent.com/105945177/213898962-0a730da0-9cdc-4d58-986f-bca2f38fe115.png">

## Installation
To use this application, you must have node.js, inquirer, and MySQL installed. The MySQL2 and console.table packages are also required. After that just follow these steps:

- Clone this repository
- Open in VS Code
- Open in Itegrated Terminal
  - Installation of a specific version of inquirer is required. To do this use "npm i inquirer@8.2.4"
  - Installation of Jest is required to initiate tests. To do this use "npm i jest"
- Run "npm init"
- Run "npm install"
- Run "npm run test" to initaiate tests
- Run "node index.js" to initiate the application

## Usage
When the application initiates a series of prompts to add the Manager's information. Then it allows you to add an Enginner or Intern. When you've finshed adding the desired team members choose "Finish Building". This generates an "index.html" file in the "dist" folder. Right click on the generated "index.html" file and select "Open with Live Server" to view the generated team profile.
