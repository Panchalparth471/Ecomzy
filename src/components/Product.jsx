import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/cartSlice";

function Product({ post })
{

  const { cart } = useSelector((state) => (state));
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success(
      "Item addded to cart"
    );
  }


  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }
    return (
    <div className="flex flex-col items-center justify-between hover:scale-110 hover:shadow-2xl shadow-black transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 font-normal text-[10px] text-left text-gray-400 " >{post.description.split(" ").slice(0,10).join(" ") + "..." }</p>
      </div>
      <div className="h-[180px]">
        <img src={`${post.image}`} className="h-full w-full"></img>
        </div>
        
        <div className="flex justify-between gap-12 mt-5">
          <div>
        <p className="text-green-600 font-semibold gap-12 items-center w-full ">${post.price}</p>
        </div>
        
        {
          cart.some((p)=>p.id==post.id)?(<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in " onClick={removeFromCart}>Remove Item</button>):(<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white  transition duration-300 ease-in " onClick={addToCart}>Add Item </button>)
        }
</div>

      
    </div>
  );
}

export default Product;
