import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { StatList, StatListItem } from '@/components/StatList'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import logoCGD from '@/images/clients/cgd/logo-light.svg'

const clients = [
  ['Collectors Gallery Dubai', logoCGD],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Some of our partnerships
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Elixr Ventures',
  description:
    "Empowering Tomorrow's Innovators: Elixr's Approach to Private Equity Investment.",
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Empowering Tomorrow’s Innovators
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a private equity firm investing in the future of innovation.
            By bridging young, visionary entrepreneurs with the resources they
            need, we’re helping to transform ideas into impactful solutions. Our
            diverse network and deep expertise enable startups to thrive and
            drive positive change in the world.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <PageIntro
        eyebrow="Our Vision and Approach:
"
        title="Our strength is collaboration"
      >
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At the core of our business model is the belief that young
            innovators possess tremendous potential. We envision a future where
            the brightest minds, regardless of their background, can turn their
            ideas into reality. Our unique and expansive approach involves
            scouting for promising startups within educational institutions,
            schools, and universities, and empowering them through mentorship,
            networking, and access to capital.
          </p>
          <p>
            We understand that innovation knows no boundaries, and we focus not
            only on promising ventures with vast potential but also on small yet
            highly efficient companies that may have been overlooked by
            traditional investors. Our goal is to provide opportunities for a
            diverse range of entrepreneurs, ensuring that innovative ideas in
            various sectors receive the support they deserve.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Companies invested in" />
          <StatListItem value="52" label="Total investors" />
          <StatListItem value="$25M" label="Assets allocated" />
        </StatList>
      </Container>

      <ContactSection />
    </>
  )
}
