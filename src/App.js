import React, { Component } from 'react';
import Header from "./componentes/Header";
import AgregarCita from "./componentes/AgregarCita";
import ListadoCitas from "./componentes/ListadoCitas";

import './App.css';




class App extends Component {
  
  state={
    datos:[]
  }

  componentDidMount(){
    const citasls=localStorage.getItem('citas')
    if(citasls){
      this.setState({
          datos:JSON.parse(citasls)
      })
    }
    
  }
  componentDidUpdate(){ //se ejecuta primero
    localStorage.setItem('citas',JSON.stringify(this.state.datos))
  }
  formulario=(datos)=>{
    console.log(datos)

    const citas=[...this.state.datos,datos] // se le asigna a la variable citas el valor del state actual y se le agrega los nuevos datos , es como un push

    this.setState({
     datos:citas
    })
  }

  borrarcita=(id)=>{
    console.log(id)

    //ller el state
    const citas_actuales=[...this.state.datos]
    console.log(citas_actuales)

    //borrar el state
    const citas=citas_actuales.filter(cita=>cita.id !== id)
    console.log(citas)
    //acrtualizar el state
    this.setState({
      datos:citas
    })
  }

  render() {

    
    return (
      <div className="container">
        <div className="header h1 text-center">
        <h1><Header/></h1>
        </div>

        <div className="row">
          <div className="col-md-6">
          <p>Formulario</p>
            <AgregarCita
            formulario={this.formulario}
            />
          </div>
        

          <div className="col-md-6">

            <ListadoCitas
              listardatos={this.state.datos}
              borrarcita={this.borrarcita}
            />
          </div>
        
        
        </div>
       
      </div>
    );
  }
}

export default App;
