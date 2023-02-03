varying vec2 vUv;
uniform float zFadeInStart;
uniform float zFadeInEnd;
uniform float zFadeOutStart;
uniform float zFadeOutEnd;
uniform bool zFadeOutEnabled;
uniform float uZ;
uniform sampler2D uTexture;


float fadeInRange;
float pzFromFadeInZStartPoint;
float fadeInStep;

float fadeOutRange;
float pzFromFadeOutZStartPoint;
float fadeOutStep;

float a = 0.0;

// https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
// view-source:https://threejs.org/examples/webgl_rtt
// https://codepen.io/nik-lever/pens/public?cursor=ZD0xJm89MCZwPTEmdj01Njc5MzU0Mg==

void main(){
    vec4 color = texture2D(uTexture, vUv);
    gl_FragColor = vec4(color);

    // No idea why *= works but using just = doesn't
    // Using *= preserves alpha channel on texture
    // gl_FragColor.a *= v;

    a = 1.0;

    // Past zFadeInStart (should be invisible)
    if (uZ < zFadeInStart){
        a = 0.0;
    }

    // Fade in (far)
    if (uZ >= zFadeInStart && uZ <= zFadeInEnd){
        fadeInRange = abs(zFadeInStart - zFadeInEnd);
        pzFromFadeInZStartPoint = abs(zFadeInStart - uZ);
        fadeInStep = 1.0/fadeInRange;

        a = fadeInStep * pzFromFadeInZStartPoint;
    }

    // Fade out (near)
    // Between zFadeOutStart & zFadeOutEnd & if enabled
    if (zFadeOutEnabled == true && uZ >= zFadeOutStart && uZ < zFadeOutEnd){
        fadeOutRange = abs(zFadeOutStart - zFadeOutEnd);
        pzFromFadeOutZStartPoint = abs(zFadeOutStart - uZ);
        fadeOutStep = 1.0/fadeOutRange;

        a = 1.0 - (fadeOutStep * pzFromFadeOutZStartPoint);
    }

    // Past zfadeOutEnd (near)
    if (zFadeOutEnabled == true && uZ >= zFadeOutEnd){
        a = 0.0;
    }

    gl_FragColor.a *= a; // set to a to fade


}