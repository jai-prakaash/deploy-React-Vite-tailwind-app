import React from 'react';

const DeploymentGuide = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        How to Create and Deploy a React + Vite App with Tailwind CSS on GitHub Pages
      </h1>

      <p className="text-lg mb-6">
        This guide walks you through the process of creating a React app with Vite, adding Tailwind CSS for styling, and deploying it to GitHub Pages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Steps</h2>

      <ol className="list-decimal pl-5 mb-6">
        <li>
          <h3 className="text-xl font-semibold mb-2">Create a React App with Vite</h3>
          <p>First, create a new React app using Vite. Run the following command:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>npm create vite@latest &lt;project-name&gt; -- --template react</code>
          </pre>
          <p>For example, to create a project called <code>my-project</code>, run:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>npm create vite@latest my-project -- --template react</code>
          </pre>
          <p>Then, navigate into the newly created project folder:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>cd my-project</code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Install Tailwind CSS and Dependencies</h3>
          <p>Install Tailwind CSS, PostCSS, and Autoprefixer as development dependencies:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>npm install -D tailwindcss@3 postcss autoprefixer</code>
          </pre>
          <p>Then, generate the Tailwind configuration files:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>npx tailwindcss init -p</code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Configure Tailwind CSS</h3>
          <h4 className="text-lg font-semibold mb-2">Configure Template Paths</h4>
          <p>In the <code>tailwind.config.js</code> file, specify the paths to all of your template files:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`/** @type {import('tailwindcss').Config} */}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            </code>
          </pre>
          <h4 className="text-lg font-semibold mb-2">Add Tailwind Directives to CSS</h4>
          <p>In the <code>src/index.css</code> file, add the Tailwind directives for the <code>base</code>, <code>components</code>, and <code>utilities</code> layers:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Run the Development Server</h3>
          <p>Now, you can start the development server to see your app in action:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>npm run dev</code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Start Using Tailwind in Your Project</h3>
          <p>You can now start using Tailwind classes in your components. For example, modify <code>App.jsx</code> to use Tailwind:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}`}
            </code>
          </pre>

          <p>Now complete your project and make the chages you want to do in your projectss.</p>
        </li>



        <li>
          <h3 className="text-xl font-semibold mb-2">Making the Git repository and publishing files and folders in it</h3>
          <p>If you have already initialized Git in the folder,you dont need to Steps 6-11. </p>
          <p>If you haven't already initialized Git in the folder, run this: </p>
        
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>git init </code>
          </pre>
        </li>



        <li>
          <h3 className="text-xl font-semibold mb-2">Add a <code> .gitignore </code> File   </h3>
          <p>React apps typically have a <code> .gitignore </code> file created for you, but if it’s not there, create one with the following contents to avoid pushing unnecessary files:</p>

          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
            {`node_modules/
build/
.DS_Store
*.log`}
            </code>
          </pre>
        </li>



        <li>
          <h3 className="text-xl font-semibold mb-2"> Add Files to Git </h3>
          <p> Add all the files to your git repository: </p>

          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>git commit -m "Initial commit"</code>
          </pre>
        </li>


        <li>
          <h3 className="text-xl font-semibold mb-2">Create a Repository on GitHub </h3>
          <p> Go to GitHub, log in, and create a new repository. Don’t initialize the repository with a README, <code>.gitignore </code>, or license, as you’ve already set those up locally. </p>

          
        </li>



        <li>
          <h3 className="text-xl font-semibold mb-2">Link the GitHub Repository </h3>
          <p>After creating the repository on GitHub, you’ll be provided with a URL. Add this URL as a remote repository:  </p>

          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>git remote add origin https://github.com/username/repository-name.git </code>
          </pre>
          <p>Replace <code> username</code> with your GitHub username and <code> repository-name</code> with the name of your GitHub repository.</p>
        </li>




        <li>
          <h3 className="text-xl font-semibold mb-2"> Push the Code to GitHub</h3>
          <p> Finally, push your code to GitHub: </p>

          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>git push -u origin master</code>
          </pre>

          <p> If you're using <code> main</code> as the default branch (which GitHub does now), use:</p>

          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>git push -u origin main</code>
          </pre> 

          <p> Check the repo in web if initializaion is sucesfull proceed to next step.</p>
        </li>


        <li>
          <h3 className="text-xl font-semibold mb-2">Install GitHub Pages</h3>
          <p>To deploy the app to GitHub Pages, install the <code>gh-pages</code> package as a development dependency:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>npm install gh-pages --save-dev</code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Update <code>package.json</code></h3>
          <h4 className="text-lg font-semibold mb-2">Add a Homepage Field</h4>
          <p>In your <code>package.json</code> file, add a <code>homepage</code> field to specify the URL of your GitHub Pages site:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`"homepage": "https://<your-username>.github.io/<repository-name>"`}
            </code>
          </pre>

          <h4 className="text-lg font-semibold mb-2">Add Predeploy and Deploy Scripts</h4>
          <p>Under the <code>"scripts"</code> section in <code>package.json</code>, add the following:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}`}
            </code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Modify <code>src/index.js</code> (or <code>src/main.jsx</code>)</h3>
          <p>To handle routing correctly on GitHub Pages, use <code>HashRouter</code> instead of <code>BrowserRouter</code>. In your <code>src/index.js</code> (or <code>src/main.jsx</code>), update it like this:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>
);`}
            </code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Configure Vite for GitHub Pages</h3>
          <p>In <code>vite.config.js</code>, set the <code>base</code> to your GitHub repository’s name:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<repository-name>/',  // Make sure the base is set here
});`}
            </code>
          </pre>
        </li>

        <li>
          <h3 className="text-xl font-semibold mb-2">Build and Deploy</h3>
          <p>Run the following commands to build your app and deploy it to GitHub Pages:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`npm run build
npx gh-pages -d dist
npm run deploy`}
            </code>
          </pre>
          <p>Your app should now be deployed to GitHub Pages, accessible at:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto">
            <code>
              {`https://<your-username>.github.io/<repository-name>`}
            </code>
          </pre>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
      <p>You've successfully created and deployed a React app with Vite and Tailwind CSS to GitHub Pages! Enjoy building your application with modern tooling and fast deployment.</p>
      <p>If you run into any issues, feel free to open an issue on GitHub or consult the <a href="https://vitejs.dev/" className="text-blue-500">official documentation for Vite</a>, <a href="https://tailwindcss.com/" className="text-blue-500">Tailwind CSS</a>, and <a href="https://pages.github.com/" className="text-blue-500">GitHub Pages</a>.</p>
    </div>
  );
};

export default DeploymentGuide;
