import { Component } from "react";

const estilo = {
    titulo: {
        marginBottom: "30px",
    },
};

class Titulo extends Component {
    render() {
        return <h1 style={estilo.titulo}>Frutería</h1>;
    }
}

export default Titulo;
