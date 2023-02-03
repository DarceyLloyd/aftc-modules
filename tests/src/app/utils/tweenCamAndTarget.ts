import { log } from "aftc-modules/src/debug/log";
import { warn } from "aftc-modules/src/debug/warn";
import { sleep } from "aftc-modules/src/misc/sleep";
import gsap from "gsap";
import { Mesh, PerspectiveCamera, Vector3 } from "three";

export async function tweenCamAndTarget(
    camera: PerspectiveCamera,
    lookAtMesh: Mesh,
    camTarget: Vector3,
    lookAtTarget: Vector3,
    cameraTweenDelay: number = 0,
    cameraTweenDuration: number = 1,
    lookAtTweenDelay: number = 0,
    lookAtTweenDuration: number = 1,
) {
    // log(camTarget);
    // log(lookAtTarget);

    gsap.killTweensOf(camera.position);
    gsap.to(camera.position, {
        // delay: cameraTweenDelay,
        duration: cameraTweenDuration,
        x: camTarget.x,
        y: camTarget.y,
        z: camTarget.z
    });

    gsap.killTweensOf(lookAtMesh.position);
    gsap.to(lookAtMesh.position, {
        // delay: lookAtTweenDelay,
        duration: lookAtTweenDuration,
        x: lookAtTarget.x,
        y: lookAtTarget.y,
        z: lookAtTarget.z
    });

    let a = cameraTweenDelay+cameraTweenDuration;
    let b = lookAtTweenDelay+lookAtTweenDuration;
    if (a > b){
        await sleep((a * 1000));
    } else {
        await sleep((b * 1000));
    }

}