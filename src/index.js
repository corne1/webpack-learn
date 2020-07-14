import * as $ from 'jquery';
import Post from '@models/post';
// import json from './assets/json';
// import xml from './assets/data.xml';
import WebpackLogo from './assets/webpack-logo.png';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import './babel';


const post = new Post('Webpack post title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

console.log('JSON: ', json);
console.log('XML: ', xml);