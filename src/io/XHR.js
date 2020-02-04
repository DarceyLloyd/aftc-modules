// TODO: REWORK THIS TO SOMETHING NICE AND SHORT OR USE FETCH

export function XHR() {
    let args = {
        url: false,
        method: false,
        data: false,
        dataType: false,
        responseType: false,
        onComplete: false,
        onError: false,
        onProgress: false,
        onCancel: false
    };

    // Process arguments
    if (arguments[0] && typeof (arguments[0]) === "object") {
        for (let key in arguments[0]) {
            if (args.hasOwnProperty(key)) {
                args[key] = arguments[0][key];
            }
        }
    }

    let params = {
        url: false,
        requestHeader: false,
        xhr: false,
        readyState: false,
        status: false,
        responseType: false,
        response: null,
        percentComplete: 0,
        isImage: false,
        imageType: ""
    };
    // - - - - - - - - - - - - - - - - - - -




    // - - - - - - - - - - - - - - - - - - -
    function init() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            params.xhr = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            params.xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        params.xhr.addEventListener("progress", updateProgress);
        params.xhr.addEventListener("load", transferComplete);
        params.xhr.addEventListener("error", transferFailed);
        params.xhr.addEventListener("abort", transferCanceled);

        // format and check args
        if (!args.method) {
            args.method = "GET";
        } else {
            args.method = String(args.method).toUpperCase();
        }

        if (!args.dataType) {
            args.dataType = "form";
        } else {
            args.dataType = String(args.dataType).toLowerCase();
        }

        if (args.method === "GET") {
            // GET
            if (args.dataType != "form") {
                let msg = "AFTC.XHR: ERROR: GET only supports the 'form' data type (key value pairs eg a=1&b=2)";
                console.error(msg);
                if (args.onError) {
                    args.onError(msg);
                }
                return false;
            }
        } else {
            // POST
            if (args.dataType != "form" && args.dataType != "formdata" && args.dataType != "json" && args.dataType != "array" && args.dataType != "object") {
                let msg = "AFTC.XHR: ERROR: The dataType option only supports 'form', 'formdata', 'json', 'array' or 'object'";
                console.error(msg);
                if (args.onError) {
                    args.onError(msg);
                }
            }
            return false;
        }


        if (!args.url) {
            let msg = "AFTC.XHR: ERROR: Please specify a URL!";
            console.error(msg);
            if (args.onError) {
                args.onError(msg);
            }
            return false;
        }
        // - - - -

        // Set response headers
        if (args.responseType) {
            args.responseType = String(args.responseType).toLowerCase();
            if (args.responseType.indexOf("json") != -1) {
                params.xhr.responseType = 'json';
            }
        }
        // - - - -

        // Open, setRequestHeader, Send
        if (!args.data) {
            params.xhr.open(args.method, args.url, true);
            params.xhr.send();
        } else {
            processData();

            if (args.dataType === "form") {
                params.requestHeader = "application/x-www-form-urlencoded; charset=utf-8";
            } else if (args.dataType === "formdata") {
                //params.requestHeader = "multipart/form-data";
            } else if (args.dataType === "json") {
                params.requestHeader = "application/json; charset=utf-8";
            } else {

            }


            params.xhr.open(args.method, args.url, true);
            if (params.requestHeader) {
                params.xhr.setRequestHeader("Content-Type", params.requestHeader);
            }


            switch (args.method) {
                case "GET":
                    params.xhr.send();
                    break;
                default:
                    params.xhr.send(args.data);
                    break;
            }

            // log("getResponseHeader = " + params.xhr.getResponseHeader("Content-Type"));

        }
        // - - - -

    }
    // - - - - - - - - - - - - - - - - - - -



    // - - - - - - - - - - - - - - - - - - -
    function responseError(msg, e) {
        console.error(msg);
        if (args.onError) {
            if (!e) {
                args.onError(params.xhr);
            } else {
                args.onError(e);
            }
        }
        return false;
    }
    // - - - - - - - - - - - - - - - - - - -


    // - - - - - - - - - - - - - - - - - - -
    function updateProgress(e) {
        params.percentComplete = 0;
        if (e.lengthComputable) {
            params.percentComplete = (100 / e.total) * e.loaded;
            params.percentComplete = parseFloat(params.percentComplete.toFixed(2));
        } else {
            params.percentComplete = 0;
        }
        if (args.onProgress) {
            args.onProgress(params.percentComplete);
        } else {
            return params.percentComplete;
        }
    }
    // - - - - - - - - - - - - - - - - - - -



    // - - - - - - - - - - - - - - - - - - -
    function transferComplete(e) {
        // log("AFTC.XHR.transferComplete()");
        if (params.xhr.readyState === 4) {
            if (params.xhr.status === "404") {
                responseError("AFTC.XHR: ERROR: Please check your URL [" + args.url + "] NOT FOUND.", params.xhr);
            } else {
                if (args.onComplete) {
                    args.onComplete(params.xhr.responseText);
                }
            }
        } else {
            responseError("AFTC.XHR: ERROR: Please review event details!", e);
        }
    }
    // - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - -
    function transferFailed(e) {
        log("AFTC.XHR.transferFailed()");
        if (args.onError) {
            args.onError(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - -
    function transferCanceled(e) {
        log("AFTC.XHR.transferCanceled()");
        if (args.onCancel) {
            args.onCancel(e);
        }
    }
    // - - - - - - - - - - - - - - - - - - -




    // - - - - - - - - - - - - - - - - - - -
    function cleanUpEventListeners() {
        try {
            params.xhr.removeEventListener("progress", updateProgress);
        } catch (e) { }
        try {
            params.xhr.removeEventListener("load", transferComplete);
        } catch (e) { }
        try {
            params.xhr.removeEventListener("error", transferFailed);
        } catch (e) { }
        try {
            params.xhr.removeEventListener("abort", transferCanceled);
        } catch (e) { }
    }
    // - - - - - - - - - - - - - - - - - - -




    // - - - - - - - - - - - - - - - - - - -
    function processData() {
        if (args.method === "GET" && args.data != false) {
            args.url = args.url + "?" + args.data;
            return true;
        }

        if (args.method === "POST") {
            if (args.data.append) {
                args.dataType = "formdata";
            } else {
                if (isArray(args.data) || typeof (args.data) === "object") {
                    // Array || Object
                    let data = "";
                    let formData = new FormData();
                    for (let key in args.data) {
                        log(key + " = " + args.data[key]);
                        formData.append(key, args.data[key]);
                        data += "&" + key + "=" + args.data[key];
                    }
                    args.dataType = "form";
                    args.data = data;
                    return true;
                }
            }

        }


        // default
        return true;
    }
    // - - - - - - - - - - - - - - - - - - -






    // Constructor simulation
    init();
    // - - - - - - - - - - - - - - - - - - -


    // utils
    function isImage() {
        let sfx = ["jpg","jpeg","png","gif"];
        for (let i=0; i < sfx.length; i++){
            if (args.url.indexOf(sfx[i]) > -1){
                params.imageType = sfx[i];
                params.isImage = true;
                break;
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - -


    // Return
    return {
        url: args.url,
        method: args.method,
        data: args.data,
        dataType: args.dataType,
        xhr: params.xhr,
        readyState: params.readyState,
        status: params.status,
        response: params.response,
        responseType: params.responseType
    }
}

