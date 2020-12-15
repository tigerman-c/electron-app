const { app, BrowserWindow } = require('electron')

const dialog = require('electron').dialog;


function createWindow () {   
  // 创建浏览器窗口

  
// const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })

  // 并且为你的应用加载index.html

  
// win.loadFile('src/index.html')
// win.loadURL('https://www.google.com')

  // 打开开发者工具

  
// win.webContents.openDevTools()

    // dialog.showMessageBox(win,{
    //     type: 'none',
    //     title: 'mesBox',
    //     message: 'message',
    //     detail: 'detail'
    // },()=>{
    //     console.log('mesBox')
    // })

    // 打开文件夹
    console.log('ssss')
    // dialog.showOpenDialog(win,{ properties: ['openFile', 'multiSelections'] },(filenames)=>{
    //     console.log(filenames)
    //     app.quit()
    // })

    // 使用上面的异步没有执行回调 使用同步的能获取返回的路径
    let res = dialog.showOpenDialogSync({ properties: ['openFile', 'openDirectory','multiSelections'] })
    console.log(res)
    app.quit()
}

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法

// 部分 API 在 ready 事件触发后才能使用。

app.whenReady().then(createWindow)

// 关闭所有窗口时退出，但macOS除外。
 
// There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在 macOS 上，当点击了
  // 基座图标且没有其他窗口打开时，通常在应用程序中重新创建一个窗口。

  
if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 您可以把应用程序其他的流程写在在此文件中
// 代码