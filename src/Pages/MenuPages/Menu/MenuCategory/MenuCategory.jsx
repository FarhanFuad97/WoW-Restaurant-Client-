/* eslint-disable react/prop-types */
import Cover from "../../../../Shared/Cover/Cover";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";




const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title="Our Menu"></Cover>}
            <div className="grid gap-5 grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-2 mt-3 ">
        {
            items.map(item=> <MenuItem
            key={item._id}
            item={item}
            >
            </MenuItem>)
        }

        </div> 
        </div>
    );
};

export default MenuCategory;
