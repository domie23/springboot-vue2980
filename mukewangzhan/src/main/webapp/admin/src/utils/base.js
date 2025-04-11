const base = {
    get() {
        return {
            url : "http://localhost:8080/mukewangzhan/",
            name: "mukewangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/mukewangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "慕课网"
        } 
    }
}
export default base
