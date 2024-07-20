import React from 'react'
import Starter from './Starter'

const BlogPost = () => {
  return (
    <div className="w-full min-h-screen rounded-[3rem] pb-10 my-10">
      <Starter header={"Recent Blog Posts"} btnText={"See more"}/>
    </div>
  );
}

export default BlogPost
