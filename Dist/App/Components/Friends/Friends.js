export var FriendsAtt;
(function (FriendsAtt) {
    FriendsAtt["img"] = "img";
    FriendsAtt["name"] = "name";
    FriendsAtt["mood"] = "mood";
})(FriendsAtt || (FriendsAtt = {}));
class Friends extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            name: null,
            mood: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propimg, _, newValue) {
        switch (propimg) {
            default:
                this[propimg] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./App/index.css">
                <div class="FriendsDiv">
                    <img class="friendsImg" src="${this.img}${this.mood}.png">
                    <p class="FriendsName">${this.name}</p>
                </div>
                `;
        }
    }
}
customElements.define("my-friends", Friends);
export default Friends;
