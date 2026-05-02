import { Button } from "@/components/ui/button"
import Image from "next/image"

const page = () => {
  return (
    <div className="container mx-auto">
<div className="  h-20 bg-gray-100 border-b stick-sticky top-0 flex pr-4  pl-4 items-center justify-between z-50 shadow">
    <Image src="/logo.svg" alt="logo" width={150} height={100} className="w-30 h-30"/>
    <div className="flex space-x-4">
      <h1 className="text-gray-600 text-2xl">Home</h1>
      <h1 className="text-gray-600 text-2xl">Jobs</h1>
    <Button className="bg-blue-900 text-white hover:bg-blue-900">Post a Job</Button>
    </div>

</div>

    </div>
  )
}

export default page