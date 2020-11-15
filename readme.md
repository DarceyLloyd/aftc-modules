# <b>AFTC-MODULES v1.4.0</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of usefull everyday utilities / functions.


<h3><b>Find AFTC-MODULES useful? Please Donate...</b></h3>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


 <hr>
 <br>




## CDN

- https://cdn.jsdelivr.net/npm/aftc-modules@latest/dist/aftc-module.js






### <b>Installation</b>
```
npm i aftc-modules
```
<br>

----
<br>


### <b>Usage examples</b>
See tests folder, but most of the functions are self explanitory.


<br>

----
<br>

### <b>Documentation</b>
Coming soon / In progress, but most of it should be pretty obvious from the class/functions list below.

<br>

----
<br>



### AFTCPreloader
See file ./tests/Preloader.htm for demo
```
import { 
    onReady, log, setHTML,
    AFTCPreloader   
} from "../aftc-modules.js";

onReady(() => {
    log("DOM ready()");
    startPreloader();
});

function startPreloader(){

    const preloader = new AFTCPreloader({
        onProgressHandler: onProgressHandler,
        onCompleteHandler: onCompleteHandler
    });

    // Shows help info
    preloader.help();

    // Add files to be preloaded via json file, format [ {src:"file-path",autoAttach:true}], autoAttach is optional
    preloader.start("./preloader.json");

    function onProgressHandler(p,file) {
        setHTML("status","Loading"); // Sets html element with id "status" to loading
        setHTML("percent",p + "%"); // Sets html element with id "percent" to the loaded percent value
        setHTML("files",file,"prepend"); // Sets html element with id "files" to list all files loade in prepend mode
    }

    function onCompleteHandler() {
        setHTML("status","Loaded"); // Sets html element with id "status" to loaded
    }
}


```




### <b>Available functions:</b>

