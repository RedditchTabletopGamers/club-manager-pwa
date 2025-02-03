import React from 'react';
import { Link } from 'react-router-dom';
import MeetingSelector from '../Components/MeetingSelector/MeetingSelector'
import MemberSelector from '../Components/MemberSelector/MemberSelector';
import SumUpPaymentButton from '../Components/SumUpPaymentButton/SumUpPaymentButton';

const CollectSubs = () => {
  return (
    <>
      <Link to="/Home">Main Menu &gt;</Link> <h1>Collect Subs</h1>
      <div>
        Meeting week: <MeetingSelector />
        <MemberSelector />
        <SumUpPaymentButton
          amount={29.99}
          currency="EUR"
          title="Product Purchase"
          total={29.99}
          affiliateKey="your-affiliate-key"
          corporateKey="your-corporate-key"
          productName="Sample Product"
          callbackScheme="yourappscheme"
          onPaymentSuccess={() => {
            // Handle successful payment
            console.log('Payment completed');
          }}
          onPaymentFailure={(error) => {
            // Handle payment failure
            console.error('Payment failed', error);
          }}
        />
      </div>
    </>
  );
};

export default CollectSubs;