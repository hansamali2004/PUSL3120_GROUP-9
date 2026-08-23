import { useMemo, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'

const categories = ['All', 'Breakfast', 'Main Course', 'Beverages', 'Desserts']

const foodItems = [
  { name: 'Chicken Fried Rice', price: 1800, category: 'Main Course' },
  { name: 'Chicken Kottu', price: 1600, category: 'Main Course' },
  { name: 'String Hoppers', price: 900, category: 'Breakfast' },
  { name: 'Tea', price: 400, category: 'Beverages' },
  { name: 'Grilled Fish', price: 2200, category: 'Main Course' },
  { name: 'Fresh Lime Juice', price: 500, category: 'Beverages' },
  { name: 'Fruit Plate', price: 1200, category: 'Desserts' },
  { name: 'Watalappam', price: 700, category: 'Desserts' },
]

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([
    { ...foodItems[1], quantity: 1 },
    { ...foodItems[3], quantity: 1 },
  ])
  const [room, setRoom] = useState('305')
  const [orderNote, setOrderNote] = useState('')
  const [orderMessage, setOrderMessage] = useState('')

  const visibleItems = useMemo(
    () => selectedCategory === 'All'
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  )

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const formatPrice = (price) => `LKR ${price.toLocaleString()}`

  function addToCart(item) {
    setOrderMessage('')
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.name === item.name)
      if (existingItem) {
        return currentCart.map((cartItem) => cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem)
      }
      return [...currentCart, { ...item, quantity: 1 }]
    })
  }

  function changeQuantity(itemName, change) {
    setCart((currentCart) => currentCart
      .map((item) => item.name === itemName ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0))
  }

  function placeOrder() {
    if (!cart.length) return
    setOrderMessage(`Order sent to room ${room}`)
  }

  return (
    <div className="page-stack">
      <PageHeader title="Restaurant" subtitle="Build and send an in-room dining order" />

      <div className="restaurant-layout">
        <div className="panel">
          <div className="panel-heading">
            <h3>Categories</h3>
          </div>
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {visibleItems.map((item) => (
              <div key={item.name} className="menu-item">
                <div>
                  <strong>{item.name}</strong>
                  <span className="menu-category">{item.category}</span>
                </div>
                <span className="menu-price">{formatPrice(item.price)}</span>
                <button type="button" className="secondary-button small-button" onClick={() => addToCart(item)}>Add to order</button>
              </div>
            ))}
          </div>
        </div>

        <div className="panel order-panel">
          <div className="panel-heading">
            <h3>Current order</h3>
            <p className="muted-text">{cart.length ? `${cart.reduce((sum, item) => sum + item.quantity, 0)} items selected` : 'No items selected'}</p>
          </div>

          <div className="order-items">
            {cart.map((item) => (
              <div className="order-row" key={item.name}>
                <div><span>{item.name}</span><small>{formatPrice(item.price)} each</small></div>
                <div className="quantity-control">
                  <button type="button" onClick={() => changeQuantity(item.name, -1)} aria-label={`Remove one ${item.name}`}>-</button>
                  <strong>{item.quantity}</strong>
                  <button type="button" onClick={() => changeQuantity(item.name, 1)} aria-label={`Add one ${item.name}`}>+</button>
                </div>
              </div>
            ))}
            {!cart.length && <p className="empty-state">Choose a menu item to begin.</p>}
          </div>

          <div className="order-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <label className="field-label" htmlFor="room-number">Deliver to room</label>
          <select id="room-number" value={room} onChange={(event) => setRoom(event.target.value)}>
            <option>305</option>
            <option>210</option>
            <option>118</option>
            <option>408</option>
          </select>
          <label className="field-label" htmlFor="order-note">Special instructions</label>
          <textarea id="order-note" value={orderNote} onChange={(event) => setOrderNote(event.target.value)} placeholder="Optional note for the kitchen" rows="2" />
          <button type="button" className="primary-button full-button" onClick={placeOrder} disabled={!cart.length}>Place order</button>
          {orderMessage && <p className="success-message" role="status">{orderMessage}</p>}
        </div>
      </div>
    </div>
  )
}

export default Restaurant
