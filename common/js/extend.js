/*-------------------------
 *  sample.js
 * -----------------------*/

window.onload = function () {
  $(function () {

    /* 実行関数 */
    /* optionの値の変更を行うことで、違う処理を実現する事が可能 */
    $('.js-test01').testFunction({
      target:'.js-target', /* optionの値はオブジェクト変数なのでカンマで区切り指定が可能 */
      addClass:'is-active'
    });
    $('.js-test02').testFunction({
      speed:100
    });
    $('.js-test03').testFunction({
      addClass:'is-active'
    });

  });
};

/* 上記の記述は実行関数となり、外部ファイル化を想定して記述を分けています。 */




/*----------------------------------------------
 *  testFunction
 * --------------------------------------------*/

$(function () {

  /* アコーディオンjs */
  $.fn.testFunction = function (option) {/* 戻り値を使って実行タイミングの設定を取得する */

    /* ----- デフォルトの設定 START ------ */
    var defaults = {
      speed: null,
      target: false,
      addClass: false
    };
    var $trg = $(this).next(); /* targetの初期値 */
    /* ----- デフォルトの設定 END -------- */

    /* extend()による、値の上書き処理 */
    /* settingsへ再帰的マージ defaultsは上記の初期設定optionは実行関数別の戻り値 */
    var settings = $.extend(true, defaults, option);

    /* アコーディオン関数 */
    $(this).on('click', function () {

      /* addClass option */
      if( settings.addClass ){ /* addClassの指定があった場合 */
        $(this).toggleClass(settings.addClass); /* クラス付与を実行 */
      }
      /* target option */
      if( settings.target ){ /* targetの指定のあった場合 */
        $trg = $(settings.target); /* target書き換え処理 */
      }

      /* アコーディオン処理 */
      $trg.slideToggle(settings.speed);/* speed optionの指定 */

    });
  }

});