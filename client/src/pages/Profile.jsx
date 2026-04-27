import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Profile = () => {
    const { userData, getUserData, token } = useContext(ShopContext);

    useEffect(() => {
        if (token) {
            getUserData();
        }
    }, [token]);

    if (!userData) {
        return <div className='container' style={{ padding: '40px', textAlign: 'center' }}>Loading profile...</div>;
    }

    return (
        <div className='container' style={{ paddingTop: '40px' }}>
            <div style={{ textAlign: 'center' }}>
                <Title text1={'MY'} text2={'PROFILE'} />
            </div>

            <div style={{ maxWidth: '600px', margin: '40px auto', border: '1px solid #e2e2e2', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f4f4f4', paddingBottom: '15px' }}>
                        <p style={{ fontWeight: '600', color: '#111' }}>Name</p>
                        <p style={{ color: '#666' }}>{userData.name}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f4f4f4', paddingBottom: '15px' }}>
                        <p style={{ fontWeight: '600', color: '#111' }}>Email</p>
                        <p style={{ color: '#666' }}>{userData.email}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f4f4f4', paddingBottom: '15px' }}>
                        <p style={{ fontWeight: '600', color: '#111' }}>Member Since</p>
                        <p style={{ color: '#666' }}>{new Date(userData.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
