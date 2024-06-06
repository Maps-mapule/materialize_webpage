import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default defineConfig({
    plugins: [
      handlebars({
        context: {
          data 
        }
      })
    ]
  });
