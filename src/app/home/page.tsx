"use client";
import { Maincontent } from "@/components/maincontent";
import { createContext } from "react";
import { data } from "../data";

const dataContext = createContext();

export default function Home() {
  return (
    <dataContext.Provider value={{ data }}>
      <main className={"relative flex h-full "}>
        <Maincontent />
      </main>
    </dataContext.Provider>
  );
}

