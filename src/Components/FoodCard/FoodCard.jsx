/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {name,image, price, recipe} = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <p className="bg-slate-900 text-white absolute right-4 mt-3 p-1 rounded-md">${price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;