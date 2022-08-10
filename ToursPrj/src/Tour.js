import React, { useState } from 'react';
import './index.css'
const Tour = ({ id, image, info, price, name,removeTour }) => {

  const [readMore,setReadMore] = useState(false)

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price} euro</h4>
      </div>
      <p>
        {readMore ?info:`${info.substring(0,200)}...`}
        <button  onClick={()=> setReadMore(!readMore)}>
          {readMore?
          <button className='less'>
            show less
          </button>: 
          <button className='less'>
            read more
          </button>}
        </button>
      </p>
      <button className='delete-btn' onClick={()=>removeTour(id)}>
        not interested
      </button>
    </footer>
  </article>;
};

export default Tour;
