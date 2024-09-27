
$(function(){
    // $("body").delay(500).fadeIn()
    $("a").click(function(e){
        
        var attr = $(this).attr("href");
        if(attr == "#" || attr == ""){
            e.preventDefault()
        }
    })

    // 인트로가기 클릭시
    $(".logo a").click(function(){
        setTimeout(function(){
            location.href = "full.html"
        }, 500)
    })

    // 메인슬라이드
    $(".img_slide").slick({
        autoplay: true,
        fade: true,
        arrows: false,
        dots: false,
    })

    // 개인프로젝트 카드 호버시
    $(".pro_design_img img").hover(function(){
        $(this).css({"transform":"scale(1.1)"});
        $(".pro_design_img h4").hide();
        $(this).next().show();
        $(".project_design>h4").css({"opacity":"0"});
    }, function(){
        $(this).css({"transform":"scale(1)"})
        // $(".pro_design_img h4").hide();
        // $(".project_design>h4").css({"opacity":"1"});
    })

    // 개인프로젝트 팝업 클릭시
    $(".pro_design_more").click(function(){
        $(".project_popup").slideDown();
    })

    $(".project_popup_close").click(function(){
        $(".project_popup").slideUp();
    })

    // 포토일러스트 슬라이드
    $(".photo_illust").slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        autoplaySpeed: 1,
        speed: 8000,
        cssEase: "linear",
        pauseOnHover: false,
        
    })

    // 팀슬라이드
    $(".team_slide").slick({
        autoplay: true,
        fade: true,
        arrows: true,
        dots: true,
    })

    // 팀프로젝트 화투 호버시
    $(".deck").hover(function(){
        $(".deck h3").css({"top":"40%","opacity":"1"})
        $(".deck img").css({"opacity":"0.5"})
        $(".card img").css({"opacity":"1"})
        $(".team_right h4").css({"opacity":"0"})
    }, function(){
        $(".deck h3").css({"top":"60%","opacity":"0"})
        $(".deck img").css({"opacity":"1"})
        $(".card img").css({"opacity":"0"})
        $(".team_right h4").css({"opacity":"1"})
    })

    // 팀프로젝트 팝업 클릭시
    $(".deck").click(function(){
        $(".team_pop").slideDown();
    })

    $(".team_close").click(function(){
        $(".team_pop").slideUp();
    })

    // 웹페이지 호버시 효과
    $(".web_page_menu ul li").hover(function(){
        $(this).find("img").css({"opacity":"0.3"})
        $(this).find("h3").stop().fadeIn(500)
        $(this).find("h3").css({"animation":"font_effect 1s 1s infinite alternate","opacity":"1"})
        $(this).find(".hover_line").css({"animation":"line_move1 0.6s ease-out forwards"})
        $(this).find(".hover_line1").css({"animation":"hover_line_move1 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line2").css({"animation":"hover_line_move2 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line3").css({"animation":"hover_line_move3 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line4").css({"animation":"hover_line_move4 0.6s 0.5s ease-out forwards"})
        $(this).find(".hover_line_top").css({"animation":"line_tb_move 1s ease-out forwards"})
        $(this).find(".hover_line_bottom").css({"animation":"line_tb_move 1s ease-out forwards"})
    }, function(){
        $(this).find("img").css({"opacity":"1"})
        $(this).find("h3").stop().fadeOut()
        $(this).find("h3").css({"animation":"none", "opacity":"0"})
        $(this).find(".hover_line").css({"animation":"none"})
        $(this).find(".hover_line1").css({"animation":"none"})
        $(this).find(".hover_line2").css({"animation":"none"})
        $(this).find(".hover_line3").css({"animation":"none"})
        $(this).find(".hover_line4").css({"animation":"none"})
        $(this).find(".hover_line_top").css({"animation":"none"})
        $(this).find(".hover_line_bottom").css({"animation":"none"})
    })

    // 다올팝업 클릭시
    $(".web_page_menu ul li").eq(0).click(function(){
        $(".daol_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".daol_block1").css({"animation":"daol_block1 0.4s 1s ease forwards"})
        $(".daol_block2").css({"animation":"daol_block2 0.3s 1.2s ease forwards"})
        $(".daol_block3").css({"animation":"daol_block3 0.5s 1.4s ease-out forwards"})
        $(".daol_pop h2").css({"animation":"daol_h 0.3s 0.6s linear forwards"})
        $(".daol_pop h3").css({"animation":"daol_h 0.3s 0.7s linear forwards"})
        $(".daol_pop_icon img:nth-child(1)").css({"animation":"coding_icon 0.5s 1.8s ease-out forwards"})
        $(".daol_pop_icon img:nth-child(2)").css({"animation":"coding_icon 0.5s 2s ease-out forwards"})
        $(".daol_pop p").css({"animation":"baro 0.3s 2.1s linear forwards"})
        $(".daol_notebook").css({"animation":"daol_note_page 0.3s 2.3s linear forwards"})
        $(".daol_page1").css({"animation":"daol_note_page 0.3s 2.5s linear forwards"})
        $(".daol_page2").css({"animation":"daol_note_page 0.3s 2.7s linear forwards"})
    })

    $(".coding_pop_close").click(function(){
        $(".daol_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".daol_block1").css({"animation":"none"})
        $(".daol_block2").css({"animation":"none"})
        $(".daol_block3").css({"animation":"none"})
        $(".daol_pop h2").css({"animation":"none"})
        $(".daol_pop h3").css({"animation":"none"})
        $(".daol_pop_icon img:nth-child(1)").css({"animation":"none"})
        $(".daol_pop_icon img:nth-child(2)").css({"animation":"none"})
        $(".daol_pop p").css({"animation":"none"})
        $(".daol_notebook").css({"animation":"none"})
        $(".daol_page1").css({"animation":"none"})
        $(".daol_page2").css({"animation":"none"})
    })
    
    // 하나팝업 클릭시
    $(".web_page_menu ul li").eq(1).click(function(){
        $(".hana_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".hana_block1").css({"animation":"hana_blmove1 0.5s 0.6s ease forwards"})
        $(".hana_block2").css({"animation":"hana_blmove2 0.5s 0.8s ease forwards"})
        $(".hana_pop h2").css({"animation":"daol_note_page 0.5s 1.2s linear forwards"})
        $(".hana_pop h3").css({"animation":"daol_note_page 0.5s 1.4s linear forwards"})
        $(".hana_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.6s ease-out forwards"})
        $(".hana_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 1.8s ease-out forwards"})
        $(".hana_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2s ease-out forwards"})
        $(".hana_pop p").css({"animation":"baro 0.3s 2.5s ease-out forwards"})
        $(".hana_notebook").css({"animation":"hana_notebook 0.5s 3s ease forwards"})
        $(".hana_page").css({"animation":"hana_page 0.5s 3.2s ease forwards"})
    })

    $(".hana_close").click(function(){
        $(".hana_pop").css({"top":"-50%"})
        $(".coding_pop_br").delay().fadeOut()
        $(".hana_block1").css({"animation":"none"})
        $(".hana_block2").css({"animation":"none"})
        $(".hana_pop h2").css({"animation":"none"})
        $(".hana_pop h3").css({"animation":"none"})
        $(".hana_icon img:nth-child(1)").css({"animation":"none"})
        $(".hana_icon img:nth-child(2)").css({"animation":"none"})
        $(".hana_icon img:nth-child(3)").css({"animation":"none"})
        $(".hana_pop p").css({"animation":"none"})
        $(".hana_notebook").css({"animation":"none"})
        $(".hana_page").css({"animation":"none"})
    })

    // 맥도날드 팝업 클릭시
    $(".web_page_menu ul li").eq(2).click(function(){
        $(".mc_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".mc_block").css({"animation":"mc_blmove 0.5s 0.8s ease forwards"})
        $(".mc_block h2").css({"animation":"daol_note_page 0.3s 1.3s ease forwards"})
        $(".mc_block h3").css({"animation":"daol_note_page 0.3s 1.5s ease forwards"})
        $(".mc_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".mc_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".mc_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2.2s ease forwards"})
        $(".mc_block p").css({"animation":"daol_note_page 0.3s 2.5s ease forwards"})
        $(".mc_notebook").css({"animation":"mc_notebook 0.5s 3s ease forwards"})
        $(".drink").css({"animation":"drink 0.5s 3s ease forwards"})
        $(".mc_page").css({"animation":"mc_page 0.5s 3s ease forwards"})
        $(".plate").css({"animation":"plate 0.5s 3.2s ease-out forwards"})
        $(".hamburger-cont1").css({"animation":"ham_cont7 0.6s 3.7s ease-in forwards"})
        $(".hamburger-cont2").css({"animation":"ham_cont6 0.6s 3.9s ease-in forwards"})
        $(".hamburger-cont3").css({"animation":"ham_cont5 0.6s 4.1s ease-in forwards"})
        $(".hamburger-cont4").css({"animation":"ham_cont4 0.6s 4.3s ease-in forwards"})
        $(".hamburger-cont5").css({"animation":"ham_cont3 0.6s 4.5s ease-in forwards"})
        $(".hamburger-cont6").css({"animation":"ham_cont2 0.6s 4.7s ease-in forwards"})
        $(".hamburger-cont7").css({"animation":"ham_cont1 0.6s 4.9s ease-in forwards"})
        $(".hamburger1").css({"animation":"ham_move 1s 4.8s ease-out forwards"})
        $(".hamburger2").css({"animation":"ham_move 1s 4.9s ease-out forwards"})
        $(".hamburger3").css({"animation":"ham_move 1s 5s ease-out forwards"})
        $(".hamburger4").css({"animation":"ham_move 1s 5.1s ease-out forwards"})
        $(".hamburger5").css({"animation":"ham_move 1s 5.2s ease-out forwards"})
        $(".hamburger6").css({"animation":"ham_move 1s 5.3s ease-out forwards"})
        $(".hamburger7").css({"animation":"ham_move 1s 5.4s ease-out forwards"})
    })

    $(".mc_close").click(function(){
        $(".mc_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".mc_block").css({"animation":"none"})
        $(".mc_block h2").css({"animation":"none"})
        $(".mc_block h3").css({"animation":"none"})
        $(".mc_icon img:nth-child(1)").css({"animation":"none"})
        $(".mc_icon img:nth-child(2)").css({"animation":"none"})
        $(".mc_icon img:nth-child(3)").css({"animation":"none"})
        $(".mc_block p").css({"animation":"none"})
        $(".mc_notebook").css({"animation":"none"})
        $(".drink").css({"animation":"none"})
        $(".mc_page").css({"animation":"none"})
        $(".plate").css({"animation":"none"})
        $(".hamburger-cont1").css({"animation":"none"})
        $(".hamburger-cont2").css({"animation":"none"})
        $(".hamburger-cont3").css({"animation":"none"})
        $(".hamburger-cont4").css({"animation":"none"})
        $(".hamburger-cont5").css({"animation":"none"})
        $(".hamburger-cont6").css({"animation":"none"})
        $(".hamburger-cont7").css({"animation":"none"})
        $(".hamburger1").css({"animation":"none"})
        $(".hamburger2").css({"animation":"none"})
        $(".hamburger3").css({"animation":"none"})
        $(".hamburger4").css({"animation":"none"})
        $(".hamburger5").css({"animation":"none"})
        $(".hamburger6").css({"animation":"none"})
        $(".hamburger7").css({"animation":"none"})
    })

    // 할리스커피 팝업 클릭시
    $(".web_page_menu ul li").eq(3).click(function(){
        $(".hollys_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".hollys_block").css({"animation":"hollys_block 0.5s 0.6s ease-out forwards"})
        $(".hollys_block h2").css({"animation":"daol_note_page 0.3s 1.2s linear forwards"})
        $(".hollys_block h3").css({"animation":"daol_note_page 0.3s 1.4s linear forwards"})
        $(".hollys_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 1.8s ease forwards"})
        $(".hollys_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".hollys_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2.2s ease forwards"})
        $(".hollys_icon img:nth-child(4)").css({"animation":"coding_icon 0.3s 2.4s ease forwards"})
        $(".hollys_icon img:nth-child(5)").css({"animation":"coding_icon 0.3s 2.6s ease forwards"})
        $(".hollys_block p").css({"animation":"daol_note_page 0.3s 3s ease forwards"})
        $(".hollys_notebook").css({"animation":"hollys_notebook 0.5s 3.6s ease forwards"})
        $(".table").css({"animation":"table 0.5s 3.6s ease forwards"})
        $(".hollys_page").css({"animation":"daol_note_page 0.5s 3.8s ease forwards"})
    })

    $(".hollys_close").click(function(){
        $(".hollys_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".hollys_block").css({"animation":"none"})
        $(".hollys_block h2").css({"animation":"none"})
        $(".hollys_block h3").css({"animation":"none"})
        $(".hollys_icon img:nth-child(1)").css({"animation":"none"})
        $(".hollys_icon img:nth-child(2)").css({"animation":"none"})
        $(".hollys_icon img:nth-child(3)").css({"animation":"none"})
        $(".hollys_icon img:nth-child(4)").css({"animation":"none"})
        $(".hollys_icon img:nth-child(5)").css({"animation":"none"})
        $(".hollys_block p").css({"animation":"none"})
        $(".hollys_notebook").css({"animation":"none"})
        $(".table").css({"animation":"none"})
        $(".hollys_page").css({"animation":"none"})
    })

    // 한강동물병원 팝업 클릭시
    $(".web_page_menu ul li").eq(4).click(function(){
        $(".animal_pop").css({"top":"50%"})
        $(".coding_pop_br").delay(300).fadeIn()
        $(".animal_block").css({"animation":"animal_block 0.5s 0.8s ease forwards"})
        $(".animal_block h2").css({"animation":"daol_note_page 0.3s 1.4s ease forwards"})
        $(".animal_block h3").css({"animation":"daol_note_page 0.3s 1.6s ease forwards"})
        $(".animal_icon img:nth-child(1)").css({"animation":"coding_icon 0.3s 2s ease forwards"})
        $(".animal_icon img:nth-child(2)").css({"animation":"coding_icon 0.3s 2.2s ease forwards"})
        $(".animal_icon img:nth-child(3)").css({"animation":"coding_icon 0.3s 2.4s ease forwards"})
        $(".animal_block p").css({"animation":"daol_note_page 0.3s 3s ease forwards"})
        $(".animal_notebook").css({"animation":"daol_note_page 0.3s 3.2s ease forwards"})
        $(".animal_page1").css({"animation":"daol_note_page 0.3s 3.4s ease forwards"})
        $(".animal_page2").css({"animation":"daol_note_page 0.3s 3.6s ease forwards"})
        $(".cat1").css({"animation":"coding_icon 0.3s 4.1s ease forwards"})
        $(".cat2").css({"animation":"coding_icon 0.3s 4.3s ease forwards"})
        $(".medical_box").css({"animation":"coding_icon 0.3s 4.2s ease forwards"})
        $(".dog2").css({"animation":"coding_icon 0.3s 4.4s ease forwards"})
        $(".dog1").css({"animation":"coding_icon 0.3s 4.5s ease forwards"})
    })

    $(".animal_close").click(function(){
        $(".animal_pop").css({"top":"-50%"})
        $(".coding_pop_br").fadeOut()
        $(".animal_block").css({"animation":"none"})
        $(".animal_block h2").css({"animation":"none"})
        $(".animal_block h3").css({"animation":"none"})
        $(".animal_icon img:nth-child(1)").css({"animation":"none"})
        $(".animal_icon img:nth-child(2)").css({"animation":"none"})
        $(".animal_icon img:nth-child(3)").css({"animation":"none"})
        $(".animal_block p").css({"animation":"none"})
        $(".animal_notebook").css({"animation":"none"})
        $(".animal_page1").css({"animation":"none"})
        $(".animal_page2").css({"animation":"none"})
        $(".cat1").css({"animation":"none"})
        $(".cat2").css({"animation":"none"})
        $(".medical_box").css({"animation":"none"})
        $(".dog2").css({"animation":"none"})
        $(".dog1").css({"animation":"none"})
    })
})// 제이커리끝

$(window).scroll(function(){
    var h = $(window).scrollTop();
    console.log(h)

    // 개인프로젝트 스크롤
    if(h >= 800){
        $(".project_cont").css({"opacity":"1"})
    }else{
        $(".project_cont").css({"opacity":"0"})
    }

    if(h >= 950){
        $(".project_design .pro_design_img img").css({"transform":"translateX(0)","opacity":"1"})
        $(".project_mockup div img").css({"transform":"translateX(0)","opacity":"1"})
        $(".sonic").css({"opacity":"1","top":"25px"})
        $(".koopa").css({"right":"36%","opacity":"1"})
        $(".pro_design_img a").fadeIn("slow")
    }else{
        $(".project_design .pro_design_img img").css({"transform":"translateX(20px)","opacity":"0"})
        $(".project_mockup div img").css({"transform":"translateX(20px)","opacity":"0"})
        $(".sonic").css({"opacity":"0","top":"0"})
        $(".koopa").css({"right":"38%","opacity":"0"})
        $(".pro_design_img a").fadeOut("slow")
    }

    // 팀프로젝트 스크롤
    if(h >= 1590){
        $(".team_left, .team_right").css({"opacity":"1"})
    }else{
        $(".team_left, .team_right").css({"opacity":"0"})
    }

    if(h >= 1690){
        $(".team_icon1, .team_icon2").css({"transform":"scale(1)"})
    }else{
        $(".team_icon1, .team_icon2").css({"transform":"scale(0)"})
    }

    // 엔딩 스크롤
    if(h >= 3000){
        $(".fin1").fadeIn()
        $(".fin2").delay(200).fadeIn()
        $(".fin3").delay(400).fadeIn()
    }
})