import React , {Component} from 'react';


class Producto extends Component{
    render(){
        return(
            <div>
            

                <ul>

                    <li>{this.props.verga.nombre} {this.props.verga.precio}</li>
                </ul>
                
            </div>
            ) 

    }

}


export default Producto;