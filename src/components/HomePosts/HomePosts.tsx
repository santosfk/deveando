import React from "react";
import { usePrismicDocuments } from "@prismicio/react";
export default function HomePosts() {
  const [documents] = usePrismicDocuments();
  documents?.results.map((item) => {
    const dataDescription = item.data.description[0].text;
    console.log(item);
    return console.log(dataDescription);
  });
  return <div>HomePosts</div>;
}
