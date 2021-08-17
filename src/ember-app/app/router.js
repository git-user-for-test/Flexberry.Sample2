import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-sample-author-l');
  this.route('new-platform-sample-author-e',
  { path: 'new-platform-sample-author-e/:id' });
  this.route('new-platform-sample-author-e.new',
  { path: 'new-platform-sample-author-e/new' });
  this.route('new-platform-sample-book-l');
  this.route('new-platform-sample-book-e',
  { path: 'new-platform-sample-book-e/:id' });
  this.route('new-platform-sample-book-e.new',
  { path: 'new-platform-sample-book-e/new' });
  this.route('new-platform-sample-country-l');
  this.route('new-platform-sample-country-e',
  { path: 'new-platform-sample-country-e/:id' });
  this.route('new-platform-sample-country-e.new',
  { path: 'new-platform-sample-country-e/new' });
  this.route('new-platform-sample-language-l');
  this.route('new-platform-sample-language-e',
  { path: 'new-platform-sample-language-e/:id' });
  this.route('new-platform-sample-language-e.new',
  { path: 'new-platform-sample-language-e/new' });
});

export default Router;
