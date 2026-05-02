



const  page=()=> {
  return (
      <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold">Why Choose JobPortal?</h2>
        <p className=" max-w-2xl mx-auto mt-3">
          We’ve designed the most intuitive job search platform to help you find opportunities that align with your career goals.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-12">
          
          <div className="p-6 border rounded-2xl shadow-sm hover:bg-gray-100 transition">
            <div className=" text-4xl mb-3">🔍</div>
            <h3 className="font-semibold text-xl">Powerful Search</h3>
            <p className=" mt-2">
              Advanced filtering by job title, category, and more. Find exactly what you're looking for in seconds.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:bg-gray-100 transition">
            <div className=" text-4xl mb-3">⭐</div>
            <h3 className="font-semibold text-xl">Curated Opportunities</h3>
            <p className=" mt-2">
              Carefully selected job postings from verified companies across industries and experience levels.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:bg-gray-100 transition">
            <div className=" text-4xl mb-3">✨</div>
            <h3 className="font-semibold text-xl">User-Friendly Interface</h3>
            <p className=" mt-2">
              Intuitive design makes job hunting simple and enjoyable. Browse, filter, and explore with ease.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm hover:bg-gray-100 transition">
            <div className=" text-4xl mb-3">⚡</div>
            <h3 className="font-semibold text-xl">Real-Time Updates</h3>
            <p className=" mt-2">
              Instant notifications for new job postings. Never miss an opportunity that matches your profile.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default page