import App from './app';

const port = 3001;
new App().server.listen(port, () => console.log(`Server is running on port ${port}`));