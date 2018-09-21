<template>
  <div class="wangeditor">
      项目链接：<input type="text" v-model="path">
      <div id="editorElem" style="text-align:left"></div>
      链接id：<input type="text" v-model="poi">
      增加内容：<input type="text" v-model="add"><br>
      <button v-on:click="addContent">增加内容</button><br>
      <button @click="getContent">获取内容</button>
      <div >
        <ul class="elevator">
          <li ref="h2"></li>
        </ul>
      </div>
  </div>
</template>

<script>
var editor = new E('#editorElem')
import E from 'wangeditor'
export default {
  name: 'wangeditor',
  data () {
    return {
      add:[],
      poi:[],
      path:[]
    }
  },
  props:['catchData'],
  methods: {
        addContent () {
          editor.txt.append(`<a href="www.`+this.poi+`.com" style="border:1px solid red;display:block">
                                  <div>小卡片</div>
                                  <p>`+this.add+`</p>
                              </a> <br><p></p>`
          )
        },
        getContent () {
          // editor.txt.html('<p>用 JS 设置的内容</p>')
            
            console.log(editor.config)
            // console.log(editor.config)
        }
      },
  mounted() {
    
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
      // this.catchData(html)
      console.log("aaa")

    }
    // editor.customConfig.menus = [          //菜单配置
    //           'head',
    //           'list',  // 列表
    //           'justify',  // 对齐方式
    //           'bold',
    //           'fontSize',  // 字号
    //           'italic',
    //           'underline',
    //           'image',  // 插入图片
    //           'foreColor',  // 文字颜色
    //           'undo',  // 撤销
    //           'redo',  // 重复
    //         ]
    editor.customConfig.fontNames = [
        '宋体',
        '微软雅黑',
        'Arial',
        'Tahoma',
        'Verdana'
    ]
    // console.log(editor)
    editor.create()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.wangeditor{
  border: 1px solid red;
}
.w-e-toolbar{
  border: 1px solid red;
  /* display: none !important;s */
}
li:nth-child(1){
  display: none;
}
li:nth-child(3){
  display: none;
}
li:nth-child(4){
  display: none;
}
li:nth-child(5){
  display: none;
}
.elevator{
  height: 100px;
  width: 100px;
  background: #ccc;
  position: fixed;
  right: 0;
  bottom:0;
}
</style>
