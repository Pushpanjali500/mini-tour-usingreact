import React, { useState } from 'react'

function Card({id,image,name,info,price,removeTour}) {
    const [readmore,setReadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,200)}...`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    const [interested,setInterested]=useState(false);
    function interestHandle(){
        setInterested(!interested);
    }

    return (
    <div className='card'>
        <img src={image} className="image" />
        <div className='tour-info'>
        <div className='tour-details'>
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className='desc'>
            {description}
            <span className='read-more' onClick={readmoreHandler}>
                {readmore?`show less`:`read more`}
            </span>
        </div>
        </div>
        <button className={`btn-red ${interested ? 'hide': ""}`} onClick={interestHandle} >interested</button>
        <button className={`btn-red ${interested ? 'hide': ""}`} onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  )
}

export default Card