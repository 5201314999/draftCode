# 浅学之单元测试

::: tip 前言
了解javascript 测试框架和简单使用
:::

## 了解单元测试

### 单元测试意义
单元测试是软件工程中的其中一个环节，具有十分重要的意义。
从代码开发者的角度来看，编写测试用例，利用测试框架创造环境执行，可以做到1次编写，多次测试的效果，在业务代码或许使用较少,对于高度模块化可复用的组件来说，单元测试可以提高。

### 常用框架
常见的框架有jest，Mocha，Jasmine(较老，但是国内用得比较少),当然，还有其他的，不过学习一二(jest,mocha)得以管中窥豹，便算得上满载而归了。

1. jest
  * facebook 坐庄
  * 基于 Jasmine 至今已经做了大量修改添加了很多特性
  * 开箱即用配置少，API简单
  * 支持断言和仿真
  * 支持快照测试
  * 在隔离环境下测试
  * 互动模式选择要测试的模块
  * 优雅的测试覆盖率报告，基于Istanbul
  * 智能并行测试(参考)
  * 较新，社区不十分成熟
  * 全局环境，比如 describe 不需要引入直接用
  * 较多用于 React 项目(但广泛支持各种项目)

2. Mocha

  * 灵活(不包括断言和仿真，自己选对应工具)
  * 流行的选择：chai，sinon
  * 社区成熟用的人多，测试各种东西社区都有示例
  * 需要较多配置
  * 可以使用快照测试，但依然需要额外配置

3. Jasmine
  * 开箱即用(支持断言和仿真)
  * 全局环境
  * 比较'老',坑基本都有人踩过了

参考[前端框架的对比](https://www.cnblogs.com/lihuanqing/p/8533552.html)

三者的特点：

* jest 是facebook 出的，比较新，集成了Mocha，chai，jsdom，sinon，配置较少，开箱即用，目前比较受欢迎
* mocha 可以将报告同步到github，社区成熟,配置较多

* karama 不是js 测试框架，也不是断言库，而是一个启动一个http 服务器 生成一个运行html 环境，例如一个真正的浏览器还有其他，具体可以查询github 说明。

* mocha 默认运行在node 环境中，也可以运行在浏览器中，通常和karma 一起配合使用。
* chai 提供了 Should，expect, assert 三种api



3. 基本用法

#### mocha

##### describe(string, function)

describe 块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"Array"），第二个参数是一个实际执行的函数。上面可以看到，describe 块可以嵌套使用

##### it(string, function)

所有的测试用例（it 块）都应该含有一句或多句的断言。它是编写测试用例的关键。断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。上面的例子中我们引入了 Chai 断言库的 expect API,（注释部分代码是 node 自带断言库 assert）。Chai 支持 expect, should, asset 三种形式的断言 API 。

##### mocha 运行命令

mocha + 路径入口 （没有指明 Mocha 会自动在项目中搜索 test 文件夹，并执行该文件夹下的所有 js 文件)

##### 难点

测试用例的编写。

#### 

### 参考资料

* [mocha](https://mochajs.cn/#getting-started)
* [karma](https://github.com/karma-runner/karma)
* [Jest](https://jestjs.io/docs/zh-Hans/tutorial-react)






