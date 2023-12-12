import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from 'next/image'
import Logo from '@/public/Logo.png'
import Link from 'next/link'

export default function Header () {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link href='/' className="flex">
          <Image src= {Logo} alt="" width={150} height={150}/>
        </Link>
      </div>
      <div className="flex px-5">
      {/* Theme Toggler */}
      <UserButton afterSignOutUrl="/"/>
      <SignedOut>
        <SignInButton afterSignInUrl="/" mode="modal" />
      </SignedOut>
      </div>
    </header>
  )
}