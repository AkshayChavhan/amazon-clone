import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <>
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="amazon_banner" />

            {/* product id,title,price,rating,image */}
            <div className="home_row">

            <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            /> 
            <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            />
            </div>
            {/* product */}
        </div>
        <div className="home_row">
        <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            /> 
            <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            />
            <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            /> 
            <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            />
            <div className="home_row">
            <Product 
            id="12321341"
            title="The lean Startup: How Constant Innovation CreatesRadically Successful Business Paperback"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            />
            </div>

        </div>
        </>
    )
}

export default Home;