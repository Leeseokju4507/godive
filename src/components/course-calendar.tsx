"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import { HeroSection } from "./hero-section"
import { api } from "@/trpc/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import CalendarList from "./calendarList"

export function CourseCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [calendarList, setCalendarList] = useState(false)

  const { data: courseEvents, isLoading } = api.schedule.getAll.useQuery()

  const monthNames = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
  const dayNames = ["일","월","화","수","목","금","토"]

  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") newDate.setMonth(prev.getMonth() - 1)
      else newDate.setMonth(prev.getMonth() + 1)
      return newDate
    })
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const getEventsForDay = (day: number) => {
    return courseEvents?.filter((event) => {
      const start = new Date(event.startDate)
      const end = new Date(event.endDate)
      const current = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)

      // 날짜만 비교 (시간은 0으로)
      const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate())
      const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate())

      return current >= startDay && current <= endDay
    }) ?? []
  }

  if (isLoading) return <p className="text-center py-10">불러오는 중...</p>

  return (
    <>
      <HeroSection />
      <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">코스 일정</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              다이빙 코스와 투어 일정을 확인하세요
            </p>
          </div>
          <div>
            {true && (
              <div className="w-full flex justify-end mb-3">
                <Button 
                  className="flex items-center justify-center" 
                  onClick={() => setCalendarList(!calendarList)}
                >
                  <div>캘린더 리스트</div>
                </Button>
              </div>
            )}
            {calendarList && (
              <CalendarList
                onClose={() => setCalendarList(false)}
              />
            )}
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
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {dayNames.map((day, index) => (
                    <div
                      key={day}
                      className={`p-1 sm:p-2 text-center text-xs sm:text-sm font-medium ${
                        index === 0
                          ? "text-red-500"
                          : index === 6
                          ? "text-blue-500"
                          : "text-foreground"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {emptyDays.map((_, i) => (
                    <div key={`empty-${i}`} className="h-16 sm:h-20 lg:h-24 p-1"></div>
                  ))}

                  {days.map((day) => {
                    const events = getEventsForDay(day)
                    const today = new Date()
                    const isToday =
                      day === today.getDate() &&
                      currentDate.getMonth() === today.getMonth() &&
                      currentDate.getFullYear() === today.getFullYear()

                    return (
                      <div
                        key={day}
                        className={`h-16 sm:h-20 lg:h-24 p-1 border border-border ${
                          isToday ? "bg-primary text-primary-foreground rounded-lg" : ""
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-medium mb-1 ml-1">{day}</div>
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
                            <div className="text-[10px] text-muted-foreground text-center">
                              +{events.length - 2}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(
                  "https://www.instagram.com/sg_dive?igsh=MWZ4OGs3MWJqZ3V5&utm_source=qr",
                  "_blank",
                  "noopener,noreferrer"
                )}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
