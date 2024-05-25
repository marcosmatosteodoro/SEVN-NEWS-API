import dotenv from 'dotenv';
import App from './app';

dotenv.config();

const port = process.env.PORT || 3001;
new App().server.listen(port, () => console.log(`Server is running on port ${port}`));