import React from 'react';

const Title = ({ text1, text2 }) => {
    return (
        <div className='title-group' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
                <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#999', fontFamily: 'Prata, serif' }}>{text1} <span style={{ color: '#111', fontWeight: '400' }}>{text2}</span></p>
                <div style={{ width: '60px', height: '1.5px', backgroundColor: '#d4af37' }}></div>
            </div>
        </div>
    );
};

export default Title;
