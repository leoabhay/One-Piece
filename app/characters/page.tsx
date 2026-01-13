"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { characters } from "@/lib/one-piece-data"

export default function CharactersPage() {
  const [selectedStatus, setSelectedStatus] = useState<"all" | "alive" | "dead">("all")

  const filteredCharacters =
    selectedStatus === "all" ? characters : characters.filter((c) => c.status === selectedStatus)

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Characters</h1>
        <p className="text-xl text-gray-600 mb-8">Meet the heroes and allies of the One Piece world</p>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setSelectedStatus("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedStatus === "all" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            All Characters
          </button>
          <button
            onClick={() => setSelectedStatus("alive")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedStatus === "alive" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            Alive
          </button>
          <button
            onClick={() => setSelectedStatus("dead")}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              selectedStatus === "dead" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            Deceased
          </button>
        </div>

        {/* Characters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((character) => (
            <Card
              key={character.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-400"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={character.image || "/placeholder.svg"}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{character.name}</h3>
                    <p className="text-sm text-gray-600">{character.alias}</p>
                  </div>
                  <Badge className={character.status === "alive" ? "bg-green-600" : "bg-red-600"}>
                    {character.status === "alive" ? "Alive" : "Deceased"}
                  </Badge>
                </div>

                <div className="space-y-3 text-sm mb-4">
                  <div>
                    <p className="font-semibold text-gray-700">Bounty</p>
                    <p className="text-orange-600 font-bold">{character.bounty}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Occupation</p>
                    <p className="text-gray-600">{character.occupation}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Devil Fruit</p>
                    <p className="text-gray-600">{character.devilFruit}</p>
                  </div>
                  {character.crew && (
                    <div>
                      <p className="font-semibold text-gray-700">Crew</p>
                      <p className="text-gray-600">{character.crew}</p>
                    </div>
                  )}
                </div>

                {character.haki.length > 0 && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 text-sm mb-2">Haki Types</p>
                    <div className="flex flex-wrap gap-2">
                      {character.haki.map((h) => (
                        <Badge key={h} className="bg-purple-600">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{character.description}</p>

                <Link
                  href={`/characters/${character.id}`}
                  className="inline-block w-full text-center bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
