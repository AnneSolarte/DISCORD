interface DataShape {
    img: {
        online: string;
        offline: string;
        dontDist: string;
    }
    name: string;
    mood: string;

}

const DataFriends: DataShape[] = [
    {
    img: {
            online: "/src/img/Friend1_online",
            offline: "/src/img/Friend1_onfflinee",
            dontDist: "/src/img/Friend1_dontDist"
    },
    name: "sacuadros09",
    mood: "online",

    },
    {
    img: {
        online: "/src/img/Friend2_online",
        offline: "/src/img/Friend2_onfflinee",
        dontDist: "/src/img/Friend2_dontDist"
    },
    name: "alejaor72",
    mood: "online"
    },
    {
    img: {
        online: "/src/img/Friend3_online",
        offline: "/src/img/Friend3_onfflinee",
        dontDist: "/src/img/Friend3_dontDist"
    },
    name: "david73",
    mood: "offline"
    },
    {
    img: {
        online: "/src/img/Friend4_online",
        offline: "/src/img/Friend4_onfflinee",
        dontDist: "/src/img/Friend4_dontDist"
    },
    name: "Videocheese3773",
    mood: "offline"
    },
    {
    img: {
        online: "/src/img/Friend5_online",
        offline: "/src/img/Friend5_onfflinee",
        dontDist: "/src/img/Friend5_dontDist"
    },
    name: "Caticats",
    mood: "offline"
    },
    {
    img: {
        online: "/src/img/Friend6_online",
        offline: "/src/img/Friend6_onfflinee",
        dontDist: "/src/img/Friend6_dontDist"
    },
    name: "Kookie727",
    mood: "offline"
    }
];

export default DataFriends;