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
            <h3 className="text-lg font-bold text-primary">SURGY TOUR & DIVE</h3>
            <p className="text-sm text-muted-foreground">
              SDITDI, SNSI, CMAS, PADI 공인 강사 및 트레이너 센터로서, 15년 이상 수중・수상 교육과 대학 강의를 통해 1,000명 이상의 다이버를 배출한 노하우를 바탕으로 전문적이고 안전한 다이빙 교육을 제공합니다.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/sg_dive?igsh=MWZ4OGs3MWJqZ3V5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded bg-transparent border-none hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              >
                <Instagram className="h-5 w-5" />
              </a>
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
                <span>010-4666-9225</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="">@surgy</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  서울시 성동구 행당로
                  <br />
                  11길 9-7 b1
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="">00:00-24:00</span>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">사업자 정보</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>써지 투어 엔 다이브</p>
              <p>대표: 이주영</p>
              <p>사업자등록번호: 478-48-00879</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <Link href="/terms" className="hover:text-primary transition-colors text-red-400">
                이용약관
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors text-red-400">
                개인정보처리방침
              </Link>
              <Link href="/guide" className="hover:text-primary transition-colors text-red-400">
                이용안내
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">Copyright © 2025 SURGY TOUR & DIVE All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
