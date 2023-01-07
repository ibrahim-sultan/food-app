import React from "react";
import {FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1640px] container h-15 mx-auto flex justify-between p-4 bg-gray-400">
      <div className=" mx-auto">
        <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="mb-5 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl px-2">
            Sultan <span className="font-bold">Eats</span>
          </h1>
            <p className="mb-3 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a
              harum ipsa delectus voluptates beatae. Voluptas corrupti repellat
              similique magni inventore repudiandae quas hic? Illo culpa tenetur
              obcaecati dolorum accusamus.
            </p>
            <ul className="flex justify-between text-2xl cursor-pointer text-gray-800">
            <FaFacebook  className='icon' />
           <FaTwitter className='icon' />
           <FaInstagram className='icon' />
           <FaPinterest className='icon' />
           <FaYoutube className='icon' />
            </ul>
          </div>

          <div className="mb-5 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl px-2 mb-4">
            Some Link
            <ul className="text-xl">
                <li className="mb-3 cursor-pointer">FAQ</li>
                <li className="mb-3 cursor-pointer">Cookies Policy</li>
                <li className="mb-3 cursor-pointer">Term of Service</li>
                <li className="mb-3 cursor-pointer">Support</li>
            </ul>
          </h1>
          </div>

          <div className="pt-2">
          <ul className="text-xl">
            <li> 123 los Kwako <br />
                Chandigar pb 23455 Nigera
             </li>

            <li className="mb-2">Email:Sultan4justice@yahoo.com</li>

          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2">
            Newsletter
          </h1>
            <li><input className='rounded-full font-sans focus:outline-none mb-5' type="text" /></li>
            <li><button>Subscribe</button></li>
          </ul>



          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
