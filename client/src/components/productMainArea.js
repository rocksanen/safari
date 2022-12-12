import "../styles/productView.css";
import ProductListItem from "../scripts/ProductListItem";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import Profile from "./profile";

const ProductMain = ({
  setSideOpen,
  setSelectedProduct,
  sideOpen,
  products,
}) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleSubmit = () => {
    logout();
  };
  return (
    <div id="products" className="product-main-area">
      <h1>Meidän tavaramme</h1>

      {user && (
        <div id="active-profile">
          <Profile user={user} />
          <div id="user-active">{user.name}</div>
          <button onClick={handleSubmit} id="logout">
            Log out
          </button>
        </div>
      )}
      <div className="product-list">
        {products.map((item) => (
          <ProductListItem
            key={item.id}
            product={item}
            onClick={() => {
              setSideOpen(!sideOpen ? !sideOpen : sideOpen);
              setSelectedProduct(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductMain;
