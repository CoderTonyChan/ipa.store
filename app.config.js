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
    },
    {
        title: "洛克人X",
        version: "1.06.00",
        bundleId: "jp.co.cpcom.rockmanxcn",
        ipaDownloadUrl: "https://github.com/CoderTonyChan/ipa.store/releases/download/ipa.store/luokerenX_1.06.00_jp.co.cpcom.rockmanxcn_rm.libLoohaInjectionDylib._signed.ipa"
    },
    {
        title: "洛克人X离线版",
        version: "1.06.00",
        bundleId: "X",
        ipaDownloadUrl: "https://dl-c-zb.pds.quark.cn/xgtjKqpO/6441212341/8483e70b10e04579a813ae60593a6cf46aaceb5a/6aaceb5a1c39289b61a743c4a9e32185ffa5a6e8?Expires=1790201618&OSSAccessKeyId=LTAI5tJJpWQEfrcKHnd1LqsZ&Signature=vq8kj%2BL1bYK%2BWGma%2FGiPn9s3mW4%3D&x-oss-traffic-limit=503316480&response-content-disposition=attachment%3B%20filename%3D%25E6%25B4%259B%25E5%2585%258B%25E4%25BA%25BAX%25E7%25A6%25BB%25E7%25BA%25BF%25E7%2589%2588_1.0.1_jp.co.capcom.rxdoff_signed.ipa%3Bfilename%2A%3Dutf-8%27%27%25E6%25B4%259B%25E5%2585%258B%25E4%25BA%25BAX%25E7%25A6%25BB%25E7%25BA%25BF%25E7%2589%2588_1.0.1_jp.co.capcom.rxdoff_signed.ipa&callback-var=eyJ4OmF1IjoiMTc5MDIwMTYxOC0yNjM4MzgxLTUyNzYwLTRjMGQiLCJ4Om9yayI6InUxMzJnT3lEUTExNjJGMjU5NTFtWjFNWDRPZmJQazZSbmROSjd5cGVTIiwieDp1ZCI6IjEyLTQtNi0wLTYtTi00LU4tMS0yNC0yLU4tTi1OLU4iLCJ4OnNwIjoiMTAwIiwieDp0b2tlbiI6IjQtYWYyODMxMDVhYWNiODc2Y2RlN2NmYjAwYjI2MmE2MmItNC0xLTEwMjQwLTFhNTQ1NDc1ZDlhNzQ4MjY4N2M3OTY3OWMxYzVhNWIyLTAtNTEyMC0wLTAtMTA1YjNmNDBkNTFiODVmMmUzMWQyZjNmYWQ3MGQ1OTMiLCJ4OnR0bCI6IjUyNzYwIn0%3D&abt=4_0_&dfi=186&callback=eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsImNhbGxiYWNrU3RhZ2UiOiJiZWZvcmUtZXhlY3V0ZSIsImNhbGxiYWNrRmFpbHVyZUFjdGlvbiI6Imlnbm9yZSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9hdXRoLWNkbi51Yy5jbi9vdXRlci9vc3MvY2hlY2twbGF5IiwiY2FsbGJhY2tCb2R5Ijoie1wiaG9zdFwiOiR7aHR0cEhlYWRlci5ob3N0fSxcInNpemVcIjoke3NpemV9LFwicmFuZ2VcIjoke2h0dHBIZWFkZXIucmFuZ2V9LFwicmVmZXJlclwiOiR7aHR0cEhlYWRlci5yZWZlcmVyfSxcImNvb2tpZVwiOiR7aHR0cEhlYWRlci5jb29raWV9LFwibWV0aG9kXCI6JHtodHRwSGVhZGVyLm1ldGhvZH0sXCJ1bHJwXCI6JHtodHRwSGVhZGVyLngtdWxycH0sXCJpcFwiOiR7Y2xpZW50SXB9LFwicG9ydFwiOiR7Y2xpZW50UG9ydH0sXCJvcmtcIjoke3g6b3JrfSxcIm9iamVjdFwiOiR7b2JqZWN0fSxcInNwXCI6JHt4OnNwfSxcInVkXCI6JHt4OnVkfSxcInRva2VuXCI6JHt4OnRva2VufSxcImF1XCI6JHt4OmF1fSxcInR0bFwiOiR7eDp0dGx9LFwiZHRfc3BcIjoke3g6ZHRfc3B9LFwiaHNwXCI6JHt4OmhzcH0sXCJjbGllbnRfdG9rZW5cIjoke3F1ZXJ5U3RyaW5nLmNsaWVudF90b2tlbn19In0%3D&ud=12-4-6-0-6-N-4-N-1-24-2-N-N-N-N&filename=%E6%B4%9B%E5%85%8B%E4%BA%BAX%E7%A6%BB%E7%BA%BF%E7%89%88_1.0.1_jp.co.capcom.rxdoff_signed.ipa"
    },
    {
        title: "轻松签",
        version: "5.0.1",
        bundleId: "xyz.yyyue.esign.net",
        ipaDownloadUrl: "https://dl-c-sz.pds.quark.cn/NTmQEdxW/8745112341/5d758c03a7484b8d8932e3c1cbbb8f026a8d5e26/6a8d5e26a5a9fe819df54dad82a53f22da40bbec?Expires=1790174568&OSSAccessKeyId=LTAI5tJJpWQEfrcKHnd1LqsZ&Signature=OvffSGcIlniSYhWvnm7kfaKVTJU%3D&x-oss-traffic-limit=503316480&response-content-disposition=attachment%3B%20filename%3D%25E8%25BD%25BB%25E6%259D%25BE%25E7%25AD%25BE%2540xyz.yyyue.esign.net.ipa%3Bfilename%2A%3Dutf-8%27%27%25E8%25BD%25BB%25E6%259D%25BE%25E7%25AD%25BE%2540xyz.yyyue.esign.net.ipa&callback-var=eyJ4OmF1IjoiMTc5MDE3NDU2OC03OTExLTIxNjAwLTIzNmMiLCJ4Om9yayI6IlozMjlsbHB0ZDk0MWl1YTY3NDFUM29lMTlHUjFLckYwa2I4ZUxGN2FPIiwieDp1ZCI6IjEyLTQtNi0wLTYtTi00LU4tMS0yNC0yLU4tTi1OLU4iLCJ4OnNwIjoiMTAwIiwieDp0b2tlbiI6IjQtYWYyODMxMDVhYWNiODc2Y2RlN2NmYjAwYjI2MmE2MmItNC0xLTEwMjQwLTM5MzBmMGE0MmYxYTRhZDZhOGYyZGE2YmRjYTQ3ODBlLTAtNTEyMC0wLTAtNWY3MDBkNWJiNzI4NTRmMzMzYzVlZmE3ZDk2YjQ2OWQiLCJ4OnR0bCI6IjIxNjAwIn0%3D&abt=4_0_&dfi=161&callback=eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsImNhbGxiYWNrU3RhZ2UiOiJiZWZvcmUtZXhlY3V0ZSIsImNhbGxiYWNrRmFpbHVyZUFjdGlvbiI6Imlnbm9yZSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9jbG91ZC1hdXRoLmRyaXZlLnF1YXJrLmNuL291dGVyL29zcy9jaGVja3BsYXkiLCJjYWxsYmFja0JvZHkiOiJ7XCJob3N0XCI6JHtodHRwSGVhZGVyLmhvc3R9LFwic2l6ZVwiOiR7c2l6ZX0sXCJyYW5nZVwiOiR7aHR0cEhlYWRlci5yYW5nZX0sXCJyZWZlcmVyXCI6JHtodHRwSGVhZGVyLnJlZmVyZXJ9LFwiY29va2llXCI6JHtodHRwSGVhZGVyLmNvb2tpZX0sXCJtZXRob2RcIjoke2h0dHBIZWFkZXIubWV0aG9kfSxcInVscnBcIjoke2h0dHBIZWFkZXIueC11bHJwfSxcImlwXCI6JHtjbGllbnRJcH0sXCJwb3J0XCI6JHtjbGllbnRQb3J0fSxcIm9ya1wiOiR7eDpvcmt9LFwib2JqZWN0XCI6JHtvYmplY3R9LFwic3BcIjoke3g6c3B9LFwidWRcIjoke3g6dWR9LFwidG9rZW5cIjoke3g6dG9rZW59LFwiYXVcIjoke3g6YXV9LFwidHRsXCI6JHt4OnR0bH0sXCJkdF9zcFwiOiR7eDpkdF9zcH0sXCJoc3BcIjoke3g6aHNwfSxcImNsaWVudF90b2tlblwiOiR7cXVlcnlTdHJpbmcuY2xpZW50X3Rva2VufX0ifQ%3D%3D&ud=12-4-6-0-6-N-4-N-1-24-2-N-N-N-N&filename=%E8%BD%BB%E6%9D%BE%E7%AD%BE%40xyz.yyyue.esign.net.ipa"
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
