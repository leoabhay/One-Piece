import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { locations } from "@/lib/one-piece-data"

export default function LocationsPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Locations & Seas</h1>
        <p className="text-xl text-gray-600 mb-12">Explore the islands and seas of the One Piece world</p>

        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-400"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{location.name}</h3>
                    <p className="text-gray-600">{location.sea}</p>
                  </div>
                  <Badge className="bg-blue-600">{location.type === "island" ? "Island" : "Sea" }</Badge>
                </div>

                <p className="text-gray-700 mb-4">{location.description}</p>

                <div>
                  <p className="font-semibold text-gray-700 text-sm mb-2">Notable Facts</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {location.notableFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
