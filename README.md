# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot of website preview](./screenshot.png)

### Links

- Solution URL: [https://github.com/cwatso/newsletter-signup](https://github.com/cwatso/newsletter-signup)
- Live Site URL: [https://cwatso.github.io/newsletter-signup](https://cwatso.github.io/newsletter-signup)

## My process

### Built with

- SCSS
- Vite (https://vitejs.dev/)
- Javascript

### What I learned

This project gave me a chance to read up on the discussion regarding client side email validation. It seems there is no perfect method based in frontend development alone that ensures all valid emails will not be excluded. Having a backend that can perform more thorough checks would be ideal, however as this is a frontend only solution I have implemented email validation using regex. I have attempted to make this regex as inclusive as possible to allow the majority of email addresses.

### Useful resources

- [Stackoverflow "How can I validate an email address in JavaScript?"](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) - This thread provided a good amount of insight into the issues with email validation with javascript and provided the regex used in this project.

## Author

- Website - [Clare Watson](https://www.clarewatson.com)
- Frontend Mentor - [@cwatso](https://www.frontendmentor.io/profile/cwatso)
