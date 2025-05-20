import { watch } from "vue"
import { useRoute } from "vue-router"
import useApi from "../helpers/use-api"

export function useAnalytics() {
    const route = useRoute()

    const api = new useApi()

    watch(
        () => route.fullPath,
        (newPath) => {
            let title = route.path.split('/')?.[1]
            if (!title) title = '/'

            api.post({
                path: `analytic`, body: {
                    path: route.fullPath,
                    title,
                    views: 1,
                }
            }, true).then((res) => {
            }).catch((res) => {
                console.log(res);
            }).finally(() => { });
        },
        { immediate: true }
    )
}