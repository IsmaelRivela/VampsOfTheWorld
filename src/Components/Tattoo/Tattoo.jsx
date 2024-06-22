import './Tattoo.css'

const Tattoo = (props)=> {

    return(

        <a href='#'>
            <article className='Article'>

                <div className="Article-img-container">
                    <img className='Article-img'></img>
                </div>

                <h3 className='Article-h3'>{props.name}</h3>
            </article>
        </a>
    )
}

export default Tattoo