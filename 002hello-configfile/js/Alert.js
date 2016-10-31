/**
 * Created by Administrator on 2016/10/31.
 */

require("../css/alert.css")
module.exports = {
    show: function (msg) {
        var title = document.createElement("h2");
        title.innerText = "hello"
        document.body.appendChild(title)
    }
}