// favorites.js
// Render only favorited posts on the Favorites page

import { el } from './utils.js';
import { getFavorites } from './favoritesStore.js';
import { POSTS } from './posts-data.js';

  function renderPost(post) {
    const article = el("article", {
      classes: ["blog"],
      attrs: { "data-id": post.id },
    });

    const img = el("img", {
      classes: ["blog-image"],
      attrs: { src: post.image, alt: post.title },
    });
    article.appendChild(img);

    const content = el("div", { classes: ["blog-content"] });

    const h3 = el("h3", { classes: ["blog-title"] });
    const a = el("a", { attrs: { href: post.href }, text: post.title });
    h3.appendChild(a);

    const p = el("p", {
      classes: ["blog-description"],
      text: post.description,
    });

    content.appendChild(h3);
    content.appendChild(p);
    article.appendChild(content);

    const authorRow = el("div", { classes: ["blog-author"] });
    const authorImg = el("img", {
      classes: ["author-profile-pic"],
      attrs: { src: post.authorPic, alt: post.authorName },
    });
    const meta = el("p", {
      classes: ["author-meta"],
      text: `${post.authorName} • ${post.date}`,
    });

    authorRow.appendChild(authorImg);
    authorRow.appendChild(meta);
    article.appendChild(authorRow);

    return article;
  }

  function renderFavorites() {
    const listEl = document.getElementById("blog-list");
    const emptyEl = document.getElementById("no-favorites");
    if (!listEl) return;

    const favoriteIds = new Set(getFavorites());
    const posts = POSTS.filter((p) => favoriteIds.has(p.id));

    listEl.innerHTML = "";
    if (!posts.length) {
      if (emptyEl) emptyEl.style.display = "block";
      return;
    } else {
      if (emptyEl) emptyEl.style.display = "none";
    }

    const frag = document.createDocumentFragment();
    posts.forEach((p) => frag.appendChild(renderPost(p)));
    listEl.appendChild(frag);
  }

  document.addEventListener("DOMContentLoaded", renderFavorites);
