import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />
      <RightSection />
      <LeftSection
        imageUrl="media\images\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay="media\images\googlePlayBadge.svg"
        appStore="media\images\appstoreBadge.svg"
      />

      <RightSection />
      <Universe />
    </>
  );
}

export default ProductPage;