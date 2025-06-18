import { useState, useEffect } from 'react';
import { sendEmail, type EmailData } from '../services/emailService';

/**
 * ChatBox Component
 * 
 * Features:
 * - Conversational workflow with multiple steps (intro, form, message, sending, sent)
 * - Positioned as overlay relative to app container (not viewport)
 * - Responsive design with different sizes for mobile/desktop
 * - Smooth slide-in/slide-out animations
 * - Form validation and error handling
 * - Email service integration ready for EmailJS/Formspree
 */

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBox({ isOpen, onClose }: ChatBoxProps) {
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [step, setStep] = useState<'intro' | 'form' | 'message' | 'sending' | 'sent'>('intro');
  const [error, setError] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [positioning, setPositioning] = useState({ right: '1rem' });

  // Calculate dynamic positioning based on app container
  useEffect(() => {
    if (!isOpen) return;

    const calculatePosition = () => {
      const appContainer = document.querySelector('.instagram-container') as HTMLElement;
      if (!appContainer) return;

      const containerRect = appContainer.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // On mobile/tablet: use standard fixed positioning
      if (viewportWidth < 1024) {
        setPositioning({ right: '1rem' });
        return;
      }

      // On desktop: position relative to app container
      const rightOffset = viewportWidth - containerRect.right + 16; // 16px = 1rem margin
      setPositioning({ right: `${rightOffset}px` });
    };

    calculatePosition();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, [isOpen]);

  const handleStartChat = () => {
    setStep('form');
  };

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name.trim() || !userInfo.email.trim()) {
      setError('Nom et email sont requis');
      return;
    }
    setError('');
    setStep('message');
  };
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Veuillez écrire un message');
      return;
    }

    setStep('sending');
    setError('');

    try {
      const emailData: EmailData = {
        name: userInfo.name,
        email: userInfo.email,
        company: userInfo.company,
        message: message
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        setStep('sent');
      } else {
        setError('Erreur lors de l\'envoi. Veuillez réessayer.');
        setStep('message');
      }
    } catch (err) {
      setError('Erreur lors de l\'envoi. Veuillez réessayer.');
      setStep('message');
    }
  };

  const resetChat = () => {
    setStep('intro');
    setMessage('');
    setUserInfo({ name: '', email: '', company: '' });
    setError('');
  };
  const handleClose = () => {
    setIsClosing(true);
    // Delay the actual close to allow animation to complete
    setTimeout(() => {
      resetChat();
      setIsClosing(false);
      onClose();
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div className={`chat-overlay ${isClosing ? 'closing' : ''}`} style={positioning}>
      <div className="bg-white rounded-lg shadow-2xl border border-ig-gray-200 w-80 sm:w-80 max-h-96 flex flex-col overflow-hidden relative">
        {/* Close button - Top right corner */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-retro-purple focus:ring-opacity-50"
          aria-label="Fermer la conversation"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Header */}
        <div className="bg-gradient-to-r from-retro-purple to-retro-pink p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
              <img 
                src="/src/assets/images/profile-pic.png" 
                alt="Laura Perez"
                className="w-full h-full object-cover"
              />
            </div>            <div className="text-white">
              <h3 className="text-sm font-medium">Laura Perez</h3>
              <p className="text-xs opacity-90">Généralement en ligne</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {error && (
            <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
              {error}
            </div>
          )}

          {step === 'intro' && (
            <div className="space-y-3">
              <div className="bg-ig-gray-100 rounded-lg p-3">
                <p className="text-sm text-ig-gray-700">
                  👋 Salut ! Merci de votre intérêt pour mon profil. Je serais ravie d'échanger avec vous !
                </p>
              </div>
              <button
                onClick={handleStartChat}
                className="w-full bg-retro-purple text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Commencer la conversation
              </button>
            </div>
          )}

          {step === 'form' && (
            <div className="space-y-3">
              <div className="bg-ig-gray-100 rounded-lg p-3">
                <p className="text-sm text-ig-gray-700">
                  Pour commencer, pouvez-vous me dire qui vous êtes ?
                </p>
              </div>
              <form onSubmit={handleSubmitInfo} className="space-y-3">
                <input
                  type="text"
                  placeholder="Votre nom *"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-2 border border-ig-gray-300 rounded text-sm focus:outline-none focus:border-retro-purple"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email *"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-2 border border-ig-gray-300 rounded text-sm focus:outline-none focus:border-retro-purple"
                  required
                />
                <input
                  type="text"
                  placeholder="Votre entreprise (optionnel)"
                  value={userInfo.company}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full p-2 border border-ig-gray-300 rounded text-sm focus:outline-none focus:border-retro-purple"
                />
                <button
                  type="submit"
                  className="w-full bg-retro-purple text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Continuer
                </button>
              </form>
            </div>
          )}

          {step === 'message' && (
            <div className="space-y-3">
              <div className="bg-ig-gray-100 rounded-lg p-3">
                <p className="text-sm text-ig-gray-700">
                  Parfait {userInfo.name} ! Quel message souhaitez-vous m'envoyer ?
                </p>
              </div>
              <form onSubmit={handleSendMessage} className="space-y-3">
                <textarea
                  placeholder="Écrivez votre message ici..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-ig-gray-300 rounded text-sm focus:outline-none focus:border-retro-purple resize-none"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-retro-purple text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          )}

          {step === 'sending' && (
            <div className="space-y-3 text-center">
              <div className="animate-spin w-8 h-8 border-2 border-retro-purple border-t-transparent rounded-full mx-auto"></div>
              <p className="text-sm text-ig-gray-600">Envoi en cours...</p>
            </div>
          )}

          {step === 'sent' && (
            <div className="space-y-3 text-center">
              <div className="text-green-500 text-3xl">✅</div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-700">
                  Message envoyé avec succès ! Je vous répondrai rapidement.
                </p>
              </div>
              <button
                onClick={resetChat}
                className="w-full bg-ig-gray-200 text-ig-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-ig-gray-300 transition-colors"
              >
                Nouveau message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
