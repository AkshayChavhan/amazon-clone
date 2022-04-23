import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='product_info '>

                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating)
                            .fill()
                            .map((_) => {
                                <p>"start</p>
                            })
                    }
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg" alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product;