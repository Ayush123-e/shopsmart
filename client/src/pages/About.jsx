import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
    return (
        <div className='container'>
            <div style={{ textAlign: 'center', fontSize: '1.5rem', paddingTop: '40px', borderTop: '1px solid #e2e2e2' }}>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div style={{ margin: '40px 0', display: 'flex', flexDirection: 'column', md: {flexDirection: 'row'}, gap: '64px' }}>
                <img style={{ width: '100%', md: {maxWidth: '450px'} }} src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/about_img.png" alt="" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', md: {width: '50%'}, color: '#6d6d6d' }}>
                    <p>ShopSmart was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                    <b style={{ color: '#1a1a1a' }}>Our Mission</b>
                    <p>Our mission at ShopSmart is to empower customers with choice, convenience, and confidence. We're committed to delivering an exceptional shopping experience that exceeds expectations, from browsing to delivery and beyond.</p>
                </div>
            </div>

            <div style={{ fontSize: '1.5rem', padding: '16px 0' }}>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', md: {flexDirection: 'row'}, fontSize: '14px', marginBottom: '80px' }}>
                <div style={{ border: '1px solid #e2e2e2', padding: '40px 60px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <b>Quality Assurance:</b>
                    <p style={{ color: '#6d6d6d' }}>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div style={{ border: '1px solid #e2e2e2', padding: '40px 60px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <b>Convenience:</b>
                    <p style={{ color: '#6d6d6d' }}>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                </div>
                <div style={{ border: '1px solid #e2e2e2', padding: '40px 60px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <b>Exceptional Customer Service:</b>
                    <p style={{ color: '#6d6d6d' }}>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>

            <NewsletterBox />
        </div>
    );
};

export default About;
