"use client"

import { useState } from "react"
import { X, Users, Mail, School, User, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface RegistrationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    teamName: "",
    schoolName: "",
    member1Name: "",
    member1Email: "",
    member2Name: "",
    member2Email: "",
    member3Name: "",
    member3Email: "",
    member4Name: "",
    member4Email: "",
    teacherName: "",
    teacherEmail: "",
    specialRequirements: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        teamName: "",
        schoolName: "",
        member1Name: "",
        member1Email: "",
        member2Name: "",
        member2Email: "",
        member3Name: "",
        member3Email: "",
        member4Name: "",
        member4Email: "",
        teacherName: "",
        teacherEmail: "",
        specialRequirements: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-primary shadow-2xl">
        <div className="sticky top-0 bg-card z-10 border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">Team Registration</h2>
            <p className="text-muted-foreground">InnovateX GCS 2026 - February 7th, 2026</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <CardContent className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-3xl font-black mb-3">Registration Successful!</h3>
              <p className="text-lg text-muted-foreground">
                Thank you for registering. We'll send confirmation details to your email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Team Information */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Team Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Team Name *</label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="The Innovators"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">School Name *</label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="GEMS Cambridge Sharjah"
                    />
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Team Members (3-4 students)
                </h3>
                
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="mb-4 p-4 border-2 border-border rounded-lg">
                    <p className="font-semibold mb-3">Member {num} {num <= 3 ? "*" : "(Optional)"}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name={`member${num}Name`}
                        value={formData[`member${num}Name` as keyof typeof formData]}
                        onChange={handleChange}
                        required={num <= 3}
                        className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        name={`member${num}Email`}
                        value={formData[`member${num}Email` as keyof typeof formData]}
                        onChange={handleChange}
                        required={num <= 3}
                        className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Teacher/Guardian Contact */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <School className="w-5 h-5 text-primary" />
                  Teacher/Guardian Contact
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Teacher/Guardian Name *</label>
                    <input
                      type="text"
                      name="teacherName"
                      value={formData.teacherName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="Mr./Ms. Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Teacher/Guardian Email *</label>
                    <input
                      type="email"
                      name="teacherEmail"
                      value={formData.teacherEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="teacher@school.com"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Special Requirements or Dietary Restrictions
                </label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Any allergies, accessibility needs, or other requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 py-6 text-lg font-bold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all"
                >
                  Submit Registration
                </Button>
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="px-8 py-6 text-lg font-bold"
                >
                  Cancel
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you confirm that you have parent/guardian consent and agree to the event terms and photo/video policy.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
