# earendil-works.github.io

The index of Earendil's open source projects, published at
<https://earendil-works.github.io/>. It links to each project's GitHub
repository and, where one exists, its documentation site.

Built with [Astro](https://astro.build/) and Earendil's design system,
[Elanor](https://github.com/earendil-works/elanor), installed from npm. Pages are
rendered to static HTML at build time; no JavaScript ships to the browser.

## Adding a project

Edit [`src/projects.ts`](src/projects.ts).

## Development

```sh
npm install
npm run dev     # local dev server
npm run check   # type check
npm run build   # static site in dist/
```

Or use the Makefile: `make serve`, `make check`, `make build`, `make preview`,
`make clean`.

Pushes to `main` deploy to GitHub Pages through
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the
repository settings, set Pages' source to "GitHub Actions".
