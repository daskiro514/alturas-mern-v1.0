import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { setCurrentPage } from '../../actions/admin'

const AdminSidebar = ({ logout, setCurrentPage, currentPage }) => {
  return (
    <div className='col-lg-2 col-md-4 sidebar'>
      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 py-4 total-balance'>
          <div className="font-weight-bold text-left">Account Balance</div>
          <div className="h2 font-weight-bold text-left">$221,931</div>
        </div>
      </div>

      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 pt-4'>
          <div className="h6 font-weight-bold text-left">INVESTMENT</div>
          <div className="h4 font-weight-bold text-left">$207,785</div>
        </div>
      </div>
      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 pt-4'>
          <div className="h6 font-weight-bold text-left">INVESTMENT</div>
          <div className="h4 font-weight-bold text-left">$207,785</div>
        </div>
      </div>
      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 py-4'>
          <div className="h6 font-weight-bold text-left">INVESTMENT</div>
          <div className="h4 font-weight-bold text-left">$207,785</div>
        </div>
      </div>

      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 py-4 total-balance'>
          <div className="h6 font-weight-bold text-left">Fund Balance</div>
          <div className="h2 font-weight-bold text-left">$5,873,164</div>
        </div>
      </div>
      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 pt-4'>
          <div className="h6 font-weight-bold text-left">INVESTMENT</div>
          <div className="h4 font-weight-bold text-left">$207,785</div>
        </div>
      </div>
      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 pt-4'>
          <div className="h6 font-weight-bold text-left">INVESTMENT</div>
          <div className="h4 font-weight-bold text-left">$207,785</div>
        </div>
      </div>
      <div className='row account-balance'>
        <div className='d-flex flex-column w-100 px-3 py-4'>
          <div className="font-weight-bold text-left">INVESTMENT</div>
          <div className="h4 font-weight-bold text-left">$207,785</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(AdminSidebar)
