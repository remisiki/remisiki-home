import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function navigate(path, darkModeHandler) {
  const navigation = useNavigation();
  return (() => {
    if ($('.title-center').hasClass("title-selected")) {
      $('.title-center').removeClass("title-selected");
    }
    if ($('.menu-item').hasClass("menu-item-selected")) {
      $('.menu-item').removeClass("menu-item-selected");
    }
    if ($('#menu').hasClass("menu-btn-selected")) {
      $('#menu').removeClass("menu-btn-selected");
    }
    $(`#${path}`).addClass("title-selected");
    $(`#menu${path}`).addClass("menu-item-selected");
    $('#menu-block').hide();
    navigation.navigate(path, {});
    if (path === "Home") {
      window.location.reload();
    }
    darkModeHandler();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }
  );
}

function switchLang(lang) {
  if ($('.title-right:not(#moon)').hasClass("title-selected")) {
      $('.title-right:not(#moon)').removeClass("title-selected");
  }
  $('#' + lang).addClass("title-selected");
}

function Menu({darkModeHandler}) {
  const { t, i18n } = useTranslation();
  return (
    <div className="menu-bar" id="menu-block">
      <div onClick={navigate("Home", darkModeHandler)} className="menu-item" id="menuHome">
        {t('Home')}
      </div>
      <div onClick={navigate("Info", darkModeHandler)} className="menu-item" id="menuInfo">
        {t('Info')}
      </div>
      <div onClick={navigate("Repos", darkModeHandler)} className="menu-item" id="menuRepos">
        {t('Repos')}
      </div>
      <div onClick={navigate("Game", darkModeHandler)} className="menu-item" id="menuGame">
        {t('Game')}
      </div>
    </div>
  );
}

function NavigationBlock({name, darkModeHandler}) {
  const { t, i18n } = useTranslation();
  let [ menu, setMenu ] = useState(false);
  const logo = require("../../assets/favicon.png");
  return (
    <div className="wrapper nav-block">
      <div className="left-container">
        <div id="head-logo">
          <img src={logo} className="logo" />
        </div>
        <div
          className="title-left menu-btn" 
          onClick={() => {
            $('#menu-block').toggle();
            $('#menu').toggleClass('menu-btn-selected');
          }}
          id="menu"
        >
          <span></span>
        </div>
        <Menu darkModeHandler={darkModeHandler} />
      </div>
      <div className="guide-container">
        <div className="title-center" onClick={navigate("Home", darkModeHandler)} id="Home">
          {t('Home')}
        </div>
        <div className="title-center" onClick={navigate("Info", darkModeHandler)} id="Info">
          {t('Info')}
        </div>
        <div className="title-center" onClick={navigate("Repos", darkModeHandler)} id="Repos">
          {t('Repos')}
        </div>
        <div className="title-center" onClick={navigate("Game", darkModeHandler)} id="Game">
          {t('Game')}
        </div>
      </div>
      <div className="right-action-container">
        <div 
          className="title-right" 
          onClick={()=>{ 
            $('#moon').toggleClass('title-selected'); 
            darkModeHandler(); 
            localStorage.setItem('dark_prefer', $('#moon').hasClass('title-selected'));
          }} 
          id="moon"
        >
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div className="title-right" onClick={()=>{ i18n.changeLanguage('en'); switchLang("en"); }} id="en">
          E
        </div>
        <div className="title-right" onClick={()=>{ i18n.changeLanguage('ja'); switchLang("ja"); }} id="ja">
          あ
        </div>
        <div className="title-right" onClick={()=>{ i18n.changeLanguage('zh'); switchLang("zh"); }} id="zh">
          中
        </div>
      </div>
    </div>
  );
}

export default NavigationBlock;