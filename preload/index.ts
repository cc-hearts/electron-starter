import { contextBridge, ipcRenderer } from 'electron';

const ipcMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(ipcRenderer))
.filter((method: string) => typeof (ipcRenderer as any)[method] === 'function');

const exposedIpc: Record<string, (...args: any[]) => any> = {};

// 绑定所有 ipcRenderer 方法
ipcMethods.forEach((method: string) => {
exposedIpc[method] = (...args: any[]) => (ipcRenderer as any)[method](...args);
});

// 通过 contextBridge 进行注入，确保安全性
contextBridge.exposeInMainWorld('electron', {
   ipcRenderer: exposedIpc
});
