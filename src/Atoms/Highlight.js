import React from "react";

const Highlight = (props) => {
    return (
        <div className="which-benefits-derive full-w scroll-spbx shadow-sm border-top border-bottom bg-blue-100" id="highlight">

            <div className="container py-16">

                {props.titlecurso ? 
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {props.titlem} <span className="orange-clrsite">{props.titlem2}</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                        {props.titlem3}
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>
                    :
                    <div className="sec_title">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Programa <span className="orange-clrsite">Reflejos</span>
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg fw-medium">
                            Vea qué beneficios puede obtener al unirse a este programa.
                        </p>
                        <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr" />
                    </div>
                }



                <div className="mt-10"></div>
                <div className="full-w start-yourcareer relatedcr">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-4">
                            <div className="h-100 cards bg-white p-4">
                                <h4 className='font-bold text-lg sm:text-xl mb-2'>Programa en línea</h4>
                                <div className="content">{props.head1}</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mb-4">
                            <div className="h-100 cards bg-white p-4">
                                <h4 className='font-bold text-lg sm:text-xl mb-2'>Colaboraciones</h4>
                                <div className="content">{props.head2}</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mb-4">
                            <div className="h-100 cards bg-white p-4">
                                <h4 className='font-bold text-lg sm:text-xl mb-2'>Equipo de colocación dedicado</h4>
                                <div className="content">{props.head3}</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mb-4">
                            <div className="h-100 cards bg-white p-4">
                                <h4 className='font-bold text-lg sm:text-xl mb-2'>Prepárese para el trabajo</h4>
                                <div className="content">{props.head4}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Highlight;


