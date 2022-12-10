


const ProductDetails = ({product, visible}) => {

    if (!visible) return null

    if (!product) return (
      <div className="product-details">
        <p className="product-info">Tuotteemme</p>
        <p>Tervetuloa meidän mahtavaan eräkauppaamme.</p>
        <p> Valitse tuotteita, katso tiedot ja laita kortti vinkumaan!</p>
      </div>
    )

    return (
      <div className="product-details">
        <p className="product-info">{product.name}</p>
          <p>{product.description}</p>
            <p className="product-price">{product.price}€</p>
              <p>Tiedot</p>
              <ul>
                {product.details.map((item, index) => 
                  <li className="product-details-list-item" key={index}>
                    {item.label}<br />
                    <span className="product-info">{item.value}</span>
                  </li>)}
                  <p><strong>Varastossa: {product.stock} kpl</strong></p>
              </ul>
      </div>
    )
}

export default ProductDetails