export const blockStates = Object.freeze({
  DEFAULT: "default", // 全ブロックの初期状態
  EMPTY_VISIBLE: "emptyVisible", // 空が見えている状態
  EMPTY_HIDDEN: "emptyHidden", // 空が隠れている状態
  BOMB_VISIBLE: "bombVisible", // 爆弾が見えている状態
  BOMB_HIDDEN: "bombHidden", // 爆弾が隠れている状態
  AROUND_BOMS_NUM_VISIBLE: "aroundBomsNumVisible", // 周りの爆弾の数が見えている状態
  AROUND_BOMS_NUM_HIDDEN: "aroundBomsNumHidden", // 周りの爆弾の数が隠れている状態
});
