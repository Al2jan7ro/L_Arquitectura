import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function BusinessHours() {
  const schedule = [
    { day: "Lunes - Viernes", hours: "8:00 - 18:00", isOpen: true },
    { day: "Sábado", hours: "9:00 - 18:00", isOpen: true },
    { day: "Domingo", hours: "Cerrado", isOpen: false },
  ]

  return (
    <section className="w-full bg-white py-16 px-4 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-sm uppercase tracking-widest text-black/60">Horario de Atención</h2>
          <h3 className="text-balance text-4xl font-bold text-black md:text-6xl lg:text-7xl">Estamos aquí para ti</h3>
        </div>

        <Card className="overflow-hidden border border-black/10 bg-white shadow-lg">
          <div className="divide-y divide-black/10">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-6 transition-colors hover:bg-black/5 md:px-12 md:py-8 ${
                  !item.isOpen ? "bg-black/5" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-black md:text-2xl">{item.day}</span>
                </div>
                <span className={`text-lg font-bold md:text-2xl ${item.isOpen ? "text-black" : "text-black/40"}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-black/60 md:text-base">Horario sujeto a cambios en días festivos</p>
        </div>
      </div>
    </section>
  )
}
