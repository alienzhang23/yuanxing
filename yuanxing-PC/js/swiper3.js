$(function () {
	//鼠标移入显示左右箭头和关闭按钮
	var timer = '';
	$('.swiper3_container').mouseover(function () {
		
		clearInterval(timer);
	}).mouseleave(function () {
	
		timer = setInterval(btn_right, 4000);
	});
	
	
	var arr = [];
	var index = 0;
	var disabled=false
	for(let i of $('.q')){
		arr.push(i.getAttribute('name'))
	}
	//上一张
	$('.swiper3_container .btn_left').on('click', function () {
		console.log(111)
		if(!disabled){
			btn_left();
		}
		
	});
	
	//下一张
	$('.swiper3_container .btn_right').on('click', function () {
		console.log(222)
		if(!disabled){
			btn_right();
		}
		
	});
	
	//图片自动轮播
	timer = setInterval(btn_right, 4000);
	
	$('.swiper3_container .q1').on('webkitTransitionEnd',function(){
		this.disabled=false
	})

	//点击上一张的封装函数
	function btn_left() {
		this.disabled=true
		arr.unshift(arr[arr.length-1]);
		arr.pop();
		$('.swiper3_container li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index--;
		if (index < 0) {
			index = arr.length-1;
		}
		show();
	}
	
	//点击下一张的封装函数
	function btn_right() {
		this.disabled=true
		arr.push(arr[0]);
		arr.shift();
		$('.swiper3_container li').each(function (i, e) {
			$(e).removeClass().addClass(arr[i]);
		})
		index++;
		if (index > arr.length-1) {
			index = 0;
		}
		show();
	}
	
	//点击底部的按钮切换图片
	$('.swiper3_container .buttons a').each(function () {
		$(this).on('click', function () {
			var myindex = $(this).index();
			var mindex = myindex - index;
			if (mindex == 0) {
				return;
			}
			else if (mindex > 0) {
				var newarr = arr.splice(0, mindex);
				//$.merge() 函数用于合并两个数组内容到第一个数组
				arr = $.merge(arr, newarr);
				$('.swiper3_container li').each(function (i, e) {
					$(e).removeClass().addClass(arr[i]);
				})
				index = myindex;
				show();
			}
			else if (mindex < 0) {
				//reverse() 方法用于颠倒数组中元素的顺序。
				arr.reverse();
				var oldarr = arr.splice(0, -mindex);
				arr = $.merge(arr, oldarr);
				arr.reverse();
				$('.swiper3_container li').each(function (i, e) {
					$(e).removeClass().addClass(arr[i]);
				})
				index = myindex;
				show();
			}
		})
	})
	
	//底部按钮高亮
	function show() {
		$('.swiper3_container .buttons a').eq(index).addClass('color').siblings().removeClass('color');
	}
})