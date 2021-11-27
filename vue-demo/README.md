# vue-demo

## LessonOne
- 第二節 快速部屬 vuecli
- 參考程式 
> - views/lessonOne
> - public/bootstrap.min.css
> - public/index.html
> - App.vue
  
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

### 備註 
- App.vue 的 <router-view /> 不可以刪除，否則無法用 router 開啟其他畫面
     


## LessonTwo
- $refs、$parent、$children 實戰解析
- 參考程式
> ref-parent-children/demo
### bug 處理
- This dependency was not found: (引用的路徑錯了)
> './components/ref-parent-children/demo' 應該為這樣

- Module build failed: Error: ENOENT:
> 把 node_modules 砍了，然後 npm install 重新裝一次

- 頁面渲染完成
> mounted()

### $refs
- 參考 ref-parent-children/demo
- 在 html 如 class 一樣，標上 ref="abc"，即可對這個 ref 進行操作
1. 獲取 ref 標籤資訊
   ```html
   //獲取 input
   console.log(this.$refs.inputref);
   ```
2. 修改該 ref 的樣式 (已修改外框為例)
   ```html
    //修改樣式
    this.$refs.inputref.style.borderColor = "red";
   ```
3. 獲取焦點 (開啟頁面時，游標自動閃爍，表示可以直接輸入的意思)
   ```html
    //獲取焦點
    this.$refs.inputref.focus();
   ```
   
### $ref 父操作子元件
- 參考程式
- ref-parent-children/father-vue
- ref-parent-children/children-vue
- views/LessonTwo.vue (呈現)


