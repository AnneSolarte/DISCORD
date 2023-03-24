import "./Components/Export.js";

import DataServers from "./Components/Servers/DataServers.js";
import Servers, { ServerAtt } from "./Components/Servers/Servers.js";

import DataFriends from "./Components/Friends/DataFriendsN.js";
import Friends, { FriendsAtt } from "./Components/Friends/Friends.js";

import FriendsOnline, { FriendsOnAtt } from "./Components/FriendsOnline/FriendsOnline.js";




class AppContainer extends HTMLElement {
    ServersList: Servers[] = [];
    FriendsList: Friends[] = [];
    FriendsOnList: FriendsOnline[] = [];



    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        DataServers.forEach((data) => {
            const ServersCard = this.ownerDocument.createElement("my-servers") as Servers;
                ServersCard.setAttribute(ServerAtt.img, data.img);
                this.ServersList.push(ServersCard);
        });

        DataFriends.forEach((data) => {
            const FriendsCard = this.ownerDocument.createElement("my-friends") as Friends;
                FriendsCard.setAttribute(FriendsAtt.img, data.img);
                FriendsCard.setAttribute(FriendsAtt.name, data.name);
                FriendsCard.setAttribute(FriendsAtt.mood, data.mood);
                this.FriendsList.push(FriendsCard);
        });

        const DataFriendsOnline = DataFriends.filter((user)=>{
            return user.mood === "online"
        })

        DataFriendsOnline.forEach((data) => {
            const FriendsOnCard = this.ownerDocument.createElement("friends-online") as FriendsOnline;
                FriendsOnCard.setAttribute(FriendsOnAtt.img, data.img);
                FriendsOnCard.setAttribute(FriendsOnAtt.name, data.name);
                this.FriendsOnList.push(FriendsOnCard);
        });

    }

    connectedCallback() {
        this.render();
    }

    render() {

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./App/index.css">
            `;
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <section class="Section1">

            </section>

            `;
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <section class="Section2">
                <div class="section2Div">
                    <p id="textBlock1">Find or start a conversation</p>
                    <img id="imgLine" src="/src/img/line.png">
                    <div class="textBlock2">
                        <img class="friendsIcon1"src="/src/img/friends.png"
                        <p>Friends</p>
                    </div>
                    <div class="section2Div2">
                        <p>DIRECT MESSAGES</p>
                        <img id="masIcon"src="/src/img/mas.png">
                    </div>
                </div>
            </section>

            `;
        }

        const ServersCards = this.ownerDocument.createElement("div")
        ServersCards.className = 'ServerSection'
        this.ServersList.forEach((ServersCard) => {
            ServersCards.appendChild(ServersCard)
        });
        this.shadowRoot?.appendChild(ServersCards);

        const FriendsCards = this.ownerDocument.createElement("div")
        FriendsCards.className = 'FriendSection'
        this.FriendsList.forEach((FriendsCard) => {
            FriendsCards.appendChild(FriendsCard)
        });
        this.shadowRoot?.appendChild(FriendsCards);

        const FriendsOnCards = this.ownerDocument.createElement("div")
        FriendsOnCards.className = 'FriendOnSection'
        this.FriendsOnList.forEach((FriendsOnCard) => {
            FriendsOnCards.appendChild(FriendsOnCard)
        });
        this.shadowRoot?.appendChild(FriendsOnCards);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <section class="Section3">
                <div class="Section3Div">
                    <div class="section3Bar">
                        <img class="friendsIcon2" src="/src/img/friends.png">
                        <p>Friends</p>
                        <img id="lineVertImg" src="/src/img/LineVertical.png">
                        <p class="block" id="blockGray">All</p>
                        <p class="block" >Pending</p>
                        <p class="block" id="blockBlue">Add Friend</p>
                    </div>

                </div>
                <div class="SectionList">
                    <p class="searchBar">Search<img src=""></p>
                    <p>ONLINE --</p>
                </div>

            </section>

            `;
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <section class="Section4">
                <div class="sectionUser">
                    <img id="userImg" src="/src/img/user.png">
                    <div class="sectionUserData">
                        <p class="userText">Anne Sunart</p>
                        <p class="userText">#3357</p>
                    </div>
                    <img id="configImg" src="/src/img/config.png">
                </div>

            </section>

            `;
        }

    }


}

customElements.define("app-container", AppContainer);