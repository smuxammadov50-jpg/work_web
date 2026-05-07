import { Button } from "@/components/ui/button"
import Link from "next/link";

function page() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 px-4">
        <h3 className="text-2xl text-amber-700 font-semibold ">
          Career Opportunities
        </h3>
        <h1 className="font-bold text-4xl text-6xl
">
          Find Your Perfect  <span className="font-bold text-blue-900 text-4xl sm:text-5xl md:text-6xl">Career</span>
        </h1>
        <p className="text-gray-600 font-bold ">
          Discover career opportunities from top companies. Search, filter, and apply to roles that
          match your skills and aspirations.
        </p>

        <div className="mt-6 w-full max-w-3xl flex  gap-3">
          <input
            type="text"
            placeholder="Search by job title, company, or keyword..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm "
          />
          <button className="px-6 py-3 rounded-lg bg-blue-900 text-white font-semibold text-sm hover:bg-blue-700 transition">
            Search 
            
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link href="/jobs">
              <Button className="bg-blue-900  text-white hover:bg-blue-900">Browse All Jobs</Button>
          
          </Link>
<Link href="/admin/login">

              <Button className=" bg-gray-100  text-black hover:bg-blue-900">Post a Job</Button>
</Link>

        </div>

        <div className="mt-10 grid grid-cols-1 grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-900  text-4xl">500+</span>
            <span className="text-sm text-gray-500">Active Jobs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-900  text-4xl">200+</span>
            <span className="text-sm text-gray-500">Companies</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-blue-900  text-4xl">50K+</span>
            <span className="text-sm text-gray-500">Placements</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default page
