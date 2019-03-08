import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Productos from './Productos';
class PrimerComponente extends React.Component{

    render(){
       const productos=[{
        id:1,  
        nombre:"GUitarra",
           precio:200,
           stock:true
       },{
           id:2,
           nombre:"piano",
            precio:25,
            stock:false
       }
    ]
        return (
            <div>
            <Header />
            <p>Saludos desde mi primer componente</p>
            <Productos tiendas={productos}/>
            <Footer />
            </div>
        ) 
        
        
    }
    
}

export default PrimerComponente;