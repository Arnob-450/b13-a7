import { Suspense } from "react";
import Banner from "../../component/homepage/Banner";
import Dashboard from "../../component/homepage/Dashboard";
import Friends from "../../component/homepage/Friends";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Dashboard></Dashboard>
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            }>
                <Friends></Friends>
            </Suspense>

        </div>
    );
};

export default HomePage;