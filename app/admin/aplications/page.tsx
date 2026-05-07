"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  const [application, setApplication] = useState<any[]>([]);

  const getApplications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/applications");
      setApplication(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  const deleteApplication = async (id: string) => {
    await axios.delete(`http://localhost:5000/applications/${id}`);
    getApplications();
  };

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black">Job Applications</h2>

        <p className="text-gray-500 mt-2">
          Review and manage all job applications ({application.length} total)
        </p>

        <div className="mt-8 bg-white border rounded-xl ">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr className="text-sm text-gray-600">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Job</th>
                <th className="px-6 py-4 font-medium">Applied Date</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {application.map((app) => (
                <tr
                  key={app.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {app.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {app.email}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {app.jobTitle}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    Apr 30, 2026, 08:51 AM
                  </td>

                  <td className="px-6 py-4 text-sm flex justify-center items-center gap-2">
                    <button className="px-3 py-2 rounded-md  hover:bg-orange-700 hover:text-white">
                      View
                    </button>

                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="px-3 py-2 rounded-md  text-red-600 hover:bg-gray-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

             
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Page;
