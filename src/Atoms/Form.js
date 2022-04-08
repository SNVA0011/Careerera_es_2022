import React, { useState, useContext, useRef,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import { Context } from "../Api";
import { CurrencyContxt } from "./Contextcurrency";
import PopUpSuccess from "./PopUpSuccess";
import ReCAPTCHA from "react-google-recaptcha";
import context from "react-bootstrap/esm/AccordionContext";


const Forms = () => {
  // FormData
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [Mobile, setMobile] = useState("")
  const [Country, setCountry] = useState("")
  const [Ip, setIp] = useState("")
  const [Notes, setNotes] = useState("")
  const [Url, setUrl] = useState("")

  const inputref_1 = useRef();
  const inputref_2 = useRef();
  const inputref_3 = useRef();
  const inputref_4 = useRef();

 

  // loading
  const [Response, setResponse] = useState(false)
  const [value, setvalue] = useState(false)



  // Country List Api
  const { value11, value12 } = useContext(Context);
  const [cntry, setcntry] = value11;
  const [cntryLoad, setcntryLoad] = value12;

  // setvalPhoneCode
  const [selectphoneval, setselectphoneval] = useState([])

  function setvalPhone(e) {
    setselectphoneval(e.target.value)
  }

  if (selectphoneval == 'Please select your country') {
    setselectphoneval('')
  }

  // phoneSetvalue
  const [phoneSetvalue, Updatephonevalue] = useState()

  // currency inr/usd
  const [contextcur, setContextCur] = useContext(CurrencyContxt)




  useEffect(() => {
    Updatephonevalue('')
  }, [])



  async function FormSubmit() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=akhmi5a0hkp33oim1o11vkd990");

    var formdata = new FormData();



    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (name === "") {
      alert("Por favor ingrese el nombre completo")
      inputref_1.current.focus();
      inputref_1.current.classList.add('bg-red50-error')
    } 
    else if (email === "") {
      inputref_1.current.classList.remove('bg-red50-error')
      alert("Por favor ingrese el correo electrónico")
      inputref_2.current.focus();
      inputref_2.current.classList.add('bg-red50-error')
    }
    else if (email != "" && regex.test(email) === false) {
      inputref_1.current.classList.remove('bg-red50-error')
      alert("Por favor ingrese una dirección de correo electrónico válida")
      inputref_2.current.focus();
      inputref_2.current.classList.add('bg-red50-error')
    }
    else if (phoneSetvalue?.length == 0) {
      inputref_2.current.classList.remove('bg-red50-error')
      alert("Por favor, introduzca el número de móvil")
      inputref_3.current.focus();
      inputref_3.current.classList.add('bg-red50-error') 
    }
    else{
      inputref_3.current.classList.remove('bg-red50-error')
    }
    // else if (Notes == "") {
    //   alert("Please Enter Valid Message")
    //   inputref_4.current.focus();
    // } 


    if (name != "" && email != "" && phoneSetvalue?.length > 0) {
      inputref_1.current.classList.remove('bg-red50-error')
      inputref_2.current.classList.remove('bg-red50-error')
      inputref_3.current.classList.remove('bg-red50-error')

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      formdata.append("Name", name);
      formdata.append("Email", email);
      formdata.append("Mobile", phoneSetvalue);
      formdata.append("notes", Notes);
      formdata.append("Country", "INDIA");
      formdata.append("ip_address", "127.0.0.01");
      formdata.append("website_URL", "abc.com");
      console.log("Response::::::::::", formdata)

      fetch("https://my.careerera.com/admin/curl_All_enqery.php", requestOptions)
        .then(response => response.text())
        .then(result => setResponse(result))
        .catch(error => console.log('error', error));
        setvalue(true)
        setTimeout(function(){
          setName('');
          setemail('');
          Updatephonevalue('');
           setNotes('');
           inputref_1.current.value = '';
           inputref_2.current.value = '';
           inputref_3.current.value = '';
        },2000);
        setTimeout(function(){
           setvalue(false)
        },4000);
    }
  }

  function onChange(value) {
    console.log("Captcha value:", value)
  }

  
console.log("iiiiii",cntry)

  return (
    <div className="">
      <div className="student-coursepopup pop-back scroll-spbx">

        <div className="sec_title">
          <h4 className="text-2xl font-semibold text-gray-800 text-left">
          Complete el siguiente formulario para <span className="orange-clrsite">Inscribirse</span>
          </h4>
          <hr className="w-20 hr mb-0 bg-blue-400 sepfoll-hr" />
        </div>

        <div className="main_heading full-w mb-4 col-12 pt-4">
          <div className="form-annum talwin-formstyle services-movingr bg-white">
            <div className="position-relative row min-height-auto">
              {cntryLoad ?
                <>
                  <div className="mb-4 col-12">
                    <input
                      type="hidden"
                      name="CountryFullName"
                      id="CountryFullName"
                      defaultValue=""
                    />
                    <Form.Select onChange={setvalPhone} value={selectphoneval} className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control">
                      <option selected>Please select your country</option>
                      {cntry.map((item, i) =>
                        <option value={[item.phonecode, item.country_title]} onChange={(e) => setCountry(e.target.value)}>{item.country_title}</option>
                      )}
                    </Form.Select>
                  </div>
                </>
                : <>
                  <div className="mb-4 col-12 text-center align-self-end">
                    <button className="btn btn-dark shadow-lg" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="sr-only">Loading...</span>
                    </button>
                  </div>
                </>}

              {/*cols*/}

              <div className="mb-4 col-12">
                <input
                  type="text"
                  placeholder="Nombre *"
                  ref={inputref_1}
                  onChange={(e) => setName(e.target.value)}
                  className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control"
                  required
                  name="Name"
                  id="name"
                />
              </div>


              {/*cols*/}
              <div className="mb-4 col-12">
                <input
                  type="email"
                  placeholder="Correo electrónico *"
                  ref={inputref_2}
                  onChange={(e) => setemail(e.target.value)}
                  className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control"
                  name="Email"
                  required
                  id="email"
                />
              </div>

              {/*cols*/}

              <div className="mb-4 col-12">
                {cntryLoad ?
                  <>
                    <InputGroup className="bg-white">

                    {contextcur.currency == "Asia/Kolkata" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[3].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp; 
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}



                        {contextcur.currency == "Asia/Singapore" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[7].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp; 
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "America/New_York" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[6].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp; 
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}

                        {contextcur.currency == "SGT" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[194].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp; 
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "Europe/London" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[2].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp; 
                          </InputGroup.Text>
                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "Asia/Dubai" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[5].phonecode :
                              selectphoneval.toString().split(',')[0]
                            } &nbsp; 
                          </InputGroup.Text>

                          : <div>
                            {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                          </div>}


                        {contextcur.currency == "Asia/Dhaka" ?
                          <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                            + {selectphoneval == '' ? cntry[30].phonecode :
                              selectphoneval.toString().split(',')[0] } &nbsp; 
                          </InputGroup.Text>
                          : ''}
                        {/* <InputGroup.Text id="basic-addon1" className='py-1 fw-medium shadow-sm input-group-text'>
                        + {selectphoneval == '' ? cntry[0].phonecode :
                          selectphoneval.toString().split(',')[0]
                        }
                      </InputGroup.Text> */}
                    

                      
                      <FormControl
                        placeholder="Teléfono*"
                        type="tel"
                        className='dd placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                            h-14 shadow-l=md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base'
                        value={phoneSetvalue}
                        ref={inputref_3}
                        onChange={(e) => { Updatephonevalue(e.target.value) }}
                        aria-label="Text input with dropdown button" />
                    </InputGroup>
                    {selectphoneval == '' ?
                      <input type="hidden" name="phone-bycountry" required onChange={(e) => setMobile(e.target.value)} value={'+' + cntry[0].phonecode + '-' + phoneSetvalue} />
                      :
                      <input type="hidden" name="phone-bycountry" required onChange={(e) => setMobile(e.target.value)} value={'+' + selectphoneval.toString().split(',')[0] + '-' + phoneSetvalue} />
                    }
                  </>
                  : <div className="text-center align-self-end">
                    <button className="btn btn-dark shadow-lg" type="button" disabled>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="sr-only">Loading...</span>
                    </button>
                  </div>}
              </div>
              {/*cols*/}

              {/*cols*/}

              {/*cols*/}
              <div className="mb-4 col-12">


                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail">
                  <Form.Control
                    as="textarea" rows={4} required=""
                    ref={inputref_4}
                    className='block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
                  h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control'
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mensaje" />
                </Form.Group>

              </div>
              {/*cols*/}

              {/*cols*/}
              <div className="mb-4 col-12">

                <ReCAPTCHA
                  sitekey={'6LdeVb4eAAAAAKJs8si2knKpwBXB_-bHN9Cxjfah'}
                  onChange={onChange}
                />

                {/* <InputGroup className='mb-0'>
                <InputGroup.Text className='py-1 fw-medium shadow-sm input-group-text'>5 + 2 =</InputGroup.Text>
                <FormControl placeholder='?' onChange={(e) => setUrl(e.target.value)} className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 
h-12 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:text-base form-control" />
              </InputGroup> */}
              </div>
              {/*cols*/}

              {/*row*/}
              <p className="text-center mb-0 mt-4  pt-3">
                <button className="btn-site invert shadow-0 btn h-14 btn btn-primary btn btn-primary text-lg" onClick={FormSubmit}>
                  <span>Enviar</span>
                </button>
              </p>
              <div className="clear" />
              {/*clear*/}
            </div>
          </div>
        </div>
      </div>

      {value ?
        <div>
          <PopUpSuccess />
        </div>
        : <div></div>}


    </div>




  )
}

export default Forms;