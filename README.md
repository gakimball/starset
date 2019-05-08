# startsetsound.com

> Front-end code for starsetsound.com

## Requirements

Requires Node.js.

```bash
brew install nvm
nvm install node
```

## Setup

```bash
git clone git@github.com:gakimball/starset
cd starset
npm i
```

## Commands

- `npm start`: develop the site.
- `npm run deploy`: create a new release for GitHub pages. **Make sure you've got a clean working directory in Git.**
- `npm run lint`: lint the code for style errors.

## File Structure

- `/src`: core site files
  - `/assets`: images, fonts, etc.
  - `/components`: reusable UI elements
  - `/pages`: site pages. The URL will be the same as the file name
    - `/projects`: any file in here with an `.mdx` extension will use the `<ProjectTemplate />` component as a wrapper
  - `/utils`: utility functions
- `/static`: anything in here will be copied to the root of the site
- `.gitignore`: Git will not check in these files
- `gatsby-config.js`: Gatsby configuration
- `package.lock.json`: npm lockfile. You never need to edit this
- `package.json`: build dependencies
- `README.md`: you're reading it

The build process also generates these files, which you don't need to mess with:

- `/.cache`: used by Gatsby to speed up the build process
- `/node_modules`: build dependencies are stored here
- `/public`: the final site is put here. This is what actually gets deployed
