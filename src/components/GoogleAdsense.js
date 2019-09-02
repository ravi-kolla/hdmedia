import React, {useEffect} from 'react';

const GoogleAdComponent = () => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-8915459609879797",
      enable_page_level_ads: true
    });
  })

  return (
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-8915459609879797'
        data-ad-slot='8915459609879797'
        data-ad-format='auto' />
  );
}

export default GoogleAdComponent
