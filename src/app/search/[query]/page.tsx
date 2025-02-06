"use client";
import { Header } from "@/components/header";
import React, { useEffect, useState } from "react";
import { data } from "../../data";
import Image from "next/image";
import Link from "next/link";
import { CircleX, SquareArrowOutUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";

const page = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any[]>([]);
  const [newData, setNewData] = useState<any[]>(data);
  const [filter, setFilter] = useState<string>("");

  const params = useParams();
  const id = params.query;
  console.log('query',id)

  const setData = (query:string) => {
    console.log("set data prev", data);
    console.log("filter ", filter);

    let filterArray = data.filter((image) => {
      return image.category === query;
    });
    
    setNewData(filterArray);
    console.log("new data ", newData);
  };


  useEffect(()=>{
    setData(id);
  },[id]);

  return (
    <div className="w-full bg-black">
      <div className="text-white">
        {/* <ul className="flex justify-evenly pt-4 cursor-pointer">
          <li className="border rounded-full px-4 py-2 flex gap-2">
            <p>🔔</p>
            <p>All</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={ () => {
              //  setFilter("Car");
              setData("Car");
            }}
          >
            <p>🚘</p>
            <p>Car</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              // setFilter("Nature");
              setData("Nature");
            }}
          >
            <p>🌳</p>
            <p>Nature</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              //  setFilter("Home");
              setData("Home");
            }}
          >
            <p>🏠</p>
            <p>Home</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              // setFilter("Animal");
              setData("Animal");
            }}
          >
            <p>🐎</p>
            <p>Animal</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={ () => {
              //  setFilter("City");
              setData("City");
            }}
          >
            <p>🏙️</p>
            <p>City</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={() => {
              // setFilter("Car");
              setData("Food");
            }}
          >
            <p>🍔</p>
            <p>Food</p>
          </li>
          <li
            className="border rounded-full px-4 py-2 flex gap-2"
            onClick={ () => {
              //  setFilter("Car");
              setData("Sport");
            }}
          >
            <p>⚽</p>
            <p>Sport</p>
          </li>
        </ul> */}
      </div>{" "}
      <div className="relative  grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {newData.map((image) => (
          <div
            key={image.imageId}
            className="relative h-[96%] w-[96%] row-span-1 col-span-1 m-4 flex justify-center hover:cursor-pointer bg-white"
            onClick={() => {
              setOpen(!open);
              setImageData(image);
            }}
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
            </p>
            <p className="absolute right-4 top-4 text-sm text-white px-2 py-0.9 bg-black/60 rounded-sm ">
              {image.category}
            </p>
            {open && (
              <div className="fixed  inset-0 h-[80%] w-[80%] rounded-md m-auto object-cover bg-black/80 px-10 py-6 text-base text-white px-1 opacity-0 hover:opacity-100 duration-500 ">
                <button
                  type="button"
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    setImageData([]);
                  }}
                >
                  <CircleX strokeWidth={2} size={30} />
                </button>
                <Image
                  className="rounded-sm self-center m-auto"
                  src={imageData?.imageUrl}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ height: "70%", width: "70%" }}
                  alt="Picture of the author"
                />
                <div className="m-auto p-6">
                  <p>In the Paintings : #{imageData?.imageId} </p>
                  <p>Image description : {imageData?.description}</p>
                  <p>Image Category : {imageData?.category}</p>
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