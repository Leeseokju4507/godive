import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/underwater-diving-scene-with-coral-reef-and-tropic.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
          {"Dive Into Adventure"}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-balance opacity-90 leading-relaxed">
          {"한국 최고의 다이빙 스쿨에서 바다의 신비로운 세계를 탐험하세요"}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-full sm:w-auto">
            <Link href="/course">코스 둘러보기</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 w-full sm:w-auto bg-white/90 border-white text-slate-900 hover:bg-white hover:text-primary backdrop-blur-sm"
          >
            <Link href="/about">더 알아보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
