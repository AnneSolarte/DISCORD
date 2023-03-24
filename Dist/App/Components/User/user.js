export var UserAtt;
(function (UserAtt) {
    UserAtt["img"] = "img";
    UserAtt["name"] = "name";
    UserAtt["uid"] = "uid";
})(UserAtt || (UserAtt = {}));
class User extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            name: null,
            uid: null
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
                <div class="sectionUser">
                    <img id="userImg" src="${this.img}">
                    <div class="sectionUserData">
                        <p class="userText">${this.name}</p>
                        <p class="userText">${this.uid}</p>
                    </div>
                    <img id="configImg" src="/src/img/config.png">
                </div>
                `;
        }
    }
}
customElements.define("my-user", User);
export default User;
