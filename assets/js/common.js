$(document).ready(function () {
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
  });

  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });

  $("a").removeClass("waves-effect waves-light");

  $("#navbar .nav-link[href='/blog/']").closest(".nav-item").remove();
  $("#navbar .nav-link[href='/repositories/']").closest(".nav-item").remove();

  $("#navbar .nav-link[href='/projects/']").each(function () {
    const current = $(this).find(".sr-only").length ? '<span class="sr-only">(current)</span>' : "";
    $(this).html("creative" + current);
  });

  if (window.location.pathname.indexOf("/blog/") === 0 && !document.getElementById("kev-blog-style")) {
    const style = document.createElement("style");
    style.id = "kev-blog-style";
    style.textContent = `
      .post .post-header {
        border-bottom: 1px solid var(--global-blog-accent);
        padding-bottom: 0.8rem;
        margin-bottom: 1.75rem;
      }

      .post .post-header .post-title {
        color: var(--global-blog-accent);
        font-weight: 700;
      }

      .post .post-header .post-meta {
        color: var(--global-blog-accent);
      }

      .post .caption {
        color: var(--global-blog-accent);
      }
    `;
    document.head.appendChild(style);
  }
});
