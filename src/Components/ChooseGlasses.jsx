// rafc
import React, { useState } from 'react'
import data from '../data/dataGlasses.json'

export const ChooseGlasses = () => {

  const [glasses , setGlasses] = useState('./assets/glassesImage/v1.png')

  const handleClick = (url)=> {
    setGlasses(url)
  }

  return (
   <>
    <div className='row justify-content-center'>
      <div className='col-md-5 text-center mb-5'>
        <div className="box">
          <img src="./assets/glassesImage/model.jpg" alt="" className='img-fluid'/>
          <img src={glasses} className="img-glass" />
        </div>
      </div>
    </div>
    <div className="row" style={{backgroundColor: 'white',padding: 30}}>
      {
        data.map((item , index)=> {
          return (
            <div className='col-md-2 item mb-3' key={index} onClick={()=>handleClick(item.url)}>
              <img src={item.url} alt="" className='img-fluid' style={{width: 120 , height: 40}} />
            </div>
          )
        })   
      }
    </div>
   </>
  )
}
