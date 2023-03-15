# chaos-resume
This repository contains the layout an design for the Team Chaos resume website. All changes to the sites layout or function should be made here.

## Using the template
To use the template for your GitHub Pages website

1. Fork this repository into your account. The new repository should be named username.github.io, where username is your username (or organization name) on GitHub.
2. Replace the placeholder content in [src/data/profile.ts](src/data/profile.ts) with your personal details
3. Replace the image [src/data/profile.jpg](src/data/profile.jpg) with your profile image
4. Add projects to your resume by creating markdown files in [src/data/projects](src/data/projects). See details below.

More information about GitHub Pages can be found here: [https://pages.github.com/](https://pages.github.com/)

## Project format
The projects for the resume are stored in Markdown files under [src/data/projects](src/data/projects). These file musst have the following format.

```yml
role: Junior Smartass
title: Wine tasting
sector: Wine
from: 2021-09-01
to: 2022-01-31 #Optional for running projects
tasks:
  - Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - Ut enim ad minim veniam, quis nostrud exercitation
  - Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
tools:
  - Tool 1
  - Tool 2
  - Tool 3
  - Tool 4
  - Tool 5
  - Tool 6
---
# Here comes the project description as markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
```