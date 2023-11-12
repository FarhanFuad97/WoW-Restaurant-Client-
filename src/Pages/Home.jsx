import Banner from "./Banner/Banner";
import CategoryOrder from "./CategoryOrder/CategoryOrder";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
       <Banner></Banner> 
       <CategoryOrder></CategoryOrder>   
       <PopularMenu></PopularMenu>  
        </div>
    );
};

export default Home;