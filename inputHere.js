


/* 프로필 입력 영역입니다  */
let webName = "Web Portfolio"//웹 제목 이름
let myName = "이승엽" // 자기이름
let birthDay = "79.12.08" //생년월일
let mobileNum = "010-9718-7942" //전화번호
let email = "natekiki@gmail.com" //email


/* 교육사항 입력영역입니다
데이터 형식은 

[ {
    key : value,
    key : value
}, {
    key : value,
    key : value
}]

의 형태이므로 , 누락되지않게 조심합시다 
"" 는 계속 유지해야합니다.

*/
let education =[
    {
        date : "1988.02",
        name : "내성 고등학교 졸업"
    },

    {
        date : "1988.03",
        name : "부경대학교 기계공학부 입학"
    },
    {
        date : "2015.02",
        name : "부경대학교 졸업"
    },
    {
        date : "2022.08",
        name : "멀티미디어(프리미어,애프터이펙트,3D모션)앱콘텐츠 제작 실무자 양성과정"
    }
]; //education


let work = [
    {
        date : "2016.10",
        name : "진달래 디자인 컴퍼니 입사 - 웹디자이너"
    },

    {
        date : "2011.03",
        name : "진달래 디자인 컴퍼니 퇴사"
    },
    {
        date : "2015.02",
        name : "개나리 무역회사 웹디자이너 입사"
    },
    {
        date : "2022.02",
        name : "개나리 무역회사 퇴사"
    }
]//work


/* 스킬 입력영역 */


let skills = [

    {
        name : "Photoshop", //추가할 스킬이름
        icon : "fas fa-magic", // 폰트어썸 아이콘 클래스
        quant : "40", //퍼센테이지
        fontColor : "#f06", //글자색상
        bgColor : "fef" //백그라운드 색상
    },
    {
        name : "Illustrator", 
        icon : "fas fa-palette", 
        quant : "50",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    },
    {
        name : "Web Publishing<br>HTML/css/jQuery",
        icon : "fas fa-code",
        quant : "60",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    },
    {
        name : "Premiere",
        icon : "fas fa-video", 
        quant : "70",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    },
    {
        name : "After Effects",
        icon : "fas fa-photo-video",
        quant : "80",
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise" 
    },
    {
        name : "3d Max", 
        icon : "fas fa-cube", 
        quant : "90", 
        fontColor : "mediumturquoise",
        bgColor : "paleturquoise"
    }

];


