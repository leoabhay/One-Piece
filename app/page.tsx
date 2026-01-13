import Link from "next/link"
import { Card } from "@/components/ui/card"
import { characters, villains, locations, openings, movies } from "@/lib/one-piece-data"

const sections = [
  {
    title: "Characters",
    href: "/characters",
    description: "Meet the Straw Hat Pirates and their allies",
    count: characters.length,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Locations",
    href: "/locations",
    description: "Explore the world of One Piece",
    count: locations.length,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Villains",
    href: "/villains",
    description: "The greatest antagonists",
    count: villains.length,
    color: "from-red-500 to-red-600",
  },
  {
    title: "Media",
    href: "/media",
    description: "Anime, movies, and music",
    count: openings.length + movies.length,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Pirates",
    href: "/pirates",
    description: "Pirate crews and captains",
    count: "Featured",
    color: "from-orange-500 to-orange-600",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pretty">Welcome to the One Piece World</h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-50">
            Your ultimate encyclopedia for everything One Piece - Characters, Locations, Episodes, and More
          </p>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Become King of the Pirates with complete information on your favorite characters, powerful villains, and
            unforgettable adventures across the Seven Seas.
          </p>
        </div>
      </section>

      {/* Featured Character */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Character</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-400">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="flex items-center justify-center">
                <img src="/luffy.jpg" alt="Luffy" className="rounded-lg w-full max-w-sm" />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div>
                  <p className="text-orange-600 font-bold text-sm mb-2">FEATURED CHARACTER</p>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">Monkey D. Luffy</h3>
                  <p className="text-gray-600">Captain of the Straw Hat Pirates</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Bounty</p>
                    <p className="text-2xl font-bold text-orange-600">3,000,000,000+</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Devil Fruit</p>
                    <p className="text-lg font-semibold">Gomu Gomu no Mi (Human-Human Fruit)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Dream</p>
                    <p className="text-lg font-semibold">To become King of the Pirates</p>
                  </div>
                </div>
                <Link
                  href="/characters"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors w-full text-center"
                >
                  View All Characters
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Explore the World</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-orange-400">
                  <div className={`bg-gradient-to-br ${section.color} text-white p-6 rounded-t-lg`}>
                    <h3 className="text-2xl font-bold">{section.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="text-3xl font-bold text-orange-600">
                      {typeof section.count === "number" ? `${section.count}+` : section.count}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">One Piece Legacy</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">25+</p>
              <p className="text-orange-100">Years Running</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">1050+</p>
              <p className="text-orange-100">Episodes</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-orange-100">Movies</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">Millions</p>
              <p className="text-orange-100">Fans Worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
