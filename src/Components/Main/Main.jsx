import './Main.css'
import Tattoo from '../Tattoo/Tattoo'

// Llamadas a la API o servicio para llamar a la api


const Main = ()=> {

    [1 , 2 , 3 , 4].map((X)=>{console.log(X)})
            

    return(

        <main className='Main'>
            
            <Tattoo name={'pene'}/>
            <Tattoo name={'pito'}/>
        
        </main>
        
    )
}

export default Main