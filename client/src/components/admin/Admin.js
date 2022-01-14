import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import PrivateRoute from '../routing/PrivateRoute'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminClient from './AdminClient'
// import { setAlert } from '../../actions/alert'

const Admin = ({ setAlert, getMessages, getAdminUnreadMessages }) => {
  React.useEffect(() => {
  }, [])

  return (
    <div className='container-fluid'>
      <AdminHeader />
      <div className='row'>
        <AdminSidebar />
        <div className='col-lg-10 col-md-8 py-4'>
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={AdminDashboard} />
            <PrivateRoute exact path="/clients" component={AdminClient} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {  })(Admin)