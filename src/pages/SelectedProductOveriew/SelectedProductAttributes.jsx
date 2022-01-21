import React from 'react';

export default function SelectedProductAttributes({
  attributes,
  activeAttributes,
  setActiveAttribute,
  attributesAlert,
  attributeKeys,
}) {
  const checkAlert = (type, id) => {
    return (
      attributeKeys.every((attr) => attr !== id) && `sp-attributes-block__${type}__item__alert`
    );
  };
  return (
    <div className="sp-attributes-block">
      {attributes.map((attribute, i) => (
        <div key={attribute.id + i} className={`sp-attributes-block__${attribute.type}`}>
          <span style={{ textTransform: 'uppercase' }}>{attribute.name}:</span>
          {attribute.items.map((item, i) => (
            <div
              key={item.value + i}
              onClick={() => setActiveAttribute(attribute.id, item.value)}
              style={{ background: item.value }}
              className={`sp-attributes-block__${attribute.type}__item ${
                attributesAlert && checkAlert(attribute.type, attribute.id)
              }
             ${
               item.value === activeAttributes[attribute.id] &&
               `sp-attributes-block__${attribute.type}__item__active`
             } `}>
              {attribute.type === 'text' && item.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
