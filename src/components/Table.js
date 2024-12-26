export default function Table({ title, key, value, lang }) {
	return (
		<table>
			<tr>
				<th>{title}</th>
			</tr>
			{key.map((item, index) => {
				return (
					<tr>
						<td>{item[lang]}</td>
						<td>{value[index][lang]}</td>
					</tr>
				);
			})}
		</table>
	);
}
