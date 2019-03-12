import React from 'react';

class Gasto extends React.Component{

    render(){
        return(
            <div>
              <li className="gastos">
            <p>
              {this.props.gasto.nombregasto}
              <span className="gasto">{this.props.gasto.cantidad}</span>
              
              </p>
              </li>
            </div>
            
        )
    }

}

export default Gasto