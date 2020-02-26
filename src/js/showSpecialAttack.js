
export default function showSpecialAttack(obj) {
  const { special } = obj;
  const arrSpecialAttack = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    arrSpecialAttack.push({
      id, name, icon, description,
    });
  });

  return arrSpecialAttack;
}
