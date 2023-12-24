import React from 'react';

const SuccessStories = () => {

  const stories = [
    {
      id: 1,
      name: 'Max',
      image: 'OIG(8).jpeg',
      story: 'Conocí a Max a través de AdoptaPatas. Es un perro juguetón y lleno de energía. Desde que llegó a mi hogar, ha llenado cada día de alegría y amor. No puedo imaginar mi vida sin él. ¡Gracias AdoptaPatas por hacer posible esta hermosa adopción!',
    },
    {
      id: 2,
      name: 'Luna',
      image: 'OIG(7).jpeg',
      story: 'Luna era una gatita tímida cuando la encontré en AdoptaPatas. Después de unos meses en casa, se ha convertido en la reina del lugar. Adoptarla fue la mejor decisión de mi vida. Gracias a esta plataforma por unirnos.',
    },
  
  ];

  return (
    <div className="success-stories">
      <h2>Historias Exitosas</h2>

      {stories.map(story => (
        <div key={story.id} className="story">
          <img src={story.image} alt={`Mascota Adoptada ${story.id}`} />
          <p><strong>Nombre de la Mascota:</strong> {story.name}</p>
          <p><strong>Historia:</strong> {story.story}</p>
        </div>
      ))}
    </div>
  );
};

export default SuccessStories;