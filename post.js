(function () {
  function qs(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  function findPostById(id) {
    return window.POSTS.find((p) => Number(p.id) === Number(id));
  }

  function render(post) {
    if (!post) {
      document.getElementById("post-title").textContent = "Post not found";
      document.getElementById("post-content").textContent =
        "We couldn't find that post.";
      return;
    }

    if (window.RenderPosts && window.RenderPosts.fillPostPage) {
      window.RenderPosts.fillPostPage(post);
    } else {
      const hero = document.getElementById("post-hero");
      hero.style.backgroundImage = `url("${post.image}")`;
      document.getElementById("post-title").textContent = post.title;
      document.getElementById("post-author-pic").src = post.authorPic;
      document.getElementById("post-author").textContent = post.authorName;
      document.getElementById("post-date").textContent = post.date;
      document.getElementById("post-content").innerHTML = post.content;
    }
    document.title = `${post.title} — Techpioneers`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const rawId = qs("id");
    let post = rawId ? findPostById(rawId) : findPostById(100);
    if (!post) post = window.POSTS[0];
    render(post);

    const backLink = document.getElementById("back-link");
    if (backLink) {
      backLink.addEventListener("click", function (e) {
        e.preventDefault();
        if (window.history.length > 1) {
          window.history.back();
        } else if (document.referrer) {
          window.location.href = document.referrer;
        } else {
          window.location.href = "index.html";
        }
      });
    }

    // Contact form validation
    const form = document.getElementById("contact-form");
    if (form) {
      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const messageInput = document.getElementById("contact-message");
      const errName = document.getElementById("error-name");
      const errEmail = document.getElementById("error-email");
      const errMessage = document.getElementById("error-message");
      const success = document.getElementById("contact-success");

      function validateEmail(value) {
        email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return email_pattern.test(value);
      }

      function clearErrors() {
        [errName, errEmail, errMessage].forEach(
          (el) => el && (el.textContent = "")
        );
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        let valid = true;
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name) {
          errName.textContent = "Please enter your name.";
          valid = false;
        }
        if (!email) {
          errEmail.textContent = "Please enter your email.";
          valid = false;
        } else if (!validateEmail(email)) {
          errEmail.textContent = "Please enter a valid email address.";
          valid = false;
        }
        if (!message || message.length < 10) {
          errMessage.textContent = "Message should be at least 10 characters.";
          valid = false;
        }

        if (!valid) return;

        // Simulate successful submission
        form.reset();
        if (success) {
          success.style.display = "inline";
          setTimeout(() => (success.style.display = "none"), 3500);
        }
      });
    }
  });
})();
