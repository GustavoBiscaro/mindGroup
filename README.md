# PROJECT - FINANCIAL CONTROL

## SERVER SIDE

## Models
### Sequelize
Sequelize is a powerful Node.Js ORM (Object-Relational Mapping) library, created with the aim to facilitate communication between javascript/typescript and SQL.

<ul>
<h2>Key Features:</h2>

<li><strong>Model Definition:</strong> Define database models using JavaScript classes, making it easy to represent tables and relationships.</li>

<li><strong>Querying:</strong> Sequelize offers a straightforward API for querying data, supporting raw queries, finders, filters, and associations.</li>

<li><strong>Transactions:</strong> Easily manage transactions to ensure data integrity and consistency across multiple operations. </li>

<li><strong>Migrations:</strong> Seamlessly update and rollback database schemas using migration files, keeping your database structure in sync with your application. </li>

<li><strong>Associations:</strong> Define relationships between models such as one-to-one, one-to-many, and many-to-many, and Sequelize handles foreign key constraints automatically.</li>

<li><storng>Hooks and Validations:</strong> Implement hooks for lifecycle events like beforeCreate, afterUpdate, etc., and define validations for model attributes.</li>

<li><strong>Support for Promises and async/await:</strong> Sequelize fully supports asynchronous operations, leveraging Promises and async/await syntax for cleaner, more readable code.</li>

## Security access login

### JSON Web Token (JWT)
<quote>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</quote>
<ul>
<h2>Key Features</h2>

<li><strong>Authorization:</strong> This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.</li>

<li><strong>Information Exchange:</strong> JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.</li>

</ul>

### Bcrypt
<quote>A library to help you hash passwords.</quote>

<ul>
    <li><strong>What is Password Hashing? </strong>Password Hashing is a process of converting an input password into a fixed-length string of characters, typically for the purpose of securely storing and transmitting the password.</li>
    <li><strong>What is bcrypt? </strong>bcrypt is a type of cryptographic algorithm used to securely store passwords. It scrambles a user's password into a unique code. This way, even if a thief takes the database, they won't be able to recover the original passwords readily.</li>
</ul>

#### How Does Bcrypt work?
* <b>Hashing: </b>Bcrypt processes a user's password using a sophisticated mathematical function. This function converts the password to a fixed-length string of characters that appear random and meaningless. The hashed value is what is kept in the database, not the original password. Because the hashing function is one-way, reversing the hash will not produce the original password.

* <b>Salting: </b>Salting: To improve security, bcrypt incorporates a random number called a salt. This salt is unique to each password and is attached to it before hashing. The combined value (password + salt) is then passed to the hashing function.


# CLIENT SIDE

## VITE

Before ES modules were available in browsers, developers had no native mechanism for authoring JavaScript in a modularized fashion. This is why we are all familiar with the concept of "bundling": using tools that crawl, process and concatenate our source modules into files that can run in the browser.

Over time we have seen tools like webpack, Rollup and Parcel, which greatly improved the development experience for frontend developers.

However, as we build more and more ambitious applications, the amount of JavaScript we are dealing with is also increasing dramatically. It is not uncommon for large scale projects to contain thousands of modules. We are starting to hit a performance bottleneck for JavaScript based tooling: it can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with Hot Module Replacement (HMR), file edits can take a couple of seconds to be reflected in the browser. The slow feedback loop can greatly affect developers' productivity and happiness.

Vite aims to address these issues by leveraging new advancements in the ecosystem: the availability of native ES modules in the browser, and the rise of JavaScript tools written in compile-to-native languages.

Slow Server Start
When cold-starting the dev server, a bundler-based build setup has to eagerly crawl and build your entire application before it can be served.

Vite improves the dev server start time by first dividing the modules in an application into two categories: dependencies and source code.

Dependencies are mostly plain JavaScript that do not change often during development. Some large dependencies (e.g. component libraries with hundreds of modules) are also quite expensive to process. Dependencies may also be shipped in various module formats (e.g. ESM or CommonJS).

Vite pre-bundles dependencies using esbuild. esbuild is written in Go and pre-bundles dependencies 10-100x faster than JavaScript-based bundlers.

Source code often contains non-plain JavaScript that needs transforming (e.g. JSX, CSS or Vue/Svelte components), and will be edited very often. Also, not all source code needs to be loaded at the same time (e.g. with route-based code-splitting).

Vite serves source code over native ESM. This is essentially letting the browser take over part of the job of a bundler: Vite only needs to transform and serve source code on demand, as the browser requests it. Code behind conditional dynamic imports is only processed if actually used on the current screen.

<img src="https://v2.vitejs.dev/assets/bundler.37740380.png" width="400">



## Axios 
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests. Looks like package fetch()

## React-icons 
Include popular icons in your React projects easly with react-icons

## React-Router-Dom
Create fasts react router in youy application.

## File JSX
React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

# Concepts
<strong>SPA (Single-page application)</strong>
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown.

This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.


# SCREENSHOTS
<ul>

  <li>
    <h3>Login</h3>

   ![Login](https://github.com/user-attachments/assets/23792acf-733e-4866-9fb1-114f75d48167) 

  <li>
      <h3>Register</h3>
      
   [![Register](https://github.com/user-attachments/assets/ec057deb-0111-4638-a0fc-7df264c3b97d)](https://github.com/GustavoBiscaro/mindGroup/issues/2#issue-2434094132)

  </li>
</ul>

# HOW RUN THIS PROJECT?
## Client Side
 cd vite-project<br>
  npm install<br>
  npm run dev

## Server Side
cd server<br>
npm run runDev
