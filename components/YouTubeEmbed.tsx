"use client";

import { useState } from "react";
import type { Video } from "@/lib/data";

export default function YouTubeEmbed({ video }: { video: Video }) {
  const [ativo, setAtivo] = useState(false);

  return (
    <figure className="overflow-hidden rounded-lg border border-gray-200">
      <div className="relative aspect-video bg-black">
        {ativo ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setAtivo(true)}
            aria-label={`Reproduzir vídeo: ${video.titulo}`}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-20 items-center justify-center rounded-xl bg-black/70 transition group-hover:bg-red-600">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-col gap-0.5 px-4 py-3">
        <span className="text-sm font-medium text-gray-800">{video.titulo}</span>
        <span className="text-xs text-gray-500">
          {video.canal} ·{" "}
          <a
            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1351B4] underline-offset-2 hover:underline"
          >
            assistir no YouTube
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
