export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Home Page",
                url: "/",
                icon: "home.svg"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg"
            }
        ]
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "users",
                url: "/users",
                icon: "user.svg"
            },
            {
                id: 2,
                title: "products",
                url: "/products",
                icon: "product.svg"
            },
            {
                id: 3,
                title: "orders",
                url: "/orders",
                icon: "order.svg"
            },
            {
                id: 4,
                title: "posts",
                url: "/posts",
                icon: "post2.svg"
            },
        ]
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "elements",
                url: "/",
                icon: "element.svg"
            },
            {
                id: 2,
                title: "notes",
                url: "",
                icon: "note.svg"
            },
            {
                id: 3,
                title: "forms",
                url: "",
                icon: "form.svg"
            },
            {
                id: 4,
                title: "calender",
                url: "",
                icon: "calendar.svg"
            },
        ]
    },
    {
        id: 4,
        title: "mentainanace",
        listItems: [
            {
                id: 1,
                title: "settings",
                url: "/",
                icon: "settings.svg"
            },
            {
                id: 2,
                title: "backups",
                url: "",
                icon: "backup.svg"
            },
           
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "charts",
                url: "/",
                icon: "chart.svg"
            },
            {
                id: 2,
                title: "logs",
                url: "",
                icon: "log.svg"
            },
           
        ]
    },
];

export const topDealUsers = [
    {
        id: 1,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
    {
        id: 2,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
    {
        id: 3,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
    {
        id: 4,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
    {
        id: 5,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
    {
        id: 6,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
    {
        id: 7,
        img: "/user.jpg",
        username: " charles daniel",
        email: "cd@mail.com",
        amount:"3.668"
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "$11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        {name:"Sun",users:400},
        {name:"Mon",users:600},
        {name:"Tue",users:500},
        {name:"Wed",users:700},
        {name:"Thu",users:400},
        {name:"Fri",users:500},
        {name:"Sat",users:450},
    ]
}

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "$238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        {name:"Sun",products:400},
        {name:"Mon",products:600},
        {name:"Tue",products:500},
        {name:"Wed",products:700},
        {name:"Thu",products:400},
        {name:"Fri",products:500},
        {name:"Sat",products:450},
    ]
}

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        {name:"Sun",revenue:400},
        {name:"Mon",revenue:600},
        {name:"Tue",revenue:500},
        {name:"Wed",revenue:700},
        {name:"Thu",revenue:400},
        {name:"Fri",revenue:500},
        {name:"Sat",revenue:450},
    ]
}

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "$2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        {name:"Sun",ratio:400},
        {name:"Mon",ratio:600},
        {name:"Tue",ratio:500},
        {name:"Wed",ratio:700},
        {name:"Thu",ratio:400},
        {name:"Fri",ratio:500},
        {name:"Sat",ratio:450},
    ]
}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
   chartData: [
        {name:"Sun",visit:400},
        {name:"Mon",visit:600},
        {name:"Tue",visit:500},
        {name:"Wed",visit:700},
        {name:"Thu",visit:400},
        {name:"Fri",visit:500},
        {name:"Sat",visit:450},
    ]
}
export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#FF8042",
    dataKey: "profit",
   chartData: [
        {name:"Sun",profit:400},
        {name:"Mon",profit:600},
        {name:"Tue",profit:500},
        {name:"Wed",profit:700},
        {name:"Thu",profit:400},
        {name:"Fri",profit:500},
        {name:"Sat",profit:450},
    ]
}