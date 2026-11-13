import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Dung lang 3D kieu "dao noi" chi bang khoi hinh co ban (hop, tru, non, cau),
// khong can file mo hinh hay anh nen nhe va khong phai xin ban quyen hinh ve.
// Trang React chi lo phan chu (bong bong thoai, nhan dao): ham nay tra ve cac
// diem neo 3D va ham chieu ra toa do man hinh de trang tu dat chu len tren.

const COLORS = {
  grass: 0x7ccf6a,
  grassDark: 0x5fb35a,
  dirt: 0x9a6a4a,
  dirtDark: 0x7a5038,
  trunk: 0x7a5236,
  leaf: 0x3f9d5a,
  leafLight: 0x6cc070,
  skin: 0xffd9bd,
  hair: 0x3a2a22,
  white: 0xffffff,
  plank: 0xb8875a,
  rope: 0x6b4a32
}

const matCache = new Map()
function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts)
  if (!matCache.has(key)) {
    matCache.set(key, new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.85, ...opts }))
  }
  return matCache.get(key)
}

function mesh(geo, color, opts) {
  return new THREE.Mesh(geo, mat(color, opts))
}

function island(radius) {
  const g = new THREE.Group()
  const top = mesh(new THREE.CylinderGeometry(radius, radius * 0.96, 0.5, 12), COLORS.grass)
  g.add(top)
  const rim = mesh(new THREE.CylinderGeometry(radius * 0.97, radius * 0.9, 0.35, 12), COLORS.dirt)
  rim.position.y = -0.42
  g.add(rim)
  const under = mesh(new THREE.ConeGeometry(radius * 0.9, radius * 1.5, 12), COLORS.dirtDark)
  under.rotation.x = Math.PI
  under.position.y = -0.6 - radius * 0.75
  g.add(under)
  // Vai tang da treo duoi dao cho giong dao noi.
  for (let i = 0; i < 3; i++) {
    const rock = mesh(new THREE.DodecahedronGeometry(0.25 + i * 0.08), COLORS.dirt)
    const a = i * 2.1
    rock.position.set(Math.cos(a) * radius * 0.5, -1.4 - i * 0.5, Math.sin(a) * radius * 0.5)
    g.add(rock)
  }
  return g
}

function tree(scale = 1, round = false) {
  const g = new THREE.Group()
  const trunk = mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.6, 6), COLORS.trunk)
  trunk.position.y = 0.3
  g.add(trunk)
  if (round) {
    const leaf = mesh(new THREE.IcosahedronGeometry(0.45, 0), COLORS.leafLight)
    leaf.position.y = 0.9
    g.add(leaf)
  } else {
    for (let i = 0; i < 2; i++) {
      const leaf = mesh(new THREE.ConeGeometry(0.5 - i * 0.12, 0.8, 7), i ? COLORS.leafLight : COLORS.leaf)
      leaf.position.y = 0.85 + i * 0.4
      g.add(leaf)
    }
  }
  g.scale.setScalar(scale)
  return g
}

function fence(radius, from, to) {
  const g = new THREE.Group()
  const steps = Math.round((to - from) * radius * 2.2)
  for (let i = 0; i <= steps; i++) {
    const a = from + ((to - from) * i) / steps
    const post = mesh(new THREE.BoxGeometry(0.06, 0.32, 0.06), COLORS.white)
    post.position.set(Math.cos(a) * radius, 0.41, Math.sin(a) * radius)
    g.add(post)
  }
  // Thanh ngang noi cac coc.
  for (let i = 0; i < steps; i++) {
    const a1 = from + ((to - from) * i) / steps
    const a2 = from + ((to - from) * (i + 1)) / steps
    const p1 = new THREE.Vector3(Math.cos(a1) * radius, 0.48, Math.sin(a1) * radius)
    const p2 = new THREE.Vector3(Math.cos(a2) * radius, 0.48, Math.sin(a2) * radius)
    const len = p1.distanceTo(p2)
    const rail = mesh(new THREE.BoxGeometry(len, 0.04, 0.03), COLORS.white)
    rail.position.copy(p1).lerp(p2, 0.5)
    rail.lookAt(p2.x, rail.position.y, p2.z)
    rail.rotateY(Math.PI / 2)
    g.add(rail)
  }
  return g
}

function person(look) {
  const styles = {
    suit: { body: 0x2f3a5a, accent: 0xd94a4a, hair: COLORS.hair },
    staff: { body: 0x7e5bd6, accent: 0xffffff, hair: 0x2a1d17 },
    client: { body: 0x3e9a7a, accent: 0xf2c14e, hair: 0x5a4030 }
  }
  const s = styles[look] || styles.staff
  const g = new THREE.Group()
  const legs = mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.3, 8), 0x3b3b4f)
  legs.position.y = 0.15
  g.add(legs)
  const body = mesh(new THREE.CylinderGeometry(0.2, 0.27, 0.5, 10), s.body)
  body.position.y = 0.55
  g.add(body)
  const tie = mesh(new THREE.BoxGeometry(0.06, 0.22, 0.02), s.accent)
  tie.position.set(0, 0.6, 0.24)
  g.add(tie)
  const head = mesh(new THREE.SphereGeometry(0.27, 16, 12), COLORS.skin, { flatShading: false })
  head.position.y = 1.05
  g.add(head)
  const hair = mesh(new THREE.SphereGeometry(0.29, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), s.hair, { flatShading: false })
  hair.position.y = 1.08
  hair.rotation.x = -0.25
  g.add(hair)
  for (const x of [-0.09, 0.09]) {
    const eye = mesh(new THREE.SphereGeometry(0.035, 8, 6), 0x222222, { flatShading: false })
    eye.position.set(x, 1.06, 0.25)
    g.add(eye)
    const blush = mesh(new THREE.SphereGeometry(0.045, 8, 6), 0xff9aa8, { flatShading: false })
    blush.position.set(x * 1.8, 0.98, 0.21)
    g.add(blush)
  }
  return g
}

// Dat nhan vat len dao. Diem neo bong bong gan vao DAO chu khong gan vao nguoi,
// vi nguoi nhun nhay lien tuc se lam bong bong rung theo, kho bam.
function placePerson(islandGroup, look, x, z, rotY) {
  const group = person(look)
  group.position.set(x, 0.25, z)
  group.rotation.y = rotY
  const anchor = new THREE.Object3D()
  anchor.position.set(x, 1.85, z)
  islandGroup.add(group, anchor)
  return { group, anchor }
}

function officeIsland() {
  const g = island(2.4)
  const building = new THREE.Group()
  const walls = mesh(new THREE.BoxGeometry(2, 2.4, 1.4), 0xece8f6)
  walls.position.y = 1.45
  building.add(walls)
  const roof = mesh(new THREE.BoxGeometry(2.2, 0.15, 1.6), 0x6b5bb0)
  roof.position.y = 2.72
  building.add(roof)
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const win = mesh(new THREE.BoxGeometry(0.35, 0.35, 0.05), 0xfff1a8, { emissive: 0xffd970, emissiveIntensity: 0.35 })
      win.position.set(-0.6 + c * 0.6, 1.0 + r * 0.6, 0.72)
      if (!(r === 0 && c === 1)) building.add(win)
    }
  }
  const door = mesh(new THREE.BoxGeometry(0.4, 0.6, 0.06), 0x8a5a3a)
  door.position.set(0, 0.55, 0.72)
  building.add(door)
  const sign = mesh(new THREE.BoxGeometry(1.1, 0.28, 0.06), 0xd94a6a)
  sign.position.set(0, 2.45, 0.74)
  building.add(sign)
  building.position.set(-0.3, 0, -0.7)
  g.add(building)

  const t1 = tree(1.1)
  t1.position.set(1.5, 0.25, -0.9)
  const t2 = tree(0.9, true)
  t2.position.set(-1.7, 0.25, 0.4)
  const t3 = tree(0.8)
  t3.position.set(1.7, 0.25, 0.5)
  g.add(t1, t2, t3, fence(2.25, 0.3, 2.6))

  const a = placePerson(g, 'suit', -0.45, 0.9, 0.5)
  const b = placePerson(g, 'staff', 0.55, 1.1, -0.6)
  return { group: g, people: { zhang: a, li: b } }
}

function cafeIsland() {
  const g = island(2.4)
  const shop = new THREE.Group()
  const walls = mesh(new THREE.BoxGeometry(1.6, 1.2, 1.2), 0xfff0d8)
  walls.position.y = 0.85
  shop.add(walls)
  const roof = mesh(new THREE.ConeGeometry(1.25, 0.8, 4), 0xd9534f)
  roof.position.y = 1.85
  roof.rotation.y = Math.PI / 4
  shop.add(roof)
  // Mai hien soc do trang.
  for (let i = 0; i < 6; i++) {
    const stripe = mesh(new THREE.BoxGeometry(0.27, 0.05, 0.5), i % 2 ? 0xffffff : 0xe25c5c)
    stripe.position.set(-0.68 + i * 0.27, 1.2, 0.8)
    stripe.rotation.x = 0.35
    shop.add(stripe)
  }
  const win = mesh(new THREE.BoxGeometry(0.8, 0.45, 0.05), 0xfff1a8, { emissive: 0xffd970, emissiveIntensity: 0.35 })
  win.position.set(0, 0.95, 0.61)
  shop.add(win)
  shop.position.set(0.3, 0, -0.9)
  g.add(shop)

  // Ban ngoai troi co du.
  const table = new THREE.Group()
  const top = mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 14), 0xffffff)
  top.position.y = 0.55
  const leg = mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.55, 6), 0x777777)
  leg.position.y = 0.28
  const pole = mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.3, 6), 0x777777)
  pole.position.y = 1.1
  const umbrella = mesh(new THREE.ConeGeometry(0.8, 0.35, 8), 0xf2c14e)
  umbrella.position.y = 1.8
  for (const x of [-0.12, 0.14]) {
    const cup = mesh(new THREE.CylinderGeometry(0.05, 0.04, 0.09, 8), 0x8a5a3a)
    cup.position.set(x, 0.63, 0.05)
    table.add(cup)
  }
  table.add(top, leg, pole, umbrella)
  table.position.set(0, 0.25, 0.9)
  g.add(table)

  const t1 = tree(1, true)
  t1.position.set(-1.6, 0.25, -0.4)
  const t2 = tree(0.9)
  t2.position.set(1.7, 0.25, 0.3)
  g.add(t1, t2, fence(2.25, 3.6, 5.6))

  const a = placePerson(g, 'staff', -0.75, 1.05, 0.9)
  const b = placePerson(g, 'client', 0.75, 1.05, -0.9)
  return { group: g, people: { li: a, wang: b } }
}

function bridge(from, to) {
  const g = new THREE.Group()
  const dir = new THREE.Vector3().subVectors(to, from)
  const len = dir.length()
  const count = Math.round(len / 0.32)
  for (let i = 0; i <= count; i++) {
    const t = i / count
    const p = new THREE.Vector3().lerpVectors(from, to, t)
    p.y -= Math.sin(t * Math.PI) * 0.35
    const plank = mesh(new THREE.BoxGeometry(0.7, 0.06, 0.24), COLORS.plank)
    plank.position.copy(p)
    plank.lookAt(to.x, p.y, to.z)
    g.add(plank)
  }
  for (const side of [-1, 1]) {
    const pts = []
    for (let i = 0; i <= 20; i++) {
      const t = i / 20
      const p = new THREE.Vector3().lerpVectors(from, to, t)
      const n = new THREE.Vector3(-dir.z, 0, dir.x).normalize().multiplyScalar(0.36 * side)
      p.add(n)
      p.y += 0.35 - Math.sin(t * Math.PI) * 0.3
      pts.push(p)
    }
    const rope = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.02, 4), mat(COLORS.rope))
    g.add(rope)
  }
  return g
}

function cloud() {
  const g = new THREE.Group()
  for (let i = 0; i < 4; i++) {
    const puff = mesh(new THREE.IcosahedronGeometry(0.5 + Math.random() * 0.3, 1), 0xffffff, { roughness: 1 })
    puff.position.set(i * 0.55 - 0.8, Math.random() * 0.2, Math.random() * 0.3)
    g.add(puff)
  }
  return g
}

export function createVillage(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  scene.add(new THREE.HemisphereLight(0xffffff, 0x88aa88, 1.6))
  const sun = new THREE.DirectionalLight(0xffffff, 2.2)
  sun.position.set(5, 10, 6)
  scene.add(sun)

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enablePan = false
  controls.enableDamping = true
  controls.minDistance = 8
  controls.maxDistance = 22
  controls.maxPolarAngle = 1.25
  controls.target.set(0, 0.3, 0)

  // Hai dao dat cheo theo chieu sau de vua man hinh doc cua dien thoai.
  const office = officeIsland()
  office.group.position.set(-1.7, 0, -2.6)
  const cafe = cafeIsland()
  cafe.group.position.set(1.7, -0.3, 2.6)
  cafe.group.rotation.y = -0.25
  scene.add(office.group, cafe.group)
  scene.add(bridge(new THREE.Vector3(-0.75, 0.2, -0.75), new THREE.Vector3(0.75, -0.1, 0.75)))

  const clouds = []
  for (const [x, y, z] of [[-5, -2, 2], [5, -2.5, -3], [0, -3.5, 6], [-4, 1.5, -7]]) {
    const c = cloud()
    c.position.set(x, y, z)
    scene.add(c)
    clouds.push(c)
  }

  const islands = [office, cafe]
  const people = islands.map((i) => Object.values(i.people))
  const speaking = islands.map(() => null)
  const labelAnchors = islands.map((i) => {
    const o = new THREE.Object3D()
    o.position.set(0, 3.3, 0)
    i.group.add(o)
    return o
  })

  function resize() {
    const w = container.clientWidth
    const h = container.clientHeight
    renderer.setSize(w, h)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  // Man hinh doc thi lui camera ra xa hon de thay du ca hai dao.
  function placeCamera() {
    const portrait = container.clientWidth < container.clientHeight
    camera.position.set(0, portrait ? 10 : 7, portrait ? 15 : 11)
  }
  resize()
  placeCamera()
  const ro = new ResizeObserver(resize)
  ro.observe(container)

  const v = new THREE.Vector3()
  function project(obj) {
    obj.getWorldPosition(v)
    v.project(camera)
    return {
      x: ((v.x + 1) / 2) * container.clientWidth,
      y: ((1 - v.y) / 2) * container.clientHeight,
      visible: v.z < 1
    }
  }

  // Bay camera toi dao duoc chon: noi suy dan trong khoang 1 giay roi tra quyen
  // xoay cho nguoi dung, giu nguyen goc nhin hien tai (chi doi tam).
  let focus = null
  function focusOn(index) {
    const p = islands[index].group.position
    // Tam dat thap hon dao de dao nam o nua tren man hinh, chua cho khung thoai ben duoi.
    const target = new THREE.Vector3(p.x, -1, p.z)
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target)
    offset.setLength(Math.max(controls.minDistance, offset.length() * 0.75))
    focus = { target, camPos: target.clone().add(offset), left: 60 }
  }

  let frameCb = null
  let raf = 0
  const clock = new THREE.Clock()
  function loop() {
    const t = clock.getElapsedTime()
    if (focus) {
      controls.target.lerp(focus.target, 0.08)
      camera.position.lerp(focus.camPos, 0.08)
      if (--focus.left <= 0) focus = null
    }
    islands.forEach((isl, i) => {
      isl.group.position.y = (i ? -0.3 : 0) + Math.sin(t * 0.8 + i * 2) * 0.08
    })
    people.forEach((list, i) =>
      list.forEach((p, j) => {
        // Nguoi dang noi nhun manh hon de biet ai dang noi.
        const amp = p === speaking[i] ? 0.08 : 0.02
        const speed = p === speaking[i] ? 9 : 2
        p.group.position.y = 0.25 + Math.abs(Math.sin(t * speed + j)) * amp
      })
    )
    clouds.forEach((c, i) => {
      c.position.x += Math.sin(t * 0.2 + i) * 0.002
    })
    controls.update()
    renderer.render(scene, camera)
    frameCb?.()
    raf = requestAnimationFrame(loop)
  }
  loop()

  return {
    // Diem neo bong bong cua nhan vat npcId tren dao thu index.
    speakerAnchor: (index, npcId) => islands[index].people[npcId]?.anchor,
    labelAnchor: (index) => labelAnchors[index],
    focusOn,
    setSpeaker: (index, npcId) => {
      speaking[index] = islands[index].people[npcId] || null
    },
    project,
    onFrame: (cb) => {
      frameCb = cb
    },
    dispose: () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      controls.dispose()
      scene.traverse((o) => o.geometry?.dispose())
      matCache.forEach((m) => m.dispose())
      matCache.clear()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }
}
