import { z } from "zod"

// form에서는 startDate/endDate를 string으로 사용
export const scheduleSchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(1, "제목을 입력해주세요.")
    .max(20, "제목은 20자 이하로 입력해주세요."),
  startDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date({
      required_error: "시작 날짜를 선택해주세요."
    })
  ),
  endDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z.date({
      required_error: "끝나는 날짜를 선택해주세요."
    })
  ),
  color: z.string().min(1, "색상을 선택해주세요."),
  isBooked: z.boolean().optional().default(false),
})
.superRefine(({ startDate, endDate }, ctx) => {
  if (startDate && endDate && endDate < startDate) {
    ctx.addIssue({
      path: ["endDate"],
      message: "끝나는 날짜는 시작 날짜보다 늦을 수 없습니다.",
      code: "custom",
    })
  }
})

export type ScheduleForm = {
  id: string
  title: string
  startDate: string
  endDate: string
  color: string
  isBooked?: boolean
}

export type ScheduleInput = z.infer<typeof scheduleSchema>
