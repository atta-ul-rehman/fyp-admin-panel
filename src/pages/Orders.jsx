import React, { useState, useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import DataTable from "./components/DataTable";

export default function Orders() {
  const [order, setOrder] = useState([]);
  const [datachanged, setdatachanged] = useState(false);
  useEffect(() => {
    const fetchOrders = async () => {
      await fetch("http://localhost:5000/api/v1/order")
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            setOrder(
              json.data.map((e) => ({
                name: e.productName?e.productName:"Reservation",
                userEmail: e?.user.email,
                rest: e?.Restaurant.restaurantName,
                order:
                e.productPrice?
                  e?.prefernceData
                    .map((e) => e.price)
                    .reduce((prev, cur) => prev + cur, 0) + e.productPrice:
                    0 ,
                date: e.createdAt.split(/[T]+/).splice(0, 1).join(),
                status: e.Status,
              }))
            );
            console.log(
              json.data.map((e) => ({
                name: e.productName,
                userEmail: e?.user.email,
                rest: e?.Restaurant.restaurantName,
                order:
                  e?.prefernceData
                    .map((e) => e.price)
                    .reduce((prev, cur) => prev + cur, 0) + e.productPrice,
                date: e.createdAt,
                status: e.Status,
              }))
            );
          } else {
            console.log("no data");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchOrders();
  }, []);

  return (
    <AdminLayout>
      <div className="flex justify-between">
        <h1 className="mb-4 text-left text-2xl font-bold">Orders</h1>
      </div>
      {order.length > 0 && (
        <DataTable
          data={order}
          columns={[
            { key: "name", name: "Item Name" },
            { key: "userEmail", name: "User Email" },
            { key: "rest", name: "Restaraunt / Saloon" },
            { key: "order", name: "Order Price" },
            { key: "date", name: "Date" },
            { key: "status", name: "Status" },
          ]}
        />
      )}
    </AdminLayout>
  );
}
