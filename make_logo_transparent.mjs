// Remove the solid navy background from logo_lenlor.png by flood-filling
// from the four corners. The white sticker outline blocks the fill, so the
// black/orange/white interior is preserved. Outputs logo_lenlor_t.png.
import { PNG } from 'pngjs';
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = new URL('./logo_lenlor.png', import.meta.url);
const OUT = new URL('./logo_lenlor_t.png', import.meta.url);

const png = PNG.sync.read(readFileSync(SRC));
const { width: W, height: H, data } = png;
const idx = (x, y) => (y * W + x) * 4;

// Reference background color = average of the 4 corners.
const corners = [[0, 0], [W - 1, 0], [0, H - 1], [W - 1, H - 1]];
let br = 0, bg = 0, bb = 0;
for (const [x, y] of corners) {
  const i = idx(x, y);
  br += data[i]; bg += data[i + 1]; bb += data[i + 2];
}
br /= 4; bg /= 4; bb /= 4;

const TOL = 70;          // euclidean color distance threshold
const TOL2 = TOL * TOL;
const near = (i) => {
  const dr = data[i] - br, dg = data[i + 1] - bg, db = data[i + 2] - bb;
  return dr * dr + dg * dg + db * db <= TOL2;
};

const visited = new Uint8Array(W * H);
const stack = [];
for (const [x, y] of corners) stack.push(x, y);

let cleared = 0;
while (stack.length) {
  const y = stack.pop(), x = stack.pop();
  if (x < 0 || y < 0 || x >= W || y >= H) continue;
  const p = y * W + x;
  if (visited[p]) continue;
  visited[p] = 1;
  const i = p * 4;
  if (!near(i)) continue;        // hit the outline / a different color: stop
  data[i + 3] = 0;               // make transparent
  cleared++;
  stack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
}

writeFileSync(OUT, PNG.sync.write(png));
console.log(`bg color ~ rgb(${br | 0},${bg | 0},${bb | 0}); cleared ${cleared}/${W * H} px -> logo_lenlor_t.png`);
