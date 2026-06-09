import { Outlet } from "react-router";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/footer";



const MainLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;