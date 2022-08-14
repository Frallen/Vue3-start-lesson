<template>
  <div class="form-box">
    <h3>Создайте новый пост</h3>
    <form @submit.prevent="submitpost($event)" class="form">
      <default-input class="form-item" v-model.trim="post.title"></default-input>
      <default-textarea
        class="form-item"
        v-model="post.body"
      ></default-textarea>
      <greenbutton class="form-item">submit</greenbutton>
    </form>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      post: {
        id: null,
        title: "",
        body: "",
      },
    };
  },
  components: {},
  methods: {
    submitpost() {
      // Данные в данном компоненте представленны в виде объекта
      // создаю айдишник для новой записи
      this.post.id = Date.now();
      //с помощью эммита регистрирую отправку данных в родительских компонент
      //в родительском компоненте лежит массив, я лишь отправляю туда новый объект
      this.$emit("create", this.post);
      //затираю все данные формы
      this.post = {
        id: null,
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.form-box {
  margin: auto;
  height: fit-content;
  padding: 10px;
  box-shadow: 0 1px 4px 2px #eee;
  background: #fff;

}
.form {
  &-item {
    margin-top: 10px;
  }
  &-item:first-child {
    margin-top: 0;
  }
}
</style>
