import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <section className="flex md:flex-row flex-col ">
      <div className="h-auto md:h-92vh border-r-2 border-[#3d3d3d] px-0 md:px-2">
        <Sidebar />
        <p className="text-sm font-light text-white">Copyright 2023 Fathan</p>
      </div>
    </section>
  );
};
export default Feed;
