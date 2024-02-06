import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import Cart from "./Cart";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  

   useEffect(() => {
    fetchProductData();
   }, [])
  
  async function fetchProductData() {
    
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    console.log(data);
    }
    catch (e)
    {
      console.log("Error in fetching data");
      setPosts();
      console.log(e);
    }

     setLoading(false);
  }
  

  
 

  return (
    <div >
      {
        loading ? (<Spinner></Spinner>) : (posts.length > 0 ? (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-5 min-h-[80vh]">
            { 
              posts.map((post) => {
                return <Product key={post.id} post={post}></Product>
              })
            }
        </div>
        ) : (
          <div className="flex justify-center items-center "><p>No data found </p></div>))
      }
    </div>
  );
};

export default Home;
