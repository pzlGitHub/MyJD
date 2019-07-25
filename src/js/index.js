// 1.引入插件 img轮播图的插件  
// 应用轮播图插件
$('#swiper').sliderImg({
    image: ['./image/pic1.jpg', './image/pic2.jpg', './image/pic3.jpg'],
    interVal: 2000
});

// 左侧menu鼠标覆盖后把 展示区和展示内容 显示
var index;
$('.cate_menu_item').hover(function () {
    $('.cate_pop').css('display', 'block');
    index = $(this).attr('data-index');
    // console.log(index);
    $('#cate_item' + index).css('display', 'block');
    // console.log('#cate_item'+index);
}, function () {
    // 右侧展示区域消失条件
    $('.cate_pop').css('display', 'none');
    // 每一个li对应得展示内容
    $('#cate_item' + index).css('display', 'none');
});
// 鼠标覆盖展示区时依然显示展示区和展示内容
$('.JS_popCtn').on('mouseover', function () {
    $(this).css('display', 'block');
    $('#cate_item' + index).css('display', 'block');
}).on('mouseout', function () {
    // 右侧展示区域消失条件
    $('.cate_pop').css('display', 'none');
    // 每一个li对应的展示内容 
    $('#cate_item' + index).css('display', 'none');
});

// 右下侧的鼠标覆盖滑动展示
$('.services_entry .row1').hover(function () {
    // 卷出
    $('.services_entry').slideUp();
    // 卷入
    $('.services_content').slideDown();
    $('.services_content .content').css('display', 'none');
    $('.' + this.id + '_content').show();
    // 把nowActive删除，再添加nowActive  
    $('.nowActive').removeClass('nowActive');
    $('.' + this.id + '_tab').addClass('nowActive');
    // 展示x
    $('.services_content .close').show();
});
// 鼠标覆盖上 展示相对应的内容
$('.services_content .header span').hover(function () {
    $('.nowActive').removeClass('nowActive');
    $(this).addClass('nowActive');
    // 先全部隐藏后，通过class名确定要展示的内容，展示当前选择的内容
    $('.services_content .content').hide();
    $('.' + $(this).attr('data') + '_content').show();
});
// 点击x进行还原
$('.services_content .close').on('click', function (e) {
    // x隐藏
    $(this).hide();
    // 卷出
    $('.services_content').slideUp();
    // 卷入
    $('.services_entry').slideDown();
    // 隐藏内容
    $('.services_content .content').css('display', 'none');
});

// 使用插件完成 展示地址
$('#location').areaList({
    items: [{
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '河北',
        href: '#'
    }],
    // 单行展示数量
    rowNum: 5,
    // 默认展示地址
    nowItem: '北京',
    // 图片地址 图标
    nowItemImg: './image/local.jpg'
});

// 导航条插件
$('#myJd').dropList({
    // 线 以y轴为基准设置
    dirction: 'y',
    // 
    colNum: 2,
    menuList: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }]
    }]
});
$('#navWeb').dropList({
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'x',
    colNum: 2,
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        title: '特色',
        // 每块的宽度
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
        // 每块每行的选项列数
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }]
});

// input输入框部分调用插件 
$('#search .cj-input-content').inputSearch({
    // 地址、请求方式、回调、数据处理函数、jsonp格式、按钮背景颜色、编码
    url: 'https://suggest.taobao.com/sug',
    type: 'GET',
    key: 'callback',
    // jsonpCallback
    sucFn: 'window.addItem',
    dataType: 'jsonp',
    dataName:'q',
    btnColor: 'red',
    others:'code=utf-8'
});

// 如果使用addItem函数进行处理返回的数据，会时不时出现函数不执行的情况，把addItem挂到window上就能防止出现问题
// 传参的时候需要传window.addItem
window.addItem = function(data){
    var list = data.result;
    var str = '';
    list.forEach(function (ele, index) {
        str += '<a href="">' + ele[0] + '</a>';
    });
    $('.header-right .list').show();
    $('.header-right .list').html(str);
}

// function addItem(data) {
//     var list = data.result;
//     var str = '';
//     list.forEach(function (ele, index) {
//         str += '<a href="">' + ele[0] + '</a>';
//     });
//     $('.header-right .list').show();
//     $('.header-right .list').html(str);
// }


// https://suggest.taobao.com/sug?_tb_token_=eebee31b58bb3&__ajax__=1&pid=mm_14626936_8346309_133778679&unid=&clk1=&code=utf-8&q=  &callback=
// input搜索区
// function addItem(data) {
//     console.log(data);
// }

$('.cj-input').on('input', function () {
    var val = $(this).val();
    $.ajax({
        type: 'GET',
        url: 'https://suggest.taobao.com/sug',
        data: {q: val,code: 'utf-8', callback: 'addItem'},
        dataType: 'jsonp',
    });
});






