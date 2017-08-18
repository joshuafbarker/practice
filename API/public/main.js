const url = "http://api.football-data.org/v1/competitions/445/leagueTable";
const myRequest = new Request(url);
const leagueTable = document.querySelector('.leagueTableBody');

fetch(myRequest)
  .then(function(response){
    if(response.status == 200){
      return response.json();
    }
  })
  .then(function(response){
    let standings = response.standing;
    let listItems = '';
    standings.forEach(function(team){
      let item = `
        <tr>
          <td>${team.position}</td>
          <td class="club">
            <p>
              <span class="crest" style="background-image: url('${team.crestURI}')"></span>
              <span class="clubName">${team.teamName}</span>
            </p>
          </td>
          <td>${team.playedGames}</td>
          <td>${team.wins}</td>
          <td>${team.draws}</td>
          <td>${team.losses}</td>
          <td>${team.goals}</td>
          <td>${team.goalsAgainst}</td>
          <td>${team.goalDifference}</td>
          <td>${team.points}</td>
        </tr>
      `;
      listItems += item;
    });
    leagueTable.innerHTML = listItems;
  });
