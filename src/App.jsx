import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { products as productsArray } from "./data/products";
import ImgNotSelected from "./components/imgNotSelected";
import ImgContainer from "./components/ImgContainer";

function App() {
  const [products, setProducts] = useState(productsArray);
  const [isActiveProduct, setIsActiveProduct] = useState(
    products.find((item) => item.isActive)
  );

  console.log(isActiveProduct);

  function handleClickBtn(proId) {
    const selectedProduct = productsArray.find((item) => item.id === proId);
    selectedProduct.isActive = true;
    setIsActiveProduct(selectedProduct);

    const notSelectedProduct = productsArray
      .filter((item) => item.id !== proId)
      .map((item) => {
        return {
          ...item,
          isActive: false,
        };
      });

    const newProducts = [...notSelectedProduct, selectedProduct].sort(
      (a, b) => a.id - b.id
    );

    setProducts(newProducts);
  }
  return (
    <>
      <main className="container" style={{ marginTop: "25px" }}>
        {isActiveProduct ? (
          <img src={isActiveProduct.imgName} />
        ) : (
          <ImgNotSelected />
        )}
        <ImgContainer products={products} handleClickBtn={handleClickBtn} />
      </main>
    </>
  );
}

export default App;
