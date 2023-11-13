/* eslint-disable react/prop-types */
import Cover from "../../../../Shared/Cover/Cover";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";




const MenuCategory = ({items,title,img}) => {
    return (
        <div className="p-7">
            {title && <Cover img={img} title={title}></Cover>}
           
            <div className="grid gap-5 grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-2 mt-4 ">
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
