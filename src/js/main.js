//= '../bower_components/jquery/dist/jquery.min.js'
//= '../bower_components/fancybox/dist/jquery.fancybox.min.js'


$().fancybox({
  selector: '.list li:visible',
  animationEffect: 'zoom-in-out',
  animationDuration: 500,
  arrows: true,
  infobar: false,
  touch: false,
  loop: true,
  dots: true,
  btnTpl: {
    arrowLeft: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<svg width="92" height="140" viewBox="0 0 92 140" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd)"><path d="M70.565 31.5L66.194 18l-44 43 6.87 11 41.5 41.5v-82z" fill="#000B1A" stroke="url(#paint0_linear)" stroke-width="2"/><path d="M70.065 112.5l-5-11" stroke="#017E98" stroke-width="2"/><path d="M65.447 38.757h.066v44.167h-.066V103l-43.16-42.16 43.16-42.16v20.077z" fill="url(#paint1_linear)"/><path d="M65.447 38.757V103l-43.16-42.16 43.16-42.16v20.077z" stroke="#00D1FF" stroke-width="2"/><ellipse rx="7.629" ry="30.398" transform="scale(-1.01165 .98821) rotate(-45 26.732 72.183)" fill="url(#paint2_radial)"/><ellipse rx="4.367" ry="17.461" transform="scale(-1.01165 .98821) rotate(-45 27.954 72.376)" fill="url(#paint3_radial)"/><g filter="url(#filter1_f)"><path d="M61.85 22.696l-38.022 37.14" stroke="url(#paint4_linear)" stroke-width="2"/></g><ellipse rx="7.629" ry="30.398" transform="matrix(-.99993 .01172 -.01172 .99993 64.54 82.024)" fill="url(#paint5_radial)"/><ellipse rx="4.367" ry="17.461" transform="matrix(-.99993 .01172 -.01172 .99993 65.026 82.826)" fill="url(#paint6_radial)"/><g filter="url(#filter2_f)"><path d="M65.431 57.268l-.623 53.147" stroke="url(#paint7_linear)" stroke-width="2"/></g></g><defs><radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(7.62887 30.3978) rotate(90 0 1)"><stop stop-color="#06F" stop-opacity=".6"/><stop offset="1" stop-color="#0038FF" stop-opacity="0"/></radialGradient><radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(4.36657 17.4606) rotate(90 0 1)"><stop stop-color="#06F" stop-opacity=".6"/><stop offset="1" stop-color="#0038FF" stop-opacity="0"/></radialGradient><radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(4.36657 17.4606) rotate(90 0 1)"><stop stop-color="#06F" stop-opacity=".6"/><stop offset="1" stop-color="#0038FF" stop-opacity="0"/></radialGradient><radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(7.62887 30.3978) rotate(90 0 1)"><stop stop-color="#06F" stop-opacity=".6"/><stop offset="1" stop-color="#0038FF" stop-opacity="0"/></radialGradient><linearGradient id="paint1_linear" x1="70.694" y1="60" x2="21.773" y2="60.84" gradientUnits="userSpaceOnUse"><stop offset=".011"/><stop offset="1" stop-color="#021D64"/></linearGradient><linearGradient id="paint7_linear" x1="65.431" y1="57.268" x2="66.054" y2="110.401" gradientUnits="userSpaceOnUse"><stop stop-color="#86F2FF" stop-opacity="0"/><stop offset=".503" stop-color="#B4F7FF"/><stop offset="1" stop-color="#86F2FF" stop-opacity="0"/></linearGradient><linearGradient id="paint0_linear" x1="41.565" y1="40.5" x2="70.565" y2="113" gradientUnits="userSpaceOnUse"><stop stop-color="#01D2FF"/><stop offset="1" stop-color="#007A94"/></linearGradient><linearGradient id="paint4_linear" x1="61.85" y1="22.696" x2="24.72" y2="60.707" gradientUnits="userSpaceOnUse"><stop stop-color="#86F2FF" stop-opacity="0"/><stop offset=".503" stop-color="#B4F7FF"/><stop offset="1" stop-color="#86F2FF" stop-opacity="0"/></linearGradient><filter id="filter1_f" x="22.13" y="20.981" width="41.419" height="40.571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur"/></filter><filter id="filter2_f" x="36.546" y="55.268" width="57.148" height="57.148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur"/></filter><filter id="filter0_dd" x="-3.487" y="-3" width="116.181" height="142.914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0.22 0 0 0 0 1 0 0 0 0.5 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="10"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.5 0"/><feBlend in2="effect1_dropShadow" result="effect2_dropShadow"/><feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape"/></filter></defs></svg>' + "</button>",

    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
      '<svg width="92" height="140" viewBox="0 0 92 140" fill="none" xmlns="http://www.w3.org/2000/svg">    <g filter="url(#filter0_dd)">    <path d="M22.1288 31.5L26.4999 18L70.4999 61L63.6288 72L22.1288 113.5V31.5Z" fill="#000B1A" stroke="url(#paint0_linear)" stroke-width="2"/>    <path d="M22.6288 112.5L27.6288 101.5" stroke="#017E98" stroke-width="2"/>    <path d="M27.2468 38.7569H27.1808V82.924H27.2468V103L70.4063 60.8404L27.2468 18.6809V38.7569Z" fill="url(#paint1_linear)"/>    <path d="M27.2468 38.7569V68V82.924V103L70.4063 60.8404L27.2468 18.6809V38.7569Z" stroke="#00D1FF" stroke-width="2"/>    <ellipse rx="7.62887" ry="30.3978" transform="matrix(0.715346 -0.698771 0.715346 0.698771 48.9785 39.5719)" fill="url(#paint2_radial)"/>    <ellipse rx="4.36657" ry="17.4606" transform="matrix(0.715346 -0.698771 0.715346 0.698771 49.2027 40.4822)" fill="url(#paint3_radial)"/>    <g filter="url(#filter1_f)">    <path d="M30.8434 22.696L68.8649 59.8366" stroke="url(#paint4_linear)" stroke-width="2"/>    </g>    <ellipse rx="7.62887" ry="30.3978" transform="matrix(0.999931 0.0117201 0.0117201 0.999931 28.1528 82.0239)" fill="url(#paint5_radial)"/>    <ellipse rx="4.36657" ry="17.4606" transform="matrix(0.999931 0.0117201 0.0117201 0.999931 27.6677 82.8262)" fill="url(#paint6_radial)"/>    <g filter="url(#filter2_f)">    <path d="M27.2623 57.2676L27.8853 110.415" stroke="url(#paint7_linear)" stroke-width="2"/>    </g>    </g>    <defs>    <filter id="filter0_dd" x="-19" y="-3" width="115.181" height="142.914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">    <feFlood flood-opacity="0" result="BackgroundImageFix"/>    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>    <feOffset dy="4"/>    <feGaussianBlur stdDeviation="5"/>    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.22 0 0 0 0 1 0 0 0 0.5 0"/>    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>    <feOffset dy="4"/>    <feGaussianBlur stdDeviation="10"/>    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.5 0"/>    <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>    </filter>    <filter id="filter1_f" x="29.1446" y="20.9807" width="41.419" height="40.5712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">    <feFlood flood-opacity="0" result="BackgroundImageFix"/>    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>    </filter>    <filter id="filter2_f" x="25.2624" y="56.2559" width="4.6228" height="55.171" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">    <feFlood flood-opacity="0" result="BackgroundImageFix"/>    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur"/>    </filter>    <linearGradient id="paint0_linear" x1="51.1288" y1="40.5" x2="22.1288" y2="113" gradientUnits="userSpaceOnUse">    <stop stop-color="#01D2FF"/>    <stop offset="1" stop-color="#007A94"/>    </linearGradient>    <linearGradient id="paint1_linear" x1="21.9999" y1="60" x2="70.9201" y2="60.8404" gradientUnits="userSpaceOnUse">    <stop offset="0.0111392"/>    <stop offset="1" stop-color="#021D64"/>    </linearGradient>    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.62887 30.3978) rotate(90) scale(30.3978 7.62887)">    <stop stop-color="#0066FF" stop-opacity="0.6"/>    <stop offset="1" stop-color="#0038FF" stop-opacity="0"/>    </radialGradient>    <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.36657 17.4606) rotate(90) scale(17.4606 4.36657)">    <stop stop-color="#0066FF" stop-opacity="0.6"/>    <stop offset="1" stop-color="#0038FF" stop-opacity="0"/>    </radialGradient>    <linearGradient id="paint4_linear" x1="30.8434" y1="22.696" x2="67.9737" y2="60.7071" gradientUnits="userSpaceOnUse">    <stop stop-color="#86F2FF" stop-opacity="0"/>    <stop offset="0.503467" stop-color="#B4F7FF"/>    <stop offset="1" stop-color="#86F2FF" stop-opacity="0"/>    </linearGradient>    <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.62887 30.3978) rotate(90) scale(30.3978 7.62887)">    <stop stop-color="#0066FF" stop-opacity="0.6"/>    <stop offset="1" stop-color="#0038FF" stop-opacity="0"/>    </radialGradient>    <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.36657 17.4606) rotate(90) scale(17.4606 4.36657)">    <stop stop-color="#0066FF" stop-opacity="0.6"/>    <stop offset="1" stop-color="#0038FF" stop-opacity="0"/>    </radialGradient>    <linearGradient id="paint7_linear" x1="27.2623" y1="57.2676" x2="26.6396" y2="110.401" gradientUnits="userSpaceOnUse">    <stop stop-color="#86F2FF" stop-opacity="0"/>    <stop offset="0.503467" stop-color="#B4F7FF"/>    <stop offset="1" stop-color="#86F2FF" stop-opacity="0"/>    </linearGradient>    </defs>    </svg>' + "</button>"
  }
});

var subscribeBlock = document.querySelector('.main-subscribe-block');
var btnClose = document.querySelector('.close-btn');
var subscribeMail = subscribeBlock.querySelector('.subscribe__input');
var form = subscribeBlock.querySelector('.subscribe__form');
var modalSuccessWrap = document.querySelector('.modal__success-wrap');
var modalSuccessClose = document.querySelector('.modal__success-close');
var subscrURL = 'https://api-test.presale-deex.exchange/verify/request_service_info';

// var subscrURL = 'https://pp.deex.exchange/verify/request_service_info';
// var subscrURL = 'https://api-test.presale-deex.exchange/verify/request_service_info';

var data = {
  email: '',
  name: '',
  lang: 'en',
  service: 'deex_cash'
};

subscribeMail.addEventListener('invalid', function (evt) {
  if (subscribeMail.validity.patternMismatch) {
    subscribeMail.setCustomValidity('Please enter a valid email address');
  } else if (subscribeMail.validity.valueMissing) {
    subscribeMail.setCustomValidity('Required field');
  } else {
    subscribeMail.setCustomValidity('');
  }
});

var readyLoad = function () {
  setTimeout(function () {
    subscribeBlock.classList.add('is-subscribe-open');
  }, 8000)
};

var popupSuccessClose = function () {
  modalSuccessWrap.style.display = 'none';
};

var upload = function (obj) {
  var xhr = new XMLHttpRequest();

  var serialize = function (obj) {
    return Object.keys(obj).reduce(function (a, k) {
      a.push(k + "=" + encodeURIComponent(obj[k]));
      return a;
    }, []).join("&");
  };



  xhr.open('POST', subscrURL);

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {

      modalSuccessWrap.style.display = 'flex';
      subscribeBlock.classList.remove('is-subscribe-open');
      document.removeEventListener('DOMContentLoaded', readyLoad);
      // clearTimeout();

      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          popupSuccessClose();
        }
      });

      document.addEventListener('click', function (evt) {
        popupSuccessClose();
      });

      modalSuccessClose.addEventListener('click', function () {
        popupSuccessClose();
      });
    } else {
      console.log('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }

  });

  xhr.addEventListener('error', function () {
    console.log('Произошла ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    console.log('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 10000;


  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.send(serialize({
    data: JSON.stringify(obj)
  }));
};

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  data.email = subscribeMail.value;
  upload(data);
});


btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  subscribeBlock.classList.remove('is-subscribe-open');
});

document.addEventListener('DOMContentLoaded', readyLoad);
