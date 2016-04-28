import React from 'react'
import { Btn } from '../buttons/btn'
import { SingleFieldSubmit } from '../forms/single_field_submit'

export const List = (props) =>{

	const handleDelete = (item) => {
		const confirmDelete = confirm("Really delete this?")

 	  if (confirmDelete) {
 	  	props.handleDelete(item)
 	  }
	}

	const displayFeature = (shouldDisplay, feature, args ) => {
	  return shouldDisplay? feature(args) : null
	}

 const listFeatures = {
  	addItem: () => <li><SingleFieldSubmit {...props} /></li>,
  	deleteItem: (args) => <Btn label={"x"}  handleClick={()=> handleDelete(args)} />
	}
	
	return <ul>
	    {displayFeature(props.addItem, listFeatures.addItem)}
	    { 
	    	props.collection.map((item) => {
	 	      return <li key={item._id}>{item.content} {displayFeature(props.deleteItem, listFeatures.deleteItem, item)}
	 	      </li>

	      })
	    }
  </ul>
}

List.propTypes = {
	collection: React.PropTypes.array.isRequired,
	addItem: React.PropTypes.bool,
	deleteItem:  React.PropTypes.bool
}
List.defaultProps = {
	addItem: false,
	deleteItem: false
}
