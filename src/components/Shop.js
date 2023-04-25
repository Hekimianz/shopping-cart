import React from "react";
import "./Shop.css";
import Card from "./Card";
import Item from "../components/Item";
import cart from "../../src/assets/cart.svg";
import close from "../../src/assets/close.svg";
import { nanoid } from "nanoid";
// clothing imgs
import hoodie from "../../src/assets/hoodie.png";
import leggings from "../../src/assets/leggings.png";
import polo from "../../src/assets/polo.png";
import tanktop from "../../src/assets/tanktop.png";
import tshirt1 from "../../src/assets/tshirt1.png";
import tshirt2 from "../../src/assets/tshirt2.png";
import tshirt3 from "../../src/assets/tshirt3.png";
import tshirt4 from "../../src/assets/tshirt4.png";
import tshirt5 from "../../src/assets/tshirt5.png";
import tshirt6 from "../../src/assets/tshirt6.png";

export default function Shop() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  function addToCart(e) {
    let node = e.target.parentNode.parentNode;
    if (e.target.className === "image") {
      setCartItems((prevItems) => {
        return [
          ...prevItems,

          {
            name: node.childNodes[1].innerText,
            price: node.childNodes[2].innerText,
            image: node.childNodes[0].firstChild.src,
            id: nanoid(),
          },
        ];
      });
    }
    console.log();
  }
  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function delItem(e) {
    setCartItems((prevItems) => {
      return prevItems.filter((x) => x.id !== e.target.parentNode.id);
    });
  }

  let items = cartItems.map((x) => {
    return (
      <Item
        key={nanoid()}
        name={x.name}
        price={x.price}
        image={x.image}
        handleDel={delItem}
        id={x.id}
      />
    );
  });

  return (
    <div id="shop-cont">
      <section className="row">
        <h2 className="row-heading">New Collections</h2>
        <div onClick={(e) => addToCart(e)} className="row-cards">
          <Card image={hoodie} name="Hoodie" price="39.99" />
          <Card image={leggings} name="Leggings" price="29.99" />
          <Card image={tshirt1} name="Rider Shirt" price="25.99" />
          <Card image={tshirt2} name="Cool Shirt" price="19.99" />
          <Card image={tshirt3} name="Rider Shirt(No Sleeves)" price="25.99" />
        </div>
      </section>
      <section className="row">
        <h2 className="row-heading">Trending</h2>
        <div onClick={(e) => addToCart(e)} className="row-cards">
          <Card image={polo} name="Polo" price="30.00" />
          <Card image={tanktop} name="Tank Top" price="14.99" />
          <Card image={tshirt4} name="Just Sleep Shirt" price="19.99" />
          <Card image={tshirt5} name="T-Shirt" price="14.99" />
          <Card image={tshirt6} name="Stained Shirt" price="14.99" />
        </div>
      </section>
      <section className="row">
        <h2 className="row-heading">Another Collection</h2>
        <div onClick={(e) => addToCart(e)} className="row-cards">
          <Card image={hoodie} name="Hoodie" price="39.99" />
          <Card image={leggings} name="Leggings" price="29.99" />
          <Card image={tshirt1} name="Rider Shirt" price="25.99" />
          <Card image={tshirt2} name="Cool Shirt" price="19.99" />
          <Card image={tshirt3} name="Rider Shirt(No Sleeves)" price="25.99" />
        </div>
      </section>
      <div onClick={toggleCart} id="cart">
        <img id="cartIcon" src={cart} alt="cart" />
        <span id="cartNum">{cartItems.length}</span>
      </div>
      {cartOpen && (
        <div id="open-cart">
          <img
            onClick={toggleCart}
            id="close"
            alt="close cart icon"
            src={close}
          />
          {items}
        </div>
      )}
    </div>
  );
}
