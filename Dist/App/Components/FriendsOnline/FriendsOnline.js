export var FriendsOnAtt;
(function (FriendsOnAtt) {
    FriendsOnAtt["img"] = "img";
    FriendsOnAtt["name"] = "name";
})(FriendsOnAtt || (FriendsOnAtt = {}));
class FriendsOnline extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            name: null,
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
                <div class="FriendsOnlineDiv">
                    <img class="friendsOnImg" src="${this.img}online.png">
                    <p class="FriendsOnName">${this.name}</p>
                </div>
                `;
        }
    }
}
customElements.define("friends-online", FriendsOnline);
export default FriendsOnline;
