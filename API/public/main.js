const url = "http://api.football-data.org/v1/competitions/445/leagueTable";
const myRequest = new Request(url);
const leagueStandings = document.querySelector('.leagueStandings');

fetch(myRequest)
  .then(function(response){
    if(response.status == 200){
      return response.json();
    }
  })
  .then(function(response){
    let standings = response.standing;
    standings.forEach(function(team){
      let listItem = document.createElement('li');
      listItem.innerText = team.teamName;
      leagueStandings.appendChild(listItem);
    });
  });
