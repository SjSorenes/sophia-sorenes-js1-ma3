const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d5f62cd1afa74951bbbda9b6e5fafb50";
const gamesContainer = document.querySelector(".games")

async function getGames() {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const facts = data.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);
        console.log(facts[i].rating);
        console.log(facts[i].tags.length);
        if (i === 8) {
            break;
        }

        gamesContainer.innerHTML += `
                                    <div class="card"> 
                                    <h3>${facts[i].name}</h3>
                                    <p>Rating: ${facts[i].rating}</p>
                                    <p>Tags: ${facts[i].tags.length}</p>
                                    </div>
                                    `
    }
}

getGames();