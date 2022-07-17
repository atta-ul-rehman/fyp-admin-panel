import React, { useState } from "react";
import AdminLayout from "./layouts/AdminLayout";
import DataTable from "./components/DataTable";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState();
  const [editOpen, setEditOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const test = [{ name: "test", stock: 12 }];

  return (
    <>
      <AdminLayout>
        <div className="flex justify-between">
          <h1 className="mb-4 text-left text-2xl font-bold">Inventory</h1>
        </div>
        <div className="flex justify-end">
          <button className="w-32 h-12 bg-gray-200 rounded-lg text-lg font-bold">
            Add
          </button>
        </div>
        <DataTable
          data={test}
          columns={[
            { key: "name", name: "Name" },
            { key: "salePrice", name: "Sale Price" },
            { key: "costPrice", name: "Cost Price" },
            { key: "description", name: "Description" },
            { key: "stock", name: "Stock" },
            {
              key: "Delete",
              name: "Delete",
              render: (row) => (
                <button
                  className="text-red-600"
                  onClick={() => {
                    DeleteProduct(row.id);
                  }}
                >
                  Delete
                </button>
              ),
            },
          ]}
        />
      </AdminLayout>
    </>
  );
}
