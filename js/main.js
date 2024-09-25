$(function(){

    $('#fullpage').fullpage({
        anchors: ['page1','page2','page3','page4','page5'],
        
        navigation : true,
        navigationPosition:  'right',
        navigationTooltips : ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5','푸터'],
        keyboarddicrolling: false,
        slidesnavigation: true,
        responsiveWidth: 1000,
         afterLoad : function(anchorslink,index){
            console.log('현재영역의 번호는'+index)
            if(index==4){
                alert('감사합니다')
            }
         }
    })
})


