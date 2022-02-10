import { Component } from 'react';

// Importamos COMPONENTES
import Productos from './components/Productos';
import Layout from './components/Layout';
import Titulo from './components/Titulo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Importamos PRODUCTOS
import tomate from './components/img/tomate.jpg';
import lechuga from './components/img/lechuga.jpg';
import guisantes from './components/img/guisantes.jpg';

class App extends Component {
    // Estado inicial
    state = {
        productos: [
            {
                nombre: 'Tomate',
                precio: 1500,
                img: tomate,
            },
            {
                nombre: 'Guisantes',
                precio: 2500,
                img: guisantes,
            },
            {
                nombre: 'Lechuga',
                precio: 500,
                img: lechuga,
            },
        ],

        /*
            El carro almacenará el nombre, imagen y la CANTIDAD de artículos
            que contenga
        */

        carro: [],

        carroVisible: false,
    };

    agregarAlCarro = (producto) => {
        const { carro } = this.state;
        if (carro.find((elemento) => elemento.nombre === producto.nombre)) {
            const nuevoCarro = carro.map((elemento) =>
                elemento.nombre === producto.nombre
                    ? {
                          ...elemento,
                          cantidad: elemento.cantidad + 1,
                      }
                    : elemento
            );
            return this.setState({ carro: nuevoCarro });
        }

        return this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantidad: 1,
            }),
        });
    };

    mostrarCarro = () => {
        if (!this.state.carro.length) {
            return;
        }
        this.setState({ carroVisible: !this.state.carroVisible });
    };

    render() {
        const { carroVisible } = this.state;
        return (
            <div>
                <NavBar
                    carro={this.state.carro}
                    carroVisible={carroVisible}
                    mostrarCarro={this.mostrarCarro}
                />
                <Layout>
                    <Titulo />
                    <Productos
                        agregarAlCarro={this.agregarAlCarro}
                        productos={this.state.productos}
                    />
                </Layout>
                <Footer />
            </div>
        );
    }
}

export default App;
