export default function LinkButton({ label, disabled = false, onClick }) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className="bg-White cursor-pointer text-Green-700 rounded-md p-2"
		>
			<div className="underline underline-offset-1">{label}</div>
		</button>
	);
}
