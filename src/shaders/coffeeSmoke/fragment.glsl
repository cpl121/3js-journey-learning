uniform sampler2D uPerlinTexture;
uniform float uTime;

varying vec2 vUv;

void main() {
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv.y -= uTime * 0.05;

    // Remap
    float smoke = texture(uPerlinTexture, smokeUv).r;
    smoke = smoothstep(0.4, 1.0, smoke);
    
    // Edges
    // smoke = 1.0;
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.9, vUv.y);
    smoke *= smoothstep(0.0, 0.1, vUv.x);
    smoke *= smoothstep(1.0, 0.9, vUv.x);
    
    // gl_FragColor = vec4(1.0, vec2(0.0), 1.0);
    gl_FragColor = vec4(0.6, 0.3, 0.2, smoke);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}