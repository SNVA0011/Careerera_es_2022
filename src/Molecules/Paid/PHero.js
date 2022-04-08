import React from 'react'
import Hero from '../../Atoms/Hero'
import pic1 from '../../Images/Datascience4.png'

const PHero = (props) => {
    return (
        <>
            <Hero
                title="PRÓXIMOS LOTES"
                detail=" MÁS POPULARES"
                batch="Hogar / Todos los lotes"
                img={pic1}
            />
        </>
    )
}
export default PHero

