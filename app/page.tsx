"use client"

import {
  Calendar,
  Clock,
  Users,
  Trophy,
  MapPin,
  Sparkles,
  Code2,
  Lightbulb,
  Award,
  Zap,
  Target,
  CheckCircle,
  Shield,
  Wifi,
  Heart,
  ChevronDown,
  Laptop,
  Coffee,
  Brain,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import CountdownTimer from "@/components/countdown-timer"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"
import DarkModeToggle from "@/components/dark-mode-toggle"
import Logo from "@/components/logo"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  const scrollToContent = () => {
    const element = document.getElementById("about-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      
      {/* Dark Mode Toggle - Fixed Position */}
      <div className="fixed bottom-8 left-8 z-40">
        <DarkModeToggle />
      </div>
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-24 md:py-32 px-6 overflow-hidden"
        aria-label="Hero section with event countdown"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Date Badge at Top */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-md px-5 py-3 rounded-full border border-primary-foreground/30">
              <span className="text-sm md:text-base font-bold">
                Saturday, February 7th, 2026
              </span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-sm md:text-base font-semibold">
                8:00 AM - 5:00 PM
              </span>
            </div>
          </div>

          <div className="mb-6 animate-slide-up animate-delay-100">
            <Logo size="xl" variant="light" />
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-balance leading-none tracking-tight animate-slide-up animate-delay-150 -mt-3">
            2026
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl mb-3 font-medium max-w-4xl mx-auto text-pretty leading-snug animate-slide-up animate-delay-200">
            A full-day, in-person student hackathon exclusively at GEMS Cambridge International Private School Sharjah
          </p>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed animate-slide-up animate-delay-300">
            Inspiring creativity, problem-solving, and real-world innovation among young developers from across the
            region
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 animate-slide-up animate-delay-350">
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-slide-up animate-delay-400">
            {/* Registration Button */}
            <Button
              size="lg"
              onClick={() => window.open('https://innovatexgcs.fillout.com/t/brfxJdyMb4us', '_blank')}
              className="text-lg md:text-xl font-bold px-8 md:px-10 py-6 md:py-7 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all rounded-full focus-visible:ring-4 focus-visible:ring-primary-foreground/50"
              aria-label="Register your team for InnovateX GCS 2026"
            >
              REGISTER YOUR TEAM
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContent}
              className="text-lg md:text-xl font-bold px-8 md:px-10 py-6 md:py-7 border-2 border-primary-foreground/40 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground shadow-xl rounded-full backdrop-blur-sm transform hover:scale-105 transition-all group focus-visible:ring-4 focus-visible:ring-primary-foreground/50"
              aria-label="Learn more about the event"
            >
              LEARN MORE
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Calendar className="w-10 h-10 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Full Day Event</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  8:00 AM - 5:00 PM of hacking, learning, and innovating
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <MapPin className="w-10 h-10 text-secondary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">GEMS Cambridge, Sharjah</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exclusive venue bringing regional students together
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2">Teams of 3-4</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Self-managed teams with your own team name
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section 
        id="about-section" 
        className="py-20 md:py-28 px-6 bg-background scroll-mt-4 flex justify-center"
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
            <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance leading-tight text-center">
              What is <span className="text-primary">InnovateX GCS 2026</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center">
              InnovateX GCS 2026 is not just a competition—it's a celebration of technology, collaboration, innovation,
              and the growing student tech community across Sharjah and the wider UAE. This full-day event brings
              together young developers from multiple schools to collaborate, innovate, and build creative digital
              projects based on a secret theme that will be revealed live at the opening ceremony.
            </p>
          </div>

          <div className="space-y-12 flex flex-col items-center">
            <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all transform hover:scale-[1.02] group w-full">
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                      <Code2 className="w-8 h-8 text-primary" />
                      Build & Create
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Teams plan, code, and test their projects throughout the day in dedicated classroom spaces. The
                      theme will be revealed at the opening ceremony at 8:30 AM, and you'll have until 2:30 PM to bring
                      your ideas to life.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        Web Apps
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                        Games
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                        Tools
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        Creative Projects
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary hover:shadow-2xl transition-all transform hover:scale-[1.02] group w-full">
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-secondary text-secondary-foreground rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                      <Lightbulb className="w-8 h-8 text-secondary" />
                      Learn & Collaborate
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Work with peers from different schools, share ideas, and learn new skills in a supportive
                      environment. This hackathon focuses on creativity, teamwork, and learning rather than prior
                      experience. Teachers and volunteers will be available throughout the day to help guide your
                      journey.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-semibold">Problem Solving</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-semibold">Teamwork</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-semibold">Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent hover:shadow-2xl transition-all transform hover:scale-[1.02] group w-full">
              <CardContent className="p-10">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                      <Trophy className="w-8 h-8 text-accent" />
                      Present & Win
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Teachers will act as judges throughout the day to review projects. Top teams will be shortlisted
                      for final evaluation based on creativity, functionality, design, and teamwork. Winners receive
                      certificates, medals, and special prizes like LEGO sets!
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                        <Target className="w-5 h-5 text-accent" />
                        <span className="text-sm font-semibold">Creativity</span>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-sm font-semibold">Functionality</span>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                        <Sparkles className="w-5 h-5 text-accent" />
                        <span className="text-sm font-semibold">Design</span>
                      </div>
                      <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="text-sm font-semibold">Teamwork</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section 
        id="schedule-section" 
        className="py-20 md:py-28 px-6 bg-muted/30 flex justify-center"
        aria-labelledby="schedule-heading"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 id="schedule-heading" className="text-5xl md:text-6xl font-black mb-4 text-balance leading-tight text-center">Event Schedule</h2>
            <p className="text-xl text-muted-foreground text-center">A full day packed with innovation, creativity, and fun</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-black text-primary mb-2">8:00 AM</div>
                    <h3 className="text-xl font-black mb-2">Registration</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Check-in at the multipurpose hall (MPH) and meet your team
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-black text-primary mb-2">8:30 AM</div>
                    <h3 className="text-xl font-black mb-2">Opening Ceremony</h3>
                    <p className="text-muted-foreground leading-relaxed">Theme reveal and event instructions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-xl transition-all transform hover:scale-105 bg-secondary/5">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                      <Code2 className="w-7 h-7 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-black text-secondary mb-2">9:00 AM - 12:00 PM</div>
                    <h3 className="text-xl font-black mb-2">Hacking Session 1</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Teams work in classrooms to plan, code, and test their projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:shadow-xl transition-all transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Coffee className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-black text-primary mb-2">12:00 PM - 12:30 PM</div>
                    <h3 className="text-xl font-black mb-2">Lunch Break</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Refreshments and networking with other teams
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-xl transition-all transform hover:scale-105 bg-secondary/5">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-black text-secondary mb-2">12:30 PM - 2:30 PM</div>
                    <h3 className="text-xl font-black mb-2">Hacking Session 2</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Final sprint - continue building and finalize projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent hover:shadow-xl transition-all transform hover:scale-105 bg-accent/5">
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <Trophy className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-black text-accent mb-2">3:00 PM - 3:30 PM</div>
                    <h3 className="text-xl font-black mb-2">Awards Ceremony</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Certificates, medals, and special prizes for winners
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section id="participate-section" className="py-20 md:py-28 px-6 bg-background flex justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-balance text-center">Who Can Participate?</h2>
            <p className="text-xl text-muted-foreground text-center">Everyone is welcome - beginners and experts alike!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-7xl font-black text-primary mb-4">3-4</div>
              <div className="text-xl font-bold mb-2">Students per team</div>
              <p className="text-muted-foreground">Form your squad or make new friends</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-7xl font-black text-secondary mb-4">1</div>
              <div className="text-xl font-bold mb-2">Day of coding</div>
              <p className="text-muted-foreground">An intense, exciting day of creation</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-7xl font-black text-accent mb-4">∞</div>
              <div className="text-xl font-bold mb-2">Possibilities</div>
              <p className="text-muted-foreground">Only limited by your imagination</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl transform hover:scale-105 transition-all hover:shadow-primary/50">
              <CardContent className="p-10">
                <Sparkles className="w-14 h-14 mb-5" />
                <h3 className="text-3xl font-black mb-4">Beginners Welcome</h3>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  New to coding? Perfect! This hackathon focuses on creativity, teamwork, and learning rather than prior
                  experience. You'll have support from teachers and experienced peers throughout the day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-0 shadow-2xl transform hover:scale-105 transition-all hover:shadow-accent/50">
              <CardContent className="p-10">
                <Award className="w-14 h-14 mb-5" />
                <h3 className="text-3xl font-black mb-4">Experienced Coders</h3>
                <p className="text-lg text-accent-foreground/90 leading-relaxed">
                  Skilled programmer? Perfect! Challenge yourself with the secret theme and push your limits. Help
                  mentor fellow participants and showcase your advanced skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-20 md:py-28 px-6 bg-muted/30 flex justify-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-balance text-center">What to Bring</h2>
            <p className="text-xl text-muted-foreground text-center">Come prepared for an awesome day of hacking</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-all transform hover:scale-105 hover:-rotate-1">
              <CardContent className="p-6 text-center">
                <Laptop className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-black text-lg mb-2">Laptop & Charger</h3>
                <p className="text-sm text-muted-foreground">Essential for coding your project</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all transform hover:scale-105 hover:rotate-1">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-black text-lg mb-2">Creative Ideas</h3>
                <p className="text-sm text-muted-foreground">Your imagination is the limit</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all transform hover:scale-105 hover:-rotate-1">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-black text-lg mb-2">Team Spirit</h3>
                <p className="text-sm text-muted-foreground">Collaboration is key to success</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all transform hover:scale-105 hover:rotate-1">
              <CardContent className="p-6 text-center">
                <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-black text-lg mb-2">Internet Ready</h3>
                <p className="text-sm text-muted-foreground">School Wi-Fi will be available</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all transform hover:scale-105 hover:-rotate-1">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-black text-lg mb-2">Parent Consent</h3>
                <p className="text-sm text-muted-foreground">Registration and photo consent required</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all transform hover:scale-105 hover:rotate-1">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-black text-lg mb-2">Positive Attitude</h3>
                <p className="text-sm text-muted-foreground">Ready to learn and have fun</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Theme & Judging Section */}
      <section className="py-20 md:py-28 px-6 bg-muted/30 flex justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-balance text-center">Theme & Judging</h2>
            <p className="text-xl text-muted-foreground text-center">What you need to know about the competition</p>
          </div>

          {/* Theme Announcement */}
          <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl">
            <CardContent className="p-10 text-center">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-4">Secret Theme Reveal</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                The hackathon theme will be <span className="text-primary font-bold">announced on the day of the event</span> during 
                the opening ceremony at 8:30 AM. This ensures a level playing field for all teams and adds an exciting 
                element of surprise! Come prepared to think creatively and adapt quickly to the challenge.
              </p>
            </CardContent>
          </Card>

          {/* Judging Rubric */}
          <div className="mb-8">
            <h3 className="text-3xl font-black mb-8 text-center">Judging Rubric</h3>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Projects will be evaluated by teachers throughout the day based on the following criteria. Each criterion is scored from 1 (Very Low) to 5 (Excellent).
            </p>
          </div>

          {/* Rubric Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Creativity & Innovation</h4>
                    <p className="text-sm text-muted-foreground mb-3">How original and unique is your idea?</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="font-bold text-destructive">1:</span>
                        <span className="text-muted-foreground">Common or copied idea; no originality</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-primary">5:</span>
                        <span className="text-muted-foreground">Highly original, unique, and stands out</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Technical Implementation</h4>
                    <p className="text-sm text-muted-foreground mb-3">Quality of code and execution</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="font-bold text-destructive">1:</span>
                        <span className="text-muted-foreground">Incomplete/non-functional; major flaws</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-secondary">5:</span>
                        <span className="text-muted-foreground">Exceptionally implemented; robust and flawless</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Functionality & Feasibility</h4>
                    <p className="text-sm text-muted-foreground mb-3">Does it work and is it realistic?</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="font-bold text-destructive">1:</span>
                        <span className="text-muted-foreground">Does not work or unrealistic</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-accent">5:</span>
                        <span className="text-muted-foreground">Fully functional, realistic, highly feasible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2">Presentation & Communication</h4>
                    <p className="text-sm text-muted-foreground mb-3">How well do you explain your project?</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="font-bold text-destructive">1:</span>
                        <span className="text-muted-foreground">Unclear, disorganized, hard to follow</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-primary">5:</span>
                        <span className="text-muted-foreground">Exceptionally clear, persuasive, professional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-2 hover:border-secondary transition-all">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-black mb-2">Teamwork & Collaboration</h4>
                    <p className="text-sm text-muted-foreground mb-3">How well does your team work together?</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex gap-2">
                        <span className="font-bold text-destructive">1:</span>
                        <span className="text-muted-foreground">Team didn't work together; one person dominated</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold text-secondary">5:</span>
                        <span className="text-muted-foreground">Seamless, efficient, excellent collaboration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-3">Total Score: Out of 25 Points</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The top-scoring teams will be recognized during the awards ceremony. Focus on balancing all criteria 
                for the best chance of winning!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes-section" className="py-20 md:py-28 px-6 bg-background flex justify-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-balance text-center">Prizes & Recognition</h2>
          <p className="text-xl text-muted-foreground mb-16 text-center">Celebrate your achievements and hard work</p>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all transform hover:scale-110 hover:rotate-3 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-black mb-2">Certificates</h3>
                <p className="text-sm text-muted-foreground">All participants receive certificates of participation</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all transform hover:scale-110 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-xl font-black mb-2">Medals</h3>
                <p className="text-sm text-muted-foreground">Top-performing teams receive medals</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all transform hover:scale-110 hover:-rotate-3 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-black mb-2">Special Prizes</h3>
                <p className="text-sm text-muted-foreground">LEGO sets and other exciting rewards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register-section" className="py-20 md:py-28 px-6 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance animate-slide-up">Ready to Innovate?</h2>
          <p className="text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed animate-slide-up animate-delay-100">
            Join us for an inspiring day of creativity, collaboration, and coding. Build something amazing and be part
            of a vibrant student coding community!
          </p>
          {/* Registration Button */}
          <Button
            size="lg"
            onClick={() => window.open('https://innovatexgcs.fillout.com/t/brfxJdyMb4us', '_blank')}
            className="text-2xl font-black px-12 py-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all rounded-full animate-slide-up animate-delay-200"
          >
            REGISTER YOUR TEAM NOW
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-16 px-6 bg-muted/30 flex justify-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          <h3 className="text-3xl font-black mb-3 text-center">InnovateX GCS 2026</h3>
          <p className="text-muted-foreground mb-2 font-semibold text-center">
            GEMS Cambridge International Private School, Sharjah
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center">
            Designed to inspire and educate through creativity, teamwork, and innovation. Cultivating a vibrant student
            coding community, one hackathon at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
