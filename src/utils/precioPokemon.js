export function precioPokemon(nombre) {
  let hash = 0;
  for (let i = 0; i < nombre.length; i++) {
    hash += nombre.charCodeAt(i);
  }
  const precio = (hash % 1900) + 10000;
  return precio.toLocaleString('es-AR');
}