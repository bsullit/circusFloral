import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">circusFloral</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
