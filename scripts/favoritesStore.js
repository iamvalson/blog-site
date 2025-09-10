var FAVORITES_STORAGE_KEY = "favorites";

export function getFavorites(){
  try {
    var raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch(_) {
    return [];
  }
}

export function setFavorites(ids){
  try { localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids)); }
  catch(_) {}
}

export function isFavorite(id){
  var list = getFavorites();
  return list.indexOf(id) !== -1;
}

export function toggleFavorite(id){
  var list = getFavorites();
  var idx = list.indexOf(id);
  if (idx === -1) list.push(id); else list.splice(idx, 1);
  setFavorites(list);
  return list.indexOf(id) !== -1;
}


