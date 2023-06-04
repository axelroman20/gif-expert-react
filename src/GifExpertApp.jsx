import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Sherk']);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories((categories) => [value, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input search */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* listado de gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
