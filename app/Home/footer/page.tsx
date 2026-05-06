
const  page=()=> {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              About JobPortal
            </h2>
            <p className="text-sm text-gray-400">
              Your trusted platform for connecting with career opportunities.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul >
              <li className="hover:text-red-400 cursor-pointer">
                Browse Jobs
              </li>
              <li className="hover:text-red-400 cursor-pointer">
                Post a Job
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact
            </h2>
            <p className="text-sm text-gray-400">
              support@jobportal.com
            </p>
          </div>
        </div>

      
      </div>
    </footer>


  )
}

export default page