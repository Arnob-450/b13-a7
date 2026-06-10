

const Dashboard = () => {
    return (
        <div className="container mx-auto mb-10 px-15 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mb-10">
                <div className="bg-base-100 shadow-md rounded-lg p-6 text-center">
                    <p className="text-4xl font-semibold ">10</p>
                    <p className="text-lg text-gray-400 ">Total Friends</p>
                </div>
                <div className="bg-base-100 shadow-md rounded-lg p-8 text-center">
                    <p className="text-4xl font-semibold ">6</p>
                    <p className="text-lg text-gray-400 ">On Track</p>
                </div>
                <div className="bg-base-100 shadow-md rounded-lg p-6 text-center">
                    <p className="text-4xl font-semibold ">6</p>
                    <p className="text-lg text-gray-400 ">Need Attention</p>
                </div>
                <div className="bg-base-100 shadow-md rounded-lg p-6 text-center">
                    <p className="text-4xl font-semibold ">12</p>
                    <p className="text-lg text-gray-400 ">Interactions This Month</p>
                </div>
            </div>
            <div className="w-full border-t border-gray-300 my-6"></div>
        </div>
    );
};

export default Dashboard;