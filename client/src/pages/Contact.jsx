import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
    return (
        <div className='container'>
            <div style={{ textAlign: 'center', fontSize: '1.5rem', paddingTop: '40px', borderTop: '1px solid #e2e2e2' }}>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>

            <div style={{ margin: '40px 0', marginBottom: '112px', display: 'flex', flexDirection: 'column', justifyContent: 'center', md: {flexDirection: 'row'}, gap: '40px' }}>
                <img style={{ width: '100%', md: {maxWidth: '480px'} }} src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/contact_img.png" alt="" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '24px' }}>
                    <p style={{ fontWeight: '600', fontSize: '1.25rem', color: '#414141' }}>Our Store</p>
                    <p style={{ color: '#6d6d6d' }}>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p style={{ color: '#6d6d6d' }}>Tel: (415) 555-0132 <br /> Email: admin@shopsmart.com</p>
                    <p style={{ fontWeight: '600', fontSize: '1.25rem', color: '#414141' }}>Careers at ShopSmart</p>
                    <p style={{ color: '#6d6d6d' }}>Learn more about our teams and job openings.</p>
                    <button style={{ border: '1px solid black', padding: '16px 32px', fontSize: '14px', hover: {backgroundColor: 'black', color: 'white'}, transition: 'all 0.5s' }}>Explore Jobs</button>
                </div>
            </div>

            <NewsletterBox />
        </div>
    );
};

export default Contact;
