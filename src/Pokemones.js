const POKE_IMAGE_PATH_PREFIX =
    "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid";

export default class Pokemones {
    constructor($app, initialState) {
        console.log($app);
        this.state = initialState;
        this.$target = document.createElement("DIV");
        this.$target.className = "pokemonContainer";
        $app.append(this.$target);
        //this.onClick = onClick;
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        console.log(this.state);

        if (this.state) {
            //this.$target.innerHTML = "<div>Hey~<div>";
            this.$target.innerHTML = this.state
                .map((poke) => {
                    let pokeNum = poke.id.padStart(4, "0");
                    return `
                        <div class="pokemon" data-id="${poke.id}">
                        <div><span class="pokemonNum">${pokeNum}</span> ${
                        poke.name
                    }</div>
                        <img src="${POKE_IMAGE_PATH_PREFIX}/${pokeNum}${
                        pokeNum == "0131" ? "03" : "01"
                    }.png">
                        </div>
                        `;
                })
                .join("");
        }
    }
}
