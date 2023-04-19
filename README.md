# Budgeting App

The Full Stack Budgeting App is a React application that allows users to perform CRUD (create, read, update, delete) operations on a single resource. The application includes a navigation bar that features the app name and a button to create a new resource.

The Index page displays all resources in the database table and provides a clear and thoughtful presentation of the data. Clicking on a single resource leads to a Show page that presents more detailed information about that specific resource.

Users can create a new resource by clicking the button in the navigation bar, which leads to a page with a form to input the necessary data. The forms are properly labeled, and the type of inputs is appropriately set, such as using "number" for numeric input.

When a new resource form is submitted, the resource is created in the database, and the user is directed to the new resource's Show page. The Show page includes a button to edit the current resource, leading to a form page with pre-filled data that can be edited. When an edited resource form is submitted, the resource is updated in the database, and the user is redirected to the updated resource's Show page.

The Show page also includes a button to delete the current resource. The front-end application performs a calculation based on the resource's data, which is displayed to the user on the Index page. For example, the bank account total is visible, and the CSS changes based on the value, using greenish color for balances over 100, yellowish for balances between 0 and 100, and reddish for balances less than 0.

Overall, this app provides users with a clear and easy-to-use budgeting tool that can be tailored to their specific needs.



### Mark Roberston

<a href="https://trello.com/b/hooDP5Pu/budgeting-app#" target="_blank">Trello Board link</a><br>

<a href="https://github.com/mark-robertson" target="_blank">GitHub link</a><br>

<br><br><br><br><br><br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
