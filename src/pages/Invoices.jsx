import PageHeader from '../components/layout/PageHeader'
import { invoiceData } from '../data/users'

function Invoices() {
  return (
    <div className="page-stack">
      <PageHeader
        title="Invoices"
        subtitle="Issued invoices and payment tracking"
        actions={<button type="button" className="secondary-button">View Invoice</button>}
      />

      <div className="panel">
        <div className="toolbar row-gap">
          <div className="search-box">
            <span>⌕</span>
            <input type="text" placeholder="Search invoice" aria-label="Search invoice" />
          </div>
          <select aria-label="Filter invoice status">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Guest</th>
                <th>Room</th>
                <th>Amount</th>
                <th>Issued Date</th>
                <th>Payment Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.id}</td>
                  <td>{invoice.guest}</td>
                  <td>{invoice.room}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.issuedDate}</td>
                  <td>
                    <span className={`status-badge ${invoice.paymentStatus.toLowerCase().replace(/\s+/g, '-')}`}>{invoice.paymentStatus}</span>
                  </td>
                  <td>
                    <button type="button" className="secondary-button">View</button>
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

export default Invoices
