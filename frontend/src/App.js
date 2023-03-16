import data from './data';

// const shmeta = {
//   products: [{ name: 'dummy' }, { name: 'dummy2' }, { name: 'dummy3' }],
// };

function App() {
  return (
    <div>
      <header>
        <a href="/">circusFloral</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {data.products.map((product) => (
          <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
