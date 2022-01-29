import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ProductsOwerviewLoader() {
 
  return (
    <ContentLoader 
    speed={2}
    width={380}
    height={525}
    viewBox="0 0 285 425"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  
  >
    <rect x="10" y="16" rx="0" ry="0" width="350" height="342" />
  </ContentLoader>
  );
}
