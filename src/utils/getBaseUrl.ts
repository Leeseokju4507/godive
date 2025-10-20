export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // 브라우저 환경 → 상대경로 사용
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // Vercel 배포 환경
  return `http://localhost:${process.env.PORT ?? 3000}`; // 로컬 개발 환경
}