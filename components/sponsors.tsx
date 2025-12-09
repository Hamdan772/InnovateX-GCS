"use client"

import { Sparkles, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Sponsors() {
  // Placeholder sponsors - replace with actual sponsor data
  const sponsors = {
    platinum: [
      { name: "GEMS Education", logo: "/placeholder-logo.svg" },
    ],
    gold: [
      { name: "Tech Company A", logo: "/placeholder-logo.svg" },
      { name: "Tech Company B", logo: "/placeholder-logo.svg" },
    ],
    silver: [
      { name: "Company C", logo: "/placeholder-logo.svg" },
      { name: "Company D", logo: "/placeholder-logo.svg" },
      { name: "Company E", logo: "/placeholder-logo.svg" },
    ],
  }

  return (
    <section id="sponsors-section" className="py-24 px-6 bg-background flex justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
            <h2 className="text-5xl md:text-6xl font-black text-balance">Our Sponsors</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Thank you to our amazing sponsors who make this event possible
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-2 text-primary">Platinum Sponsors</h3>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid place-items-center">
            {sponsors.platinum.map((sponsor, index) => (
              <Card
                key={index}
                className="border-2 border-primary/30 hover:border-primary transition-all transform hover:scale-105 w-full max-w-md"
              >
                <CardContent className="p-12">
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={200}
                      height={100}
                      className="object-contain opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-center font-bold mt-4 text-lg">{sponsor.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-2 text-secondary">Gold Sponsors</h3>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.gold.map((sponsor, index) => (
              <Card
                key={index}
                className="border-2 border-secondary/30 hover:border-secondary transition-all transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="relative w-full h-24 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={150}
                      height={75}
                      className="object-contain opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-center font-bold mt-4">{sponsor.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-2 text-accent">Silver Sponsors</h3>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <Card
                key={index}
                className="border-2 border-accent/30 hover:border-accent transition-all transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={60}
                      className="object-contain opacity-75 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-center font-semibold mt-3 text-sm">{sponsor.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
          <CardContent className="p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-black mb-4">Interested in Sponsoring?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us inspire the next generation of innovators! Partner with InnovateX GCS 2026 and support student
              creativity and learning.
            </p>
            <a
              href="#contact-section"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all text-lg"
            >
              Become a Sponsor
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
