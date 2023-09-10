import React from 'react'

const ShoeDetails = () => {
  return (
    <main className='shoe container'>
        <div className='shoe-content'>
            <h1>YOU DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="shop-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="src/images/amazon.png" alt="amazon-logo" />
                    <img src="src/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className='shoe-image'>
            <img src="src/images/shoe_image.png" alt="" />
        </div>
    </main>
  )
}

export default ShoeDetails;
