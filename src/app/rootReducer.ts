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
  quangtruongslider4: quangtruongslider4Reducer



});

export default rootReducer;
