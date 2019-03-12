import React from 'react';

class Presupuesto extends React.Component{


    render(){
        return (
            <div className="alert alert-primary">
                <span>{this.props.enviarPresupuesto}</span>
            </div>
        )
    }
}

export default Presupuesto