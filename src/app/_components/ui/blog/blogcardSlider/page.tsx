import React from "react";

const BlogCardSlider = () => {
  const blogs = [
    {
      id: 0,
      tag: "Latest update",
      title: "5 Things to keep in mind before construction",
      short_description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, deserunt?",
    },
  ];

  return (
    <>
      <div className="md:flex hidden flex-col gap-2 text-white overflow-hidden w-full">
        <div className="w-[600px] flex overflow-hidden h-auto py-4 px-2">
          {/* {blogs.map((blog) => (
            <div key={blog.id} className="w-[640px]">
              <span>{blog.tag}</span>
              <h2>{blog.title}</h2>
              <p>{blog.short_description}</p>
            </div>
          ))} */}

          <div className="w-[640px] flex flex-col gap-3">
            <span className="px-2 py-3 rounded-md w-[140px] uppercase bg-black/40 border-white border-2 text-sm text-white text-center">
              Latest blog
            </span>
            <h2 className="text-2xl font-medium whitespace-wrap w-[80%]">
              5 Things to keep in mind before construction
            </h2>
            <p className="text-sm text-white w-[90%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus reprehenderit libero excepturi fuga! Quidem quisquam
              assumenda in laudantium mollitia officiis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardSlider;
