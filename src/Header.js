import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





function Header() {

    return (
        <nav className="header">
            <Link to="/">
                {/* logo */}
                <img className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazonlogo" />

            </Link>
            {/* searchbox */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
            </div>
            {/* <SearchIcon className="header_searchInput" /> */}
            {/* 3 links */}
            <div className="header_Nav">
                {/* 1st link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Qazi</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns </span>
                        <span className="header_optionLineTwo">& Orders </span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne"> Your </span>
                        <span className="header_optionLineTwo"> Prime </span>
                    </div>
                </Link>
 
            </div>

            {/* basket icons  */}

            <Link to="/checkout">
                <div className="header_optionBasket">
                    {/* shopping basket icon */}
                    {/* <ShoppingBasketIcon /> */}
                    {/* number of items in basket */}
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
            </Link>

        </nav>
    )
}

export default Header;