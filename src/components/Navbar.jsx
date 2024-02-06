import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../logo.png";

const Navbar = () => {
  const { cart } = useSelector((state) => (state));
  return (
    <div className="w-full flex justify-around gap-40 items-center h-20 bg-slate-900">
      <div>
         <img src={logo} width="100" height="100"></img>
      </div> 
      <div className="flex gap-4 items-center text-white">
        <NavLink to="/"> <div><p>Home</p></div></NavLink>
        <NavLink to="/cart">
    
          <FaShoppingCart className="text-2xl"></FaShoppingCart>
           {
            cart.length>0 && <span className="absolute top-[20px] right-[18.6%] bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">{cart.length}</span>

          }
        </NavLink>
       
       
       </div>

 
    </div>
  );
};

export default Navbar;
