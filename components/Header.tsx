import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from 'next/image'
import Logo from '@/public/Logo.png'
import Link from 'next/link'
import { ThemeToggler } from "./ThemeToggler"

export default function Header () {
  return (
    <header className="flex items-center justify-between border-b shadow-lg">
      <div>
        <Link href='/' className="flex">
          <Image src= {Logo} alt="" className="" width={150} height={150}/>
        </Link>
      </div>
      <div className="flex flex-row space-x-5">
        <Link href="#welcome">
          <p>Welcome</p>
        </Link>
        <p>Categories</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="flex items-center space-x-2 px-5">
      <ThemeToggler />
      <UserButton afterSignOutUrl="/"/>
      <SignedOut>
        <SignInButton afterSignInUrl="/" mode="modal" />
      </SignedOut>
      </div>
    </header>
  )
}