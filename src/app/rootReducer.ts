import { combineReducers } from "@reduxjs/toolkit";
import servicesReducer from "../features/servicesSlice";
import watershowReducer from "../features/watershowSlice";
import waterfooterReducer from "../features/watershowSlice_footer";
import thanhvienReducer from "../features/thanhvienSlice_footer";
import thucvatSliceReducer from "../features/thucvatSlice_footer";
import cachepSliceReducer from "../features/cachepSlice_footer";
import thucvatReducer from "../features/thucvatSlice";
import sukiensliderReducer from "../features/sukiensliderSlice";
import khiduoidaiReducer from "../features/khiduoidaiSlice_footer";
import thanhviennhahangReducer from "../features/thanhvienSlice";
import thanhviencfReducer from "../features/thanhviencfSlice";
import quangtruongReducer from "../features/quangtruongSlice_footer";
import quangtruongslider1Reducer from "../features/quangtruongslider1Slice";
import quangtruongslider2Reducer from "../features/quangtruongslider2Slice";
import quangtruongslider3Reducer from "../features/quangtruongslider3Slice";
import quangtruongslider4Reducer from "../features/quangtruongslider4Slice";
import cachepsliderReducer from "../features/cachepSlice";
import khamphaSlice from "../features/khamphaSlice";
import cachepcontentReducer from "../features/cachepcontentSlide";
import khiduoidaicontentReducer from "../features/khiduoidaicontentSlide";
import thucvatcontentReducer from "../features/thucvatcontentSlide";
import trangchuReducer from "../features/trangchuSlide";
import chuyReducer from "../features/chuySlide";
import lichsucontentReducer from "../features/lichsucontentSlide";
import thongtincanhanReducer from "../features/thongtincanhanSlide";
import baomatcontentReducer from "../features/baomatcontentSlide";
import baomatsubcontentReducer from "../features/baomatsubcontentSlide";
import thongtinbosungReducer from "../features/thongtinbosungSlide";
import vedichvucontentReducer from "../features/vedichvucontentSlide";
import congviencontentReducer from "../features/congviencontentSlide";
import tapthecontentReducer from "../features/tapthecontentSlide";
import dvchothueReducer from "../features/dvchothueSlide";
import dvxedienReducer from "../features/dvxedienSlide";
import vedichvusubcontentReducer from "../features/vedichvusubcontentSlide";
import watershowcontentReducer from "../features/watershowcontentSlice";
import giaveReducer from "../features/giaveSlide";
import gioithieucontentReducer from "../features/gioithieucontentSlide";
import gioithieulistReducer from "../features/gioithieulistSlide";
import thanhviencontentReducer from "../features/thanhviencontentSlide";
import vetaptheduccontentReducer from "../features/vetaptheduccontentSlide";

const rootReducer = combineReducers({
  services: servicesReducer,
  watershow: watershowReducer,
  waterfooter: waterfooterReducer,
  thanhvien: thanhvienReducer,
  thucvat: thucvatSliceReducer,
  cachep: cachepSliceReducer,
  cachepslider: cachepsliderReducer,
  thucvatcard: thucvatReducer,
  sukienslider: sukiensliderReducer,
  khiduoidai: khiduoidaiReducer,
  thanhviennhahang: thanhviennhahangReducer,
  thanhviencf: thanhviencfReducer,
  quangtruong: quangtruongReducer,
  quangtruongslider1: quangtruongslider1Reducer,
  quangtruongslider2: quangtruongslider2Reducer,
  quangtruongslider3: quangtruongslider3Reducer,
  quangtruongslider4: quangtruongslider4Reducer,
  khampha: khamphaSlice,


  //content
  cachepcontent: cachepcontentReducer,
  khiduoidaicontent: khiduoidaicontentReducer,
  thucvatcontent: thucvatcontentReducer,
  lichsucontent: lichsucontentReducer,
  trangchu: trangchuReducer,
  chuy: chuyReducer,
  thongtincanhan: thongtincanhanReducer,
  thongtinbosung: thongtinbosungReducer,

  baomatcontent: baomatcontentReducer,
  baomatsubcontent: baomatsubcontentReducer,
  vedichvucontent: vedichvucontentReducer,
  congviencontent: congviencontentReducer,
  tapthecontent: tapthecontentReducer,
  dvchothue: dvchothueReducer,
  dvxedien: dvxedienReducer,
  vedichvusubcontent: vedichvusubcontentReducer,
  watershowcontent: watershowcontentReducer,
  giave: giaveReducer,
  gioithieucontent: gioithieucontentReducer,
  gioithieulist: gioithieulistReducer,
  thanhviencontent: thanhviencontentReducer,
  vetaptheduccontent: vetaptheduccontentReducer,



});

export default rootReducer;
