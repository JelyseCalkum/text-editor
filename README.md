## Summary

JATE is a browser-based text editor that qualifies as a PWA due to its single-page application nature. It could be used as a valuable tool for developers who need to take notes or create code snippets, regardless of internet connectivity. This ensures that the information they generate can be retrieved later with confidence.

You can check out the deployed application here: 
Or view the GitHub repository here: https://github.com/JelyseCalkum/text-editor

## Installation

JATE can be run either through the browser, using the deployed link above, or to use the application locally, you can follow the instructions below:

* Clone the repository, in order to obtain all necessary files.

* Run _npm install_ in your comand line to install all dependencies.

* Run _npm start_ to start the backend.

* View the application via local host.

## Usage

Use the deployed URL in order to start the application

![jate-screenshot](https://user-images.githubusercontent.com/115381607/226982867-2db462e9-a613-410c-9f2b-915cd7337b15.png)

You can save any code snippet or notes in the editor, and the IndexedDB will automatically store the content when the window loses focus. Upon reopening the text editor, the content will be retrieved from the IndexedDB.

By clicking the Install button, you can download the web application as an icon on your desktop and use it with or without internet connection.

## Technologies Used

This application uses Node.js, Express.js, IndexedDB, PWA.

## License

The JATE Text Editor is released under the ISC license.

## Acknowledgements

Thank you to the UofO Coding Bootcamp for providing the starter code for this project, as well as providing me the knowledge and tools needed in order to complete the application.
