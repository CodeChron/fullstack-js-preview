import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { List } from '../lists/list'

export default createContainer(() => {

	const notes = Notes.find({}, { sort: { updatedAt: -1 }}).fetch()

	const handleCreateNote = (content) => {
		Notes.insert({ 
			content:content,
			updatedAt: new Date() 
		})
	}

  return {
  	handleSubmit: handleCreateNote,
	  placeholder: "New Note",
	  collection: notes
  }

}, List)
