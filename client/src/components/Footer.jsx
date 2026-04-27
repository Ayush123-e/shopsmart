import React from 'react';

const Footer = () => {
    return (
        <div className='footer-wrapper' style={{ backgroundColor: '#111', color: '#fff', marginTop: '120px', padding: '100px 0 40px' }}>
            <div className='container' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '80px', marginBottom: '80px' }}>
                <div>
                    <h1 style={{ fontSize: '28px', marginBottom: '30px', color: '#fff' }}>Shop<span>Smart</span></h1>
                    <p style={{ color: '#aaa', maxWidth: '350px', fontSize: '15px', lineHeight: '1.8' }}>
                        Curating excellence since 2026. We believe in fashion that transcends time, combining artisanal craftsmanship with modern innovation.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                        <span style={{ fontSize: '18px', cursor: 'pointer', color: '#aaa' }}>IG</span>
                        <span style={{ fontSize: '18px', cursor: 'pointer', color: '#aaa' }}>TW</span>
                        <span style={{ fontSize: '18px', cursor: 'pointer', color: '#aaa' }}>FB</span>
                    </div>
                </div>

                <div>
                    <p style={{ fontWeight: '600', marginBottom: '30px', letterSpacing: '0.1em', fontSize: '14px' }}>COLLECTIONS</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#aaa', fontSize: '14px' }}>
                        <li style={{ cursor: 'pointer' }}>New Arrivals</li>
                        <li style={{ cursor: 'pointer' }}>Best Sellers</li>
                        <li style={{ cursor: 'pointer' }}>Seasonal Picks</li>
                        <li style={{ cursor: 'pointer' }}>Gift Cards</li>
                    </ul>
                </div>

                <div>
                    <p style={{ fontWeight: '600', marginBottom: '30px', letterSpacing: '0.1em', fontSize: '14px' }}>SUPPORT</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#aaa', fontSize: '14px' }}>
                        <li style={{ cursor: 'pointer' }}>Shipping Policy</li>
                        <li style={{ cursor: 'pointer' }}>Returns & Exchanges</li>
                        <li style={{ cursor: 'pointer' }}>Size Guide</li>
                        <li style={{ cursor: 'pointer' }}>FAQ</li>
                    </ul>
                </div>
            </div>

            <div className='container' style={{ borderTop: '1px solid #333', paddingTop: '40px', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#666', letterSpacing: '0.05em' }}>© 2026 SHOPSMART GLOBAL. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    );
};

export default Footer;
