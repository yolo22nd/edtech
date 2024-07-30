(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{6954:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return n(1019)}])},282:function(e,t,n){"use strict";n.d(t,{I8:function(){return c},Vv:function(){return p},db:function(){return u}});var a=n(3977),r=n(2370),i=n(9828),o=n(6650),s=(0,a.ZF)({apiKey:"AIzaSyByeLlmcXN9lXQLTBbv74lunUjItCgBDL8",authDomain:"edtech-f00cb.firebaseapp.com",projectId:"edtech-f00cb",storageBucket:"edtech-f00cb.appspot.com",messagingSenderId:"463770202385",appId:"1:463770202385:web:87a60550042ff571ed1cb0",measurementId:"G-RCHD1XEQV0"}),c=(0,r.v0)(s),p=new r.hJ,u=(0,i.ad)(s);(0,o.cF)(s)},642:function(e,t,n){"use strict";n.d(t,{aC:function(){return useAuth}}),n(5893);var a=n(7294);n(282),n(770);var r=(0,a.createContext)(),useAuth=function(){return(0,a.useContext)(r)};t.ZP=r},1019:function(e,t,n){"use strict";n.r(t);var a=n(1204),r=n(5772),i=n(8088),o=n(5893),s=n(7294),c=n(642);t.default=function(){var e,t,n=(0,r._)((0,s.useState)(""),2),p=n[0],u=n[1],l=(0,r._)((0,s.useState)(""),2),d=l[0],f=l[1],m=(0,c.aC)(),h=m.loginUser,g=m.loginWithGoogle,b=(e=(0,a._)(function(e){return(0,i.Jh)(this,function(t){switch(t.label){case 0:e.preventDefault(),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,h(p,d)];case 2:return t.sent(),[3,4];case 3:return console.error("Login error:",t.sent()),[3,4];case 4:return[2]}})}),function(t){return e.apply(this,arguments)}),_=(t=(0,a._)(function(){return(0,i.Jh)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,g()];case 1:return e.sent(),[3,3];case 2:return console.error("Google login error:",e.sent()),[3,3];case 3:return[2]}})}),function(){return t.apply(this,arguments)});return(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:b,children:[(0,o.jsx)("input",{type:"email",value:p,onChange:function(e){return u(e.target.value)},placeholder:"Email"}),(0,o.jsx)("input",{type:"password",value:d,onChange:function(e){return f(e.target.value)},placeholder:"Password"}),(0,o.jsx)("button",{type:"submit",children:"Login"})]}),(0,o.jsx)("button",{onClick:_,children:"Login with Google"})]})}},770:function(e,t,n){"use strict";var a=n(4444),r=n(8463),i=n(5816),o=n(3333);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(e,t){this._delegate=e,this.firebase=t,(0,i._addComponent)(e,new r.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,i.deleteApp)(this._delegate)))}_getService(e,t=i._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();let a=this._delegate.container.getProvider(e);return a.isInitialized()||(null===(n=a.getComponent())||void 0===n?void 0:n.instantiationMode)!=="EXPLICIT"||a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=i._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,i._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,i._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}};let s=new a.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),c=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createFirebaseNamespace(){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},n={__esModule:!0,initializeApp:function(r,o={}){let s=i.initializeApp(r,o);if((0,a.r3)(t,s.name))return t[s.name];let c=new e(s,n);return t[s.name]=c,c},app,registerVersion:i.registerVersion,setLogLevel:i.setLogLevel,onLog:i.onLog,apps:null,SDK_VERSION:i.SDK_VERSION,INTERNAL:{registerComponent:function(t){let r=t.name,o=r.replace("-compat","");if(i._registerComponent(t)&&"PUBLIC"===t.type){let serviceNamespace=(e=app())=>{if("function"!=typeof e[o])throw s.create("invalid-app-argument",{appName:r});return e[o]()};void 0!==t.serviceProps&&(0,a.ZB)(serviceNamespace,t.serviceProps),n[o]=serviceNamespace,e.prototype[o]=function(...e){let n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:i}};function app(e){if(e=e||i._DEFAULT_ENTRY_NAME,!(0,a.r3)(t,e))throw s.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),app.App=e,n}(FirebaseAppImpl);return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace,extendNamespace:function(t){(0,a.ZB)(e,t)},createSubscribe:a.ne,ErrorFactory:a.LL,deepExtend:a.ZB}),e}(),p=new o.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,a.jU)()&&void 0!==self.firebase){p.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}(0,i.registerVersion)("@firebase/app-compat","0.2.37",void 0),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */c.registerVersion("firebase","10.12.4","app-compat")}},function(e){e.O(0,[774,16,724,941,888,179],function(){return e(e.s=6954)}),_N_E=e.O()}]);