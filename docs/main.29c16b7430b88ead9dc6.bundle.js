webpackJsonp([1],{0:function(t,e,n){t.exports=n("x35b")},"4InB":function(t,e){t.exports=".mat-card{\r\n    width: 55%;\r\n    margin-left: 20%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.option-element{\r\n\tmargin: 30px;\r\n}\r\n\r\n\r\n.button-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n\r\n\r\n.back-separator {\r\n    color: #f9b611;\r\n    padding-left: 3px;\r\n    font-size: medium;\r\n}\r\n\r\n\r\n.back-button {\r\n    color: #f9b611;\r\n    font-size: medium;\r\n}"},"5xMp":function(t,e){t.exports='<md-toolbar class="custom-toolbar">\r\n    <span>\r\n   \t\t<a href="https://wakanda.github.io">\r\n   \t\t\t<img src="./assets/logo-wakanda.png" class="logo">\r\n\t\t</a>\r\n   \t</span>\r\n    <span class="spacer"></span>\r\n    <button md-menu-item routerLink="/guide" routerLinkActive="active">\r\n        <span>Guide</span>\r\n    </button>\r\n    <a href="https://wakanda.github.io/api-reference/">\r\n    <button md-menu-item>\r\n        <span>API Reference</span>\r\n    </button>\r\n    </a>\r\n    <button md-menu-item routerLink="/tutorial" routerLinkActive="active">\r\n        <span>Tutorial</span>\r\n    </button>\r\n</md-toolbar>\r\n<router-outlet></router-outlet>'},"6GLz":function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="6GLz"},"7Et8":function(t,e){t.exports='<md-sidenav-container class="container">\r\n    <md-sidenav #sidenav mode="side" opened="true" [hidden]="!submitted">\r\n\t\t\x3c!--<div (click)="back()" class="pointer mt30">\r\n        <span  class="back-button">&lt;</span>\r\n     \t<span  class="back-separator" >|</span>\r\n        <span class="back-separator"> Back To {{tutorial.type.label}} Form</span>\r\n        </div>--\x3e\r\n        <div class="mt30"><span style="text-font:bold;margin-left:14px;color:black">Menu</span></div>\r\n        <div *ngFor="let obj of tutoForm.value | keys" class="mt30"> \r\n            <span (click)="getContent(obj.value)"  class="pointer" [class.selected-elem]="obj.value.value === tuto">\r\n         \t<span class="selected-content">{{obj.value.value}}</span>\r\n            </span>\r\n        </div>\r\n\r\n    </md-sidenav>\r\n\r\n    <div>\r\n\r\n       \r\n        <app-tutorial-content [content]="content"></app-tutorial-content>\r\n\r\n        <div class="mt30" [hidden]="submitted">\r\n\r\n            <md-card>\r\n                <md-card-content>\r\n\r\n                    <h3> A Preconfigured Tutorial Is Set For You : </h3>\r\n                    <p class="description">{{tutorial.type.description}}</p>\r\n                    <div class="button-row">\r\n                          <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.session.value}} </p>\r\n                        <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.datastores.value}}</p>\r\n                        <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.frontTechnology.value}} </p>\r\n                        <p class="option-element"><button md-mini-fab><md-icon color="primary">check</md-icon></button> {{tutorial.mobileTechnology.value}} </p>\r\n                      \r\n                    </div>\r\n\r\n                    <form #tutoForm="ngForm">\r\n                        <input type="hidden" name="session" [ngModel]="tutorial.session">\r\n                        <input type="hidden" name="datastores" [ngModel]="tutorial.datastores">\r\n                        <input type="hidden" name="front" [ngModel]="tutorial.frontTechnology">\r\n                        <input type="hidden" name="mobile" [ngModel]="tutorial.mobileTechnology">\r\n                       \r\n                       <button md-raised-button color="primary" type="submit" (click)="onSubmit(tutoForm.value)">Go !</button>\r\n                    </form>\r\n\r\n                </md-card-content>\r\n            </md-card>\r\n        </div>\r\n    </div>\r\n</md-sidenav-container>'},AB3m:function(t,e){t.exports='\x3c!--<md-tab-group>\r\n  <md-tab label="{{this.types[0].label}}">\r\n\t <app-tutorial-detail-monolithic></app-tutorial-detail-monolithic>\r\n  </md-tab>\r\n \r\n  <md-tab label="{{this.types[1].label}}">\r\n\t<app-tutorial-detail-customized></app-tutorial-detail-customized>\r\n  </md-tab>\r\n</md-tab-group>--\x3e\r\n\r\n<md-sidenav-container class="container">\r\n    <md-sidenav #sidenav mode="side" opened="true">\r\n    \t<div>\r\n     \t\t<span *ngIf="atRoot" class="back-button-hidden"></span>\r\n     \t\t<span *ngIf="!atRoot" (click)="goBack()" class="back-button pointer">&lt; GO UP</span>\r\n\t\t</div>\r\n\t\t<div>\r\n     \t\t<span class="selected-content menu-title pointer" (click)="displaySectionByID(menuSection.id)" [innerText]="title"></span>\r\n        </div>\r\n        <div *ngFor="let section of sections" class="mt30">\r\n            <span (click)="displaySectionByID(section.id)" class="pointer" [class.selected-elem]="section.id === currentSection"> \r\n         \t\t<span class="selected-content">{{section.title}}</span>\r\n            </span>\r\n        </div>\r\n    </md-sidenav>\r\n    <div>\r\n        <app-guide-content [content]="content"></app-guide-content>\r\n    </div>\r\n</md-sidenav-container>'},F2cn:function(t,e){t.exports='\t<md-sidenav-container class="container">\r\n\t  <md-sidenav #sidenav  mode="side" opened="true" [hidden] ="!submitted">\r\n\t \x3c!--<div (click)="back()" class="pointer mt30">\r\n        <span  class="back-button">&lt;</span>\r\n      \t<span  class="back-separator" >|</span>\r\n        <span class="back-separator"> Back To {{tutorial.type.label}} Form</span>\r\n    </div>--\x3e\r\n\t\t\t\t\r\n\t\t<div *ngFor="let obj of tutoForm.value | keys" class="mt30">\r\n\t \t\t\r\n\t \t\t<div *ngIf="obj.key === \'datastores\'">\r\n\t \t\t\t<div *ngFor="let ds of obj.value ">\r\n\t \t\t\t\t <div (click)="getContent(ds)" class="mt30 pointer"  [class.selected-elem]="ds === tuto">\r\n\t \t\t\t\t \t<span class="selected-content">\t{{ds.value}} </span>\r\n\t \t\t\t\t </div>\r\n\t \t\t\t</div>\r\n\t \t\t</div>\r\n\t   \t\t\r\n\t   \t\t<span class="pointer" *ngIf=" obj.key !== \'datastores\'"  (click)="getContent(obj)" [class.selected-elem]="obj === tuto">\r\n\t   \t\t\t\t<span class="selected-content">{{obj.value}}</span>\r\n\t   \t\t</span>\r\n\t \r\n\t   </div>\r\n\t </md-sidenav>\r\n \t\r\n \r\n    <app-tutorial-content [content]="content"></app-tutorial-content>\r\n\r\n\t<div class="mt30" [hidden]="submitted">\r\n\t  <form  #tutoForm="ngForm">\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t  \r\n\t\t    <h3>Please select your Datastore(s)</h3>\r\n\t\t   \r\n\t\t    <div style="margin-left:40%">\r\n\t\t\t\t <ng2-select [placeholder]="\'Datastores ... \'" \r\n\t\t    \t    [(ngModel)]="tutorial.datastores"\r\n\t\t    \t     [multiple]="true"\r\n\t\t    \t     [displayBy]="\'value\'"\r\n\t\t    \t      name="datastores"\r\n\t\t    \t     [options]="datastores">\r\n\t\t    \t \r\n\t\t    \t </ng2-select>\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t    \r\n\r\n\t\t\t  <div *ngIf="tutorial.datastores.length" style="margin-left:20px">\r\n\t\t            <span> <b>You chose : </b></span>\r\n\t\t            <span *ngFor="let option of tutorial.datastores" class="option-element">\r\n\t\t                {{option.value}}\r\n\t\t            </span>\r\n\t\t        </div>\r\n\t\t  </md-card-content>\r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t    <h3>Please select your Mobile Technology</h3>\r\n\t\t\t\r\n\t\t\t\t <md-radio-group class="content-section" [(ngModel)]="tutorial.mobileTechnology" name="mobileTechnology" >\r\n\t\t         <md-radio-button   *ngFor="let mob of mobs" class="option-element" [value]="mob.value" >{{mob.value}}</md-radio-button>\r\n\t\t        </md-radio-group>\r\n\t\t  </md-card-content> \r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t    <h3>Please select your Web Technology</h3>\r\n\t\t\r\n\t\t    <md-radio-group  class="content-section" [(ngModel)]="tutorial.frontTechnology" name="frontTechnology" >\r\n\t\t      <md-radio-button  *ngFor="let fr of fronts" [value]="fr.value" class="option-element">{{fr.value}}</md-radio-button>\r\n\t\t    </md-radio-group >\r\n\t\t\r\n\t\t  </md-card-content>\r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t  <md-card-content>\r\n\t\t    <h3>Please select a session handler</h3>\r\n\t\t\r\n\t\t     <md-radio-group  class="content-section" [(ngModel)]="tutorial.session" name="session" >\r\n\t\t      <md-radio-button  *ngFor="let session of sessions" [value]="session.value" class="option-element">{{session.value}}</md-radio-button>\r\n\t\t    </md-radio-group >\r\n\t\t\r\n\t\t  </md-card-content>\r\n\t\t</md-card>\r\n\t\t\r\n\t\t<md-card>\r\n\t\t<md-card-content>\r\n\t\t \r\n\t\t    <section class="content-section">\r\n\t\t    <button   md-raised-button color="primary" type="submit" (click)="onSubmit(tutoForm.value)">Go !</button>\r\n\t\t    </section>\r\n\t\t\r\n\t\t  </md-card-content>\r\n\t\t\r\n\t\t</md-card>\r\n\t  </form>\r\n</div>\r\n</md-sidenav-container>  '},Fb7i:function(t,e){t.exports=""},OT7M:function(t,e){t.exports=""},SQzm:function(t,e){t.exports=""},UvOb:function(t,e){t.exports=""},Ybe5:function(t,e){t.exports=".mat-card{\r\n    width: 50%;\r\n    margin-left: 20%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.option-element{\r\n\tmargin: 0 10px;\r\n}\r\n\r\n\r\n.ng2-dropdown-container{\r\n    min-width: 350px !important;\r\n    width : 400px !important;\r\n}\r\n\r\n\r\n.back-separator {\r\n    color: #f9b611;\r\n    padding-left: 3px;\r\n    font-size: medium;\r\n}\r\n\r\n\r\n.back-button {\r\n    color: #f9b611;\r\n    font-size: medium;\r\n}"},cU1F:function(t,e){t.exports=".menu-title {\r\n    font-weight: bold;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n\r\n.back-separator {\r\n    color: #f9b611;\r\n    padding-left: 3px;\r\n    font-size: xx-large;\r\n}\r\n\r\n.back-button {\r\n    margin-left: 15px;\r\n    color: #f9b611;\r\n    font-size: 10px ;\r\n}\r\n\r\n.back-button-hidden {\r\n    margin-left: 15px;\r\n    font-size: 10px ;    \r\n}"},dwyp:function(t,e){t.exports=""},h5xE:function(t,e){t.exports=""},hF4i:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SnippetsComponent});var __WEBPACK_IMPORTED_MODULE_0__angular_core__=__webpack_require__("Rw+2"),__decorate=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},SnippetsComponent=function(){function SnippetsComponent(){this.contents={}}return SnippetsComponent.prototype.ngOnInit=function(){try{this._files=eval(this.files)}catch(t){}this._files.length&&(this.currentFilePath=this.path+this._files[0])},SnippetsComponent.prototype.handleChange=function(t){this.currentFilePath=this.path+this._files[t]},SnippetsComponent.prototype.getFilePath=function(t){return this.path+t},__decorate([Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Input)(),__metadata("design:type",Object)],SnippetsComponent.prototype,"files",void 0),__decorate([Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Input)(),__metadata("design:type",Object)],SnippetsComponent.prototype,"path",void 0),SnippetsComponent=__decorate([Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__.Component)({selector:"snippets",template:__webpack_require__("i77a"),styles:[__webpack_require__("Fb7i")]}),__metadata("design:paramtypes",[])],SnippetsComponent),SnippetsComponent}()},i77a:function(t,e){t.exports='\x3c!--<div md-mini-fab *ngFor="let file of _files">\n\t{{file}}\n</div>\n<markdown-to-html [src]="currentFilePath"></markdown-to-html>--\x3e\n<md-tab-group (selectedIndexChange)="handleChange($event)">\n\t<md-tab  *ngFor="let file of _files" label="{{file}}">\n\t\t<markdown-to-html [src]="currentFilePath"></markdown-to-html>\n\t</md-tab>\n</md-tab-group>'},keXz:function(t,e){t.exports='<md-sidenav-container class="container">\r\n    <md-sidenav #sidenav mode="side" opened="true">\r\n    \t<div>\r\n     \t\t<span *ngIf="atRoot" class="back-button-hidden"></span>\r\n     \t\t<span *ngIf="!atRoot" (click)="goBack()" class="back-button pointer">&lt; GO UP</span>\r\n\t\t</div>\r\n\t\t<div>\r\n     \t\t<span class="selected-content menu-title pointer" (click)="displaySectionByID(menuSection.id)" [innerText]="title"></span>\r\n        </div>\r\n        <div *ngFor="let section of sections" class="mt30">\r\n            <span (click)="displaySectionByID(section.id)" class="pointer" [class.selected-elem]="section.id === currentSection"> \r\n         \t\t<span class="selected-content">{{section.title}}</span>\r\n            </span>\r\n        </div>\r\n    </md-sidenav>\r\n    <div>\r\n        <app-guide-content [content]="content"></app-guide-content>\r\n    </div>\r\n</md-sidenav-container>'},okgc:function(t,e){t.exports="/*.footer {\r  position: fixed;\r  right: 0;\r  bottom: 0;\r  left: 0;\r  padding: 20px;\r  background-color: #efefef;\r  text-align: center;\r  \r}\r\r.link{\r\tfont-weight: bold;\r\tfont-size: 14px;\r\ttext-decoration: none;\r\tcolor:teal;\r}\r\r.types{\r\tmargin-bottom:50px;\r}*/\r\r.spacer {\r    -webkit-box-flex: 1;\r    -ms-flex: 1 1 auto;\r    flex: 1 1 auto;\r}\r\r.mat-menu-item {\r    border: none;\r    /*color:white;*/\r    font-size: 15px;\r    cursor: pointer;\r    margin-right: 20px;\r}\r\r.active {\r    border-bottom: 4px solid teal;\r    height: 64px;\r}\r\r.custom-toolbar {\r    background-color: transparent;\r    border-bottom: 1px solid lightgrey;\r    -webkit-box-shadow: 0 4px 2px -2px lightgrey;\r    box-shadow: 0 4px 2px -2px lightgrey;\r    background-color: #fafafa;\r}\r\r.logo {\r    height: 40px;\r}"},qLxw:function(t,e){t.exports=".menu-title {\r\n    font-weight: bold;\r\n    color: black;\r\n    font-size: 20px;\r\n}\r\n\r\n.back-separator {\r\n    color: #f9b611;\r\n    padding-left: 3px;\r\n    font-size: xx-large;\r\n}\r\n\r\n.back-button {\r\n    margin-left: 15px;\r\n    color: #f9b611;\r\n    font-size: 10px ;\r\n}\r\n\r\n.back-button-hidden {\r\n    margin-left: 15px;\r\n    font-size: 10px ;    \r\n}"},wGAO:function(t,e){t.exports="<p>\n  reference works!\n</p>\n"},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Rw+2"),r=n("nzH4"),i=n("D8Yg"),a=n("36+m"),s=n("24R9"),c=n("zKH5"),l=n("TC1X"),d=(n("rxKx"),n("cpOz")),p=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(){function t(){}return t=p([Object(o.Component)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]}),u("design:paramtypes",[])],t)}(),f={tree:{id:"main",title:"Home",root:!0,path:"home.html",sections:[{id:"main-overview",title:"Concepts",path:"overview.html",sections:[{id:"main-overview-solution",title:"Solution",path:"overview/solution.html"},{id:"main-overview-project",title:"Project",path:"overview/project.html"},{id:"main-overview-bootstrap",title:"Backend - Bootstrap",path:"overview/bootstrap.html"},{id:"main-overview-modules",title:"Backend - Modules",path:"overview/modules.html"},{id:"main-overview-services",title:"Backend - Services",path:"overview/services.html"}]},{title:"Data Integration",path:"data.html",id:"main-data",sections:[{title:"Basics",path:"data/basics.html",id:"main-data-basics"},{title:"Client side",path:"data/client-side.html",id:"main-data-cs",sections:[{title:"Get started",id:"main-data-cs-instance",path:"data/client-side/javascript-client-instance.html"},{title:"Retrieve entities",id:"main-data-cs-retrieve",path:"data/client-side/javascript-client-retrieve-entities.html"},{title:"Handle entities",id:"main-data-cs-manipulate",path:"data/client-side/javascript-client-manipulate-entity.html"},{title:"Handle related entities",id:"main-data-cs-related",path:"data/client-side/javascript-client-related-entities.html"},{title:"Handle collections",id:"main-data-cs-helpers",path:"data/client-side/javascript-client-collection-helpers.html"},{title:"Images and Blobs",id:"main-data-cs-upload",path:"data/client-side/javascript-client-upload.html"},{title:"Server-side methods",id:"main-data-cs-servermethods",path:"data/client-side/javascript-client-server-methods.html"},{title:"User authentication",id:"main-data-cs-directorymethods",path:"data/client-side/javascript-client-directory-methods.html"}]},{title:"Server Side",path:"data/server-side.html",id:"main-data-ss"},{title:"Security",path:"data/security.html",id:"main-data-security"},{title:"Handling data sources",path:"data/adding-data-sources.html",id:"main-data-external",sections:[{title:"Model Designer",id:"main-data-external-modeldesigner",path:"data/adding-data-sources/modeldesigner.html"},{title:"Enrich Model",id:"main-data-external-enrich",path:"data/adding-data-sources/enrich.html"},{title:"MYSQL",id:"main-data-external-mysql",path:"data/adding-data-sources/mysql.html"},{title:"ODBC",id:"main-data-external-odbc",path:"data/adding-data-sources/odbc.html"},{title:"Virtual",id:"main-data-external-virtual",path:"data/adding-data-sources/virtual.html"}]}]},{title:"Authentication",path:"authentication.html",id:"main-auth",sections:[{title:"Default Mechanism",path:"authentication/default.html",id:"main-auth-default"},{title:"Custom Authentication",path:"authentication/custom.html",id:"main-auth-custom"},{title:"Custom Session Management",path:"authentication/custom-session-management.html",id:"main-auth-csm"}]},{id:"main-http",title:"HTTP",path:"http.html"},{id:"main-workers",title:"Workers",path:"threads.html",sections:[{title:"System Worker",id:"main-workers-system",path:"threads/system-worker.html"},{title:"Shared Worker",id:"main-workers-shared",path:"threads/shared-worker.html"},{title:"Node Worker",id:"main-workers-node",path:"threads/node-worker.html"},{title:"Threadify",id:"main-workers-threadify",path:"threads/threadify.html"}]},{id:"main-test",title:"Testing",path:"testing.html"},{id:"main-prod",title:"Production",path:"production.html"},{id:"main-misc",title:"Miscellaneous",path:"miscellaneous.html"},{id:"main-migrate1to2",title:"Migration from v1 to v2",path:"migration-from-v1-to-v2.html"},{id:"main-requirements",title:"Requirements",path:"requirements.html"},{id:"main-license",title:"License",path:"license.html"}]}},h=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(t,e){this.activatedRoute=t,this.router=e,this.menu=f.tree}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.queryParams.subscribe(function(e){console.log(e);var n=e.section||"main";t.displaySectionByID(n)})},t.prototype.displaySectionByID=function(t){var e=this.getSectionInfoByID(t);this.router.navigate([],{queryParams:{section:t},relativeTo:this.activatedRoute}),this.displaySection(e.section,e.backSection,e.menuSection)},t.prototype.displaySection=function(t,e,n){this.currentSection=t.id,this.atRoot=!!n.root||t.root,this.sections=n.sections,this.title=n.title,this.menuSection=n,this.backSection=e,this.displayPage(t.path)},t.prototype.displayPage=function(t){var e=this,n=new XMLHttpRequest;n.open("GET","./assets/sections/"+t),n.send(),n.onload=function(){e.content=n.responseText}},t.prototype.goBack=function(){this.displaySectionByID(this.backSection.id)},t.prototype.getSectionInfoByID=function(t){var e,n,o=t.lastIndexOf("-");if(-1===o)return{section:this.menu,backSection:null,menuSection:this.menu};e=t.substr(0,o);var r,i=this.getSectionByID(t);return i.sections?{section:i,backSection:r=this.getSectionByID(e),menuSection:i}:-1!==(o=e.lastIndexOf("-"))?(n=e,e=t.substr(0,o),{section:i,backSection:r=this.getSectionByID(e),menuSection:this.getSectionByID(n,r.sections)}):{section:i,backSection:this.menu,menuSection:this.menu}},t.prototype.getSectionByID=function(t,e){var n=null,o=e||this.menu.sections;return"main"===t?this.menu:(o.some(function(e){return t.indexOf(e.id)>-1&&(n=e,!0)}),n.id===t?n:this.getSectionByID(t,n.sections))},t=h([Object(o.Component)({selector:"app-guide",template:n("keXz"),styles:[n("qLxw")]}),b("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.a&&c.a)&&e||Object,"function"==typeof(r="undefined"!=typeof c.b&&c.b)&&r||Object])],t);var e,r}(),g=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(){function t(){}return t.prototype.ngOnInit=function(){},t=g([Object(o.Component)({selector:"app-reference",template:n("wGAO"),styles:[n("h5xE")]}),v("design:paramtypes",[])],t)}(),k={tree:{id:"main",title:"Introduction",root:!0,path:"tutorial/intro.html",sections:[{id:"main-prerequesites",title:"1. Prerequesties",path:"tutorial/prerequesites.html"},{id:"main-routing",title:"2. Web App Routing",path:"tutorial/web-angular-routing.html"},{title:"3. Backend Authentication",id:"main-authlocal",path:"tutorial/auth-directory.html"},{title:"4. Web Login Page",id:"main-authangular",path:"tutorial/auth-web-angular.html"},{title:"5. Backend DB Integration",id:"main-dblocal",path:"tutorial/db-local.html"},{title:"6. Web Todos Interface",id:"main-todoangular",path:"tutorial/todo-web-angular.html"}]}},x=this&&this.__extends||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);function o(){this.constructor=t}t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},j=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(t){function e(e,n){t.call(this,e,n),this.menu=k.tree}return x(e,t),e=j([Object(o.Component)({selector:"app-guide",template:n("AB3m"),styles:[n("cU1F")]}),O("design:paramtypes",["function"==typeof(r="undefined"!=typeof c.a&&c.a)&&r||Object,"function"==typeof(i="undefined"!=typeof c.b&&c.b)&&i||Object])],e);var r,i}(y),w={type:[{label:"Monolithic",description:"A tutorial is generated automatically for you.It includes Wakanda Local as default datastore, Ionic 2 as default mobile technology, Angular 2 as default Web technology, and Local as default session handler."},{label:"Customized",description:"Allows you to cutomize the elements for your tutorial."}],datastores:[{id:1,value:"Wakanda Local",path:"db-local.html"},{id:2,value:"Wakanda Remote",path:"db-remote.html"},{id:3,value:"4D",path:"db-4d.html"},{id:4,value:"MYSQL",path:"db-mysql.html"},{id:5,value:"MSSQL",path:"db-mssql.html"},{id:6,value:"ODBC",path:"db-odbc.html"}],frontTechnology:[{id:1,value:"Angular 1",path:"angular1.html",checked:!1},{id:2,value:"Angular 4",path:"angular.html",checked:!0}],mobileTechnology:[{id:1,value:"Ionic 1",path:"ionic1.html",checked:!1},{id:2,value:"Ionic 2",path:"ionic2.html",checked:!0}],session:[{id:1,value:"Local",path:"session-local.html",checked:!0},{id:2,value:"JWT",path:"session-jwt.html",checked:!1},{id:3,value:"Redis",path:"session-redis.html",checked:!1},{id:4,value:"Custom",path:"session-custom.html",checked:!1}]},C=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},S=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},P=function(){function t(){this.elements=w,this.datastore=this.elements.datastores,this.fronts=this.elements.frontTechnology,this.mobs=this.elements.mobileTechnology,this.sessions=this.elements.session,this.submitted=!1,this.types=this.elements.type}return t.prototype.ngOnInit=function(){this.tutorial={type:this.types[0],datastores:this.datastore[0],frontTechnology:this.fronts[1],mobileTechnology:this.mobs[1],session:this.sessions[0]}},t.prototype.onSubmit=function(t){this.submitted=!0,this.getHtmlFile("intro.html")},t.prototype.back=function(){this.submitted=!1,this.content="",this.tuto=""},t.prototype.getContent=function(t){this.tuto=t.value,this.getHtmlFile(t.path)},t.prototype.getHtmlFile=function(t){var e=this,n=new XMLHttpRequest;n.open("GET","./assets/sections/tutorial/"+t),n.send(),n.onload=function(){e.content=n.responseText}},t=C([Object(o.Component)({selector:"app-tutorial-detail-monolithic",template:n("7Et8"),styles:[n("4InB")]}),S("design:paramtypes",[])],t)}(),I=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},M=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},F=function(){function t(){this.elements=w,this.datastores=this.elements.datastores,this.fronts=this.elements.frontTechnology,this.mobs=this.elements.mobileTechnology,this.sessions=this.elements.session,this.submitted=!1,this.types=this.elements.type}return t.prototype.ngOnInit=function(){this.initForm()},t.prototype.initForm=function(){this.tutorial={type:this.types[1],datastores:[],frontTechnology:this.fronts[1].value,mobileTechnology:this.mobs[1].value,session:this.sessions[0].value}},t.prototype.onSubmit=function(t){this.submitted=!0,this.getHtmlFile("intro.html")},t.prototype.back=function(){this.initForm(),this.submitted=!1,this.content=""},t.prototype.getHtmlFile=function(t){var e=this,n=new XMLHttpRequest;n.open("GET","./assets/sections/tutorial/"+t),n.send(),n.onload=function(){e.content=n.responseText}},t.prototype.getContent=function(t){var e;for(var n in this.tuto=t,this.elements)for(var o=this.elements[n],r=0;r<o.length;r++){var i=o[r];for(var a in i)i.hasOwnProperty(a)&&i[a]===t.value&&(e=i.path)}e&&this.getHtmlFile(e)},t=I([Object(o.Component)({selector:"app-tutorial-detail-customized",template:n("F2cn"),styles:[n("Ybe5")]}),M("design:paramtypes",[])],t)}(),T=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},D=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},B=function(){function t(){}return t.prototype.transform=function(t,e){var n=[];for(var o in t)n.push({key:o,value:t[o]});return n},t=T([Object(o.Pipe)({name:"keys"}),D("design:paramtypes",[])],t)}(),z=n("hF4i"),A=n("4tF8"),L=n("oUgg"),q=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},E=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},H=[Object(o.forwardRef)(function(){return z.a})],W=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[]}},t=q([Object(o.NgModule)({imports:[L.CommonModule,a.FormsModule,A.a,l.c],declarations:[H],exports:[H,L.CommonModule,a.FormsModule,l.b,A.a]}),E("design:paramtypes",[])],t)}(),G=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},U=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},N=function(){function t(t,e){this.compiler=t,this.container=e}return t.prototype.ngOnChanges=function(){if(this.content){this.content="\n  \t<md-card style='box-shadow:none;padding-bottom:200px'>\n\t\t<md-card-content>\n\t\t\t"+this.content+"\n\t\t</md-card-content>\n\t</md-card>";var t=this.createNewComponent(this.content),e=this.createComponentModule(t),n=this.compiler.compileModuleAndAllComponentsSync(e).componentFactories.filter(function(t){return"dynamic-component"===t.selector})[0];this.container.clear(),this.container.createComponent(n)}},t.prototype.ngOnInit=function(){},t.prototype.createNewComponent=function(t){return function(){function e(){}return G([Object(o.Input)(),U("design:type",Object)],e.prototype,"entity",void 0),e=G([Object(o.Component)({selector:"dynamic-component",template:t}),U("design:paramtypes",[])],e)}()},t.prototype.createComponentModule=function(t){return function(){function e(){}return e=G([Object(o.NgModule)({imports:[W],declarations:[t]}),U("design:paramtypes",[])],e)}()},G([Object(o.Input)(),U("design:type",Object)],t.prototype,"content",void 0),t=G([Object(o.Component)({selector:"app-tutorial-content",template:n("SQzm"),styles:[n("dwyp")]}),U("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Compiler&&o.Compiler)&&e||Object,"function"==typeof(r="undefined"!=typeof o.ViewContainerRef&&o.ViewContainerRef)&&r||Object])],t);var e,r}(),Y=n("1vkI"),K=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},X=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Q=function(){function t(t,e){void 0===t&&(t=new Y.a([{useDebug:!1,useJit:!0}]).createCompiler()),this.compiler=t,this.container=e}return t.prototype.ngOnInit=function(){},t.prototype.ngOnChanges=function(){if(this.content){this.content="\n  \t<md-card style='box-shadow:none'>\n\t\t<md-card-content>\n\t\t\t"+this.content+"\n\t\t</md-card-content>\n\t</md-card>";var t=this.createNewComponent(this.content),e=this.createComponentModule(t),n=this.compiler.compileModuleAndAllComponentsSync(e).componentFactories.filter(function(t){return"dynamic-component"===t.selector})[0];this.container.clear(),this.container.createComponent(n)}},t.prototype.createNewComponent=function(t){return function(){function e(){}return K([Object(o.Input)(),X("design:type",Object)],e.prototype,"entity",void 0),e=K([Object(o.Component)({selector:"dynamic-component",template:t}),X("design:paramtypes",[])],e)}()},t.prototype.createComponentModule=function(t){return function(){function e(){}return e=K([Object(o.NgModule)({imports:[W,c.c],declarations:[t]}),X("design:paramtypes",[])],e)}()},K([Object(o.Input)(),X("design:type",Object)],t.prototype,"content",void 0),t=K([Object(o.Component)({selector:"app-guide-content",template:n("UvOb"),styles:[n("OT7M")]}),X("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Compiler&&o.Compiler)&&e||Object,"function"==typeof(r="undefined"!=typeof o.ViewContainerRef&&o.ViewContainerRef)&&r||Object])],t);var e,r}(),V=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},J=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};window.routing=c.b;var $=function(){function t(){}return t=V([Object(o.NgModule)({declarations:[m,y,_,R,P,F,B,N,Q],imports:[i.a,a.FormsModule,s.b,d.Ng2SelectModule,A.a.forRoot(),l.a.forRoot(),c.c.forRoot([{path:"guide",component:y},{path:"api-reference",component:_},{path:"tutorial",component:R},{path:"",redirectTo:"/guide",pathMatch:"prefix"}],{useHash:!0})],providers:[Y.a],bootstrap:[m]}),J("design:paramtypes",[])],t)}();Object(o.enableProdMode)(),Object(r.a)().bootstrapModule($)}},[0]);