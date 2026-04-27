import React from 'react';

const OurPolicy = () => {
    return (
        <div className='container' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', textAlign: 'center', marginTop: '120px', marginBottom: '120px' }}>
            <div style={{ padding: '20px' }}>
                <img src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/exchange_icon.png" style={{ width: '32px', marginBottom: '25px', opacity: '0.8' }} alt="" />
                <p style={{ fontWeight: '600', fontSize: '16px', letterSpacing: '0.05em', marginBottom: '10px' }}>EASY EXCHANGE</p>
                <p style={{ color: '#666', fontSize: '14px' }}>We offer a hassle-free exchange policy for all our premium products.</p>
            </div>
            <div style={{ padding: '20px' }}>
                <img src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/quality_icon.png" style={{ width: '32px', marginBottom: '25px', opacity: '0.8' }} alt="" />
                <p style={{ fontWeight: '600', fontSize: '16px', letterSpacing: '0.05em', marginBottom: '10px' }}>7 DAYS RETURN</p>
                <p style={{ color: '#666', fontSize: '14px' }}>Enjoy peace of mind with our 7-day free return policy on every order.</p>
            </div>
            <div style={{ padding: '20px' }}>
                <img src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/support_img.png" style={{ width: '32px', marginBottom: '25px', opacity: '0.8' }} alt="" />
                <p style={{ fontWeight: '600', fontSize: '16px', letterSpacing: '0.05em', marginBottom: '10px' }}>PREMIUM SUPPORT</p>
                <p style={{ color: '#666', fontSize: '14px' }}>Our dedicated concierge team is available 24/7 to assist with your needs.</p>
            </div>
        </div>
    );
};

export default OurPolicy;
