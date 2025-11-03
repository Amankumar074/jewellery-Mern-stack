import React from 'react';
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="text-center py-3">
      <p className="mb-1 fw-bold text-[#23264D] py-6">Hallmarked. Handcrafted. 100% Real Silver.</p>
      <div className="relative w-10/12 md:w-5/12 mx-auto">
        <input
          type="text"
          className="form-control w-full rounded-pill py-2 px-4 shadow-md border-0 pl-6"
          placeholder="Search category"
        />
        {/* <div className='shadow-xl rounded-pill absolute top-1/2 transform -translate-y-1/2 right-0 pl-4 py-2 pr-2 mr-[1px]'> */}
          <IoMdSearch size={24} className="absolute top-1/2 transform -translate-y-1/2 right-2" />
        {/* </div> */}

      </div>
    </div>
  );
}

export default SearchBar;
