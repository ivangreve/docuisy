import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTachometerAlt,
  faVectorSquare,
  faCopyright,
  faUserClock,
  faListUl,
  faMobile,
  faCalendarAlt,
  faCog,
  faSignOutAlt,
  faUsers,
  faUser,
  faPlus,
  faVideo,
  faCalendarWeek,
  faEye,
  faDownload,
  faSyncAlt,
  faBroadcastTower,
  faExchangeAlt,
  faUserFriends,
  faLock,
  faBars
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTachometerAlt,
  faVectorSquare,
  faCopyright,
  faUserClock,
  faListUl,
  faMobile,
  faCalendarAlt,
  faCog,
  faSignOutAlt,
  faUsers,
  faUser,
  faPlus,
  faVideo,
  faCalendarWeek,
  faEye,
  faDownload,
  faSyncAlt,
  faBroadcastTower,
  faExchangeAlt,
  faUserFriends,
  faLock,
  faBars
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
