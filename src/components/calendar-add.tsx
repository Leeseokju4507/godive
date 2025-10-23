import { useState } from "react"
import { Button } from "./ui/button"
import { api } from "@/trpc/react"
import { toast } from "sonner"
import { scheduleSchema, ScheduleInput, ScheduleForm } from "@/app/schema/schedule"

interface Props {
  onClose: () => void
  scheduleToEdit?: ScheduleForm | null
}

export default function CalendarAdd({ onClose, scheduleToEdit }: Props) {
  // 초기 폼 상태를 props(scheduleToEdit)로 설정
  const [form, setForm] = useState<ScheduleForm>({
    id: scheduleToEdit?.id ?? "",
    title: scheduleToEdit?.title || "",
    startDate: scheduleToEdit?.startDate
      ? scheduleToEdit.startDate.toString().split("T")[0]
      : "",
    endDate: scheduleToEdit?.endDate
      ? scheduleToEdit.endDate.toString().split("T")[0]
      : "",
    color: scheduleToEdit?.color || "bg-blue-200",
    isBooked: false,
  })

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({})

  const createSchedule = api.schedule.create.useMutation({
    onSuccess: () => {
      alert("일정을 등록했습니다.")
      onClose()
    },
    onError: (err) => {
      toast.error("등록 실패: " + err.message)
    }
  })
  
  const updateSchedule = api.schedule.update.useMutation({
    onSuccess: () => {
      alert("일정을 수정했습니다.")
      onClose()
    },
    onError: (err) => {
      toast.error("등록 실패: " + err.message)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setForm(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = scheduleSchema.safeParse({
      ...form,
      startDate: new Date(form.startDate),
      endDate: new Date(form.endDate),
    })

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {}
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    if(!scheduleToEdit){
      createSchedule.mutate(result.data)
    } else {
      updateSchedule.mutate(result.data)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white w-[500px] h-[600px] rounded-xl shadow-lg p-6 relative">
        <div className="absolute top-4 right-4">
          <Button size="sm" variant="outline" onClick={onClose}>닫기</Button>
        </div>

        <h3 className="text-lg font-bold mb-4 mt-8">📅 일정 등록</h3>

        <div className="h-full overflow-y-auto space-y-4 px-1">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">제목</label>
            <input
              id="title"
              type="text"
              className="w-full border rounded-md p-2 text-sm"
              placeholder="예: 오픈워터 코스"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium mb-1">시작 날짜</label>
            <input
              id="startDate"
              type="date"
              className="w-full border rounded-md p-2 text-sm"
              value={form.startDate}
              onChange={handleChange}
            />
            {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium mb-1">끝나는 날짜</label>
            <input
              id="endDate"
              type="date"
              className="w-full border rounded-md p-2 text-sm"
              value={form.endDate}
              onChange={handleChange}
            />
            {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium mb-1">색상</label>
            <select
              id="color"
              className="w-full border rounded-md p-2 text-sm"
              value={form.color}
              onChange={handleChange}
            >
              <option value="bg-blue-200">파랑</option>
              <option value="bg-green-200">초록</option>
              <option value="bg-yellow-200">노랑</option>
              <option value="bg-pink-200">핑크</option>
              <option value="bg-purple-200">보라</option>
            </select>
            {errors.color && <p className="text-red-500 text-xs mt-1">{errors.color}</p>}
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex space-x-2">
          <Button
            type="submit"
            size="sm"
            className="bg-blue-600 text-white"
            disabled={createSchedule.status === "pending"}
          >
            {createSchedule.status === "pending" ? "등록 중..." : scheduleToEdit ? "변경" : "등록"}
          </Button>
        </div>
      </form>
    </div>
  )
}
