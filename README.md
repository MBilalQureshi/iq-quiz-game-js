# IQ Quiz Game
This website is an interactive quiz game. People who loves to be challenged can play this game and try to answer the questions in time. This game is not only for those who wants to check their IQ but also for everyone who wants to learn something new.

In this website one can select the difficulty level and play the game on that level. Based on correct and false answers the IQ will be shown in result section.

Click [here](https://mbilalqureshi.github.io/iq-quiz-game-js/) to see the live website. 

![Screenshot of IQ Quiz Game website mockup](/documentation/readme_img/Mockup-p2-js.png)

## User Stories

### As a Challenger
- I can nagivate through the website without any issue.
- I can put my knowledege to test .
- I can select from the levels of difficulty.
- I can keep track of correct answers.
- I can keep track of incorrect answers.
- I can restart game once its over.
- I can get my IQ level result in the end.

### As a Learner
- I can navigate throughout this website witout an issue.
- I can come back to learn again if certain answers are incorrect
- I can see the score if an answer is incorrect for future reference.
- I can select from the levels of difficulty.
- I can increase my knowledge based on each try after playing the game.

## Features
- Header
    - On top of the page header is clearly visible to users and it can tell by its name what the website is about.

![Screenshot of header](/documentation/readme_img/header.png)

- Main Screen
    - On Main screen once user is greeted, he/she is asked to enter a username.
    - The username should not exceed 10 charcters.

![Screenshot of main screen](/documentation/readme_img/main-screen.png)

- Difficulty Panel
    - Here user can select the difficulty of the game.
    - User name is visible on this screen.

![Screenshot of difficulty panel](/documentation/readme_img/select-difficulty.png)

- Question's Panel
    - User is able to select from one of four options.
    - For medium and easy difficulty 30 seconds are given but for hard difficulty 120 seconds are given.
    - Username and timer is given on the top of the screen.
    - The corrent and incorrect counter is on the bottom. If the answer is correct or incorrect after clicking one of the option, the counter increases by one.
    - If the user is not able to provide answer in time, incorrect counter is increased by one.

![Screenshot of Question's Panel](/documentation/readme_img/questions-panel.png)

- Loading Result
    - Once last question is answered the timer stops and loading result appears in the bottom of last question to give more gaming experince.

![Screenshot of Loading Result](/documentation/readme_img/loading-result.png)

- Result Panel
    - Here user can see the total score.
    - Average of his/her IQ.
    - Status of the IQ.

![Screenshot of Loading Result](/documentation/readme_img/result-panel.png)

## Technologies Used
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JS](https://www.javascript.com/)

### Frameworks Libraries and Programmes Used
- [Font Awesome](https://fontawesome.com/) used for icons.
- [GitHub](https://github.com/) used to host repository.
- [GitPod](https://gitpod.io/) used to develop project and organise version control.
- [GitHub Pages](https://pages.github.com/) used to deploy the site.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) for performance review.
- [Cloud coverter](https://cloudconvert.com/webp-converter) to convert image.
- [Jigsaw](https://jigsaw.w3.org/css-validator/) for css validation.
- [Jshint](https://jshint.com/) for javascrpt validation.
- [W3C Markup](https://validator.w3.org/)  for html validation.

## Testing
To see complete testing section, kindly click [here](/TESTING.md).

## Deployment
### GitHub Pages
This website was deployed to GitHub pages. The steps of deployment are mentioned below.
1. Log in to GitHub and locate [IQ Quiz Game](https://github.com/MBilalQureshi/iq-quiz-game-js) repository.
2. At the top of the page, click "Settings" button available in menu.
3. Scroll down until you find "GitHub Pages" section and click it.
4. Under the branch, there is a drop down. Select "Main" from it and click save.
5. The same page will automatically refersh. 
6. On top of "GitHub Pages", it is now mentioned that "Your site is live at https://mbilalqureshi.github.io/iq-quiz-game-js/".

### Forking the GitHub Repository
With Forking one can make a copy of a repository and to view or make changes in it without affecting the orignal repository. Following are the steps to do this.
1. Log in to GitHub and locate [IQ Quiz Game](https://github.com/MBilalQureshi/iq-quiz-game-js) repository.
2. At the top right side of the page just below the navigation bar, locate the fork button.
3. You will now have a copy of the repository.

### Making a Local Clone
1. Log in to GitHub and locate [IQ Quiz Game](https://github.com/MBilalQureshi/iq-quiz-game-js) repository.
2. Just below the repository name, click "Code".
3. There is an option to copy HTTPS link. Press copy icon.
5. Open Git Bash on local machine.
4. Change the current working directory to the location where we want the cloned directory to be made.
5. Type git clone on bash and paste the HTTPS URL we copied earlier.
6. Press Enter. local clone will be created.

## Credits
### Content
- Basic concepts of using javascript along html ans css is understood from Code Institute's [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) project.
- The icons in header and favicon is taken from [Font awesome](https://fontawesome.com/)

### Media
- The background image on main page is taken from [Pixabay](https://www.pexels.com/photo/view-of-elephant-in-water-247431/) available on pexels website.

### Extra Help
- Shadow box effect is copied from [this](https://getcssscan.com/css-box-shadow-examples) link.  
- Code of countdown is taken from [this](https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward) link.
- IQ related questions are taken from following links:
    - [Link 1](https://www.proprofs.com/quiz-school/story.php?title=easy-iq-test)
    - [Link 2](https://www.proprofs.com/quiz-school/story.php?title=iq-test_70kt)
    - [Link 3](https://www.allthetests.com/iq-tests/quiz18/1139060031/very-difficult-iq-te)
    - [Link 4](https://www.proprofs.com/quiz-school/story.php?title=iq-test-unfinished)
- Learned concept of select start disable concept inside js using [this](https://developer.mozilla.org/en-US/docs/Web/API/Node/selectstart_event) link.
- Learned concept of generating random array from [this](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1316s) link.

### Acknowledgements
- My Mentor Antonio Rodriguez for helpful feedbacks during project development.
- Code Institute team for pointing in right direction.