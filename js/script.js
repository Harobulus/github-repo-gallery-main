// Global variable to select div with class of overview where my profile information will appear.
const profileOverview = document.querySelector(".overview");
// Create a global variable called username. In the value add your Github username
const username = "Harobulus";
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

};

