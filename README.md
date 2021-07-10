# README_generator_BG
Sets up quality README files based on user input.

## JS (Only)

* Imports: inquirer and fs libraries
* The prompt method from the inquirer library is first invoked to ask the user questions about their README in the console
* The user enters a Title, Description, Installation, Usage, Contributing, Tests, Email, and Github username as inputs and chooses a license from a list
* An empty table of contents takes in strings from the header array and makes an ordered list that takes the user to the corresponding header on click
* A site generator generates a site associated with the chosen license and a license badge generator generates a license badge associated with the chosen license
* Variables are created that contain headers and respective text with proper formatting
* A copyright template prints licensing and contact information and restates the title of the project
* A variable is made that will store all text parts to be displayed in the README in an array and all text parts are pushed to that array
* All parts from the array are then concatenated into one formatted string which will be the text for the readme
* Finally, a markdown file is created that is filled with the formatted string text, or an error is thrown based on the fs library writeFile method result

## Video

https://user-images.githubusercontent.com/80599137/125150419-b2788780-e10d-11eb-8b10-e5519f74c1a2.mp4

## Link
https://github.com/WorldUnfurled/README_generator_BG/

## E-Signature

* Brooks Gunn :)
