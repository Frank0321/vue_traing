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
 

## class 結合 v-bind 使用
- 需要根據可變的表達式結果來給 class 值，就需要用到 v-bind:class="xxx"

### v-bind:class= ()? a : b
- 一個 class 對應一個判斷 : 如果 class 要依照參數來判斷 class 的名稱，前面需要加上 v-bind
- 一個 class 對應多個判斷 : 用物件呈現
- 在 list 中 class 對應不同值 : 利用 v-for 跑迴圈，class="{判定的標準}[forloop 內要判斷的參數]" 
---
- v-bind : 屬性名="表達式"，最終表達式運結束的結果賦予該屬性名
  - 簡化  ` : 屬性名="表達式"`
- class : 結果的分類
  - 一個樣式 : 返回字串符 (三元表達式和 key 和樣式的清單對象)
  - 多個樣式 : 返回對象 (樣式做 key，true 或 false 做值) 