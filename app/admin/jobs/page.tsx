"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const res = await axios.get("http://localhost:5000/jobs");

    setJobs(res.data);
  };

  const deleteJob = async (id: number) => {
    await axios.delete(`http://localhost:5000/jobs/${id}`);

    getJobs();
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">Jobs Management</h2>

        <p className="text-gray-500 mt-2">Manage all your job postings</p>

        <Link href="/admin/create">
          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 ">
            Create New Job
          </button>
        </Link>

        <div className="mt-8 bg-white border rounded-md p-4">
          <h3 className="font-semibold mb-4">All Jobs ({jobs.length})</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-sm text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Title</th>
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {jobs.map((job: any) => (
                  <tr key={job.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="font-medium">{job.title}</p>

                      <p className="text-gray-500 text-xs">{job.location}</p>
                    </td>

                    <td className="px-4 py-3">{job.company}</td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs border rounded">
                        {job.category}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs border rounded">
                        {job.jobType}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <button
                        onClick={() => deleteJob(job.id)}
                        className="text-red-500 border px-3 py-1 rounded text-xs hover:bg-red-50"
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
      </div>
    </section>
  );
};

export default Page;
