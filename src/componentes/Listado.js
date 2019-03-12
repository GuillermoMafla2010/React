import React from 'react';
import Gasto from './Gasto';

class Listado extends React.Component{
    
    render(){
        return (
            <div className="gastos-realizados">
                <h2> Listado </h2>
                {Object.keys(this.props.datos).map(key=>(<Gasto key={key} gasto={this.props.datos[key]}/>))}
                
                
            </div>
        )
    }

}

export default Listado

//