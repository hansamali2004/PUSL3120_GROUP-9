import PageHeader from '../components/layout/PageHeader'
import { paymentData } from '../data/users'

function Payments() {
  return (
    <div className="page-stack">
      <PageHeader title="Payments" subtitle="Recent transactions and settlement status" />

      <div className="panel">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Guest</th>
                <th>Invoice</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>{payment.guest}</td>
                  <td>{payment.invoice}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.method}</td>
                  <td>{payment.date}</td>
                  <td>
                    <span className={`status-badge ${payment.status.toLowerCase().replace(/\s+/g, '-')}`}>{payment.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Payments
