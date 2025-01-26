// ==UserScript==
// @name         BC 自动封禁
// @namespace    https://www.bondageprojects.com/
// @version      0.3.0
// @description  代码测试
// @author       0 0
// @include      /^https:\/\/(www\.)?bondageprojects\.elementfx\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @include      /^https:\/\/(www\.)?bondage-europe\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant        none
// @license      MIT
// ==/UserScript==

import { get, post } from "./son.js";

(function ( bcModSdk ) {
    'use strict';
    // =======================================================================================
    
    const MOD_NAME = "自动封禁";
    const MOD_FULL_NAME = "自动封禁";
    const MOD_VERSION = "0.0.1";

    const 笨蛋Luzi = bcModSdk.registerMod({
        name: MOD_NAME,
        fullName: MOD_FULL_NAME,
        version: MOD_VERSION
    });
    // 钩子函数
    笨蛋Luzi.hookFunction("ChatRoomMessage", 0, (args, next) => {
        const data = args[0];  
             console.log(data);  
            return next(args);     
      });
    // ========================================================================
    // ========================================================================
})();