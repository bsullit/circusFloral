import data from './data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">circusFloral</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
          <h1>Featured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="product-info">
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <strong>{product.price}</strong>
                  <button>Add to cart </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
