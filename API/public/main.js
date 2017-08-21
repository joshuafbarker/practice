const logoCodes = {
  '445': 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
  '452': 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg'
}

function loadTable(id){
  const url = `http://api.football-data.org/v1/competitions/${id}/leagueTable`;
  const myRequest = new Request(url);
  const leagueTableHeader = document.querySelector('.leagueTableHeader');
  const leagueTable = document.querySelector('.leagueTableBody');
  const header = document.querySelector('.header');

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
      leagueTableHeader.style.opacity = '1';
      header.style.backgroundImage = `url('${logoCodes[parseInt(id)]}')`;
    });
}
