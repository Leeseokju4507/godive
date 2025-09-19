import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, MapPin, Clock, Shield, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "김대표",
    role: "대표 / 수석 강사",
    experience: "15년",
    certifications: ["PADI 코스 디렉터", "EFR 강사", "나이트록스 강사"],
    image: "/diving-instructor-kim-ceo-portrait.jpg",
    description: "15년간의 다이빙 경험과 전문 지식으로 안전하고 즐거운 다이빙을 지도합니다.",
  },
  {
    name: "박강사",
    role: "수중 사진 전문 강사",
    experience: "10년",
    certifications: ["PADI 다이브마스터", "수중 사진 전문가", "딥 다이빙 강사"],
    image: "/diving-instructor-park-underwater-photography.jpg",
    description: "수중 사진의 아름다움을 전하며 바다의 신비로운 순간들을 포착하는 방법을 가르칩니다.",
  },
  {
    name: "이강사",
    role: "레스큐 전문 강사",
    experience: "12년",
    certifications: ["PADI 레스큐 강사", "응급처치 강사", "나이트 다이빙 강사"],
    image: "/diving-instructor-lee-rescue-specialist.jpg",
    description: "안전 다이빙의 전문가로서 응급상황 대처와 구조 기술을 전문적으로 교육합니다.",
  },
]

const facilities = [
  {
    title: "최신 다이빙 장비",
    description: "정기적으로 점검되고 관리되는 최신 다이빙 장비를 제공합니다.",
    icon: Shield,
  },
  {
    title: "전용 교육 시설",
    description: "이론 교육과 실습을 위한 전용 교육 시설을 보유하고 있습니다.",
    icon: MapPin,
  },
  {
    title: "24시간 안전 지원",
    description: "다이빙 중 응급상황에 대비한 24시간 안전 지원 시스템을 운영합니다.",
    icon: Clock,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GO DIVE KOREA 소개</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            2008년부터 시작된 GO DIVE KOREA는 한국 최고의 다이빙 교육 기관으로, 안전하고 전문적인 다이빙 교육을 제공하고
            있습니다.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">우리의 미션</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">안전한 다이빙 문화 조성</h3>
                    <p className="text-muted-foreground">
                      체계적인 교육과 철저한 안전 관리를 통해 안전한 다이빙 문화를 만들어갑니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">전문 다이버 양성</h3>
                    <p className="text-muted-foreground">
                      국제 공인 자격증 취득을 통해 전 세계에서 활동할 수 있는 전문 다이버를 양성합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">바다 환경 보호</h3>
                    <p className="text-muted-foreground">
                      바다를 사랑하는 다이버로서 해양 환경 보호의 중요성을 교육하고 실천합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="h-96 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('/diving-school-mission-ocean-conservation.jpg')`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">전문 강사진</h2>
            <p className="text-lg text-muted-foreground">
              풍부한 경험과 전문 지식을 갖춘 강사진이 여러분의 다이빙 여정을 함께합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${member.image}')` }} />
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">경력 {member.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                  <div>
                    <p className="text-sm font-medium mb-2">보유 자격증:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">시설 및 장비</h2>
            <p className="text-lg text-muted-foreground">최고의 교육 환경과 안전한 장비로 여러분을 지원합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg mb-3">{facility.title}</CardTitle>
                <p className="text-muted-foreground">{facility.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/diving-equipment-facility-modern-gear.jpg')`,
              }}
            />
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/diving-training-facility-pool-classroom.jpg')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">GO DIVE KOREA 성과</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">년간 운영</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">교육 수료생</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">투어 진행</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-muted-foreground">만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">함께 바다를 탐험해보세요</h2>
            <p className="text-muted-foreground mb-6">
              GO DIVE KOREA와 함께 안전하고 즐거운 다이빙의 세계로 떠나보세요. 언제든 문의해주시면 친절하게
              안내해드리겠습니다.
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
      </section>
    </main>
  )
}
