import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredimg from '../../assets/home/featured.jpg';
import '../Featured/Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed  ">
          <SectionTitle subHeading={"Check it Out"}
                         heading={"Featured Item"}
          ></SectionTitle>  
          <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60  pb-20 px-10 pt-12">
            <div>
                <img src={featuredimg} alt="" />
            </div>
            <div className="md:ml-10">
                <p className="mb-3 mt-3">Nov 12, 2023</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem voluptates dolore at, repudiandae omnis ea doloremque pariatur magni, eaque architecto deleniti! Totam maiores voluptatibus aut, labore tenetur sit eaque?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>

            </div>
          </div>

        </div>
    );
};

export default Featured;