"use client";
import React, { useState } from "react";
import { data } from "../data";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowLeft, CircleArrowRight, CircleX, SquareArrowOutUpRight, StretchHorizontal } from "lucide-react";

const page = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any[]>([]);
  const [newData, setNewData] = useState<any[]>(data);
  const [filter, setFilter] = useState<string>("");

  console.log("sort page");

  const setData = (query:string) => {
    console.log("set data prev", data);
    console.log("filter ", filter);
    let filterArray = data.filter((image) => {
      return image.category === query;
    });
    setNewData(filterArray);
    console.log("new data ", newData);
  };

  const [imgIndex, setImgIndex] = useState<number>(0);
  const [next , setNext] = useState<number>(0);
  const [prev , setPrev] = useState<number>(0);
  
  const handleNext = (index:number) => {
    const nextIndex = imgIndex + 1 >= newData.length ? 0 : imgIndex + 1;
    setImgIndex(nextIndex);
    setNext(next+1);
    setPrev(prev+1);
    setImageData(newData[nextIndex]);
  }

  const handlePrev = (index:number) => {
    const prevIndex = imgIndex - 1 < 0 ? newData.length - 1 : imgIndex - 1 ;
    setImgIndex(prevIndex);
    setNext(next-1);
    setPrev(prev-1);
    setImageData(newData[prevIndex]);
  }

  return (
    <div className="w-full bg-black">
      <div className="text-white">
        <ul className="flex justify-evenly pt-4 cursor-pointer">
          <li className="border rounded-full px-4 py-2 flex gap-2">
            <p>🔔</p>
            <p>All</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={ () => {
              setData("Car");
            }}
          >
            <p>🚘</p>
            <p>Car</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              setData("Nature");
            }}
          >
            <p>🌳</p>
            <p>Nature</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              setData("Home");
            }}
          >
            <p>🏠</p>
            <p>Home</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              setData("Animal");
            }}
          >
            <p>🐎</p>
            <p>Animal</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={ () => {
              setData("City");
            }}
          >
            <p>🏙️</p>
            <p>City</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              setData("Food");
            }}
          >
            <p>🍔</p>
            <p>Food</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={ () => {
              setData("Sport");
            }}
          >
            <p>⚽</p>
            <p>Sport</p>
          </li>
        </ul>
      </div>{" "}
      <div className="relative  grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {newData.map((image, index:number) => (
          <div
            key={image.imageId}
            className="relative h-[96%] w-[96%] row-span-1 col-span-1 m-4 flex justify-center hover:cursor-pointer bg-white"
            
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
              <span className="self-end p-10"><Link href={`/${image.imageId}`} className="p-10"><SquareArrowOutUpRight strokeWidth={1.50} />  </Link></span>
              <span 
              className="self-end p-10"
              onClick={() => {
              setOpen(!open);
              setImageData(image);
              let nextIndex = index+3 >= data.length ? data.length % data.length-3 : index+4;
              setNext(nextIndex);
              let prevIndex = index-3 < 0 ? data.length - index : index-3;
              setPrev(prevIndex);
              setImgIndex(index);
              console.log('next',next);
              console.log('prev',prev);
            }}> <StretchHorizontal /></span>
            </p>
            <p className="absolute right-4 top-4 text-sm text-white px-2 py-0.9 bg-black/60 rounded-sm ">
              {image.category}
            </p>
            {open && (
              <div className="fixed inset-0 h-full w-full rounded-md m-auto object-cover bg-black/80 px-10 py-6 text-base text-white px-1 opacity-0 hover:opacity-100 duration-500 ">
                <button
                  type="button"
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => {
                    setOpen(!open);
                    setImageData([]);
                  }}
                >
                  <CircleX strokeWidth={2} size={30} />
                </button>
                <Image
                  className="rounded-sm self-center m-auto duration-200"
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

                <div className="h-20 w-full  mt-8 flex flex-row items-center px-2 gap-2 overflow-auto justify-center">
                  {newData.slice(prev,next).map((item) => (
                    <div key={item.imageId} className="h-16 w-24  rounded-md"> 
                    
                      <Image
                        className={`self-center rounded-sm ${imageData?.imageUrl === item.imageUrl ? "scale-110 opacity-100" : 'scale-100 opacity-45'}  duration-200 ease-linear `}
                        src={item.imageUrl}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ height: "100%" , width: "100%" }}
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
};
export default page;
