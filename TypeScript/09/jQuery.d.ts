
/**
 * ts 会解析项目中所有的 .ts 文件，包括 .d.ts 文件。
 * 将 jQuery.d.ts 文件放在项目中，其他 .ts 文件就可以获得 jQuery 的类型定义
 */
declare var jQuery: (selector: string) => any


/**
 * 也可以应用第三方声明文件
 * 推荐的是使用 @types 统一管理第三方库的声明文件。
 * 例如通过 npm install @types/jquery --save-dev
 */
