import React,{useState} from "react";

const DescriptionStatic=(props)=>{
    const [conthide, setconthide] = useState(false);
    function showMorecont() {
      setconthide((conthide) => (!conthide))
    }
  
    return(
        <>

        <div className='discription_sec scroll-spbx' id='DescriptionStatic'>
          <div className='container py-16'>
            <div className="sec_title">
              <h2 className='text-xl sm:text-2xl md:text-3xl font-bold'>{props.title}  {props.titlecurso ?  '' :<span className='orange-clrsite'>Curso por Internet</span>}</h2>
              <p className='text-gray-500 text-base md:text-lg fw-medium'>{props.heading}</p>
              <hr className="w-20 hr mb-4 bg-blue-400 sepfoll-hr"></hr>
            </div>
            <div className="des_content">
              <p>{props.data}</p>
              <p>{props.data1}</p>

              <div className={"desc_list_show_more " + (conthide ? 'd-none' : 'd-block')}>
                <a href={void (0)}
                  onClick={() => { showMorecont() }}
                  className="desc_show_more btn-site no-underline cursor-pointer invert"><span>Mostrar más</span></a>
              </div>

              <div className={"desc_after_click " + (conthide ? 'd-block' : 'd-none')}>
                <p>{props.data2}</p>


                <p>{props.data3}</p>

                <p>{props.data4}</p>
                <p>{props.data5}</p>
                <p>{props.data6}</p>

                <div className="desc_list_show_less mt-4">
                  <a href={void (0)} onClick={() => { showMorecont() }} className="desc_show_less btn-site no-underline cursor-pointer">
                    <span>Muestra menos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default DescriptionStatic;