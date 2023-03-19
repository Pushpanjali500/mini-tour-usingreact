import React from 'react'
import Card from './Card';
function Tours({tours,removeTour}) {
  return (
    <div className='container'>
        <div>
            <h1 className='title'>Plan With Love</h1>
        </div>
        <div className='cards'>
            {
              tours.map((tour)=>{
                return <Card {...tour} removeTour={removeTour}/>
              })
            }
        </div>
    </div>
  )
}

export default Tours