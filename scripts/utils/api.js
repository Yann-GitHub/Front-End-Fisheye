// Récupère les données du fichier json et les retourne dans le bon format
export async function getPhotographers() {
  const res = await fetch('data/photographers.json');
  const data = await res.json();
  const photographers = data;
  // console.log(photographers);
  return photographers;
}
