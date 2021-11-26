# vue-demo

## 第二節 快速部屬 vuecli
### 修改 eslint
1. cmd 移動道專案目錄，然後 輸入 vue ui
2. 匯入 -> 此專案目錄的位置 -> 匯入這個資料夾 => 自動移到專案控制台
3. 設定 -> ESlint ->關閉 `保存時檢查`
- 根目錄底下會新增一個 vue.config.js 的檔案，為上述操作的結果

### 使用 bootstrap 4 樣式
[bootstrap 4 的官網](https://getbootstrap.com/)
1. jsDelivr -> Explore the docs 
2. 複製 css 裡面的 href [url](https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css)
3. 在網頁上開啟，然後另存在 public 的檔案夾中
4. 在 public 底下的 index.html 引入 css
    ```html
    <link rel="stylesheet" href="bootstrap.min.css" />
    ```
5. button class 的名稱命名為 : btn btn-primary

- 樣式可以參考官網上的 components [components](https://getbootstrap.com/docs/5.1/components/accordion/)
     
