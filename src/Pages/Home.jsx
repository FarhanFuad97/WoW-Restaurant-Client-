import Banner from "./Banner/Banner";
import CategoryOrder from "./CategoryOrder/CategoryOrder";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testmonials from "./Testmonials/Testmonials";


const Home = () => {
    return (
        <div>
       <Banner></Banner> 
       <CategoryOrder></CategoryOrder>   
       <PopularMenu></PopularMenu>
       <Featured></Featured> 
       <Testmonials></Testmonials> 
        </div>
    );
};

export default Home;