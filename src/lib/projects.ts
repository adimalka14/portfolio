export const projects = {
    frontend: [
        {
            title: "Clothing Store Demo",
            stack: ["React 19", "Redux Toolkit", "MUI", "Storybook", "Formik", "Yup"],
            features: [
                "SPA with theme toggling (dark/light, RTL/LTR)",
                "Responsive layout",
                "Mock API via json-server"
            ],
            demo: "https://clothing-order-demo.netlify.app",
            github: "https://github.com/adimalka14/clothing-order-demo",
            image: "/projects/clothing-store.png"
        },
        {
            title: "MUI Skill Demo",
            stack: ["React 19", "MUI", "Storybook 9", "i18next"],
            features: [
                "Wrapped MUI components",
                "i18n (EN/HE)",
                "RTL/LTR theme support",
                "Storybook toolbar integration"
            ],
            demo: "https://mui-skill-demo.netlify.app",
            github: "https://github.com/adimalka14/mui-skill-demo",
            image: "/projects/mui-skill.png"
        },
        {
            title: "Redux Shape Picker",
            stack: ["React", "Redux Toolkit", "SCSS", "Storybook"],
            features: [
                "Live shape/color rendering",
                "Global state via Redux",
                "Storybook component testing"
            ],
            demo: "https://redux-shape-picker.netlify.app",
            github: "https://github.com/adimalka14/redux-shape-picker",
            image: "/projects/redux-shape-picker.png"
        },
        {
            title: "Color Game",
            stack: ["React", "SCSS", "useReducer"],
            features: [
                "Responsive design",
                "Difficulty progression",
                "Custom hooks",
                "Dark/Light themes"
            ],
            demo: "https://adimalka14.github.io/grid-color-game/",
            github: "https://github.com/adimalka14/grid-color-game",
            image: "/projects/color-game.png"
        }
    ],

    backend: [
        {
            title: "Authentication System with JWT",
            stack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
            features: [
                "HttpOnly cookies for refresh tokens",
                "Security via Helmet, rate limiting",
                "Swagger docs",
                "Full test coverage"
            ],
            github: "https://github.com/adimalka14/auth-server-jwt",
            image: "/projects/auth-server.png"
        },
        {
            title: "Dog Adapters",
            stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Swagger", "Passport"],
            features: [
                "User & dog management",
                "Filtering, pagination, logging",
                "Modular architecture",
                "Full Swagger & test coverage"
            ],
            github: "https://github.com/adimalka14/dog-adapters",
            image: "/projects/dog-adopters.png"
        }
    ],

    fullstack: [
        {
            title: "Battleship Game",
            stack: ["Express", "WebSocket", "jQuery", "SCSS"],
            features: [
                "Multiplayer real-time gameplay",
                "Drag & drop UI",
                "WebSocket-based room system"
            ],
            demo: "https://battleship11.netlify.app",
            github: "https://github.com/adimalka14/battleship-game",
            image: "/projects/battleship-game.png"
        }
    ],

    npmPackages: [
        {
            title: "my-awesome-react-timer",
            description: "Custom React timer hook + component with SVG progress and warning colors.",
            //demo: "https://adimalka14.github.io/timer-component/storybook-static",
            github: "https://github.com/adimalka14/timer-component",
            image: "/projects/timer.png"
        },
        {
            title: "my-awesome-react-digital-clock",
            description: "Configurable React digital clock with timezone, format and themes.",
            demo: "https://adimalka14.github.io/digital-clock-component",
            github: "https://github.com/adimalka14/digital-clock-component",
            image: "/projects/digital-clock.png"
        }
    ],

    games: [
        {
            title: "Hangman Game",
            stack: ["HTML", "SCSS", "JavaScript (ES6)", "jQuery"],
            features: ["MVC pattern", "OOP", "Jest tests"],
            demo: "https://adimalka14.github.io/Hangman-game/",
            github: "https://github.com/adimalka14/hangman-game",
            image: "/projects/hangman-game.png"
        },
        {
            title: "Rock Paper Scissors",
            stack: ["HTML", "SCSS", "JavaScript"],
            features: ["MVC pattern", "Responsive design"],
            demo: "https://adimalka14.github.io/rock-paper-scissors/",
            github: "https://github.com/adimalka14/rock-paper-scissors",
            image: "/projects/rock-paper-scissors.png"
        }
    ]
};
