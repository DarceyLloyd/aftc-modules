<?php

header("Content-type: text/xml; charset=utf-8");

sleep(0.5);

$xml = '<?xml version="1.0" encoding="utf-8"?>
<xml>
    <response>
        <status>1</status>
        <method>' . $_SERVER['REQUEST_METHOD'] . '</method>
        <html><h2>This is HTML from XML</h2><p><span style="color:#006699;font-weight:bold;">With some inlince css styling too!</span></p></html>
    </response>
    <config>
        <status id="cfg1">2</status>
        <border id="cfg2"><![CDATA[ 1px solid #000000 ]]></border>
    </config>
    <books>
        <book price="£10.99">How to parse XML</book>
        <book price="£11.98">How to parse JSON</book>
        <book price="£5.99">What are key value pairs?</book>
    </books>
</xml>
';

echo($xml);




?>