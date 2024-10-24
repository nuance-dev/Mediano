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
        <div className="pb-24 pt-4 sm:pb-32 sm:pt-24 md:pb-48 md:pt-16">
          <a
            href="https://www.producthunt.com/posts/medio-app?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-medio&#0045;app"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=530089&theme=light"
              alt="Medio&#0032;App - A&#0032;minimal&#0032;open&#0045;source&#0032;MacOS&#0032;diff&#0032;checker&#0032;app | Product Hunt"
              style={{ width: '200px', height: '60px', marginBottom: '24px' }}
              width="250"
              height="54"
            />
          </a>
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Medio app
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            A fast, native macOS text comparison tool with real-time diff
            highlighting.
          </p>
          <img
            alt="Medio Banner"
            src="/MedioBanner.jpg"
            className="sm:h-120 md:h-144 mb-12 mt-[20px] h-32 rounded-2xl shadow-md"
          />
          <div className="mt-4 flex flex-col gap-x-2 gap-y-2 sm:flex-row">
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
