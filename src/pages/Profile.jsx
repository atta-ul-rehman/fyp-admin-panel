import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";

import AdminLayout from "./layouts/AdminLayout";


export default function AdminProfile() {
 
  const [user, setUser] = useState();
  const [editOpen, setEditOpen] = useState(false);
  const [editPass, setEditPass] = useState(false);

  const queryUser = {};
  return (
    <>
      <AdminLayout>
        <div className="flex pl-64">
          <div className="flex w-full justify-center lg:w-4/5">
            <div className="h-full">
              <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                  <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                    <section aria-labelledby="payment-details-heading">
                      {/* <form action="#" method="POST"> */}
                      <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="bg-white py-6 px-4 sm:p-6">
                          <div className="flex justify-between">
                            <div>
                              <h2
                                id="payment-details-heading"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                Profile Details
                              </h2>
                              <p className="mt-1 text-sm text-gray-500">
                                See and update your profile information.
                              </p>
                            </div>

                            <PersonIcon
                              style={{
                                width: "172",
                                height: "172",
                                borderRadius: "50%",
                                color: "gray",
                                border: "1px solid gray",
                              }}
                            />
                          </div>

                          <div className="mt-6 flex flex-col gap-4">
                            <div className="flex rounded-lg border-2 border-black">
                              <p className="w-24 border-r-2 border-gray-600 px-4 py-2">
                                Name
                              </p>
                              <hr />
                              <p className="px-4 py-2 text-gray-500">
                                {queryUser?.name}
                              </p>
                            </div>
                            <div className="flex rounded-lg border-2 border-black">
                              <p className="w-24 border-r-2 border-gray-600 px-4 py-2">
                                Email
                              </p>
                              <p className="px-4 py-2 text-gray-500">
                                {queryUser?.email}
                              </p>
                            </div>
                            <div className="flex rounded-lg border-2 border-black">
                              <p className="w-24 border-r-2 border-gray-600 px-4 py-2">
                                Phone #
                              </p>
                              <p className="px-4 py-2 text-gray-500">
                                {queryUser?.phone}
                              </p>
                            </div>
                            <div className="flex rounded-lg border-2 border-black">
                              <p className="w-24 border-r-2 border-gray-600 px-4 py-2">
                                Password
                              </p>
                              <p className="px-4 py-2 text-gray-500">
                                ********
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <EditProfile/> */}
                        <div className="bg-gray-50 flex gap-4 px-4 py-3 text-right sm:px-6">
                          <button
                            onClick={() => {
                              setEditOpen(true);
                            }}
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            Update Profile
                          </button>

                          <button
                            onClick={() => {
                              setEditPass(true);
                            }}
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                          >
                            Update Password
                          </button>
                        </div>
                      </div>
                      {/* </form> */}
                    </section>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
