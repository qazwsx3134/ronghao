import {
  component$,
  useVisibleTask$,
  useStore,
  useOnWindow,
  $,
  type NoSerialize,
  noSerialize,
} from "@builder.io/qwik";

import * as dat from "dat.gui";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TorusGeometry,
  Mesh,
  PointLight,
  AmbientLight,
  PointLightHelper,
  GridHelper,
  AxesHelper,
  PointsMaterial,
  Points,
  Clock,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default component$(() => {
  const sceneStore = useStore<{ instance: NoSerialize<Scene> }>({
    instance: undefined,
  });

  const cameraStore = useStore<{ instance: NoSerialize<PerspectiveCamera> }>({
    instance: undefined,
  });

  const meshStore = useStore<{ torus: NoSerialize<Mesh | Points> }>({
    torus: undefined,
  });

  const rendererStore = useStore<{
    instance: NoSerialize<WebGLRenderer>;
  }>({
    instance: undefined,
  });

  const windowResize = $(() => {
    // update camera
    if (cameraStore.instance) {
      cameraStore.instance.aspect = window.innerWidth / window.innerHeight;
      cameraStore.instance.updateProjectionMatrix();
    }

    // update size
    if (rendererStore.instance) {
      rendererStore.instance.setSize(window.innerWidth, window.innerHeight);
    }
  });

  useOnWindow("resize", windowResize);
  useVisibleTask$(async () => {
    /**
     * Debug
     */
    const gui = new dat.GUI();

    /**
     * Scene
     */
    const scene = new Scene();
    sceneStore.instance = noSerialize(scene);

    console.log("camera", window.innerWidth / window.innerHeight);
    /**
     * Camera
     */
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    cameraStore.instance = noSerialize(camera);

    /**
     * Texture
     */

    /**
     * Geometry
     * geometry: the geometry is the shape of the object
     */

    // Torus
    const geoTorus = new TorusGeometry(10, 3, 16, 100);

    const matTorus = new PointsMaterial({
      size: 0.005,
    });

    const torus = new Points(geoTorus, matTorus);
    meshStore.torus = noSerialize(torus);

    // gltf
    const loader = new GLTFLoader();
    loader.load(
      "/three/scene.gltf",
      (gltf) => {
        console.log("gltf", gltf);
        scene.add(gltf.scene);
        scene.add(gltf.layers);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => console.log("An error happened", error)
    );
    /**
     * Renderer
     */

    const renderer = new WebGLRenderer({
      canvas: document.querySelector("#blackHoleCanvas") as HTMLCanvasElement,
    });
    rendererStore.instance = noSerialize(renderer);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const axeHelper = new AxesHelper(100);
    const gridHelper = new GridHelper(200, 50);
    scene.add(axeHelper, gridHelper);

    /**
     * Init Camera Position
     */
    camera.position.setZ(30);
    camera.position.setX(0);
    camera.position.setY(0);

    /**
     * Init Scene
     */

    /**
     * Add Meshse
     */
    scene.add(torus);

    /**
     * Add Lights
     */

    // Point Light 點光源
    const pointLight = new PointLight(0xccc6aa);
    pointLight.position.set(5, 5, 30);
    scene.add(pointLight);

    // Ambient Light 環境光
    const ambientLight = new AmbientLight(0xccc6aa);
    ambientLight.intensity = 10;
    scene.add(ambientLight);

    // Directional Light 方向光 (太陽光)
    // const directionalLight = new DirectionalLight(0xffffff);
    // directionalLight.position.set(1, 1, 1);
    // scene.add(directionalLight);

    // Light Helper
    const pointLightHelper = new PointLightHelper(pointLight);
    // const directionalLightHelper = new DirectionalLightHelper(directionalLight);
    scene.add(pointLightHelper);

    /**
     * Render
     */
    renderer.render(scene, camera);

    // Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    /**
     * Animate
     */

    const clock = new Clock();

    // Animation loop
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update objects
      torus.rotation.y = 0.5 * elapsedTime;

      controls.update();
      renderer.render(scene, camera);

      // Call animate again on the next frame
      requestAnimationFrame(animate);
    };
    animate();
  });
  return (
    <>
      <canvas id="blackHoleCanvas" class="w-full h-full" />
    </>
  );
});
