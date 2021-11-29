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
    
## methods_on
### methods
- 聲明函數，屬於組件對象的
- 包含多個函數名作 key，函數體做 value
- 在 script 中能使用的對象，基本上 template 中也可以使用
- 但在 script 中則需要加 this 呼叫，在 template 則不需要加 this

### 本章重點
- 綁定事件的方法
  - v-on:事件名 ="表達式||函數名"
  - 簡寫 : @事件名="表達式||函數名"
- 函數名如果沒有參數，可以省略()，只給一個函數名稱
- 聲明組件內涵數，在 export default 這個對象的根屬性加上 methods 屬性，其是一個對象
  - key 是函數名，值是函數本體
- 在 export default 這個對象的根屬性上 data 屬性，其是一個函數，返回一個對象
  - 對象的屬性是我們初始化的變量的名稱
    
### v-bind、v-on
- v-bind 可以用 : 縮寫，如
  - v-bind:class => :class

- v-on 可以用 @ 縮寫，如
  - v-on:click => @click

## v-for 的使用
- 可以使用操作數組 (item, index)
- 可以使用操作對象 (value, key, index)

- key 是類似 trank by 的一個屬性
- 為了是告訴 vue.js 中的元素，與頁面之間的關係，當試圖刪除元素的時候，是單個元素的刪除而不是
  替換，所以需要關聯其關係的設置(必需的性能)
- 2.2.0+ 的版本裡，當在組件中使用 v-for 時，key 現在是必須存在的