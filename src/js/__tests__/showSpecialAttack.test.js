
import heroes from '../data';

import showSpecialAttack from '../showSpecialAttack';

test('Must show special attaks', () => {
  const received = showSpecialAttack(heroes);
  const expected = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
  ];
  expect(received).toEqual(expected);
});
