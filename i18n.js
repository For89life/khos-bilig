/* i18n.js — МН | EN хэл солигч.
   Монгол хувилбар нь сайтын үндэст (/), англи нь /en/ дор байрлана.
   Товч нь JavaScript-ээр бичвэр солихгүй — харгалзах хуудас руу
   шууд холбоно. Ингэснээр Google хоёр хэлийг тусад нь индексжүүлнэ.

   Англи хуудсуудыг .claude/build-en.py үүсгэдэг. */
(function () {
  var PAGES = ['', 'gallery.html', 'partner.html'];

  /* одоогийн зам -> { lang, page } */
  function where() {
    var p = location.pathname.replace(/\/+$/, '/');
    var en = /^\/en(\/|$)/.test(p);
    var rest = en ? p.replace(/^\/en\/?/, '') : p.replace(/^\//, '');
    if (rest === 'index.html' || rest === '') rest = '';
    if (PAGES.indexOf(rest) === -1) rest = '';
    return { en: en, page: rest };
  }

  function href(lang, page) {
    return (lang === 'en' ? '/en/' : '/') + page;
  }

  function mount() {
    var hdr = document.querySelector('.hdr-in');
    if (!hdr || hdr.querySelector('.lang')) return;

    var st = document.createElement('style');
    st.textContent =
      '.lang{display:flex;margin-left:14px;border:1px solid rgba(255,255,255,.22);' +
      'border-radius:2px;overflow:hidden;flex:none}' +
      '.lang a{display:block;background:none;color:rgba(255,255,255,.62);' +
      "font:600 11px/1 'Inter',sans-serif;letter-spacing:.1em;padding:9px 11px;transition:.2s}" +
      '.lang a:hover{color:#fff}' +
      '.lang a.on{background:var(--gold,#B99537);color:#fff}' +
      '@media(max-width:920px){.lang{margin-left:auto;margin-right:4px}}';
    document.head.appendChild(st);

    var w = where();
    var box = document.createElement('div');
    box.className = 'lang';
    box.innerHTML =
      '<a href="' + href('mn', w.page) + '" hreflang="mn"' +
      (w.en ? '' : ' class="on" aria-current="true"') + '>МН</a>' +
      '<a href="' + href('en', w.page) + '" hreflang="en"' +
      (w.en ? ' class="on" aria-current="true"' : '') + '>EN</a>';

    var anchor = hdr.querySelector('.hdr-div') || hdr.querySelector('.burger');
    if (anchor) hdr.insertBefore(box, anchor); else hdr.appendChild(box);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
