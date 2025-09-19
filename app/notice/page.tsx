import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Pin } from "lucide-react"

const notices = [
  {
    id: 1,
    title: "2025년 제주도 다이빙 투어 일정 안내",
    content:
      "2025년 제주도 다이빙 투어 일정이 확정되었습니다. 3월부터 11월까지 매월 2회씩 진행되며, 사전 예약은 필수입니다. 자세한 일정과 예약 방법은 전화 또는 카카오톡으로 문의해주세요.",
    date: "2025-01-15",
    type: "투어",
    pinned: true,
  },
  {
    id: 2,
    title: "겨울철 다이빙 코스 운영 안내",
    content:
      "겨울철(12월~2월) 다이빙 코스는 실내 수영장에서 진행됩니다. 드라이슈트 교육도 함께 제공되며, 날씨가 좋은 날에는 바다 실습도 가능합니다.",
    date: "2024-12-01",
    type: "교육",
    pinned: false,
  },
  {
    id: 3,
    title: "새로운 다이빙 장비 도입 안내",
    content:
      "최신 다이빙 장비를 새롭게 도입했습니다. 더욱 안전하고 편리한 다이빙 교육을 위해 정기적으로 장비를 업그레이드하고 있습니다.",
    date: "2024-11-20",
    type: "시설",
    pinned: false,
  },
  {
    id: 4,
    title: "태국 마린 다이빙 투어 모집",
    content:
      "2025년 3월 태국 마린 다이빙 투어를 진행합니다. 5박 6일 일정으로 진행되며, 현재 사전 예약을 받고 있습니다. 선착순 마감이니 서둘러 신청해주세요.",
    date: "2024-11-10",
    type: "투어",
    pinned: false,
  },
  {
    id: 5,
    title: "연말연시 휴무 안내",
    content: "12월 30일부터 1월 2일까지 연말연시 휴무입니다. 응급상황 시에는 휴대폰으로 연락 부탁드립니다.",
    date: "2024-12-25",
    type: "공지",
    pinned: false,
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "투어":
      return "bg-blue-100 text-blue-800"
    case "교육":
      return "bg-green-100 text-green-800"
    case "시설":
      return "bg-purple-100 text-purple-800"
    case "공지":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function NoticePage() {
  const pinnedNotices = notices.filter((notice) => notice.pinned)
  const regularNotices = notices.filter((notice) => !notice.pinned)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">공지사항</h1>
            <p className="text-xl text-muted-foreground">GO DIVE KOREA의 최신 소식과 중요한 안내사항을 확인하세요.</p>
          </div>

          {/* Pinned Notices */}
          {pinnedNotices.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Pin className="h-5 w-5 text-primary" />
                중요 공지
              </h2>
              <div className="space-y-4">
                {pinnedNotices.map((notice) => (
                  <Card key={notice.id} className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-lg">{notice.title}</CardTitle>
                        <Badge className={getTypeColor(notice.type)}>{notice.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {notice.date}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{notice.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Notices */}
          <div className="space-y-4">
            {regularNotices.map((notice) => (
              <Card key={notice.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                    <Badge className={getTypeColor(notice.type)}>{notice.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {notice.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{notice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">문의사항이 있으신가요?</h3>
                <p className="text-muted-foreground mb-4">
                  공지사항과 관련하여 궁금한 점이 있으시면 언제든 연락주세요.
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
