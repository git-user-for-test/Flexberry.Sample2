import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import NewPlatformSampleAuthorLForm from './forms/new-platform-sample-author-l';
import NewPlatformSampleBookLForm from './forms/new-platform-sample-book-l';
import NewPlatformSampleCountryLForm from './forms/new-platform-sample-country-l';
import NewPlatformSampleLanguageLForm from './forms/new-platform-sample-language-l';
import NewPlatformSampleAuthorEForm from './forms/new-platform-sample-author-e';
import NewPlatformSampleBookEForm from './forms/new-platform-sample-book-e';
import NewPlatformSampleCountryEForm from './forms/new-platform-sample-country-e';
import NewPlatformSampleLanguageEForm from './forms/new-platform-sample-language-e';
import NewPlatformSampleAuthorModel from './models/new-platform-sample-author';
import NewPlatformSampleBookModel from './models/new-platform-sample-book';
import NewPlatformSampleCountryModel from './models/new-platform-sample-country';
import NewPlatformSampleLanguageModel from './models/new-platform-sample-language';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'new-platform-sample-author': NewPlatformSampleAuthorModel,
    'new-platform-sample-book': NewPlatformSampleBookModel,
    'new-platform-sample-country': NewPlatformSampleCountryModel,
    'new-platform-sample-language': NewPlatformSampleLanguageModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        books: {
          caption: 'books',
          title: 'books',
          'new-platform-sample-country-l': {
            caption: 'new-platform-sample-country-l',
            title: 'new-platform-sample-country-l'
          },
          'new-platform-sample-book-l': {
            caption: 'new-platform-sample-book-l',
            title: 'new-platform-sample-book-l'
          },
          'new-platform-sample-author-l': {
            caption: 'new-platform-sample-author-l',
            title: 'new-platform-sample-author-l'
          },
          'new-platform-sample-language-l': {
            caption: 'new-platform-sample-language-l',
            title: 'new-platform-sample-language-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'new-platform-sample-author-l': NewPlatformSampleAuthorLForm,
    'new-platform-sample-book-l': NewPlatformSampleBookLForm,
    'new-platform-sample-country-l': NewPlatformSampleCountryLForm,
    'new-platform-sample-language-l': NewPlatformSampleLanguageLForm,
    'new-platform-sample-author-e': NewPlatformSampleAuthorEForm,
    'new-platform-sample-book-e': NewPlatformSampleBookEForm,
    'new-platform-sample-country-e': NewPlatformSampleCountryEForm,
    'new-platform-sample-language-e': NewPlatformSampleLanguageEForm
  },

});

export default translations;
