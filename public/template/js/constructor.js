// Блоки выбора цвета
var model;
						var fon = '<div class="row"><span class="h4 col-sm-12">Выберите цвет</span></div>'+
						'<span class="blockColor">'+
						'<span class="selectedColor" data-style="fil0" title="Основной цвет"></span>'+
						'<div class="colors">'+
						'<span class="color1"></span>'+
						'<span class="color2"></span>'+
						'<span class="color3"></span>'+
						'<span class="color4"></span>'+
						'<span class="color5"></span>'+
						'<span class="color6"></span>'+
						'<span class="color7"></span>'+
						'<span class="color8"></span>'+
						'<span class="color9"></span>'+
						'<span class="color10"></span>'+
						'<span class="color11"></span>'+
						'<span class="color12"></span>'+
						'<span class="color13"></span>'+
						'<span class="color14"></span>'+
						'<span class="color15"></span>'+
						'<span class="color16"></span>'+
						'<span class="color17"></span>'+
						'<span class="color18"></span>'+
						'<span class="color19"></span>'+
						'<span class="color20"></span>'+
						'<span class="color21"></span></div>'+
						'<span class="">Основной цвет</span></span>';

						var color1 = '<span class="blockColor">'+
						//'<b>цвет 2</b>'+
						'<span class="selectedColor" data-style="color1" title="Первый цвет"></span>'+
						'<div class="colors"><span class="color1"></span>'+
						'<span class="color2"></span>'+
						'<span class="color3"></span>'+
						'<span class="color4"></span>'+
						'<span class="color5"></span>'+
						'<span class="color6"></span>'+
						'<span class="color7"></span>'+
						'<span class="color8"></span>'+
						'<span class="color9"></span>'+
						'<span class="color10"></span>'+
						'<span class="color11"></span>'+
						'<span class="color12"></span>'+
						'<span class="color13"></span>'+
						'<span class="color14"></span>'+
						'<span class="color15"></span>'+
						'<span class="color16"></span>'+
						'<span class="color17"></span>'+
						'<span class="color18"></span>'+
						'<span class="color19"></span>'+
						'<span class="color20"></span>'+
						'<span class="color21"></span></div>'+
						'<span class="">Цвет деталей 1</span></span>';

						var color2 = '<span class="blockColor">'+
						'<span class="selectedColor" data-style="color2" title="Второй цвет"></span>'+
						'<div class="colors"><span class="color1"></span>'+
						'<span class="color2"></span>'+
						'<span class="color3"></span>'+
						'<span class="color4"></span>'+
						'<span class="color5"></span>'+
						'<span class="color6"></span>'+
						'<span class="color7"></span>'+
						'<span class="color8"></span>'+
						'<span class="color9"></span>'+
						'<span class="color10"></span>'+
						'<span class="color11"></span>'+
						'<span class="color12"></span>'+
						'<span class="color13"></span>'+
						'<span class="color14"></span>'+
						'<span class="color15"></span>'+
						'<span class="color16"></span>'+
						'<span class="color17"></span>'+
						'<span class="color18"></span>'+
						'<span class="color19"></span>'+
						'<span class="color20"></span>'+
						'<span class="color21"></span></div>'+
						'<span class="">Цвет деталей 2</span></span>';

						var color3 = '<span class="blockColor">'+
						'<span class="selectedColor" data-style="fil3" title="Третий цвет"></span>'+
						'<div class="colors"><span class="color1"></span>'+
						'<span class="color2"></span>'+
						'<span class="color3"></span>'+
						'<span class="color4"></span>'+
						'<span class="color5"></span>'+
						'<span class="color6"></span>'+
						'<span class="color7"></span>'+
						'<span class="color8"></span>'+
						'<span class="color9"></span>'+
						'<span class="color10"></span>'+
						'<span class="color11"></span>'+
						'<span class="color12"></span>'+
						'<span class="color13"></span>'+
						'<span class="color14"></span>'+
						'<span class="color15"></span>'+
						'<span class="color16"></span>'+
						'<span class="color17"></span>'+
						'<span class="color18"></span>'+
						'<span class="color19"></span>'+
						'<span class="color20"></span>'+
						'<span class="color21"></span></div>'+
						'<span class="">Цвет деталей 3</span></span>';

						var gaiter = '<span class="blockColor">'+
						'<span class="selectedColor" data-style="fil0" title="Цвет гетр"></span>'+
						'<div class="colors"><span class="color1"></span>'+
						'<span class="color2"></span>'+
						'<span class="color3"></span>'+
						'<span class="color4"></span>'+
						'<span class="color6"></span>'+
						'<span class="color7"></span>'+
						'<span class="color11"></span>'+
						'<span class="color13"></span></div>'+
						'<span class="">Цвет гетр</span></span>';

						var colorLine = '<span class="blockColor">'+
						'<span class="selectedColor" data-style="colorLine" title="Рукава и шея"></span>'+
						'<div class="colors"><span class="color1"></span>'+
						'<span class="color2"></span>'+
						'<span class="color3"></span>'+
						'<span class="color4"></span>'+
						'<span class="color5"></span>'+
						'<span class="color6"></span>'+
						'<span class="color7"></span>'+
						'<span class="color8"></span>'+
						'<span class="color9"></span>'+
						'<span class="color10"></span>'+
						'<span class="color11"></span>'+
						'<span class="color12"></span>'+
						'<span class="color13"></span>'+
						'<span class="color14"></span>'+
						'<span class="color15"></span>'+
						'<span class="color16"></span>'+
						'<span class="color17"></span>'+
						'<span class="color18"></span>'+
						'<span class="color19"></span>'+
						'<span class="color20"></span>'+
						'<span class="color21"></span></div>'+
						'<span class="">Рукава и воротник</span></span>';


function drawcolors(){
	var prevSVG = null;
	var its = $('.tab-pane.active .item.active .item-name');
  var model = its.data('name');
	var id = its.data('id');
	// shirt_price = its.data('price');
	// shirt_price2 = its.data('price2');
	// short_price = its.data('price');
	// short_price2 = its.data('price2');
	// gaiter_price = its.data('price');
	// gaiter_price2 = its.data('price2');

	switch(model){
  case 'aris': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'basic': insertShirt = fon + colorLine; break;
	case 'blackcube': insertShirt = fon + color1 + colorLine; break;
	case 'bumblebee': insertShirt = fon + color1 + colorLine; break;
	case 'camo': insertShirt = fon + color1 + color2 + color3 + colorLine; break;
	case 'chess2': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'chess': insertShirt = fon + color1; break;
	case 'chevron': insertShirt = fon + color1 + colorLine; break;
	case 'cornerPlus': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'corner': insertShirt = fon + color1 + colorLine; break;
	case 'creative': insertShirt = fon + color1 + colorLine; break;
	case 'cro': insertShirt = fon + color1 + colorLine; break;
	case 'cross': insertShirt = fon + color1 + colorLine; break;
	case 'curve': insertShirt = fon + color1; break;
	case 'diagonalDuo': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'diagonal': insertShirt = fon + color1 + colorLine; break;
	case 'double corner': insertShirt = fon + color1 + colorLine; break;
	case 'empire': insertShirt = fon + color1 + colorLine; break;
	case 'energy': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'flow': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'force': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'freestyle': insertShirt = fon + color1 + colorLine; break;
	case 'gradient': insertShirt = fon + color1 + colorLine; break;
	case 'graphique': insertShirt = fon + color1 + colorLine; break
	case 'hornet': insertShirt = fon + color1 + colorLine; break;
	case 'line': insertShirt = fon + color1 + colorLine; break;
	case 'linearity': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'lombia': insertShirt = fon + color1 + colorLine; break;
	case 'longspirit': insertShirt = fon + color1 + colorLine; break;
	case 'lotus': insertShirt = fon + color1 + colorLine; break;
	case 'menfi': insertShirt = fon + color1 + colorLine; break;
	case 'martin': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'olympic': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'patriot': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'pioneer': insertShirt = fon + color1 + colorLine; break;
	case 'pool': insertShirt = fon + color1 + colorLine; break;
	case 'protection': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'puzzle': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'ringo': insertShirt = fon + color1 + colorLine; break;
	case 'score': insertShirt = fon + color1 + colorLine; break;
	case 'slash': insertShirt = fon + color1 + colorLine; break;
	case 'snake': insertShirt = fon + color1 + colorLine; break;
	case 'spike': insertShirt = fon + color1 + colorLine; break;
	case 'spirit': insertShirt = fon + color1 + colorLine; break;
	case 'square': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'star': insertShirt = fon + color1 + colorLine; break;
	case 'strike': insertShirt = fon + color1 + colorLine; break;
	case 'stripe': insertShirt = fon + color1 + colorLine; break;
	case 'top': insertShirt = fon + color1 + colorLine; break;
	case 'trait': insertShirt = fon + color1 + colorLine; break;
	case 'tricolor': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'triumph': insertShirt = fon + color1 + color2 + colorLine; break;
	case 'united': insertShirt = fon + color1 + colorLine; break;
	case 'wild': insertShirt = fon + color1 + color2 + colorLine; break;

	case 'short1': insertShirt = fon; break;
	case 'short2': insertShirt = fon + color1; break;
	case 'short3': insertShirt = fon + color1; break;
	case 'short4': insertShirt = fon + color1 + color2; break;
	case 'short5': insertShirt = fon + color1; break;
	case 'short6': insertShirt = fon + color1; break;
	case 'short7': insertShirt = fon + color1; break;
	case 'short8': insertShirt = fon + color1 + color2; break;

	case 'getr1': insertShirt = gaiter; break;
	case 'getr2': insertShirt = fon + color1; break;
	case 'getr3': insertShirt = fon + color1; break;
	case 'getr4': insertShirt = fon + color1 + color2; break;
	default: break;
	}
	// variations
	its.siblings('.vars').find('.colors-block').html(insertShirt);
	var prevSVG = jQuery('.tab-pane.active .item.active .wrap .svg-img').html();

	jQuery('.tab-pane.active .vars .colors-block').find('.selectedColor[data-style="fil0"]').css('background',$(prevSVG).find('.fil0').css('fill'));
//
	jQuery('.tab-pane.active .vars .colors-block').find('.selectedColor[data-style="color1"]').css('background',$(prevSVG).find('.color1').css('fill'));
//
	jQuery('.tab-pane.active .vars .colors-block').find('.selectedColor[data-style="color2"]').css('background',$(prevSVG).find('.color2').css('fill'));
//
	jQuery('.tab-pane.active .vars .colors-block').find('.selectedColor[data-style="fil3"]').css('background',$(prevSVG).find('.color3').css('fill'));
//
	jQuery('.tab-pane.active .vars .colors-block').find('.selectedColor[data-style="colorLine"]').css('background',$(prevSVG).find('.colorLine').css('fill'));
	//
	console.log('рисуем цвета');
};

$(document).on('click','.selectedColor',function(){
	if ($(this).hasClass('open')){
		$(this).siblings('.colors').removeClass('open');
	}else {
		$(this).siblings('.colors').addClass('open');
	}
});

$(document).mouseup(function (e){
	var div = $(".selectedColor");
	if (!div.is(e.target) && div.has(e.target).length === 0) { div.removeClass('open'); }
});

$(document).on('click','.colors span',function(){
	var color = $(this).css('background-color');
	var style = $(this).parents('.blockColor').find('.selectedColor').data('style');
	$(this).parents('.blockColor')
	.find('.selectedColor')
	.css('background',color);
	$(this).parents('.colors').removeClass('open');

	if(style == 'fil0'){
		$(this).parents('.item-info').siblings('.wrap').find('.fil0, .bottomLine').css('fill',color);
	} else {
		$(this).parents('.item-info').siblings('.wrap').find('.' + style).css('fill',color);
	}
});


// Добавляем игрока

$(document).on('click','button.add', function(){
	var numb = $('.spisok > div').length + 1;
	if(numb <= 30){
		$('.spisok div:last-child').after('<div class="rowPlayer d-flex flex-column align-items-center"><span class="numb">Игрок #'+ numb + '</span> ' + $('.first').html()+'<span class="del">Удалить</span></div>');
		calc_price();
	} else {
		alert('Лимит количества');
	}
})

$(document).on('click','span.del', function(){
	$(this).parent().remove();
		var i = 2;
	$('.numb').each(function(){
		$(this).text(i);
		i++;
	});
	calc_price();
});

//Мобильный вид настроек
$( document ).ready(function() {
	var mob = $(".mobi-settings").css("display");
	var closebtn = '<a type="button" class="close" aria-label="Close" data-toggle="collapse" href="#mobivars" role="button" aria-expanded="false" aria-controls="mobivars"><span aria-hidden="true">&times;</span></a>'
	var closebtn2 = '<a type="button" class="close" aria-label="Close" data-toggle="collapse" href="#mobicont" role="button" aria-expanded="false" aria-controls="mobicont"><span aria-hidden="true">&times;</span></a>'
	$varsrow = $('#shirts-tab.tab-pane .item .vars.row').html();
	var mobimodal2 = '<div class="mobivars_menu collapse fade" id="mobivars">'+$varsrow+'</div>';
	$('.tab-pane .item .vars.row').prepend(closebtn);
	// $('.tab-pane .contact-card').prepend(closebtn2);
	if(mob == "block"){
		$('.tab-pane .item .vars.row').addClass("collapse fade").attr("id","mobivars");
		// console.log("мобильный");
		// $('.tab-pane .contact-card').addClass("collapse fade").attr("id","mobicont");
	}
});


// $('#carousel-shirt').bind('slide.bs.carousel', function (e) {
//     console.log('slide event!');
// 		mobivars()
// });


// Групируем картинки тамбов по 4

$(document).ready(function(){
	var mob = $(".mobi-settings").css("display");
	if(mob == "block"){
		$("#thumbcarousel .item.carousel-item.active").after("</div></div><div class='item carousel-item second'><div class='d-flex flex-row'>")
		$(".shirts-slider #thumbcarousel .item.carousel-item.active .thumb").slice( 4, 8 ).detach().appendTo("#thumbcarousel .item.carousel-item.second .d-flex.flex-row");
		$("#thumbcarousel .item.carousel-item.second").after("</div></div><div class='item carousel-item third'><div class='d-flex flex-row'>");
		$(".shirts-slider #thumbcarousel .item.carousel-item.active .thumb").slice( 4, 8 ).detach().appendTo("#thumbcarousel .item.carousel-item.third .d-flex.flex-row");
		$("#dostavka .modal-dialog, #oplata .modal-dialog").removeClass("modal-dialog-centered");
	}
	$('.mobi-settings').on('click', function(){
		$('.type-toggle').css('z-index','2');
	});
	$('#mobivars a.close').on('click', function(){
		$('.type-toggle').css('z-index','3');
	});
});

// Ready date
var now = new Date();
options = {month: 'long', day: 'numeric' };
now.setDate(now.getDate()+10);
$rd = now.toLocaleDateString('ru-RU', options);
$('.readydate').html('Будет готово ' + $rd);

// Отправка заказа
$('#sendOrder').click(function(){
	if ( $(this).hasClass('clickable') ) {
		$('#sendordermodal').modal('hide');
		var sendButton = $(this);
		sendButton.css('opacity', '0.3');
		var name = $('[name="name"]').val();
		var phone = $('[name="phone"]').val();
		var email = $('[name="email"]').val();
		var delivery = $('[name="delivery"]').val();
		var pay = $('[name="pay"]').val();
		var comment = $('[name="comment"]').val();
		var total_price = $('.totalPrice').text();
		var partner_id = $partner_id;
		var partner = $partner;
		var spisok = "";

		$('.spisok .rowPlayer').each(function(){
			spisok += '{"name": "' + $(this).find('[name="namePlayer"]').val() + '",';
			spisok += '"number": "' +$(this).find('[name="number"]').val() + '",';
			spisok += '"rukav": "' +$(this).find('[name="rukav"]').val() + '",';
			spisok += '"size": "' +$(this).find('[name="size"]').val() + '",';
			spisok += '"printFIO": "' +$(this).find('[name="printFIO"]').prop('checked') + '",';
			spisok += '"printNumber": "' +$(this).find('[name="printNumber"]').prop('checked') + '",';
			spisok += '"printNumber2": "' +$(this).find('[name="printNumber2"]').prop('checked') + '",';
			spisok += '"printLogoS": "' +$(this).find('[name="printLogoS"]').prop('checked') + '",';
			spisok += '"printLogoM": "' +$(this).find('[name="printLogoM"]').prop('checked') + '",';
			spisok += '"printLogoL": "' +$(this).find('[name="printLogoL"]').prop('checked') + '",';

			spisok += '"short": "' +$(this).find('[name="short"]').prop('checked') + '",';
			spisok += '"gaiter": "' +$(this).find('[name="gaiter"]').prop('checked') + '"},';
		})

		spisok = spisok.substring(0, spisok.length - 1);
		if(name!='' && email!=''){
			var svg_shirt = $('#overall-tab .layout-shirt .svg-img').html();
			var svgShirt;
			(svg_shirt == null)? svgShirt = 'Нет' : svgShirt = encodeURIComponent(svg_shirt);
			var svg_short = $('#overall-tab .layout-short .svg-img').html();
			var svgShort;
			(svg_short == null)? svgShort = 'Нет' : svgShort = encodeURIComponent(svg_short);
			var svg_gaiter = $('#overall-tab .layout-gaiter .svg-img').html();
			var svgGaiter;
			(svg_gaiter == null)? svgGaiter = 'Нет' : svgGaiter = encodeURIComponent(svg_gaiter);
			var json = encodeURIComponent('{"name":"'+name+'","phone":"'+phone+'","email":"'+email+'","delivery":"'+delivery+'","price":"'+total_price+'","pay":"'+pay+'","comment":"'+comment+'","partner":"'+partner+'","partner_id":"'+partner_id+'","spisok":['+spisok +']}');
			// console.log('json: '+json+', shirt: '+svgShirt+', shorts: '+svgShort+', gaiter: '+svgGaiter);
			// $.post('/constructor/send.php',{json: json, shirt: svgShirt, shorts: svgShort, gaiter: svgGaiter}, function(){
				// // var prevSVG = $(html).filter('#getJSON').html();
				// // console.log(prevSVG);
				// $('#order-success').modal(options);
				// alert('Заказ отправлен. Копия отправлена Вам на почту');
				// sendButton.css('opacity','1');
				$.ajax({
					type: "post",
					url: "/constructor/send.php",
					data: {"json":json, "shirt":svgShirt, "shorts":svgShort, "gaiter":svgGaiter},
					success: function(){

						$('#order-success').modal();
					}
				});
				// });

			} else {
				alert('Заполните все поля');
				sendButton.css('opacity','1');
			}

    }
    return false;

})

$('.carousel').on('slid.bs.carousel', function () {
  	drawcolors();
})
$(document).on('click','.tab-pane.active .thumbs-control .item.active .thumb',function(){
		drawcolors();
});
$(document).on('click','.type-icon',function(){
		// mobivars()
		drawcolors();
		console.log("клик иконка")
});


// $( "#shirts-tab .setlayout" ).toggle(function() {
// 	jQuery(this).text('Удалить');
// }, function() {
// 	jQuery(this).text('В корзину');
// });
// $(document).on('click','#shirts-tab .setlayout', addshirt(); removeshirt());
// addshirt() {
// 	jQuery(this).text('Удалить');
// 	var layoutshirt = jQuery('.item-shirt.active .wrap').html();
// 	jQuery('.layout-shirt').html(layoutshirt);
// 	jQuery('<a class="overall-del clickable" data-type="shirt"><i class="far fa-trash-alt"></i></a>').insertAfter('.layout-shirt .svg-img');
// 	$shirt_id = $(this).parent('.item-shirt').find('.wrap').data('id');
// 	jQuery('.tab-pane').attr('class', 'tab-pane fade');
// 	jQuery('.type-icon').removeClass('active');
// 	jQuery('#shorts-tab').attr('class', 'tab-pane fade show active');
// 	jQuery('#nav-shorts-tab.type-icon').addClass('active');
// 	drawcolors();
// 	// mobivars();
// 	calc_price();
// 	// console.log("клик след футб");
// 	$(".layout-shirt .overall-del").on("click", function(){
// 		$item_type = $(this).data("type");
// 		console.log($item_type);
// 		$(this).siblings().remove();
// 		$(this).remove();
// 		$('input[name="' + $item_type + '"]').attr("checked", false);
// 		calc_price();
// 	});
// }
// removeshirt(){
// 	jQuery(this).text('Удалить');
// }

$(document).on('click','#shirts-tab .setlayout.not_in_cart',function(){
		jQuery(this).addClass("in_cart").removeClass("not_in_cart").text('Удалить');
		$("input[name=shirt]").attr("checked","checked");
		var layoutshirt = jQuery('.item-shirt.active .wrap').html();
		jQuery('.layout-shirt').html(layoutshirt);
		jQuery('<a class="overall-del clickable" data-type="shirt"><i class="far fa-trash-alt"></i></a>').insertAfter('.layout-shirt .svg-img');
		$shirt_id = $(this).parent('.item-shirt').find('.wrap').data('id');
		jQuery('.tab-pane').attr('class', 'tab-pane fade');
		jQuery('.type-icon').removeClass('active');
		jQuery('#shorts-tab').attr('class', 'tab-pane fade show active');
		jQuery('#nav-shorts-tab.type-icon').addClass('active');
		drawcolors();
		// mobivars();
		calc_price();
		// console.log("клик след футб");
		$(".layout-shirt .overall-del").on("click", function(){
			$item_type = $(this).data("type");
			console.log($item_type);
			$(this).siblings().remove();
			$(this).remove();
			$('input[name="' + $item_type + '"]').attr("checked", false);
			calc_price();
		});
});
$(document).on('click','#shirts-tab .setlayout.in_cart',function(){
			jQuery(this).addClass("not_in_cart").removeClass("in_cart").text('В корзину');
			$item_type = $(".layout-shirt .overall-del").data("type");
			$(".layout-shirt .overall-del").siblings().remove();
			$('input[name="' + $item_type + '"]').attr("checked", false);
			calc_price();
});

$(document).on('click','#shorts-tab .setlayout',function(){
		jQuery(this).addClass("in_cart").removeClass("not_in_cart").text('Удалить');
		$("input[name=short]").attr("checked","checked");
		var layoutshort = jQuery('.item-short.active .wrap').html();
		jQuery('.layout-short').html(layoutshort);
		jQuery('<a class="overall-del clickable" data-type="short"><i class="far fa-trash-alt"></i></a>').insertAfter('.layout-short .svg-img');
		$short_id = $(this).parent('.item-short').find('.wrap').data('id');
		jQuery('.tab-pane').attr('class', 'tab-pane fade');
		jQuery('.type-icon').removeClass('active');
		jQuery('#gaiters-tab').attr('class', 'tab-pane fade show active');
		jQuery('#nav-gaiters-tab.type-icon').addClass('active');
		drawcolors();
		// mobivars();
		calc_price();
		$(".layout-short .overall-del").on("click", function(){
			$item_type = $(this).data("type");
			console.log($item_type);
			$(this).siblings().remove();
			$(this).remove();
			$('input[name="' + $item_type + '"]').attr("checked", false);
			calc_price();
		});
});
$(document).on('click','#shorts-tab .setlayout.in_cart',function(){
			jQuery(this).addClass("not_in_cart").removeClass("in_cart").text('В корзину');
			$item_type = $(".layout-short .overall-del").data("type");
			$(".layout-short .overall-del").siblings().remove();
			$('input[name="' + $item_type + '"]').attr("checked", false);
			calc_price();
});

$(document).on('click','#gaiters-tab .setlayout',function(){
		jQuery(this).addClass("in_cart").removeClass("not_in_cart").text('Удалить');
		$( "input[name=gaiter]" ).attr("checked","checked");
		var layoutgaiter = jQuery('.item-gaiters.active .wrap').html();
		jQuery('.layout-gaiter').html(layoutgaiter);
		jQuery('<a class="overall-del clickable" data-type="gaiter"><i class="far fa-trash-alt"></i></a>').insertAfter('.layout-gaiter .svg-img');
		$gaiter_id = $(this).parent('.item-gaiters').find('.wrap').data('id');
		jQuery('.tab-pane').attr('class', 'tab-pane fade');
		jQuery('.type-icon').removeClass('active');
		jQuery('#overall-tab').attr('class', 'tab-pane fade show active');
		jQuery('#nav-overall-tab.type-icon').addClass('active');
		drawcolors();
		// mobivars();
		calc_price();
		// console.log("клик след гетры");
		$(".layout-gaiter .overall-del").on("click", function(){
			$item_type = $(this).data("type");
			console.log($item_type);
			$('input[name="' + $item_type + '"]').attr("checked", false);
			$(this).siblings().remove();
			$(this).remove();
			calc_price();
		});
});
$(document).on('click','#gaiters-tab .setlayout.in_cart',function(){
			jQuery(this).addClass("not_in_cart").removeClass("in_cart").text('В корзину');
			$item_type = $(".layout-gaiter .overall-del").data("type");
			$(".layout-gaiter .overall-del").siblings().remove();
			$('input[name="' + $item_type + '"]').attr("checked", false);
			calc_price();
});
function checknumber(){
	$(".spisok .rowPlayer input[name=number]").on('focusout', function(){
		if( $(this).val() ) {
			$(this).parents('p').siblings('div').find('input[name=printNumber]').prop('checked',true);
			calc_price();
		}
	})
};
$(document).on('click','.btn[data-target="#players"]', function(){checknumber();});
$(document).on('click','.add.btn', function(){checknumber();});
$(document).ready(function(){
		drawcolors();
		// mobivars()
})
