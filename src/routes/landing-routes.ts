import { RouteRecordRaw } from "vue-router";
import { RouterName } from "./router-name";

const landingRoutes: Array<RouteRecordRaw> = [
    {
        path: RouterName.main,
        name: "welcome",
        component: () => import("../pages/landing/welcome/welcome.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.about,
        name: "about",
        component: () => import("../pages/landing/about/about.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.ourImpact,
        name: "our-impact",
        component: () => import("../pages/landing/impact/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.capitalInvestment,
        name: "our-impact/capital-invesment",
        component: () => import("../pages/landing/impact-ci/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.epc,
        name: "our-impact/epc",
        component: () => import("../pages/landing/impact-epc/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.renewableEnergy,
        name: "our-impact/renewable-energy",
        component: () => import("../pages/landing/impact-re/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.industrial,
        name: "our-impact/industrial",
        component: () => import("../pages/landing/impact-ind/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.integratedTelecomunication,
        name: "our-impact/integrated-telecomunication",
        component: () => import("../pages/landing/impact-it/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.realEstateProperty,
        name: "our-impact/real-estate-property",
        component: () => import("../pages/landing/impact-rep/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.developer,
        name: "our-impact/developer",
        component: () => import("../pages/landing/impact-dev/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.researchDevelopment,
        name: "our-impact/research-developer",
        component: () => import("../pages/landing/impact-rd/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.legal,
        name: "our-impact/business-compliance-and-legal-advisory",
        component: () => import("../pages/landing/impact-bcla/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.assetManagement,
        name: "our-impact/asset-management",
        component: () => import("../pages/landing/impact-am/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.supplyChain,
        name: "our-impact/supply-chain",
        component: () => import("../pages/landing/impact-sc/impact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.businessHightlights,
        name: "business",
        component: () => import("../pages/landing/business/business.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.sustainability,
        name: "sustainability",
        component: () => import("../pages/landing/sustainability/sustainability.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.sustainabilityCommitment,
        name: "sustainability/comment",
        component: () => import("../pages/landing/sustainability-com/sustainability.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.sustainabilityStrategic,
        name: "sustainability/strategic",
        component: () => import("../pages/landing/sustainability-str/sustainability.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.sustainabilityPartnerships,
        name: "sustainability/partnerships",
        component: () => import("../pages/landing/sustainability-par/sustainability.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.media,
        name: "media",
        component: () => import("../pages/landing/media/media.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: `${RouterName.mediaPreview}/:id`,
        name: "media/preview",
        component: () => import("../pages/landing/media-preview/media.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.mediaMarketing,
        name: "media/marketing",
        component: () => import("../pages/landing/media-marketing/media.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.contact,
        name: "contact",
        component: () => import("../pages/landing/contact/contact.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.career,
        name: "career",
        component: () => import("../pages/landing/career/career.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.careerList,
        name: "career/list",
        component: () => import("../pages/landing/career-list/career.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: RouterName.careerExplore,
        name: "career/explore",
        component: () => import("../pages/landing/career-explore/career.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

];

export default landingRoutes;