import React from 'react'

//import components we'll be using
import { AppHeaderLayout } from './app_header_layout'

//insert a component just as if it were an html element
export const AppLayout = () =>
  <div id="app-container">
    <AppHeaderLayout />
    <div id="main-content" className="container">
      React placeholder
    </div>
  </div>
