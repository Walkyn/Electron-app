import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
    const window = new BrowserWindow({
        width: 780,
        height: 520,
        webPreferences: {
            nodeIntegration: true
        }
    });
    //window.loadFile(path.join(__dirname, 'dist', 'index.html'));
    window.loadURL('http://localhost:5173/');
    window.setMenu(null);
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


