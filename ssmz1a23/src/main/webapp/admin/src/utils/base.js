const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmz1a23/",
            name: "ssmz1a23",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmz1a23/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "基于微信小程序的网上商城的系统设计与实现"
        } 
    }
}
export default base
