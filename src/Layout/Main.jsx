import { Outlet } from "react-router-dom";
import Navigation from "../Customer/Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

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