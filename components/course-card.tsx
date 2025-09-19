import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  capacity: string
  location: string
  price: string
  level: "초급" | "중급" | "고급"
  image: string
}

export function CourseCard({ title, description, duration, capacity, location, price, level, image }: CourseCardProps) {
  const levelColors = {
    초급: "bg-green-100 text-green-800",
    중급: "bg-yellow-100 text-yellow-800",
    고급: "bg-red-100 text-red-800",
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge className={levelColors[level]}>{level}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {capacity}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">{price}</span>
          <Button>신청하기</Button>
        </div>
      </CardContent>
    </Card>
  )
}
