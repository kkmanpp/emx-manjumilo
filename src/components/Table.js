export default function Table({ title, name, value }) {
	return (
		<table className="w-full border-collapse">
			<thead>
				<tr>
					<th
						className="border border-Grey-200 text-left bg-Grey-300 px-2"
						colSpan="2"
					>
						{title}
					</th>
				</tr>
			</thead>
			<tbody>
				{name.map((item, index) => {
					return (
						<tr className="bg-white even:bg-Green-50" key={index}>
							<td className="border border-Grey-200 px-2">{item}</td>
							<td className="border border-Grey-200 px-2">{value[index]}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
