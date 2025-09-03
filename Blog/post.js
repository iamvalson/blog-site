(function () {
  function qs(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  function findPostById(id) {
    return window.POSTS.find(p => Number(p.id) === Number(id));
  }

  function render(post) {
    if (!post) {
      document.getElementById("post-title").textContent = "Post not found";
      document.getElementById("post-content").textContent = "We couldn't find that post.";
      return;
    }

    const hero = document.getElementById("post-hero");
    hero.style.backgroundImage = `url(${post.image})`;

    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-author-pic").src = post.authorPic;
    document.getElementById("post-author").textContent = post.authorName;
    document.getElementById("post-date").textContent = post.date;

    document.getElementById("post-content").innerHTML = post.content;
    document.title = `${post.title} — Techpioneers`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const rawId = qs("id");
    let post = rawId ? findPostById(rawId) : findPostById(100);
    if (!post) post = window.POSTS[0];
    render(post);
  });
})();
