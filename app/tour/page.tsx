import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

const tours = [
  {
    title: "제주도 다이빙 투어",
    description: "제주도의 아름다운 바다에서 즐기는 2박 3일 다이빙 투어",
    duration: "2박 3일",
    location: "제주도 서귀포",
    participants: "6-12명",
    price: "380,000원",
    dates: ["2025.09.15-17", "2025.10.12-14"],
    image: "/jeju-island-diving-underwater-rocks.jpg",
    highlights: ["문섬 다이빙", "범섬 다이빙", "숙박 포함", "장비 대여"],
  },
  {
    title: "태국 마린 다이빙",
    description: "태국 푸켓의 환상적인 바다에서 즐기는 다이빙 투어",
    duration: "4박 5일",
    location: "태국 푸켓",
    participants: "8-16명",
    price: "1,200,000원",
    dates: ["2025.11.20-24", "2025.12.15-19"],
    image: "/thailand-phuket-diving-tropical-fish.jpg",
    highlights: ["피피섬 다이빙", "샤크포인트", "항공료 포함", "전문 가이드"],
  },
  {
    title: "울릉도 다이빙 투어",
    description: "울릉도의 청정 바다에서 만나는 특별한 다이빙 경험",
    duration: "3박 4일",
    location: "울릉도",
    participants: "4-8명",
    price: "650,000원",
    dates: ["2025.08.25-28", "2025.09.22-25"],
    image: "/ulleungdo-island-diving-clear-water.jpg",
    highlights: ["깊은 바다 다이빙", "희귀 어종 관찰", "숙박 포함", "현지 가이드"],
  },
]

export default function TourPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">다이빙 투어</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              국내외 최고의 다이빙 포인트에서 잊지 못할 추억을 만들어보세요. 전문 가이드와 함께하는 안전하고 즐거운
              다이빙 투어입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${tour.image}')` }} />
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <p className="text-muted-foreground">{tour.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      {tour.participants}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">투어 일정:</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.dates.map((date, idx) => (
                        <Badge key={idx} variant="outline">
                          {date}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">투어 하이라이트:</p>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{tour.price}</span>
                    <Button>예약하기</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">투어 예약 및 문의</h2>
              <p className="text-muted-foreground mb-6">
                투어 일정이나 상세 내용에 대해 궁금한 점이 있으시면 언제든 연락주세요.
              </p>
              <Button size="lg" className="mr-4">
                카카오톡 문의
              </Button>
              <Button size="lg" variant="outline">
                전화 문의
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
