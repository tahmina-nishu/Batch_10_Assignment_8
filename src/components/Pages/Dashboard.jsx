
import { useEffect } from "react";

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | Gadget-Haven";
      }, []);


    return (
        <div>
            <div className="text-white bg-[#9538E2] px-48 text-center flex flex-col items-center gap-4 py-10">
                <h2 className="text-3xl">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div>
                    <button className="border-2 border-white text-white rounded-full w-32 mr-7">Cart</button>
                    <button className="border-2 border-white text-white rounded-full w-32">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;