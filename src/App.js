import React, { Component } from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'
import Presupuesto from './componentes/Presupuesto'
import Restante from './componentes/Restante'
import './css/App.css';
import {validarPresupuesto,revisarPresupuesto} from './componentes/helper'

class App extends Component {
  
  state={
    presupuesto:'',
    restante:'',
    gastos:{}
  }

  componentDidMount(){
    this.obtenerpresupuesto();
  }

  obtenerpresupuesto=()=>{
    let presupuesto=prompt("Cual es tu presupuesto");
    let resultado=validarPresupuesto(presupuesto);
    
    if(resultado){
      this.setState({presupuesto:presupuesto,restante:presupuesto}
        
      )
      console.log('Valido')
    }else{
      console.log('Presupuesto no valido')
      this.obtenerpresupuesto()
    }

    
  }

  

  recibeFormulario=(datos)=>{
    console.log(datos);

    //toma una copia del state actual

      const gastos = {...this.state.gastos} ; // para agregar todos los gastos que haremos
      //console.log('Se agrego el gasto'+ gastos)
    //agregar al gasto al objeto state
      gastos[`gasto${Date.now()}`]=datos //crea una nueva llave
      
      //enviar cantidad para restar
      this.restarPresupuesto(datos.cantidad)
    //ponerlo en state
    this.setState({
      gastos : gastos
      
    })
  }

  //Restar del presupuesto cuando un gasto se crea

    restarPresupuesto=(cantidad)=>{
      
      let restar= +cantidad
      console.log(typeof restar)

      //Tomar copia del state
      let restante = this.state.restante;

      //lo restamos
      restante= restante-restar
      console.log(restante)
      //agregamos el nuevo state
      this.setState({restante:restante})
          
      
    }
  
  
  render() {
    return (
      <React.Fragment>
      <div className="App container">
        <Header/>
      </div>

      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            
            datos={this.recibeFormulario}
            
            />

          </div>


          <div className="one-half column"> 
              <Listado
              
              datos={this.state.gastos}
              
              />

              <Presupuesto
              enviarPresupuesto={this.state.presupuesto}
              />

              <Restante
              enviarPresupuesto={this.state.presupuesto}
              enviarRestante={this.state.restante}
              />

          </div>
        </div>
      </div>


      </React.Fragment>
    );
  }
}

export default App;
