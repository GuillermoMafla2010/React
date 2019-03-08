import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio} from './helper';
import {calcularMarca,obtenerPlan} from './helper';
class App extends Component {


  state={
    resultado:'',
    datos:{}
  }
  
  
  cotizarSeguro=(datos)=>{
      const{marca,plan,year}=datos;

      //Agregar base de 2000
      let resultado=2000;


        //Obtener diferencia de años

        const diferencia=obtenerDiferenciaAnio(year)
        console.log(diferencia);

        //Por cada año se descuenta el 3% al valor del seguro
        resultado=resultado-((diferencia*3)*resultado/100)
        console.log(resultado)

        //Americano 15% Asiatic 5% europeo 30% e incremento al valor actual
        const modelo= calcularMarca(marca);
        resultado = resultado * modelo;
        console.log("EL MODELO TIENE COMO BONO"+ resultado)

        //pLAN BASICO AUMENTA VALOR EN 20% Y COPLETO 50%

        const planificacion=obtenerPlan(plan);
        resultado=resultado*planificacion;

        //crea el objketo con los datos del  auto

        const infodatos={
          marca:marca,
          year:year,
          pan:plan
        }


        this.setState({resultado:resultado, datos:infodatos})
          
        

  }
  
  
  
  
  render() {
    return (
      <div className="contenedor">
        <Header/>
        <div className="contenedor-formulario">

        <Formulario 
        cotizaelSeguro={this.cotizarSeguro}
        
        />
        </div>


        <div className="resumen">
        <Resumen 
          datos={this.state.datos}
        
        
        />
        
        </div>


        <div className="gran-total">
        <Resultado 
          resultado={this.state.resultado}
        
        
        />
        
        </div>
       
      </div>
    );
  }
}

export default App;
