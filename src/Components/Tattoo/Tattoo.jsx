import './Tattoo.css'

const Tattoo = (props)=> {

    return(

        <article className='Article'>

            <div className="Article-img-container">
                <img className='Article-img'></img>
            </div>

            <h3 className='Article-h3'>{props.name}</h3>
        </article>

    )
}

export default Tattoo