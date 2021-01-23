

const moonPath = "M20 27C20 42.1878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 20 11.8122 20 27Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

// We need to click on the sun
darkMode.addEventListener('click', () => {
    // we need to use anime.js 
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo", // Make sure to set it as String
    });

    // Add Different animations to the timeline
    timeline.add({
        targets : ".sun", // similar to querySelector to grab DOM element
        d : [
            { value : toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets : "#darkMode", // this animation starts when the first timeline element finishes. 
        rotate: 330
    }, '-= 350' // way faster now
    )
    .add({
        targets : "section",
        backgroundColor : toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        color : !toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
    }, '-= 700'
    );

    // Everytime we click on the sun I want that toggle to switch 
    toggle = !toggle;
    
})