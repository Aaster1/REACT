import logo from './logo.svg';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  const product = {
    productId : 'P1000001',
    name : '베이직 플라 니트',
    price : 42000,
    quantity : 1,
    img : 'https://i.imgur.com/1vpSkbW.png'
  }

  return (
   <div>
    <ProductDetail product={product}/>
   </div>
  );
}

export default App;
