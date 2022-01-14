import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setCurrentPage } from '../../actions/admin'
import { logout } from '../../actions/auth'
import bell from '../../img/common/bell.png'

const AdminHeader = ({ currentPage, setCurrentPage, logout }) => {
  const history = useHistory()

  React.useEffect(() => {
  }, [])

  const goPage = async location => {
    setCurrentPage(location)
    await history.push(`/`)
    await history.push(`/dashboard`)

    if (location === 'dashboard') {
      await history.push(`/dashboard/`)
      return
    }
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='row admin-header align-items-center'>
      <div className='col-lg-2 col-md-4'>
        <div className='d-flex flex-row'>
          <div className='logo'>ALTURAS GROUP</div>
        </div>
      </div>
      <div className='col-lg-10 col-md-8'>
        <div className='d-flex flex-row justify-content-between'>
          <div className='d-flex align-items-center'>
            <div className={'d-flex align-items-center cursor-pointer mr-4 ' + (currentPage === 'dashboard' ? 'border-bottom' : '' )} onClick={() => {
              goPage('dashboard')
            }}>
              <div className='d-flex align-items-center'><i className='fa fa-database mr-2 h6'></i></div>
              <div className='d-flex align-items-center'>Overview</div>
            </div>
            <div className={'d-flex align-items-center cursor-pointer mr-4 ' + (currentPage === 'clients' ? 'border-bottom' : '' )} onClick={() => {
              goPage('clients')
            }}>
              <div><i className='fa fa-user mr-2' style={{fontSize: '16px'}}></i></div>
              <div>Clients</div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className='d-flex align-items-center'>
              <i className='fa fa-sign-out mr-2 cursor-pointer' onClick={() => {
                setCurrentPage('dashboard')
                logout()
              }}></i>
            </div>
            <div className='d-flex align-items-center'>
              <i className="material-icons mr-2">settings</i>
            </div>
            <div className='d-flex align-items-center'>
              <img src={bell} className='cursor-pointer dropdown-toggle' data-toggle="dropdown" alt='BELL' height='20px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(AdminHeader)