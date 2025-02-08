.pricing-table-container {
    text-align: center;
    padding: 40px 0;
    font-family: Arial, sans-serif;
    width: 1401px;
    height: 964px;
    /* padding-left: 140px; */
  }

  /* Main Heading */
  .pricing-table-container h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 1rem;
    color: #4D3EE9;
    height: 60px;
  }
  
  .pricing-table-container p {
    
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .pricing-cards {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  /* Pricing Cards */
  .pricing-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    position: relative;
  }
  /* Advance Design */
  .highlight {
    position: absolute;
    top: -10px;
    left: 15px;
    background-color:#4D3EE9;
    color: #fff;
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 4px;
  }
  
  /* Card Headings */
  .pricing-card h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #312948F5;
    margin-bottom: 1rem;
  }
  
  .old-price {
    font-size: 1rem;
    color: #999;
    text-decoration: line-through;
    margin-left: 0.5rem;
  }
  
  .pricing-card ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    
  }
  
  .pricing-card ul li {
    margin-bottom: 0.5rem;
    color: #555;
  }

  .tick-mark {
    /* display: inline-block; */
    width: 19px;
    height: 19px;
   outline: 1.5px solid #4D3EE9;
    color: #4D3EE9;
    border-radius: 50%;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    /* font-size: 0.8rem; */
    margin-right: 10px;
  }
  
  /* Demo btn */
  .pricing-card button {
    background-color:  #4D3EE9;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
  }
  
  .pricing-card button:hover {
    background-color: #0E009D;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .pricing-cards {
      flex-direction: column;
      align-items: center;
    }
  
    .pricing-card {
      width: 90%;
    }
  }
  

























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
