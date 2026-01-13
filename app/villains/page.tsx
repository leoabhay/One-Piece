"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { villains } from "@/lib/one-piece-data"

const dangerColors = {
  low: "bg-green-600",
  medium: "bg-yellow-600",
  high: "bg-orange-600",
  extreme: "bg-red-600",
}

export default function VillainsPage() {
  const [selectedDanger, setSelectedDanger] = useState<"all" | "low" | "medium" | "high" | "extreme">("all")

  const filteredVillains = selectedDanger === "all" ? villains : villains.filter((v) => v.danger === selectedDanger)

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Villains & Antagonists</h1>
        <p className="text-xl text-gray-600 mb-8">The greatest threats in the One Piece world</p>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedDanger("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedDanger === "all" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            All Villains
          </button>
          <button
            onClick={() => setSelectedDanger("extreme")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedDanger === "extreme" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            Extreme Threat
          </button>
          <button
            onClick={() => setSelectedDanger("high")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedDanger === "high" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            High Threat
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVillains.map((villain) => (
            <Card
              key={villain.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-red-400"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={villain.image || "/placeholder.svg"}
                  alt={villain.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{villain.name}</h3>
                    <p className="text-sm text-gray-600">{villain.alias}</p>
                  </div>
                  <Badge className={`${dangerColors[villain.danger]}`}>
                    {villain.danger.charAt(0).toUpperCase() + villain.danger.slice(1)}
                  </Badge>
                </div>

                <div className="space-y-3 text-sm mb-4">
                  <div>
                    <p className="font-semibold text-gray-700">Status</p>
                    <p className={villain.status === "alive" ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                      {villain.status === "alive" ? "Alive" : "Deceased"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Arc</p>
                    <p className="text-gray-600">{villain.arc}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Devil Fruit</p>
                    <p className="text-gray-600">{villain.devilFruit}</p>
                  </div>
                </div>

                {villain.powers.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 text-sm mb-2">Powers</p>
                    <div className="flex flex-wrap gap-2">
                      {villain.powers.slice(0, 3).map((power) => (
                        <Badge key={power} className="bg-red-600 text-xs">
                          {power}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-gray-700 text-sm line-clamp-3">{villain.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
