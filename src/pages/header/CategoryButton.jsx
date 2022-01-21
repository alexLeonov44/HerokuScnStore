import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CategoryButton({ category, selectedCategory, setActiveCategory }) {
  const history = useHistory();
  let categoryName = category.name;

  const buttonOnClick = (categoryName) => {
      setActiveCategory(categoryName);
    history.push('/');
  };
  return (
    <div
      onClick={() => buttonOnClick(categoryName)}
      className={`hc-button ${selectedCategory === categoryName && 'hc-button__active'}`}>
      <p>{categoryName || 'all'}</p>
    </div>
  );
}
