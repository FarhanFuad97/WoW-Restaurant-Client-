/* eslint-disable react/prop-types */
import FoodCard from "../../../Components/FoodCard/FoodCard";


const OrderTabs = ({items}) => {
    return (
        <div className='grid grid-cols-1 p-4 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        {
                            items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                            >

                            </FoodCard>)
                        }
                    </div>
    );
};

export default OrderTabs;