import React from 'react';
import ContentLoader from 'react-content-loader';

export default function SelectedProductLoader({ componentName }) {
  console.log(componentName);
  return (
    <ContentLoader
      speed={2}
      width={1122}
      height={725}
      viewBox="0 0 1122 725"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">

    <rect x="6" y="76" rx="0" ry="0" width="103" height="103" /> 
    <rect x="7" y="197" rx="0" ry="0" width="103" height="103" /> 
    <rect x="6" y="315" rx="0" ry="0" width="103" height="103" /> 
    <rect x="7" y="437" rx="0" ry="0" width="103" height="103" /> 
    <rect x="6" y="555" rx="0" ry="0" width="103" height="103" /> 
    <rect x="166" y="75" rx="0" ry="0" width="1523" height="586" />
    </ContentLoader>
  );
}
