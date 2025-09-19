import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export function Footer() {
  const navLinks = [
    { name: "홈", href: "/" },
    { name: "소개", href: "/about" },
    { name: "공지사항", href: "/notice" },
    { name: "코스", href: "/course" },
    { name: "투어", href: "/tour" },
    { name: "교육", href: "/training" },
    { name: "Q&A", href: "/qa" },
    { name: "후기", href: "/review" },
  ]

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">GO DIVE KOREA</h3>
            <p className="text-sm text-muted-foreground">
              2008년부터 시작된 한국 최고의 다이빙 교육 기관으로, 안전하고 전문적인 다이빙 교육을 제공합니다.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">빠른 링크</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">연락처</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>010-2582-2386</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>@godivekorea</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  서울특별시 강남구
                  <br />
                  다이빙 교육센터
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>평일 09:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">사업자 정보</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>고다이브 코리아</p>
              <p>대표: 김대표</p>
              <p>사업자등록번호: 295-28-00859</p>
              <p>통신판매업신고: 제2023-서울강남-1234호</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/guide" className="hover:text-primary transition-colors">
                이용안내
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">Copyright © 2025 GO DIVE KOREA All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
