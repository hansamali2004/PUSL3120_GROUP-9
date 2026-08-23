import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import { paymentData } from '../data/users'

function Payments() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [methodFilter, setMethodFilter] = useState('All Methods')
  const [payments, setPayments] = useState(paymentData)

  const filteredPayments = useMemo(() => payments.filter((payment) => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = [payment.id, payment.guest, payment.invoice].some((value) => value.toLowerCase().includes(search))
    const matchesStatus = statusFilter === 'All Status' || payment.status === statusFilter
    const matchesMethod = methodFilter === 'All Methods' || payment.method === methodFilter
    return matchesSearch && matchesStatus && matchesMethod
  }), [methodFilter, payments, searchTerm, statusFilter])

  const paidTotal = payments.filter((payment) => payment.status === 'Paid').reduce((total, payment) => total + Number(payment.amount.replace(/[^0-9]/g, '')), 0)
  const pendingTotal = payments.filter((payment) => payment.status === 'Pending').reduce((total, payment) => total + Number(payment.amount.replace(/[^0-9]/g, '')), 0)

  function markAsPaid(paymentId) {
    setPayments((currentPayments) => currentPayments.map((payment) => payment.id === paymentId ? { ...payment, status: 'Paid' } : payment))
  }

  return (
    <div className="page-stack">
      <PageHeader title="Payments" subtitle="Find transactions quickly and keep settlement status current" />

      <div className="summary-boxes">
        <div className="summary-box"><span>Transactions</span><strong>{payments.length}</strong><small>All recorded payments</small></div>
        <div className="summary-box summary-positive"><span>Collected</span><strong>LKR {paidTotal.toLocaleString()}</strong><small>Paid transactions</small></div>
        <div className="summary-box summary-warning"><span>Awaiting payment</span><strong>LKR {pendingTotal.toLocaleString()}</strong><small>Pending transactions</small></div>
      </div>

      <div className="panel">
        <div className="toolbar row-gap ledger-toolbar">
          <div className="search-box">
            <span aria-hidden="true">⌕</span>
            <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type="search" placeholder="Search guest, payment or invoice" aria-label="Search payments" />
          </div>
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} aria-label="Filter payment status">
            <option>All Status</option><option>Paid</option><option>Pending</option>
          </select>
          <select value={methodFilter} onChange={(event) => setMethodFilter(event.target.value)} aria-label="Filter payment method">
            <option>All Methods</option><option>Card</option><option>Cash</option><option>Bank Transfer</option>
          </select>
        </div>
        <div className="table-caption">Showing {filteredPayments.length} of {payments.length} transactions</div>
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
              {filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>{payment.guest}</td>
                  <td>{payment.invoice}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.method}</td>
                  <td>{payment.date}</td>
                  <td>
                    <div className="table-action-cell">
                      <span className={`status-badge ${payment.status.toLowerCase().replace(/\s+/g, '-')}`}>{payment.status}</span>
                      {payment.status === 'Pending' && <button type="button" className="text-button" onClick={() => markAsPaid(payment.id)}>Mark paid</button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filteredPayments.length && <p className="empty-state">No payments match these filters.</p>}
        </div>
      </div>
    </div>
  )
}

export default Payments
