import { Navigation } from "@/components/navigation"
import { CourseCard } from "@/components/course-card"

const courses = [
  {
    title: "오픈워터 다이버 코스",
    description: "다이빙의 기초를 배우는 입문 코스입니다. 안전한 다이빙을 위한 필수 기술을 습득합니다.",
    duration: "3-4일",
    capacity: "최대 6명",
    location: "제주도",
    price: "450,000원",
    level: "초급" as const,
    image: "/scuba-diving-training-pool.jpg",
  },
  {
    title: "어드밴스드 오픈워터",
    description: "다양한 다이빙 환경에서의 경험을 쌓고 전문 기술을 배우는 중급 코스입니다.",
    duration: "2-3일",
    capacity: "최대 4명",
    location: "부산",
    price: "380,000원",
    level: "중급" as const,
    image: "/advanced-scuba-diving-underwater.jpg",
  },
  {
    title: "레스큐 다이버 코스",
    description: "응급상황 대처 능력과 다른 다이버를 도울 수 있는 기술을 배우는 코스입니다.",
    duration: "3일",
    capacity: "최대 4명",
    location: "강릉",
    price: "520,000원",
    level: "중급" as const,
    image: "/rescue-diving-training-emergency.jpg",
  },
  {
    title: "다이브마스터 코스",
    description: "프로페셔널 다이버로 성장하기 위한 최고 수준의 교육 프로그램입니다.",
    duration: "4-6주",
    capacity: "최대 3명",
    location: "제주도",
    price: "1,200,000원",
    level: "고급" as const,
    image: "/professional-diving-instructor-training.jpg",
  },
  {
    title: "나이트록스 다이버",
    description: "나이트록스를 사용한 다이빙으로 더 긴 바닥 시간을 즐길 수 있습니다.",
    duration: "1일",
    capacity: "최대 8명",
    location: "서울",
    price: "180,000원",
    level: "중급" as const,
    image: "/nitrox-diving-equipment-tank.jpg",
  },
  {
    title: "딥 다이버 코스",
    description: "30미터 이상의 깊은 바다에서 안전하게 다이빙하는 기술을 배웁니다.",
    duration: "2일",
    capacity: "최대 4명",
    location: "울릉도",
    price: "320,000원",
    level: "중급" as const,
    image: "/deep-sea-diving-underwater-cliff.jpg",
  },
]

export default function CoursePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">다이빙 코스</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              초보자부터 전문가까지, 모든 레벨에 맞는 다이빙 교육 프로그램을 제공합니다. 안전하고 체계적인 교육으로
              바다의 아름다움을 경험해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">코스 문의 및 예약</h2>
              <p className="text-muted-foreground mb-6">
                궁금한 점이 있으시거나 코스 예약을 원하시면 언제든 연락주세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-medium">전화 문의</p>
                  <p className="text-primary font-bold">010-2582-2386</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">카카오톡</p>
                  <p className="text-primary font-bold">@godivekorea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
