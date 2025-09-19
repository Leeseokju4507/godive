"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react"

interface CourseEvent {
  id: string
  title: string
  date: number
  type: "course" | "training" | "tour"
  color: string
}

const courseEvents: CourseEvent[] = [
  { id: "1", title: "물질 & 프리 테크닉 클래스 아드밴스", date: 1, type: "course", color: "bg-green-200" },
  { id: "2", title: "오픈워터", date: 1, type: "training", color: "bg-yellow-200" },
  { id: "3", title: "제주도", date: 3, type: "tour", color: "bg-green-300" },
  { id: "4", title: "레이디 사이드 다이브 툴", date: 3, type: "course", color: "bg-blue-200" },
  { id: "5", title: "제주도", date: 8, type: "tour", color: "bg-green-300" },
  { id: "6", title: "태국 마린(공식)", date: 15, type: "training", color: "bg-blue-300" },
  { id: "7", title: "태국 마린(공식)", date: 21, type: "training", color: "bg-blue-300" },
  { id: "8", title: "핵시즌 감동 / 세느네, 케이브", date: 29, type: "course", color: "bg-green-200" },
  { id: "9", title: "핵시즌 감동 / 세느네, 케이브", date: 30, type: "course", color: "bg-green-200" },
]

export function CourseCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8)) // September 2025

  const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const getEventsForDay = (day: number) => {
    return courseEvents.filter((event) => event.date === day)
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">코스 일정</h2>
          <p className="text-base sm:text-lg text-muted-foreground">다이빙 코스와 투어 일정을 확인하세요</p>
        </div>

        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-lg sm:text-xl">
                {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {dayNames.map((day, index) => (
                <div
                  key={day}
                  className={`p-1 sm:p-2 text-center text-xs sm:text-sm font-medium ${
                    index === 0 ? "text-red-500" : index === 6 ? "text-blue-500" : "text-foreground"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty days for month start */}
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="h-16 sm:h-20 lg:h-24 p-1"></div>
              ))}

              {/* Days with events */}
              {days.map((day) => {
                const events = getEventsForDay(day)
                const isToday = day === 17 // Highlighting day 17 as shown in original

                return (
                  <div
                    key={day}
                    className={`h-16 sm:h-20 lg:h-24 p-1 border border-border ${
                      isToday ? "bg-primary text-primary-foreground rounded-lg" : ""
                    }`}
                  >
                    <div className={`text-xs sm:text-sm font-medium mb-1 ${isToday ? "text-center" : ""}`}>{day}</div>
                    <div className="space-y-1">
                      {events.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          className={`text-[10px] sm:text-xs p-0.5 sm:p-1 rounded text-black ${event.color} truncate leading-tight`}
                          title={event.title}
                        >
                          {event.title.length > 8 ? `${event.title.substring(0, 8)}...` : event.title}
                        </div>
                      ))}
                      {events.length > 2 && (
                        <div className="text-[10px] text-muted-foreground text-center">+{events.length - 2}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Footer with contact info and social links */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Facebook className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex justify-center space-x-3 sm:space-x-6 lg:space-x-8 flex-wrap gap-y-2">
              <span className="hover:text-primary cursor-pointer">GO DIVE KOREA</span>
              <span className="hover:text-primary cursor-pointer">ABOUT US</span>
              <span className="hover:text-primary cursor-pointer">NOTICE</span>
              <span className="hover:text-primary cursor-pointer">COURSE</span>
              <span className="hover:text-primary cursor-pointer">TOUR</span>
              <span className="hover:text-primary cursor-pointer">TRAINING</span>
              <span className="hover:text-primary cursor-pointer">Q&A</span>
              <span className="hover:text-primary cursor-pointer">REVIEW</span>
            </div>

            <div className="border-t pt-3 sm:pt-4 mt-3 sm:mt-4 space-y-1 sm:space-y-2">
              <p className="font-medium text-sm sm:text-base">GO DIVE KOREA</p>
              <p>고다이브 코리아 대표 김대표</p>
              <p>사업자등록번호 295-28-00859</p>
              <p>Tel. 010 2582 2386</p>
            </div>

            <div className="flex justify-center space-x-4 text-xs flex-wrap gap-y-1">
              <span className="hover:text-primary cursor-pointer">이용약관</span>
              <span className="hover:text-primary cursor-pointer">개인정보처리방침</span>
              <span className="hover:text-primary cursor-pointer">이용안내</span>
            </div>
            <p className="text-xs">Copyright © 2025 GO DIVE KOREA All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
