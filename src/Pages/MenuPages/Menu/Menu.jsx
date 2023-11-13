/* eslint-disable react-hooks/rules-of-hooks */
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg'

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
            <SectionTitle subHeading="Don't Miss" heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            
            
        </div>
    );
};

export default Menu;