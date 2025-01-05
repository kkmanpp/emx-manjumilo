"use client";

export default function VideoPlayer({ videoUrl }) {
  return (
    <iframe
      src={videoUrl}
      className="rounded-xl w-full aspect-video laptop:aspect-[16/9]"
      title="event-video"
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
}
