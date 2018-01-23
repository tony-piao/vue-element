<template>
  <div id="app">
    
    <el-container
      style="border: 1px solid #eee">
      <el-aside width="200px"  class="bike-menu">
        <el-menu :default-openeds="['1', '3']" 
          default-active="1-2"
          :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航栏1
             </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" :route="{name:'user'}">用户管理</el-menu-item>
              <el-menu-item index="1-2" :route="{name: 'bikeNews'}">新闻中心</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>导航栏2
             </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">用户管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header> -->

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import {
  container, aside, menu, submenu,
  header, dropdown, dropdownItem, main,
  table, tableColumn, menuItemGroup, menuItem,
  dropdownMenu,
} from 'element-ui';

export default {
  components: {
    elContainer: container,
    elAside: aside,
    elMenu: menu,
    elSubmenu: submenu,
    elHeader: header,
    elDropdown: dropdown,
    elDropdownItem: dropdownItem,
    elMain: main,
    elTable: table,
    elTableColumn: tableColumn,
    elMenuItemGroup: menuItemGroup,
    elMenuItem: menuItem,
    elDropdownMenu: dropdownMenu,
  },
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-grow: 1;

  .bike-menu {
    background: #607D8B;
  }
}
</style>
