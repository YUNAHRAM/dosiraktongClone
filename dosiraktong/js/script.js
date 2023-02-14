//이미지 및 리소스 로드 후 코드실행
// window.onload=()=>{} 화살표펑션 또는 아래 펑션 사용
window.onload = function () {
  //코드 실행 작성
  //모바일 메뉴 버튼 처리
  // 1.모바일 버튼을 찾아서 저장한다.
  let mbBt = document.querySelector('.mobile-bt');
  // 2.모바일 메뉴를 찾아서 저장한다.
  let mbNav = document.querySelector('.mb-nav');
  //   3.로고를 찾아서 저장한다.
  let logo = document.querySelector('.logo');
  //   5. header 를 찾아서 저장한다.
  let header = document.querySelector('.header');
  //  6..gnb > li > a에 active 추가한다.
  let gnbA = document.querySelectorAll('.gnb>li>a');
  //   7.mobile-bt span에 active 를 추가한다.
  let mbBtSpan = document.querySelectorAll('.mobile-bt span');
  // 8.html 태그
  let htmlTag = document.querySelector('html');

  // 4.모바일 버튼을 클릭을 하면 모바일 메뉴에 active 클래스를 추가한다.
  mbBt.addEventListener('click', function () {
    // 로고에 active 클래스를 추가하낟.
    logo.classList.toggle('active-blue');
    // 모바일 버튼에 active 클래스를 추가한다.
    mbBt.classList.toggle('active');
    // 모바일 메뉴에 active 클래스를추가한다.
    mbNav.classList.toggle('active');
    // 모바일 버튼 아이콘 색상 검은색
    htmlTag.classList.toggle('active');
    mbBtSpan.forEach(item => {
      item.classList.add('active');
    });
  });

  //  윈도우 화면 리사이징 처리
  window.addEventListener('resize', function () {
    // window의 화면 안쪽 너비 체크하기
    // console.log(window.innerWidth);
    let wW = window.innerWidth;
    if (wW > 1080) {
      // 모바일 버튼에 active 클래스를  제거한다.
      mbBt.classList.remove('active');
      // 모바일 메뉴에 active 클래스를 제거한다.
      mbNav.classList.remove('active');
      //html 에 active 클래스를 제거한다.
      htmlTag.classList.remove('active');

      // 스크롤이 되었는지 안되었는지에 따라서 처리 분리
      let $scrollTop = window.document.documentElement.scrollTop;
      if ($scrollTop > 100) {
        // 모바일 버튼 아이콘 색상 검은색
        mbBtSpan.forEach(item => {
          item.classList.add('active');
        });
      } else {
        mbBtSpan.forEach(item => {
          item.classList.toggle('active');
        });
        //아람 toggle 인지 remove 인지 확인하기
      }
      logo.classList.remove('active-blue');
    }
  });
  //   window.스크롤 처리
  window.addEventListener('scroll', function () {
    // 스크롤바가 스크롤이 된 픽셀 값을 파악
    let $scrollTop = window.document.documentElement.scrollTop;
    // console.log($scrollTop);
    // 조금이라도 스크롤을 했다면 처리한다.
    if ($scrollTop > 100) {
      header.classList.add('active');
      logo.classList.add('active');
      mbBtSpan.forEach((item, idx, arr) => {
        item.classList.add('active');
      });
      gnbA.forEach((item, idx, arr) => {
        // console.log(item);
        item.classList.add('active');
      });
    } else {
      header.classList.remove('active');
      logo.classList.remove('active');
      mbBtSpan.forEach((item, idx, arr) => {
        item.classList.remove('active');
      });
      gnbA.forEach((item, idx, arr) => {
        // console.log(item);
        item.classList.remove('active');
      });
    }
  });

  //화면 Reload 시 처리
  let $scrollTop = window.document.documentElement.scrollTop;
  if ($scrollTop > 100) {
    header.classList.add('active');
    logo.classList.add('active');
    mbBtSpan.forEach((item, idx, arr) => {
      item.classList.add('active');
    });
    gnbA.forEach((item, idx, arr) => {
      // console.log(item);
      item.classList.add('active');
    });
  }

  new Swiper('.swvisual');
};
