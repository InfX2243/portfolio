# Project Asset Upload Guide

Branch: `portfolio-v1`

Project images are served from the repository's `public/` directory. Upload each project's cover image to the exact path below and name it `cover.png`; the portfolio data already points to these paths.

| Project | Image path in repository | Suggested image |
|---|---|---|
| Moodly | `public/assets/projects/moodly/cover.png` | Main mood dashboard / daily check-in |
| Memory Game | `public/assets/projects/memory-game/cover.png` | Revamped game screen |
| GitDev360 | `public/assets/projects/gitdev360/cover.png` | GitHub profile analysis dashboard |
| Vaulix | `public/assets/projects/vaulix/cover.png` | Vault dashboard (never include real credentials) |
| AWS Academy Management Portal | `public/assets/projects/aws-academy-mhsscoe-website/cover.png` | Main portal dashboard |
| EchoClass | `public/assets/projects/echoclass/cover.png` | Class / lesson workspace |

## Image recommendations

- Use a clean screenshot at 16:9 or similar landscape proportions.
- Prefer PNG or WebP, optimized for web; keep text legible at card size.
- Remove personal data, emails, access tokens, student records, and any secrets before uploading.
- Keep each filename lowercase and exactly as listed; paths are case-sensitive on deployment.
- The detail pages currently reuse the cover image in their gallery. If you have more screenshots later, add them under the same project directory and add matching gallery entries in `src/data/portfolio.js`.

## Credentials

Credly badges are embedded from Credly using badge IDs already stored in `src/data/credentials.json`; no badge image upload is needed. The AWS Certified AI Practitioner credential is listed in the credential archive. Add its public verification URL and issue date to that JSON record when available.
