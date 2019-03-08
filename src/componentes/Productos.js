import React , {Component} from 'react';
import Producto from './Producto';

class Productos extends Component{
    render(){
        return(
            <div>
            <p>Listado de Productos</p>
            {this.props.tiendas.map((tienda)=>{
                return <Producto verga={tienda} key={tienda.id}/>
            })}
            </div>
            ) 

    }

}


export default Productos;