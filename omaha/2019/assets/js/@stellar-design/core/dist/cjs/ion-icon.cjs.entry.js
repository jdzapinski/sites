'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

let CACHED_MAP;
function getIconMap() {
    if (!CACHED_MAP) {
        const win = window;
        win.Ionicons = win.Ionicons || {};
        CACHED_MAP = win.Ionicons.map = win.Ionicons.map || new Map();
    }
    return CACHED_MAP;
}
function getName(name, mode, ios, md) {
    mode = (mode || 'md').toLowerCase();
    mode = mode === 'ios' ? 'ios' : 'md';
    if (ios && mode === 'ios') {
        name = ios.toLowerCase();
    }
    else if (md && mode === 'md') {
        name = md.toLowerCase();
    }
    else if (name) {
        name = name.toLowerCase();
        if (!/^md-|^ios-|^logo-/.test(name)) {
            name = `${mode}-${name}`;
        }
    }
    if (typeof name !== 'string' || name.trim() === '') {
        return null;
    }
    const invalidChars = name.replace(/[a-z]|-|\d/gi, '');
    if (invalidChars !== '') {
        return null;
    }
    return name;
}
function getSrc(src) {
    if (typeof src === 'string') {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
}
function isSrc(str) {
    return str.length > 0 && /(\/|\.)/.test(str);
}
function isValid(elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (typeof val === 'string' && val.toLowerCase().indexOf('on') === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
}

const Icon = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.isVisible = false;
        this.lazy = false;
        this.isServer = core.getContext(this, "isServer");
        this.resourcesUrl = core.getContext(this, "resourcesUrl");
        this.doc = core.getContext(this, "document");
        this.win = core.getContext(this, "window");
    }
    componentWillLoad() {
        this.waitUntilVisible(this.el, '50px', () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    componentDidUnload() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if (this.lazy && this.win && this.win.IntersectionObserver) {
            const io = this.io = new this.win.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin });
            io.observe(el);
        }
        else {
            cb();
        }
    }
    loadIcon() {
        if (!this.isServer && this.isVisible) {
            const url = this.getUrl();
            if (url) {
                getSvgContent(this.doc, url, 's-ion-icon')
                    .then(svgContent => this.svgContent = svgContent);
            }
            else {
                console.error('icon was not resolved');
            }
        }
        if (!this.ariaLabel) {
            const name = getName(this.getName(), this.mode, this.ios, this.md);
            if (name) {
                this.ariaLabel = name
                    .replace('ios-', '')
                    .replace('md-', '')
                    .replace(/\-/g, ' ');
            }
        }
    }
    getName() {
        if (this.name !== undefined) {
            return this.name;
        }
        if (this.icon && !isSrc(this.icon)) {
            return this.icon;
        }
        return undefined;
    }
    getUrl() {
        let url = getSrc(this.src);
        if (url) {
            return url;
        }
        url = getName(this.getName(), this.mode, this.ios, this.md);
        if (url) {
            return this.getNamedUrl(url);
        }
        url = getSrc(this.icon);
        if (url) {
            return url;
        }
        return null;
    }
    getNamedUrl(name) {
        const url = getIconMap().get(name);
        if (url) {
            return url;
        }
        return `${this.resourcesUrl}svg/${name}.svg`;
    }
    hostData() {
        const mode = this.mode || 'md';
        const flipRtl = this.flipRtl || (this.ariaLabel && this.ariaLabel.indexOf('arrow') > -1 && this.flipRtl !== false);
        return {
            'role': 'img',
            class: Object.assign({ [`${mode}`]: true }, createColorClasses(this.color), { [`icon-${this.size}`]: !!this.size, 'flip-rtl': flipRtl && this.doc.dir === 'rtl' })
        };
    }
    __stencil_render() {
        if (!this.isServer && this.svgContent) {
            return core.h("div", { class: "icon-inner", innerHTML: this.svgContent });
        }
        return core.h("div", { class: "icon-inner" });
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "icon": ["loadIcon"],
        "name": ["loadIcon"],
        "src": ["loadIcon"]
    }; }
    render() { return core.h(core.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner,svg{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"; }
};
const requests = new Map();
function getSvgContent(doc, url, scopedId) {
    let req = requests.get(url);
    if (!req) {
        req = fetch(url, { cache: 'force-cache' }).then(rsp => {
            if (isStatusValid(rsp.status)) {
                return rsp.text();
            }
            return Promise.resolve(null);
        }).then(svgContent => validateContent(doc, svgContent, scopedId));
        requests.set(url, req);
    }
    return req;
}
function isStatusValid(status) {
    return status <= 299;
}
function validateContent(document, svgContent, scopeId) {
    if (svgContent) {
        const frag = document.createDocumentFragment();
        const div = document.createElement('div');
        div.innerHTML = svgContent;
        frag.appendChild(div);
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            if (scopeId) {
                svgElm.setAttribute('class', scopeId);
            }
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
}
function createColorClasses(color) {
    return (color) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : null;
}

exports.ion_icon = Icon;