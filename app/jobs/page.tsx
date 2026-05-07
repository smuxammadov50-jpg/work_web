"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../_components/Header";
import Footer2 from "../_components/Footer2";

const Page = () => {
  const [jobs, setJobs] = useState<
    {
      id: string;
      title: string;
      description: string;
      category: string;
      jobType: string;
      location: string;
      salary: string;
      requirements: string;
    }[]
  >([]);

  const getJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="">
      <Header />
      <div className=" max-w-4xl space-y-4 mx-auto mt-10
      mb-10">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">
          Find Your Next Opportunity
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Explore our curated list of job openings and find the perfect match
          for your career.
        </p>
      </div>

      <div className="grid p-5 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="bg-gray-100 h-[340px]  sticky top-30 right-5 z-50 w-75 p-6 rounded-lg shadow flex flex-col gap-4 ">
          <h2 className="text-lg font-semibold">Filter Jobs</h2>

          <input
            type="text"
            placeholder="Search by keyword"
            className="w-full border rounded-lg px-3 py-2"
          />

          <select className="w-full border rounded-lg px-3 py-2">
            <option>All Categories</option>
          </select>

          <button className="w-full border-3  text-black hover:bg-red-600  hover:text-white  py-2 rounded-md">
            Reset Filters
          </button>
          <p className="text-gray-600 mt-15 mx-auto">Category: All Categories</p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Available Jobs
          </h2>
          <h3 className="text-gray-600"> {jobs.length} positions</h3>
          </div>

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-100 p-6 rounded-lg shadow flex flex-col gap-3"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>

              <p className="text-gray-600">{job.description}</p>

              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 bg-gray-100 rounded">
                  {job.category}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded">
                  {job.jobType}
                </span>
              </div>

              <p className="text-gray-700">📍 {job.location}</p>
              <p className="text-gray-700">💰 {job.salary}</p>

              <div className="text-gray-600 text-sm">
                Requirements: {job.requirements}
              </div>

              <Link href={`/jobs/${job.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer2/>
    </div>
  );
};

export default Page;
