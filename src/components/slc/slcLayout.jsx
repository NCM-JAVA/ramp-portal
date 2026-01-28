import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const SlcLayout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-64 min-h-screen transition-all duration-300">
                <Header />
                <main className="flex-1 p-6 bg-gray-100">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default SlcLayout;