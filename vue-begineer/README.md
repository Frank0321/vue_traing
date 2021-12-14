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

## 父子元件的使用
- 在script 中，添加 components: {}
  - 寫法為 `組件名 : 組件對象` ，如果一樣，則可以用組件名表示 
- 僅對當前的 html 標籤設定 css 樣式，在 style 加上 scoped
```html
<style scoped>
</style>
```
- 父和子，使用的是父，被使用的是子
- 父需要聲明子組件，引用子組件對象，聲明方式如下 :
  ```javascript
  import 子組件對象 form '../xxx';
  {
      components: {
          組件名: 子組件對象
      }
  }
  ```
## 全局組件  
- 全局組件，使用更為方便，不需要引入和聲明，直接用
- 用 main.js 中引入一次，在 main.js 中使用  `vue.component('組件名', 組件對象)`


## 父傳子
- 父組件通過子組件的屬性將值進行傳遞，方式 : 
  - 常量 : prop1="常量值"
  - 變量值 : prop2="變量名"
- 子組件需要聲明
  - 根屬性 props: ['prop1', 'prop2']
  - 在頁面中直接使用{{prop1}}
  - 在 js 中，使用 this.prop1 獲取
  
## 看文黨的對象分類
- 全局的代表 vue. 的
- 實例的代表 this. 或者 new Vue().
- 選項代表 new Vue() 的參數，或者 export default 理邊的屬性

## 子向父組件通訊
- 通過 new Vue() 這樣的一個對象，來 $on('事件名', fu(prop1, prop2))
- 另一個組件引入同一個通訊，來 $emit('事件名', prop1, prop2)

## 複習 
- vue 單文件方式 xxx.vue
- 編寫流程為 : 
1. 準備好配置文件
  > - package.json(包描述文件 && 封裝命令 npm rum dev)
  > - webpack.config.js 文件 (打包的配置文件)
2. 創建 index.html (單頁應用的頁面)
3. 創建 main.js (入口文件)
4. 引入 vue 和相關的文件 xxx.vue
5. new Vue (option)
6. options (選項)
   > - data
   > - methods
   > - components
   > - props
7. 實例 :
- 在組件內 (xxx.vue) 中的 this
- new Vue ()
- 事件
  > - this.$on(事件名，回調函數(參數))
  > - this.$emit(事件名，數據)
  > - this.$once(事件名，回調函數(參數))就觸發一次
  > - this.$off(事件名)，取消事件
8. 全局
- Vue.component('組件名', 組件對象) 在哪裡都可以使用
9. 組件傳值
- 父傳子 : 屬性最為參數
  > - 常量 : title="xxx"  子組件聲明接收參數 props : ['xxx'] 
  > - 變量 : :title="num" 子組件聲明接收參數 props : ['xxx']
- 子傳父 : vuebus (只能是同一輛車)
  > - 先停車到父組件，on 一下
  > - 再開車到子組件，如果需要的話，emit一下，觸發上述時間的回調函數
   
## 過濾器
- vue 中沒有提供相關的內置的過濾器，可以自定義過濾器
- 可以分成兩種過濾器
  - 組件內過濾器 : 是 options 中的一個 filters 的屬性(一個對象) + 多個 key 就是不同過濾器名，多個 value 就是與 key 對應的過濾方式函數集
  - 全局過濾器 : Vue.filter(名，fu)
- 全局過濾器與組件過濾器的差異
  - 全局 : 範圍大，如果出現同名時，會以組件的過濾器為主 
  - 組件過濾器 : 範圍小，如果出現同名時，會以組件的過濾器為主

## 獲取 DOM 元素
- 前端框架就是為了減少 DOM 操作，但是特定情況下，也給你留了後門
- 在指定的元素上，添加 ref="名稱A"
  - 如果 ref 放在原生 DOM 元素上，獲取的數據就是原生 DOM 對象 => 可以直接操作
  - 如果 ref 放在了組件對象上，獲取的就是組件對象 => 獲取到 DOM 對象，通過 this.$refs.sub.$el 進行操作
  - 對應的事件
  > - created 完成了數據的初始化，此時還未生成 DOM，無法操作 DOM
  > - mounted 將數據已經裝載到 DOM 之上，可以操作 DOM
 
##  mint-ui
- element-ui 在 PC 端使用的
- 移動端版本 mint-ui
- [參考](https://mint-ui.github.io/#!/zh-cn)
- 引用別人寫好的套件

## wappalyzer
- 獲取到當前網站所使用到的技術

## vue-router
- 前端路由核心就是錨點值的改變，根據不同的值，渲染指定 DOM 位置的不同數據
- ui-router : 錨點值改變，如何獲取模板 -> ajax
- vue 中，模板數據不是通過 ajax 請求來，而是調用函數獲取到模板內容
- 核心 : 錨點值改變
- 以後看到 vue 開頭，就知道必須 Vue.use
- vue 的核心插件
  - vue-router 路由
  - vuex 管理全局共享數據
- 使用方式
  1. 下載 `npm i vue-router -S`
  2. 在 main.js 中引入
  3. 安裝插件 `Vue.use(插件)`
  4. 創建路由對象並配置路由規劃
  5. 將其路由對象傳遞給 Vue 的實例， option 中
---
### 路由 (Router)
- 為了讓畫面跟隨著網址，渲染畫面
- (放圖片)

## router 命名
- 需求 : 通過 <a></a> 標籤點擊，做頁面數據的跳轉
- 使用 router-link 標籤
  ```javascript
  <router-link :to="{name: 'musicUrl'}">進入音樂1</router-link>
  <router-link to="/music">進入音樂2</router-link>
  <router-link :to=" '/music' ">進入音樂3</router-link>
  ```

## 參數 router-link
- 在 vue-router 中，有兩大對象被掛載到實例 this
- $route (只讀、具備信息的對象)、$router(具備功能函數)
- "/detail" 底下任意內容都可以匹配 如 : /detail?id=1 等
- vue-router 中掛載兩個對象的屬性
  - $route (信息數據)
  - $router (功能函數)
- 查詢字符串 ../detail?id=1
  - 去哪裡 `<router-link :to="{name:'detail-query', query:{id:index}}"> 查看</router-link>`
  - router 設定 `{path: '/detail', name: 'detail-query', component: () => import('../components/detail')}`
  - 讀取方式 `console.log(this.$route.query)`
- path方式  ../detail/1
  - 去哪裡 `<router-link :to="{name:'detail-params', params:{id:index}}"> 查看</router-link>`
  - router 設定 `{path: '/detail/:id', name: 'detail-params', component: () => import('../components/detail')}`
  - 讀取方式 `console.log(this.$route.params)`
  
## 編程導航
- 不能保證用戶一定會點擊某些按鈕
- 並且當前操作，除了路由跳轉以外，還有一些別的附加動作
- this.$router.go 根據瀏覽器紀錄，前進、後退
- this.$router.push (直接跳轉到某個頁面顯示)
  - push 參數 : 字符串 /xxx
  - 對象 : `{name: 'xxx'}`