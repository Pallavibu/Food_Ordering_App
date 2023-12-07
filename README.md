# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement (refresh automatically)
- File Watching Algorithm - written in c++
- caching - Faster Builds
  Image Optimisation
  Minification(uses libraries)

<!-- Narendra modi - react
Amit shah - Parcel
Small Ministers (Packages) -->

- Bundle the things
- Compress the files
- Consistent Hashing(Huge Topic)
- Code splitting
- Differential Bundling - Parcel takes care of all the browser and give different bundles to our app based om the browser.
  It also supports older browsers also
- Diagnostic
- Better Error Suggestions - Error handlings
- HTTPS
- Tree shaking Algorithms
  It removes unused code
- Lazy mode
- Different dev and production bundles

/*
1. Header
    -logo
    -nav items
2. Body
    -Search
    -Restaurant Container
        -Restuarant Card
            -Img
            -Name of Res
            -Star Rating
            -Cuisine
            -Delivery Time
3. Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

Two types of Export/Import 

1. Normal export/import

export default Component;
import Component from "path";

2. Named export/import

export const Pallavi = ......
import {Pallavi} from "path"

# React Hooks

1. useState() - superpowerful state variables in react
2. useEffect() - it renders the page whenever the useeffect function is called


# Types of Routing in WebApp
1. Client Routing 
2. Server Routing
# Redux Toolkit

1. React-Redux library
2. Redux-Toolkit library

- install toolkit/@reduxjs and react-redux (two libraries)
- Build our own store
- connect our store to our app
- create a card slice
- dispatch action
- selector

# Types of testing (developer)
- Unit testing
- Integration testing
- end to end testing - e2e testing

# Setting up testing in our app
- install react testing library
- install jest
- install babel dependencies that are required when we are using jest along with babel
- Configure babel
- configure Parcel config file to disable default babel transpilation
- jest configuration (npx jest --init)
- install jsdom library
- install @babel/preset-react  - to make jsx work in test cases
- include @babel/preset-react inside my babel config
- install @testing-library/jest-dom - to make the test functions work (npm i -D @testing-library/jest-dom)