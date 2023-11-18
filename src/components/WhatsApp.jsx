import React from 'react';

const WhatsApp = () => {
  const phoneNumber = '1234567890';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const containerStyles = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#2426ac',
  };

  return (
    <div style={containerStyles}>
      <h4 className='text-white'>Mandanos un mensaje para empezar a militar</h4>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <i className="text-secondary fab fa-whatsapp fa-5x"></i>
      </a>
    </div>
  );
};

export default WhatsApp;
