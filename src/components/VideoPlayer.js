"use client";
import { useEffect, useState } from "react";

export default function VideoPlayer({ videoId }) {
	//5XDNHx2MQ40
	// const [isMobile, setIsMobile] = useState(false);
	let isMobile =
		Math.min(window.screen.width, window.screen.height) < 768 ||
		navigator.userAgent.indexOf("Mobi") > -1;

	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		let result =
	// 			Math.min(window.screen.width, window.screen.height) < 768 ||
	// 			navigator.userAgent.indexOf("Mobi") > -1;
	// 		console.log(result);
	// 		setIsMobile(result);
	// 	}
	// }, []);

	return (
		<iframe
			width={isMobile ? 370 : 420}
			height={isMobile ? 300 : 325}
			src={`https://www.youtube.com/embed/${videoId}`}
			className="rounded-xl"
			title="event-video"
			allowFullScreen
			loading="lazy"
		></iframe>
	);
}
