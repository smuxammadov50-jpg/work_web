
function page() {
  return (
    <div>

  <section className="bg-blue-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by Job Seekers Worldwide
        </h2>
        <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          Our platform has helped thousands of professionals find their ideal career opportunities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-blue-200 mt-2 text-sm">Active Job Listings</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">200+</h3>
            <p className="text-blue-200 mt-2 text-sm">Top Companies</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="text-blue-200 mt-2 text-sm">Successful Placements</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-blue-200 mt-2 text-sm">User Satisfaction</p>
          </div>

        </div>
      </div>
      <div className=""></div>
    </section>
    {/* --------------------------------------------------222 */}
      <div className="min-h-[500px] flex items-center justify-center bg-blue-700 text-white">
      <div className="text-center max-w-2xl px-4">
        
        <h1 className="text-4xl text-5xl font-bold mb-6">
          Ready to Advance <br /> Your Career?
        </h1>

        <p className="text-lg text-gray-200 mb-8">
         Discover hundreds of job opportunities from leading companies. Start your journey to your next role today.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Explore Jobs
          </button>

          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-gray-400 transition">
            Post a Job
          </button>
        </div>

      </div>
    </div>
 
    </div>
  )
}

export default page




  