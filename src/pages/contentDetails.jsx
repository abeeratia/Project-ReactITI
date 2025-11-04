import { useEffect, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { useParams } from "react-router-dom";

function ContentDetails() {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  console.log("obj", { id });

  async function getProductsById() {
    try {
      const response = await fetch(
        `https://ecommerce.routemisr.com/api/v1/categories/${id}`
      );
      console.log("response", response);
      const { data } = await response.json();
      console.log("data", data);
      setProduct(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoader(false);
    }
  }
  useEffect(() => {
    getProductsById();
  }, []);

  if (loader) {
    return (
      <div className=" text-center h-screen flex items-center justify-center">
        <div>
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className=" text-center h-screen flex items-center justify-center">
      <div>
        <img
          className="w-75  rounded-circle max-w-md rounded-xl shadow-lg"
          src={product.image}
          alt={product.name}
        />
        <h2 className="text-3xl font-bold mt-5 text-black uppercase w-75">
          {product.name}
        </h2>

        <p className="text-gray-600 leading-relaxed  mt-5">{product.slug}</p>
      </div>
    </div>
  );
}

export default ContentDetails;
