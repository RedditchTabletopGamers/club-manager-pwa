import React, { useState, useCallback, useEffect } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export {};

// Types for payment process
interface SumUpPaymentError extends Error {
  code?: string;
  details?: string;
}

// Payment status types
type PaymentStatus = 'idle' | 'processing' | 'waiting' | 'success' | 'failed';

// Component props interface
interface SumUpPaymentButtonProps {
  amount: number;
  currency?: string;
  title?: string;
  total?: number;
  affiliateKey?: string;
  corporateKey?: string;
  productName?: string;
  callbackScheme?: string;
  onPaymentSuccess?: () => void;
  onPaymentFailure?: (error: SumUpPaymentError) => void;
}

const SumUpPaymentButton: React.FC<SumUpPaymentButtonProps> = ({
  amount,
  currency = 'EUR',
  title = 'Payment',
  total,
  affiliateKey = '',
  corporateKey = '',
  productName = 'Product',
  callbackScheme = 'yourappscheme',
  onPaymentSuccess,
  onPaymentFailure
}) => {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handle payment switch callback
  useEffect(() => {
    const handlePaymentCallback = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      const { status } = event.data;
      switch (status) {
        case 'success':
          setPaymentStatus('success');
          onPaymentSuccess?.();
          break;
        case 'failed':
          setPaymentStatus('failed');
          const error: SumUpPaymentError = new Error('Payment failed');
          error.code = 'PAYMENT_FAILED';
          onPaymentFailure?.(error);
          break;
      }
    };

    window.addEventListener('message', handlePaymentCallback);
    return () => {
      window.removeEventListener('message', handlePaymentCallback);
    };
  }, [onPaymentSuccess, onPaymentFailure]);

  const initiatePayment = useCallback(() => {
    try {
      // Validate amount
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid payment amount');
      }

      // Construct payment URL
      const paymentParams = new URLSearchParams({
        amount: amount.toFixed(2),
        currency,
        title,
        total: (total || amount).toFixed(2),
        'affiliate-key': affiliateKey,
        'corporate-key': corporateKey,
        'product-name': productName,
        'callback-scheme': callbackScheme
      });

      // Construct deep link
      const paymentLink = `sumupmerchant://pay/1.0?${paymentParams.toString()}`;

      // Set status and attempt to open payment
      setPaymentStatus('processing');

      // Attempt to open SumUp app
      window.location.href = paymentLink;

      // Set timeout to handle potential failure to open app
      const timeout = setTimeout(() => {
        setPaymentStatus('failed');
        const error: SumUpPaymentError = new Error('Unable to open SumUp app');
        error.code = 'APP_OPEN_FAILED';
        onPaymentFailure?.(error);
      }, 5000);

      // Clean up timeout
      return () => clearTimeout(timeout);
    } catch (error) {
      console.error('Payment Initiation Error:', error);
      
      // Process error
      const processedError: SumUpPaymentError = error instanceof Error 
        ? error 
        : new Error(String(error));
      
      setPaymentStatus('failed');
      setErrorMessage(processedError.message);
      onPaymentFailure?.(processedError);
    }
  }, [
    amount, 
    currency, 
    title, 
    total, 
    affiliateKey, 
    corporateKey, 
    productName, 
    callbackScheme,
    onPaymentFailure
  ]);

  // Render different states
  const renderButtonContent = () => {
    switch (paymentStatus) {
      case 'processing':
        return 'Processing...';
      case 'success':
        return (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500" />
            Payment Successful
          </div>
        );
      case 'failed':
        return (
          <div className="flex items-center gap-2">
            <AlertCircle className="text-red-500" />
            Payment Failed
          </div>
        );
      default:
        return `Pay €${amount.toFixed(2)}`;
    }
  };

  return (
    <div className="sumup-payment-container">
      <button 
        onClick={initiatePayment}
        disabled={paymentStatus !== 'idle'}
        className={`
          w-full p-3 rounded-lg font-bold 
          ${paymentStatus === 'processing' && 'bg-gray-400 cursor-not-allowed'}
          ${paymentStatus === 'success' && 'bg-green-500 text-white'}
          ${paymentStatus === 'failed' && 'bg-red-500 text-white'}
          ${paymentStatus === 'idle' && 'bg-blue-500 text-white hover:bg-blue-600'}
        `}
      >
        {renderButtonContent()}
      </button>
      
      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default SumUpPaymentButton;