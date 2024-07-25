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

# HOW RUN THIS PROJECT?
## Client Side
cd client
npm start

## Server Side
cd server
npm run runDev
