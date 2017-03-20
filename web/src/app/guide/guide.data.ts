export default {
    tree: {
        "id": "main",
        "title": "Menu",
        "root": true,
        "path": "home.html",
        "sections": [{
                "id": "main-overview",
                "title": "Overview",
                "path": "overview.html",
                "sections": [{
                        "id": "main-overview-solution",
                        "title": "Solution",
                        "path": "overview/solution.html"
                    },
                    {
                        "id": "main-overview-project",
                        "title": "Project",
                        "path": "overview/project.html"
                    },
                    {
                        "id": "main-overview-bootstrap",
                        "title": "Bootstrap",
                        "path": "overview/bootstrap.html"
                    },
                    {
                        "id": "main-overview-modules",
                        "title": "Modules",
                        "path": "overview/modules.html"
                    },
                    {
                        "id": "main-overview-services",
                        "title": "Services",
                        "path": "overview/services.html"
                    }
                ]
            },
            {
                "title": 'Data Integration',
                "path": 'data.html',
                "id": 'main-data',
                "sections": [{
                        "title": 'Basics',
                        "path": 'data/basics.html',
                        "id": 'main-data-basics'
                    },
                    {
                        "title": 'Client side',
                        "path": 'data/client-side.html',
                        "id": 'main-data-cs'
                    },
                    {
                        "title": 'Server Side',
                        "path": 'data/server-side.html',
                        "id": 'main-data-ss'
                    },
                    {
                        "title": 'Security',
                        "path": 'data/security.html',
                        "id": 'main-data-security'
                    },
                    {
                        "title": 'Adding external data sources',
                        "path": 'data/adding-data-sources.html',
                        "id": 'main-data-external'
                    }
                ]
            },
            {
                "title": 'Authentication',
                "path": 'authentication.html',
                "id": 'main-auth',
                "sections": [{
                        "title": 'Default Mechanism',
                        "path": 'authentication/default.html',
                        "id": 'main-auth-default'
                    },
                    {
                        "title": 'Custom Authentication',
                        "path": 'authentication/custom.html',
                        "id": 'main-auth-custom'
                    },
                    {
                        "title": 'Custom Session Management',
                        "path": 'authentication/custom-session-management.html',
                        "id": 'main-auth-custom-session-management'
                    }
                ]
            },
            {
                "id": "main-http",
                "title": "HTTP",
                "path": "http.html"
            },
            {
                "id": "main-workers",
                "title": "Workers",
                "path": "threads.html"
            }
        ]
    }
};