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
    title: "다이빙 장비",
    description: "각 장비 회사의 테크니션이 정기적으로 직접 관리하는 다이빙 장비를 제공",
    icon: Shield,
  },
  {
    title: "전문 교육장",
    description: "서울 중심부에 위치한 surgy 전용 전문 교육장 운영",
    icon: MapPin,
  },
  {
    title: "24시간 장수 지원",
    description: "다이버가 필요한 곳이라면 24시간 긴급출동 시스템 운영",
    icon: Clock,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SUGRY TOUR & DIVE 소개</h1>
          <div className="">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-left">
              <b>① Diving Education – 다이빙 교육</b><br/>
              SDITDI, SNSI, CMAS, PADI 공인 강사 및 트레이너 센터로서, 15년 이상 수중·수상 교육과 대학 강의와 센터 강의를 통해 1,000명 이상의 다이버를 양성한 경험을 바탕으로 전문적이고 안전한 교육을 제공합니다.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-left">
              <br/>
              <b>② Commercial Diving – 커머셜 다이빙 및 전문지원</b><br/>
              2017년부터 해양수산부 및 현대 등 다양한 기업과 협력하여 커머셜 다이빙 프로젝트를 수행하고 있으며, 군부대와 소방 전문 교육 및 잠수 지원을 지속적으로 진행하고 있습니다.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-left">
              <br/>
              <b>③ Tour & Travel – 다이빙 투어 및 여행사업</b><br/>
              연간 12회 이상의 국내 스쿠버 투어와 6회 이상의 해외 다이빙 투어를 직접 기획·운영하며, 일반 여행업까지 함께 아우르는 종합 해양 전문 기관입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">우리의 철학</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">안전 최우선</h3>
                    <p className="text-muted-foreground">
                      장비, 환경, 호흡까지 철저히 점검하여 모두가 안심하고 다이빙할 수 있도록 합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">아마추어부터 프로까지 체계적 교육</h3>
                    <p className="text-muted-foreground">
                      단계별 교육 시스템으로 누구나 프리・스쿠버・테크니컬 다이빙을 체계적으로 배울 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">함께 성장하는 커뮤니티</h3>
                    <p className="text-muted-foreground">
                      서로를 존중하고 격려하며, 초보부터 전문가까지 모두가 함께 배우고 발전합니다.
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
            <p className="text-lg text-muted-foreground">접근이 편안한 서울 중심부에 있는 교육장과 전문 장비 테크니션이 관리하는 안전한 장비로 교육합니다.</p>
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
            <h2 className="text-3xl font-bold mb-4">SURGY ROUR & DIVE 성과</h2>
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
            <p className="mb-6">
              SURGY와 함께 전 세계 다양한 바다를 안전하고 재미있게 탐험하며, 물속 세상을 즐겨보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <p className="font-medium">전화 문의</p>
                <p className="text-primary font-bold">010-4666-9225</p>
              </div>
              <div className="text-center">
                <p className="font-medium">카카오톡</p>
                <p className="text-primary font-bol">@sugry</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
