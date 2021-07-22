// on click of the button loadTeam
// create and load employee card with relevant mark up
// these cards will be loaded in the div with id=team

//  member = {
//     empid: "CS1",
//     name: "Aarti G.",
//     team: "CSE",
//     company: "Contenstack",
//   },
const loadTeam = document.getElementById("loadTeam");
const teamDiv = document.getElementById("team");
const loadTeamName = () => {
  // read data from team -- its present in an array called team
  team.forEach((member) => {
    // do something for each member-- create a para
    const para = `<p id=${member.empid}>${member.name}</p>`;
    console.log(para);
    // append that para in team div
    teamDiv.innerHTML = teamDiv.innerHTML + para;
  });
};

loadTeam.addEventListener("click", loadTeamName);

// next steps
// click on a button
// make api call
// fetch data
// render data on the page
