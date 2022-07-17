import React, { useState } from "react";
import AdminLayout from "./layouts/AdminLayout";
import DataTable from "./components/DataTable";

export default function NewBusinessRequest() {
  const test = [{ name: "test", stock: 12 }];

  return (
    <AdminLayout>
      <div className="flex justify-between">
        <h1 className="mb-4 text-left text-2xl font-bold">
          New Business Request
        </h1>
      </div>
      <DataTable
        data={test}
        columns={[
          { key: "name", name: "Name" },
          { key: "userEmail", name: "Address" },
          { key: "rest", name: "Type" },
          { key: "order", name: "Contact" },
          {
            key: "date",
            name: "Action",
            render: (row) => (
              <div className="flex flex-col">
                {row.status ? (
                  <button style={{ color: "red" }} onClick={() => {}}>
                    Disapprove
                  </button>
                ) : (
                  <button style={{ color: "green" }} onClick={() => {}}>
                    Approve
                  </button>
                )}
              </div>
            ),
          },
        ]}
      />
    </AdminLayout>
  );
}
