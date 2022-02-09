import { Component } from "react";

const estilo = {
    layout: {
        fontFamily: 'arial', // PENDIENTE: cambiar fuente a TODA LA PÁGINA
        backgroundColor: "#fff",
        color: "#0A283E",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
};

class Layout extends Component {
    render() {
        return (
            // Este div centrará el contenido en pantalla
            <div style={estilo.layout}>
                {/* Este segundo, le daremos un ancho de 1200px */}
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Layout;
