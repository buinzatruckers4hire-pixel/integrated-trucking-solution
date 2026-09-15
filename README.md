# Integrated Trucking Solution — Driver Funnel

Static HTML driver pre-approval funnel modeled after [drivers.opentruckingjobs.com](https://drivers.opentruckingjobs.com).

## Pages

- `index.html` — landing + application form
- `thank-you.html` — post-submit confirmation

## Brand

| Token | Hex |
| --- | --- |
| Primary Blue | `#156BAF` |
| Deep Navy | `#002048` |
| Secondary Navy | `#023B6D` |
| Silver Gray | `#6C7174` |
| White | `#FFFFFF` |

Logo: `imgs/logo.png`

## Contact

- Admin email: `allan@integratedtruckingsolution.com`
- Driver phone: `(240) 981-5130`

## Form delivery

Applications POST to FormSubmit and email `allan@integratedtruckingsolution.com`.
On first live submit, FormSubmit will send a one-time confirmation email to activate the inbox.

After deploy, open `index.html` and confirm the hidden `_next` field resolves to your live `thank-you.html` URL (the script sets this automatically).

## Local preview

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
