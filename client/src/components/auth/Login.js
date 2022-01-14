import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='container-fluid bg-admin'>
      <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='row height-center'>
                <div className='col' style={{ marginTop: 'calc(40% - 120px)' }}>
                  <div className='h1 text-center text-bold login-title' style={{ color: '#FFF' }}>ALTURAS GROUP</div>
                  <br />
                  <form className='form login-form' onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend position-absolute h-100" style={{ zIndex: 10 }}>
                        <div className="input-group-text">
                          <i className="fa fa-user" style={{ fontSize: '16px' }}></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control text-center"
                        id="inlineFormInputGroup"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                      />
                    </div>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend position-absolute h-100" style={{ zIndex: 10 }}>
                        <div className="input-group-text">
                          <i className="material-icons" style={{ fontSize: '16px' }}>lock_outline</i>
                        </div>
                      </div>
                      <input
                        type="password"
                        className="form-control text-center"
                        id="inlineFormInputGroup"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength='6'
                      />
                    </div>
                    <div className='form-group d-flex flex-row justify-content-between'>
                      <Link
                        to='/login'
                        style={{ color: 'white' }}
                      >
                        Register
                      </Link>
                      <Link
                        to='/login'
                        style={{ color: 'white' }}
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className='form-group d-flex flex-row justify-content-around'>
                      <input type='submit' value='Enter' className="btn form-control btn-fill py-2" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
