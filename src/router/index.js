import { createRouter, createWebHistory } from "vue-router";
import RegisterIns from "../views/RegisterIns.vue";
import AccountSettingsIns from "../views/AccountSettingsIns.vue";
import AddChanelIns from "../views/AddChanelIns.vue";
import ConnectZaloIns from "../views/ConnectZaloIns.vue";
import ConnectWebIns from "../views/ConnectWebIns.vue";
import ConnectFacebookIns from "../views/ConnectFacebookIns.vue";
import AppIns from "../views/AppIns.vue";
import AddAgentIns from "../views/AddAgentIns.vue";
import AutoConfigIns from "../views/AutoConfigIns.vue";
import CreatGroupIns from "../views/CreatGroupIns.vue";
import CreatLabelIns from "../views/CreatLabelIns.vue";
import CustomPropertiesIns from "../views/CustomPropertiesIns.vue";
import CreateModelIns from "../views/CreateModelIns.vue";
import LivestreamIns from "../views/LivestreamIns.vue";
import SlaIns from "../views/SlaIns.vue";
import ReportIns from "../views/ReportIns.vue";
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dang-ki",
      name: "dang-ki",
      component: RegisterIns,
    },

    {
      path: "/them-agent",
      name: "them-agent",
      component: AddAgentIns,
    },
    {
      path: "/tao-nhom",
      name: "tao-nhom",
      component: CreatGroupIns,
    }, {
      path: "/tich-hop-kenh-tuong-tac",
      name: "tich-hop-kenh-tuong-tac",
      component: AddChanelIns,
    }, {
      path: "/tich-hop-kenh-tuong-tac/zalo",
      name: "tich-hop-kenh-tuong-tac Zalo",
      component: ConnectZaloIns,
    }, {
      path: "/tich-hop-kenh-tuong-tac/web",
      name: "tich-hop-kenh-tuong-tac Web",
      component: ConnectWebIns,
    }, {
      path: "/tich-hop-kenh-tuong-tac/facebook",
      name: "tich-hop-kenh-tuong-tac Facebook",
      component: ConnectFacebookIns,
    }, {
      path: "/tao-nhan",
      name: "tao-nhan",
      component: CreatLabelIns,
    }, {
      path: "/tao-tin-nhan-mau",
      name: "tao-tin-nhan-mau",
      component: CreateModelIns,
    }, {
      path: "/livestream",
      name: "livestream",
      component: LivestreamIns,
    }, {
      path: "/thuoc-tinh-tuy-chinh",
      name: "thuoc-tinh-tuy-chinh",
      component: CustomPropertiesIns,
    }, {
      path: "/cau-hinh-tu-dong",
      name: "cau-hinh-tu-dong",
      component: AutoConfigIns,
    }, {
      path: "/tich-hop-ung-dung",
      name: "tich-hop-ung-dung",
      component: AppIns,
    }, {
      path: "/thiet-lap-sla",
      name: "thiet-lap-sla",
      component: SlaIns,
    }, {
      path: "/cai-dat",
      name: "cai-dat",
      component: AccountSettingsIns,
    }, {
      path: "/bao-cao",
      name: "bao-cao",
      component: ReportIns,
    }, {
      path: "/them-lien-lac",
      name: "them-lien-lac",
      component: AddAgentIns,
    }, {
      path: "/cuoc-hoi-thoai",
      name: "cuoc-hoi-thoai",
      component: AddAgentIns,
    },

  ],
});

export default router;
