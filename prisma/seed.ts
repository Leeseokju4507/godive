import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create sample courses
  const beginnerCourse = await prisma.course.create({
    data: {
      title: "Open Water Diver",
      titleKo: "오픈워터 다이버",
      description:
        "PADI 오픈워터 다이버 자격증 취득 과정입니다. 수영장 교육과 바다 실습을 통해 안전한 다이빙의 기초를 배웁니다.",
      price: 450000,
      duration: 20,
      maxStudents: 6,
      level: "BEGINNER",
      category: "COURSE",
      imageUrl: "/scuba-diving-training-pool.jpg",
    },
  })

  const advancedCourse = await prisma.course.create({
    data: {
      title: "Advanced Open Water",
      titleKo: "어드밴스드 오픈워터",
      description: "PADI 어드밴스드 오픈워터 자격증 과정으로 더 깊고 다양한 다이빙 환경을 경험할 수 있습니다.",
      price: 380000,
      duration: 16,
      maxStudents: 4,
      level: "INTERMEDIATE",
      category: "COURSE",
      imageUrl: "/advanced-scuba-diving-underwater.jpg",
    },
  })

  // Create sample schedules
  const today = new Date()
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  const nextMonth = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)

  await prisma.courseSchedule.createMany({
    data: [
      {
        courseId: beginnerCourse.id,
        startDate: nextWeek,
        endDate: new Date(nextWeek.getTime() + 3 * 24 * 60 * 60 * 1000),
      },
      {
        courseId: advancedCourse.id,
        startDate: nextMonth,
        endDate: new Date(nextMonth.getTime() + 2 * 24 * 60 * 60 * 1000),
      },
    ],
  })

  // Create sample FAQs
  await prisma.fAQ.createMany({
    data: [
      {
        question: "다이빙 자격증이 없어도 체험 다이빙이 가능한가요?",
        answer:
          "네, 가능합니다. 체험 다이빙은 자격증이 없는 분들도 안전하게 즐길 수 있도록 전문 강사가 1:1로 지도해드립니다.",
        category: "체험다이빙",
        order: 1,
      },
      {
        question: "수영을 못해도 다이빙을 배울 수 있나요?",
        answer:
          "기본적인 수영 실력이 필요하지만, 완벽하지 않아도 괜찮습니다. 수영장에서 충분한 연습 시간을 가진 후 바다로 나갑니다.",
        category: "교육과정",
        order: 2,
      },
    ],
  })

  console.log("Database seeded successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
