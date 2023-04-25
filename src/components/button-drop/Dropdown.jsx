import React, { useState } from "react";

function Dropdown({ label }) {
  const [open, setopen] = useState(false);
  return (
    <div className=" w-fit overflow-hidden">
      <button
        className="relative z-10 flex items-center rounded-md bg-primary p-2 text-white"
        onClick={() => {
          setopen(!open);
        }}
      >
        <span>{label}</span>
        <span>
          {open ? (
            <i className="fa-solid fa-angle-up text-ts m-2"></i>
          ) : (
            <i className="fa-solid fa-angle-down text-ts m-2"></i>
          )}
        </span>
      </button>

      <ul
        className={
          open
            ? "translate-Y-0 linear rounded-md bg-[#4949f834] transition duration-[200ms]"
            : "translate-y-[-200px]"
        }
      >
        <li className="border-b-2 border-white px-1 py-2 ">
          <a href="https://forms.office.com/r/Gnhs5zFTuA" className="text-sm">
            {" "}
            Campus Ambassadors
          </a>
        </li>
        <li className="p-2">
          <a href="https://forms.office.com/r/6Cpjb9f9Z0" className="text-sm">
            {" "}
            Agent Ambassador (Marketers)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
