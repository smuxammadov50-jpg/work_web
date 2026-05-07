"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const addJob = async () => {
    await axios.post("http://localhost:5000/jobs", {
      title,
      company,
      location,
      salary,
      category,
      jobType,
      description,
      requirements,
    });

    router.push("/admin/jobs");
  };

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/admin/jobs">
          <button className="text-sm text-gray-600 mb-4">← Back to Jobs</button>
        </Link>

        <h2 className="text-3xl font-bold text-gray-900">Create New Job</h2>

        <p className="text-gray-500 mt-2">
          Fill in the form below to create a new job posting
        </p>

        <div className="mt-8 bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Add New Job</h3>

          <form onSubmit={addJob} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Job Title *</label>

                <input
                  type="text"
                  placeholder="e.g. Senior Frontend Engineer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Company *</label>

                <input
                  type="text"
                  placeholder="e.g. TechCorp"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Location *</label>

                <input
                  type="text"
                  placeholder="e.g. San Francisco, CA"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Salary (Optional)</label>

                <input
                  type="text"
                  placeholder="e.g. $100,000 - $150,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Category</label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Technology</option>
                  <option>Marketing</option>
                  <option>Design</option>
                  <option>Sales</option>
                  <option>Finance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Job Type</label>

                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description *</label>

              <textarea
                rows={5}
                placeholder="Job description and responsibilities..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Requirements (comma-separated)
              </label>

              <input
                type="text"
                placeholder="e.g. React, TypeScript, 5+ years experience, Node.js"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="bg-blue-600 w-full text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                Add Job
              </button>

              <button
                type="reset"
                className="border w-full px-6 py-2 rounded-md text-sm hover:bg-gray-100 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
