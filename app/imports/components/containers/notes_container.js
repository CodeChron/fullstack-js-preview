import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { List } from '../lists/list'

// This can only be used for a single layout, the one pass in as the second argument.  What if we want to use the same container methods for multiple
export default createContainer(() => {

	const notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()
	
	const handleCreateNote = (content) => {
		Notes.insert({ 
			content:content,
			updatedAt: new Date() 
		})
	}

	const handleDelete = (note) => {
		Notes.remove({_id: note._id})
	}

  return {
  	handleSubmit: handleCreateNote,
	  placeholder: "New Note",
	  collection: notes,
	  handleDelete: handleDelete,
	  addItem: false,
	  deleteItem: false
  }

}, List)
