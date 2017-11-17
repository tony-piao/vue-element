<template>
    <el-container style="border: 1px solid #eee">
        <el-aside width="200px" style="background-color: #fff">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
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
  methods: {
    // tableData() {
    //   return {
    //     data: [
    //       { date: '2017-11-17', name: 'piao', address: '辽宁抚顺' },
    //       { date: '2017-11-17', name: 'piao', address: '辽宁抚顺' },
    //       { date: '2017-11-17', name: 'piao', address: '辽宁抚顺' },
    //     ],
    //   };
    // },
  },
};
</script>
