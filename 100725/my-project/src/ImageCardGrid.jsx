import React from 'react';

const ITEMS = [
  {
    id: 'i1',
    title: 'Гірський краєвид',
    img: 'https://picsum.photos/id/1018/600/400',
    desc: 'Красивий гірський пейзаж з озером.',
  },
  {
    id: 'i2',
    title: 'Місто ввечері',
    img: 'https://picsum.photos/id/1015/600/400',
    desc: 'Вогні міста та вечірня атмосфера.',
  },
  {
    id: 'i3',
    title: 'Лісова стежка',
    img: 'https://picsum.photos/id/1011/600/400',
    desc: 'Тиха стежка серед високих дерев.',
  },
  {
    id: 'i4',
    title: 'Пляж',
    img: 'https://picsum.photos/id/1012/600/400',
    desc: 'Пісок і море в ясний день.',
  },
  {
    id: 'i5',
    title: 'Поле з квітами',
    img: 'https://picsum.photos/id/1013/600/400',
    desc: 'Квітуче поле навесні.',
  },
];

export default function ImageCardGrid() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Галерея</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map((it) => (
          <article key={it.id} className="bg-white rounded overflow-hidden shadow-sm">
            <img src={it.img} alt={it.title} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
