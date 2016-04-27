import React from 'react'
import { AppHeaderLayout } from './app_header_layout'
import NotesContainer from '../containers/notes_container'

export const AppLayout = () =>
  <div id="app-container">
    <AppHeaderLayout />
    <div id="main-content">
      <NotesContainer />
    </div>
  </div>