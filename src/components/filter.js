import React from 'react';

const Filter = ({onChangef}) => (
	<select onChange={(e) => { onChangef(e.target.value)}}                    >
	<option value="all"> Toutes les taches </option>
	<option value="true"> Taches réalisé </option>
	<option value="false"> Taches a réalisé </option>
	</select>
	)

export default Filter;