import { Component } from "react";

const estilo = {
    footer: {
        border: "solid 1px #eee",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "15px",
        boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
        marginTop: "auto",
    },
};

class Footer extends Component {
    render() {
        return <footer style={estilo.footer}>Juan Antonio Amil 2021</footer>;
    }
}

export default Footer;
