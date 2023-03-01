
# Table of Contents 
[Project Description](#project-description)

[Overview](#overview)

[Detailed View](#detailed-view)
  - [Trending Module](#trending-module)
  - [Styling Module](#styling-module)
  - [My Boards Module](#my-boards-module)

[Installation](#installation)

[Technologies Used](#technologies-used)

[Author](#Author)


# Project Description
STYLY is a cross-platform mobile app for fashion lovers to capture the most current fashion trends, to get some personalized styling ideas. 

This app was designed and developed under a very limited timeframe of 3 days, I learnt all technologies involved from scratch (React Native, Firebase, Firestore etc), using Figma and React Native and CSS to design and build UI components, Firestore and Firebase storage to handle server side functionalities such as CRUD, user authentication and authorization. 

# Overview 
STYLY has 3 main modules shown below: 
  - Trending Module: This module allows user to check and save the most recent runway shows and fashion trends to a boards for future reference. 
  - Styling Module: This module gives user the opportunities to get some personalized styling ideas by taking a quick fashion quiz of 10 questions, and user can save those fashion ideas in a board.
  - My boards Module: This module holds all user saved boards from Trending and Styling modules, it also allows user to delete a entire board or a picture from a specific board.
  
<pre>
<img src="https://user-images.githubusercontent.com/3084586/221339547-1d0faeb8-14b6-4296-96d8-cf9de63eb2ce.gif"  width="250">    <img src="https://user-images.githubusercontent.com/3084586/221339768-d4b74a28-0532-47cf-983d-5c44220d0851.gif"  width="250">    <img src="https://user-images.githubusercontent.com/3084586/221339888-98e610b4-a111-4622-9922-e035e7a2dd9d.gif"  width="250">
</pre>


# Detailed View 
### Trending Module 
This Trending module focus on providing the most up to date fashion info and trends which includes features below : 
  - Show fashion info in a card component 
  - Navigate through pages using stack and tab component from React-native-navigation package
  - Add new board and save picture to the board using modal window and alert component

<img src="https://user-images.githubusercontent.com/3084586/221671464-cb1f6a9e-be5e-4cea-879f-ecd2a5a75c03.png"  width="250">  <img src="https://user-images.githubusercontent.com/3084586/221671440-7a23318e-51ca-4a54-bb54-7de76bef7d42.png"  width="255">

### Styling Module
This Styling module aims to provide users personalized styling inspirations which includes features below : 
  - A quick fashion quiz with 10 different preferrences 
  - Generate 2 total looks based on fashion preferrences provided by the user using a recommendation algorithm

<img src="https://user-images.githubusercontent.com/3084586/221677381-2725aa64-8ff9-4518-9017-d3b6a92f0746.png"  width="250">  <img src="https://user-images.githubusercontent.com/3084586/221953335-6f3b750c-aa7f-4d98-aecd-b34ea09ee68b.gif"  width="255">


### My Boards Module
This module gives user all controls of their saved boards by providing features below: 
  - Pull to refresh feature to get the most current boards info 
  - Create, Read, Update and Delete board or saved picture in a board by sending request to Firestore and Firebase storage

<img src="https://user-images.githubusercontent.com/3084586/221952246-9829e54f-02a1-48ad-81f3-d5748c98f412.gif"  width="241">   <img src="https://user-images.githubusercontent.com/3084586/221695565-4ca8ba43-2d76-4e5b-99f8-d08d8123c4e0.png"  width="259">


# Installation 
  To **build** and install all the dependencies
```
  npm install 
```

  To start
 ```
  expo start
```


# Technologies Used 
  - React Native
  - Firestore
  - Firebase storage
     
  - Deployment 
    - XCode

# Author 
<a href="https://github.com/palmigloo"><kbd><img width="175" alt="Abigail" src="https://user-images.githubusercontent.com/3084586/208263347-363a0895-7ede-40f6-8f82-83434178ed66.png"></kbd></a>

Trilingual Software engineer professional based in Mountain View, CA.

8 years international working experience in high tech and luxury retail, proficient in Full-stack development, with creativity and cross-cultural communication skills. 

Start-up experience with multitasking abilities, working with client across Gaming, Media, eCommerce and Telecom industries.



