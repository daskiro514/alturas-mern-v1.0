import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts'

import { getAdminChartOptions, getAdminChartSeries } from '../../utils/adminChart'

const CustomerDashboard = ({ getAdminClients, clients, goPage }) => {
  // React.useEffect(() => {
		// getAdminClients()
  // }, [getAdminClients])

  return (
  	<div className='admin-dashboard'>
  		<div className='row'>
				<div className='col-lg-9'>
					<div className='bg-white m-1 shadow p-3 bg-white rounded-lg mixed-chart'>
						<h2 className='ml-3 mb-0 font-weight-bold' style={{color: '#1B2559'}}>$5,873,164 {/*${ getTotalSales([]).toFixed(2)}*/}</h2>
						<p className='ml-3 text-secondary mb-0'>Monthly Profit</p>
						<Chart
	            options={getAdminChartOptions()}
	            series={getAdminChartSeries([])}
	            type='area'
	            height='300px'
	            width='100%'
	          />
					</div>
				</div>
				<div className='col-lg-3'>
					<div className='bg-white m-1 shadow p-3 rounded-lg bg-white mixed-chart'>
						<p className='ml-3 text-secondary mb-0'>Monthly Profit</p>
						<h2 className='ml-3 font-weight-bold mb-0' style={{color: '#1B2559'}}>$137,486.53 {/*$ {getTotalSales(clients).toFixed(2)}*/}</h2>
						<Chart
	            options={getAdminChartOptions()}
	            series={getAdminChartSeries([])}
	            type='bar'
	            height='300px'
	            width='100%'
	          />
					</div>
				</div>
				<div className='col-lg-12'>
					<div className='m-1 p-3 row shadow bg-white rounded-lg'>
						<div className='col-lg-3'>
							<div className='bg-white m-1 mixed-chart'>
								<h3 className='mb-0 font-weight-bold' style={{color: '#1B2559'}}>Asset Allocation {/*$ {getTotalSales(clients).toFixed(2)}*/}</h3>
								<div className='table-responsive table-client-store'>
		              <table className='table table-borderless'>
		                <thead>
		                  <tr>
		                    <th className='min-width-3'></th>
		                    <th className='min-width-1 text-secondary'>Percentage</th>
		                    <th className='min-width-1 text-secondary'>Growth</th>
		                  </tr>
		                </thead>
		                <tbody>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>Stock</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>Bond</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>Cryptocurrencies</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>Indexes</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>Futures</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>Precious Metal</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
	                    <tr className='table-row-customer-store-statistics-round'>
	                      <td className='text-secondary'>REITs</td>
	                      <td>0.00%</td>
	                      <td>0.00%</td>
	                    </tr>
		                </tbody>
		              </table>
								</div>
							</div>
						</div>

						<div className='col-lg-9'>
							<div className='bg-white m-1 mixed-chart'>
								<div className='d-flex flex-row align-items-center'>
									<h3 className='mb-0 font-weight-bold' style={{color: '#1B2559'}}>Balance {/*$ {getTotalSales(clients).toFixed(2)}*/}</h3>
									<p className='ml-3 text-success mb-0'><i className='fa fa-check-circle'></i> In Profit</p>
								</div>
								<Chart
			            options={getAdminChartOptions()}
			            series={getAdminChartSeries([])}
			            type='area'
			            height='300px'
			            width='100%'
			          />
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

export default connect(mapStateToProps, {  })(CustomerDashboard)