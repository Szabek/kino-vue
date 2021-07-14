export default [
    {
        _name: 'CSidebarNav',
        _children: [
            {
                _name: 'CSidebarNavItem',
                name: 'Dashboard',
                to: '/dashboard',
                icon: 'cil-speedometer',
                badge: {
                    color: 'primary',
                    text: 'NEW'
                }
            },
            {
                _name: 'CSidebarNavTitle',
                _children: ['MANAGEMENT']
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Movies',
                to: {name: "Movies"},
                icon: 'cil-calculator'
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Categories',
                to: {name: "Categories"},
                icon: 'cil-drop'
            },
            {
                _name: 'CSidebarNavItem',
                name: 'Rooms',
                to: {name: "Rooms"},
                icon: 'cil-speedometer'
            },
            {
                _name: 'CSidebarNavDropdown',
                name: 'Screenings',
                route: '/screenings',
                icon: 'cil-star',
                items: [
                    {
                        name: 'Add',
                        to: {name: "Screenings-add"},
                    },
                    {
                        name: 'Show',
                        to: {name: "Screenings-show"},
                    },
                ]
            },
        ]
    }
]
