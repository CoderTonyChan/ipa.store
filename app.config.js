// app.config.js
// 应用列表
const appList = [
    {
        title: "轻松签",
        version: "5.0.2",
        bundleId: "xyz.yyyue.esign.net",
        ipaDownloadUrl: "https://github.com/CoderTonyChan/ipa.store/releases/download/ipa.store/2609_5.0.2_xyz.yyyue.esign.net_signed.ipa"
    },
    {
        title: "Puffies",
        version: "1.21",
        bundleId: "com.lykkestudios.puffies",
        ipaDownloadUrl: "https://github.com/CoderTonyChan/ipa.store/releases/download/ipa.store/puffies._1.21_com.lykkestudios.puffies_signed.ipa"
    },
    {
        title: "太鼓达人",
        version: "1.32.0",
        bundleId: "jp.co.bandainamcoent.BNEI0361",
        ipaDownloadUrl: "https://github.com/CoderTonyChan/ipa.store/releases/download/ipa.store/taigu_1.32.0_jp.co.bandainamcoent.BNEI0361_rm.iPASTORE._signed.ipa"
    }
];

// 网点配置，前端下拉 + plist生成共用
const nodeList = [
    {
        key: "orig",
        label: "原版GitHub（国外直连，国内较慢）",
        prefix: ""
    },
    {
        key: "ghproxy-net",
        label: "GHProxy.net 加速节点",
        prefix: "https://ghproxy.net/"
    },
    {
        key: "ghproxy-com",
        label: "GHProxy.com 备用节点",
        prefix: "https://ghproxy.com/"
    }
];

// NodeJS导出
if (typeof module !== 'undefined') {
    module.exports = { appList, nodeList };
}
