# Concentrateur-Front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26

## Development server

*<sub><sup>Note : If dependencies are not yet installed run first `npm install` before `ng serve`.</sup></sub>*<br />
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. <br />
The app will automatically reload if you change any of the source files.<br />
(If problem with SCSS files : Run `npm rebuild node-sass` before serving)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build, add to the build a `--base-href` flag for the targget directory on deployement *if you want to deploy on application server or web container ( Tomcat/jboss|widfly,... )*.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Projet description

-> src is the source files that will be compiled to javascript (NB : Every component here have his own module.ts, we use this mechanism for dynamic routing, and having dynamic filling of sidebar), menu-items.ts et .js are made for both ES5 & ES6 environments

-> All functional component as centrelazed on components folder, the components outside this folder are technical ones (like dashbord and layouts)

-> Shared folder contains all shared elements between components and also component that can be used in different places like `CardComponent`  *component where you can inject the content of what you want* directed by 2 directives (refresh, toggle, ...) , and so on ... 


## Project Structure
```
src                                         
├───app                                     
│   ├───auth
│   │   ├───login                           
│   │       └───basic-login
│   │
│   ├───components                          
│   │   ├───commmunication                  
│   │   │   ├───message-terminaux           
│   │   │   │   └───new-message-terminal    
│   │   │   └───message-ticket              
│   │   │       └───new-message-ticket      
│   │   ├───gestion-pdv
│   │   │   ├───pdv
│   │   │   │   ├───new-pdv
│   │   │   │   └───view-edit-pdv
│   │   │   └───terminaux
│   │   ├───offre
│   │   │   ├───ajout-produit
│   │   │   ├───page-principale
│   │   │   │   └───import-fichier
│   │   │   └───validation-offre
│   │   ├───parametrage
│   │   │   ├───alert-mail
│   │   │   ├───attributaire
│   │   │   ├───commande-sensible
│   │   │   ├───delais-annulation
│   │   │   ├───generaux-terminal
│   │   │   ├───hippodrome
│   │   │   ├───maj-logiciel-terminal
│   │   │   │   ├───chargement-version
│   │   │   │   └───version-autorisee
│   │   │   ├───paiement-lot
│   │   │   ├───produit-concentrateur
│   │   │   ├───signaux
│   │   │   ├───smtp
│   │   │   ├───type-pdv
│   │   │   ├───type-terminal
│   │   │   └───voucher
│   │   ├───pilotage
│   │   │   └───repartition-rapport-dialog
│   │   ├───supervision
│   │   │   ├───evenement-course
│   │   │   ├───panne
│   │   │   ├───ticket
│   │   │   └───voucher
│   │   └───tfj
│   │       └───tfj-dialog
│   ├───dashboard                              
│   ├───layouts
│   │   ├───admin
│   │   │   ├───breadcrumbs
│   │   │   └───title
│   │   └───auth
│   └───shared
│       ├───accordion
│       ├───card
│       ├───elements
│       ├───fullscreen
│       ├───menu-items
│       ├───modal-animation
│       ├───modal-basic
│       ├───models
│       ├───spinner
│       │   └───spinkit-css
│       └───todo
├───assets
│   ├───css
│   ├───data
│   ├───echart
│   ├───fonts
│   ├───i18n
│   ├───icon
│   │   ├───ico-fonts
│   │   │   ├───css
│   │   │   └───fonts
│   │   └───icofont
│   │       ├───css
│   │       └───fonts
│   ├───images
│   │   ├───auth
│   │   ├───dashboard
│   │   ├───error
│   │   ├───pilotage
│   │   └───tooltip
│   └───pages
│       └───treeview
└───environments

```   
<br />


## NG-Bootstrap :
   
NG-Bootstrap library in Angular was installed with command-line : `npm install --save @ng-bootstrap/ng-bootstrap@5.1.1` <br />
[https://ng-bootstrap.github.io/#/home](https://ng-bootstrap.github.io/#/home)

## Bootstrap :
   
Bootstrap css framework was installed with command-line : `npm install bootstrap@4.0.0 --save` <br />
And in the file angular.json, it was added the path to the Bootstrap files. <br />
Bootstrap dependency needs JQuery


## JQuery :
   
JQuery javascript library was installed with command-line : `npm install jquery@3.4.1 --save` <br />
And in the file angular.json, it was added the path to the jquery file.

## Material Angular :
   
Material Angular power of design of google was installed with command-line :  `npm install popper.js --save` <br />
And in the file angular.json.


## Owl Carousel  :
   
Owl Carousel (JQuery Library)  was installed with command-line :  `npm install owl.carousel@2.3.4  --save` <br />
And in the file angular.json, it was added the path to the owl.carousel css and js files.


## Owl Carousel  :
   
Owl Carousel (JQuery Library)  was installed with command-line :  `npm install owl.carousel@2.3.4  --save` <br />
And in the file angular.json, it was added the path to the owl.carousel css and js files.


## Angular-WEB-Storage  :
   
Angular decorator to save and restore of HTML5 Local & Session Storage was installed with command-line :  `npm install angular-web-storage --save` <br />
And in `@NgModule()` of main module, in imports array, it was added `AngularWebStorageModule`.

## Cool library to deal with errors : [https://www.stacktracejs.com](https://www.stacktracejs.com)
import * as StackTraceParser from 'error-stack-parser';
<br />

## Full-screen API

Discovered on instagram room_js page was installed with command-line : `npm install owl.carousel@3.3.2  --save`