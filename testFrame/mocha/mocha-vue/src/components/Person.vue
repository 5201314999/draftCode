<template>
  <div class="main">
   <section class="base-info">
       <div class="col">
        <h2>范炯荣</h2>
        <div class="form-group ">
          <span class="label">应聘职位：</span>
          <span class="content">{{name}}</span>
        </div>
       </div>
       <div class="col">
        <div class="form-group">
          <span class="label">年龄：</span>
          <span class="content">{{userInfo.age}}</span>
        </div>
         <div class="form-group">
          <span class="label">联系电话：</span>
          <span class="content">{{userInfo.phone}}</span>
        </div>
         <div class="form-group">
          <span class="label">工作年限：3年+</span>
          <span class="content">{{userInfo.jobTime}}</span>
        </div>
         <div class="form-group">
          <span class="label">毕业院校：</span>
          <span class="content">{{userInfo.colleage}}</span>
        </div>
       </div>
       <div class="col">
         <div class="form-group">
          <span class="label">专业：</span>
          <span class="content">{{userInfo.major}}</span>
        </div>
       </div>
   </section>
   <section class="skill"></section>
   <section class="job"></section>
   <section class="program"></section>
   <section class="assign"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Person extends Vue {
    name='范炯荣'

    data(): any {
      return {
        userInfo: {
          age: 26,
          phone: 15521372614,
          jobTime: '3年+',
          colleage: '华南农业大学（统招一本）',
          major: '计算机科学与技术',
        },
      };
    }
}
</script>

<style scoped lang="scss">
  .form-group{
    .label{
      font-weight: 600;
      font-size:14px;
    }
  }
  .main{
    min-width:1024px;
    .base-info{
      display: flex;
      .col{
        width:30%;
      }
    }
  }
</style>
