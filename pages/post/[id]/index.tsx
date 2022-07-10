import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useSelector } from "react-redux";
const OpenPost: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { description, img } = useSelector((state: any) => state.blogInfo);
  console.log(description);
  return (
    <div>
      <h1>{id}</h1>
      <h2>{description}</h2>
      <img src={img} alt="" />
    </div>
  );
};
export default OpenPost;
