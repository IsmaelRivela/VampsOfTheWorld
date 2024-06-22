import './Main.css'
import Tattoo from '../Tattoo/Tattoo'
import { useEffect, useState } from 'react'



 const Main = ()=> {


    const [variable1 , modificarVariable] = useState( null )
        
    useEffect(()=>{

      const prueba =  async ()=>{
 


            let data = await fetch('https://jsonplaceholder.typicode.com/photos') 

            let info =  await data.json()

            modificarVariable( info.slice(0,10) )

 
        }
      
         prueba()

     }, [])

    return(

        <main className='Main'>

            { variable1 != null
          ?  variable1.map((X)=>{


                return <Tattoo name={X.title}/>})
            : null
            
             }
         </main>
        
     )
 }

 export default Main







