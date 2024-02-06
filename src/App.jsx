import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";


const App = () => {


  return (
    <div className="w-full h-full flex flex-col items-center"> 
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>   
      </Routes>
    </div>
  );
};

export default App;
