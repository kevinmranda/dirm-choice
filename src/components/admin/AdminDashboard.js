import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import './AdminDashboard.css';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'users'));
        const today = new Date().toISOString().split('T')[0];
        const allOrders = snapshot.docs.map(doc => ({
          email: doc.id,
          ...doc.data()
        }));
           const todayOrders = allOrders.filter(user => {
          const orderDate = user.lastOrders?.[0]?.selectionTime?.split('T')[0];
          return orderDate === today;
        });
        setOrders(todayOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>🍽️ All User Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Selected Food</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.email}>
                  <td>{order.name || '—'}</td>
              <td>{order.email}</td>
             <td>{order.lastOrders?.[0]?.selectedFood || '—'}</td>
<td>
  {order.lastOrders?.[0]?.selectionTime
    ? new Date(order.lastOrders[0].selectionTime).toLocaleString()
    : '—'}
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
