import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "./wishlistSlice";
import Header from "./Header";
import Footer from "./Footer";


const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist)
    function removeItem(item) {
        dispatch(removeFromWishlist(item.id))
    }
    return (
        <div className="bg-slate-100">
            <Header />
            <div className="flex justify-center bg-slate-100">
                <div className="border-1 border-slate-400 shadow-2xl shadow-gray-400 mt-2 w-[60%] h-200 bg-slate-100 ">
                <div className="flex justify-center"><h2 className="text-2xl font-bold mb-4">My Wishlist</h2></div>
                {wishlist.length === 0 ? (
                    <p>No items in your wishlist.</p>
                ) : (
                    wishlist.map((item) => (
                       <div className="mt-4 flex justify-center "> 
                        <div key={item.id} className="p-2 border-1 border-slate-400 shadow-2xl shadow-gray-400 w-[80%]">
                            <div className="flex">
                                <div><img src={item.image}   className="mt-2 w-full h-40 object-cover rounded"/></div>
                                <div className="">
                                <p className="font-semibold text-2xl ml-4">{item.name}</p>
                            <div className="flex ">
                                <p className="text-xl text-pink-500 ml-10">{item.city}</p>
                            <span onClick={() => { removeItem(item) }} className="material-symbols-outlined ml-4 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                            height="24px" viewBox="0 -960 960 960" width="24px"
                             fill="#BB271A"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0
                              33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160
                               0h80v-360h-80v360ZM280-720v520-520Z"/></svg> </span>
                            </div>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    ))
                )}

            </div>

            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;