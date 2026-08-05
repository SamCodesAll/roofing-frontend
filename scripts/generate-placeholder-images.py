"""
Generates original, locally-owned SVG illustrations to replace every
external Unsplash reference in the roofing website project.

These are procedurally drawn scenes (not downloaded from anywhere), using
the site's actual brand tokens, so there is zero external dependency and
zero licensing ambiguity. They're intentionally designed to be easy to
swap for real photography later — see the README note generated alongside.
"""
import os

BASE = "src/assets/images"

# Brand tokens (matches src/index.css @theme)
PRIMARY = "#0F4C81"
PRIMARY_DARK = "#0A3660"
PRIMARY_DARKER = "#061E37"
SECONDARY = "#2C6E91"
ACCENT = "#F97316"
ACCENT_DARK = "#B84C08"
SUCCESS = "#16A34A"
WHITE = "#FFFFFF"
CLOUD = "#EAF1F7"


def house_silhouette(x, y, scale, roof_color, wall_color):
    return f'''
    <g transform="translate({x},{y}) scale({scale})">
      <polygon points="-70,0 0,-55 70,0" fill="{roof_color}"/>
      <rect x="-55" y="0" width="110" height="70" fill="{wall_color}"/>
      <rect x="-15" y="30" width="30" height="40" fill="{PRIMARY_DARKER}" opacity="0.55"/>
      <rect x="-42" y="14" width="20" height="18" fill="{CLOUD}" opacity="0.85"/>
      <rect x="22" y="14" width="20" height="18" fill="{CLOUD}" opacity="0.85"/>
    </g>'''


def sun(cx, cy, r, color=ACCENT):
    rays = ""
    import math
    for i in range(8):
        a = i * (math.pi / 4)
        x1, y1 = cx + math.cos(a) * (r + 6), cy + math.sin(a) * (r + 6)
        x2, y2 = cx + math.cos(a) * (r + 16), cy + math.sin(a) * (r + 16)
        rays += f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{color}" stroke-width="3" stroke-linecap="round" opacity="0.5"/>'
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{color}" opacity="0.85"/>{rays}'


def cloud(cx, cy, scale=1, color=WHITE, opacity=0.55):
    return f'''<g transform="translate({cx},{cy}) scale({scale})" opacity="{opacity}">
      <ellipse cx="0" cy="0" rx="28" ry="16" fill="{color}"/>
      <ellipse cx="-20" cy="6" rx="18" ry="12" fill="{color}"/>
      <ellipse cx="20" cy="6" rx="18" ry="12" fill="{color}"/>
    </g>'''


def sky_bg(w, h, top=PRIMARY, bottom=SECONDARY, grad_id="sky"):
    return f'''<defs>
      <linearGradient id="{grad_id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="{top}"/>
        <stop offset="100%" stop-color="{bottom}"/>
      </linearGradient>
    </defs>
    <rect width="{w}" height="{h}" fill="url(#{grad_id})"/>'''


def wrap_svg(w, h, body, viewbox=None):
    vb = viewbox or f"0 0 {w} {h}"
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{w}" height="{h}">
{body}
</svg>'''


def save(path, content):
    full = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w") as f:
        f.write(content)
    print("wrote", full)


# ---------------------------------------------------------------------------
# HERO illustrations (wide, 1600x900 landscape scenes)
# ---------------------------------------------------------------------------

def hero_scene(top=PRIMARY, bottom=SECONDARY, houses=True, extra=""):
    w, h = 1600, 900
    body = sky_bg(w, h, top, bottom)
    body += sun(1350, 160, 70)
    body += cloud(260, 140, 1.6)
    body += cloud(700, 90, 1.1, opacity=0.35)
    if houses:
        body += house_silhouette(420, 620, 3.2, ACCENT_DARK, WHITE)
        body += house_silhouette(880, 660, 4.2, ACCENT, CLOUD)
        body += house_silhouette(1280, 610, 2.6, PRIMARY_DARK, WHITE)
    body += f'<rect x="0" y="760" width="{w}" height="140" fill="{PRIMARY_DARKER}" opacity="0.9"/>'
    body += extra
    return wrap_svg(w, h, body)


save("hero/hero-home.webp", hero_scene())
save("hero/hero-roof-repair.webp", hero_scene(top=PRIMARY_DARK, bottom=PRIMARY))
save("hero/hero-roof-replacement.webp", hero_scene(top=SECONDARY, bottom=PRIMARY))
save("hero/hero-patio.webp", hero_scene(top=PRIMARY, bottom=SUCCESS, houses=False,
     extra=house_silhouette(800, 640, 5, ACCENT, WHITE)))
save("hero/hero-electrical.webp", hero_scene(top=PRIMARY_DARKER, bottom=PRIMARY))
save("hero/hero-gallery.webp", hero_scene(top=SECONDARY, bottom=PRIMARY_DARK))
save("hero/hero-reviews.webp", hero_scene(top=PRIMARY, bottom=SECONDARY))
save("hero/hero-about.webp", hero_scene(top=PRIMARY_DARK, bottom=SECONDARY))
save("hero/hero-contact.webp", hero_scene(top=SECONDARY, bottom=PRIMARY))
save("hero/hero-service-areas.webp", hero_scene(top=PRIMARY, bottom=PRIMARY_DARK))

# ---------------------------------------------------------------------------
# ABOUT illustrations
# ---------------------------------------------------------------------------

def about_story_scene():
    w, h = 900, 900
    body = sky_bg(w, h, PRIMARY, SECONDARY, "aboutsky")
    body += sun(730, 150, 55)
    body += cloud(180, 140, 1.3)
    body += house_silhouette(450, 560, 5.5, ACCENT, WHITE)
    body += f'<rect x="0" y="700" width="{w}" height="200" fill="{PRIMARY_DARKER}" opacity="0.9"/>'
    body += (f'<g stroke="{ACCENT_DARK}" stroke-width="6" stroke-linecap="round">'
             f'<line x1="600" y1="700" x2="650" y2="480"/><line x1="640" y1="700" x2="690" y2="480"/>' +
             "".join(f'<line x1="{600+i*4}" y1="{700-i*40}" x2="{640+i*4}" y2="{700-i*40}"/>' for i in range(1, 6)) +
             '</g>')
    return wrap_svg(w, h, body)


save("about/company-story.svg", about_story_scene())

TEAM_COLORS = [PRIMARY, SECONDARY, ACCENT, SUCCESS]


def team_portrait(color):
    w, h = 500, 500
    body = f'<rect width="{w}" height="{h}" fill="{CLOUD}"/>'
    body += f'<circle cx="250" cy="200" r="110" fill="{color}" opacity="0.15"/>'
    body += f'<path d="M120,480 Q250,300 380,480 Z" fill="{color}"/>'
    body += f'<circle cx="250" cy="180" r="80" fill="{color}"/>'
    return wrap_svg(w, h, body)


for i, c in enumerate(TEAM_COLORS, start=1):
    save(f"team/team-{i}.svg", team_portrait(c))

# ---------------------------------------------------------------------------
# SERVICES illustrations (homepage Featured Services cards)
# ---------------------------------------------------------------------------

def service_card_scene(color_top, color_bottom, motif):
    w, h = 800, 600
    body = sky_bg(w, h, color_top, color_bottom, f"svc{motif}")
    body += sun(660, 110, 40)
    body += house_silhouette(400, 430, 3.6, WHITE, CLOUD)
    if motif == "repair":
        body += f'<rect x="330" y="330" width="20" height="60" fill="{ACCENT}" transform="rotate(25 340 360)"/>'
    if motif == "replacement":
        body += f'<polygon points="330,300 400,255 470,300" fill="{ACCENT}"/>'
    if motif == "patio":
        body += f'<rect x="250" y="430" width="300" height="10" fill="{ACCENT}"/>'
        body += f'<rect x="260" y="440" width="10" height="80" fill="{ACCENT_DARK}"/>'
        body += f'<rect x="530" y="440" width="10" height="80" fill="{ACCENT_DARK}"/>'
    if motif == "electrical":
        body += f'<rect x="380" y="330" width="40" height="60" rx="4" fill="{SUCCESS}"/>'
        body += f'<line x1="400" y1="330" x2="400" y2="300" stroke="{SUCCESS}" stroke-width="4"/>'
    return wrap_svg(w, h, body)


save("services/roof-repair-card.svg", service_card_scene(PRIMARY, PRIMARY_DARK, "repair"))
save("services/roof-replacement-card.svg", service_card_scene(SECONDARY, PRIMARY, "replacement"))
save("services/patio-construction-card.svg", service_card_scene(PRIMARY, SUCCESS, "patio"))
save("services/electrical-services-card.svg", service_card_scene(PRIMARY_DARK, PRIMARY, "electrical"))

# ---------------------------------------------------------------------------
# GALLERY / BEFORE-AFTER illustrations (4 categories x before/after)
# ---------------------------------------------------------------------------

def gallery_scene(color_top, color_bottom, worn, label):
    w, h = 900, 900
    body = sky_bg(w, h, color_top, color_bottom, f"gal{label}")
    body += sun(760, 140, 50)
    roof_color = "#9CA3AF" if worn else ACCENT
    wall_color = "#E5E7EB" if worn else WHITE
    body += house_silhouette(450, 560, 5.8, roof_color, wall_color)
    if worn:
        body += '<line x1="380" y1="480" x2="430" y2="520" stroke="#6B7280" stroke-width="4"/>'
        body += '<line x1="470" y1="470" x2="510" y2="510" stroke="#6B7280" stroke-width="4"/>'
    body += f'<rect x="0" y="720" width="{w}" height="180" fill="{PRIMARY_DARKER}" opacity="0.85"/>'
    return wrap_svg(w, h, body)


CATEGORIES = [
    ("roof-repair", PRIMARY_DARK, PRIMARY),
    ("roof-replacement", SECONDARY, PRIMARY),
    ("patio-construction", PRIMARY, SUCCESS),
    ("electrical-services", PRIMARY_DARKER, PRIMARY),
]

for slug, top, bottom in CATEGORIES:
    save(f"gallery/{slug}-before.svg", gallery_scene(top, bottom, worn=True, label=slug + "b"))
    save(f"gallery/{slug}-after.svg", gallery_scene(top, bottom, worn=False, label=slug + "a"))
    save(f"before-after/{slug}-before.svg", gallery_scene(top, bottom, worn=True, label=slug + "bb"))
    save(f"before-after/{slug}-after.svg", gallery_scene(top, bottom, worn=False, label=slug + "aa"))

print("DONE")
