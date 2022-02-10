import { Component } from "react";
import Producto from "./Producto";

const estilo = {
    detalleCarro: {
        fontFamily: 'arial',
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: "5px",
        width: "300px",
        right: 50,
    },

    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        borderBottom: "solid 1px #aaa",
    },
};
class DetalleCarro extends Component {
    render() {
        const { carro } = this.props;
        console.log(carro);
        return (
            <div style={estilo.detalleCarro}>
                <ul style={estilo.ul}>
                    {carro.map((elemento) => (
                        <li style={estilo.producto} key={elemento.nombre}>
                            <img
                                alt={elemento.nombre}
                                src={elemento.img}
                                width="50"
                                height="32"
                            />
                            {elemento.nombre} <span>{elemento.cantidad}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default DetalleCarro;
