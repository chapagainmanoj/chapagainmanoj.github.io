---
path: react first blog post
date: 2020-11-29T05:04:49.128Z
title: Things no one told me before I started my first react project
description: Things no one told me before I started my first react project
---
When you start learning to react intuitive way is to dive right into React. There is no wrong with it. However, if you are not already familiar with the javascript standards like ECMAScript, you should learn it concurrently along the way. Besides React features and JSX one should be very familiar with Web APIs, and web standards such as HTML, CSS. 

And huge resource for the web is MDN Web Docs by Mozilla.  https://developer.mozilla.org/en-US/docs/Web/JavaScript

You need not go through all of it but if you are ever muddled by anything in javascript take a peek about it here. 

A few small projects are enough to fuel you for starting a frontend development journey. You need to learn few basic things:

1. component composition pattern

   * generic and composite components
   * passing props
   * higher-order components

A simple component composition example

```JSX
const Header = props => {
  return <h3>{props.title}</h3>
}

const Body = (props) => {
  return <p>{props.content}</p>
}

const Page = () => {
  return (
      <React.Fragment>
        <Header title='Hello! Guys.' />
        <Body content='It is nice' />
      </React.Fragment>
  )
}
```

I think rewriting all components from a css framework is total useless. Write presentational components that are very necessary. Container component should be based on usablity. For example,

* component to handle list and tables
* compoent to handle form and field controls
* toasters, confirm modals, image preview and slider components Component inheritance should be avoided in any cases.
  Making very generic Components could lead to less flexiblity and unchangable code. A balanced code have more reusablity and less over optimization/engineering. Some times you need to keep space for future features and improvements in your reusable modules. If you could anticipate it is better if not then just expect few will be come later.

2. asynchronous API calls A basic api call example

```jsx
const fetchData = async () => {
    try {
        const {data} = request({
        // methods and params
        });
        // use data to sth
    } catch {
        // handle error cases

    } finally {
        // wrap the api call and continue
    }
}
```

Basic thing to do is create a reusable / pluggable module for a api call that can handle all your use cases with few of these:

* success, error and finish callback, 
* processing flag, 
* error responce parser for your form module for form submit request and different error status
* handle for multiple response types like bolb, images and documents
* would be even better if it is pluggable with state management

3. form control and actions

   * form fields validation and field error handle
   * plugable with API call module

```jsx
const useField = (init) => {
  const [value, setValue] = useState(init);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return { value, onChange };
};

const LoginForm = () {
  const usernameField = useField();
  const passwordField = useField();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameField.value, passwordField.value);
    // call login api

  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input name="username" type="text" {...usernameField} />
      </div>
      <div>
        <label> Passworld</label>
        <input name="password" type="password" {...passwordField} />
      </div>
      <button className="button" type="password">
        Login
      </button>
    </form>
  );
}
```

4. webpack

to begin with webpack configuration could be huge pain at first. but after you hassel few times with it you can configure anything afterwards

* loader
* plugins
* env variable

A simple webpack config example.

```js
const path = require('path');

module.exports = {
  entry: {
      file1: './path/to/my/entry/file1.js',
      file2: './path/to/my/entry/file2.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
		rules: [
			{
				test: // file type regular expression,
				loader: "// loader moudle name",
				options: {
					name: "[name].[ext]",
				},
			},
		],
	},
	plugins: [
		new Plugins({ // plugin configs }),
	],
};
```

5. css and styles

React css-module seems most appealing, to write locally scoped css we we have but be have a problem here.

> local css modules style is overrided by css framework or other library or own global class

before this i didn't know about css specificity. [read more about it here](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

* one solution is using `!important` but it is not best practice and will creates a debugging hell.
* another way is to use `#[id]` as id selectors has highest specificity. we are currently using it.
* there is an hack to with using `.local` as default in local scoped css to increase specificity index. [Here is a hack.](https://github.com/css-modules/css-modules/issues/156).

```jsx
  <div className=`root ${style.red}`></div>
```

```css
:global(.root).red {
  composes: root from global;
  color: firebrick;
}
```

1. use *local* as a global name
2. prefix each css class with it

* similar to previous, to increase specificity index we can use a parent name to very root node of a component.

```jsx
  <div className='root'>
    <div className='red'></div>
  </div>
```

```css
.root > .red {
  color: firebrick;
}
```

6. file and directory structures Files and directory structures could lead to serious pain if you didn't propery address best structure according to your project.

* feature or business logic wise structure

```
        /reusable components
        /feature1
          /components or pages
          /main js
        /feature2
          /components or pages
          /main js
        /App.js
```

* component or content wise structure

```
         /components
            /component type 1
            /component type 2
            /main js
          /pages or main blocks
          /App.js
```

7. testing

* create own debugging pattern and tools