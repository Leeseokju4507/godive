import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CourseCalendar } from "@/components/course-calendar"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CourseCalendar />
    </main>
  )
}
