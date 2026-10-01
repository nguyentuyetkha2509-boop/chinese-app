// Tien do "bai da hoc" sau khi doi sang giao trinh HSK 3.0.
//
// Khoa bai cu (vd "hsk1:3") tro vao bai khac hoan toan sau khi doi giao trinh, nen khong
// the doc lai khoa cu. Dung khoa luu moi va, lan dau, suy tu SRS: hoan thanh mot bai da
// gieo the on tap cho moi tu cua bai (xem seedNewCards), nen bai moi coi la da hoc khi
// MOI tu cua no da co trong SRS. Nhu vay tu nao nguoi hoc da hoc ben giao trinh cu (cung
// chu Han, id giu nguyen) thi khong phai hoc lai.
import { loadJSON } from './storage'
import { LEVELS } from '../data/levels'

export const COMPLETED_UNITS_KEY = 'completedUnitsV3'

export function deriveCompletedUnits(srsState) {
  const done = []
  for (const level of LEVELS) {
    for (const unit of level.units) {
      if (unit.words.length > 0 && unit.words.every((w) => srsState[w.id])) {
        done.push(`${level.id}:${unit.id}`)
      }
    }
  }
  return done
}

export function loadCompletedUnits(srsState) {
  const saved = loadJSON(COMPLETED_UNITS_KEY, null)
  return Array.isArray(saved) ? saved : deriveCompletedUnits(srsState)
}
