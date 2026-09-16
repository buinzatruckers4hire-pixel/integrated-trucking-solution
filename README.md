# Integrated Trucking Solution — Driver Site

Static HTML site for CDL-A driver recruiting.

## Pages

1. `index.html` — polished landing page
2. `apply.html` — pre-approval funnel (form)
3. `thank-you.html` — post-submit confirmation

## Brand colors

| Token | Hex | Use |
| --- | --- | --- |
| Deep Navy | `#002048` | Text, dark surfaces |
| Secondary Navy | `#023B6D` | Supporting dark tones |
| Primary Blue | `#156BAF` | Sparingly (links / accents) |
| Burgundy | `#8B1E3F` | Buttons, tabs, CTAs |
| Silver Gray | `#6C7174` | Secondary text |
| Page background | `#EBEEF1` | Cool silver-stone base |
| White | `#FFFFFF` | Cards / contrast |

Logo: `imgs/logo.png` · Hero photo: `imgs/hero-truck.jpg`

## Contact

- Admin email: `allan@integratedtruckingsolution.com`
- Driver phone: `(240) 981-5130`

## Form delivery

Applications on `apply.html` POST to FormSubmit and email the admin inbox.
First live submit requires FormSubmit’s one-time confirmation email.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.
