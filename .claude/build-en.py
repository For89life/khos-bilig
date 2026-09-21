# -*- coding: utf-8 -*-
"""
Англи хувилбарыг үүсгэнэ:  index/gallery/partner.html  ->  en/*.html

Монгол хуудсыг эх болгон авч, .claude/i18n-dict.json доторх толиор
бичвэрийг нь солиод, толгойн шошго, зам, hreflang-ийг нь англи болгоно.
Монгол хуудсаа засах бүрт дахин ажиллуулна:

    python .claude/build-en.py
"""
import io, os, re, json, sys
import html as htmlmod

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://mss.mn"

d = json.load(io.open(os.path.join(ROOT, ".claude", "i18n-dict.json"), encoding="utf-8"))
DICT, PAGE = d["DICT"], d["PAGE"]
ATTRS = ("alt", "aria-label", "title", "placeholder")   # data-svc-г ОГТ хөндөхгүй

# ── хуудас бүрийн англи толгой ──
META = {
 "index.html": dict(
   path="", title="Khos Bilig Security Holding LLC — Contract security services in Mongolia",
   desc=("Professional contract security company in Ulaanbaatar, Mongolia. Facility, bank, mining, "
         "cargo, construction, hotel, event and valuables-in-transit protection. 24/7 central "
         "operator, AI camera monitoring and an insurance-backed service.")),
 "gallery.html": dict(
   path="gallery.html", title="Photo gallery — Khos Bilig Security Holding LLC",
   desc=("Photographs of guarding duty, the control room, the rapid-response team and day-to-day "
         "operations at sites across Ulaanbaatar and the provinces of Mongolia.")),
 "partner.html": dict(
   path="partner.html", title="Request a quote — Khos Bilig Security Holding LLC",
   desc=("Choose the security services you need and request a quote. Facility, bank, mining, cargo, "
         "construction, hotel, event and valuables-in-transit protection across Mongolia.")),
}

SCHEMA_EN = """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "name": "Khos Bilig Security Holding LLC",
  "alternateName": ["ХОС БИЛИГ СЕКЬЮРИТИ ХОЛДИНГ ХХК", "Khos Bilig Security"],
  "description": "Contract security services in Mongolia: facility, bank and financial institution, mining, cargo and explosives escort, construction, hotel and retail, event and valuables-in-transit protection. 24/7 central operator, AI camera monitoring and an insurance-backed service.",
  "url": "https://mss.mn/en/",
  "inLanguage": "en",
  "logo": "https://mss.mn/img/logo.webp",
  "image": "https://mss.mn/img/og-cover.jpg",
  "email": "info@khosbilig.mn",
  "telephone": ["+976-7720-2525", "+976-9963-6785"],
  "foundingDate": "2018-02-05",
  "priceRange": "$$",
  "slogan": "Setting the standard for exceptional service",
  "knowsLanguage": ["mn", "en"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bayanbogd Plaza, 3rd floor, Suite 301, Ikh Toiruu",
    "addressLocality": "Chingeltei district, 5th khoroo",
    "addressRegion": "Ulaanbaatar",
    "postalCode": "15141",
    "addressCountry": "MN"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "areaServed": [
    { "@type": "City", "name": "Ulaanbaatar" },
    { "@type": "Country", "name": "Mongolia" }
  ],
  "sameAs": ["https://www.facebook.com/profile.php?id=61573189405777"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Security services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank and financial institution security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mineral and mining site security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cargo, transport and explosives escort security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction and development site security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Resort, hotel and retail security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concert, mass gathering and event security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Valuables-in-transit security" } }
    ]
  }
}
</script>"""


def hreflang(path):
    """Хоёр хэлний харилцан заалт."""
    mn = SITE + "/" + path
    en = SITE + "/en/" + path
    return ('<link rel="alternate" hreflang="mn" href="%s">\n'
            '<link rel="alternate" hreflang="en" href="%s">\n'
            '<link rel="alternate" hreflang="x-default" href="%s">' % (mn, en, mn))


def translate(html, page):
    """Текстийн зангилаа ба сонгосон шинж чанаруудыг англи болгоно."""
    over = PAGE.get(page, {})

    def esc(s):
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    def tr(s):
        k = htmlmod.unescape(s)            # &ndash; &copy; ... -> жинхэнэ тэмдэгт
        v = over[k] if k in over else DICT.get(k)
        return esc(v) if v is not None else None

    parts = re.split(r"(<[^>]*>)", html)
    skip = 0
    hit = 0
    for i, p in enumerate(parts):
        if p.startswith("<"):
            low = p.lower()
            if low.startswith("<script") or low.startswith("<style"):
                skip += 1
            elif low.startswith("</script") or low.startswith("</style"):
                skip = max(0, skip - 1)
            for a in ATTRS:                       # шинж чанарын орчуулга
                def sub(m, a=a):
                    v = m.group(2)
                    en = tr(v.strip())
                    return m.group(1) + (en if en else v) + m.group(3)
                p2 = re.sub(r'(\b' + a + r'=")([^"]*)(")', sub, p)
                if p2 != p:
                    p = p2
            parts[i] = p
            continue
        if skip or not p.strip():
            continue
        en = tr(p.strip())
        if en is None:
            continue
        lead = re.match(r"\s*", p).group(0)
        trail = re.search(r"\s*$", p).group(0)
        parts[i] = lead + en + trail
        hit += 1
    return "".join(parts), hit


def retarget(html):
    """Замуудыг /en/ хуудаснаас зөв заахаар болгоно (үндсэн замаар)."""
    html = re.sub(r'(src|href)="img/', r'\1="/img/', html)
    html = html.replace("url('img/", "url('/img/")
    html = re.sub(r'(src|href)="i18n\.js"', r'\1="/i18n.js"', html)
    html = re.sub(r'href="index\.html"', 'href="/en/"', html)
    html = re.sub(r'href="gallery\.html"', 'href="/en/gallery.html"', html)
    html = re.sub(r'href="partner\.html"', 'href="/en/partner.html"', html)
    return html


def build_page(src):
    meta = META[src]
    html = io.open(os.path.join(ROOT, src), encoding="utf-8").read()
    # эх хуудсанд аль хэдийн байгаа hreflang-ийг хасна (дахин ажиллуулахад давхардахгүй)
    html = re.sub(r'\n<link rel="alternate" hreflang="[^"]*" href="[^"]*">', "", html)

    html, hits = translate(html, src)
    html = retarget(html)

    html = html.replace('<html lang="mn">', '<html lang="en">', 1)
    html = re.sub(r'<meta name="description" content="[^"]*">',
                  '<meta name="description" content="%s">' % meta["desc"], html, count=1)
    html = re.sub(r"<title>.*?</title>", "<title>%s</title>" % meta["title"], html, count=1, flags=re.S)
    html = re.sub(r'<link rel="canonical" href="[^"]*">',
                  '<link rel="canonical" href="%s/en/%s">\n%s'
                  % (SITE, meta["path"], hreflang(meta["path"])), html, count=1)
    html = re.sub(r'<meta property="og:url" content="[^"]*">',
                  '<meta property="og:url" content="%s/en/%s">' % (SITE, meta["path"]), html, count=1)
    for tag in ("og:title", "twitter:title"):
        html = re.sub(r'<meta (property|name)="%s" content="[^"]*">' % tag,
                      lambda m, t=tag: '<meta %s="%s" content="%s">' % (m.group(1), t, meta["title"]),
                      html, count=1)
    for tag in ("og:description", "twitter:description"):
        html = re.sub(r'<meta (property|name)="%s" content="[^"]*">' % tag,
                      lambda m, t=tag: '<meta %s="%s" content="%s">' % (m.group(1), t, meta["desc"]),
                      html, count=1)
    html = html.replace('<meta property="og:site_name" content="ХОС БИЛИГ СЕКЬЮРИТИ ХОЛДИНГ ХХК">',
                        '<meta property="og:site_name" content="Khos Bilig Security Holding LLC">')
    html = html.replace('<meta property="og:locale" content="mn_MN">\n'
                        '<meta property="og:locale:alternate" content="en_US">',
                        '<meta property="og:locale" content="en_US">\n'
                        '<meta property="og:locale:alternate" content="mn_MN">')
    if src == "index.html":
        html = re.sub(r'<script type="application/ld\+json">.*?</script>', SCHEMA_EN, html, count=1, flags=re.S)

    out = os.path.join(ROOT, "en", src)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    io.open(out, "w", encoding="utf-8", newline="\n").write(html)

    chk = html
    for pat in (r"<script.*?</script>", r"<style.*?</style>", r"<!--.*?-->"):
        chk = re.sub(pat, "", chk, flags=re.S)
    chk = re.sub(r'data-svc="[^"]*"', "", chk)      # Google Form-той таарах ёстой, орчуулахгүй
    left = len(re.findall(r"[Ѐ-ӿ]", chk))
    return hits, left, len(html)


def add_hreflang_to_mn():
    """Монгол хуудсанд хосын заалтыг нэмнэ."""
    for src, meta in META.items():
        p = os.path.join(ROOT, src)
        s = io.open(p, encoding="utf-8").read()
        s = re.sub(r'\n<link rel="alternate" hreflang="[^"]*" href="[^"]*">', "", s)
        s = re.sub(r'(<link rel="canonical" href="[^"]*">)',
                   lambda m: m.group(1) + "\n" + hreflang(meta["path"]), s, count=1)
        io.open(p, "w", encoding="utf-8", newline="\n").write(s)


def build_sitemap():
    rows = []
    for src, meta in META.items():
        pri = "1.0" if src == "index.html" else ("0.8" if src == "partner.html" else "0.6")
        for pre in ("", "en/"):
            loc = "%s/%s%s" % (SITE, pre, meta["path"])
            alts = "".join(
                '\n    <xhtml:link rel="alternate" hreflang="%s" href="%s/%s%s"/>'
                % (lg, SITE, pr, meta["path"])
                for lg, pr in (("mn", ""), ("en", "en/"), ("x-default", "")))
            rows.append("  <url>\n    <loc>%s</loc>%s\n    <lastmod>2026-09-21</lastmod>\n"
                        "    <changefreq>monthly</changefreq>\n    <priority>%s</priority>\n  </url>"
                        % (loc, alts, pri))
    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n'
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
           + "\n".join(rows) + "\n</urlset>\n")
    io.open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8", newline="\n").write(xml)
    return len(rows)


if __name__ == "__main__":
    print("толь:", len(DICT), "мөр\n")
    for src in META:
        hits, left, size = build_page(src)
        flag = "цэвэр" if left == 0 else f"⚠ {left} кирилл тэмдэгт"
        print(f"  en/{src:<14} {hits:>3} мөр орчуулав | {size:>6} байт | {flag}")
    add_hreflang_to_mn()
    print("\n  монгол хуудсанд hreflang нэмэв")
    print("  sitemap.xml —", build_sitemap(), "хаяг")
