function createGame(player1, hours, player2) {
  return `
                <li>
                    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
                    <strong>${hours}</strong>
                    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
                </li>
            `
}
function createCard(date, day, createGame) {
  return `<div class="card">
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${createGame}
            </ul>
        </div>
        `
}
document.querySelector("#app").innerHTML = `
      <header>
        <img src="./assets/logo.svg" alt="Logo da NLW">
      </header>
      <main id="cards">
        ${createCard(
          "24/11",
          "QUINTA",
          createGame("brazil", "16:00", "serbia")
        )}
        ${createCard(
          "28/11",
          "SEGUNDA",
          createGame("brazil", "18:00", "switzerland")
        )}
        ${createCard(
          "02/12",
          "SEXTA",
          createGame("brazil", "16:00", "camaroon")
        )}
        </main>
`
