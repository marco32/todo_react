import React from 'react';


const Filterlist = ({onChangel, lists, list}) => (
	
	<select onChange={(e) => { onChangel(e.target.value )}}                    >
	
	{
		lists.map(item =>(
			<option 
			key={item.id}
			value={item.content}
			>{item.content}</option>
			)
			)}
			</select>
			
			)

		
		export default Filterlist;