import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { register } from '../../actions/auth'
import { Link, Redirect } from 'react-router-dom'
import logoImage from '../../img/common/logo.png'
import Spinner from '../layout/Spinner'

const Register = ({ register, isAuthenticated }) => {
  const history = useHistory()
  const [isUploading, setIsUploading] = React.useState(false)

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    setIsUploading(true)
    register(formData, history)
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='container-fluid bg-Client bg-admin'>
      <div className='row'>
        <div className='col-lg-2 p-2 sidebar'>
          <div className='container-fluid'>
            <img className='img-fluid rounded mt-4' src={logoImage} alt='logo' />
            <div className='row mx-1 pt-4 h5'>
              Menu
            </div>
            <div className='row mx-1 h5 menuItem'>
              <div className='d-flex align-items-center'>
                <i className='fa fa-database pt-2 mr-2 h6'></i>
                <span>
                  <Link to='/register'>Registration</Link>
                </span>
              </div>
            </div>
            <div className='row mx-1 h5 menuItem signoutLink'>
              <div className='d-flex align-items-center'>
                <i className='fa fa-sign-out pt-2 mr-2 h6'></i>
                <span>
                  <Link to='/'>Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-10 col-md-8 p-3'>
          <div className='admin-header d-flex flex-row-reverse align-items-center pr-3'>
            <i className='fa fa-github-alt ml-2'></i>
            <i className='fa fa-bell ml-2'></i>
            <i className='fa fa-question-circle ml-2'></i>
            <div className='mr-1'>
              Feedback?
            </div>
          </div>
          <div className='admin-new-clients'>
            <div className='h4 py-2'>
              Registration
            </div>
            <div className='bg-white rounded-lg p-3'>
              {isUploading
                ?
                <Spinner />
                :
                <form className='form' onSubmit={onSubmit}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label>Name</label>
                        <input
                          type='text'
                          className='form-control'
                          name='name'
                          value={name}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label>Email</label>
                        <input
                          type='email'
                          className='form-control'
                          name='email'
                          value={email}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          type='password'
                          className='form-control'
                          name='password'
                          value={password}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group pt-3'>
                    <input
                      type='submit'
                      className='form-control'
                      style={{ backgroundColor: '#A78BE2' }}
                      value='Submit'
                    />
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register)