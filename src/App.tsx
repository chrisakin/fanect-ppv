import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AuthModal } from './components/AuthModal';
import { PaymentModal } from './components/Modals/PaymentModal';
import { TicketModal } from './components/Modals/TicketModal';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { LiveStream } from './pages/LiveStream';

function App() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [paymentEmail, setPaymentEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [formData, setFormData] = useState({
    ticketEmail: '',
    ticketCode: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handlePurchaseModal = () => setShowEmailInput(true);
    window.addEventListener('openPurchaseModal', handlePurchaseModal);
    return () => window.removeEventListener('openPurchaseModal', handlePurchaseModal);
  }, []);

  const handleSignOut = () => {
    setUser(null);
  };

  const handlePurchaseClick = () => {
    setShowEmailInput(true);
  };

  const handleWatchEvent = () => {
    setShowTicketModal(true);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.ticketEmail && formData.ticketCode) {
      setShowTicketModal(false);
      setFormData({ ticketEmail: '', ticketCode: '' });
      navigate('/live/dQw4w9WgXcQ');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Layout
        user={user}
        onSignOut={handleSignOut}
        onPurchaseClick={handlePurchaseClick}
        onAuthModalOpen={(mode) => {
          setAuthMode(mode);
          setIsAuthModalOpen(true);
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={
            <Events 
              onPurchaseClick={handlePurchaseClick}
              onWatchEvent={handleWatchEvent}
            />
          } />
          <Route path="/live/:id" element={<LiveStream />} />
        </Routes>
      </Layout>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onAuth={(email: string) => setUser({ email })}
      />

      {showEmailInput && (
        <PaymentModal
          email={paymentEmail}
          onEmailChange={setPaymentEmail}
          onClose={() => {
            setShowEmailInput(false);
            setPaymentEmail('');
          }}
        />
      )}

      {showTicketModal && (
        <TicketModal
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleTicketSubmit}
          onClose={() => {
            setShowTicketModal(false);
            setFormData({ ticketEmail: '', ticketCode: '' });
          }}
        />
      )}
    </>
  );
}

export default App;