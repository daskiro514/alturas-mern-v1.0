import React from 'react'
import { connect } from 'react-redux'
// import Chart from 'react-apexcharts'
// import { getAdminChartOptions, getAdminChartSeries } from '../../utils/adminChart'

const AdminClient = ({ getAdminClients, clients, goPage }) => {

	let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

  return (
  	<div className='admin-dashboard'>
  		<div className='row'>
				<div className='col-lg-12'>
					<div className='m-1 shadow rounded-lg'>
						<div className='table-responsive table-client-store rounded-lg'>
							<table className='table table-borderless mb-0 text-center rounded-lg'>
                <thead className='altrus-bg-1 py-1 font-18 text-white'>
	                <tr>
                    <th>Name</th>
                    <th>Investment</th>
                    <th>Growth</th>
                    <th>Return</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody className='font-14'>
                	{
                		arr.map(i => (
                			<tr key={i}>
		                    <th>Lance Johnson</th>
		                    <th>$103,574.83</th>
		                    <th>11.87%</th>
		                    <th>$12,294.33</th>
		                    <th>$115,869.16</th>
		                  </tr>
                		))
                	}
                </tbody>
              </table>
              <div className='d-flex flex-row align-items-center altrus-bg-1 justify-content-around'>
              	<ul className="pagination d-flex flex-row align-items-center mb-0">
              		<li className="page-item mr-4 d-flex"><i className="material-icons" style={{fontSize: '36px'}}>chevron_left</i></li>
              		<li className="page-item font-18">1</li>
              		<li className="page-item ml-4 d-flex"><i className="material-icons" style={{fontSize: '36px'}}>chevron_right</i></li>
              	</ul>
              </div>
						</div>
					</div>
				</div>
  		</div>
  	</div>
  )
}

const mapStateToProps = state => ({
  // clients: state.admin.clients
})

export default connect(mapStateToProps, {  })(AdminClient)