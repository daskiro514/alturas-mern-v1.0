import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import CustomerHeader from './CustomerHeader'
import CustomerSidebar from './CustomerSidebar'
import CustomerDashboard from './CustomerDashboard'

const Customer = ({ setAlert, getMessages, getAdminUnreadMessages }) => {
  React.useEffect(() => {
  }, [])

  return (
    <div className='container-fluid'>
      <CustomerHeader />
      <div className='row'>
        <CustomerSidebar />
        <div className='col-lg-10 col-md-8 py-4'>
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={CustomerDashboard} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {  })(Customer)