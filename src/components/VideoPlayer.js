export default function VideoPlayer({ videoId }) {
	//5XDNHx2MQ40
	return (
		<iframe
			width={420}
			height={315}
			src={`https://www.youtube.com/embed/${videoId}`}
			className="rounded-xl"
			title="event"
		></iframe>
	);
}
