// JSODOC = {
//     "method": "getOS",
//     "params": [
//         {
//             "name": "testAgent",
//             "type": "String",
//             "required": false,
//             "default": null,
//             "info": "For use if you want to test a user agent string"
//         }
//     ],
//     "returns": "",
//     "info": "Gets what OS is in use",
//     "example": [
//         "let os = getOS()"
//     ]
// } JSODOC

export function getOS(testAgent) {
    let userAgent;

    if (!testAgent){
        userAgent = navigator.userAgent || navigator.vendor || window.opera;
    } else {
        userAgent = testAgent;
    }

    userAgent = userAgent.toLowerCase();




    // Windows Phone must come first because its UA also contains "Android"!
    if (/windows phone/i.test(userAgent)) {
        return {
            os:"windows phone",
            userAgent:userAgent
        }
    }

    // Samsung Browser detection S8
    if (/samsungbrowser/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }



    if (/android/i.test(userAgent)) {
        return {
            os:"android",
            userAgent:userAgent
        }
    }

    if (/ipad|iphone|ipod/i.test(userAgent)) {
        return {
            os:"ios",
            userAgent:userAgent
        }
    }



    // Windows Phone must come first because its UA also contains "Android"
    if (/win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent)) {
        return {
            os:"windows",
            userAgent:userAgent
        }
    }


    if (/os x/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/macintosh|osx/i.test(userAgent)) {
        return {
            os:"osx",
            userAgent:userAgent
        }
    }

    if (/openbsd/i.test(userAgent)) {
        return {
            os:"open bsd",
            userAgent:userAgent
        }
    }


    if (/sunos/i.test(userAgent)) {
        return {
            os:"sunos",
            userAgent:userAgent
        }
    }






    if (/crkey/i.test(userAgent)) {
        return {
            os:"chromecast",
            userAgent:userAgent
        }
    }

    if (/appletv/i.test(userAgent)) {
        return {
            os:"apple tv",
            userAgent:userAgent
        }
    }

    if (/wiiu/i.test(userAgent)) {
        return {
            os:"nintendo wiiu",
            userAgent:userAgent
        }
    }

    if (/nintendo 3ds/i.test(userAgent)) {
        return {
            os:"nintendo 3ds",
            userAgent:userAgent
        }
    }

    if (/playstation/i.test(userAgent)) {
        return {
            os:"playstation",
            userAgent:userAgent
        }
    }

    if (/kindle/i.test(userAgent)) {
        return {
            os:"amazon kindle",
            userAgent:userAgent
        }
    }

    if (/ cros /i.test(userAgent)) {
        return {
            os:"chrome os",
            userAgent:userAgent
        }
    }



    if (/ubuntu/i.test(userAgent)) {
        return {
            os:"ubuntu",
            userAgent:userAgent
        }
    }


    if (/googlebot/i.test(userAgent)) {
        return {
            os:"google bot",
            userAgent:userAgent
        }
    }

    if (/bingbot/i.test(userAgent)) {
        return {
            os:"bing bot",
            userAgent:userAgent
        }
    }

    if (/yahoo! slurp/i.test(userAgent)) {
        return {
            os:"yahoo bot",
            userAgent:userAgent
        }
    }



    return {
        os: false,
        userAgent:userAgent
    };
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

