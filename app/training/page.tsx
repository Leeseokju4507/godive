import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Award, BookOpen } from "lucide-react"

const trainingPrograms = [
  {
    title: "PADI 오픈워터 자격증",
    description: "세계적으로 인정받는 PADI 오픈워터 다이버 자격증 취득 과정",
    duration: "3-4일",
    certification: "PADI Open Water Diver",
    price: "450,000원",
    level: "입문",
    image: "/padi-open-water-certification-training.jpg",
    curriculum: ["이론 교육", "수영장 실습", "바다 실습", "자격증 발급"],
  },
  {
    title: "어드밴스드 오픈워터",
    description: "다양한 다이빙 환경에 적응하고 전문 기술을 익히는 중급 과정",
    duration: "2-3일",
    certification: "PADI Advanced Open Water",
    price: "380,000원",
    level: "중급",
    image: "/advanced-diving-training-underwater-navigation.jpg",
    curriculum: ["딥 다이빙", "수중 내비게이션", "야간 다이빙", "부력 조절"],
  },
  {
    title: "레스큐 다이버 교육",
    description: "응급상황 대처와 구조 기술을 배우는 전문 교육 과정",
    duration: "3-4일",
    certification: "PADI Rescue Diver",
    price: "520,000원",
    level: "중급",
    image: "/rescue-diver-training-emergency-response.jpg",
    curriculum: ["응급처치", "구조 기술", "스트레스 관리", "사고 예방"],
  },
  {
    title: "다이브마스터 과정",
    description: "프로페셔널 다이버로 성장하기 위한 최고 수준의 교육",
    duration: "4-6주",
    certification: "PADI Divemaster",
    price: "1,200,000원",
    level: "전문가",
    image: "/divemaster-professional-training-leadership.jpg",
    curriculum: ["리더십 개발", "다이빙 이론", "실습 지도", "안전 관리"],
  },
]

export default function TrainingPage() {
  const levelColors = {
    입문: "bg-green-100 text-green-800",
    중급: "bg-yellow-100 text-yellow-800",
    전문가: "bg-red-100 text-red-800",
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">다이빙 교육</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              체계적이고 안전한 다이빙 교육으로 전문 다이버로 성장하세요. 국제 공인 자격증 취득과 함께 평생 즐길 수 있는
              취미를 만들어보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${program.image}')` }} />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <Badge className={levelColors[program.level as keyof typeof levelColors]}>{program.level}</Badge>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      교육 기간: {program.duration}
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                      취득 자격증: {program.certification}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm font-medium">교육 과정:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {program.curriculum.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="justify-center">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{program.price}</span>
                    <Button>교육 신청</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">교육 특징</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">국제 공인 자격증</h3>
                  <p className="text-sm text-muted-foreground">
                    PADI 공인 교육으로 전 세계에서 인정받는 자격증을 취득하세요.
                  </p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">체계적인 교육</h3>
                  <p className="text-sm text-muted-foreground">
                    이론부터 실습까지 단계별로 체계적인 교육을 제공합니다.
                  </p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">개인별 맞춤 교육</h3>
                  <p className="text-sm text-muted-foreground">개인의 수준에 맞춘 맞춤형 교육으로 안전하게 배우세요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
