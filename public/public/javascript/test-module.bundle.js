"use strict";function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}const t=()=>function(){for(var t,r,o=0,n="";o<arguments.length;)(t=arguments[o++])&&(r=e(t))&&(n&&(n+=" "),n+=r);return n}("test-module","test-module--active");t(),exports.TestModule=t;