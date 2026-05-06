"use client";
import  Link  from "next/link";
import { useState } from "react";
import Image from "next/image";


const AdminFullPage = () => {
  
  const [email, setEmail] = useState("admin@jobportal.com");
  const [password, setPassword] = useState("admin123");

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-64 bg-black text-white fixed h-full left-0 top-0 flex flex-col p-6 z-50">
        
          <Image
                    src="/logo.svg"
                    alt=""
                    width={120}
                    height={40}
                    
                  />
        <div className="flex-1">
          <p className="text-white text-md font-bold mt-5 ">
            Admin Menu
          </p>
          <div className="">
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">📋</span>
              <span className="font- select-none">Jobs</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">➕</span>
              <span className="font- select-none ">Create Job</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
              <span className="text-xl">📩</span>
              <span className="font- select-none">Applications</span>
            </div>
          </div>
        </div>

        <Link href="/">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-bold! ">
            Logout
          </button>
        </Link>
      </div>

     
      <main className="flex-1 ml-64 flex flex-col items-center justify-center p-10">
        <div className="text-center mb-8">
        <img src="/logo.svg" alt="JobPortal Logo" width={250} className="mt-2 mx-auto" />
          <h2 className="text-4xl font-extrabold text-gray-800! mt-5">
            Admin Dashboard
          </h2>
          <p className="text-gray-500 text-lg">
            Sign in to manage job postings
          </p>
        </div>

        <div className="bg-white p-10 rounded-md shadow-sm border border-gray-100 w-full max-w-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700! font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 p-2 rounded-md focus:ring-2! focus:ring-blue-500! outline-none! transition!"
                placeholder="admin@jobportal.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 p-2 rounded-md focus:ring-2! focus:ring-blue-500! outline-none! transition!"
              />
            </div>

            <button className="w-full bg-blue-700 hover:bg-blue-900 text-white py-2 rounded-md font-bold text-bold shadow-lg">
              Sign In
            </button>
          </form>


          <div className="mt-8 bg-[#f3f0f1] p-3 rounded-md border border-gray-200/50">
            <p className="font-bold text-gray-800! mb-2">Demo Credentials:</p>
            <div className="text-gray-600! space-y-1!">
              <p>Email: admin@jobportal.com</p>
              <p>Password: admin123</p>
            </div>              
          </div>
        </div>

        <Link href="/">
        <button className="mt-8! text-blue-900 font-bold">
          Back to Home
        </button>
        </Link>
      </main>
    </div>
  );
};

export default AdminFullPage;