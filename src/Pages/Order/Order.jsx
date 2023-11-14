import { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderimg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/UseMenu';
import OrderTabs from './Ordertabs/OrderTabs';

const Order = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover img={orderimg} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='text-center mt-6'>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                </div>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={desserts}></OrderTabs>
                </TabPanel>
                <TabPanel>
                <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;