import { ref } from "vue";
import landingLanguage from "../../../utils/language/landing-language";
import { getLocalLanguage } from "../../../utils/storage/local-storage";
import { RouterName } from "../../../routes/router-name";

export interface NavbarIF {
    name: string;
    path: string;
    icon: string;
    sub: boolean;
}

const language = landingLanguage[getLocalLanguage().key]['navbar'];
const menu = ref<NavbarIF[]>([
    {
        name: language[1],
        path: RouterName.about,
        icon: "",
        sub: false
    },
    {
        name: language[2],
        path: RouterName.ourImpact,
        icon: "",
        sub: true
    },
    {
        name: language[3],
        path: RouterName.businessHightlights,
        icon: "",
        sub: false
    },
    {
        name: language[4],
        path: RouterName.sustainability,
        icon: "",
        sub: true
    },
    {
        name: language[5],
        path: RouterName.media,
        icon: "",
        sub: true
    },
    {
        name: language[6],
        path: RouterName.contact,
        icon: "",
        sub: false
    },
    {
        name: language[7],
        path: RouterName.career,
        icon: "",
        sub: true
    },
]);

export default menu;