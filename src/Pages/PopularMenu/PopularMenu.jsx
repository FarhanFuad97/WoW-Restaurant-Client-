
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        } )
    },[])

    return (
        <section className="mb-3">
        <SectionTitle heading={"From Our Menu"}
                      subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid gap-5 grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-2 mt-3 ">
        {
            menu.map(item=> <MenuItem
            key={item._id}
            item={item}
            >
            </MenuItem>)
        }

        </div>
        <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4 mt-5">View Full Menu</button>
        </div>
        </section>
    );
};

export default PopularMenu;