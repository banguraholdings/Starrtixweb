import Dashboardwrapper from "@/components/Dashboardwrapper";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function page() {
  //events array
  const Users = [
    {
      name: "Judah ALvin Dore",
      email: "judahdore@gmail.com",
      phone: "+23231851053",
      image: "../../images/event.jpg",
    },
    {
      name: "Judah ALvin Dore",
      email: "judahdore@gmail.com",
      phone: "+23231851053",
      image: "../../images/event.jpg",
    },
    {
      name: "Judah ALvin Dore",
      email: "judahdore@gmail.com",
      phone: "+23231851053",
      image: "../../images/event.jpg",
    },
    {
      name: "Judah ALvin Dore",
      email: "judahdore@gmail.com",
      phone: "+23231851053",
      image: "../../images/event.jpg",
    },
  ];
  return (
    <Dashboardwrapper>
      <div className="flex flex-col items-center w-full flex-1">
        <div className="w-full p-4 flex flex-col md:flex-row md:items-center space-y-2 md:space-x-2">
          <h1 className=" text-xl underline">Members</h1>
          <div className="flex items-center w-full">
            {/* add new members btn */}
            <button className="p-2 bg-blue-500 rounded text-sm text-white">
              Add New
            </button>
            {/* total members */}
            <div className="flex-1 w-full flex justify-end text-sm">
              Total Members: 2000
            </div>
          </div>
        </div>
      </div>

      {/* table displaying users */}
      <div className="overflow-x-auto p-2">
        <table className="min-w-full divide-y divide-blue-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                User Photo
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Operation
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-blue-200">
            {/* Table rows  */}
            {Users.map((user: any, index: any) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <img
                    src={user.image}
                    alt={`${user.name}'s photo`}
                    className="h-8 w-8 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-no-wrap flex justify-center items-center">
                  <button>
                    <FaTrashAlt className="text-blue-500" />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap space-y-2 lxl:space-y-0 xl:space-x-2">
                  <button className="p-2 bg-green-500 text-white text-sm">
Activate
                  </button>
                  <button className="p-2 bg-red-500 text-white text-sm">
Deactivate
                  </button>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </Dashboardwrapper>
  );
}

export default page;
