import "whatwg-fetch";

let fetchApi = function (postData, url, resolve, obj) {
    let options = {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(postData)
    };
    fetch(url, options)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            resolve({ res: data, param: obj });
        });
};

class API {
    static getp(param) {
        let url = "";
        let postdata = {};
        return new Promise(resolve => {
            switch (param.from) {
                case "home":
                    url = "www.baidu.com";
                    break;
                default: ;
            }
            fetchApi(postdata, url, resolve);
        });
    }
}
export default API;
