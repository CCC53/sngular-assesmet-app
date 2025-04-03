"use client";

import { useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Solver } from "./components/Solver";
import { Loader } from "./components/Loader";

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <Header/>
      <div className="flex flex-col justify-center items-center">
        <Form setLoading={setLoading} returnValue={newValue => setValue(newValue)} cleanData={() => setValue(null)}/>
        {
          loading ? <Loader/> : value && <Solver n={value}/>
        }
      </div>
    </>
  );
}
