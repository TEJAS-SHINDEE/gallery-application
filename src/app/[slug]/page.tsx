"use client";
import { useParams } from "next/navigation";
import { data } from "../data";
import Image from "next/image";
import { CircleX } from "lucide-react";

export default function getRoute() {
  // Calling useRouter() hook
  const params = useParams();
  const id = params.slug;

  const singleImage = data.filter((image) => {
    return image.imageId == Number.parseInt(id);
  });
  //   console.log("single img",singleImage);
  //   console.log("single img",singleImage[0].imageId);

  return (
    <div className=" h-full w-full  m-auto object-contain bg-black px-10 py-6 text-base text-white ">
      
      <Image
        className="rounded-sm self-center m-auto object-contain"
        src={singleImage[0]?.imageUrl}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "40%" , height: "250%" }}
        alt="Picture of the author"
      />
      <div className="m-auto p-6">
        <p>In the Paintings : #{singleImage[0]?.imageId} </p>
        <p>Image description : {singleImage[0]?.description}</p>
        <p >Image Category : {singleImage[0]?.category}</p>
      </div>
    </div>
  );
}
