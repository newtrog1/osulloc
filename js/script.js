 //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
// $(function() {
//     $(".slide").slick({ 
//         arrows: true, //화살표 사용안함
//         dots: false, //닷츠
//         autoplay: true, //자동재생
//         fade: true, //페이드인 효과        
//         autoplaySpeed: 4000, //재생시간
//         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
//        pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
//     });
// }); 

$(function(){
    $(".center").slick({
        slide: 'li',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows :  false, 		// 옆으로 이동하는 화살표 표시 여부
        dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,		// 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick-prev'> < </button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'> > </button>",		// 다음 화살표 모양 설정
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        draggable : true, 	//드래그 가능 여부 
        
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1200, //화면 사이즈 1200px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1
                } 
            }
        ]

    });

    $(".center2").slick({
        slide: 'li',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : false, 	//무한 반복 옵션	 
        slidesToShow : 6,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 2,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows :  false, 		// 옆으로 이동하는 화살표 표시 여부
        dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : false,			// 자동 스크롤 사용 여부
        autoplaySpeed : 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,		// 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick-prev'> < </button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'> > </button>",		// 다음 화살표 모양 설정
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        draggable : true, 	//드래그 가능 여부 
        
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1200, //화면 사이즈 1200px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:4 
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2 
                } 
            }
        ]
    });


    $(".center3").slick({
        slide: 'li',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows :  false, 		// 옆으로 이동하는 화살표 표시 여부
        dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 1500, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,		// 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick-prev'> < </button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'> > </button>",		// 다음 화살표 모양 설정
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        draggable : true, 	//드래그 가능 여부 
        
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1200, //화면 사이즈 1200px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:2 
                } 
            }
        ]
    });

})











//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 



$(function(){
    $(".innerHeader .tnb > li > a").mouseover(function(){
        $(".tnb .inner").removeClass("on");
        $(this).next(".inner").addClass("on");
    });
    $(".tnb .inner").mouseleave(function(){
        $(".tnb .inner").removeClass("on");
    });
});