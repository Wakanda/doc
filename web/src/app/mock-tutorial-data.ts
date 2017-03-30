import { TutorialElement } from './tutorial-element';

export const ELEMENTS: TutorialElement = {
    
    type: [{
            label: 'Monolithic',
            description: 'A tutorial is generated automatically for you.It includes Wakanda Local as default datastore, Ionic 2 as default mobile technology, Angular 2 as default Web technology, and Local as default session handler.'
        },
        {
            label: 'Customized',
            description: 'Allows you to cutomize the elements for your tutorial.'
        }
    ],

    datastores: [
        { id: 1, value: 'Wakanda Local', path: 'db-local.html' },
        { id: 2, value: 'Wakanda Remote', path: 'db-remote.html' },
        { id: 3, value: '4D', path: 'db-4d.html' },
        { id: 4, value: 'MYSQL', path: 'db-mysql.html' },
        { id: 5, value: 'MSSQL', path: 'db-mssql.html' },
        { id: 6, value: 'ODBC', path: 'db-odbc.html' }
    ],

    frontTechnology: [{
        id:1,
        value: 'Angular 1',
        path :"angular1.html",
        checked: false
    }, {
        id:2,
        value: 'Angular 4',
        path :"angular.html",
        checked: true
    }],
    mobileTechnology: [{
        id:1,
        value: 'Ionic 1',
        path :"ionic1.html",
        checked: false
    }, {
        id:2,
        value: 'Ionic 2',
        path :"ionic2.html",
        checked: true
    }],
    session: [{
        id:1,
        value: 'Local',
        path :"session-local.html",
        checked: true
    }, {
        id:2,
        value: 'JWT',
        path :"session-jwt.html",
        checked: false
    }, {
        id:3,
        value: 'Redis',
        path :"session-redis.html",
        checked: false
    }, {
        id:4,
        value: 'Custom',
        path :"session-custom.html",
        checked: false
    }],
}