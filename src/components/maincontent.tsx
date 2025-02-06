"use client";
import Image from "next/image";
import Link from "next/link";
import { data } from "../app/data";
import { useState } from "react";
import {
  CircleArrowLeft,
  CircleArrowRight,
  CircleX,
  ImageDown,
  Send,
  SquareArrowOutUpRight,
  StretchHorizontal,
} from "lucide-react";

export function Maincontent() {
  const [open, setOpen] = useState<boolean>(false);
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);
  const [imageData, setImageData] = useState([]);
  const [shareData, setShareData] = useState<
    { title: string; text: string; url: string }[]
  >([]);

  const handleNext = (index: number) => {
    const nextIndex = imgIndex + 1 >= data.length ? 0 : imgIndex + 1;
    setImgIndex(nextIndex);
    setNext(next + 1);
    setPrev(prev + 1);
    // setNext((prevNext) => (prevNext - 1 + data.length) % data.length); // Ensure next stays within bounds
    // setPrev((prevPrev) => (prevPrev - 1 + data.length) % data.length); // Ensure prev stays within bounds
    setImageData(data[nextIndex]);
  };

  const handlePrev = (index: number) => {
    const prevIndex = imgIndex - 1 < 0 ? data.length - 1 : imgIndex - 1;
    setImgIndex(prevIndex);
    setPrev(prev - 1);
    setNext(next - 1);
    // setNext((prevNext) => (prevNext + 1 + data.length) % data.length); // Ensure next stays within bounds
  // setPrev((prevPrev) => (prevPrev + 1 + data.length) % data.length); // Ensure prev stays within bounds
    setImageData(data[prevIndex]);
  };

  const handleShare= async () =>  {
    alert('share invoked');
    // const dd = 
    // setShareData() //title text url
  }

  return (
    <div className="w-full bg-black">
      <div className="relative grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((image, index: number) => (
          <div
            key={image.imageId}
            className="relative h-[96%] w-[96%] row-span-1 col-span-1 m-auto flex justify-center hover:cursor-pointer bg-white"
          >
            <Image
              className="rounded-sm self-center"
              src={image.imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{ height: "96%", width: "96%" }}
              alt="Picture of the author"
            />
            <p className="absolute h-full w-full bg-black/40 px-10 py-6 text-base text-white px-1 opacity-0 hover:opacity-100 duration-500 ">
              {image.description}
              {index}
              <span className="self-end p-10">
                <Link href={`/${image.imageId}`} className="p-10">
                  <SquareArrowOutUpRight strokeWidth={1.5} />{" "}
                </Link>
              </span>
              <span
                className="self-end p-10"
                onClick={() => {
                  setOpen(!open);
                  setImageData(image);
                  let nextIndex =
                    index + 4 >= data.length
                      ? (index + 4) % data.length
                      : index + 5;
                  setNext(nextIndex);
                  let prevIndex =
                    index - 4 < 0 ? data.length % (index - 4) : index - 4;
                  setPrev(prevIndex);
                  setImgIndex(index);
                  console.log("next", next);
                  console.log("prev", prev);
                }}
              >
                {" "}
                <StretchHorizontal />
              </span>
            </p>
            <p className="absolute right-4 top-4 text-sm text-white px-2 py-0.9 bg-black rounded-sm ">
              {image.category}
            </p>
            {open && (
              <div className="fixed inset-0 h-full w-full rounded-md m-auto object-cover bg-black px-10 py-6 text-base text-white px-1 opacity-0 hover:opacity-100 duration-500 ">
                <button
                  type="button"
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => {
                    setOpen(!open);
                    setImageData([]);
                  }}
                >
                  <CircleX strokeWidth={2} size={30} />
                </button>
                <button
                  type="button"
                  className="absolute top-16 right-4 cursor-pointer"
                  onClick={()=>{handleShare()}}
                >
                  <Send size={30} strokeWidth={2} />
                </button>
                <button
                  type="button"
                  className="absolute top-28 right-4 cursor-pointer"
                  onClick={()=>{
                    alert('img download');
                  }}
                >
                  <ImageDown size={28} />                
                </button>
                <Image
                  className="rounded-sm self-center m-auto"
                  src={imageData.imageUrl}
                  width={400}
                  height={400}
                  sizes="100vw"
                  // style={{ height: "80%", width: "90%" }}
                  alt="Picture of the author"
                />

                <button
                  type="button"
                  className="absolute top-[50%] left-4 cursor-pointer"
                  onClick={() => {
                    handlePrev(index);
                  }}
                >
                  {" "}
                  <CircleArrowLeft size={30} />
                </button>
                <button
                  type="button"
                  className="absolute top-[50%] right-4 cursor-pointer"
                  onClick={() => {
                    handleNext(index);
                  }}
                >
                  {" "}
                  <CircleArrowRight size={30} />
                </button>

                <div className="h-20 w-full  mt-8 flex flex-row items-center justify-center px-2 gap-2 overflow-auto ease-linear">
                  {data.slice(prev, next).map((item) => (
                    <div key={item.imageId} className="h-16 w-24  rounded-md">
                      <Image
                        className={`self-center rounded-sm ${imageData?.imageUrl === item.imageUrl ? "scale-110 opacity-100" : "scale-100 opacity-45"}  duration-200 ease-linear `}
                        src={item.imageUrl}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: "100%", width: "100%" }}
                        alt="Picture of the author"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
