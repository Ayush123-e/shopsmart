import React from 'react';

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='newsletter-section' style={{ textAlign: 'center', padding: '100px 20px', backgroundColor: '#fafafa', marginTop: '100px' }}>
            <p style={{ fontSize: '24px', fontWeight: '500', color: '#111', fontFamily: 'Prata, serif' }}>Join the Inner Circle</p>
            <p style={{ color: '#666', marginTop: '15px', maxWidth: '500px', margin: '15px auto 40px', fontSize: '15px' }}>
                Subscribe to receive exclusive early access to new arrivals, curated style inspiration, and special invitations.
            </p>
            <form onSubmit={onSubmitHandler} style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'flex', alignItems: 'center', borderBottom: '1px solid #111', paddingBottom: '10px' }}>
                <input style={{ flex: 1, padding: '10px 0', border: 'none', background: 'transparent', outline: 'none', fontSize: '16px' }} type="email" placeholder='Email Address' required />
                <button type='submit' style={{ backgroundColor: 'transparent', color: '#111', padding: '10px 20px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.2em' }}>SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default NewsletterBox;
