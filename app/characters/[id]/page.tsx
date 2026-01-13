import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { characters } from "@/lib/one-piece-data"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function CharacterDetailPage({ params }: PageProps) {
  const { id } = await params
  const character = characters.find((c) => c.id === id)

  if (!character) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/characters" className="text-orange-600 font-semibold mb-8 inline-block hover:underline">
          ← Back to Characters
        </Link>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-orange-400">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <img
                src={character.image || "/placeholder.svg"}
                alt={character.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div>
              <div className="mb-6">
                <p className="text-orange-600 font-bold text-sm mb-2">CHARACTER PROFILE</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{character.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{character.alias}</p>
                <Badge
                  className={
                    character.status === "alive" ? "bg-green-600 text-lg px-4 py-1" : "bg-red-600 text-lg px-4 py-1"
                  }
                >
                  {character.status === "alive" ? "Alive" : "Deceased"}
                </Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">AGE</p>
                  <p className="text-lg font-semibold text-gray-900">{character.age} years old</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">BOUNTY</p>
                  <p className="text-2xl font-bold text-orange-600">{character.bounty}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">OCCUPATION</p>
                  <p className="text-lg font-semibold text-gray-900">{character.occupation}</p>
                </div>

                {character.crew && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">CREW</p>
                    <p className="text-lg font-semibold text-gray-900">{character.crew}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">DEVIL FRUIT</p>
                  <p className="text-lg font-semibold text-gray-900">{character.devilFruit}</p>
                </div>

                {character.haki.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">HAKI ABILITIES</p>
                    <div className="flex flex-wrap gap-2">
                      {character.haki.map((h) => (
                        <Badge key={h} className="bg-purple-600">
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-orange-400 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{character.description}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
