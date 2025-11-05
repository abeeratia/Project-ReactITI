import { useEffect, useState } from "react";
import Card from "./card";
import { Vortex } from "react-loader-spinner";
function Content() {
  const [subjects, setSubjects] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const data = await fetch(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      const response = await data.json();
      console.log("response", response);
      console.log("response", response.statusMsg);
      if (response.statusMsg === "fail") {
        throw new Error("something went wrong");
      }
      setSubjects(response.data);
    } catch (error) {
      setErrMessage(error.message);
      console.error("error error error", error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-50">
        <Vortex
          visible={true}
          height="150"
          width="150"
          ariaLabel="vortex-loading"
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  if (errMessage) {
    return (
      <h2 className="text-3xl font-bold text-red-600 text-center mt-10">
        {errMessage}
      </h2>
    );
  }

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mt-10">Media</h1>
      <label
        htmlFor="media"
        className="text-2xl font-bold block mt-10 text-center"
      >
        Choose Media Type:
      </label>{" "}
      <div className="container mt-17 grid  xl:grid-cols-3 gap-10">
        {subjects.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Content;
