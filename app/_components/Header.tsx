import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="  sticky top-0 z-50 w-full border-b bg-white bg-opacity-80 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="" width={120} height={40} />
        </div>

        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <h1 className="text-gray-600 text-sm  cursor-pointer hover:text-black">
              Home
            </h1>
          </Link>
          <Link href={"/jobs"}>
            <h1 className="text-gray-600 text-sm  cursor-pointer hover:text-black">
              Jobs
            </h1>
          </Link>
          <Link href={"/admin/login"}>
            <button className="bg-blue-900 rounded-lg text-white hover:bg-blue-800 text-sm  px-4 py-2">
              Post a Job
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
