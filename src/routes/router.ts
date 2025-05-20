import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import landingRoutes from "./landing-routes";
import DashboardRoutes from "./dashboard-router";

const routes: Array<RouteRecordRaw> = [
    ...landingRoutes,
    ...DashboardRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;