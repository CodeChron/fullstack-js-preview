import React from 'react'
import { IconBtn } from '../buttons/icon_btn'
import { DeleteBtn } from '../buttons/delete_btn'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export const List = (props) =>{

	const handleDelete = (item) => {
		const confirmDelete = confirm("Really delete this?")

 	  if (confirmDelete) {
 	  	props.handleDelete(item)
 	  }
	}

	return <ul className="list-group">
	    <li className="list-group-item"><SingleFieldSubmit {...props} /></li>
	    { 
	    	props.collection.map((item) => {
	 	      return <li key={item._id} className="list-group-item">{item.content} <span className="pull-right"><DeleteBtn itemToDelete={item} {...props} /></span></li>
	      })
	    }
  </ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired
}