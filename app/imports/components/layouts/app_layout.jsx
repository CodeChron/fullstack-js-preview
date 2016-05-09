import React from 'react'
import { AppHeaderLayout } from './app_header_layout'
import NotesContainer from '../containers/notes_container'

export const AppLayout = () =>
  <div id="app-container">
    <AppHeaderLayout />
    <div id="main-content" className="container">
      <NotesContainer />
    </div>
  </div>


//The container model wraps a data handler around a component, conceptually the same as:

// <NotesContainer>
//   <SingleFieldSubmit handleSubmit={props.handleCreateNote} placeholder={"New Note"} />
// </NotesContainer>
