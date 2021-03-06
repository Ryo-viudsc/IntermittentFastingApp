# IntermittentFastingApp

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="./src/images/IFLogo.png" alt="Logo" width="300" height="300">
  </a>

  <h3 align="center">IF(intermittent fasting) Timer</h3>

 <p align="center">
    <a href="https://expo.io/@kiharar/projects/intermittentfastingapp">View Demo</a>
 </p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="Launch">Launch</a>
      <ul>
        <li><a href="#Launch">Android Phone</a></li>
        <li><a href="#Launch">IOS devices</a></li>
      </ul>
    </li>
    <li><a href="#References">References</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
<br/>
As the lockdown continues, many people are facing the problem of weight gain. I believe that one reason is simply 
because it has been a sedentary time, without much movement.
So, I ended up finding intermittent fasting quite beneficial and decided to build this app. 

<br/>
<h2>Main functionalities of this project are the following: </h2>
<br/>

<h5>1, keep track of your fasting time and inform you about what's happenning in your body as the fasting continues. As your fasting progresses, tap the modal tab at the top of the timer screen to visualize the stages of your fasting. 
</h5>

<table>
  <tr>
    <td>Introduction</td>
     <td>Timer Setting</td>
     <td>Carousel Components</td>
  </tr>
  <tr>
    <td><img src="./src/images/README.PICS/gif1-1.gif" width=170 height=380></td>
    <td><img src="./src/images/README.PICS/gif1-2.gif" width=170 height=380></td>
    <td><img src="./src/images/README.PICS/gif1-3.gif" width=170 height=380></td>
  </tr>
</table>

<h5>2,  help people with fasting and coming up with meal plans to break their fast.
Using spoonacular API, this app covers more than 5000 recipes, including every single ingredient and nutrient for each meal. 
</h5>

<table>
  <tr>
    <td>Meals Idea Page</td>
     <td>Liked Meals Page</td>
     <td>Details for liked meals</td>
  </tr>
  <tr>
    <td><img src="./src/images/README.PICS/gif2-1.gif" width=170 height=380></td>
    <td><img src="./src/images/README.PICS/gif2-2.gif" width=170 height=380></td>
    <td><img src="./src/images/README.PICS/gif2-3.gif" width=170 height=380></td>
  </tr>
 </table>

<h5>3,  (this feature is still in development) you can see who is fasting right now in order to motivate each other during fasting, using Amazon cognito, S3, and Lamda function.
</h5>
<img src="./src/images/README.PICS/active.jpg" width=295 height=112>
<h5>
  -  filter function to filter meals idea <br/>
  -  make the liked meals removable from the liked list <br/>
</h5>



## Built with 
 - TypeScript / ReactJS / JavaScript - ES6 
 - ReactNative / Expo / Axios / ReactNative AsycnStorage / TSlint / formik / ReactNative-Community libraries 
 - VScode / Git / Gimp / Movavi 
 
 - Spoonacular API (for all the recipes' information)
 - envato elements (for all the thumbnails and images)


## Launch

***:iphone:Android Phone*** 
<br/>
  With an Android phone, you can scan this QR code with your Expo mobile app to load this project immediately.
<br/>
  <img src="./src/images/README.PICS/QRcode.jpg" alt="Logo" width="100" height="100">

***:iphone:IOS*** 
<br/>
  1, After downloading the app "Expo" from AppleStore, with the link https://expo.io/@kiharar/projects/intermittentfastingapp, you can request a link with your email or phone number.
<br/>
  2, On Expo app, go to Profile and "Sign in your acccount." 
  Type "iftimer.test@gmail.com" for email and "iftimer" for password (please make sure that they're all small-letters, the first letter can be auto-capitalized sometimes)
<br/>
  3, You should be able to load the project from the link while you are logging-in on Expo app.

  
***:warning:Attention***
The authentification for sign-in and sign-up is omitted so that you are not required to put a valid mail address and password on my project. 
You could type a random password and a email address that ends with mail formats. (e.g. abc@gmail.com)


## References
https://reactnative.dev/ <br/>
https://reactnavigation.org/ <br/>
https://docs.expo.io/<br/>
https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2<br/>
https://www.healthline.com/nutrition/intermittent-fasting-guide<br/>
https://lifeapps.io/fasting/the-5-stages-of-intermittent-fasting/<br/>
https://www.dietdoctor.com/intermittent-fasting<br/>
