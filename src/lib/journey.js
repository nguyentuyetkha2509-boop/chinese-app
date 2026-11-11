import { loadJSON, saveJSON } from './storage'
import { JOURNEY_STATIONS } from '../data/journey'

// Tien do rieng cua ban do: chi giu phan khong suy ra duoc tu tien do cu
// (nhap vai AI da lam va sticker da nhan). Nhiem vu chu de/hoi thoai doc thang
// tu completedTopics/completedDialogues de khong luu trung hai noi.
export const JOURNEY_KEY = 'journeyProgress'
const EMPTY = { roleplayDone: [], claimed: [] }

// So luot nguoi hoc tu noi trong vai de tinh la da nhap vai xong mot ga.
export const ROLEPLAY_TURNS = 3

export function loadJourney() {
  const data = loadJSON(JOURNEY_KEY, EMPTY)
  return { roleplayDone: data.roleplayDone || [], claimed: data.claimed || [] }
}

function addTo(field, key) {
  const cur = loadJourney()
  if (cur[field].includes(key)) return cur
  const next = { ...cur, [field]: [...cur[field], key] }
  saveJSON(JOURNEY_KEY, next)
  return next
}

export const markRoleplayDone = (key) => addTo('roleplayDone', key)
export const markStickerClaimed = (key) => addTo('claimed', key)

export function isTaskDone(task, { completedTopics, completedDialogues }) {
  return task.type === 'dialogue' ? completedDialogues.includes(task.ref) : completedTopics.includes(task.ref)
}

export function isStationDone(station, progress) {
  return station.tasks.every((t) => isTaskDone(t, progress))
}

// Ga dau luon mo; cac ga sau mo khi ga truoc da xong nhiem vu bat buoc,
// de nguoi hoc di theo mot con duong thay vi lac giua nhieu lua chon.
export function stationStates(progress) {
  let prevDone = true
  return JOURNEY_STATIONS.map((s) => {
    const done = isStationDone(s, progress)
    const state = done ? 'done' : prevDone ? 'current' : 'locked'
    prevDone = done
    return state
  })
}
