/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const entryPoint = document.querySelector(".cards");
axios
  .get("https://api.github.com/users/msteele11101")
  .then(response => {
    
    gitCard(response);

    console.log(response);
  })
  .catch(error => {
    console.log("the data was not returned", error);
  });

// const pullingImg = response.avatar_url;
// const pullingUsername = response.login;
// const pullingName = response.name;
// const pullingLocation = response.location;
// const pullingProfile =  response.html_url;
// const pullingFollowers =response.followers;
// const pullingFollowing = response.following;
// const pullingBio = response.bio;

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "https://api.github.com/users/ccsmith13",
  "https://api.github.com/users/julieantonio",
  "https://api.github.com/users/kjdschneider",
  "https://api.github.com/users/AniiGar",
  "https://api.github.com/users/JRodDvlpr", "https://api.github.com/users/LeTanque"
];

followersArray.forEach(links => {
  axios.get(links)
    .then(user => {
      const ACard = gitCard(user);
      document.querySelector('.cards').append(ACard);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    })

})

// followersArray.forEach(moreCards =>{
//   const anotherCard = gitCard(moreCards);
//   entryPoint.appendChild(anotherCard);
// })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

        

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const gitCard = gitCard => {
  console.log(gitCard);
  const cards = document.querySelector(".cards");
  const newCard = document.createElement("div");
  const gitImage = document.createElement("img");
  const gitInfo = document.createElement("div");
  const newName = document.createElement("h3");
  const gitUser = document.createElement("p");
  const gitLocation = document.createElement("p");
  const gitProfile = document.createElement("p");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const gitBio = document.createElement("p");

  //adding content
  gitImage.src = gitCard.data.avatar_url;
  newName.textContent = gitCard.data.name;
  gitUser.textContent = gitCard.data.login;
  gitLocation.textContent = gitCard.data.location;
  gitProfile.textContent = gitCard.data.html_url;
  gitFollowers.textContent = gitCard.data.followers;
  gitFollowing.textContent = gitCard.data.following;
  gitBio.textContent = gitCard.data.bio;

  // class lists
  newCard.classList.add("card");
  gitInfo.classList.add("card-info");
  newName.classList.add("name");
  gitUser.classList.add("username");

  // appendChild
  cards.appendChild(newCard);
  newCard.appendChild(gitImage);
  newCard.appendChild(gitInfo);
  gitInfo.appendChild(newName);
  gitInfo.appendChild(gitUser);
  gitInfo.appendChild(gitLocation);
  gitInfo.appendChild(gitProfile);
  gitInfo.appendChild(gitFollowers);
  gitInfo.appendChild(gitFollowing);
  gitInfo.appendChild(gitBio);

  // always return
  return newCard;
};
