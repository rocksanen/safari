

import CartComponent from "./cartComponent";

const ProductDetails = ({ product, visible, setCart, cartItems,count,setCount }) => {

  if (!visible) return null;

  return (
    <div className="product-details">
      {!product && (
        <>
          <p className="product-info">Tuotteemme</p>
          <p>Tervetuloa meidän mahtavaan eräkauppaamme.</p>
          <p>Valitse tuotteita, katso tiedot ja laita kortti vinkumaan!</p>
        </>
      )}
      {product && (
        <>
          <p className="product-info">{product.name}</p>
          <p>{product.description}</p>
          <p className="product-price">{product.price}€</p>
          <p>Tiedot</p>
          <ul>
            {product.details.map((item, index) => (
              <li className="product-details-list-item" key={index}>
                {item.label}
                <br />
                <span className="product-info">{item.value}</span>
              </li>
            ))}
            <p>
              <strong>Varastossa: {product.stock} kpl</strong>
            </p>
          </ul>
        </>
      )}
      <CartComponent
        item={product}
        setCart={() => setCart}
        cartItems={cartItems}
        count = {count}
        setCount = {setCount}
      />
    </div>
  );
};


export default ProductDetails;