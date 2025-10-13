export function precioPokemon(stats) {
  const suma = stats.reduce((sum, stat) => sum + stat, 0);
  const precio = suma * 100;
  
  return precio.toLocaleString('es-AR');
}