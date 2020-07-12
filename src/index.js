import Post from './post';
import json from './assets/json';
import xml from './assets/data.xml';
import WebpackLogo from './assets/webpack-logo.png';
import './styles/styles.css';

const post = new Post('Webpack post title', WebpackLogo);

console.log('p: ', post.toString());
console.log('JSON: ', json);
console.log('XML: ', xml);