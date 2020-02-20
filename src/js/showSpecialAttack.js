
export default function showSpecialAttack(obj) {
  const { special } = obj;
  const arrSpecialAttack = [];
  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    arrSpecialAttack.push({
      id, name, icon, description,
    });
  }
  return arrSpecialAttack;
}
