"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Page = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  const getApplications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/applications");
      setApplications(res.data);
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
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black">Job Applications</h2>

        <p className="text-gray-500 mt-2">
          Review and manage all job applications ({applications.length} total)
        </p>

        <div className="mt-8 bg-white border rounded-xl ">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr className="text-sm text-gray-600">
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Job</th>
                <th className="px-6 py-4 font-medium">Applied Date</th>
                <th className="px-6 py-4 font-medium text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.email}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {item.jobTitle}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    Apr 30, 2026, 08:51 AM
                  </td>

                  <td className="px-6 py-4 text-sm flex justify-center items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedJob(item);
                        setOpen(true);
                      }}
                      className="px-3 py-2 rounded-md hover:bg-orange-700 hover:text-white"
                    >
                      View
                    </button>

                    <button
                      onClick={() => deleteApplication(item.id)}
                      className="px-3 py-2 rounded-md text-red-600 hover:bg-gray-200"
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

      <Rodal visible={open} onClose={() => setOpen(false)} height={400}  width={420}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Application Details</h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs text-gray-500">NAME</p>
              <p className="text-lg font-medium mt-1">
                {selectedJob?.name}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">EMAIL</p>
              <p className="text-lg font-medium mt-1">
                {selectedJob?.email}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">JOB POSITION</p>
              <p className="text-lg font-medium mt-1">
                {selectedJob?.jobTitle}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">APPLIED DATE</p>
              <p className="text-lg font-medium mt-1">
                Apr 30, 2026, 08:51 AM
              </p>
            </div>
          </div>
        </div>
      </Rodal>
    </div>
  );
};

export default Page;