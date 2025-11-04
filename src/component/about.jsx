import imgAbout from "../assets/about-img.png";

function About() {
  return (
    <section className="container my-20 py-20">
      <div className="grid md:grid-cols-2 items-center gap-20">
        <div className="flex justify-center md:justify-end ">
          <img
            src={imgAbout}
            alt="imgtitle"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-black uppercase w-75">
            about us
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            eius a, nisi debitis assumenda magni, repellat consectetur veritatis
            distinctio sint eligendi neque corrupti ab dicta ducimus at deleniti
            fugiat quo!
          </p>
          <div className="flex gap-3">
            <button className=" uppercase bg-blue-400 text-white px-10 py-2">
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
