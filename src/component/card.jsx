import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment } from "../redux/cartSlice";

function Card(props) {
  const dispatch = useDispatch();
  console.log("abbbbbb", props);

  return (
    <div className="space-y-4 shadow-lg p-10 rounded-4 " key={props.key}>
      <h2 className="text-3xl font-bold text-danger">{props.name}</h2>
      <img className="w-full h-50" src={props.image} alt={props.name} />
      <Link to={`/contentdetails/${props._id}/${props.name}`}>
        <button className=" w-full  cursor-pointer bg-amber-500 text-white px-10 py-2 mt-10">
          Show Details
        </button>
      </Link>
      <button
        onClick={() => {
          dispatch(increment(), console.log("clicked"));
        }}
        className="w-full cursor-pointer bg-amber-500 text-white px-10 py-2 mt-5"
      >
        add to cart
      </button>
      <button
        onClick={() => {
          dispatch(decrement(), console.log("remove"));
        }}
        className="w-full cursor-pointer bg-amber-500 text-white px-10 py-2 mt-5"
      >
        remove cart
      </button>
    </div>
  );
}

export default Card;
