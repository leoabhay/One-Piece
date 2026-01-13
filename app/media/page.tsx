"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { animeEpisodes, movies, musicTracks } from "@/lib/one-piece-data"
import { MusicPlayer } from "@/components/music-player"

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"episodes" | "movies" | "music">("episodes")
  const [musicFilter, setMusicFilter] = useState<"all" | "opening" | "ending" | "insert-song" | "soundtrack">("all")

  const filteredMusic = musicFilter === "all" ? musicTracks : musicTracks.filter((track) => track.type === musicFilter)

  return (
    <main className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Media Center</h1>
        <p className="text-xl text-gray-600 mb-12">Anime episodes, movies, music, and more</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 border-b-2 border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("episodes")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "episodes"
                ? "border-orange-600 text-orange-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Episodes
          </button>
          <button
            onClick={() => setActiveTab("movies")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "movies"
                ? "border-orange-600 text-orange-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Movies
          </button>
          <button
            onClick={() => setActiveTab("music")}
            className={`px-6 py-3 font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "music"
                ? "border-orange-600 text-orange-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Music & Themes
          </button>
        </div>

        {/* Episodes Tab */}
        {activeTab === "episodes" && (
          <div className="space-y-4">
            {animeEpisodes.map((episode) => (
              <Card key={episode.id} className="p-6 hover:shadow-lg transition-all border-l-4 border-orange-600">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <Badge className="bg-blue-600 mb-2">Episode {episode.number}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900">{episode.title}</h3>
                  </div>
                  <span className="text-gray-600">{episode.releaseDate}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Arc:</span> {episode.arc}
                  </p>
                  <p className="text-gray-700">{episode.description}</p>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Movies Tab */}
        {activeTab === "movies" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="overflow-hidden hover:shadow-xl transition-all border-2 hover:border-orange-400"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge className="bg-purple-600 mb-3">Movie {movie.year}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{movie.title}</h3>
                  <p className="text-gray-700 mb-4">{movie.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Box Office</p>
                    <p className="text-lg font-bold text-orange-600">{movie.boxOffice}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Music & Themes Tab */}
        {activeTab === "music" && (
          <div>
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setMusicFilter("all")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  musicFilter === "all" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setMusicFilter("opening")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  musicFilter === "opening" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Opening Themes
              </button>
              <button
                onClick={() => setMusicFilter("ending")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  musicFilter === "ending" ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Ending Themes
              </button>
              <button
                onClick={() => setMusicFilter("insert-song")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  musicFilter === "insert-song"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Insert Songs
              </button>
              <button
                onClick={() => setMusicFilter("soundtrack")}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  musicFilter === "soundtrack"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Soundtracks
              </button>
            </div>

            {/* Music Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredMusic.map((track) => (
                <MusicPlayer key={track.id} track={track} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
