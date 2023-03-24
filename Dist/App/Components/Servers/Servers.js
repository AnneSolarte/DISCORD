export var ServerAtt;
(function (ServerAtt) {
    ServerAtt["img"] = "img";
})(ServerAtt || (ServerAtt = {}));
class Servers extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
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
                <div class="serversDiv">
                    <img class="serverImg" src="${this.img}">
                </div>
                `;
        }
    }
}
customElements.define("my-servers", Servers);
export default Servers;
