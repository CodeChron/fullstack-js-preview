import React from 'react'
import { AppHeaderLayout } from './app_header_layout'

export const AppLayout = () =>
  <div id="app-container" className="container">
    <AppHeaderLayout />
    <div id="main-content">
      React placeholder
    </div>
  </div>