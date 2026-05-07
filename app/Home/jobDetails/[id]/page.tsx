"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    const getJob = async () => {
      const res = await axios.get(`http://localhost:5000/jobs/${id}`);
      setJob(res.data);
    };

    if (id) getJob();
  }, [id]);

 

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Link href="/jobs">
        <p className="text-sm text-gray-500 mb-6">← Back to Jobs</p>
      </Link>

      <div className="max-w-4xl mx-auto bg-white border rounded-2xl p-10 space-y-10">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
          <p className="text-gray-500 mt-1">{job.company}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Location</span>
            <span className="font-medium text-gray-900">{job.location}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Salary</span>
            <span className="font-medium text-gray-900">{job.salary}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Category</span>
            <span className="font-medium text-gray-900">
              {job.category || "General"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Job Type</span>
            <span className="font-medium text-gray-900">
              {job.jobType || "N/A"}
            </span>
          </div>

        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {job.description}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Requirements</h2>
          <p className="text-gray-600 leading-relaxed">
            {job.requirements}
          </p>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Apply Now
        </button>

      </div>
    </div>
  );
};

export default Page;