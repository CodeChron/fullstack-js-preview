//This is ES6/ES2015 syntax, which Meteor transpiles (using Babel) out of the box
import React from 'react'

export const AppLayout = () =>
  <div id="app-container">
    <div id="main-content" className="container">
      React placeholder
    </div>
  </div>


//The above would be the same as:
// var AppLayout = function() {
// 	return (
//     React.createElement('div', {id: "app-container"},
//       React.createElement('div', {id: "main-content", className:"container"}, "React Placeholder")
//     )
// 	)
// }

// export { AppLayout }