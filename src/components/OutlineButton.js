export default function OutlineButton({ label, disabled = false, onClick }) {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className="bg-White cursor-pointer text-Green-700 rounded-md p-2 "
		>
			{label}
		</button>
	);
}
