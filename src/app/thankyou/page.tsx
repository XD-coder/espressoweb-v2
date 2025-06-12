import React from 'react'
import { useSearchParams } from 'next/navigation';

const thankyou = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const backendurl = '';

    const sendTokenToAPI = async () => {
        try {
            const response = await fetch(backendurl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) {
                throw new Error('Failed to send token');
            }

            const data = await response.json();
            console.log('API Response:', data);
        } catch (error) {
            console.error('Error sending token:', error);
        }
    };

    React.useEffect(() => {
        if (token) {
            sendTokenToAPI();
        }
    }, [token]);
  return (
    <div>thankyou</div>
  )
}

export default thankyou