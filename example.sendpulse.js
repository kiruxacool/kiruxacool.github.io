function oSendpulsePush() {
    var f = "http://kfuxzm4i.plp7.ru";
    var g = "http://kfuxzm4i.plp7.ru";
    var a = "https://kfuxzm4i.sendpulse.com";
    var r = "https://kfuxzm4i.sendpulse.com";
    var l = true;
    var e = true;
    var E = "f175fd31cf56bf53c624d013860634a4";
    var d = "{\"style\":\"sendpulse-bar\",\"textcolor\":\"#222222\",\"backgroundcolor\":\"#ffffff\",\"buttoncolor\":\"#31b58e\",\"iconcolor\":\"\",\"btncolor\":\"\",\"allowbtntext\":\"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c\",\"disallowbtntext\":\"\u0417\u0430\u043f\u0440\u0435\u0442\u0438\u0442\u044c\",\"btn_lang\":\"ru\",\"icon\":\"\/img\/my\/push\/push-default-icons\/icon.png\"}";
    var C = "";
    var t = "Р Р°Р·СЂРµС€РёС‚Рµ СЃР°Р№С‚Сѓ  РѕС‚РїСЂР°РІР»СЏС‚СЊ РІР°Рј СѓРІРµРґРѕРјР»РµРЅРёСЏ РЅР° СЂР°Р±РѕС‡РёР№ СЃС‚РѕР»";
    var h = "https://pushdata.sendpulse.com:4434";
    var y = "https://pushdata.sendpulse.com:4435";
    var i = "web.com.sendpulse.push";
    var p = {};
    var D = "";
    var x = null;
    var m = null;
    var q = null;
    var k = {};
    var s = false;
    var u = "1";
    var b = "https://sendpulse.com/ru/webpush-powered-by-sendpulse";
    var B = {
        ru: "РџСЂРµРґРѕСЃС‚Р°РІР»РµРЅРѕ SendPulse",
        en: "Powered by SendPulse",
        ua: "РќР°РґР°РЅРѕ SendPulse",
        de: "UnterstГјtzt von SendPulse"
    };
    var n = {
        ru: "Р·Р°РїСЂР°С€РёРІР°РµС‚ СЂР°Р·СЂРµС€РµРЅРёРµ РЅР°:",
        en: "wants to:",
        ua: "Р·Р°РїРёС‚СѓС” РґРѕР·РІС–Р» РЅР°:",
        de: "bittet eine Erlaubnis"
    };
    var j = {
        ru: "РџРѕРєР°Р·С‹РІР°С‚СЊ РѕРїРѕРІРµС‰РµРЅРёСЏ",
        en: "Show notifications",
        ua: "РџРѕРєР°Р·СѓРІР°С‚Рё СЃРїРѕРІС–С‰РµРЅРЅСЏ",
        de: "Benachrichtigunggen anzuzeigen"
    };
    var v = {ru: "Р Р°Р·СЂРµС€РёС‚СЊ", en: "Allow", ua: "Р”РѕР·РІРѕР»РёС‚Рё", de: "Erlauben"};
    var A = {ru: "Р‘Р»РѕРєРёСЂРѕРІР°С‚СЊ", en: "Block", ua: "Р‘Р»РѕРєСѓРІР°С‚Рё", de: "Blockieren"};
    var o = false;
    var z = "0";
    var c = "9dae6d62c816560a842268bde2cd317d";
    var w = "7c977009d5861eebb711656eb7d87a74";
    this.start = function () {
        if (!oSpP.detectSite()) {
            oSpP.log("Application allowed only for " + f);
            return false
        }
        if (oSpP.detectOs() == "iOS") {
            oSpP.log("Application can not work on iOS");
            return false
        }
        var F = oSpP.detectOs();
        if (!e) {
            if ((F == "iOS") || (F == "Android")) {
                oSpP.log("Application disabled for your device");
                return false
            }
        }
        p = oSpP.detectBrowser();
        D = p.name.toLowerCase();
        if ((D == "chrome") && (parseFloat(p.version) < 42)) {
            oSpP.log("Application can not work with Crome browser version less then 42");
            return false
        }
        if ((D == "firefox") && (parseFloat(p.version) < 44)) {
            oSpP.log("Application can not work with Firefox browser version less then 44");
            return false
        }
        if ((D == "firefox") && (F == "Android")) {
            oSpP.log("Application can not work with Firefox on Android");
            return false
        }
        if (D == "firefox") {
            a = r
        }
        if ((D == "chrome") || (D == "firefox") || (D == "opera")) {
            window.addEventListener("message", function (I) {
                if (I.origin.toLowerCase() == a.toLowerCase()) {
                    if (I.data == "initend") {
                        clearInterval(m)
                    } else {
                        if (I.data == "closeme") {
                            q.close()
                        } else {
                            oSpP.storeSubscription(I.data)
                        }
                    }
                }
            }, false);
            if (l) {
                oSpP.getDbValue("SPIDs", "SubscriptionId", function (I) {
                    if (I.target.result === undefined) {
                        oSpP.getDbValue("SPIDs", "PromptClosed", function (K) {
                            if (K.target.result === undefined) {
                                oSpP.startDelayedSubscription(oSpP.showPrompt)
                            } else {
                                var J = parseInt(K.target.result.value);
                                J--;
                                if (J == 0) {
                                    oSpP.deleteDbValue("SPIDs", "PromptClosed");
                                    oSpP.startDelayedSubscription(oSpP.showPrompt)
                                } else {
                                    oSpP.putValueToDb("SPIDs", {type: "PromptClosed", value: J})
                                }
                            }
                        })
                    }
                })
            } else {
                var H = document.querySelectorAll(".sp_notify_prompt");
                for (var G = 0; G < H.length; G++) {
                    H[G].addEventListener("click", function () {
                        oSpP.showPopUp()
                    })
                }
            }
        } else {
            if (D == "safari") {
                if (l) {
                    oSpP.startDelayedSubscription(oSpP.startSubscription)
                } else {
                    var H = document.querySelectorAll(".sp_notify_prompt");
                    for (var G = 0; G < H.length; G++) {
                        H[G].addEventListener("click", function () {
                            oSpP.startSubscription()
                        })
                    }
                }
            }
        }
    };
    this.startSubscription = function () {
        switch (D) {
            case"safari":
                if (oSpP.isSafariNotificationSupported()) {
                    var F = window.safari.pushNotification.permission(i);
                    oSpP.checkSafariPermission(F)
                }
                break
        }
    };
    this.checkCookie = function (G) {
        for (var I = G + "=", H = document.cookie.split(";"), J = 0; J < H.length; J++) {
            for (var F = H[J]; " " == F.charAt(0);) {
                F = F.substring(1)
            }
            if (0 == F.indexOf(I)) {
                return F.substring(I.length, F.length)
            }
        }
        return ""
    };
    this.checkSafariPermission = function (F) {
        oSpP.log("[DD] Permissions: " + F.permission);
        if (F.permission === "default") {
            o = true;
            oSpP.getDbValue("SPIDs", "PromptShowed", function (G) {
                if (G.target.result === undefined) {
                    oSpP.sendPromptStat("prompt_showed");
                    oSpP.putValueToDb("SPIDs", {type: "PromptShowed", value: 1})
                } else {
                    oSpP.sendPromptStat("prompt_showed_again")
                }
            });
            window.safari.pushNotification.requestPermission(h, i, {appkey: E}, oSpP.checkSafariPermission)
        } else {
            if (F.permission === "denied") {
                if (o) {
                    oSpP.sendPromptStat("prompt_denied")
                }
            } else {
                if (F.permission === "granted") {
                    oSpP.uns();
                    if (o) {
                        oSpP.sendPromptStat("prompt_granted")
                    }
                    oSpP.subscribe()
                }
            }
        }
    };
    this.subscribe = function () {
        switch (D) {
            case"safari":
                var G = window.safari.pushNotification.permission(i);
                if (G.permission === "granted") {
                    var F = G.deviceToken;
                    oSpP.checkLocalSubsctoption(F)
                }
                break
        }
    };
    this.checkLocalSubsctoption = function (F) {
        oSpP.log("[DD] subscribe :: subscriptionId: " + F);
        oSpP.getDbValue("SPIDs", "SubscriptionId", function (G) {
            if (G.target.result === undefined) {
                oSpP.sendSubscribeDataToServer(F, "subscribe");
                oSpP.putValueToDb("SPIDs", {type: "SubscriptionId", value: F})
            } else {
                if (G.target.result.value !== F) {
                    oSpP.sendSubscribeDataToServer(G.target.result.value, "unsubscribe");
                    oSpP.sendSubscribeDataToServer(F, "subscribe");
                    oSpP.putValueToDb("SPIDs", {type: "SubscriptionId", value: F})
                }
            }
        })
    };
    this.sendSubscribeDataToServer = function (G, K, H) {
        var J = new XMLHttpRequest();
        J.open("POST", h, true);
        J.setRequestHeader("Content-Type", "application/json");
        if (H === undefined) {
            H = {};
            H.uname = oSpP.checkCookie("lgn");
            H.os = oSpP.detectOs()
        }
        H.variables = oSpP.getUserVariables();
        var F = window.location.href;
        var I = {
            action: "subscription",
            subscriptionId: G,
            subscription_action: K,
            appkey: E,
            browser: p,
            lang: oSpP.getBrowserlanguage(),
            url: F,
            custom_data: H
        };
        J.send(JSON.stringify(I))
    };
    this.isSafariNotificationSupported = function () {
        return "safari" in window && "pushNotification" in window.safari
    };
    this.storeSubscription = function (F) {
        oSpP.log("StoreSubscription: " + F);
        oSpP.putValueToDb("SPIDs", {type: "SubscriptionId", value: F})
    };
    this.clearDomain = function (F) {
        return F.replace("://www.", "://").replace("://www2.", "://")
    };
    this.detectSite = function () {
        var F = (!(oSpP.clearDomain(window.location.href.toLowerCase()).indexOf(oSpP.clearDomain(f.toLowerCase())) === -1));
        if (!F) {
            F = (!(oSpP.clearDomain(window.location.href.toLowerCase()).indexOf(oSpP.clearDomain(g.toLowerCase())) === -1))
        }
        return F
    };
    this.getBrowserlanguage = function () {
        return navigator.language.substring(0, 2)
    };
    this.getUserVariables = function () {
        var G = {};
        var F = document.querySelectorAll("input.sp_push_custom_data");
        for (var H = 0; H < F.length; H++) {
            switch (F[H].type) {
                case"text":
                case"hidden":
                    G[F[H].name] = F[H].value;
                    break;
                case"checkbox":
                    G[F[H].name] = (F[H].checked) ? 1 : 0;
                    break;
                case"radio":
                    if (F[H].checked) {
                        G[F[H].name] = F[H].value
                    }
                    break
            }
        }
        return G
    };
    this.showPopUp = function () {
        if (l) {
            oSpP.sendPromptStat("prompt_granted")
        } else {
        }
        var M = 580;
        var I = 580;
        var K = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var F = window.screenTop !== undefined ? window.screenTop : screen.top;
        var G = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var N = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var H = ((G / 2) - (M / 2)) + K;
        var L = ((N / 3) - (N / 3)) + F;
        var J = oSpP.getBrowserlanguage();
        if (J == "") {
            J = "en"
        }
        q = window.open(a + "/" + c + "/" + J + "/" + E + "/" + w, "_blank", "scrollbars=yes, width=" + M + ", height=" + I + ", top=" + L + ", left=" + H);
        if (window.focus) {
            q.focus()
        }
        m = setInterval(function () {
            q.postMessage("init", a);
            q.postMessage("initpage|" + window.location.href, a);
            q.postMessage("initvariables|" + JSON.stringify(oSpP.getUserVariables()), a)
        }, 100);
        if (l) {
            oSpP.closePrompt(true)
        }
    };
    this.showPrompt = function () {
        oSpP.getDbValue("SPIDs", "PromptShowed", function (ad) {
            if (ad.target.result === undefined) {
                oSpP.sendPromptStat("prompt_showed");
                oSpP.putValueToDb("SPIDs", {type: "PromptShowed", value: 1})
            } else {
                oSpP.sendPromptStat("prompt_showed_again")
            }
        });
        var N = document.getElementsByTagName("head")[0];
        var J = document.createElement("link");
        J.rel = "stylesheet";
        J.type = "text/css";
        J.href = "https://cdn.sendpulse.com/dist/css/push/sendpulse-prompt.min.css";
        J.media = "all";
        N.appendChild(J);
        var K = oSpP.getMessageLang(oSpP.getBrowserlanguage());
        var W;
        var S = "sendpulse-popover";
        var Y = "display:none;";
        var O = true;
        if (typeof u != "undefined") {
            if (u == 0) {
                O = false
            }
        }
        if (d.length > 0) {
            var I = '<svg style="display: none;"><symbol id="sp_bell_icon"><path d="M139.165 51.42L103.39 15.558C43.412 61.202 3.74 132.185 0 212.402h50.174c3.742-66.41 37.877-124.636 88.99-160.98zM474.98 212.403h50.173c-3.742-80.217-43.413-151.2-103.586-196.845L385.704 51.42c51.398 36.346 85.533 94.572 89.275 160.982zm-49.388 12.582c0-77-53.39-141.463-125.424-158.487v-17.09c0-20.786-16.76-37.613-37.592-37.613s-37.592 16.827-37.592 37.614v17.09C152.95 83.52 99.56 148.004 99.56 224.983v137.918L49.408 413.01v25.076h426.336V413.01l-50.152-50.108V224.984zM262.576 513.358c3.523 0 6.76-.22 10.065-1.007 16.237-3.237 29.825-14.528 36.06-29.626 2.517-5.952 4.05-12.494 4.05-19.54H212.4c0 27.593 22.582 50.174 50.174 50.174z" /></symbol></svg>';
            var V = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAk1BMVEUNkaAmtrIltLEMj58Mj58mtrIks7EfrK0MkKD///8Pk6EmtrIisK8cp6oTmaQRlqIZoqkVnKaz4OL7/v7t+PhjvsT4/P3l9vbY8PDM6uy74+Ww3uGc2dt3ysx1xMoyrLLx+fro9vat4+Kj2t2NztOB0dF/yc5myMhevsNMwL8/u7pMsLlDr7cyuLY9sbY7p7IkpazkILODAAAABnRSTlPn5ubmSkmZnvKZAAAAiElEQVQI10XHVRbCQBBE0SJGeoCxuONu+18dpDPn5P7UK4SL1WwRwovYnl7jeIgmBd14sWZ3ogsHlqwjOnG4b8uknf6G7dqi5oAevelalXo4ZBqaiIYu+Vr622oYY9K+qcwzy865NZBS2iY9ypGREkqpPqGHciCE+FAuhQPEsUjr2AECP575wQ+doQxkp1hUBQAAAABJRU5ErkJggg==">';
            W = JSON.parse(d);
            S = W.style;
            var M = document.createElement("div");
            M.setAttribute("class", "sendpulse-prompt " + S);
            if (W.backgroundcolor.length > 0) {
                Y = Y + "background-color: " + W.backgroundcolor + ";"
            }
            M.setAttribute("style", Y);
            var ab = document.createElement("div");
            ab.setAttribute("class", "sendpulse-prompt-message");
            var aa = document.createElement("img");
            aa.setAttribute("class", "sendpulse-bell-icon");
            aa.setAttribute("width", "14");
            aa.setAttribute("height", "14");
            aa.setAttribute("src", "https://cdn.sendpulse.com/img/push/icon-ring.svg");
            if (O) {
                var U = document.createElement("span");
                U.setAttribute("class", "sp-link-wrapper");
                var X = document.createElement("a");
                X.setAttribute("class", "sp-link");
                X.setAttribute("href", b);
                X.setAttribute("target", "_blank");
                var P = document.createElement("span");
                if (S == "sendpulse-modal") {
                    P.setAttribute("style", "color:" + W.textcolor + " !important;")
                }
                P.innerHTML = B[K];
                if (S != "sendpulse-bar") {
                    X.innerHTML = V
                }
                X.appendChild(P);
                U.appendChild(X)
            }
            if (S == "sendpulse-bar") {
                var R = document.createElement("div");
                R.setAttribute("class", "sendpulse-prompt-info sendpulse-prompt-message-text");
                R.setAttribute("style", "color: " + W.textcolor + " !important;");
                R.innerHTML += t;
                var T = document.createElement("span");
                ab.innerHTML += I + '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="sendpulse-bell-icon"><use class="sendpulse-bell-path" style="fill: ' + W.textcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0" />  </svg>'
            } else {
                if (S == "sendpulse-modal" || S == "sendpulse-safari" || S == "sendpulse-fab") {
                    var R = document.createElement("div");
                    R.setAttribute("class", "sendpulse-prompt-title sendpulse-prompt-message-text");
                    if (W.textcolor.length > 0) {
                        R.setAttribute("style", "color: " + W.textcolor + " !important;")
                    }
                    R.innerHTML = C;
                    var T = document.createElement("div");
                    T.setAttribute("class", "sendpulse-prompt-info sendpulse-prompt-message-text");
                    if (W.textcolor.length > 0) {
                        T.setAttribute("style", "color: " + W.textcolor + " !important;")
                    }
                    T.innerHTML += t;
                    if (S == "sendpulse-safari") {
                        aa.setAttribute("src", "https://cdn.sendpulse.com" + W.icon);
                        aa.setAttribute("width", "64");
                        aa.setAttribute("height", "64");
                        ab.appendChild(aa)
                    } else {
                        if (S != "sendpulse-fab") {
                            ab.innerHTML += I + '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="sendpulse-bell-icon"><use class="sendpulse-bell-path" style="fill: ' + W.textcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0" />  </svg>'
                        }
                    }
                    if (S == "sendpulse-fab") {
                        var Z = document.createElement("div");
                        Z.setAttribute("class", "sendpulse-prompt-fab");
                        if (W.btncolor.length > 0) {
                            Z.setAttribute("style", "background-color: " + W.btncolor + " !important;")
                        }
                        Z.innerHTML += I + '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="sendpulse-bell-icon" ><use class="sendpulse-bell-path bell-prompt-fab" style="fill: ' + W.iconcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0" /></svg>';
                        Z.setAttribute("onclick", "oSpP.showPopUp(); return false;")
                    }
                }
            }
        } else {
            var M = document.createElement("div");
            M.setAttribute("class", "sendpulse-prompt " + S);
            M.setAttribute("style", Y);
            var ab = document.createElement("div");
            ab.setAttribute("class", "sendpulse-prompt-message");
            var R = document.createElement("div");
            R.setAttribute("class", "sendpulse-prompt-message-text");
            R.innerHTML = g + " " + n[K];
            var T = document.createElement("div");
            T.setAttribute("class", "sendpulse-prompt-info sendpulse-prompt-message-text");
            var aa = document.createElement("img");
            aa.setAttribute("class", "sendpulse-bell-icon");
            aa.setAttribute("width", "14");
            aa.setAttribute("height", "14");
            aa.setAttribute("src", "https://cdn.sendpulse.com/img/push/icon-ring.svg");
            T.appendChild(aa);
            T.innerHTML += " " + j[K]
        }
        if (S != "sendpulse-fab") {
            var F = document.createElement("div");
            F.setAttribute("class", "sendpulse-prompt-buttons");
            var ac = document.createElement("button");
            ac.setAttribute("class", "sendpulse-prompt-btn sendpulse-accept-btn");
            ac.setAttribute("type", "button");
            ac.setAttribute("onclick", "oSpP.showPopUp(); return false;");
            ac.innerHTML = v[K];
            var H = document.createElement("button");
            H.setAttribute("class", "sendpulse-prompt-btn sendpulse-disallow-btn");
            H.setAttribute("type", "button");
            H.setAttribute("onclick", "oSpP.denyMessage(); return false;");
            H.innerHTML = A[K];
            if (S != "sendpulse-popover") {
                ac.innerHTML = W.allowbtntext;
                H.innerHTML = W.disallowbtntext;
                if (S != "sendpulse-safari") {
                    ac.setAttribute("style", "background-color:" + W.buttoncolor + " !important;border-color:" + W.buttoncolor + " !important;");
                    H.setAttribute("style", "color:" + W.buttoncolor + " !important;")
                }
            }
            if (d.length == 0 && O) {
                var U = document.createElement("span");
                U.setAttribute("class", "sp-link-wrapper");
                var X = document.createElement("a");
                X.setAttribute("class", "sp-link");
                X.setAttribute("href", b);
                X.setAttribute("target", "_blank");
                var P = document.createElement("span");
                P.innerHTML = B[K];
                if (S == "sendpulse-modal") {
                    P.setAttribute("style", "color:" + W.textcolor + " !important;")
                }
                X.appendChild(P);
                U.appendChild(X);
                F.appendChild(U)
            } else {
                if (O && typeof U != "undefined") {
                    F.appendChild(U)
                }
            }
            F.appendChild(H);
            F.appendChild(ac);
            if (O && S == "sendpulse-modal") {
                var Q = document.createElement("div");
                Q.innerHTML = "&nbsp;";
                F.appendChild(Q)
            }
        }
        ab.appendChild(R);
        ab.appendChild(T);
        if (S != "sendpulse-fab") {
            ab.appendChild(F);
            if (S == "sendpulse-bar") {
                if (O && typeof U != "undefined") {
                    M.appendChild(U)
                }
            }
            M.appendChild(ab)
        } else {
            if (O && typeof U != "undefined") {
                ab.appendChild(U)
            }
            M.appendChild(ab);
            M.appendChild(Z)
        }
        if (S != "sendpulse-popover" && S != "sendpulse-safari" && S != "sendpulse-fab") {
            var G = document.createElement("button");
            G.setAttribute("class", "sendpulse-prompt-close");
            G.setAttribute("onclick", "oSpP.closePrompt(); return false;");
            G.setAttribute("style", "color:" + W.textcolor + " !important;");
            G.innerHTML = "&times;";
            M.appendChild(G)
        }
        document.body.insertBefore(M, document.body.childNodes[0]);
        if (S == "sendpulse-modal") {
            var L = document.createElement("div");
            L.setAttribute("class", "sendpulse-prompt-backdrop");
            L.setAttribute("style", "display:none;");
            document.body.insertBefore(L, document.body.childNodes[1])
        }
        setTimeout(function () {
            M.className += M.className ? " show-prompt" : "show-prompt"
        }, 1000)
    };
    this.denyMessage = function () {
        oSpP.sendPromptStat("prompt_denied");
        oSpP.storeSubscription("DENY");
        oSpP.closePrompt(true)
    };
    this.closePrompt = function (F) {
        if (F === undefined) {
            oSpP.sendPromptStat("prompt_closed")
        }
        document.body.removeChild(document.querySelector(".sendpulse-prompt"));
        if (document.getElementsByClassName("sendpulse-prompt-backdrop").length > 0) {
            document.body.removeChild(document.querySelector(".sendpulse-prompt-backdrop"))
        }
        oSpP.putValueToDb("SPIDs", {type: "PromptClosed", value: 5})
    };
    this.initDb = function (H) {
        if (x) {
            return void H()
        }
        var G = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        var F = G.open("sendpulse_push_db", 2);
        F.onsuccess = function (I) {
            x = I.target.result;
            H()
        };
        F.onupgradeneeded = function (I) {
            var J = I.target.result;
            J.createObjectStore("SPIDs", {keyPath: "type"})
        }
    };
    this.getDbValue = function (F, G, H) {
        oSpP.initDb(function () {
            x.transaction([F], "readonly").objectStore(F).get(G).onsuccess = H
        })
    };
    this.putValueToDb = function (F, G) {
        oSpP.initDb(function () {
            x.transaction([F], "readwrite").objectStore(F).put(G)
        })
    };
    this.deleteDbValue = function (F, G) {
        oSpP.initDb(function () {
            x.transaction([F], "readwrite").objectStore(F)["delete"](G)
        })
    };
    this.log = function (F) {
    };
    this.detectBrowser = function () {
        var H, G = navigator.userAgent,
            F = G.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        var I = G.match(/(edge(?=\/))\/?\s*(\d+)/i) || [];
        if ("Edge" === I[1]) {
            return {name: I[1], version: I[2]}
        }
        return /trident/i.test(F[1]) ? (H = /\brv[ :]+(\d+)/g.exec(G) || [], {
            name: "IE",
            version: H[1] || ""
        }) : "Chrome" === F[1] && (H = G.match(/\bOPR\/(\d+)/), null != H) ? {
            name: "Opera",
            version: H[1]
        } : (F = F[2] ? [F[1], F[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (H = G.match(/version\/(\d+)/i)) && F.splice(1, 1, H[1]), {
            name: F[0],
            version: F[1]
        })
    };
    this.detectOs = function () {
        var F = "";
        if (navigator.userAgent.indexOf("Windows") != -1) {
            return ("Windows")
        }
        if (navigator.userAgent.indexOf("Android") != -1) {
            return ("Android")
        }
        if (navigator.userAgent.indexOf("Linux") != -1) {
            return ("Linux")
        }
        if (navigator.userAgent.indexOf("iPhone") != -1) {
            return ("iOS")
        }
        if (navigator.userAgent.indexOf("Mac") != -1) {
            return ("Mac OS")
        }
        if (navigator.userAgent.indexOf("FreeBSD") != -1) {
            return ("FreeBSD")
        }
        return ""
    };
    this.uns = function () {
        oSpP.deleteDbValue("SPIDs", "SubscriptionId")
    };
    this.getMessageLang = function (F) {
        F = F.substring(0, 2).toLowerCase();
        if (F == "ua" || F == "uk") {
            return "ua"
        } else {
            if (F == "ru") {
                return "ru"
            } else {
                if (F == "de") {
                    return "de"
                } else {
                    return "en"
                }
            }
        }
    };
    this.push = function (F, G) {
        if (!oSpP.detectSite()) {
            oSpP.log("Application allowed only for " + f);
            return false
        }
        k[F] = G;
        oSpP.getDbValue("SPIDs", "SubscriptionId", function (H) {
            if (H.target.result === undefined) {
                if (!s) {
                    s = setInterval(function () {
                        oSpP.getDbValue("SPIDs", "SubscriptionId", function (I) {
                            if (I.target.result !== undefined) {
                                oSpP.sendUpdatesToServer(I.target.result.value);
                                clearInterval(s);
                                s = false
                            }
                        })
                    }, 1000)
                }
            } else {
                oSpP.sendUpdatesToServer(H.target.result.value)
            }
        })
    };
    this.sendUpdatesToServer = function (F) {
        var H = new XMLHttpRequest();
        H.open("POST", h, true);
        H.setRequestHeader("Content-Type", "application/json");
        var G = {
            action: "subscription",
            subscriptionId: F,
            subscription_action: "update_variables",
            appkey: E,
            custom_data: {variables: k}
        };
        H.send(JSON.stringify(G))
    };
    this.sendPromptStat = function (F) {
    };
    this.getPromptDelay = function () {
        return parseInt(z)
    };
    this.startDelayedSubscription = function (G) {
        if ((parseInt(z)) > 0) {
            var F = setInterval(function () {
                oSpP.getDbValue("SPIDs", "PromptDelay", function (H) {
                    if (H.target.result !== undefined) {
                        if ((new Date().getTime()) >= H.target.result.value) {
                            clearInterval(F);
                            G()
                        }
                    } else {
                        G()
                    }
                })
            }, 1000)
        } else {
            G()
        }
    };
    this.getAuthEmailFromUrl = function () {
        var H = window.location.href;
        var G = "spush";
        var J = new RegExp("[?&]" + G + "(=([^&#]*)|&|#|$)"), I = J.exec(H);
        if (!I) {
            return
        }
        if (!I[2]) {
            return
        }
        var F = atob(decodeURIComponent(I[2].replace(/\+/g, " ")));
        if (typeof F != "undefined" && F.length > 0) {
            oSpP.push("email", F)
        }
    }
}

window.addEventListener("load", function () {
    if (oSpP.getPromptDelay() > 0) {
        oSpP.getDbValue("SPIDs", "PromptDelay", function (a) {
            if (a.target.result === undefined) {
                oSpP.putValueToDb("SPIDs", {
                    type: "PromptDelay",
                    value: (new Date().getTime()) + oSpP.getPromptDelay() * 1000
                });
                oSpP.start()
            } else {
                oSpP.start()
            }
        })
    } else {
        oSpP.start()
    }
    oSpP.getAuthEmailFromUrl()
});
var oSpP = new oSendpulsePush();