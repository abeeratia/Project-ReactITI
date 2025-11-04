import React from "react";
import { subjects } from "../lib/data";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <FaPhoneAlt className="text-teal-400 text-xl" />
          <p>Call : +01 0105548488</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaEnvelope className="text-teal-400 text-xl" />
          <p>Email : abeer@gmail.com</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <FaMapMarkerAlt className="text-teal-400 text-xl" />
          <p>Location</p>
        </div>
      </div>

      <div className="container mx-auto px-10 py-10 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">quick links</h3>
          <div className="flex gap-10">
            <ul className="space-y-2">
              <li className="hover:text-teal-400 cursor-pointer">Home</li>
              <li className="hover:text-teal-400 cursor-pointer">Furniture</li>
              <li className="hover:text-teal-400 cursor-pointer">Contact Us</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-teal-400 cursor-pointer">About</li>
              <li className="hover:text-teal-400 cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>

        <div className="w-75">
          <h3 className="text-lg font-semibold mb-4">instagram feed</h3>
          <div className="grid  grid-cols-3 gap-3">
            {subjects.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className="w-full h-20 object-cover rounded-md hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            sign up for our newsletter
          </h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded text-black bg-gray-100 mb-3"
          />
          <button className="bg-teal-400 text-black px-4 py-2 rounded font-semibold hover:bg-teal-300">
            Subscribe
          </button>

          <div className="flex flex-column items-center  mt-4">
            <a
              href="#"
              className="border border-teal-400 p-2 rounded hover:bg-teal-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="border border-teal-400 p-2 rounded hover:bg-teal-400 hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="border border-teal-400 p-2 rounded hover:bg-teal-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="border border-teal-400 p-2 rounded hover:bg-teal-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
