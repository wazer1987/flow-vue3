/**
 * Created by OXOYO on 2019/5/18.
 *
 * 系统相关配置
 */
//  const { version, name, author, description } = import.meta.globEager('../../package')
const modulesFiles = import.meta.globEager('../../package.json');
let modules = [];
for (const path in modulesFiles) {
  modules = [].concat(modules, modulesFiles[path].default);
}
const [{version, name, author, description}] = modules
 export default {
   version,
   name,
   author,
   description,
   title: 'XFC',
   logo: '../assets/images/logo.png',
   github: 'https://github.com/OXOYO/X-Flowchart-Vue',
   site: 'http://oxoyo.co/X-Flowchart-Vue/',
   feedback: 'https://github.com/OXOYO/X-Flowchart-Vue/issues/new',
   copyright: '©2019 - 2020 OXOYO All Rights Reserved.'
 }
