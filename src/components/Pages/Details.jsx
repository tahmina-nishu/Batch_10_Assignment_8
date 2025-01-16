import { useLoaderData, useParams } from "react-router-dom";
import wish from '../../assets/love.png';
import Specifications from "./Specifications";

const Details = () => {

    // const param = useParams();
    // console.log(param);

    const {product_id} = useParams();
    console.log(product_id);

    const data = useLoaderData();
    console.log(data);
    
    //params ta string hisebe pabo. access korar jonno eta k int e convert kore nite hbe
    const id = parseInt(product_id);
    console.log(id);

    const gadget = data.find(gadget => gadget.product_id === id);
    console.log(gadget);

    const {product_image, product_title, availability, Specification, description, price, rating} = gadget;

    const handleAddToCart = () => {
        /*
            1. what to store => id
            2. where to store: database
            3. array, list, collection:
            4. check if the item is already added
                => if not, then add to cart
                => or don't add
        */

                alert('Added');
    }

    return (
        <div>
            {/* banner div  */}
            <div className="bg-[#9538E2] pt-10 pb-56 px-48 text-center text-white flex flex-col justify-center gap-4 rounded-xl">
                <h3 className="text-2xl font-bold">Product Details</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* detals div  */}
            <div>
                <div className="flex justify-center items-center gap-5 shadow-xl p-7 rounded-xl w-3/4 mx-auto mt-[-180px] bg-white">
                <img className="w-72" src={product_image} />
                <div className="text-left space-y-4">

                    {/* Title  */}
                    <h3 className="text-2xl font-bold">{product_title}</h3>

                    {/* Price  */}
                    <h4 className="text-lg">Price: $ {price}</h4>

                    {/* Availability button  */}
                    <button className="bg-[#309C081A] border-2 border-[#309C08] text-[#309C08] rounded-full">In Stock</button>

                    {/* Description  */}
                    <p className="text-[#09080F99]">{description}</p>

                    {/* Specifications div*/}
                    <div>
                        <h4 className="text-xl font-bold">Specifications</h4>
                        <ol type="number">
                        {
                        Specification.map(spec => 
                            (
                                <li className="text-gray-400 pl-4 text-sm">{spec}</li>
                            ))
                        }
                        </ol>
                    </div>

                    {/* Rating div  */}
                    <div>
                        <h4 className="text-xl font-bold">Rating</h4>
                        <div className="flex gap-4 items-center">

                            {/* Rating star  */}
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>

                            {/* rating text  */}
                            <p className="bg-gray-200 p-2 rounded-full w-10">{rating}</p>
                        </div> 
                    </div>

                    {/* Add to cart or add to wishlist  */}
                    <div className="flex gap-4">
                        <button onClick={handleAddToCart} className="rounded-full bg-[#9538E2] text-white">
                        <h4 className="font-bold">Add To Cart</h4>
                        
                        </button>
                        <button className="bg-white border-2 rounded-full"><img src={wish} /></button>
                    </div>               

                </div>
                </div>
            </div>
        </div>
    );
};

export default Details;