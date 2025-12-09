import Link from "next/link"
import { ArrowLeft, Shield, Users, AlertTriangle, Scale, Award, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Event Rules & Code of Conduct
          </h1>
          <p className="text-xl text-primary">
            Innovate X GCS 2026
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            To ensure a safe, fair, and collaborative environment where all participants can innovate and build functional solutions.
          </p>
        </div>

        {/* Rules Sections */}
        <div className="space-y-6">
          {/* General Rules */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-black mb-4">1. General Rules</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>All participants must be <strong className="text-foreground">registered students</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Teams may not exceed the maximum number of members.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Participants must follow instructions from <strong className="text-foreground">teachers, volunteers, and organizers</strong> at all times.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Respect all participants, volunteers, and teachers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Behavior & Ethics */}
          <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-black mb-4">2. Behavior & Ethics</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Maintain a <strong className="text-foreground">positive and collaborative environment</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span><strong className="text-foreground">No plagiarism</strong> — all work must be original.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Disruptive behavior or interference with other teams' projects is prohibited.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Treat all equipment, materials, and spaces responsibly.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety & Equipment */}
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-black mb-4">3. Safety & Equipment</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Use all lab and classroom equipment safely.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Food and drinks are allowed <strong className="text-foreground">only in designated areas</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Report damaged or malfunctioning equipment immediately to organizers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Avoid any unsafe practices or modifications to equipment.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Presentation & Communication */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-black mb-4">4. Presentation & Communication</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Present projects honestly and clearly to teachers and judges.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Be prepared to <strong className="text-foreground">demonstrate functionality and explain team contributions</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Maintain professionalism in all interactions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Judging & Fair Play */}
          <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Scale className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-black mb-4">5. Judging & Fair Play</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Round 1: Teacher-led judging in classrooms/labs; their decisions on advancing teams are <strong className="text-foreground">final</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Round 2: Central judging by main panel; judges' decisions are <strong className="text-foreground">final and binding</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Teams must not obstruct, copy, or manipulate other projects.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Follow all instructions for presentations and demonstrations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consequences */}
          <Card className="border-2 border-destructive/30 bg-gradient-to-br from-destructive/5 to-destructive/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-black mb-4">6. Consequences</h2>
                  <p className="text-muted-foreground mb-3">
                    Violating rules or engaging in unsafe or unsportsmanlike behavior may result in:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong className="text-foreground">Disqualification</strong> from the hackathon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span><strong className="text-foreground">Removal</strong> from the venue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Loss of eligibility for <strong className="text-foreground">certificates and awards</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-muted/50 border border-border rounded-lg">
          <p className="text-center text-muted-foreground">
            This document ensures all participants understand expectations for{" "}
            <strong className="text-foreground">behavior, safety, fair play, and presentations</strong>.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
