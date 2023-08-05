import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
    name: g.string().length({ min: 2, max: 20 }),
    emaiil: g.string().unique(),
    avatarUrl: g.url(),
    description: g.string().optional(),
    gitHubUrl: g.url().optional(),
    linkedInUrl: g.url(),
    projects: g.relation(() => Project.list().optional()),
});

const Project = g.model("Project", {
    name: g.string().length({ min: 3 }),
    description: g.string().optional(),
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
