import c from "classnames";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
//import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  BellIcon,
  LogoutIcon,
  CreditCardIcon,
  HomeIcon,
  MenuAlt1Icon,
  ScaleIcon,
  UserGroupIcon,
  XIcon,
  InformationCircleIcon,
  BanIcon,
  ScissorsIcon,
  PlusCircleIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";

const navigation = [
  // {
  //   name: "Home",
  //   href: "/home",
  //   icon: HomeIcon,
  // },
  {
    name: "Orders",
    href: "/orders",
    icon: CreditCardIcon,
  },
  {
    name: "Restaraunts and Cafes",
    href: "/restaraunts",
    icon: MenuAlt1Icon,
  },
  {
    name: "Saloons",
    href: "/saloons",
    icon: ScissorsIcon,
  },

  {
    name: "Complaints",
    href: "/complaints",
    icon: ExclamationIcon,
  },
  {
    name: "New Business Request",
    href: "/business/new",
    icon: PlusCircleIcon,
  },
];

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  //   const authState = useUserRole("admin");
  const navigate = useNavigate();

  return (
    <div className="min-h-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full px-0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  {/* <img className="h-8 w-auto" src={GrayLogo} /> */}
                </div>
                <p className="px-2 text-lg font-bold text-white">FALLA</p>

                <nav
                  className="mt-5 h-full flex-shrink-0 divide-y divide-gray-900 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          c(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                          )
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="space-y-1 px-2">
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          c(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                          )
                        }
                      >
                        <InformationCircleIcon
                          className="mr-4 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        Profile
                      </NavLink>
                      {/* <NavLink
                        to="/"
                        className={({ isActive }) =>
                          c(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                          )
                        }
                      >
                        <LibraryIcon
                          className="mr-4 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        View Store
                      </NavLink> */}
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          c(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                          )
                        }
                      >
                        <LogoutIcon
                          className="mr-4 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        Logout
                      </NavLink>
                    </div>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-grow flex-col overflow-y-auto bg-gray-800 pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            {/* <img className="h-8 w-auto" src={GrayLogo} /> */}
            <p className="px-2 text-lg font-bold text-white">FALLA</p>
          </div>
          <nav
            className="mt-5 flex flex-1 flex-col divide-y divide-gray-900 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    c(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6"
                    )
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  <item.icon
                    className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    c(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                    )
                  }
                >
                  <InformationCircleIcon
                    className="mr-4 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  Profile
                </NavLink>
                {/* <NavLink
                  to="/"
                  className={({ isActive }) =>
                    c(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                    )
                  }
                >
                  <LibraryIcon
                    className="mr-4 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  View Store
                </NavLink> */}
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    c(
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                    )
                  }
                >
                  <LogoutIcon
                    className="mr-4 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  Logout
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow lg:border-none">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
            <div className="flex flex-1" />
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <main className="flex-1 pb-8">
          <div className="mx-auto mt-8  px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
