# Raymond Rick B. Ching — Portfolio

A responsive, minimalist black-and-white portfolio built with plain HTML, CSS, and JavaScript. Designed to publish on GitHub Pages without a build step.

## What's included

- **About** section introducing the mix of IT and interdisciplinary research.
- **Projects** section that fetches up to six recent public, non-fork, non-archived repositories from the GitHub API for `Rickr1ck`.
- **Certifications** section listing the six IT Specialist subjects supplied by the owner.
- **Research** section linking the two Google Docs supplied by the owner, without inventing titles or contents.
- Responsive navigation, keyboard focus styles, reduced-motion support, and a mobile layout.

## Preview locally

Open `index.html` in a browser. The page itself works locally; automatic GitHub repository loading generally works best when served over HTTP.

Optional local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and `favicon.svg` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your default branch (usually `main`) and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to finish deploying. The Pages panel will show the published URL.

To publish at `https://rickr1ck.github.io/`, name the repository exactly `Rickr1ck.github.io` (GitHub Pages account-site naming uses the account's exact username/case conventions). Otherwise, a project site URL will generally look like `https://rickr1ck.github.io/portfolio/`.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Before publishing

- Verify that each certification title exactly matches the certificate and add credential links or certificate images.
- Open both Google Docs links and confirm their sharing settings allow intended visitors to view them.
- Replace “Research document 01/02” with the real title, field, abstract, author role, and publication status after reviewing the papers.
- Add an email or other contact method if you want employers to contact you directly.
- Confirm permission before publishing confidential or institution-owned research.
- Review repository descriptions and pin the projects most relevant to the roles you want.

## Files

- `index.html` — page structure and content
- `styles.css` — layout, typography, and responsive styling
- `script.js` — mobile menu and public GitHub repository loading
- `favicon.svg` — simple monogram icon
