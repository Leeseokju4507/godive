import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

const faqs = [
  {
    question: "다이빙을 처음 배우는데 어떤 코스를 선택해야 하나요?",
    answer:
      "다이빙을 처음 시작하시는 분들께는 '오픈워터 다이버 코스'를 추천합니다. 이 코스는 다이빙의 기초 이론과 실습을 포함하여 안전한 다이빙을 위한 필수 기술을 배우실 수 있습니다.",
  },
  {
    question: "코스 수료 후 자격증은 언제 받을 수 있나요?",
    answer:
      "코스 수료 후 약 2-3주 내에 PADI 본부에서 발급되는 정식 자격증을 받으실 수 있습니다. 임시 자격증은 코스 수료 즉시 발급해드립니다.",
  },
  {
    question: "다이빙 장비는 개인적으로 준비해야 하나요?",
    answer:
      "초급 코스의 경우 모든 장비를 대여해드립니다. 다만 마스크, 핀, 스노클 등 개인 위생용품은 개인 구매를 권장합니다. 장비 구매 상담도 언제든 도와드립니다.",
  },
  {
    question: "나이 제한이 있나요?",
    answer:
      "오픈워터 코스는 만 10세부터 참여 가능합니다. 미성년자의 경우 보호자 동의서가 필요하며, 60세 이상의 경우 건강진단서를 제출해주셔야 합니다.",
  },
  {
    question: "수영을 못해도 다이빙을 배울 수 있나요?",
    answer:
      "기본적인 수영 능력이 필요합니다. 200m 자유형 수영과 10분간 물에 떠있기가 가능하시면 코스 참여가 가능합니다. 수영이 부족하시다면 먼저 수영 연습을 권장합니다.",
  },
  {
    question: "코스 취소나 일정 변경이 가능한가요?",
    answer:
      "코스 시작 7일 전까지는 100% 환불이 가능하며, 3일 전까지는 50% 환불됩니다. 일정 변경은 가능한 범위 내에서 최대한 도와드리고 있습니다.",
  },
  {
    question: "해외에서도 자격증을 사용할 수 있나요?",
    answer:
      "네, PADI 자격증은 전 세계적으로 인정받는 국제 공인 자격증입니다. 전 세계 어디서든 다이빙을 즐기실 수 있습니다.",
  },
  {
    question: "겨울에도 다이빙이 가능한가요?",
    answer:
      "한국에서는 겨울철에도 드라이슈트를 착용하고 다이빙이 가능합니다. 다만 수온이 낮아 초보자에게는 봄~가을 시즌을 권장합니다.",
  },
]

export default function QAPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">자주 묻는 질문</h1>
            <p className="text-xl text-muted-foreground">다이빙과 관련하여 자주 문의하시는 질문들을 모았습니다.</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">더 궁금한 점이 있으신가요?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  위에서 찾지 못한 질문이 있으시면 언제든 연락주세요. 친절하게 답변해드리겠습니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    010-2582-2386
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <MessageCircle className="h-4 w-4" />
                    카카오톡 @godivekorea
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
