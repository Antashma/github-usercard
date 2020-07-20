import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/antashma')
  .then(
    (success) => {
      console.log('axios request successful!', success)
      const gitUser = success.data;
      //document.querySelector('.card').appendChild(cardMaker(gitUser));
      function cardMaker(data) {
        // ELEMENTS
        const cardDiv = document.createElement('div');
        //append below to cardDiv
        const cardImg = document.createElement('img');
        const cardInfo = document.createElement('div')
        //append below to cardInfo
        const cardName = document.createElement('h3')
        const cardUsername = document.createElement('p')
        const cardLocation = document.createElement('p')
        const cardProfile = document.createElement('p')
        const cardURL = document.createElement('a') //append this to cardProfile
        const cardFollowers = document.createElement('p')
        const cardFollowing = document.createElement('p')
        const cardBio = document.createElement('p')
        
        //APPEND
        const cardDivChildren = [cardImg, cardInfo]
        const cardInfoChildren = [
          cardName, cardUsername, cardLocation, cardProfile, cardFollowers, cardFollowing, cardBio
        ]

        cardProfile.appendChild(cardURL)
        cardInfoChildren.forEach(el => cardInfo.appendChild(el))
        cardDivChildren.forEach(el => cardDiv.appendChild(el))

        //CLASSES
        cardDiv.classList.add('card')
        cardInfo.classList.add('card-info')
        cardName.classList.add('name')
        cardUsername.classList.add('username')
      
        //CONTENT
        cardImg.src = data.avatar_url
        cardUsername.textContent = data.login
        cardName.textContent = data.cardName
        cardLocation.textContent = data.location
        cardURL.textContent = data.html_url
        cardURL.href = data.html_url
        cardFollowers.textContent = data.followers + ' followers'
        cardFollowing.textContent = data.following + ' following'
        cardBio.textContent = data.bio

        return cardDiv;
      }
      document.querySelector('.cards').appendChild(cardMaker(gitUser))
      
    })
  .catch(
    (fail) =>
      console.log('axios request failed!', fail)
  )

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/



