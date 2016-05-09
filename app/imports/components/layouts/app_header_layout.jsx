import React from 'react'

export const AppHeaderLayout = (props) =>
<nav className="navbar navbar-default">
  <div className="container">
    <div className="navbar-header">
      <h1 className="navbar-brand">{props.pageTitle}</h1>
    </div>
 </div>
</nav>


//This list the props accepted by this component and their type, which can work as a mini API
AppHeaderLayout.propTypes = {
  pageTitle: React.PropTypes.string
}

//Here, default values can be set for props that were not given a value when the component was invoked
AppHeaderLayout.defaultProps = { 
  pageTitle: "My Notes App"
}