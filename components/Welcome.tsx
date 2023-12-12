import Image from "next/image";

export default function Welcome () {
  return (
    <div className="flex justify-center items-center">
      <Image src="https://i.imgur.com/QUk6w0H.jpg" alt="" width={1000} height={1000} className="w-auto h-screen py-10"/>
    </div>
  )
}