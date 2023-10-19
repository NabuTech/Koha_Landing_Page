document.addEventListener("DOMContentLoaded", function() {
    // Get the logo element
    const logo = document.querySelector(".logo");
    const profilePic = document.querySelector(".profile-pic");
    const profileBio = document.querySelector(".profile-bio");

    // Add an event listener to trigger the animations when the logo animation is complete
    logo.addEventListener("animationend", function() {
        // Add the "active" class to start the profile picture animation
        profilePic.classList.add("active");

        // Delay the start of the profile bio animation
        setTimeout(function () {
            profileBio.style.animation = "slide-in 2.5s ease-in-out forwards";
        }, 7500); // Adjust the delay as needed
    });
});
