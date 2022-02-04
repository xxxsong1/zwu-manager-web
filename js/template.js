$(document).ready(function sayHi() {
    var myDate = new Date();
    var weekday = myDate.getDay();
    var hour = myDate.getHours();
    var morn = html("<span class=\"welcome\">上午好登录用户</span>&nbsp; &nbsp;<span class=\"notice\">吃顿丰富的早餐，为身体加油</span>");
    var noon = html("<span class=\"welcome\">下午好登录用户</span>&nbsp; &nbsp;<span class=\"notice\">吃顿丰富的午餐，为身体加油</span>");
    var even = html("<span class=\"welcome\">晚上好登录用户</span>&nbsp; &nbsp;<span class=\"notice\">吃顿丰富的晚餐，为身体加油</span>");
    if(weekday >=1&&weekday<=5){
        if(hour>=8&&hour<=11){
            $(".banner").addClass("morn");
        }
        else if(hour>=12&&hour<=17){
            $(".banner").addClass("noon");
        }
        else if(hour>=23||hour<=7){
            $(".banner").addClass("even");
        }
    }
})
