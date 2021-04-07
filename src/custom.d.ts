/*
 * @Author: mrzou
 * @Date: 2021-04-06 17:51:07
 * @LastEditors: mrzou
 * @LastEditTime: 2021-04-06 17:54:17
 * @Description: file content
 */
//  *.d.ts
//  只包含类型声明，不包含逻辑
//  不会编绎，也不会被 webpapck 打包

declare module "*.css" {
    const css: {[key: string]: string}
    export default css
}