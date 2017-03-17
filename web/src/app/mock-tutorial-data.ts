import { TutorialElement } from './tutorial-element';
import { TutorialType } from './tutorial-type';


export const ELEMENTS: TutorialElement = 
    {
        type : [
                {label :'Monolithic' , description: 'A tutorial is generated automatically for you.It includes Wakanda Local as default datastore, Ionic 2 as default mobile technology, Angular 2 as default Web technology, and Local as default session handler.'},
                {label :'Customized' , description: 'Allows you to cutomize the elements for your tutorial.'}
         ],
         
        datastores:['Wakanda Local',
                    'Wakanda Remote' ,
                    '4D' ,
                    'MYSQL' ,
                    'MSSQL' ,
                    'ODBC'],
                    
        frontTechnology : [{value:'Angular 1',checked:false},{value:'Angular 2',checked:true}],
        mobileTechnology :[{value:'Ionic 1',checked:false},{value:'Ionic 2',checked:true}],
        session:[{value:'Local',checked:true},{value:'JWT',checked:false},{value:'Redis',checked:false},{value:'Custom',checked:false}],
    }