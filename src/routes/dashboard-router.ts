import { RouteRecordRaw } from "vue-router";
import { RouterName } from "./router-name";

const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: RouterName.login,
        name: "login",
        component: () => import("../pages/landing/auth/login.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.adminDashboard,
        name: "dashboard",
        component: () => import("../pages/dashboard/board/board.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.adminBusiness,
        name: "admin-business",
        component: () => import("../pages/dashboard/business/business.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.adminProduct,
        name: "admin-product",
        component: () => import("../pages/dashboard/product/product.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.adminNews,
        name: "admin-news",
        component: () => import("../pages/dashboard/news/news.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.adminQuestion,
        name: "admin-question",
        component: () => import("../pages/dashboard/question/question.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

    {
        path: RouterName.adminAssets,
        name: "admin-asset",
        component: () => import("../pages/dashboard/asset/asset.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

    {
        path: RouterName.adminCareer,
        name: "admin-career",
        component: () => import("../pages/dashboard/career/career.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

    {
        path: RouterName.adminCareerApply,
        name: "admin-career-apply",
        component: () => import("../pages/dashboard/career-apply/career-apply.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

    {
        path: RouterName.adminSettings,
        name: "admin-setting",
        component: () => import("../pages/dashboard/setting/setting.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

];

export default DashboardRoutes;