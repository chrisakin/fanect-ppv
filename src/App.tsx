import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AuthModal } from './components/AuthModal';
import { PaymentModal } from './components/Modals/PaymentModal';
import { TicketModal } from './components/Modals/TicketModal';
import { ScrollToTop } from './components/ScrollToTop';
import { routes } from './routes';
import { Events } from './pages/Events';

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
    navigate('/');
  };

  const handlePurchaseClick = () => {
    navigate('/events');
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
      <ScrollToTop />
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
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.path === '/events' ? (
                  <Events
                    onPurchaseClick={() => setShowEmailInput(true)}
                    onWatchEvent={handleWatchEvent}
                  />
                ) : (
                  route.element
                )
              }
            />
          ))}
        </Routes>
      </Layout>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onAuth={(email: string) => {
          setUser({ email });
          navigate('/dashboard');
        }}
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