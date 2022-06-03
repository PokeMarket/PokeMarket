import Pokemones from "./Pokemones.js";
import { request } from "./api.js";

const rootPokes = [];

for (let i = 1; i < 152; i++) {
    rootPokes.push({
        id: `${i}`,
        name: "abc",
    });
}
//     [
//     { id: "1", name: "abc" },
//     { id: "5", name: "abc" },
//     { id: "25", name: "abc" },
//     { id: "99", name: "abc" },
//     { id: "151", name: "abc" },
//     { id: "34", name: "abc" },
//     { id: "27", name: "abc" },
//     { id: "15", name: "abc" },
//     { id: "19", name: "abc" },
//     { id: "25", name: "abc" },
//     { id: "9", name: "abc" },
// ];

export default class App {
    constructor($app, userId) {
        console.log($app, userId);
        this.state = {
            isRoot: true,
            isLoading: false,
            pokes: [],
            userId: userId,
        };
        this.$pokemonGroup = document.querySelector(".pokemonGroup");
        this.pokemones = new Pokemones($app, this.state.pokes);
        this.init();
    }

    setState(nextState) {
        this.state = nextState;
        this.pokemones.setState(this.state.pokes);
    }
    init = async () => {
        this.setState({
            ...this.state,
            pokes: rootPokes,
            isRoot: true,
        });

        // try {
        //     const rootPokes =
        //     this.setState({
        //         ...this.state,
        //         pokes: rootPokes,
        //         isRoot: true
        //     })
        // } catch (e) {
        //     throw new Error(`SORRY, SOMETHING WENT WRONG :( ${e.message}`)
        // } finally {

        // }
    };
}
