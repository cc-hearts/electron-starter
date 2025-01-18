import { app, BrowserWindow } from "electron";
import { __IS_DEV__ } from "./config";

app
  .whenReady()
  .then(() => {
    const mainBrowerWindow = new BrowserWindow({
      show: true,
    });

    if (__IS_DEV__) {
      mainBrowerWindow.loadURL(process.argv[2]);
    }
  })
  .catch((error) => {
    console.log(error);
  });
