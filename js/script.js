// Global variable to select div with class of overview where my profile information will appear.
const profileOverview = document.querySelector(".overview");
// Create a global variable called username. In the value add your Github username
const username = "Harobulus";
// Create a global variable to select the unordered list to display the repos list
const repoList = document.querySelector(".repo-list");
// Create an async function to fetch info from your Github profile
const getGithubProfileInfo = async function () {
    const getData = await fetch(`https://api.github.com/users/${username}`);
    const profileData = await getData.json();
    console.log(profileData);
    displayUserInfo(profileData);
};

getGithubProfileInfo();

//Create a function to display fetched user information
const displayUserInfo = function (profileData) {
    const displayDiv = document.createElement("div");
    displayDiv.classList.add("user-info");
    displayDiv.innerHTML = `<figure><img alt="user avatar" src=${profileData.avatar_url} /></figure>
 <div>
   <p><strong>Name:</strong> ${profileData.name}</p>
   <p><strong>Bio:</strong> ${profileData.bio}</p>
   <p><strong>Location:</strong> ${profileData.location}</p>
   <p><strong>Number of public repos:</strong> ${profileData.public_repos}</p>
 </div>`;
profileOverview.append(displayDiv);
fetchRepos();
};

// Create a new async function to fetch repos
const fetchRepos = async function () {
  const connectData = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  const userRepo = await connectData.json();
  console.log(userRepo);

  displayRepoInfo(userRepo);
};


// Display Info About Your Repos
const displayRepoInfo = function (userRepo) {
  userRepo.forEach(function(item, index) {
   let listItem = document.createElement("li");
   listItem.classList.add("repo");
  listItem.innerHTML = `<h3>${userRepo[index].name}</h3>`;

 console.log(listItem);
 repoList.append(listItem);

  });
};

