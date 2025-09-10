/* posts.js
   Dynamically render blog posts into .blog-list and handle a "Load more" button.
   
*/

import { POSTS } from './posts-data.js';
import { renderList } from './renderPosts.js';

// Prefer shared data source; fall back to local sample data
const posts = (Array.isArray(POSTS)) ? POSTS : [
  {
    id: 1,
    title: "Migrating to Linear 101",
    description:
      "Linear helps examine software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    authorName: "Jonathan Valentine",
    authorPic: "thumbnails/Mrbeast-profile.jpg",
    date: "19 Jan 2022",
    image: "blog_images/LINEAR 101.png",
    href: "post.html?id=1",
  },
  {
    id: 2,
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise of tools for creating, testing and managing them.",
    authorName: "Lana Steiner",
    authorPic: "thumbnails/sniperwolf.jpg",
    date: "19 Feb 2025",
    image: "blog_images/Javascript API.png",
    href: "post.html?id=2",
  },
  {
    id: 3,
    title: "Bill Walsh: Leadership lessons",
    description:
      "Want the secrets of transforming a 2–14 team into a 3x Super Bowl winning dynasty?",
    authorName: "Divine Valentine",
    authorPic: "thumbnails/Csdojo.jpg",
    date: "26 Jun 2024",
    image: "blog_images/Bil_walsh.png",
    href: "post.html?id=3",
  },
  {
    id: 4,
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    authorName: "Adeshola Jibola",
    authorPic: "thumbnails/channels4_profile.jpg",
    date: "13 Nov 2025",
    image: "blog_images/Mental models.png",
    href: "post.html?id=4",
  },
  {
    id: 5,
    title: "What is Wireframing",
    description:
      "Introduction to wireframing and its principles. Learn from the best in the industry.",
    authorName: "Paul Obasi",
    authorPic: "thumbnails/picture2.webp",
    date: "31 Aug 2025",
    image: "blog_images/Wireframing.png",
    href: "post.html?id=5",
  },
  {
    id: 6,
    title: "How collaboration makes us better designers",
    description:
      "Collaboration strengthens teams and improves individual designs.",
    authorName: "Muktar Ayotunde",
    authorPic: "thumbnails/veritasium.jpg",
    date: "25 Nov 2022",
    image: "blog_images/collaborations.png",
    href: "post.html?id=6",
  },
  {
    id: 7,
    title: "Our top 10 JavaScript frameworks to use",
    description:
      "Frameworks speed development with extensive features and functionality.",
    authorName: "Favour Adetunmibi",
    authorPic: "thumbnails/hq720.avif",
    date: "29 Oct 2027",
    image: "blog_images/Javascript Frameworks.png",
    href: "post.html?id=7",
  },
  {
    id: 8,
    title: "Podcast: Creating a better CX community",
    description:
      "Starting a community doesn't have to be complicated — here's how it works.",
    authorName: "Kareemat Denver",
    authorPic: "thumbnails/Mrbeast-profile.jpg",
    date: "19 Jul 2024",
    image: "blog_images/Podcast.png",
    href: "post.html?id=8",
  },
  {
    id: 9,
    title: "Cascading Style Sheets",
    description:
      "Dive into the depths of CSS with the best practices and tips.",
    authorName: "Paul Obasi",
    authorPic: "thumbnails/my-channel.jpeg",
    date: "28 Jan 2026",
    image: "blog_images/css.png",
    href: "post.html?id=9",
  },
];

/* ---------- Config ---------- */
let INITIAL_LOAD = 6; // default initial posts
let LOAD_MORE_BY = 3; // default increment
const listEl = document.getElementById("blog-list");
const loadBtn = document.getElementById("loading");

// Allow per-page override via data attributes on #blog-list
if (listEl) {
  const attrInit = listEl.getAttribute("data-initial-load");
  const attrMore = listEl.getAttribute("data-load-more");
  const parsedInit = attrInit ? parseInt(attrInit, 10) : NaN;
  const parsedMore = attrMore ? parseInt(attrMore, 10) : NaN;
  if (!Number.isNaN(parsedInit)) INITIAL_LOAD = parsedInit;
  if (!Number.isNaN(parsedMore)) LOAD_MORE_BY = parsedMore;
}

let renderedCount = 0;

/* ---------- Shared ---------- */
// no longer needed; using RenderPosts module for UI

/* render a single post */
function renderPost(post) {
  if (window.RenderPosts && window.RenderPosts.renderCard) {
    return window.RenderPosts.renderCard(post);
  }
  // Fallback should rarely run; RenderPosts handles UI consistently
  const a = el("a", { attrs: { href: post.href }, text: post.title });
  const h3 = el("h3", { classes: ["blog-title"] });
  h3.appendChild(a);
  const p = el("p", { classes: ["blog-description"], text: post.description });
  const content = el("div", { classes: ["blog-content"] });
  content.appendChild(h3);
  content.appendChild(p);
  const img = el("img", { classes: ["blog-image"], attrs: { src: post.image, alt: post.title } });
  const article = el("article", { classes: ["blog"], attrs: { "data-id": post.id } });
  article.appendChild(img);
  article.appendChild(content);
  return article;
}

/* render posts */
function renderPosts(start = 0, count = posts.length) {
  if (!listEl) return;
  const added = renderList(listEl, posts, start, count);
  renderedCount += added;
  updateLoadButton();
}

/* toggle load button */
function updateLoadButton() {
  if (!loadBtn) return;
  if (renderedCount >= posts.length) {
    loadBtn.disabled = true;
    loadBtn.textContent = "No more posts";
    loadBtn.style.opacity = "0.6";
    loadBtn.style.cursor = "default";
  } else {
    loadBtn.disabled = false;
    loadBtn.textContent = "Load more";
    loadBtn.style.opacity = "1";
    loadBtn.style.cursor = "pointer";
  }
}

/* init */
function init() {
  if (!listEl) {
    console.error("Missing #blog-list container.");
    return;
  }
  renderPosts(0, INITIAL_LOAD);

  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      renderPosts(renderedCount, LOAD_MORE_BY);
      setTimeout(() => {
        const last = listEl.lastElementChild;
        if (last) last.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
