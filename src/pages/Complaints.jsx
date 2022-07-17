import React, { useState,useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import DataTable from "./components/DataTable";
import Orders from "./Orders";

export default function Complaints() {
  const [datachanged,setdatachanged]=useState(false)
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fetchComplaints = async () => {
      await fetch("http://localhost:5000/api/v1/review")
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setOrder(
              json.data.filter((f) => 
                  f.ReportReview.length!==0
                ).map((e) => ({
                  name: e?.user.name,
                  userEmail: e?.user.email,
                  rest: e?.Restaurant?.restaurantName,
                  order:e?.ReportReview[0].des,
                  date: e.createdAt.split(/[T]+/).splice(0, 1).join(),
                  id:e._id
                }))
            );
           console.log (
              json.data.filter((f) => 
                  f.ReportReview.length!==0
                ).map((e) => ({
                  name: e?.user.name,
                  userEmail: e?.user.email,
                  rest: e?.Restaurant?.restaurantName,
                  order:e?.ReportReview[0].des,
                  date: e.createdAt.split(/[T]+/).splice(0, 1).join(),
                  id:e._id
                }))
           )
          } else {
            alert(json.error);
          }
        })
        .catch((err) => {
          alert(err);
        });
    };
    fetchComplaints();
  }, [datachanged]);
  const delReview=async(id)=>{
    await fetch(`http://localhost:5000/api/v1/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setTimeout(() => {
            setdatachanged(!datachanged);
          }, 1000);
          alert("Deleted Successfully")
        } else {
          alert("Error While Deleting")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <AdminLayout>
      <div className="flex justify-between">
        <h1 className="mb-4 text-left text-2xl font-bold">Complaints</h1>
      </div>
      <DataTable
        data={order}
        columns={[
          { key: "name", name: "User" },
          { key: "userEmail", name: "User Email" },
          { key: "rest", name: "Restaraunt" },
          { key: "order", name: "Description" },
          { key: "date", name: "Date" },
          {
            key: "Delete",
            name: "Delete",
            render: (row) => (
              <button
                className="text-red-600"
                onClick={() => {
                  delReview(row.id)
                }}
              >
                Delete
              </button>
            ),
          },
        ]}
      />
    </AdminLayout>
  );
}
