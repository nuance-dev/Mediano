import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Medio is an open source macOS text comparison tool with real-time diff highlighting.',
}

function Hero() {
  return (
    <div className="relative h-[99vh]">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <img
            alt="Medio Banner"
            src="/MedioBanner.jpg"
            className="sm:h-120 md:h-144 mb-12 mt-[-20px] h-32 rounded-2xl shadow-md"
          />
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Medio app
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            A fast, native macOS text comparison tool with real-time diff
            highlighting.
          </p>
          <div className="mt-12 flex flex-col gap-x-2 gap-y-4 sm:flex-row">
            <Button variant="primary" href="/Medio.zip">
              Download App
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/nuance-dev/Medio"
            >
              View on Github
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
    </div>
  )
}
