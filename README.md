## Getting Started

### Project Structure

```
 - root folder
    - src
        - components
            - common
            - recipe
        - layout
        - pages
        - services
        - AppContext.tsx
        - setupTest.js
        - types.tsx
        - utils.ts
```

I have choosen this structure as scope of Application is very small
We can change structure little bit when application is larger in scope (with more features)

```
 - root folder
    - src
        - module_name_1
            - component
            - services
            - tests
            - types.tsx
            - utils.ts
            - context.tsx
        - module_name_2
            - component
            - services
            - tests
            - types.tsx
            - utils.ts
            - context.tsx
            ......
        - layout
        - pages
            - module_name
        - setupTest.js
```

It's more scalable if we split components based module / feature name

### Environment Variables
`.env` file

Place following variable

```
NEXT_PUBLIC_SPACE_ID=<Contentful-space-id>
NEXT_PUBLIC_ACCESS_TOKEN=<Contentful-access-token>
```

### Run Project

run `yarn install` or `npm install` in your root directory of project

then

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Run Tests

`yarn test`

Test cases covered following components
1. RecipeCard
2. RecipeDetails

### More things can be done on top of this

1. Optimization metrics (TTI)
2. E2E and Integration testing
3. Storybooks


### Github working convetion
* Its better not to push code directly in main branch, instead checkout feature branch and create pull request. But due short time, i directly pushed in main branch
* I mistakenly pushed app secrets (access token, and Space ID), so that's still in commit history. Please ignore that :). Though we have few ways to remove commit history, but didn't worked on that due to time limitation. 


