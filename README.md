# portfolio-3

This is my third portforlio page. It's a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Storyblok

I've chosen to use Storyblok as the headless CMS for this portfolio, since it offers free hosting.

To run the project locally I'm using `local-ssl-proxy` and therefore I have modified the `dev` script so it starts the proxy. This is described on Storyblok's docs here: https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-13-in-5-minutes

## Code rules

### CMS Components

There will be three different types of components:

1. Page Components: They are different types of pages.
2. Block Components: They can only be placed inside Page Components and make up the sections of each page.
3. Embedded Components: They can be placed inside Block Components and are used to display content.

### Naming

The names of the components should be in snake case when sent from the CMS. When they are used in the code they should be in camel case.

Some block components will reflect the 12 column grid of the page like `columns_8_4_block` that will have a large column and a small column. The react component will be named `Columns84Block`.
