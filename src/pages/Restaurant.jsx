import PageHeader from '../components/layout/PageHeader'

const categories = ['Breakfast', 'Main Course', 'Beverages', 'Desserts']

const foodItems = [
  { name: 'Chicken Fried Rice', price: 'LKR 1,800' },
  { name: 'Chicken Kottu', price: 'LKR 1,600' },
  { name: 'String Hoppers', price: 'LKR 900' },
  { name: 'Tea', price: 'LKR 400' },
  { name: 'Grilled Fish', price: 'LKR 2,200' },
  { name: 'Fresh Lime Juice', price: 'LKR 500' },
  { name: 'Fruit Plate', price: 'LKR 1,200' },
  { name: 'Watalappam', price: 'LKR 700' },
]

function Restaurant() {
  return (
    <div className="page-stack">
      <PageHeader title="Restaurant" subtitle="Menu and in-room dining overview" />

      <div className="restaurant-layout">
        <div className="panel">
          <div className="panel-heading">
            <h3>Categories</h3>
          </div>
          <div className="category-list">
            {categories.map((category) => (
              <button key={category} type="button" className="category-chip active">
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {foodItems.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <strong>{item.name}</strong>
                </div>
                <span>{item.price}</span>
                <button type="button" className="secondary-button small-button">Add</button>
              </div>
            ))}
          </div>
        </div>

        <div className="panel order-panel">
          <div className="panel-heading">
            <h3>Order Summary</h3>
          </div>

          <div className="order-items">
            <div className="order-row">
              <span>Chicken Kottu</span>
              <strong>LKR 1,600</strong>
            </div>
            <div className="order-row">
              <span>Tea</span>
              <strong>LKR 400</strong>
            </div>
            <div className="order-row">
              <span>String Hoppers</span>
              <strong>LKR 900</strong>
            </div>
          </div>

          <div className="order-total">
            <span>Total</span>
            <strong>LKR 2,900</strong>
          </div>

          <button type="button" className="primary-button full-button">Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
