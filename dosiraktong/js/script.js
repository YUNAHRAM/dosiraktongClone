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
    // html scroll 없애기
    htmlTag.classList.toggle('active');
    // 로고에 active 클래스를 추가하낟.
    logo.classList.toggle('active-blue');
    // 모바일 버튼에 active 클래스를 추가한다.
    mbBt.classList.toggle('active');
    // 모바일 메뉴에 active 클래스를추가한다.
    mbNav.classList.toggle('active');
    // 모바일 버튼 아이콘 색상 검은색

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
          item.classList.remove('active');
        });
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

  //  data.json 외부연동
  // 1. XMLHttpRequest 활용 : 반드시 JSON.parse(); 실행하기
  // xhttp.send(); 주석처리해놓음
  const xhttp = new XMLHttpRequest();
  //  data.json 이 불러들여졌는지 검사후 완료시 실행
  xhttp.onreadystatechange = function (e) {
    const req = e.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      //   console.log('여그 자료가 왔어요.');
      //   console.log(req.response);
      //   아래 구문을 반드시 체크하자.
      const dataArr = JSON.parse(req.response);
      //   console.log(dataArr);
    }
  };
  xhttp.open('GET', 'data.json');
  //   xhttp.send();

  //2.fetch  활용 : 아래 구문을 준수하자.
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      // 데이터를 활용한다.
      // console.log(data);
      //   const dataArr = data.visual;
      // 데이터를 외부 변수에 저장한다.
      visualData = data.visual;

      //데이터 로딩후 데이터 개수만큼 li 태그를 만든다.
      //만들어진 글자를 모아서 swUl 태그 안쪽에 innerHtml 한다.
      let html = '';
      let count = 1;
      visualData.forEach(item => {
        html += `<li>${count++}</li>`;
      });
      swUl.innerHTML = html;
      //   자바스크립트가  li를 참조하도록 적용
      swList = document.querySelectorAll('.swvisual-list li');
      //li 태그를 클릭해서 슬라이드 이동하기
      swListShow();

      showVT(visualData[0], 0);
    })
    .catch(err => {
      console.log(err);
    });

  // 비주얼에 활용할 데이터
  let visualData;
  // 화면에 데이터를 출력하는 함수
  const swTitle = document.querySelector('.swvisual-title');
  const swTxt = document.querySelector('.swvisual-txt');
  const swLink = document.querySelector('.swvisual-link');
  //   const swList = document.querySelectorAll('.swvisual-list li');
  const swUl = document.querySelector('.swvisual-list');
  //   li 는 동적(데이터로딩후 )으로 만들어야 한다.
  // const 는 내용을 변경하지 못한다.
  let swList;

  // 타이틀 내용 보여주기
  function showVT(_data, _idx) {
    console.log(_data);
    swTitle.innerHTML = _data.title;
    swTxt.innerHTML = _data.txt;
    if (_data.link === 'no') {
      swLink.classList.add('active');
    } else {
      swLink.classList.remove('active');
    }
    // 라인 모션 실행
    changeBar(_idx);
  }

  //  포커스 라인 애니메이션 실행함수
  function changeBar(_idx) {
    // item: 각각의 li 를 의미
    // index : 순서번호
    swList.forEach((item, index) => {
      if (index === _idx) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // li 를 클릭시 슬라이드 변경함수
  function swListShow() {
    swList.forEach((item, index) => {
      // 클릭시 슬라이드 변경
      item.addEventListener('click', function () {
        // swVisual 슬라이드를 변경 (API 참조)
        // swVisual.slideTo()
        // swVisual.slideToLoop(번호, 속도, 효과)
        swVisual.slideToLoop(index, 500, false);
      });
    });
  }

  // 비주얼 슬라이드
  let swVisual = new Swiper('.swvisual', {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.swvisual-prev',
      nextEl: '.swvisual-next',
    },
  });
  // 슬라이드가 변경될 때마다 하고 싶은일 진행
  swVisual.on('slideChange', function () {
    console.log('진짜 html 태그의 순서', swVisual.realIndex);
    console.log('모션이 되는 순서', swVisual.activeIndex);
    // 텍스트를 수정한다.
    showVT(visualData[swVisual.realIndex], swVisual.realIndex);
  });
};
