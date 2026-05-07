"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Job } from "@/types";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import axios from "axios";

export default function Page() {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
 
    getJob();
  
}, [id]);
  
    const getJob = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  
 

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      <Link href="/jobs">
        <p className="text-sm text-gray-500 mb-6 cursor-pointer">
          Back to Jobs
        </p>
      </Link>

      <div className="max-w-4xl mx-auto bg-white border rounded-2xl p-10 space-y-10">
        
        <div>
          <h1 className="text-3xl font-bold">{job?.title}</h1>
          <p className="text-gray-500">{job?.company}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span>Location: </span>
            <span>{job?.location}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Salary:</span>
            <span>{job?.salary}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Category:</span>
            <span>{job?.category}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>Job Type:</span>
            <span>{job?.jobType}</span>
          </div>
        </div>

        <div>
          <h2>Description:</h2>
          <p>{job?.description}</p>
        </div>

        <div>
          <h2>Requirements:</h2>
          <p>{job?.requirements}</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Apply Now
        </button>

      </div>

      <Rodal visible={open} onClose={() => setOpen(false)} width={400}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">
            Apply for Positions 
          </h2>
          <p className="font-semibold   ">
<span className="font-semibold text-gray-500">Apply to :</span> {job?.title}
          </p>

      

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg"
            />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </Rodal>

    </div>
  );
}