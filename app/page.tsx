import Welcome from '@/components/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <section id="welcome">
        <Welcome />
      </section>
      <section id="categories">
        {/* Categories */}
      </section>
      <section id="about">
        {/* About */}
      </section>
      <section id="contact">
        {/* Contact */}
      </section>
    </main>
  )
}
