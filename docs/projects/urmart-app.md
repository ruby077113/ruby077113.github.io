# React Native 升級與架構優化

## 專案簡介

在專案中主要負責 App 功能開發與效能優化，專注於提升使用者體驗與系統穩定性。

將既有 React Native 專案從 0.64 升級至 0.79，處理升級過程中的相容性、效能與架構問題。

專案應用於實際營運中的電商平台，需支援高流量與多樣行銷活動，對穩定性與效能要求高。

👉 Google Play：[UrMart 帶你買遍全世界](https://play.google.com/store/apps/details?id=com.nineyi.shop.s001993&hl=zh_TW)

👉 Apple Store：[UrMart 帶你買遍全世界](https://apps.apple.com/tw/app/urmart-%E5%B8%B6%E4%BD%A0%E8%B2%B7%E9%81%8D%E5%85%A8%E4%B8%96%E7%95%8C/id1065810713)

---

## 技術棧

- React Native / TypeScript
- Android / iOS 原生設定
- Hermes / JSC

---

## 核心挑戰

- 多個套件與新版本不相容
- 原生模組與 build 設定需同步調整
- 新舊架構與 Hermes 行為差異
- 升級過程易造成 crash 與效能下降

---

## 解決方案

### 升級與相容性處理

- 採分階段升級策略，逐步驗證套件相容性
- 調整 iOS / Android build 設定與 native module
- 解決 autolinking 與第三方套件衝突問題

### 效能優化與驗證

- 比較 Hermes 與 JSC 在不同裝置表現
- 測試 Android OEM 裝置（Samsung / Oppo / Vivo）
- 分析並優化操作延遲與互動卡頓問題

### Debug 與問題排查

- 透過 log 與 render 行為定位問題
- 建立可重現測試情境
- 從 component / state / native 層逐步縮小問題範圍

---

## 技術決策

- 實測 Hermes 與 JSC 差異，依裝置表現調整策略
- 採用分段升級與回退機制，降低風險

---

## 成果

- 成功完成 React Native 升級並維持系統穩定
- 改善 OEM 裝置操作延遲與卡頓問題
- 建立升級與效能問題排查流程

## 代表性問題案例：Android OEM 裝置操作延遲問題

### 問題背景

在 React Native 升級後，部分 Android OEM 裝置（如 Samsung、Oppo、Vivo）出現明顯的操作延遲與互動卡頓問題：

- 點擊反應延遲
- Tab 切換不順
- UI 回應不即時

但在 Pixel 等原生 Android 裝置上表現正常。

---

### 問題分析

透過逐步排查，發現問題並非單一原因，而是多個因素疊加：

- 部分 component 存在過度 re-render
- callback function 未 memoization，導致子元件頻繁重新渲染
- Hermes 在特定 OEM 裝置上的效能表現不穩定
- Android target SDK 與系統行為存在差異

---

### 解決過程

採取多階段驗證與調整策略：

1. **Render 行為優化**
   - 使用 `useCallback` 與 `React.memo` 降低不必要的 re-render
   - 調整 props 傳遞方式，避免 function identity 改變

2. **Runtime 比較（Hermes vs JSC）**
   - 關閉 Hermes，改用 JSC 進行 A/B 測試
   - 比較不同 runtime 在 OEM 裝置上的操作流暢度

3. **平台設定調整**
   - 測試不同 Android target SDK（35 → 34）行為差異
   - 驗證是否為系統層級影響

4. **實機驗證**
   - 在多台 OEM 裝置上進行長時間操作測試
   - 重現與觀察 lag 發生條件

---

### 成果

- 明顯改善 OEM 裝置操作延遲與卡頓問題
- 提升 App 在不同 Android 裝置上的一致性與穩定性
- 建立一套可重現的效能問題排查流程（render → runtime → platform）

---

### 技術收穫

- 深入理解 React Native render 行為與效能影響因素
- 熟悉 Hermes 與 JSC 在不同裝置上的差異
- 建立跨層（JS / Native / 系統）問題分析能力
