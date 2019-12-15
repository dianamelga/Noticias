import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const apiKey = "3a35fbdc2c3f46e7aa626aec73fb047b";
    const category = categoria;
    const country = "us";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <Formulario 
          consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias
            noticias={this.state.noticias}
          ></ListaNoticias>
        </div>
      </Fragment>
    );
  }
}

export default App;
