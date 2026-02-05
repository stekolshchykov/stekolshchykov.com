const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AboutFace-Bd3rgDqu.js","./react-core-_4h8QMpT.js","./index-e6MSiVEP.js","./ui-core-vdjFHRin.js","./index-CpPkKOVv.css","./SkillsFace-hADnqapl.js","./ProjectsFace-Dkh8ccc8.js","./ExperienceFace-Czim43mH.js","./ContactFace-BaKvtJrH.js","./EducationFace-IdLjQ7FY.js"])))=>i.map(i=>d[i]);
import{l as R,a as z,_ as W,b as Ye}from"./index-e6MSiVEP.js";import{r as c,c as ht,j as E}from"./react-core-_4h8QMpT.js";import{V as je,S as Xe,P as mt,C as ft,W as vt,a as Ze,b as gt,B as yt,M as me,T as wt,c as bt,G as xt,d as St,A as Rt,F as Mt,e as Pt,f as Ct,L as Ve,g as Ue,h as fe,i as Dt,E as kt,j as At,k as zt,l as Et,m as _t,n as It,o as Lt}from"./three-core-Cnm879hS.js";import"./ui-core-vdjFHRin.js";const ae="/assets/whale/Whale-Poly.glb",Ne="/assets/whale/disc.png";function Ft(r,_){return r?2:_?3:5}function Tt(r,_,b){return{uTime:{value:0},uResolution:{value:new je(_,b)},uBlackHoleOffset:{value:new je(-.72,.16)},uCameraDistance:{value:r?19.8:23.8},uCameraYaw:{value:-.2},uCameraPitch:{value:-.08},uBlackHoleMass:{value:r?.43:.52},uStepSize:{value:r?.3:.19},uGravitationalLensing:{value:r?1.75:2.25},uDiskInnerRadius:{value:2.75},uDiskOuterRadius:{value:8.6},uDiskBrightness:{value:r?1.5:2.05},uDiskTemperature:{value:14500},uDiskRotationSpeed:{value:-4.5},uStarDensity:{value:r?.07:.11},uStarSize:{value:r?1.45:1.2},uStarBrightness:{value:r?.58:.78},uNebulaStrength:{value:r?.5:.72},uRaySteps:{value:r?58:104}}}const Ht=`
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Bt=`
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uBlackHoleOffset;
  uniform float uCameraDistance;
  uniform float uCameraYaw;
  uniform float uCameraPitch;
  uniform float uBlackHoleMass;
  uniform float uStepSize;
  uniform float uGravitationalLensing;
  uniform float uDiskInnerRadius;
  uniform float uDiskOuterRadius;
  uniform float uDiskBrightness;
  uniform float uDiskTemperature;
  uniform float uDiskRotationSpeed;
  uniform float uStarDensity;
  uniform float uStarSize;
  uniform float uStarBrightness;
  uniform float uNebulaStrength;
  uniform float uRaySteps;

  const float PI = 3.141592653589793;

  float hash21(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float hash31(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }

  vec2 hash22(vec2 p) {
    return vec2(
      fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453),
      fract(sin(dot(p, vec2(269.5, 183.3))) * 43758.5453)
    );
  }

  float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);

    float a = hash31(i);
    float b = hash31(i + vec3(1.0, 0.0, 0.0));
    float c = hash31(i + vec3(0.0, 1.0, 0.0));
    float d = hash31(i + vec3(1.0, 1.0, 0.0));
    float e = hash31(i + vec3(0.0, 0.0, 1.0));
    float f2 = hash31(i + vec3(1.0, 0.0, 1.0));
    float g = hash31(i + vec3(0.0, 1.0, 1.0));
    float h = hash31(i + vec3(1.0, 1.0, 1.0));

    float x1 = mix(a, b, u.x);
    float x2 = mix(c, d, u.x);
    float y1 = mix(x1, x2, u.y);

    float x3 = mix(e, f2, u.x);
    float x4 = mix(g, h, u.x);
    float y2 = mix(x3, x4, u.y);

    return mix(y1, y2, u.z);
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.52;
    vec3 pos = p;
    for (int i = 0; i < 4; i++) {
      value += noise3D(pos) * amplitude;
      pos *= 2.03;
      amplitude *= 0.5;
    }
    return value;
  }

  vec3 blackbodyApprox(float temperatureKelvin) {
    float t = clamp(temperatureKelvin, 1000.0, 40000.0) / 100.0;
    float r;
    float g;
    float b;

    if (t <= 66.0) {
      r = 255.0;
      g = 99.4708025861 * log(t) - 161.1195681661;
      if (t <= 19.0) {
        b = 0.0;
      } else {
        b = 138.5177312231 * log(t - 10.0) - 305.0447927307;
      }
    } else {
      r = 329.698727446 * pow(t - 60.0, -0.1332047592);
      g = 288.1221695283 * pow(t - 60.0, -0.0755148492);
      b = 255.0;
    }

    return clamp(vec3(r, g, b) / 255.0, 0.0, 1.0);
  }

  vec3 starField(vec3 rayDir) {
    float theta = atan(rayDir.z, rayDir.x);
    float phi = asin(clamp(rayDir.y, -1.0, 1.0));
    vec2 scaled = vec2(theta, phi) * (58.0 / max(uStarSize, 0.3));
    vec2 cell = floor(scaled);
    vec2 cellUV = fract(scaled);

    float starChance = step(1.0 - uStarDensity, hash21(cell));
    vec2 starPos = hash22(cell + 42.0) * 0.82 + 0.09;
    float distToStar = length(cellUV - starPos);
    float baseSize = hash21(cell + 100.0) * 0.03 + 0.01;
    float finalStarSize = baseSize * uStarSize;
    float core = smoothstep(finalStarSize, 0.0, distToStar);
    float glow = smoothstep(finalStarSize * 3.2, 0.0, distToStar) * 0.35;
    float twinkle = 0.82 + 0.18 * sin(uTime * 0.55 + hash21(cell + 8.0) * 12.0);
    float intensity = (core + glow) * starChance * twinkle;
    vec3 starColor = mix(vec3(0.82, 0.9, 1.0), vec3(1.0, 0.92, 0.76), hash21(cell + 200.0));
    return starColor * intensity * uStarBrightness;
  }

  vec3 nebulaField(vec3 rayDir) {
    float n1 = fbm(rayDir * 2.0 + vec3(uTime * 0.03, 0.0, 0.0));
    float n2 = fbm(rayDir * 5.4 - vec3(0.0, uTime * 0.022, 0.0));
    float layer1 = clamp((n1 - 0.45) * 1.9, 0.0, 1.0);
    float layer2 = clamp((n2 - 0.52) * 2.2, 0.0, 1.0);

    vec3 color1 = vec3(0.05, 0.14, 0.3) * layer1;
    vec3 color2 = vec3(0.22, 0.08, 0.2) * layer2;
    return (color1 + color2) * uNebulaStrength;
  }

  vec4 accretionDiskColor(float hitR, float hitAngle, float time, vec3 rayDir) {
    float normR = clamp((hitR - uDiskInnerRadius) / (uDiskOuterRadius - uDiskInnerRadius), 0.0, 1.0);
    float tempK = uDiskTemperature * pow(max(uDiskInnerRadius / max(hitR, 0.001), 0.001), 0.76);
    vec3 diskColor = blackbodyApprox(tempK);

    float rotationSign = sign(uDiskRotationSpeed);
    vec3 velocityDir = normalize(vec3(-sin(hitAngle) * rotationSign, 0.0, cos(hitAngle) * rotationSign));
    float velocityMagnitude = 1.0 / sqrt(max(hitR / uDiskInnerRadius, 0.02));
    float beta = velocityMagnitude * 0.27;
    float cosTheta = dot(velocityDir, rayDir);
    float dopplerFactor = 1.0 / max(1.0 - beta * cosTheta, 0.22);
    float dopplerBoost = pow(dopplerFactor, 2.6);
    diskColor *= clamp(dopplerBoost, 0.18, 4.8);

    float edgeIn = smoothstep(0.0, 0.17, normR);
    float edgeOut = 1.0 - smoothstep(0.78, 1.0, normR);
    float edgeMask = edgeIn * edgeOut;

    float phase = time * uDiskRotationSpeed / pow(max(hitR, 0.2), 1.5);
    float a = hitAngle + phase;
    vec3 noiseCoord = vec3(
      hitR * 1.45,
      cos(a) / 0.62,
      sin(a) / 0.62
    );
    float turbulence = fbm(noiseCoord + vec3(0.0, 0.0, time * 0.14));
    float rings = pow(clamp(turbulence, 0.0, 1.0), 2.8);

    float finalOpacity = rings * edgeMask;
    vec3 finalColor = diskColor * (0.4 + rings * 1.08) * uDiskBrightness;
    return vec4(finalColor, finalOpacity);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;

    float rs = uBlackHoleMass * 2.0;

    vec3 camTarget = vec3(uBlackHoleOffset.x * 5.0, uBlackHoleOffset.y * 3.4, 0.0);
    float yawSin = sin(uCameraYaw);
    float yawCos = cos(uCameraYaw);
    vec3 camPos = camTarget + vec3(
      yawSin * uCameraDistance,
      2.6 + uCameraPitch * uCameraDistance,
      yawCos * uCameraDistance
    );
    vec3 camForward = normalize(camTarget - camPos);
    vec3 camRight = normalize(cross(vec3(0.0, 1.0, 0.0), camForward));
    vec3 camUp = cross(camForward, camRight);

    vec3 rayDir = normalize(camForward + camRight * uv.x + camUp * uv.y);
    vec3 rayPos = camPos;
    vec3 prevPos = camPos;
    vec3 color = vec3(0.0);
    float alpha = 0.0;
    bool escaped = false;
    bool captured = false;

    for (int i = 0; i < 80; i++) {
      if (float(i) >= uRaySteps || escaped || captured || alpha > 0.992) {
        break;
      }

      float r = length(rayPos);
      if (r < rs * 1.01) {
        captured = true;
        break;
      }

      if (r > 120.0) {
        escaped = true;
        break;
      }

      vec3 toCenter = -rayPos / max(r, 0.0001);
      float bendStrength = rs / max(r * r, 0.0001) * uStepSize * uGravitationalLensing;
      rayDir = normalize(rayDir + toCenter * bendStrength);

      prevPos = rayPos;
      rayPos += rayDir * uStepSize;

      bool crossedPlane = (prevPos.y * rayPos.y) < 0.0;
      if (crossedPlane && alpha < 0.99) {
        float t = -prevPos.y / (rayPos.y - prevPos.y);
        vec3 hitPos = mix(prevPos, rayPos, t);
        float hitR = length(hitPos.xz);
        if (hitR > uDiskInnerRadius && hitR < uDiskOuterRadius) {
          float hitAngle = atan(hitPos.z, hitPos.x);
          vec4 disk = accretionDiskColor(hitR, hitAngle, uTime, rayDir);
          float remaining = 1.0 - alpha;
          color += disk.rgb * disk.a * remaining;
          alpha += disk.a * remaining;
        }
      }
    }

    if (!captured) {
      escaped = true;
    }

    if (escaped && alpha < 0.999) {
      vec3 background = vec3(0.004, 0.008, 0.014);
      background += starField(rayDir);
      background += nebulaField(rayDir);
      color += background * (1.0 - alpha);
    }

    float bhScreenR = length(uv - uBlackHoleOffset);
    float apparentRadius = 0.165 + rs * 0.016;
    float photonRing = exp(-pow((bhScreenR - apparentRadius * 1.45) / (apparentRadius * 0.3), 2.0));
    color += vec3(0.73, 0.87, 1.0) * photonRing * 0.26;

    color = pow(max(color, vec3(0.0)), vec3(1.0 / 2.2));
    color = clamp(color * 1.06 - 0.015, 0.0, 1.0);
    gl_FragColor = vec4(color, 1.0);
  }
`,Ot=c.lazy(()=>W(()=>import("./AboutFace-Bd3rgDqu.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>({default:r.AboutFace}))),Gt=c.lazy(()=>W(()=>import("./SkillsFace-hADnqapl.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url).then(r=>({default:r.SkillsFace}))),Wt=c.lazy(()=>W(()=>import("./ProjectsFace-Dkh8ccc8.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url).then(r=>({default:r.ProjectsFace}))),Yt=c.lazy(()=>W(()=>import("./ExperienceFace-Czim43mH.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url).then(r=>({default:r.ExperienceFace}))),jt=c.lazy(()=>W(()=>import("./ContactFace-BaKvtJrH.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url).then(r=>({default:r.ContactFace}))),Xt=c.lazy(()=>W(()=>import("./EducationFace-IdLjQ7FY.js"),__vite__mapDeps([9,1,2,3,4]),import.meta.url).then(r=>({default:r.EducationFace})));function qt({targetRotation:r,locale:_}){const b=c.useRef(null),I=c.useRef(null),d=c.useRef({x:0,y:0}),x=c.useRef({x:0,y:0}),Y=c.useRef(r),L=c.useRef(null),F=c.useRef({active:!1,startMs:0,seed:0}),ve=c.useRef(!1);return c.useEffect(()=>{Y.current=r,ve.current?F.current={active:!0,startMs:typeof performance<"u"?performance.now():Date.now(),seed:F.current.seed+1}:ve.current=!0,R("debug","scene3d","Target rotation updated",r),L.current?.()},[r]),c.useEffect(()=>{if(!b.current||!I.current)return;const T=window.innerWidth,re=window.innerHeight,ge=window.matchMedia("(prefers-reduced-motion: reduce)").matches,j=T<700,$e=T<900,X=T<1100,Ke=navigator.hardwareConcurrency>0&&navigator.hardwareConcurrency<=4,a=ge||$e||Ke,qe=a?1:1.5,ye=a?24:60,Je=a?8:20,Qe=a?3:6,q=j?420:X?620:860,et=j?14:X?20:28,we=a?.92:.78,C=Math.round(q*.58),u=C*2,tt=Math.max(720,u*.95),ot=Math.max(2200,u*2.5);z("scene.performance.mode",{viewportWidth:T,viewportHeight:re,lowPowerMode:a,targetFPS:ye,isTablet:X,isPhone:j,faceSize:q,cubeSize:u});const be=new Xe,y=new mt(50,T/re,1,5e3);y.position.z=j?1250:X?1400:1500;const H=new ft;H.setSize(window.innerWidth,window.innerHeight),b.current.appendChild(H.domElement);const D=new Xe,M=new vt({antialias:!1,alpha:!0,powerPreference:"high-performance"});M.setSize(window.innerWidth,window.innerHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,qe)),I.current.appendChild(M.domElement);const nt=Tt(a,T,re),xe=new Ze(4200,a?22:32,a?14:24),J=new gt({uniforms:nt,vertexShader:Ht,fragmentShader:Bt,side:yt,depthWrite:!1,depthTest:!1}),Q=new me(xe,J);Q.frustumCulled=!1,Q.renderOrder=-1e3,D.add(Q),z("scene.blackhole.shader.ready",{mode:"webgl-raymarch",lowPowerMode:a});const P=[],Z=[],ee=[],Se=[];let Re=!1;const V=Ft(a,X);z("scene.whale.load.start",{whaleCount:V,source:ae});const se=new wt().load(Ne,()=>R("info","scene3d","Whale sprite loaded",{source:Ne}),void 0,e=>R("warn","scene3d","Whale sprite load failed, fallback to no map",{error:String(e)}));se.colorSpace=bt,Se.push(se);const Me=e=>{const s=(e+1)*19.37,o=(Math.sin(s)*.5+.5+Math.random()*.35)%1,i=.56+Math.random()*.33,l=.5+Math.random()*.2;return new Lt().setHSL(o,i,l)},Pe=()=>{for(let e=0;e<V;e++){const s=Me(e),o=new fe,i=new _t({color:s,emissive:s.clone().multiplyScalar(.22),emissiveIntensity:.65,transparent:!0,opacity:.5,roughness:.9,metalness:.02});ee.push(i);const l=new Ze(80,16,12);Z.push(l);const h=new me(l,i);h.scale.set(2,.75,.65),o.add(h);const g=new It(20,68,12);Z.push(g);const n=new me(g,i);n.position.set(-145,0,0),n.rotation.z=Math.PI/2,o.add(n),D.add(o),P.push({group:o,orbitX:u*(.2+e*.05),baseY:u*(.06-e*.05),baseZ:u*(.28+e*.04),phase:Math.PI*2*e/V,speed:(a?.045:.06)+e*.01,bobSpeed:.6+e*.1,bobAmp:7+e*3,zAmp:16+e*4,yawAmp:.09,rollAmp:.02,direction:e%2===0?1:-1,yawBase:e%2===0?-Math.PI/2:Math.PI/2,yawCurrent:e%2===0?-Math.PI/2:Math.PI/2,pitchCurrent:0,rollCurrent:0,headingOffset:0,foregroundRunner:e===0,waveSpeed:.5+e*.12})}z("scene.whale.fallback.enabled",{actors:P.length,reason:"local_glb_load_failed"},"warn")};new xt().load(ae,e=>{if(Re)return;let s=null;if(e.scene.traverse(o=>{const i=o;!s&&i.isMesh&&i.geometry&&(s=i.geometry)}),!s){z("scene.whale.load.error",{reason:"no_geometry_in_glb"},"warn"),Pe();return}for(let o=0;o<V;o++){const i=Me(o),l=s.clone();Z.push(l);const h=new St({size:a?2.15:2.7,alphaTest:.45,transparent:!0,blending:Rt,map:se,vertexColors:!0,depthWrite:!1,opacity:a?.82:.72});ee.push(h);const g=l.getAttribute("position"),n=new Float32Array(g.count*3);for(let p=0;p<n.length;p+=3)n[p]=i.r,n[p+1]=i.g,n[p+2]=i.b;l.setAttribute("color",new Mt(n,3));const m=new Pt(l,h),k=new Ct(l);Z.push(k);const B=i.clone().offsetHSL(0,-.12,.08),t=new Ve({color:B,transparent:!0,opacity:a?.035:.06,depthTest:!1});ee.push(t);const w=new Ue(k,t),f=new fe;f.add(w),f.add(m);const S=a?1.55+o*.2:2.05+o*.24;f.scale.setScalar(S),D.add(f),P.push({group:f,points:m,line:w,basePositions:Float32Array.from(g.array.slice()),orbitX:u*(a?.24+o*.05:.3+o*.06),baseY:u*(.06-o*.05),baseZ:u*(a?.27+o*.04:.34+o*.05),phase:Math.PI*2*o/V,speed:(a?.055:.075)+o*.012,bobSpeed:.68+o*.1,bobAmp:(a?8:10)+o*3,zAmp:(a?18:22)+o*4,yawAmp:.095+o*.01,rollAmp:.02+o*.008,direction:o%2===0?1:-1,yawBase:o%2===0?-Math.PI/2:Math.PI/2,yawCurrent:o%2===0?-Math.PI/2:Math.PI/2,pitchCurrent:0,rollCurrent:0,headingOffset:0,foregroundRunner:o===0,waveSpeed:.65+o*.16})}z("scene.whale.load.success",{actors:P.length,source:ae})},void 0,e=>{z("scene.whale.load.error",{reason:String(e),source:ae},"error"),Pe()});const Ce=new Dt(u,u,u),De=new kt(Ce),ke=new Ve({color:9133302,transparent:!0,opacity:.3}),U=new Ue(De,ke);D.add(U);const at=new At(4210752,.5);D.add(at);const ie=[],rt=[9133302,3900150,1096065,15680580,16347926,440020];for(let e=0;e<Qe;e++){const s=new zt(rt[e],a?.2:.3,600);D.add(s),ie.push(s)}const N=new fe,Ae=[],st=[{component:Ot,color:"#8b5cf6",position:[0,0,C],rotation:[0,0,0]},{component:Gt,color:"#3b82f6",position:[0,0,-C],rotation:[0,Math.PI,0]},{component:Wt,color:"#10b981",position:[C,0,0],rotation:[0,Math.PI/2,0]},{component:Yt,color:"#ef4444",position:[-C,0,0],rotation:[0,-Math.PI/2,0]},{component:jt,color:"#f97316",position:[0,C,0],rotation:[-Math.PI/2,0,0]},{component:Xt,color:"#06b6d4",position:[0,-C,0],rotation:[Math.PI/2,0,0]}],ze=[];st.forEach((e,s)=>{const o=document.createElement("div");o.className="cube-face-shell",o.style.width=`${q}px`,o.style.height=`${q}px`,o.style.padding=`${et}px`,o.style.background=`linear-gradient(135deg, rgba(8, 15, 26, ${we}) 0%, rgba(13, 22, 35, ${Math.max(.55,we-.1)}) 100%)`,o.style.border=`3px solid ${e.color}`,o.style.borderRadius=j?"16px":"24px",o.style.boxShadow=`0 0 42px ${e.color}30, inset 0 0 30px ${e.color}08`,o.style.overflow="auto",o.style.contain="layout style paint",o.style.willChange="transform",a||(o.style.backdropFilter="blur(2px)");const i=e.component,l=ht.createRoot(o);l.render(E.jsx(c.Suspense,{fallback:E.jsx("div",{style:{color:"#cbd5e1",padding:"1rem"},children:"Loading..."}),children:E.jsx(i,{locale:_})})),ze.push(l);const h=new Et(o);h.position.set(e.position[0],e.position[1],e.position[2]),h.rotation.set(e.rotation[0],e.rotation[1],e.rotation[2]),N.add(h);const g=Math.hypot(e.position[0],e.position[1],e.position[2])||1;Ae.push({object:h,basePosition:[e.position[0],e.position[1],e.position[2]],baseRotation:[e.rotation[0],e.rotation[1],e.rotation[2]],normal:[e.position[0]/g,e.position[1]/g,e.position[2]/g],phase:s*1.37});const n=ie[s%ie.length];n&&n.position.set(e.position[0],e.position[1],e.position[2])}),be.add(N);let $=!1,te={x:0,y:0};const Ee=e=>{$=!0,R("debug","scene3d-controls","Drag started",{x:e.clientX,y:e.clientY}),te={x:e.clientX,y:e.clientY},x.current={x:0,y:0},L.current?.()},_e=e=>{if($){const s=e.clientX-te.x,o=e.clientY-te.y;x.current.y=s*.005,x.current.x=o*.005,te={x:e.clientX,y:e.clientY},L.current?.()}},Ie=()=>{$=!1,R("debug","scene3d-controls","Drag ended")},Le=e=>{e.preventDefault(),y.position.z+=e.deltaY*.5,y.position.z=Math.max(tt,Math.min(ot,y.position.z)),R("debug","scene3d-controls","Zoom changed",{deltaY:e.deltaY,cameraZ:y.position.z}),L.current?.()},oe=b.current;oe.addEventListener("mousedown",Ee),window.addEventListener("mousemove",_e),window.addEventListener("mouseup",Ie),oe.addEventListener("wheel",Le,{passive:!1});let K=0,Fe=0,Te=!1;const He=1e3/ye,it=()=>{const e=Y.current.x-d.current.x,s=Y.current.y-d.current.y;return $||Math.abs(x.current.x)>2e-4||Math.abs(x.current.y)>2e-4||Math.abs(e)>5e-4||Math.abs(s)>5e-4},Be=e=>{if(K=0,a&&Te&&!it())return;K=requestAnimationFrame(Be);const s=e-Fe;if(s<He)return;if(Fe=e-s%He,Q.position.copy(y.position),J.uniforms.uTime.value=e*.001,!$){d.current.x+=x.current.x,d.current.y+=x.current.y;const n=Y.current.x-d.current.x,m=Y.current.y-d.current.y,k=a?.075:.06;d.current.x+=n*k,d.current.y+=m*k,x.current.x*=.95,x.current.y*=.95}d.current.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,d.current.x)),N.rotation.x=d.current.x,N.rotation.y=d.current.y,U.rotation.x=d.current.x,U.rotation.y=d.current.y;const o=Math.sin(e*5e-4)*Je;N.position.y=o,U.position.y=o;let i=0;if(!ge&&F.current.active){const n=(e-F.current.startMs)/(a?640:860);if(n>=1)F.current.active=!1;else{const m=Math.sin(Math.PI*n);i=Math.pow(Math.max(m,0),1.45)}}const l=u*(a?.12:.22)*i,h=(a?.022:.036)*i;Ae.forEach(n=>{const m=Math.sin(e*.009+n.phase+F.current.seed)*u*.007*i;n.object.position.set(n.basePosition[0]+n.normal[0]*(l+m),n.basePosition[1]+n.normal[1]*(l+m),n.basePosition[2]+n.normal[2]*(l+m)),n.object.rotation.set(n.baseRotation[0]+Math.sin(e*.011+n.phase)*h,n.baseRotation[1]+Math.cos(e*.01+n.phase)*h,n.baseRotation[2]+Math.sin(e*.012+n.phase)*h*.65)});const g=1+i*.06;if(U.scale.set(g,g,g),P.length>0){const n=e*.001;let m=0;const k=(t,w,f)=>{const S=Math.PI*2;let p=(w-t+Math.PI)%S;return p<0&&(p+=S),p-=Math.PI,t+p*f},B=(t,w,f)=>Math.max(w,Math.min(f,t));P.forEach(t=>{const w=n*t.speed+t.phase,f=w*t.direction;let S=Math.cos(f)*t.orbitX,p=t.baseY+Math.sin(f*t.bobSpeed)*t.bobAmp,ne=t.baseZ+Math.sin(f)*t.zAmp;if(t.foregroundRunner){const O=Math.sin(n*(a?.23:.29)+t.phase*.9),v=B((O-.72)/.28,0,1);if(v>0){const A=y.position.z+(a?24:80);S=S*(1-v*.85),p=p*(1-v*.9),ne=ne*(1-v)+A*v}}t.group.position.x+=(S-t.group.position.x)*.08,t.group.position.y+=(p-t.group.position.y)*.08,t.group.position.z+=(ne-t.group.position.z)*.06;const ce=(w+t.speed*.75)*t.direction;let ue=Math.cos(ce)*t.orbitX,pe=t.baseY+Math.sin(ce*t.bobSpeed)*t.bobAmp,de=t.baseZ+Math.sin(ce)*t.zAmp;if(t.foregroundRunner){const O=Math.sin((n+t.speed*.6)*(a?.23:.29)+t.phase*.9),v=B((O-.72)/.28,0,1);if(v>0){const A=y.position.z+(a?24:80);ue=ue*(1-v*.85),pe=pe*(1-v*.9),de=de*(1-v)+A*v}}const Ge=ue-S,lt=pe-p,We=de-ne,he=Math.hypot(Ge,We),ct=(he>1e-4?Math.atan2(We,Ge)+t.headingOffset:t.yawCurrent)+Math.sin(w*.4+t.phase)*t.yawAmp;t.yawCurrent=k(t.yawCurrent,ct,.08),t.group.rotation.y=t.yawCurrent;const ut=he>1e-4?-Math.atan2(lt,he):0,pt=B(ut+Math.sin(w*.45+t.phase)*.014,-.09,.09),dt=B(Math.sin(f*1.12+t.phase)*t.rollAmp,-.05,.05);if(t.pitchCurrent+=(pt-t.pitchCurrent)*.12,t.rollCurrent+=(dt-t.rollCurrent)*.12,t.group.rotation.x=t.pitchCurrent,t.group.rotation.z=t.rollCurrent,t.points&&t.basePositions){const O=t.points.geometry.getAttribute("position"),v=O.array,A=t.basePositions;for(let G=1;G<v.length;G+=3)v[G]=A[G]+.48*Math.cos(A[G-1]*.05+A[G+1]*.03+n*t.waveSpeed+t.phase);O.needsUpdate=!0}t.group.position.z>-u*.35&&t.group.position.z<u*.9&&(m+=1)}),Ye("scene.whale.frame",1200,"scene.whale.frame.update",{actors:P.length,visibleWhales:m}),Ye("scene.render.visibility",2200,"scene.render.visibility",{visibleWhales:m,totalWhales:P.length})}H.render(be,y),M.render(D,y),Te=!0},le=()=>{K===0&&(K=requestAnimationFrame(Be))};L.current=le,le();const Oe=()=>{y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),H.setSize(window.innerWidth,window.innerHeight),M.setSize(window.innerWidth,window.innerHeight),J.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),R("info","scene3d","Scene resized",{width:window.innerWidth,height:window.innerHeight}),le()};return window.addEventListener("resize",Oe),()=>{R("info","scene3d","Scene cleanup started"),Re=!0,cancelAnimationFrame(K),L.current=null,window.removeEventListener("resize",Oe),oe.removeEventListener("mousedown",Ee),window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",Ie),oe.removeEventListener("wheel",Le),b.current&&H.domElement.parentNode===b.current&&b.current.removeChild(H.domElement),I.current&&M.domElement.parentNode===I.current&&I.current.removeChild(M.domElement),M.dispose(),xe.dispose(),J.dispose(),Z.forEach(e=>e.dispose()),ee.forEach(e=>e.dispose()),Se.forEach(e=>e.dispose()),Ce.dispose(),De.dispose(),ke.dispose(),ze.forEach(e=>e.unmount()),R("info","scene3d","Scene cleanup completed")}},[_]),E.jsxs(E.Fragment,{children:[E.jsx("div",{ref:I,style:{position:"absolute",inset:0,zIndex:1}}),E.jsx("div",{ref:b,style:{position:"absolute",inset:0,zIndex:2}})]})}export{qt as Scene3D};
