import React, { useContext } from "react";
import { CurrencyContxt } from './Contextcurrency';
import india from '../Images/india.gif'
import singapor from '../Images/singapore.gif'
import us from '../Images/usa.gif'
import serbia from '../Images/serbia.png'
import Uk from '../Images/uk.png'
import ae from '../Images/ae.png'
import bd from '../Images/bd.png'


const Icon = () => {
  // currency inr/usd
  const [contextcur, setContextCur] = useContext(CurrencyContxt)

  return (
    <>
      <div className='hidden md:block'>
        <a className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-40 call z-50 drop-shadow-md d-flex align-items-center call-withus"  href={"tel:" + contextcur.title}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          <div className="num d-flex align-items-center">
            <div className="num-flag">

              {contextcur.currency === 'Asia/Kolkata' ?
                <img src={india} className="inline" alt="Asia/Kolkata" />
                : ''}

              {contextcur.currency === 'Asia/Singapore' ?
                <img src={singapor} className="inline" alt="Asia/Singapore" />
                : ''}

              {contextcur.currency === 'America/New_York' ?
                <img src={us} className="inline" alt="America/New_York" />
                : ''}

              {contextcur.currency === 'SGT' ?
                <img src={serbia} className="inline" alt="'SGT'" />
                : ''}

              {contextcur.currency === 'Europe/London' ?
                <img src={Uk} className="inline" alt="Europe/London" />
                : ''}

              {contextcur.currency === 'Asia/Dubai' ?
                <img src={ae} className="inline" alt="Asia/Dubai" />
                : ''}

              {contextcur.currency === 'Asia/Dhaka' ?
                <img src={bd} className="inline" alt="Asia/Dhaka" />
                : ''}
            </div>

            {contextcur.title}
          </div>
        </a>

        {contextcur.currency === 'Asia/Kolkata' ?
          <a href="mailto:support@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              support@careerera.com
            </div>
          </a>
          : ''}

        {contextcur.currency === 'Asia/Singapore' ?
          <a href="mailto:support@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              support@careerera.com
            </div>
          </a>
          : ''}

        {contextcur.currency === 'America/New_York' ?
          <a href="mailto:info@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              info@careerera.com
            </div>
          </a>
          : ''}

        {contextcur.currency === 'SGT' ?
          <a href="mailto:support@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              support@careerera.com
            </div>
          </a>
          : ''}

        {contextcur.currency === 'Europe/London' ?
          <a href="mailto:info@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              info@careerera.com
            </div>
          </a>
          : ''}

        {contextcur.currency === 'Asia/Dubai' ?
          <a href="mailto:info@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              info@careerera.com
            </div>
          </a>
          : ''}

        {contextcur.currency === 'Asia/Dhaka' ?
          <a href="mailto:support@careerera.com"
            className="w-16 h-14 rounded-r-full text-white bg-gray-900 
  fixed left-0 bottom-24 call z-50 drop-shadow-md d-flex align-items-center call-withus">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="num">
              support@careerera.com
            </div>
          </a>
          : ''}


      </div>
    </>
  )
}
export default Icon;












