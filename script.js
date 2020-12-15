// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/


window.addEventListener("load", function () {
   try {
      fetch("https://handlers.education.launchcode.org/static/planets.json")
         .then((response) => {
            return response.json()
         })
         .then((json) => {
            const missionTarget = document.getElementById("missionTarget");

            const missionDestination = Math.round(Math.random() * 5);

            missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[missionDestination].name}</li>
            <li>Diameter: ${json[missionDestination].diameter}</li>
            <li>Star: ${json[missionDestination].star}</li>
            <li>Distance from Earth: ${json[missionDestination].distance}</li>
            <li>Number of Moons: ${json[missionDestination].moons}</li>
         </ol>
         <img src="${json[missionDestination].image}">
         `;
         });

      let form = document.querySelector("form");
      form.addEventListener("submit", function (event) {

         const pilotName = document.querySelector("input[name=pilotName]");
         const copilotName = document.querySelector("input[name=copilotName]");
         const fuelLevel = document.querySelector("input[name=fuelLevel]");
         const cargoMass = document.querySelector("input[name=cargoMass]");

         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");


         } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Each field must contain valid information!");


         } else {

            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is Ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotName.value} is Ready`;

            if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch!";
               document.getElementById("cargoMass").innerHTML = "Shuttle mass too large for take off!";
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red";
               document.getElementById("faultyItems").style.visibility = "visible";
            };

            if (fuelLevel.value < 10000) {
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch!";
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red";
               document.getElementById("faultyItems").style.visibility = "visible";
            };

            if (cargoMass.value > 10000) {
               document.getElementById("cargoMass").innerHTML = "Shuttle mass too large for take off!";
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red";
               document.getElementById("faultyItems").style.visibility = "visible";
            };

            if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
               document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
               document.getElementById("launchStatus").style.color = "green";
               document.getElementById("faultyItems").style.visibility = "visible";
            };

         };
         event.preventDefault();
      });
   } catch (err) {
      console.error(err)
   };
});

