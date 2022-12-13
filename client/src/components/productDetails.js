//import Cart from "./Cart";

const ProductDetails = ({ product, visible, setCart, cartItems, sideOpen, setSideOpen }) => {
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
        sideOpen = {sideOpen}
        setSideOpen = {setSideOpen}
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
        onClick={() => props.setCart(addItem(props.item, props.cartItemsn))}
      >
        Add to cart
      </button>
      <b id="total"></b>
    </div>
  );

  function addItem(item, cartItems) {
    let already = false;
    let amount = document.querySelector("#quantity").value;

    if (!amount) amount = 1;
    console.log("Määrä: " + amount);
    console.log(cartItems);
    for (var existing in cartItems) {
      /* THIS SHIT DONT WORK */

      console.log(existing);
      console.log(
        "new item name: " + item.name + "\nexisting name: " + existing.name
      );

      if (item.name === existing.name) {
        existing.qty += amount;
        already = true;
      }
    }

    /* THIS SHIT DO WORK */
    if (!already) {
      cartItems.push({
        name: item.name,
        id: item.id,
        qty: amount,
      });
    }

    return cartItems;
  }
};

export default ProductDetails;