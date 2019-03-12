import React from 'react';
import {revisarPresupuesto} from './helper';


class Restante extends React.Component{


    render(){

        const presupuesto= this.props.enviarPresupuesto
        const restante=this.props.enviarRestante
        
        return (
            
             
           
        
            

           <div className={revisarPresupuesto(presupuesto,restante)} >

               <span>Restante {this.props.enviarRestante} </span>
           </div>
        )
    }
}

export default Restante