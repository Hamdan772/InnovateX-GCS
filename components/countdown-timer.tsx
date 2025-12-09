"use client"

import { useState, useEffect, useRef } from "react"
import confetti from "canvas-confetti"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const targetDate = new Date("2026-02-07T08:00:00").getTime()
  const hasTriggeredConfetti = useRef(false)
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())
  const [mounted, setMounted] = useState(false)
  const [prevTime, setPrevTime] = useState<TimeLeft>(calculateTimeLeft())

  const triggerConfetti = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    }, 250)
  }

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setPrevTime(timeLeft)
      setTimeLeft(newTimeLeft)
      
      // Check if countdown has reached zero
      if (!hasTriggeredConfetti.current && 
          newTimeLeft.days === 0 && 
          newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && 
          newTimeLeft.seconds === 0) {
        hasTriggeredConfetti.current = true
        triggerConfetti()
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  if (!mounted) {
    return (
      <div className="flex gap-3 md:gap-6 justify-center">
        {[0, 0, 0, 0].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-primary-foreground/10 rounded-lg flex items-center justify-center border border-primary-foreground/20 animate-pulse">
              <span className="text-3xl md:text-5xl font-black opacity-50">0</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex gap-3 md:gap-6 justify-center">
        {timeUnits.map((unit, index) => {
          const hasChanged = prevTime[unit.label.toLowerCase() as keyof TimeLeft] !== unit.value
          return (
            <div key={unit.label} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 md:w-24 md:h-24 bg-primary-foreground/10 rounded-lg flex items-center justify-center border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/15 hover:border-primary-foreground/30 hover:scale-105 ${hasChanged ? 'scale-110 bg-primary-foreground/20' : ''}`}>
                <span className="text-3xl md:text-5xl font-black tabular-nums leading-none transition-all duration-300">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-widest opacity-70">
                {unit.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
