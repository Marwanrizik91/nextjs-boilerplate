# Nextjs boilerplate for scaleable projects

## Technologies
- PostCSS
- Tailwind
- Storybook

## Styling
- Styling is done with PostCSS with plugins ***mixins, import, simple-vars, calc***
- ***Tailwind*** is used as a CSS framework
- Use CamelCase for defining CSS classes
- Write all Component-styles in separate `.module.css` files.
- 
## Repo Structure
- React Components are defined on `/components`
- React Templates are defined on `/layouts`
- Global Stylesheets are declared on `/styles`
- Multi-Purpose React Hooks are defined on `/hooks`
- Multi-Purpose TypeScript definitions are defined on `/types`
- React Context Providers are defined on `/providers`
- Build-time Data Fetching Scripts are defined on `/next-data`
- Storybook Configuration is done within `/.storybook`

## Linting
- Linting is done with ESLint, run lint to lint both CSS and JS
  - Or run separately `lint:js` / `lint:css`
  - to fix run `lint:fix`
  - for any changes in the configs check `.eslintrc.json`

## Formatting
- To format code run format script
- formatting is done using prettier
  - plugins: "prettier-plugin-tailwindcss"
  - prettier will run on all this files: `js,mjs,ts,tsx,md,mdx,json,yml,css`
 
## Commit guidelines
- This repo uses Husky to enhance commits
  - lint-staged for pre-commit
  - [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) check link for more info
  - [@commitlint/cli](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/cli/README.md)

## Tests
- Tests are already configured using jest and react-testing-library
- Example of a test file path:  `__tests__/index.test.mjs`

## Storybook
- Storybook Configs is done within `/.storybook`

### Component best practices
- All React Components should be placed within the `components` folder.
- Each Component should be placed, whenever possible, within a sub-folder, which we call the "Domain" of the Component
  - The domain represents where these Components belong to or where they will be used.
  - For example, Components used within Article Pages or that are part of the structure of an Article or the Article Layouts,
    should be placed within `components/Article`
- Each component should have its folder with the name of the Component
- The structure of each component folder follows the following template:
  ```text
  - ComponentName
    - index.tsx // the component itself
    - index.module.css // all styles of the component are placed there
    - index.stories.tsx // component Storybook stories
    - __tests__ // component tests (such as unit tests, etc)
      - index.test.mjs // unit tests should be done in ESM and not TypeScript
  ```
- React Hooks belonging to a single Component should be placed within the Component's folder
  - If the Hook as a wider usability or can be used by other components, it should be placed in the root `hooks` folder.
- If the Component has "sub-components" they should follow the same philosophy as the Component itself.
  - For example, if the Component `ComponentName` has a sub-component called `SubComponentName`,
    then it should be placed within `ComponentName/SubComponentName`

### Best practices for Component development in general

- Only spread props `{ ... }` on the definition of the Component (Avoid having a variable named `props`)
- Avoid importing `React`, only import the modules from React that you need
- When importing types, use `import type { NameOfImport } from 'module'`
- When defining a Component, use the `FC` type from React to define the type of the Component
  - When using `children` as a prop, use the `FC<PropsWithChildren<MyComponentProps>>` type instead
  - Alternatively you can define your type as `type MyComponentProps = PropsWithChildren<{ my other props }>`
- Each Props type should be prefixed by the name of the Component
- Components should always be the `default` export of a React Component file
- Avoid using DOM/Web APIs/`document`/`window` API access within a React Component.
  Use utilities or Hooks when you need a Reactive state
- Avoid making your Component too big. Deconstruct it into smaller Components/Hooks whenever possible
