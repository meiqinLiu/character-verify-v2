import CharacterVerify from './CharacterVerify/index.vue'

const install = function (app: any): void {
  app.component(CharacterVerify.name, CharacterVerify)
}

export {install}

// 默认导出 install
export default {
  install,
}
