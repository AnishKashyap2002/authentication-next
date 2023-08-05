import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
    name: g.string().length({ min: 3, max: 20 }),
    email: g.email(),
    avatarUrl: g.url(),
    description: g.string().optional(),
    gitHubUrl: g.url().optional(),
    linikedInUrl: g.url(),
    projects: g.relation(() => Project).list(),
});

const Project = g.model("Project", {
    title: g.string().length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteUrl: g.url(),
    gitHubUrl: g.url(),
    category: g.string().search(),
    createdBy: g.relation(() => User),
});
export default config({
    schema: g,
    // Integrate Auth
    // https://grafbase.com/docs/auth
    // auth: {
    //   providers: [authProvider],
    //   rules: (rules) => {
    //     rules.private()
    //   }
    // }
});
