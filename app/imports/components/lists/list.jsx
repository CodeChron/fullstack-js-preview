import React from 'react'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export const List = (props) =>{

	return <ul className="list-group">
	    <li className="list-group-item"><SingleFieldSubmit {...props} /></li>
	    { 
	    	props.collection.map((item) => {
	 	      return <li key={item._id} className="list-group-item">{item.content}</li>
	      })
	    }
  </ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired
}