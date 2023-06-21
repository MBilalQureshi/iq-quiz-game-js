# Testing
- I confirmed that input field can't be left empty.
- I confirmed that both buttons work.
- I confirmed that all the items of list are clickable.

## Browser Compatibility
- I confirmed that this website works on following browsers.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](/documentation/readme_img/chrome.png) | Works as expected |
| Firefox | ![screenshot](/documentation/readme_img/mozilla.png) | Works as expected |
| Edge | ![screenshot](/documentation/readme_img/edge.png) | Works as expected |

## Responsiveness

I confirmed that website is completely responsive on different screen sizes.

| Device | Main Panel | Notes |
| --- | --- | --- |
| Laptop (Hp probook - 1536 x 864)| ![screenshot](/documentation/readme_img/hp-pro-book.png) | Works as expected |
| XS Mobile (DevTools - Galaxy S9+ - 320 x 658) | ![screenshot](/documentation/readme_img/galaxys9plus.png) | Works as expected |
| Small Mobile (DevTools - iphoneX - 375 x 812) | ![screenshot](/documentation/readme_img/iphoneX.png) | | Works as expected |
| Medium Mobile (DevTools - Pixel 3 - 393 x 786) | ![screenshot](/documentation/readme_img/pixel3.png) | Works as expected |
| Large Mobile (DevTools - S20 Ultra - 412 x 915) | ![screenshot](/documentation/readme_img/s20ultra.png) | Works as expected |
| Small Tablet (DevTools iPad Mini - 786 x 1024) | ![screenshot](/documentation/readme_img/ipadmini.png) | Works as expected |
| Tablet (DevTools iPad Pro - 1024 x 1366) | ![screenshot](/documentation/readme_img/ipadpro.png) | Works as expected |
| Nest Hub Max (DevTools - 1280 x 800) | ![screenshot](/documentation/readme_img/nest-hub.png) | Works as expected |

## Validator Testing

### HTML validator

I used the recommended [W3C validator](https://validator.w3.org/) to validate my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Main Page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmbilalqureshi.github.io%2Fiq-quiz-game-js%2F) | ![screenshot](/documentation/readme_img/html-validator.png) | Pass: No Errors |

### CSS validator
- I confirmed that no errors were returned when CSS code was passed through [jigsaw validator](https://jigsaw.w3.org/css-validator/).

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmbilalqureshi.github.io%2Fiq-quiz-game-js%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](/documentation/readme_img/css-validator.png) | Pass: No Errors |

### JSHint 
- I confirmed that no errors were returned when JS code was passed through [jshint validator](https://jshint.com/).

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](/documentation/readme_img/jshint.png) | Pass: No Errors |

## Accessibility

### Fonts and colors

I confirmed that fonts and colors that are chosen are easy to read and enhances user experience.

### Lighthouse Audit
- I have used lighthouse devtool after deployment to fix major issues. Issues found by Lighthouse is mentioned below.
    - Reduce background image sizes.
    
Following are the results of Lighthouse audit of every page for mobile and desktop. Accessibility is 100 in every case.

| Page | Size | Screenshot |
| --- | --- | --- |
| Home | Mobile | ![screenshot](/documentation/readme_img/mobile-lighthouse.png) |
| Home | Desktop | ![screenshot](/documentation/readme_img/desktop-lighthouse.png) |

## List of bugs and issues
1. Background image was not adjusting as per content on top of it.
    #### Fix:
    - Set height to 100vh.

2. The main label was set to absolute which was causing it to fall on invalid position on different screens.
    #### Fix:
    - Set position to relative

3. The username logo keeps moving to right on result screen.
    #### Fix:
    - Set position to absolute for username logo.
    
4. The text box get overflowed from left on small screens.
    #### Fix:
    - inside media query set width to -webkit-fill-available.

5. Inside result section the header merges with the username logo.
    #### Fix:
    - Clear on both side was required one for username logo and other for timer.

6. The timer function was not working at all. What I was getting was skipping of multiple seconds in one second after every question.
    #### Fix:
     - Used the solution provided in [this](https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward) and modified it later in program

7. I had no idea how to make an array change its sequence randomly after each iteration.
    #### Fix:
    - I used the solution provided by [this](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1316s) you tuber.

9. Currently there is an issue of "Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'."
    #### Fix:
    - Requires no fix as this caused by Google's initiative (FLoC).

10. I accidently put every event inside a for loop that caused multiple error.
    #### Fix:
    - Removed the for loop as it was not required anyway and move events in their locations.

11. There were a few question where I didn't set the valid solution which caused unexpected behaviors.
    #### Fix:
    - Remove multiple correct answers set in list and set valid answers where not set.

12. The input text was taking long strings as input of username.
    #### Fix:
    - Limit username length by 10 inside input tag.

## Unfixed bugs
- No unfixed bugs.

Return back to the [README.md](/README.md) file.


