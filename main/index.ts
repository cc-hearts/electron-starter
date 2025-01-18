import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  const mainBrowerWindow = new BrowserWindow({
    show: true,
  });

  console.log(mainBrowerWindow.loadURL(process.argv[2]));
});
