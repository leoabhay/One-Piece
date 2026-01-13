import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { pirateCrew } from "@/lib/one-piece-data"

export default function PiratesPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Pirate Crews</h1>
        <p className="text-xl text-gray-600 mb-12">The most famous pirate crews of the world</p>

        <div className="grid md:grid-cols-2 gap-6">
          {pirateCrew.map((crew) => (
            <Card
              key={crew.id}
              className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-orange-400"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img src={crew.image || "/placeholder.svg"} alt={crew.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{crew.name}</h3>
                    <p className="text-gray-600">
                      Led by <span className="font-semibold">{crew.captain}</span>
                    </p>
                  </div>
                  <Badge className={crew.status === "active" ? "bg-green-600" : "bg-gray-600"}>
                    {crew.status === "active" ? "Active" : "Disbanded"}
                  </Badge>
                </div>

                <div className="space-y-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Total Bounty</p>
                    <p className="text-2xl font-bold text-orange-600">{crew.bounty}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Members</p>
                    <div className="flex flex-wrap gap-2">
                      {crew.members.map((member) => (
                        <Badge key={member} className="bg-blue-600">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm">{crew.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
