const fs = require('fs');
const path = require('path');

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const musicDirPath = path.join(__dirname, 'music');

let fileList = [];

// 递归遍历目录函数
function readFiles(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      readFiles(filePath); // 如果是目录，则递归调用
    } else {
      // 生成文件信息，并添加到fileList中
      fileList.push({
        url: `https://www.ndzy01.com/music03/${path.relative(__dirname, filePath)}`,
        name: path.basename(filePath, path.extname(filePath)),
        id: generateUUID(),
      });
    }
  });
}

// 使用递归函数读取所有文件
readFiles(musicDirPath);

console.log('------ndzy------', '一共有:', fileList.length, '个音频文件', '------ndzy------');

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(fileList, null, 2));
