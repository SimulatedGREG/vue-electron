import Vue from 'vue'

import { 
  Clipboard, 
  CrashReporter, 
  DesktopCapturer, 
  IpcRenderer, 
  NativeImage, 
  Remote, 
  Shell, 
  WebFrame } from 'electron'

declare module 'vue/types/vue' {
  interface Vue {
    $electron: {
      clipboard: Clipboard
      crashReporter: CrashReporter
      desktopCapturer: DesktopCapturer
      ipcRenderer: IpcRenderer
      nativeImage: NativeImage
      remote: Remote
      shell: Shell
      webFrame: WebFrame
    }
  }
}
