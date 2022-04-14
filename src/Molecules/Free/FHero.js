import React from 'react'
import Hero from '../../Atoms/Hero'
import pic1 from '../../Images/Datascience4.png'
import { Link } from "react-router-dom";


const FHero = () => {
    return (
        <>
            <Hero
                title="PRÓXIMOS LOTES"
                detail="GRATIS"
                batch={<> <Link to="/" className="no-underline badge bg-info">Hogar</Link>
        <span className="mx-2"> / </span>Todos los lotes </>} 
                img={pic1}
            />
        </>
    )
}
export default FHero
