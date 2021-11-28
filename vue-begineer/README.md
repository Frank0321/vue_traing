# vue-begineer

## lesson2 常用指令

### main.js 介紹
1. 引用 vue
2. 引用 app.vue 用它的內容來替換 div id = app
3. 構建 vue 實例
```javascript
new Vue({
    el: '#app',
    render: function (c){
        returnc(App);
    }
})
```
- el : 渲染內容的目的地

### v-text
- 是元素的 innerText 只能在雙標籤中使用

### v-html
- 是元素的 innerHTML 不能包含{{xxx}}

### v-if
- 元素是否移除或插入 
- false 則會被當成註解，移除掉

### v-show
- 元素是否顯示或隱藏
- false 則元素的屬性 會被加上 display: none

### v-model
- 雙向改變

### v-bind
- 單向改變
- v-bind 的值會受外部影響，但改變他的值，不會改變到外部值

## 服務器
### 修改 port 
1. package.json 中，在 "serve": "vue-cli-service serve" 後面加上 --port 3000
    ```json
      "scripts": {
        "serve": "vue-cli-service serve --port 3000",
        "build": "vue-cli-service build"
      },
    ```
- 參考 : [when using the Vue CLI](https://stackoverflow.com/questions/47219819/how-to-change-port-number-in-vue-cli-project) 為關鍵字
 