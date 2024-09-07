# React Component Toggle Button Dark Light And System Mode.

#### [🙏 DONATE ](https://buymeacoffee.com/sagarsuri) ❤️

#### Just Import the component and use this dark mode.

#### Make Sure You Will be using tailwindcss in our project

![Alt text](https://github.com/SagrSuri/vitetoggle/raw/main/assets/component.png)

## Installation

You can install the package via npm:

```bash
   npm install vitetoggle
```

           OR

```bash
   npm install vitetoggle@latest
```
```bash

You can Handle the design esily just change classes according to tailwindcss

```

```javascript
import React from "react";
import Toggle from 'vitetoggle'

function App() {
  return (
    <div className='dark:bg-gray-700 h-screen'>
      <Toggle
        buttonClass="p-2 rounded-full flex flex-col w-8 h-8 m-auto justify-center item-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 shadow-sm shadow-black dark:shadow-white"
        buttonIconClass="text-[1rem] dark:text-white"
        dropdownClass="bg-slate-500 dark:bg-slate-900 transition ease-out p-2 space-y-2 rounded-sm m-auto my-2 shadow-sm shadow-slate-700 "
        dropdownItemClass="flex w-full p-1 justify-center item-center rounded-md"
        dropdownHoverClass="hover:bg-slate-400 dark:hover:bg-slate-950"
        lightButtonClass="bg-gray-400 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        darkButtonClass="bg-gray-400 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        systemButtonClass="bg-gray-400 dark:bg-gray-800 flex justify-center gap-2 item-center align-middle"
        lightIconClass="text-black self-center dark:text-white"
        darkIconClass="text-black self-center dark:text-white"
        systemIconClass="text-black self-center dark:text-white"
      />
    </div>
  )
}

export default App

```
