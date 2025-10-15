import React, {useContext} from 'react';
import "../style/Header.css"
import { FaShoppingBasket } from "react-icons/fa";
import { TbShoppingBagHeart } from "react-icons/tb";
import { TbShoppingCartQuestion } from "react-icons/tb";
import {CartContext} from "../State/CartContext.jsx";


export default function Header({searchTerm, setSearchTerm}) {
  const{openCart} = useContext(CartContext);
  return (
    <header className="header">
      <div className="header__logo">
        <img src="logo.png" alt="logo" />
      </div>
      <div className="header__search">
        <input type="text"
               placeholder="Пошук"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="header_icon">
        <FaShoppingBasket className="shop__icon" onClick={openCart} />
        <TbShoppingBagHeart  className="shop__icon"/>
        <TbShoppingCartQuestion className="shop__icon"  />


      </div>
      <div className = ''></div>
    </header>
  );
}


