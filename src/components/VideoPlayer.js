export default function VideoPlayer({ videoId }) {
	//5XDNHx2MQ40
	return (
		<iframe
			width={320}
			height={215}
			src={`https://www.youtube.com/embed/${videoId}`}
			className="rounded-xl"
			title="event"
		></iframe>
	);
}
