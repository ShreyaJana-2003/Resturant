import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>At Suruchi Resturant, our menu is filled with crowd favorites that keep our guests coming back for more. Each dish is crafted with the finest ingredients, authentic flavors, and a touch of culinary creativity. From sizzling appetizers to hearty main courses and indulgent desserts, our most-loved dishes cater to every craving. Every bite promises a delightful experience. Come and discover why these dishes have earned a special place in the hearts of our customers!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu