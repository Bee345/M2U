/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import WithdrawalPage from './pages/WithdrawalPage';
import DepositPage from './pages/DepositPage';
import TransactionsPage from './pages/TransactionsPage';
import PayBillsPage from './pages/PayBillsPage';
import PayCardPage from './pages/PayCardPage';
import SplitBillPage from './pages/SplitBillPage';
import SendRequestPage from './pages/SendRequestPage';
import ScanPayPage from './pages/ScanPayPage';
import Sama2LokalPage from './pages/Sama2LokalPage';
import ApplyPage from './pages/ApplyPage';
import PromosPage from './pages/PromosPage';
import Secure2uPage from './pages/Secure2uPage';
import SettingsPage from './pages/SettingsPage';
import AdminDashboard from './pages/AdminDashboard';
import Layout from './components/Layout';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user');

  // Simple auth check for demo purposes
  useEffect(() => {
    const auth = localStorage.getItem('m2u_auth');
    const role = localStorage.getItem('m2u_role') as 'user' | 'admin';
    if (auth === 'true') {
      setIsAuthenticated(true);
      if (role) {
        setUserRole(role);
      }
    }
  }, []);

  const handleLogin = (role: 'user' | 'admin') => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          
          {/* User Routes */}
          <Route 
            path="/dashboard" 
            element={isAuthenticated && userRole === 'user' ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/withdraw" 
            element={isAuthenticated && userRole === 'user' ? <WithdrawalPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/deposit" 
            element={isAuthenticated && userRole === 'user' ? <DepositPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/transactions" 
            element={isAuthenticated && userRole === 'user' ? <TransactionsPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/pay-bills" 
            element={isAuthenticated && userRole === 'user' ? <PayBillsPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/pay-card" 
            element={isAuthenticated && userRole === 'user' ? <PayCardPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/split-bill" 
            element={isAuthenticated && userRole === 'user' ? <SplitBillPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/send-request" 
            element={isAuthenticated && userRole === 'user' ? <SendRequestPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/scan-pay" 
            element={isAuthenticated && userRole === 'user' ? <ScanPayPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/sama2-lokal" 
            element={isAuthenticated && userRole === 'user' ? <Sama2LokalPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/apply" 
            element={isAuthenticated && userRole === 'user' ? <ApplyPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/promos" 
            element={isAuthenticated && userRole === 'user' ? <PromosPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/secure2u" 
            element={isAuthenticated && userRole === 'user' ? <Secure2uPage /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/settings" 
            element={isAuthenticated && userRole === 'user' ? <SettingsPage /> : <Navigate to="/login" />} 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={isAuthenticated && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
