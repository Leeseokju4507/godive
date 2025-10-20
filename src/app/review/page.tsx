import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, User } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "김민수",
    course: "오픈워터 다이버",
    rating: 5,
    date: "2024-11-15",
    content:
      "처음 다이빙을 배우는데 강사님이 정말 친절하고 자세하게 가르쳐주셨어요. 안전에 대한 부분도 꼼꼼히 설명해주셔서 안심하고 배울 수 있었습니다. 제주도 바다에서의 첫 다이빙은 정말 잊을 수 없는 경험이었어요!",
    location: "제주도",
  },
  {
    id: 2,
    name: "박지영",
    course: "어드밴스드 오픈워터",
    rating: 5,
    date: "2024-10-28",
    content:
      "어드밴스드 코스를 통해 다양한 다이빙 기술을 배울 수 있었습니다. 특히 야간 다이빙과 딥 다이빙이 인상적이었어요. 강사님의 전문적인 지도 덕분에 자신감을 갖고 다이빙할 수 있게 되었습니다.",
    location: "부산",
  },
  {
    id: 3,
    name: "이준호",
    course: "태국 마린 투어",
    rating: 5,
    date: "2024-10-10",
    content:
      "태국 마린 투어 정말 최고였습니다! 투명한 바다와 아름다운 산호초, 그리고 다양한 열대어들을 볼 수 있어서 너무 행복했어요. 가이드분도 현지 사정을 잘 아셔서 최고의 포인트들을 안내해주셨습니다.",
    location: "태국",
  },
  {
    id: 4,
    name: "최수진",
    course: "레스큐 다이버",
    rating: 5,
    date: "2024-09-22",
    content:
      "레스큐 코스는 정말 도전적이었지만 많은 것을 배울 수 있었습니다. 응급상황 대처법과 구조 기술을 배우면서 다이빙에 대한 책임감도 느끼게 되었어요. 강사님의 실무 경험을 바탕으로 한 교육이 정말 유익했습니다.",
    location: "강릉",
  },
  {
    id: 5,
    name: "정민우",
    course: "나이트록스 다이버",
    rating: 4,
    date: "2024-09-05",
    content:
      "나이트록스 교육을 통해 더 오래 다이빙을 즐길 수 있게 되었어요. 이론 교육도 체계적이고 실습도 안전하게 진행되었습니다. 앞으로 더 다양한 다이빙을 즐길 수 있을 것 같아요.",
    location: "서울",
  },
  {
    id: 6,
    name: "한소영",
    course: "제주도 투어",
    rating: 5,
    date: "2024-08-18",
    content:
      "제주도의 아름다운 바다를 만끽할 수 있었습니다. 특히 서귀포 앞바다의 연산호가 정말 인상적이었어요. 가이드분이 수중 생물에 대해서도 자세히 설명해주셔서 더욱 흥미로웠습니다.",
    location: "제주도",
  },
]

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
  ))
}

export default function ReviewPage() {
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <main className="min-h-screen bg-background">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">수강생 후기</h1>
            <p className="text-xl text-muted-foreground mb-6">
              SURGY ROUR & DIVE와 함께한 다이버들의 생생한 후기를 확인해보세요.
            </p>

            {/* Rating Summary */}
            <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-bold">{averageRating.toFixed(1)}</span>
                <div className="flex">{renderStars(Math.round(averageRating))}</div>
              </div>
              <p className="text-muted-foreground">
                총 {reviews.length}개의 후기 • 평균 {averageRating.toFixed(1)}점
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-2">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{review.course}</Badge>
                          <Badge variant="outline">{review.location}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">{renderStars(review.rating)}</div>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">당신의 다이빙 스토리를 들려주세요</h3>
                <p className="text-muted-foreground mb-6">
                  SURGY ROUR & DIVE와 함께한 경험을 공유해주시면 다른 분들에게 큰 도움이 됩니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <p className="font-medium">후기 작성 문의</p>
                    <p className="text-primary font-bold">010-4666-9225</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">카카오톡</p>
                    <p className="text-primary font-bold">@surgy</p>
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
