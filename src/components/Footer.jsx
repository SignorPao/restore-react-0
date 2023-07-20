import React from "react";
import { BsChatSquareDots } from "react-icons/bs";

let date = () => {
  let date = 2023;
  let current = new Date().getFullYear()
  return date === current ? date : `${date} - ${current}`;
};

function Footer() {
  return (
    <footer className="max-w-[1140px] w-full m-auto py-8 px-4">
      <div className="flex items-center justify-center m-auto border-t-4 pt-8">
        <BsChatSquareDots
          size={30}
          className="text-[var(--primary-dark)] mr-2"
        />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 text-sm text-gray-500">
        <p>{date()} &copy; All rights reserved</p>
        <p>
          Powered by{" "}
          <a
            href="https://pavelbelousov.vercel.app/"
            className="hover:text-[var(--primary-dark)]"
          >
            @signorPao
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
