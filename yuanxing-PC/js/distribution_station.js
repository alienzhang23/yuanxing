$(document).ready(function () {
    $('.content-2>ul>li>a').hover(function (e) {
        $(e.currentTarget.children[1]).addClass('active-mask-hover').removeClass('text-overflow')
    }, function (e) {
        $(e.currentTarget.children[1]).removeClass('active-mask-hover').addClass('text-overflow')
    })
    $("#myPage").sPage({
        page:1,//当前页码，必填
        total:100,//数据总条数，必填
        pageSize:20,//每页显示多少条数据，默认10条
        totalTxt:"共{total}条",//数据总条数文字描述，{total}为占位符，默认"共{total}条"
        showTotal:true,//是否显示总条数，默认关闭：false
        showSkip:true,//是否显示跳页，默认关闭：false
        showPN:true,//是否显示上下翻页，默认开启：true
       prevPage:"上一页",//上翻页文字描述，默认“上一页”
        nextPage:"下一页",//下翻页文字描述，默认“下一页”
       backFun:function(page){
            //点击分页按钮回调函数，返回当前页码
            console.log(page);
        }
    })
})