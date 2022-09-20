<template>
  <div class="tinymce">
    <editor id="tinymce" v-model="tinymceHtml" :init="init" />
  </div>
</template>

<script>
//js部分
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver"; //手动引入tinymce主题
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件
export default {
  data() {
    return {
      tinymceHtml: "", // 富文本双向绑定的值
      init: {
        //富文本参数
        language_url: `/tinymce/langs/zh_CN.js`,
        language: "zh_CN",
        skin_url: `/tinymce/skins/ui/oxide`,
        content_css: `/tinymce/skins/content/default/content.css`,
        // skin_url: `/static/tinymce/skins/ui/oxide-dark`, // 暗色系
        // content_css: `/static/tinymce/skins/content/dark/content.css`, // 暗色系
        height: 600,
        plugins: "lists image media table wordcount",
        toolbar:
          "undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat",
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
        },
      },
    };
  },
  mounted() {
    tinymce.init({});
  },
};
</script>