import React from 'react'
import ReactDOM from 'react-dom'
import { AppLayout } from '/imports/components/layouts/app_layout'

Meteor.startup(() =>
	ReactDOM.render(<AppLayout />, document.getElementById("app"))
)