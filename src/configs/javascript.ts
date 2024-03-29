import { pluginGruopImport } from '../plugins'

export default [
  {
    plugins: {
      groupImport: pluginGruopImport
    },
    rules: {
    // 没引入清空
      'unused-imports/no-unused-imports': 2,

      // arrow function omit bracket
      'arrow-parens': ['error', 'as-needed'],

      // import
      'import/order': 0,
      'import/first': 0,
      'import/no-mutable-exports': 0,
      'import/no-unresolved': 0,
      'import/no-absolute-path': 0,
      'sort-imports': [
        2,
        {
          ignoreDeclarationSort: true
        }
      ],
      'groupImport/imports': 2,

      // 关闭不允许多余的return
      'no-useless-return': 0,

      // 不允许多个空行
      'no-multiple-empty-lines': [2, { max: 1 }],

      // 括号前后 >= 3个换行
      'array-bracket-newline': [
        2,
        {
          multiline: true
        }
      ],

      // 括号内的元素 >= 3个换行
      'array-element-newline': [2, 'consistent'],

      // 方法链 >= 3个换行
      'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],

      // import 解构 大于等于6个换行
      'object-curly-newline': [
        2,
        {
          ObjectExpression: {
            multiline: true,
            consistent: true
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 6
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 3
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 6
          }
        }
      ],

      // 花括号属性强制换行
      'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }],

      // 禁用不必要的标签
      'no-extra-label': 2,

      // 去除禁止使用 console
      'no-console': 0,

      // 控制 if 语句
      'curly': 0,

      'brace-style': 0,

      // 禁止浮点小数
      'no-floating-decimal': 2,

      // switch 的冒号左右有空格
      'switch-colon-spacing': 2,

      // 简化赋值操作
      'operator-assignment': [2, 'always'],

      // 对象字面量中方法和属性使用简写语法
      'object-shorthand': [2, 'always', { avoidQuotes: false }],

      // 使用字符串模板连接
      'prefer-template': 2,

      // 缩进
      'indent': [2, 2],

      // yield* 周围空格
      'yield-star-spacing': [2, 'before'],

      // 箭头函数体后面不能换行
      'implicit-arrow-linebreak': [2, 'beside'],

      // 函数调用模板字符串后面不能有空格
      'template-tag-spacing': [2, 'never'],

      // 回调使用箭头函数
      'prefer-arrow-callback': [2, { allowNamedFunctions: false }],

      // 函数括号内参数有一个换行就换行
      'function-paren-newline': [2, 'multiline'],
      'space-before-function-paren': [
        2,
        {
          named: 'never'
        }
      ]
    }
  }
]
