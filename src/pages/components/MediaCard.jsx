import Rating from "@mui/material/Rating";
import { data } from "autoprefixer";
import { Alert } from "@mui/material";
import React, { useState } from "react";

export default function MediaCard({ item, setdatachanged, business }) {
  const delRes = async (id) => {
    await fetch(`http://localhost:5000/api/v1/${business}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setTimeout(() => {
            setdatachanged();
          }, 1000);
          alert("Deleted Successfully")
          // console.log(datachanged);
        } else {
          alert("Error While Deleting")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-96 bg-white rounded-lg border border-gray-200 shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg h-48 block w-full"
          src={item.photo}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {item.restaurantName}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.phone}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.businessAddress}
        </p>
        <div className="flex justify-between">
          <Rating name="read-only" value={2} readOnly />
          <button
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            onClick={() => {
              delRes(item._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
