import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PaymentPage from './Components/payment';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     {/* <Footer/> */}
     {/* <PaymentPage/> */}
    </div>
  );
}

export default App;
