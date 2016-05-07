import { createContainer } from 'meteor/react-meteor-data'
import { Notes } from '../../api/notes/notes'
import { List } from '../lists/list'
import { Table } from '../tables/table'

//Here, we create a new function that returns the container with the layout we passed in
const noteContainer = (layout) => createContainer(() => {

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
	  deleteItem: true
  }
}, layout)

const NotesList    = noteContainer(List)
const NotesTable   = noteContainer(Table)

export { NotesList, NotesTable }

