import { Owner } from "../../core/models/owner.model";

export const OWNER: Owner = {
    fullName: "Fayssoil Said",
    skills: [
        {
            id: "sk01",
            name: "HTML5",
            percent_of_progress: 95,
            logo: {
                logoUrl: "skills_logo/html5.png"
            }
        },
        {
            id: "sk02",
            name: "CSS3",
            percent_of_progress: 95,
            logo: {
                logoUrl: "skills_logo/css3.png"
            }
        },
        {
            id: "sk03",
            name: "JavaScript",
            percent_of_progress: 80,
            logo: {
                logoUrl: "skills_logo/js.png"
            }
        },
        {
            id: "sk04",
            name: "TypeScript",
            percent_of_progress: 75,
            logo: {
                logoUrl: "skills_logo/ts.png"
            }
        },
        {
            id: "sk05",
            name: "Angular",
            percent_of_progress: 75,
            logo: {
                logoUrl: "skills_logo/angular.jpeg"
            }
        },
        {
            id: "sk06",
            name: "Sass(scss)",
            percent_of_progress: 90,
            logo: {
                logoUrl: "skills_logo/sass.png"
            }
        }

    ]
}