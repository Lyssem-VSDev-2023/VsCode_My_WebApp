Create Vite App
npm create vite .
------------------------------------

Refs: https://mdxjs.com/blog/v3/

Install MDX

For Vite JSX
npm install @mdx-js/react
npm install @mdx-js/rollup

Add the following code to the  vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const mdx = await import("@mdx-js/rollup");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx.default()],
});

You can now import MDX Modules in JSX files

To support Typescript:

npm install --save @types/mdx

Ref: https://community.redwoodjs.com/t/mdx-vite-guide-with-workaround-for-jest/4782


-----------------------------

Could be used t dynamically load menus 

 think there may have been some confusion as to what I was trying to achieve. I managed to solve the issue I was having and have shown my code below which shows how I solved it.

Separate File (ComponentIndex.js):

    let Components = {};

    Components['Component1'] = require('./Component1').default;
    Components['Component2'] = require('./Component2').default;
    Components['Component3'] = require('./Component3').default;

    export default Components
Main File (Main.js):

    import React, { Component } from 'react';
    import Components from './ComponentIndex';

    class Main extends Component {
        render () {
            var type = 'Component1'; // example variable - will change from user input
            const ComponentToRender = Components[type];
            return <ComponentToRender/>
        }
    }

    export default Main
    
https://stackoverflow.com/questions/48268507/react-dynamically-import-components






