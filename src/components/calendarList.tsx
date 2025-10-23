"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import CalendarAdd from "./calendar-add"
import { api } from "@/trpc/react"
import { ScheduleForm } from "@/app/schema/schedule"

interface Props {
  onClose: () => void
}

export default function CalendarList({ onClose }: Props) {
  const [showAdd, setShowAdd] = useState(false)
  const [editData, setEditData] = useState<ScheduleForm | null>(null)

  const { data: schedules, isLoading, refetch } = api.schedule.getAll.useQuery()
  const deleteSchedule = api.schedule.delete.useMutation({
    onSuccess: () => refetch(),
    onError: (err) => alert("삭제 실패: " + err.message),
  })

  const handleDelete = (id: string) => {
    if (confirm("삭제하시겠습니까?")) {
      deleteSchedule.mutate(id)
    }
  }

  const handleEdit = (schedule: any) => {
    setEditData({
      id: schedule.id,
      title: schedule.title,
      startDate: schedule.startDate.toISOString().split("T")[0],
      endDate: schedule.endDate.toISOString().split("T")[0],
      color: schedule.color,
      isBooked: schedule.isBooked,
    });
    setShowAdd(true);
  }

  const handleCloseAdd = () => {
    setEditData(null)
    setShowAdd(false)
    refetch()
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-[700px] h-[600px] rounded-xl shadow-lg p-6 relative">
          {/* 상단 버튼 */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-600 text-white"
              onClick={() => { setEditData(null); setShowAdd(true) }}
            >
              일정 추가하기
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              닫기
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4">📅 캘린더 리스트</h3>

            {isLoading ? (
              <p>일정을 불러오는 중...</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2 text-left w-[60%]">제목</th>
                      <th className="border px-4 py-2 text-left w-[15%]">시작 날짜</th>
                      <th className="border px-4 py-2 text-left w-[15%]">마감 날짜</th>
                      <th className="border px-4 py-2 text-left w-[10%]">액션</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedules?.map((schedule) => (
                      <tr key={schedule.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{schedule.title}</td>
                        <td className="border px-4 py-2">{new Date(schedule.startDate).toLocaleDateString()}</td>
                        <td className="border px-4 py-2">{new Date(schedule.endDate).toLocaleDateString()}</td>
                        <td className="border px-4 py-2 space-x-2">
                          <Button size="default" onClick={() => handleEdit(schedule)}>수정</Button>
                          <Button size="default" variant="destructive" onClick={() => handleDelete(schedule.id)}>삭제</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {showAdd && <CalendarAdd onClose={handleCloseAdd} scheduleToEdit={editData} />}
    </>
  )
}
