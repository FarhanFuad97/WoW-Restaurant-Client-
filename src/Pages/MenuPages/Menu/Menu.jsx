/* eslint-disable react-hooks/rules-of-hooks */
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/UseMenu';
import MenuCategory from './MenuCategory/MenuCategory';






const Menu = () => {

    const [menu] = useMenu();
 
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title> WoW ! Menu </title>
            </Helmet>
            <Cover img={menuimg} title="Our Menu"></Cover>
             {/*main cover*/}
            <SectionTitle subHeading="Don't Miss" heading={"Today's Offer"}></SectionTitle>
            {/*---Offered menu items---*/}
            <MenuCategory items={offered}></MenuCategory>

            {/*---Dessert menu items---*/}

            <MenuCategory items={desserts}
                         title="Dessert"
                         img={dessertImg}
            ></MenuCategory>

            {/*---soup menu items---*/}

            <MenuCategory items={soup}
                         title="Soup"
                         img={soupImg}
            ></MenuCategory>

            {/*---salad menu items---*/}

            <MenuCategory items={salad}
                         title="Salad"
                         img={saladImg}
            ></MenuCategory>

             {/*---pizza menu items---*/}

             <MenuCategory items={pizza}
                         title="Pizza"
                         img={pizzaImg}
            ></MenuCategory>
            
            
        </div>
    );
};

export default Menu;