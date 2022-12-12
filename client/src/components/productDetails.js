import Cart from "./Cart";

const ProductDetails = ({ product, visible, setCart, cartItems }) => {
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
      />
    </div>
  );
};
const CartComponent = (props) => {
  return (
    <div className="add-to-cart-complex">
      <input
        type="number"
        id="quantity"
        className="qty-box"
        min={1}
        max={props.item.stock}
        placeholder={1}
      ></input>
      <button
        className="add-to-cart-button"
        onClick={() => props.setCart(addItem(props.item, props.cartItems))}
      >
        Add to cart
      </button>
      <b id="total"></b>
    </div>
  );

  function addItem(item, cartItems) {
    let already = false;
    let amount = parseInt(document.querySelector("#quantity").value);

    console.log(cartItems);

    if (!amount) amount = 1;
    console.log("Määrä: " + amount);
    console.log(cartItems);

    cartItems.map((existing) => {
      /* THIS SHIT DONT WORK */

      console.log(existing);

      if (item.name == existing.name) {
        existing.qty = parseInt(existing.qty) + amount;
        already = true;
      }
      return console.log("existing: " + existing.name);
    })

    /* THIS SHIT DO WORK */
    if (!already) {
      cartItems.push({
        id: item.id,
        name: item.name,
        qty: amount
      });
    }

    return cartItems;
  }
};

export default ProductDetails;
