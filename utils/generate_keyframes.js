const Rx = 420; // horizontal radius scaled up
const Ry = 135; // vertical radius scaled up
const tilt = -12 * Math.PI / 180;

const cosT = Math.cos(tilt);
const sinT = Math.sin(tilt);

console.log("@keyframes orbit {");
for (let percent = 0; percent <= 100; percent += 2) {
  const angle = (percent / 100) * 2 * Math.PI;
  const x = Rx * Math.cos(angle);
  const y = Ry * Math.sin(angle);
  
  // Rotated coordinates
  const xRot = x * cosT - y * sinT;
  const yRot = x * sinT + y * cosT;
  
  const depthFactor = Math.sin(angle);
  const scale = 0.85 + (depthFactor + 1) * 0.15;
  
  let zIndex = 5;
  if (percent > 0 && percent <= 50) {
    zIndex = 15;
  }
  
  console.log(`  ${percent}% {`);
  console.log(`    transform: translate(calc(-50% + ${xRot.toFixed(2)}px), calc(-50% + ${yRot.toFixed(2)}px)) scale(${scale.toFixed(3)});`);
  console.log(`    z-index: ${zIndex};`);
  console.log(`  }`);
}
console.log("}");
