import React, { useState, useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import MediaCard from "./components/MediaCard";
//import api from "../api/restaurants";

export default function Restaraunts() {
  const [res, setRes] = useState([]);
  //const [datachanged, setdatachanged] = useState(false);

  const fetchRestaurants = async () => {
    await fetch("http://localhost:5000/api/v1/res")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setRes(json.data);
        } else {
          console.log("no data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between">
        <h1 className="mb-4 text-left text-2xl font-bold">Restaraunts</h1>
        <button
          className="w-32 h-12 bg-gray-200 rounded-lg text-lg font-bold"
          onClick={() => {
            console.log(res);
          }}
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 mt-8 gap-4 w-fit">
        {res && res?.map((item) => <MediaCard item={item} setdatachanged={fetchRestaurants} datachanged={"res"} key={item.id} />)}
      </div>
    </AdminLayout>
  );
}
