import { BlogTypes } from "@/app/blogs/page";
import AllBlogsPage from "@/components/Dashboard/AllBlogsPage";
import { backend } from "@/utils/backend";

import React from "react";

const AllBlogPage = async () => {
  const res = await fetch(`${backend}/admin/blogs`, {
    cache: "no-store",
  });

  const { data: blogs }: { data: BlogTypes[] } = await res.json();

  return (
 <div className="">
    <AllBlogsPage blogs={blogs}/>
 </div>
  );
};

export default AllBlogPage;
