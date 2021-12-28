import { Component } from "react";

const estilo = {
    layout: {
        backgroundColor: "#fff",
        color: "#0A283E",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },

    container: {
        width: "1200px",
    },
};

class Layout extends Component {
    render() {
        return (
            // Este div centrará el contenido en pantalla
            <div style={estilo.layout}>
                {/* Este segundo, le daremos un ancho de 1200px */}
                <div style={estilo.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
