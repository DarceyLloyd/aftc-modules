# <b>AFTC-MODULES v[[version]]</b>
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## A collection of useful everyday utilities / functions for JavaScript & TypeScript.


<h3><b>Find AFTC-MODULES useful? Please Donate...</b></h3>
Any and all donations to help keep active development and the lights on are more than welcome.

[![paypal](https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Darcey%2eLloyd%40gmail%2ecom&lc=GB&item_name=Darcey%20Lloyd%20Developer%20Donation&currency_code=GBP&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)


 <hr>
 <br>



## <b>Latest changes</b>
- added getRoute(url:string(optional))
- Changed LazyLog from export default to export (no default)
- Imporved build script to build a comment free aftc-modules.js concatinated file
- Fixed some bugs in generation of both index.js and index.d.ts for better VSCode integration

- Logging can now be attached globally via:
```
LazyLog();
log("hello world");
warn("hello world");
error("hello world");
DisableLazyLog(); // Disables it globally (window scope)
EnableLazyLog(); // Enables it globally (window scope)

// Even in webpack

- Updated build process and enhanced the build tool to generate index.js and index.d.ts (types) for better intellisense
- Updated to latest version of TS
- and then some...
```

<hr><br><br>




### <b>Want the ES5 (old) version?</b>
Your looking for aftc.js. Visit: https://github.com/DarceyLloyd/AFTC.js

<hr><br><br>



### <b>Installation</b>
```
npm i aftc-modules
```

<hr><br><br>


## <b>Available Methods & Class's:</b>

[[jsodoc-git-summary]]

<hr><br><br>




# <b>Documentation</b>

[[jsodoc-git-docs]]