import React from 'react'

export const AppHeaderLayout = (props) =>
  <div id="app-header">
	<div className="header-center">
      <h1 className="page-title">{props.pageTitle}</h1>
	</div>
  </div>

AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

AppHeaderLayout.defaultProps = { 
  pageTitle: "My Notes App"
}