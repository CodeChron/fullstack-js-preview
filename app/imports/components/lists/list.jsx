import React from 'react'
import { DeleteBtn } from '../buttons/delete_btn'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export const List = (props) =>{

	const handleDelete = (item) => {
		const confirmDelete = confirm("Really delete this?")

 	  if (confirmDelete) {
 	  	props.handleDelete(item)
 	  }
	}

 const optionalFeatures = {
  	addItem: () => <li className="list-group-item"><SingleFieldSubmit {...props} /></li>,
  	deleteItem: (args) => <span className="pull-right"><DeleteBtn itemToDelete={args} {...props}/></span>
	}

	const displayOptionalFeature = (shouldDisplay, feature, args ) => {
	  return shouldDisplay? feature(args) : null
	}
	
	return <ul className="list-group">
	    {displayOptionalFeature(props.addItem, optionalFeatures.addItem)}
	    { 
	    	props.collection.map((item) => {
	 	      return <li key={item._id} className="list-group-item">{item.content} 
        {displayOptionalFeature(props.deleteItem, optionalFeatures.deleteItem, item)}
	 	      </li>
	      })
	    }
  </ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired,
	addItem: React.PropTypes.bool,
	deleteItem:  React.PropTypes.bool,
}
List.defaultProps = {
	addItem: false,
	deleteItem: false
}
