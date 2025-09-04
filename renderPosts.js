// renderPosts.js
// Centralized rendering for post list and single post pages

(function(){
  const FAVORITES_STORAGE_KEY = "favorites";

  function getFavorites(){
    try { const raw = localStorage.getItem(FAVORITES_STORAGE_KEY); return raw ? JSON.parse(raw) : []; } catch(_) { return []; }
  }
  function setFavorites(ids){ try { localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids)); } catch(_) {} }
  function isFavorite(id){ return getFavorites().includes(id); }
  function toggleFavorite(id){
    const favs = getFavorites();
    const i = favs.indexOf(id);
    if (i === -1) favs.push(id); else favs.splice(i,1);
    setFavorites(favs);
    return favs.includes(id);
  }

  function el(tag, { classes = [], attrs = {}, text = "" } = {}) {
    const node = document.createElement(tag);
    classes.forEach((c) => node.classList.add(c));
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    if (text) node.textContent = text;
    return node;
  }

  function renderCard(post){
    const article = el("article", { classes: ["blog"], attrs: { "data-id": post.id } });
    const img = el("img", { classes: ["blog-image"], attrs: { src: post.image, alt: post.title } });
    article.appendChild(img);

    const content = el("div", { classes: ["blog-content"] });
    const h3 = el("h3", { classes: ["blog-title"] });
    const a = el("a", { attrs: { href: post.href }, text: post.title });
    h3.appendChild(a);
    const p = el("p", { classes: ["blog-description"], text: post.description });
    content.appendChild(h3);
    content.appendChild(p);
    article.appendChild(content);

    const authorRow = el("div", { classes: ["blog-author"] });
    authorRow.style.display = "flex";
    authorRow.style.alignItems = "center";
    const authorImg = el("img", { classes: ["author-profile-pic"], attrs: { src: post.authorPic, alt: post.authorName } });
    const meta = el("p", { classes: ["author-meta"], text: `${post.authorName} • ${post.date}` });

    const favBtn = el("button", { classes: ["favorite-btn"], attrs: { type: "button", title: "Add to favorites", "aria-label": "Add to favorites", style: "margin-left:auto; background:none; border:none; cursor:pointer; display:flex; align-items:center;" } });
    const heartIcon = el("i", { classes: [isFavorite(post.id) ? "fa-solid" : "fa-regular", "fa-heart"], attrs: { style: isFavorite(post.id) ? "color:#e0245e;" : "color:#888;" } });
    favBtn.appendChild(heartIcon);
    favBtn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      const nowFav = toggleFavorite(post.id);
      heartIcon.classList.toggle("fa-solid", nowFav);
      heartIcon.classList.toggle("fa-regular", !nowFav);
      heartIcon.style.color = nowFav ? "#e0245e" : "#888";
      favBtn.setAttribute("title", nowFav ? "Remove from favorites" : "Add to favorites");
      favBtn.setAttribute("aria-label", nowFav ? "Remove from favorites" : "Add to favorites");
    });

    authorRow.appendChild(authorImg);
    authorRow.appendChild(meta);
    authorRow.appendChild(favBtn);
    article.appendChild(authorRow);

    return article;
  }

  function renderList(listEl, posts, start = 0, count = posts.length){
    const slice = posts.slice(start, start + count);
    const frag = document.createDocumentFragment();
    slice.forEach((p) => frag.appendChild(renderCard(p)));
    listEl.appendChild(frag);
    return slice.length;
  }

  function fillPostPage(post){
    const hero = document.getElementById("post-hero");
    if (hero && post.image) hero.style.backgroundImage = `url("${post.image}")`;
    const t = document.getElementById("post-title"); if (t) t.textContent = post.title;
    const ap = document.getElementById("post-author-pic"); if (ap) ap.src = post.authorPic || "";
    const an = document.getElementById("post-author"); if (an) an.textContent = post.authorName || "";
    const ad = document.getElementById("post-date"); if (ad) ad.textContent = post.date || "";
    const content = document.getElementById("post-content"); if (content) content.innerHTML = post.content || "";
  }

  window.RenderPosts = { renderList, fillPostPage };
})();

