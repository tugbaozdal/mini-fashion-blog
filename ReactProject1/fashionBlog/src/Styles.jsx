//course.jsx hocada
import React from 'react'
import './css/Style.css'

function Styles({styles}) {
    const {id,title,description, link, image}= styles;
  return (
    <div className='style'>
      <div>
        <img src={image} width={300} height={300}/>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <a href={link}>İlhamlar için tıklayın!!</a>

      </div>
    </div>
  )
}

export default Styles
