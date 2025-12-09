"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Who can participate in InnovateX GCS 2026?",
    answer: "Any student from participating schools can join! Teams consist of 3-4 students. Both beginners and experienced coders are welcome. The event focuses on creativity, teamwork, and learning rather than prior experience.",
  },
  {
    question: "Do I need to have a team before registering?",
    answer: "Yes, you should form a team of 3-4 students before registering. If you need help finding teammates, reach out to us and we can help connect you with other interested participants from your school or region.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop with charger, creative ideas, team spirit, and a positive attitude! The school will provide Wi-Fi access. Don't forget to have parent consent forms completed before the event.",
  },
  {
    question: "Will food be provided?",
    answer: "Yes! Lunch and refreshments will be provided during the designated break time from 12:00 PM to 12:30 PM. Please let us know about any dietary restrictions during registration.",
  },
  {
    question: "What is the theme of the hackathon?",
    answer: "The theme will be revealed during the opening ceremony at 8:30 AM on the day of the event. This ensures all teams have an equal opportunity to brainstorm and create their projects.",
  },
  {
    question: "What technologies or programming languages can we use?",
    answer: "You're free to use any programming languages, frameworks, or tools you're comfortable with! Popular choices include HTML/CSS/JavaScript for web apps, Python, Java, Scratch, or any game development tools. The focus is on creativity and functionality.",
  },
  {
    question: "How will projects be judged?",
    answer: "Projects will be evaluated based on creativity, functionality, design, and teamwork. Teachers will act as judges throughout the day and will shortlist top teams for final evaluation. Don't worry about perfection—we value effort and innovation!",
  },
  {
    question: "What are the prizes?",
    answer: "All participants receive certificates of participation. Top-performing teams will receive medals, and winners will get special prizes including LEGO sets and other exciting rewards!",
  },
  {
    question: "Can we start working on our project before the event?",
    answer: "No, all projects must be created during the event day, starting after the theme is revealed at 8:30 AM. This ensures fairness and gives everyone an equal opportunity.",
  },
  {
    question: "What if we need help during the hackathon?",
    answer: "Teachers and volunteers will be available throughout the day to provide guidance and support. Feel free to ask questions—we're here to help you learn and succeed!",
  },
  {
    question: "Is there a registration fee?",
    answer: "Please contact us for registration details and any associated fees. Information will be provided during the registration process.",
  },
  {
    question: "What happens if I can't attend after registering?",
    answer: "Please inform us as soon as possible if you need to cancel. This helps us plan better and potentially offer your spot to someone on a waiting list.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq-section" className="py-24 px-6 bg-background flex justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-primary" />
            <h2 className="text-5xl md:text-6xl font-black text-balance">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-muted-foreground">Everything you need to know about InnovateX GCS 2026</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-3 md:p-4 flex items-start justify-between gap-3 hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <CardContent className="px-3 md:px-4 pb-3 md:pb-4 pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-black mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Feel free to reach out to us!
              </p>
              <a
                href="#contact-section"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
