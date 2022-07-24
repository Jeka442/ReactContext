
## Installation


```bash
  Download or clone the repo
  dont forget to run npm install command in the terminal.
```
    
## Description
This is an example of react context use

In this app there is a main component that holds a counter state. It provides some functionality to the nested child components via react context to read/update this state.

In src/Modules folder we have the main component that define the context and wraps the layout component with the context provider.

In src/Context forlder we have the context declaration, creation, and the custom hook to use this context.

In src/Components folder we have variants of components that use our context by the custom hook
