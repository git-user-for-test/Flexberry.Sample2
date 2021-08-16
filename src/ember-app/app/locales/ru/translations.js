import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Books',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books',
          title: 'Books'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        books: {
          caption: 'Books',
          title: 'Books',
          'new-platform-sample-country-l': {
            caption: 'Country',
            title: ''
          },
          'new-platform-sample-book-l': {
            caption: 'Book',
            title: ''
          },
          'new-platform-sample-author-l': {
            caption: 'Author',
            title: ''
          },
          'new-platform-sample-language-l': {
            caption: 'Language',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
