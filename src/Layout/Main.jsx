import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navigation from "../Customer/Components/Navigation/Navigation";

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navigation></Navigation>
            {/* outlet */}
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;