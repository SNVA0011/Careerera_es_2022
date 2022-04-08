import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import notfoundimg from '../Images/notfoundpage.png'


export default function NotFound() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>404 Pagina no encontrada</title>
                <meta name="description" content="Careerera Página no encontrada" />
                <meta name="keywords" content="Careerera Página no encontrada" />
            </Helmet>

            <section className="page_404 py-16">
                <div className="container text-center my-sm-3">
                    <div className="four_zero_four_bg">
                        <h1 className="text-5xl xl:text-6xl text-gray-800 font-bold mb-3">404</h1>
                    </div>
                    <div className="contant_box_404">
                        <img src={notfoundimg} width="400" alt='404 Page Not Found' className='d-inline-block' />
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-500">
                            No se pudo encontrar la página que solicitó.
                        </h3>

                        <p className='text-base mb-4  font-semibold'>Haga clic en el botón de abajo para volver a la página de inicio.</p>

                        <Link to="/" className="btn-site invert no-underline md:h-12 d-inline-flex align-items-center">
                            <span>De vuelta a casa</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
