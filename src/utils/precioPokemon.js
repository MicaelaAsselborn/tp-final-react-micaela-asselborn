export function precioPokemon(nombre) {
  let hash = 0;
  //Itera sobre el nombre de pokemon y obtiene la cantidad de caracteres en su nombre
  for (let i = 0; i < nombre.length; i++) {
    hash += nombre.charCodeAt(i);
  }

  const precio = (hash * 7919 % 1900) + 10000;
  return precio.toLocaleString('es-AR'); //Esto es para que ponga el punto
}