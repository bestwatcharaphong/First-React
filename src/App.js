import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductItem from './component/Product/ProductItem'

function App() {
  return (
    <div >
      <Header />
      <ProductItem productName="Iphone X" unitPrice="45000" />
      <ProductItem productName="Iphone Y" unitPrice="45000" />
      <ProductItem productName="Iphone Z" unitPrice="45000" />
      <ProductItem productName="Iphone A" unitPrice="45000" />
      <Footer company = "The Best" email = "watcharphong505@outlook.com"/>
    </div>
  );
}

export default App;
