import React from 'react'
import Slide from './Slide'

export default function Banner() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>Check out your favorite products at best price</h1>
               
            </div>
            <div className="col-md-6">

                <Slide/>
            </div>
        </div>
    </div>
    </>
  )
}
