import React,{useEffect} from 'react'
import { Helmet } from 'react-helmet'

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className='payment-page'>
          <Helmet>
          <title>Careerera Online Payment</title>
           <meta name="description" content="Search here Careerera contact telephone number, Careerera Official Address, Careerera Headquarters Address, Careerera email id, Careerera helpline number"/>
           <meta name="keywords" content="Careerera contact number, Careerera contact telephone number, Careerera official address, Careerera headquarters address, Careerera email id"/>
          </Helmet>

          <div className="container py-16">
             <h1>Hola</h1>
           </div>
        </div>
    )
}

export default Payment
