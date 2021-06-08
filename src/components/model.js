import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Grid from "@material-ui/core/Grid";

extend({ OrbitControls });
function Model() {
  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return (
      <orbitControls
        ref={controls}
        autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };

  return (
    <div className="cube">
    <h1>Queppelin Technologies</h1>
      <Grid container>
        <Grid item xs={12}>
          <Canvas>
            {/* Portal into ThreeJS not DOM Elements */}
            <mesh>
              {/* A material for drawing geometries */}
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="red"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={6}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="green"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={6}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="yellow"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={4}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="yellow"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={4}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="red"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={4}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="green"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={3}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="red"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={3}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="green"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={3}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="red"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
        <Grid item xs={3}>
          <Canvas>
            <mesh>
              <Controls />

              <boxBufferGeometry
                attach="geometry"
                args={[3,3,3]}
              ></boxBufferGeometry>

              <meshBasicMaterial
                wireframe
                attach="material"
                color="yellow"
              ></meshBasicMaterial>
            </mesh>
          </Canvas>
        </Grid>
      </Grid>

        
    </div>
  );
}
export default Model;
