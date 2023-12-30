export function spCode() {
  return `
  let pointerDown = input(.2, 0, 4);
  displace(mouse.x*-.3, mouse.y*-.3, 0)

  setMaxIterations(1)
  
  let s = getSpace();
  let r = getRayDirection();
  let n1 = noise(r*2 + s *1 + vec3(0,0,time*.1));
  let n = noise(s *4 + vec3(0,0,time*.1) + n1);
  
  metal(n*.9 + 0.5)
  shine(n*.9 + 0.9)

  // Palestine flag colors
  let black = vec3(0.0, 0.0, 0.0);
  let white = vec3(1.0, 1.0, 1.0);
  let green = vec3(0.0, 0.5, 0.0);
  let red = vec3(1.0, 0.0, 0.0);

  // Choose a color based on some condition
  let flagColor = mix(red, green, step(0.25, n));
  flagColor = mix(flagColor, black, step(0.5, n));
  flagColor = mix(flagColor, white, step(0.75, n));

  color(flagColor)

  boxFrame(vec3(2), .1);
  mixGeo(pointerDown)
  sphere(.5 + n*0.3);
  `;
}
