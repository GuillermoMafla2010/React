import React from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

class Resultado extends React.Component{
    
render(){
    const resultado= this.props.resultado;
    if (resultado==="") return null;
    return(
        <div>
            <p>Total</p>
            <ul>
                <TransitionGroup component="p" className="resultado">
                    <CSSTransition classNames="resultado" key={resultado} timeout={{enter:500,exit:500}}>
                <p>El valor a pagar es : {resultado} </p>
                    </CSSTransition>
                </TransitionGroup>

            </ul>
        
        </div>
    )
}

}

export default Resultado