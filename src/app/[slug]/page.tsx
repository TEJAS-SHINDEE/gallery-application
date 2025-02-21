"use client";
import { useParams } from "next/navigation";
import { data } from "../data";
import Image from "next/image";
import { CircleX, ImageDown, Send } from "lucide-react";
import { useState } from "react";

export default function getRoute() {
  const [imgIndex, setImgIndex] = useState<number>(0);

  // Calling useRouter() hook
  const params = useParams();
  const id = params.slug;

  const singleImage = data.filter((image) => {
    return image.imageId == Number.parseInt(id);
  });
  //   console.log("single img",singleImage);
  //   console.log("single img",singleImage[0].imageId);

  const handleShare = async () => {
    alert("share invoked");

    const response = await fetch(singleImage.imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "share-img.png", { type: blob.type });
    const tempShareImg = {
      title: singleImage.category,
      text: singleImage.description,
      files: [file],
    };

    await navigator.share(tempShareImg);
  };

  const handleDownload = () => {
    alert("img download");
  };

  return (
    <div className=" h-full w-full  m-auto object-contain bg-black px-20 py-6 text-base text-white ">
      <Image
        className="rounded-sm self-center m-auto object-contain"
        src={singleImage[0]?.imageUrl}
        width={200}
        height={200}
        sizes="100vw"
        // style={{ width: "40%", height: "250%" }}
        alt="Picture of the author"
      />
      <div className="m-auto p-6 w-[70%]">
        <p>In the Paintings : <span className="font-semibold"># {singleImage[0]?.imageId} </span></p>
        <p>Image description : {singleImage[0]?.description}</p>
        <p>Image Category : <button type="button" className=" px-2 rounded-lg bg-neutral-700">{singleImage[0]?.category}</button></p>
      </div>
      <button
        type="button"
        className="absolute top-30 right-4 cursor-pointer"
        onClick={() => {
          handleShare();
        }}
      >
        <Send size={30} strokeWidth={2} />
      </button>
      <button
        type="button"
        className="absolute top-42 right-4 cursor-pointer"
        onClick={() => {
          handleDownload();
        }}
      >
        <ImageDown size={28} />
      </button>
    </div>
  );
}
