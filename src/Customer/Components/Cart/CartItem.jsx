import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
    return (
        <div className="flex flex-col  justify-between p-4 bg-white shadow-md rounded-lg">
            {/* Image */}
            <div className="flex items-center space-x-4">
                <img
                    src="https://i.ibb.co.com/xq0018gD/img1.jpg"
                    alt="Women Fit and Flare Dark Green, Yellow Dress"
                    className="w-20 h-24 object-cover rounded-md"
                />

                {/* Product Details */}
                <div>
                    <h2 className="text-lg font-semibold">
                        Women Fit and Flare Dark Green, Yellow Dress
                    </h2>
                    <p className="text-sm text-gray-600">Size: M, White</p>
                    <p className="text-sm text-gray-600">Seller: SUBH LAXMI</p>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400 line-through">₹1599</span>
                        <span className="text-black font-semibold">₹399</span>
                        <span className="text-green-500 text-sm">75% off</span>
                    </div>
                </div>
            </div>

            {/* Quantity & Remove */}
            <div className="flex items-center space-x-4">
                <div className="border border-gray-300 rounded-md flex items-center px-2 py-1">
                    <IconButton>
                        <RemoveCircleIcon></RemoveCircleIcon>
                    </IconButton>
                    <span className="px-2">1</span>
                    <IconButton  sx={{color:'purple'}}>
                        <AddCircleIcon></AddCircleIcon>
                    </IconButton>
                </div>
                <button className="text-purple-500  hover:text-red-600 text-sm flex items-center">
                    <FaTrashAlt className="mr-1" /> REMOVE
                </button>
            </div>
        </div>
    );
};

export default CartItem;