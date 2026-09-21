// generate-plist.js
const fs = require('fs');
const path = require('path');
const { appList, nodeList } = require('./app.config');

// plist xml模板
function buildPlistContent(ipaFullUrl, bundleId, title, version) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>items</key>
    <array>
        <dict>
            <key>assets</key>
            <array>
                <dict>
                    <key>kind</key>
                    <string>software-package</string>
                    <key>url</key>
                    <string>${ipaFullUrl}</string>
                </dict>
            </array>
            <key>metadata</key>
            <dict>
                <key>bundle-identifier</key>
                <string>${bundleId}</string>
                <key>bundle-version</key>
                <string>${version}</string>
                <key>kind</key>
                <string>software</string>
                <key>title</key>
                <string>${title}</string>
            </dict>
        </dict>
    </array>
</dict>
</plist>`;
}

// 直接输出到项目根目录
const outDir = __dirname;

// 批量生成plist
appList.forEach(app => {
    nodeList.forEach(node => {
        const finalIpaUrl = node.prefix ? node.prefix + app.ipaDownloadUrl : app.ipaDownloadUrl;
        const fileName = `${app.bundleId}-${app.version}-${node.key}.plist`;
        const filePath = path.join(outDir, fileName);
        const content = buildPlistContent(finalIpaUrl, app.bundleId, app.title, app.version);
        fs.writeFileSync(filePath, content, "utf8");
        console.log(`✅ 生成: ${fileName}`);
    })
});

console.log("\n🎉 全部plist生成完成！输出到项目根目录");
