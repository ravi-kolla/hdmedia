import React, {useEffect} from 'react';

const GoogleAdComponent = () => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  })

  return (
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-12121212'
        data-ad-slot='12121212'
        data-ad-format='auto' />
  );
}

export default GoogleAdComponent
