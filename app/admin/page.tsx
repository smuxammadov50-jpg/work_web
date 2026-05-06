import Image from "next/image";
const page = () => {
  return (
    <div className="container ">
  <Image
            src="/logo.svg"
            alt=""
            width={120}
            height={40}
            
          />
    </div>
  )
}

export default page