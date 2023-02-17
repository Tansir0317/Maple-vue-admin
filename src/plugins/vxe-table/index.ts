/*
 * @Description:
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 14:31:59
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:47:15
 */
/*
 * @Description: vxe-table 基于 vue 的 PC 端表格组件
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-16 14:31:59
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-16 15:31:08
 */
// npm install xe-utils vxe-table@next vxe-table-plugin-element@next element-plus
import type { App } from 'vue';
// https://vxetable.cn/#/table/start/install
import VXETable from 'vxe-table';
// https://github.com/x-extends/vxe-table-plugin-element
import VXETablePluginElement from 'vxe-table-plugin-element';

VXETable.use(VXETablePluginElement);

VXETable.setup({
  size: null, // 全局尺寸
  zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡
  version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  loadingText: '加载中...', // 全局loading提示内容，如果为null则不显示文本
  table: {
    showHeader: true, //是否显示表头
    keepSource: false, //保持原始值的状态，被某些功能所依赖，比如编辑状态、还原数据等（开启后影响性能，具体取决于数据量）
    showOverflow: null, //设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）
    showHeaderOverflow: null, //设置表头所有内容过长时显示为省略号
    showFooterOverflow: null, //设置表尾所有内容过长时显示为省略
    size: null, //表格的尺寸
    autoResize: true, //自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
    stripe: true, //是否带有斑马纹（需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式）
    border: true, //是否带有边框
    round: true, //是否为圆角边框
    emptyText: '暂无数据', //空数据时显示的内容
    rowConfig: {
      //行配置信息
      keyField: '_X_ROW_KEY', // 自定义行数据唯一主键的字段名（默认自动生成）
    },
    radioConfig: {
      //单选框配置项
      trigger: 'default', //触发方式（注：当多种功能重叠时，会同时触发）
    },
    checkboxConfig: {
      //复选框配置项
      strict: false, //严格模式，当数据为空或全部禁用时，列头的复选框为禁用状态
      highlight: false, //高亮勾选行
      range: false, //开启复选框范围选择功能（启用后通过鼠标在复选框的列内滑动选中或取消指定行）
      trigger: 'default', //触发方式（注：当多种功能重叠时，会同时触发）
    },
    sortConfig: {
      //排序配置项
      remote: false, //所有列是否使用服务端排序，如果设置为 true 则不会对数据进行处理
      trigger: 'default', //触发方式（注：当多种功能重叠时，会同时触发）
      orders: ['asc', 'desc', null], //自定义轮转顺序
      // sortMethod: null 全局排序方法，当触发排序时会调用该函数，返回排序后的列表
    },
    filterConfig: {
      //筛选配置项
      remote: false, //所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理
      // filterMethod: null 全局筛选方法，当触发筛选时会调用该函数，返回是否有效
    },
    expandConfig: {
      //展开行配置项（不支持虚拟滚动）
      trigger: 'default', //触发方式（注：当多种功能重叠时，会同时触发）
      showIcon: true, //是否显示图标按钮
    },
    treeConfig: {
      //树形结构配置项
      rowField: 'id', //树节点的字段名
      parentField: 'parentId', //树父节点的字段名
      children: 'children', //树子节点的字段名
      hasChild: 'hasChild', //只对 lazy 启用后有效，标识是否存在子节点，从而控制是否允许被点击
      mapChildren: '_X_ROW_CHILD',
      indent: 20, //树节点的缩进
      showIcon: true, //是否显示图标按钮
    },
    tooltipConfig: {
      //tooltip 配置项
      enterable: true, //鼠标是否可进入到工具提示中
    },
    menuConfig: {
      //快捷菜单配置项
      // visibleMethod () {} 该函数的返回值用来决定是否允许显示右键菜单（对于需要对菜单进行权限控制时可能会用到）
    },
    editConfig: {
      //可编辑配置项
      mode: 'cell', //编辑模式
      showAsterisk: true, //是否显示必填字段的红色星号
    },
    importConfig: {
      //导入配置项
      modes: ['insert', 'covering'], //导入数据的方式
    },
    exportConfig: {
      //导出配置项
      modes: ['current', 'selected'], //输出数据的方式列表
    },
    customConfig: {
      //自定义列配置项
      storage: false, //是否启用 localStorage 本地保存，会将列操作状态保留在本地（需要有 id）
    },
    scrollX: {
      //横向虚拟滚动配置（不支持展开行）
      gt: 60, //指定大于指定列时自动启动横向虚拟滚动，如果为 0 则总是启用；如果需要关闭，可以设置 enabled 为 false
    },
    scrollY: {
      //纵向虚拟滚动配置（不支持展开行）
      gt: 100, //指定大于指定行时自动启动纵向虚拟滚动，如果为 0 则总是启用；如果需要关闭，可以设置 enabled 为 false（注：启用纵向虚拟滚动之后将不能支持动态行高）
    },
    loading: true, //表格是否显示加载中
  },
  grid: {
    size: null, //表格的尺寸
    zoomConfig: {
      //缩放配置项
      escRestore: true, //是否允许通过按下 ESC 键还原
    },
    pagerConfig: {
      //分页配置项
      perfect: false, //配套的样式
    },
    toolbarConfig: {
      //工具栏配置
      perfect: false, //配套的样式
    },
    proxyConfig: {
      //数据代理配置项（基于 Promise API）
      autoLoad: true, //是否自动加载查询数据
      message: true, //是否显示内置的消息提示（可以设为 false 关闭内置的消息提示）
      props: {
        //获取的属性配置
        list: null, // 用于列表，读取响应数据
        result: 'result', // 只对 pager-config 配置了有效，响应结果中获取数据列表的属性 用于分页，读取响应数据
        total: 'page.total', // 只对 pager-config 配置了有效，响应结果中获取分页的属性 用于分页，读取总条数
      },
      beforeItem: null,
      beforeColumn: null,
      beforeQuery: null,
      afterQuery: null,
      beforeDelete: null,
      afterDelete: null,
      beforeSave: null,
      afterSave: null,
    },
  },
  pager: {
    size: null, //尺寸
    autoHidden: false, //当只有一页时自动隐藏
    perfect: true, //配套的样式
    pageSize: 10, //每页大小
    pagerCount: 7, //显示页码按钮的数量
    pageSizes: [10, 15, 20, 50, 100], //每页大小选项列表
    layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total'], //自定义布局
  },
  form: {
    preventSubmit: false, //是否禁用默认的回车提交方式，禁用后配合 validate() 方法可以更加自由的控制提交逻辑
    size: null, //尺寸
    titleColon: false, //是否显示标题冒
    validConfig: {
      //检验配置项
      autoPos: true, //是否自动定位到校验不通过的项
    },
    tooltipConfig: {
      enterable: true,
    },
    titleAsterisk: true, //是否显示必填字段的红色星号
  },
  input: {
    size: null, //尺寸
    transfer: false, //只对 type=date|time|datetime|week|month|quarter|year 有效，是否将弹框容器插入于 body 内（对于嵌入到表格或者弹窗中被遮挡时需要设置为 true）
    labelFormat: '', //只对 type=date|datetime|week|month|quarter|year 有效，输入框中显示的日期格式
    valueFormat: '', //只对 type=date|datetime|week|month|quarter|year 有效，绑定值的返回格式，默认返回 Date 类型，如果指定格式则返回字符串
    startDay: 1, //设置每周的起始日期是星期几
    digits: 2, //只对 type=float 有效，小数位数
    controls: true, //只对 type=number|integer|float 有效，是否显示控制按钮
  },
  textarea: {
    size: null, //尺寸
    autosize: {
      //自适应文本高度
      minRows: 1, //最小行
      maxRows: 10, //最大行
    },
  },
  select: {
    size: null, //尺寸
    transfer: false, //是否将弹框容器插入于 body 内（对于嵌入到表格或者弹窗中被遮挡时需要设置为 true）
    optionConfig: {
      //选项配置信息
      keyField: '_X_OPTION_KEY', // 自定义选项数据唯一主键的字段名（默认自动生成）
    },
    multiCharOverflow: 8, //只对 multiple 有效，设置多选中每个选项显示值的最大字符数，如果超出显示省略号；如果为 -1 则关闭
  },
  toolbar: {
    size: null, //尺寸
    import: {
      //导入按钮配置（需要设置 "import-config"）
      icon: '', //自定义图标
    },
    export: {
      //导出按钮配置（需要设置 "export-config"）
      icon: '', //自定义图标
    },
    custom: {
      //自定义列配置
      isFooter: true, //是否显示底部操作按钮
    },
    buttons: [], //左侧按钮列表
    tools: [], //右侧工具列表
  },
  button: {
    size: null, //尺寸
    transfer: false, //是否将弹框容器插入于 body 内（对于嵌入到表格或者弹窗中被遮挡时需要设置为 true）
  },
  radio: {
    size: null, //尺寸
  },
  checkbox: {
    size: null, //尺寸
  },
  switch: {
    size: null, //尺寸
  },
  modal: {
    // size: null, //尺寸
    minWidth: 340, //窗口的最小宽度
    minHeight: 200, //窗口的最小高度
    lockView: true, //是否锁住页面，不允许窗口之外的任何操作
    mask: true, //是否显示遮罩层
    duration: 3000, //只对 type=message 有效，自动关闭的延时，如果为 -1 禁用自动关闭
    marginSize: 0, //只对 resize 启用后有效，用于设置可拖动界限范围，如果为负数则允许拖动超出屏幕边界
    dblclickZoom: true, //只对 type=modal 有效，是否允许通过双击头部放大或还原窗口
    showTitleOverflow: true, //设置标题内容过长时显示为省略号
    storage: false, //是否启用 localStorage 本地保存，会将窗口拖动的状态保存到本地（需要有 id）
  },
  list: {
    scrollY: {
      //纵向虚拟滚动配置
      gt: 100, //指定大于指定行时自动启动纵向虚拟滚动，如果为 0 则总是启用；如果需要关闭，可以设置 enabled 为 false
    },
  },
});

export function loadVxeTable(app: App) {
  app.use(VXETable);
}
