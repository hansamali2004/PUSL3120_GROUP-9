export const users = [
  { id: 1, name: 'Admin User', email: 'admin@hotelsafron.com', role: 'Administrator', status: 'Active', lastActive: '2 min ago' },
  { id: 2, name: 'Nadun Fernando', email: 'manager@hotelsafron.com', role: 'Manager', status: 'Active', lastActive: '18 min ago' },
  { id: 3, name: 'Roshan Jayawardena', email: 'reception@hotelsafron.com', role: 'Receptionist', status: 'Away', lastActive: '1 hour ago' },
  { id: 4, name: 'Dilini Herath', email: 'restaurant@hotelsafron.com', role: 'Restaurant Staff', status: 'Active', lastActive: '9 min ago' },
]

export const paymentData = [
  { id: 'PAY-9012', guest: 'Nimal Perera', invoice: 'INV-3041', amount: 'LKR 22,500', method: 'Card', date: '2026-08-20', status: 'Paid' },
  { id: 'PAY-9013', guest: 'Aisha Rahman', invoice: 'INV-3042', amount: 'LKR 35,000', method: 'Cash', date: '2026-08-20', status: 'Pending' },
  { id: 'PAY-9014', guest: 'Maya Wickramasinghe', invoice: 'INV-3043', amount: 'LKR 12,200', method: 'Bank Transfer', date: '2026-08-19', status: 'Paid' },
]

export const invoiceData = [
  { id: 'INV-3041', guest: 'Nimal Perera', room: '201', amount: 'LKR 22,500', issuedDate: '2026-08-20', paymentStatus: 'Paid' },
  { id: 'INV-3042', guest: 'Aisha Rahman', room: '305', amount: 'LKR 35,000', issuedDate: '2026-08-20', paymentStatus: 'Pending' },
  { id: 'INV-3043', guest: 'Maya Wickramasinghe', room: '210', amount: 'LKR 12,200', issuedDate: '2026-08-19', paymentStatus: 'Paid' },
]

export const reportCards = [
  { label: 'Occupancy Rate', value: '60%', trend: '+4.2%' },
  { label: 'Monthly Revenue', value: 'LKR 1.2M', trend: '+8.1%' },
  { label: 'Total Reservations', value: '482', trend: '+12' },
  { label: 'Restaurant Revenue', value: 'LKR 275K', trend: '+6.5%' },
]
