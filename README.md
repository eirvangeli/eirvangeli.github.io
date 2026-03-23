# eirvangeli.github.io

Portfolio website for Eirini Vangeli, built with Jekyll and hosted on GitHub Pages.

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## Adding a New Project

Create a Markdown file in `_projects/` with the following front matter:

```yaml
---
title: "Project Name"
description: "Short description of the project."
cover: "/assets/images/projects/my-project/cover.jpg"
date: 2026-01-15
images:
  - "/assets/images/projects/my-project/01.jpg"
  - "/assets/images/projects/my-project/02.jpg"
---
```

Place project images in `assets/images/projects/<project-name>/`. The project will automatically appear on the home page grid, sorted by date (newest first).
