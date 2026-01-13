"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Music } from "@/lib/one-piece-data"

interface MusicPlayerProps {
  track: Music
}

export function MusicPlayer({ track }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number.parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-all border-t-4 border-orange-600">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              className={
                track.type === "opening"
                  ? "bg-blue-600"
                  : track.type === "ending"
                    ? "bg-pink-600"
                    : track.type === "insert-song"
                      ? "bg-purple-600"
                      : "bg-green-600"
              }
            >
              {track.type === "opening"
                ? "Opening"
                : track.type === "ending"
                  ? "Ending"
                  : track.type === "insert-song"
                    ? "Insert Song"
                    : "Soundtrack"}
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{track.title}</h3>
        </div>
        <span className="text-gray-600 font-semibold text-sm">{track.year}</span>
      </div>

      <div className="space-y-2 mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Artist:</span> {track.artist}
        </p>
        {track.season && (
          <p className="text-gray-600">
            <span className="font-semibold">Season:</span> {track.season}
          </p>
        )}
        <p className="text-gray-600 mt-3">{track.description}</p>
      </div>

      <div className="mt-6 bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={togglePlayPause}
            className="flex-shrink-0 w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="flex-1">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-orange-600"
              aria-label="Music progress"
            />
          </div>

          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          crossOrigin="anonymous"
        >
          <source src={track.audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <p className="text-xs text-gray-600 mt-2">♪ Click play to enjoy the music •</p>
      </div>
    </Card>
  )
}
