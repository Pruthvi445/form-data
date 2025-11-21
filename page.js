'use client';
import React, { useState } from "react";
import Form from "./components/Form";
import Data from "./components/Data";

const Page = () => {
  const [open, setOpen] = useState(true);  
  const [data, setData] = useState([]);

  const saveData = (formData) => {
    const newIndex = data.length + 1;   
    const updated = { ...formData, index: newIndex };

    setData(prev => [...prev, updated]);
  };

  return (
    <>
      {open ? (
        <Form 
          save={saveData} 
          openDash={() => setOpen(false)} 
        />
      ) : (
        <Data 
          data={data}
          openDash={() => setOpen(true)}
        />
      )}
    </>
  );
};

export default Page;
