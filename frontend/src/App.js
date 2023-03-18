import data from './data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';

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
          </Routes>
          <h1>Featured Products</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
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
