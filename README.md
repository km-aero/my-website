# My personal website

This is a Next.js application based on the [nim template](https://github.com/ibelick/nim). The goal of this website is to have a central space for everything me. Currently this includes a summarised CV, and a blog.

## Requirements

- Node (See `.nvmrc` for current node version in use)
- (Optional) Node Version Manager.

## Getting Started

```bash
## use below command if you have node version manager. This will install the correct version of node.
# nvm install
npm install
npm run dev
```

The above will run the development version of the website locally which can be accessed at <http://localhost:3000>.

## Production

Website is currently hosted on Vercel at <https://www.kbmm.cloud>. The Vercel account and deployment of the website is provisioned using OpenTofu in a [separate repository](https://github.com/km-aero/tf-my-website). Deployments of the website to vercel can be tracked in the [Deployments](https://github.com/km-aero/my-website/deployments) section on the right.
