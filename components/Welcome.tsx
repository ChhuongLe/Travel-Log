'use client'

import Image from "next/image";
import { Button } from "./ui/button";

export default function Welcome () {

  const RandomPost = () => {
    console.log("Random")
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        className="absolute text-sm md:text-lg xl:text-3xl font-bold tracking-[2px] xl:tracking-[8px] hover:cursor-pointer md:p-10"
        onClick={()=>RandomPost()}
      >
        <p>Ready to get reading?</p>
      </Button>
      <Image src="https://i.imgur.com/n9LTVAu.jpg" alt="" width={2000} height={2000} className="w-[80vw] h-auto py-2"/>
    </div>
  )
}