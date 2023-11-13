import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title> WoW ! Menu </title>
            </Helmet>
            <Cover img={menuimg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuimg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuimg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>

            <Cover img={menuimg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;