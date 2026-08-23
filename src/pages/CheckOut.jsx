import PageHeader from '../components/layout/PageHeader'

function CheckOut() {
  return (
    <div className="page-stack">
      <PageHeader title="Check-Out" subtitle="Finalize guest departure and settlement" />

      <div className="panel form-panel">
        <div className="checkout-summary">
          <div className="checkout-row">
            <span>Guest</span>
            <strong>Chaminda Jayasuriya</strong>
          </div>
          <div className="checkout-row">
            <span>Room</span>
            <strong>402</strong>
          </div>
          <div className="checkout-row">
            <span>Stay Duration</span>
            <strong>3 nights</strong>
          </div>
          <div className="checkout-row">
            <span>Room Charges</span>
            <strong>LKR 45,000</strong>
          </div>
          <div className="checkout-row">
            <span>Restaurant Charges</span>
            <strong>LKR 6,200</strong>
          </div>
          <div className="checkout-row">
            <span>Additional Charges</span>
            <strong>LKR 1,800</strong>
          </div>
          <div className="checkout-row">
            <span>Discount</span>
            <strong>-LKR 2,500</strong>
          </div>
          <div className="checkout-row total-row">
            <span>Total</span>
            <strong>LKR 50,500</strong>
          </div>
        </div>

        <div className="payment-method-box">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <label><input type="radio" name="payment" defaultChecked /> Cash</label>
            <label><input type="radio" name="payment" /> Card</label>
            <label><input type="radio" name="payment" /> Bank Transfer</label>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="primary-button">Complete Check-Out</button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
