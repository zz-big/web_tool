!(function () {
    'use strict';

    function e(e) {
        var t = Object.create(null);
        return function (n) {
            return t[n] || (t[n] = e(n))
        }
    }

    function t(e) {
        return typeof e === 'string' || typeof e === 'number'
    }

    function n() {
    }

    function r(e) {
        return typeof e === 'function'
    }

    function i(e) {
        var t = ['init', 'mounted', 'beforeEach', 'afterEach', 'doneEach', 'ready'];
        e._hooks = {}, e._lifecycle = {}, t.forEach(function (t) {
            var n = e._hooks[t] = [];
            e._lifecycle[t] = function (e) {
                return n.push(e)
            }
        })
    }

    function o(e, t, r, i) {
        void 0 === i && (i = n);
        var o = e._hooks[t], a = function (e) {
            var t = o[e];
            if (e >= o.length) i(r); else if (typeof t === 'function') if (t.length === 2) t(r, function (t) {
                r = t, a(e + 1)
            }); else {
                var n = t(r);
                r = void 0 !== n ? n : r, a(e + 1)
            } else a(e + 1)
        };
        a(0)
    }

    function a(e, t) {
        if (void 0 === t && (t = !1), typeof e === 'string') {
            if (void 0 !== window.Vue) return s(e);
            e = t ? s(e) : pe[e] || (pe[e] = s(e))
        }
        return e
    }

    function s(e, t) {
        return t ? e.querySelector(t) : de.querySelector(e)
    }

    function l(e, t) {
        return [].slice.call(t ? e.querySelectorAll(t) : de.querySelectorAll(e))
    }

    function c(e, t) {
        return e = de.createElement(e), t && (e.innerHTML = t), e
    }

    function u(e, t) {
        return e.appendChild(t)
    }

    function h(e, t) {
        return e.insertBefore(t, e.children[0])
    }

    function p(e, t, n) {
        r(t) ? window.addEventListener(e, t) : e.addEventListener(t, n)
    }

    function d(e, t, n) {
        r(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n)
    }

    function g(e, t, n) {
        e && e.classList[n ? t : 'toggle'](n || t)
    }

    function f(e) {
        u(fe, c('style', e))
    }

    function m(e) {
        return e ? (/\/\//.test(e) || (e = 'https://github.com/' + e), '<a href="' + (e = e.replace(/^git\+/, '')) + '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>') : ''
    }

    function v(e) {
        var t = '<button class="sidebar-toggle"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' + (e.name ? '<h1><a class="app-name-link" data-nosearch>' + e.name + '</a></h1>' : '') + '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>';
        return (ye ? t + '<main>' : '<main>' + t) + '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>'
    }

    function y() {
        var e = ', 100%, 85%';
        return '<section class="cover" style="background: linear-gradient(to left bottom, hsl(' + (Math.floor(255 * Math.random()) + e) + ') 0%,hsl(' + (Math.floor(255 * Math.random()) + e) + ') 100%)"><div class="cover-main"></div><div class="mask"></div></section>'
    }

    function b(e, t) {
        return void 0 === t && (t = ''), e && e.length ? (e.forEach(function (e) {
            t += '<li><a class="section-link" href="' + e.slug + '">' + e.title + '</a></li>', e.children && (t += '<li><ul class="children">' + b(e.children) + '</li></ul>')
        }), t) : ''
    }

    function k(e, t) {
        return '<p class="' + e + '">' + t.slice(5).trim() + '</p>'
    }

    function w(e) {
        return '<style>:root{--theme-color: ' + e + ';}</style>'
    }

    function x() {
        var e = c('div');
        e.classList.add('progress'), u(ge, e), ue = e
    }

    function _(e, t) {
        void 0 === t && (t = !1);
        var r = new XMLHttpRequest(), i = function () {
            r.addEventListener.apply(r, arguments)
        }, o = we[e];
        return o ? {
            then: function (e) {
                return e(o.content, o.opt)
            }, abort: n
        } : (r.open('GET', e), r.send(), {
            then: function (o, a) {
                if (void 0 === a && (a = n), t) {
                    var s = setInterval(function (e) {
                        return ke({step: Math.floor(5 * Math.random() + 1)})
                    }, 500);
                    i('progress', ke), i('loadend', function (e) {
                        ke(e), clearInterval(s)
                    })
                }
                i('error', a), i('load', function (t) {
                    var n = t.target;
                    if (n.status >= 400) a(n); else {
                        var i = we[e] = {content: n.response, opt: {updatedAt: r.getResponseHeader('last-modified')}};
                        o(i.content, i.opt)
                    }
                })
            }, abort: function (e) {
                return r.readyState !== 4 && r.abort()
            }
        })
    }

    function S(e, t) {
        e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t)
    }

    function C(e, t) {
        return t = {exports: {}}, e(t, t.exports), t.exports
    }

    function L(e, t) {
        var n = [], r = {};
        return e.forEach(function (e) {
            var i = e.level || 1, o = i - 1;
            i > t || (r[o] ? r[o].children = (r[o].children || []).concat(e) : n.push(e), r[i] = e)
        }), n
    }

    function E(e) {
        return e.toLowerCase()
    }

    function $(e) {
        if (typeof e !== 'string') return '';
        var t = e.trim().replace(/[A-Z]+/g, E).replace(/<[^>\d]+>/g, '').replace(Ae, '').replace(/\s/g, '-').replace(/-+/g, '-').replace(/^(\d)/, '_$1'),
            n = Te[t];
        return n = Te.hasOwnProperty(t) ? n + 1 : 0, Te[t] = n, n && (t = t + '-' + n), t
    }

    function T(e, t) {
        return '<img class="emoji" src="https://assets-cdn.github.com/images/icons/emoji/' + t + '.png" alt="' + t + '" />'
    }

    function A(e) {
        return e.replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function (e) {
            return e.replace(/:/g, '__colon__')
        }).replace(/:(\w+?):/gi, ve && window.emojify || T).replace(/__colon__/g, ':')
    }

    function P(e) {
        var t = {};
        return (e = e.trim().replace(/^(\?|#|&)/, '')) ? (e.split('&').forEach(function (e) {
            var n = e.replace(/\+/g, ' ').split('=');
            t[n[0]] = n[1] && Pe(n[1])
        }), t) : t
    }

    function O(e) {
        var t = [];
        for (var n in e) t.push(e[n] ? (Oe(n) + '=' + Oe(e[n])).toLowerCase() : Oe(n));
        return t.length ? '?' + t.join('&') : ''
    }

    function j() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        return qe(e.join('/'))
    }

    function M(e, t) {
        var n = function (e) {
            return ge.classList.toggle('close')
        };
        e = a(e), p(e, 'click', function (e) {
            e.stopPropagation(), n()
        });
        var r = a('.sidebar');
        ye && p(ge, 'click', function (e) {
            return ge.classList.contains('close') && n()
        }), p(r, 'click', function (e) {
            return setTimeout(0)
        })
    }

    function q() {
        var e = a('section.cover');
        if (e) {
            var t = e.getBoundingClientRect().height;
            window.pageYOffset >= t || e.classList.contains('hidden') ? g(ge, 'add', 'sticky') : g(ge, 'remove', 'sticky')
        }
    }

    function N(e, t, n, r) {
        t = a(t);
        var i, o = l(t, 'a'), s = e.toURL(e.getCurrentPath());
        return o.sort(function (e, t) {
            return t.href.length - e.href.length
        }).forEach(function (e) {
            var t = e.getAttribute('href'), r = n ? e.parentNode : e;
            s.indexOf(t) !== 0 || i ? g(r, 'remove', 'active') : (i = e, g(r, 'add', 'active'))
        }), r && (de.title = i ? i.innerText + ' - ' + Fe : Fe), i
    }

    function R(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function F(e) {
        De && De.stop(), We = !1, De = new Be({
            start: window.scrollY,
            end: e.getBoundingClientRect().top + window.scrollY,
            duration: 500
        }).on('tick', function (e) {
            return window.scrollTo(0, e)
        }).on('done', function () {
            We = !0, De = null
        }).begin()
    }

    function H() {
        if (We) {
            for (var e, t = a('.sidebar'), n = l('.anchor'), r = s(t, '.sidebar-nav'), i = s(t, 'li.active'), o = document.documentElement, c = (o && o.scrollTop || document.body.scrollTop) - Ue, u = 0, h = n.length; u < h; u += 1) {
                var p = n[u];
                if (p.offsetTop > c) {
                    e || (e = p);
                    break
                }
                e = p
            }
            if (e) {
                var d = Ie[e.getAttribute('data-id')];
                if (d && d !== i && (i && i.classList.remove('active'), d.classList.add('active'), i = d, !ze && ge.classList.contains('sticky'))) {
                    var g = t.clientHeight, f = i.offsetTop + i.clientHeight + 40,
                        m = i.offsetTop >= r.scrollTop && f <= r.scrollTop + g, v = f - 0 < g,
                        y = m ? r.scrollTop : v ? 0 : f - g;
                    t.scrollTop = y
                }
            }
        }
    }

    function B(e) {
        var t = s('.cover.show');
        Ue = t ? t.offsetHeight : 0;
        for (var n = a('.sidebar'), r = l(n, 'li'), i = 0, o = r.length; i < o; i += 1) {
            var c = r[i], u = c.querySelector('a');
            if (u) {
                var h = u.getAttribute('href');
                h !== '/' && (h = e.parse(h).query.id), h && (Ie[decodeURIComponent(h)] = c)
            }
        }
        ye || (d('scroll', H), p('scroll', H), p(n, 'mouseover', function () {
            ze = !0
        }), p(n, 'mouseleave', function () {
            ze = !1
        }))
    }

    function I(e) {
        if (e) {
            var t = s('#' + e);
            t && F(t);
            var n = Ie[e], r = a('.sidebar'), i = s(r, 'li.active');
            i && i.classList.remove('active'), n && n.classList.add('active')
        }
    }

    function z(e) {
        void 0 === e && (e = 0), Ye.scrollTop = !0 === e ? 0 : Number(e)
    }

    function D() {
        var e = l('.markdown-section>script').filter(function (e) {
            return !/template/.test(e.type)
        })[0];
        if (!e) return !1;
        var t = e.innerText.trim();
        if (!t) return !1;
        setTimeout(function (e) {
            window.__EXECUTE_RESULT__ = new Function(t)()
        }, 0)
    }

    function W(e, t, n) {
        return t = typeof n === 'function' ? n(t) : typeof n === 'string' ? Ce(n)(new Date(t)) : t, e.replace(/{docsify-updated}/g, t)
    }

    function U(e) {
        e || (e = 'not found'), this._renderTo('.markdown-section', e), !this.config.loadSidebar && this._renderSidebar(), !1 === this.config.executeScript || void 0 === window.Vue || D() ? this.config.executeScript && D() : setTimeout(function (e) {
            var t = window.__EXECUTE_RESULT__;
            t && t.$destroy && t.$destroy(), window.__EXECUTE_RESULT__ = (new window.Vue()).$mount('#main')
        }, 0)
    }

    function Y(e) {
        var n = a('.app-name-link'), r = e.config.nameLink, i = e.route.path;
        if (n) if (t(e.config.nameLink)) n.setAttribute('href', r); else if (typeof r === 'object') {
            var o = Object.keys(r).filter(function (e) {
                return i.indexOf(e) > -1
            })[0];
            n.setAttribute('href', r[o])
        }
    }

    function Z(e) {
        var t = e.config;
        e.compiler = new Re(t, e.router);
        var n = t.el || '#app', r = s('nav') || c('nav'), i = s(n), o = '', a = ge;
        i ? (t.repo && (o += m(t.repo)), t.coverpage && (o += y()), o += v(t), e._renderTo(i, o, !0)) : e.rendered = !0, t.mergeNavbar && ye ? a = s('.sidebar') : (r.classList.add('app-nav'), t.repo || r.classList.add('no-badge')), h(a, r), t.themeColor && (de.head.appendChild(c('div', w(t.themeColor)).firstElementChild), xe(t.themeColor)), e._updateRender(), g(ge, 'ready')
    }

    function G(e, t, n) {
        var r = Object.keys(t).filter(function (t) {
            return (Ze[t] || (Ze[t] = new RegExp('^' + t + '$'))).test(e) && e !== n
        })[0];
        return r ? G(e.replace(Ze[r], t[r]), t, e) : e
    }

    function X(e) {
        return /\.(md|html)$/g.test(e) ? e : /\/$/g.test(e) ? e + 'README.md' : e + '.md'
    }

    function V(e) {
        var t = location.href.indexOf('#');
        location.replace(location.href.slice(0, t >= 0 ? t : 0) + '#' + e)
    }

    function J(e) {
        e.router.normalize(), e.route = e.router.parse(), ge.setAttribute('data-page', e.route.file)
    }

    function Q(e) {
        var t, n = e.config, r = n.routerMode || 'hash';
        t = r === 'history' && be ? new Je(n) : new Ve(n), e.router = t, J(e), Qe = e.route, t.onchange(function (t) {
            if (J(e), e._updateRender(), Qe.path === e.route.path) return void e.$resetEvents();
            e.$fetch(), Qe = e.route
        })
    }

    function K(e) {
        M('button.sidebar-toggle', e.router), e.config.coverpage ? !ye && p('scroll', q) : ge.classList.add('sticky')
    }

    function ee(e, t, n, r, i) {
        e = i ? e : e.replace(/\/$/, ''), (e = Me(e)) && _(r.router.getFile(e + t)).then(n, function (i) {
            return ee(e, t, n, r)
        })
    }

    function te(e) {
        var t = e.config, n = t.loadSidebar;
        if (e.rendered) {
            var r = N(e.router, '.sidebar-nav', !0, !0);
            n && r && (r.parentNode.innerHTML += window.__SUB_SIDEBAR__), e._bindEventOnRendered(r), e._fetchCover(), e.$resetEvents(), o(e, 'doneEach'), o(e, 'ready')
        } else e.$fetch(function (t) {
            return o(e, 'ready')
        })
    }

    function ne(e) {
        [].concat(e.config.plugins).forEach(function (t) {
            return r(t) && t(e._lifecycle, e)
        })
    }

    function re() {
        this._init()
    }

    var ie = e(function (e) {
            return e.replace(/([A-Z])/g, function (e) {
                return '-' + e.toLowerCase()
            })
        }), oe = Object.assign || function (e) {
            for (var t = arguments, n = Object.prototype.hasOwnProperty, r = 1; r < arguments.length; r++) {
                var i = Object(t[r]);
                for (var o in i) n.call(i, o) && (e[o] = i[o])
            }
            return e
        }, ae = oe({
            el: '#app',
            repo: '',
            maxLevel: 6,
            subMaxLevel: 0,
            loadSidebar: null,
            loadNavbar: null,
            homepage: 'README.md',
            coverpage: '',
            basePath: '',
            auto2top: !1,
            name: '',
            themeColor: '',
            nameLink: window.location.pathname,
            autoHeader: !1,
            executeScript: null,
            noEmoji: !1,
            ga: '',
            mergeNavbar: !1,
            formatUpdated: '',
            externalLinkTarget: '_blank',
            routerMode: 'hash',
            noCompileLinks: []
        }, window.$docsify),
        se = document.currentScript || [].slice.call(document.getElementsByTagName('script')).filter(function (e) {
            return /docsify\./.test(e.src)
        })[0];
    if (se) {
        for (var le in ae) {
            var ce = se.getAttribute('data-' + ie(le));
            t(ce) && (ae[le] = ce === '' || ce)
        }
        !0 === ae.loadSidebar && (ae.loadSidebar = '_sidebar.md'), !0 === ae.loadNavbar && (ae.loadNavbar = '_navbar.md'), !0 === ae.coverpage && (ae.coverpage = '_coverpage.md'), !0 === ae.repo && (ae.repo = ''), !0 === ae.name && (ae.name = '')
    }
    window.$docsify = ae;
    var ue, he, pe = {}, de = document, ge = de.body, fe = de.head, me = Object.freeze({
            getNode: a,
            $: de,
            body: ge,
            head: fe,
            find: s,
            findAll: l,
            create: c,
            appendTo: u,
            before: h,
            on: p,
            off: d,
            toggleClass: g,
            style: f
        }), ve = typeof window !== 'undefined', ye = ve && document.body.clientWidth <= 600, be = ve && (function () {
            return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
        }()), ke = function (e) {
            var t, n = e.loaded, r = e.total, i = e.step;
            !ue && x(), i ? (t = parseInt(ue.style.width || 0, 10) + i, t = t > 80 ? 80 : t) : t = Math.floor(n / r * 100), ue.style.opacity = 1, ue.style.width = t >= 95 ? '100%' : t + '%', t >= 95 && (clearTimeout(he), he = setTimeout(function (e) {
                ue.style.opacity = 0, ue.style.width = '0%'
            }, 200))
        }, we = {}, xe = function (e) {
            if (!(window.CSS && window.CSS.supports && window.CSS.supports('(--v:red)'))) {
                var t = l('style:not(.inserted),link');
                [].forEach.call(t, function (t) {
                    if (t.nodeName === 'STYLE') S(t, e); else if (t.nodeName === 'LINK') {
                        var n = t.getAttribute('href');
                        if (!/\.css$/.test(n)) return;
                        _(n).then(function (t) {
                            var n = c('style', t);
                            fe.appendChild(n), S(n, e)
                        })
                    }
                })
            }
        }, _e = /([^{]*?)\w(?=\})/g, Se = {
            YYYY: 'getFullYear', YY: 'getYear', MM: function (e) {
                return e.getMonth() + 1
            }, DD: 'getDate', HH: 'getHours', mm: 'getMinutes', ss: 'getSeconds'
        }, Ce = function (e) {
            var t = [], n = 0;
            return e.replace(_e, function (r, i, o) {
                t.push(e.substring(n, o - 1)), n = o += r.length + 1, t.push(function (e) {
                    return ('00' + (typeof Se[r] === 'string' ? e[Se[r]]() : Se[r](e))).slice(-r.length)
                })
            }), n !== e.length && t.push(e.substring(n)), function (e) {
                for (var n = '', r = 0, i = e || new Date(); r < t.length; r++) n += typeof t[r] === 'string' ? t[r] : t[r](i);
                return n
            }
        },
        Le = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {},
        Ee = C(function (e, t) {
            (function () {
                function t(e) {
                    this.tokens = [], this.tokens.links = {}, this.options = e || u.defaults, this.rules = h.normal, this.options.gfm && (this.options.tables ? this.rules = h.tables : this.rules = h.gfm)
                }

                function n(e, t) {
                    if (this.options = t || u.defaults, this.links = e, this.rules = p.normal, this.renderer = this.options.renderer || new r(), this.renderer.options = this.options, !this.links) throw new Error('Tokens array requires a `links` property.');
                    this.options.gfm ? this.options.breaks ? this.rules = p.breaks : this.rules = p.gfm : this.options.pedantic && (this.rules = p.pedantic)
                }

                function r(e) {
                    this.options = e || {}
                }

                function i(e) {
                    this.tokens = [], this.token = null, this.options = e || u.defaults, this.options.renderer = this.options.renderer || new r(), this.renderer = this.options.renderer, this.renderer.options = this.options
                }

                function o(e, t) {
                    return e.replace(t ? /&/g : /&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
                }

                function a(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (e, t) {
                        return t = t.toLowerCase(), t === 'colon' ? ':' : t.charAt(0) === '#' ? t.charAt(1) === 'x' ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ''
                    })
                }

                function s(e, t) {
                    return e = e.source, t = t || '', function n(r, i) {
                        return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, '$1'), e = e.replace(r, i), n) : new RegExp(e, t)
                    }
                }

                function l() {
                }

                function c(e) {
                    for (var t, n, r = arguments, i = 1; i < arguments.length; i++) {
                        t = r[i];
                        for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }

                function u(e, n, r) {
                    if (r || typeof n === 'function') {
                        r || (r = n, n = null), n = c({}, u.defaults, n || {});
                        var a, s, l = n.highlight, h = 0;
                        try {
                            a = t.lex(e, n)
                        } catch (e) {
                            return r(e)
                        }
                        s = a.length;
                        var p = function (e) {
                            if (e) return n.highlight = l, r(e);
                            var t;
                            try {
                                t = i.parse(a, n)
                            } catch (t) {
                                e = t
                            }
                            return n.highlight = l, e ? r(e) : r(null, t)
                        };
                        if (!l || l.length < 3) return p();
                        if (delete n.highlight, !s) return p();
                        for (; h < a.length; h++) !(function (e) {
                            e.type !== 'code' ? --s || p() : l(e.text, e.lang, function (t, n) {
                                return t ? p(t) : n == null || n === e.text ? --s || p() : (e.text = n, e.escaped = !0, void (--s || p()))
                            })
                        }(a[h]))
                    } else try {
                        return n && (n = c({}, u.defaults, n)), i.parse(t.lex(e, n), n)
                    } catch (e) {
                        if (e.message += '\nPlease report this to https://github.com/chjj/marked.', (n || u.defaults).silent) return '<p>An error occured:</p><pre>' + o(e.message + '', !0) + '</pre>';
                        throw e
                    }
                }

                var h = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: l,
                    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    nptable: l,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                    table: l,
                    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                    text: /^[^\n]+/
                };
                h.bullet = /(?:[*+-]|\d+\.)/, h.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, h.item = s(h.item, 'gm')(/bull/g, h.bullet)(), h.list = s(h.list)(/bull/g, h.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + h.def.source + ')')(), h.blockquote = s(h.blockquote)('def', h.def)(), h._tag = '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b', h.html = s(h.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, h._tag)(), h.paragraph = s(h.paragraph)('hr', h.hr)('heading', h.heading)('lheading', h.lheading)('blockquote', h.blockquote)('tag', '<' + h._tag)('def', h.def)(), h.normal = c({}, h), h.gfm = c({}, h.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }), h.gfm.paragraph = s(h.paragraph)('(?!', '(?!' + h.gfm.fences.source.replace('\\1', '\\2') + '|' + h.list.source.replace('\\1', '\\3') + '|')(), h.tables = c({}, h.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                }), t.rules = h, t.lex = function (e, n) {
                    return new t(n).lex(e)
                }, t.prototype.lex = function (e) {
                    return e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n'), this.token(e, !0)
                }, t.prototype.token = function (e, t, n) {
                    for (var r, i, o, a, s, l, c, u, p, d = this, e = e.replace(/^ +$/gm, ''); e;) if ((o = d.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && d.tokens.push({type: 'space'})), o = d.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ''), d.tokens.push({
                        type: 'code',
                        text: d.options.pedantic ? o : o.replace(/\n+$/, '')
                    }); else if (o = d.rules.fences.exec(e)) e = e.substring(o[0].length), d.tokens.push({
                        type: 'code',
                        lang: o[2],
                        text: o[3] || ''
                    }); else if (o = d.rules.heading.exec(e)) e = e.substring(o[0].length), d.tokens.push({
                        type: 'heading',
                        depth: o[1].length,
                        text: o[2]
                    }); else if (t && (o = d.rules.nptable.exec(e))) {
                        for (e = e.substring(o[0].length), l = {
                            type: 'table',
                            header: o[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                            align: o[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                            cells: o[3].replace(/\n$/, '').split('\n')
                        }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = 'right' : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = 'center' : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = 'left' : l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].split(/ *\| */);
                        d.tokens.push(l)
                    } else if (o = d.rules.lheading.exec(e)) e = e.substring(o[0].length), d.tokens.push({
                        type: 'heading',
                        depth: o[2] === '=' ? 1 : 2,
                        text: o[1]
                    }); else if (o = d.rules.hr.exec(e)) e = e.substring(o[0].length), d.tokens.push({type: 'hr'}); else if (o = d.rules.blockquote.exec(e)) e = e.substring(o[0].length), d.tokens.push({type: 'blockquote_start'}), o = o[0].replace(/^ *> ?/gm, ''), d.token(o, t, !0), d.tokens.push({type: 'blockquote_end'}); else if (o = d.rules.list.exec(e)) {
                        for (e = e.substring(o[0].length), a = o[2], d.tokens.push({
                            type: 'list_start',
                            ordered: a.length > 1
                        }), o = o[0].match(d.rules.item), r = !1, p = o.length, u = 0; u < p; u++) l = o[u], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ''), ~l.indexOf('\n ') && (c -= l.length, l = d.options.pedantic ? l.replace(/^ {1,4}/gm, '') : l.replace(new RegExp('^ {1,' + c + '}', 'gm'), '')), d.options.smartLists && u !== p - 1 && (s = h.bullet.exec(o[u + 1])[0], a === s || a.length > 1 && s.length > 1 || (e = o.slice(u + 1).join('\n') + e, u = p - 1)), i = r || /\n\n(?!\s*$)/.test(l), u !== p - 1 && (r = l.charAt(l.length - 1) === '\n', i || (i = r)), d.tokens.push({type: i ? 'loose_item_start' : 'list_item_start'}), d.token(l, !1, n), d.tokens.push({type: 'list_item_end'});
                        d.tokens.push({type: 'list_end'})
                    } else if (o = d.rules.html.exec(e)) e = e.substring(o[0].length), d.tokens.push({
                        type: d.options.sanitize ? 'paragraph' : 'html',
                        pre: !d.options.sanitizer && (o[1] === 'pre' || o[1] === 'script' || o[1] === 'style'),
                        text: o[0]
                    }); else if (!n && t && (o = d.rules.def.exec(e))) e = e.substring(o[0].length), d.tokens.links[o[1].toLowerCase()] = {
                        href: o[2],
                        title: o[3]
                    }; else if (t && (o = d.rules.table.exec(e))) {
                        for (e = e.substring(o[0].length), l = {
                            type: 'table',
                            header: o[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                            align: o[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                            cells: o[3].replace(/(?: *\| *)?\n$/, '').split('\n')
                        }, u = 0; u < l.align.length; u++) /^ *-+: *$/.test(l.align[u]) ? l.align[u] = 'right' : /^ *:-+: *$/.test(l.align[u]) ? l.align[u] = 'center' : /^ *:-+ *$/.test(l.align[u]) ? l.align[u] = 'left' : l.align[u] = null;
                        for (u = 0; u < l.cells.length; u++) l.cells[u] = l.cells[u].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
                        d.tokens.push(l)
                    } else if (t && (o = d.rules.paragraph.exec(e))) e = e.substring(o[0].length), d.tokens.push({
                        type: 'paragraph',
                        text: o[1].charAt(o[1].length - 1) === '\n' ? o[1].slice(0, -1) : o[1]
                    }); else if (o = d.rules.text.exec(e)) e = e.substring(o[0].length), d.tokens.push({
                        type: 'text',
                        text: o[0]
                    }); else if (e) throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
                    return this.tokens
                };
                var p = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
                    url: l,
                    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: l,
                    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
                };
                p._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, p._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, p.link = s(p.link)('inside', p._inside)('href', p._href)(), p.reflink = s(p.reflink)('inside', p._inside)(), p.normal = c({}, p), p.pedantic = c({}, p.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                }), p.gfm = c({}, p.normal, {
                    escape: s(p.escape)('])', '~|])')(),
                    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: s(p.text)(']|', '~]|')('|', '|https?://|')()
                }), p.breaks = c({}, p.gfm, {
                    br: s(p.br)('{2,}', '*')(),
                    text: s(p.gfm.text)('{2,}', '*')()
                }), n.rules = p, n.output = function (e, t, r) {
                    return new n(t, r).output(e)
                }, n.prototype.output = function (e) {
                    for (var t, n, r, i, a = this, s = ''; e;) if (i = a.rules.escape.exec(e)) e = e.substring(i[0].length), s += i[1]; else if (i = a.rules.autolink.exec(e)) e = e.substring(i[0].length), i[2] === '@' ? (n = i[1].charAt(6) === ':' ? a.mangle(i[1].substring(7)) : a.mangle(i[1]), r = a.mangle('mailto:') + n) : (n = o(i[1]), r = n), s += a.renderer.link(r, null, n); else if (a.inLink || !(i = a.rules.url.exec(e))) {
                        if (i = a.rules.tag.exec(e)) !a.inLink && /^<a /i.test(i[0]) ? a.inLink = !0 : a.inLink && /^<\/a>/i.test(i[0]) && (a.inLink = !1), e = e.substring(i[0].length), s += a.options.sanitize ? a.options.sanitizer ? a.options.sanitizer(i[0]) : o(i[0]) : i[0]; else if (i = a.rules.link.exec(e)) e = e.substring(i[0].length), a.inLink = !0, s += a.outputLink(i, {
                            href: i[2],
                            title: i[3]
                        }), a.inLink = !1; else if ((i = a.rules.reflink.exec(e)) || (i = a.rules.nolink.exec(e))) {
                            if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, ' '), !(t = a.links[t.toLowerCase()]) || !t.href) {
                                s += i[0].charAt(0), e = i[0].substring(1) + e;
                                continue
                            }
                            a.inLink = !0, s += a.outputLink(i, t), a.inLink = !1
                        } else if (i = a.rules.strong.exec(e)) e = e.substring(i[0].length), s += a.renderer.strong(a.output(i[2] || i[1])); else if (i = a.rules.em.exec(e)) e = e.substring(i[0].length), s += a.renderer.em(a.output(i[2] || i[1])); else if (i = a.rules.code.exec(e)) e = e.substring(i[0].length), s += a.renderer.codespan(o(i[2], !0)); else if (i = a.rules.br.exec(e)) e = e.substring(i[0].length), s += a.renderer.br(); else if (i = a.rules.del.exec(e)) e = e.substring(i[0].length), s += a.renderer.del(a.output(i[1])); else if (i = a.rules.text.exec(e)) e = e.substring(i[0].length), s += a.renderer.text(o(a.smartypants(i[0]))); else if (e) throw new Error('Infinite loop on byte: ' + e.charCodeAt(0))
                    } else e = e.substring(i[0].length), n = o(i[1]), r = n, s += a.renderer.link(r, null, n);
                    return s
                }, n.prototype.outputLink = function (e, t) {
                    var n = o(t.href), r = t.title ? o(t.title) : null;
                    return e[0].charAt(0) !== '!' ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, o(e[1]))
                }, n.prototype.smartypants = function (e) {
                    return this.options.smartypants ? e.replace(/---/g, '—').replace(/--/g, '–').replace(/(^|[-\u2014\/(\[{"\s])'/g, '$1‘').replace(/'/g, '’').replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, '$1“').replace(/"/g, '”').replace(/\.{3}/g, '…') : e
                }, n.prototype.mangle = function (e) {
                    if (!this.options.mangle) return e;
                    for (var t, n = '', r = e.length, i = 0; i < r; i++) t = e.charCodeAt(i), Math.random() > 0.5 && (t = 'x' + t.toString(16)), n += '&#' + t + ';';
                    return n
                }, r.prototype.code = function (e, t, n) {
                    if (this.options.highlight) {
                        var r = this.options.highlight(e, t);
                        r != null && r !== e && (n = !0, e = r)
                    }
                    return t ? '<pre><code class="' + this.options.langPrefix + o(t, !0) + '">' + (n ? e : o(e, !0)) + '\n</code></pre>\n' : '<pre><code>' + (n ? e : o(e, !0)) + '\n</code></pre>'
                }, r.prototype.blockquote = function (e) {
                    return '<blockquote>\n' + e + '</blockquote>\n'
                }, r.prototype.html = function (e) {
                    return e
                }, r.prototype.heading = function (e, t, n) {
                    return '<h' + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, '-') + '">' + e + '</h' + t + '>\n'
                }, r.prototype.hr = function () {
                    return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
                }, r.prototype.list = function (e, t) {
                    var n = t ? 'ol' : 'ul';
                    return '<' + n + '>\n' + e + '</' + n + '>\n'
                }, r.prototype.listitem = function (e) {
                    return '<li>' + e + '</li>\n'
                }, r.prototype.paragraph = function (e) {
                    return '<p>' + e + '</p>\n'
                }, r.prototype.table = function (e, t) {
                    return '<table>\n<thead>\n' + e + '</thead>\n<tbody>\n' + t + '</tbody>\n</table>\n'
                }, r.prototype.tablerow = function (e) {
                    return '<tr>\n' + e + '</tr>\n'
                }, r.prototype.tablecell = function (e, t) {
                    var n = t.header ? 'th' : 'td';
                    return (t.align ? '<' + n + ' style="text-align:' + t.align + '">' : '<' + n + '>') + e + '</' + n + '>\n'
                }, r.prototype.strong = function (e) {
                    return '<strong>' + e + '</strong>'
                }, r.prototype.em = function (e) {
                    return '<em>' + e + '</em>'
                }, r.prototype.codespan = function (e) {
                    return '<code>' + e + '</code>'
                }, r.prototype.br = function () {
                    return this.options.xhtml ? '<br/>' : '<br>'
                }, r.prototype.del = function (e) {
                    return '<del>' + e + '</del>'
                }, r.prototype.link = function (e, t, n) {
                    if (this.options.sanitize) {
                        try {
                            var r = decodeURIComponent(a(e)).replace(/[^\w:]/g, '').toLowerCase()
                        } catch (e) {
                            return ''
                        }
                        if (r.indexOf('javascript:') === 0 || r.indexOf('vbscript:') === 0) return ''
                    }
                    var i = '<a href="' + e + '"';
                    return t && (i += ' title="' + t + '"'), i += '>' + n + '</a>'
                }, r.prototype.image = function (e, t, n) {
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? '/>' : '>'
                }, r.prototype.text = function (e) {
                    return e
                }, i.parse = function (e, t, n) {
                    return new i(t, n).parse(e)
                }, i.prototype.parse = function (e) {
                    var t = this;
                    this.inline = new n(e.links, this.options, this.renderer), this.tokens = e.reverse();
                    for (var r = ''; this.next();) r += t.tok();
                    return r
                }, i.prototype.next = function () {
                    return this.token = this.tokens.pop()
                }, i.prototype.peek = function () {
                    return this.tokens[this.tokens.length - 1] || 0
                }, i.prototype.parseText = function () {
                    for (var e = this, t = this.token.text; this.peek().type === 'text';) t += '\n' + e.next().text;
                    return this.inline.output(t)
                }, i.prototype.tok = function () {
                    var e = this;
                    switch (this.token.type) {
                        case 'space':
                            return '';
                        case 'hr':
                            return this.renderer.hr();
                        case 'heading':
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                        case 'code':
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                        case 'table':
                            var t, n, r, i, o = '', a = '';
                            for (r = '', t = 0; t < this.token.header.length; t++) ({
                                header: !0,
                                align: e.token.align[t]
                            }), r += e.renderer.tablecell(e.inline.output(e.token.header[t]), {
                                header: !0,
                                align: e.token.align[t]
                            });
                            for (o += this.renderer.tablerow(r), t = 0; t < this.token.cells.length; t++) {
                                for (n = e.token.cells[t], r = '', i = 0; i < n.length; i++) r += e.renderer.tablecell(e.inline.output(n[i]), {
                                    header: !1,
                                    align: e.token.align[i]
                                });
                                a += e.renderer.tablerow(r)
                            }
                            return this.renderer.table(o, a);
                        case 'blockquote_start':
                            for (var a = ''; this.next().type !== 'blockquote_end';) a += e.tok();
                            return this.renderer.blockquote(a);
                        case 'list_start':
                            for (var a = '', s = this.token.ordered; this.next().type !== 'list_end';) a += e.tok();
                            return this.renderer.list(a, s);
                        case 'list_item_start':
                            for (var a = ''; this.next().type !== 'list_item_end';) a += e.token.type === 'text' ? e.parseText() : e.tok();
                            return this.renderer.listitem(a);
                        case 'loose_item_start':
                            for (var a = ''; this.next().type !== 'list_item_end';) a += e.tok();
                            return this.renderer.listitem(a);
                        case 'html':
                            var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                            return this.renderer.html(l);
                        case 'paragraph':
                            return this.renderer.paragraph(this.inline.output(this.token.text));
                        case 'text':
                            return this.renderer.paragraph(this.parseText())
                    }
                }, l.exec = l, u.options = u.setOptions = function (e) {
                    return c(u.defaults, e), u
                }, u.defaults = {
                    gfm: !0,
                    tables: !0,
                    breaks: !1,
                    pedantic: !1,
                    sanitize: !1,
                    sanitizer: null,
                    mangle: !0,
                    smartLists: !1,
                    silent: !1,
                    highlight: null,
                    langPrefix: 'lang-',
                    smartypants: !1,
                    headerPrefix: '',
                    renderer: new r(),
                    xhtml: !1
                }, u.Parser = i, u.parser = i.parse, u.Renderer = r, u.Lexer = t, u.lexer = t.lex, u.InlineLexer = n, u.inlineLexer = n.output, u.parse = u, e.exports = u
            }).call(function () {
                return this || (typeof window !== 'undefined' ? window : Le)
            }())
        }), $e = C(function (e) {
            var t = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self : {},
                n = (function () {
                    var e = /\blang(?:uage)?-(\w+)\b/i, n = 0, r = t.Prism = {
                        util: {
                            encode: function (e) {
                                return e instanceof i ? new i(e.type, r.util.encode(e.content), e.alias) : r.util.type(e) === 'Array' ? e.map(r.util.encode) : e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ')
                            }, type: function (e) {
                                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                            }, objId: function (e) {
                                return e.__id || Object.defineProperty(e, '__id', {value: ++n}), e.__id
                            }, clone: function (e) {
                                switch (r.util.type(e)) {
                                    case 'Object':
                                        var t = {};
                                        for (var n in e) e.hasOwnProperty(n) && (t[n] = r.util.clone(e[n]));
                                        return t;
                                    case 'Array':
                                        return e.map && e.map(function (e) {
                                            return r.util.clone(e)
                                        })
                                }
                                return e
                            }
                        },
                        languages: {
                            extend: function (e, t) {
                                var n = r.util.clone(r.languages[e]);
                                for (var i in t) n[i] = t[i];
                                return n
                            }, insertBefore: function (e, t, n, i) {
                                i = i || r.languages;
                                var o = i[e];
                                if (arguments.length == 2) {
                                    n = arguments[1];
                                    for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);
                                    return o
                                }
                                var s = {};
                                for (var l in o) if (o.hasOwnProperty(l)) {
                                    if (l == t) for (var a in n) n.hasOwnProperty(a) && (s[a] = n[a]);
                                    s[l] = o[l]
                                }
                                return r.languages.DFS(r.languages, function (t, n) {
                                    n === i[e] && t != e && (this[t] = s)
                                }), i[e] = s
                            }, DFS: function (e, t, n, i) {
                                i = i || {};
                                for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], n || o), r.util.type(e[o]) !== 'Object' || i[r.util.objId(e[o])] ? r.util.type(e[o]) !== 'Array' || i[r.util.objId(e[o])] || (i[r.util.objId(e[o])] = !0, r.languages.DFS(e[o], t, o, i)) : (i[r.util.objId(e[o])] = !0, r.languages.DFS(e[o], t, null, i)))
                            }
                        },
                        plugins: {},
                        highlightAll: function (e, t) {
                            var n = {
                                callback: t,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            r.hooks.run('before-highlightall', n);
                            for (var i, o = n.elements || document.querySelectorAll(n.selector), a = 0; i = o[a++];) r.highlightElement(i, !0 === e, n.callback)
                        },
                        highlightElement: function (n, i, o) {
                            for (var a, s, l = n; l && !e.test(l.className);) l = l.parentNode;
                            l && (a = (l.className.match(e) || [, ''])[1].toLowerCase(), s = r.languages[a]), n.className = n.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + a, l = n.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + a);
                            var c = n.textContent, u = {element: n, language: a, grammar: s, code: c};
                            if (r.hooks.run('before-sanity-check', u), !u.code || !u.grammar) return u.code && (u.element.textContent = u.code), void r.hooks.run('complete', u);
                            if (r.hooks.run('before-highlight', u), i && t.Worker) {
                                var h = new Worker(r.filename);
                                h.onmessage = function (e) {
                                    u.highlightedCode = e.data, r.hooks.run('before-insert', u), u.element.innerHTML = u.highlightedCode, o && o.call(u.element), r.hooks.run('after-highlight', u), r.hooks.run('complete', u)
                                }, h.postMessage(JSON.stringify({language: u.language, code: u.code, immediateClose: !0}))
                            } else u.highlightedCode = r.highlight(u.code, u.grammar, u.language), r.hooks.run('before-insert', u), u.element.innerHTML = u.highlightedCode, o && o.call(n), r.hooks.run('after-highlight', u), r.hooks.run('complete', u)
                        },
                        highlight: function (e, t, n) {
                            var o = r.tokenize(e, t);
                            return i.stringify(r.util.encode(o), n)
                        },
                        tokenize: function (e, t, n) {
                            var i = r.Token, o = [e], a = t.rest;
                            if (a) {
                                for (var s in a) t[s] = a[s];
                                delete t.rest
                            }
                            e:for (var s in t) if (t.hasOwnProperty(s) && t[s]) {
                                var l = t[s];
                                l = r.util.type(l) === 'Array' ? l : [l];
                                for (var c = 0; c < l.length; ++c) {
                                    var u = l[c], h = u.inside, p = !!u.lookbehind, d = !!u.greedy, g = 0, f = u.alias;
                                    if (d && !u.pattern.global) {
                                        var m = u.pattern.toString().match(/[imuy]*$/)[0];
                                        u.pattern = RegExp(u.pattern.source, m + 'g')
                                    }
                                    u = u.pattern || u;
                                    for (var v = 0, y = 0; v < o.length; y += o[v].length, ++v) {
                                        var b = o[v];
                                        if (o.length > e.length) break e;
                                        if (!(b instanceof i)) {
                                            u.lastIndex = 0;
                                            var k = u.exec(b), w = 1;
                                            if (!k && d && v != o.length - 1) {
                                                if (u.lastIndex = y, !(k = u.exec(e))) break;
                                                for (var x = k.index + (p ? k[1].length : 0), _ = k.index + k[0].length, S = v, C = y, L = o.length; S < L && C < _; ++S) C += o[S].length, x >= C && (++v, y = C);
                                                if (o[v] instanceof i || o[S - 1].greedy) continue;
                                                w = S - v, b = e.slice(y, C), k.index -= y
                                            }
                                            if (k) {
                                                p && (g = k[1].length);
                                                var x = k.index + g, k = k[0].slice(g), _ = x + k.length, E = b.slice(0, x),
                                                    $ = b.slice(_), T = [v, w];
                                                E && T.push(E);
                                                var A = new i(s, h ? r.tokenize(k, h) : k, f, k, d);
                                                T.push(A), $ && T.push($), Array.prototype.splice.apply(o, T)
                                            }
                                        }
                                    }
                                }
                            }
                            return o
                        },
                        hooks: {
                            all: {}, add: function (e, t) {
                                var n = r.hooks.all;
                                n[e] = n[e] || [], n[e].push(t)
                            }, run: function (e, t) {
                                var n = r.hooks.all[e];
                                if (n && n.length) for (var i, o = 0; i = n[o++];) i(t)
                            }
                        }
                    }, i = r.Token = function (e, t, n, r, i) {
                        this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || '').length, this.greedy = !!i
                    };
                    if (i.stringify = function (e, t, n) {
                        if (typeof e === 'string') return e;
                        if (r.util.type(e) === 'Array') return e.map(function (n) {
                            return i.stringify(n, t, e)
                        }).join('');
                        var o = {
                            type: e.type,
                            content: i.stringify(e.content, t, n),
                            tag: 'span',
                            classes: ['token', e.type],
                            attributes: {},
                            language: t,
                            parent: n
                        };
                        if (o.type == 'comment' && (o.attributes.spellcheck = 'true'), e.alias) {
                            var a = r.util.type(e.alias) === 'Array' ? e.alias : [e.alias];
                            Array.prototype.push.apply(o.classes, a)
                        }
                        r.hooks.run('wrap', o);
                        var s = Object.keys(o.attributes).map(function (e) {
                            return e + '="' + (o.attributes[e] || '').replace(/"/g, '&quot;') + '"'
                        }).join(' ');
                        return '<' + o.tag + ' class="' + o.classes.join(' ') + '"' + (s ? ' ' + s : '') + '>' + o.content + '</' + o.tag + '>'
                    }, !t.document) return t.addEventListener ? (t.addEventListener('message', function (e) {
                        var n = JSON.parse(e.data), i = n.language, o = n.code, a = n.immediateClose;
                        t.postMessage(r.highlight(o, r.languages[i], i)), a && t.close()
                    }, !1), t.Prism) : t.Prism;
                    var o = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop();
                    return o && (r.filename = o.src, document.addEventListener && !o.hasAttribute('data-manual') && (document.readyState !== 'loading' ? window.requestAnimationFrame ? window.requestAnimationFrame(r.highlightAll) : window.setTimeout(r.highlightAll, 16) : document.addEventListener('DOMContentLoaded', r.highlightAll))), t.Prism
                }());
            e.exports && (e.exports = n), void 0 !== Le && (Le.Prism = n), n.languages.markup = {
                comment: /<!--[\w\W]*?-->/,
                prolog: /<\?[\w\W]+?\?>/,
                doctype: /<!DOCTYPE[\w\W]+?>/i,
                cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                    inside: {
                        tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
                        'attr-value': {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: {punctuation: /[=>"']/}},
                        punctuation: /\/?>/,
                        'attr-name': {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
                    }
                },
                entity: /&#?[\da-z]{1,8};/i
            }, n.hooks.add('wrap', function (e) {
                e.type === 'entity' && (e.attributes.title = e.content.replace(/&amp;/, '&'))
            }), n.languages.xml = n.languages.markup, n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.css = {
                comment: /\/\*[\w\W]*?\*\//,
                atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
                url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
                selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
                string: {pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                property: /(\b|\B)[\w-]+(?=\s*:)/i,
                important: /\B!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:]/
            }, n.languages.css.atrule.inside.rest = n.util.clone(n.languages.css), n.languages.markup && (n.languages.insertBefore('markup', 'tag', {
                style: {
                    pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
                    lookbehind: !0,
                    inside: n.languages.css,
                    alias: 'language-css'
                }
            }), n.languages.insertBefore('inside', 'attr-value', {
                'style-attr': {
                    pattern: /\s*style=("|').*?\1/i,
                    inside: {
                        'attr-name': {pattern: /^\s*style/i, inside: n.languages.markup.tag.inside},
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        'attr-value': {pattern: /.+/i, inside: n.languages.css}
                    },
                    alias: 'language-css'
                }
            }, n.languages.markup.tag)), n.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
                    lookbehind: !0
                }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
                string: {pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
                'class-name': {
                    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
                    lookbehind: !0,
                    inside: {punctuation: /(\.|\\)/}
                },
                keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(true|false)\b/,
                function: /[a-z0-9_]+(?=\()/i,
                number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
                punctuation: /[{}[\];(),.:]/
            }, n.languages.javascript = n.languages.extend('clike', {
                keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
                number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
                function: /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
            }), n.languages.insertBefore('javascript', 'keyword', {
                regex: {
                    pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
                    lookbehind: !0,
                    greedy: !0
                }
            }), n.languages.insertBefore('javascript', 'string', {
                'template-string': {
                    pattern: /`(?:\\\\|\\?[^\\])*?`/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\$\{[^}]+\}/,
                            inside: {
                                'interpolation-punctuation': {pattern: /^\$\{|\}$/, alias: 'punctuation'},
                                rest: n.languages.javascript
                            }
                        }, string: /[\s\S]+/
                    }
                }
            }), n.languages.markup && n.languages.insertBefore('markup', 'tag', {
                script: {
                    pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
                    lookbehind: !0,
                    inside: n.languages.javascript,
                    alias: 'language-javascript'
                }
            }), n.languages.js = n.languages.javascript, (function () {
                typeof self !== 'undefined' && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function () {
                    var e = {
                        js: 'javascript',
                        py: 'python',
                        rb: 'ruby',
                        ps1: 'powershell',
                        psm1: 'powershell',
                        sh: 'bash',
                        bat: 'batch',
                        h: 'c',
                        tex: 'latex'
                    };
                    Array.prototype.forEach && Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (t) {
                        for (var r, i = t.getAttribute('data-src'), o = t, a = /\blang(?:uage)?-(?!\*)(\w+)\b/i; o && !a.test(o.className);) o = o.parentNode;
                        if (o && (r = (t.className.match(a) || [, ''])[1]), !r) {
                            var s = (i.match(/\.(\w+)$/) || [, ''])[1];
                            r = e[s] || s
                        }
                        var l = document.createElement('code');
                        l.className = 'language-' + r, t.textContent = '', l.textContent = 'Loading…', t.appendChild(l);
                        var c = new XMLHttpRequest();
                        c.open('GET', i, !0), c.onreadystatechange = function () {
                            c.readyState == 4 && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, n.highlightElement(l)) : c.status >= 400 ? l.textContent = '✖ Error ' + c.status + ' while fetching file: ' + c.statusText : l.textContent = '✖ Error: File does not exist or is empty')
                        }, c.send(null)
                    })
                }, document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight))
            }())
        }), Te = {}, Ae = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@\[\]^`{|}~]/g;
    $.clear = function () {
        Te = {}
    };
    var Pe = decodeURIComponent, Oe = encodeURIComponent, je = e(function (e) {
        return /(:|(\/{2}))/g.test(e)
    }), Me = e(function (e) {
        return /\/$/g.test(e) ? e : (e = e.match(/(\S*\/)[^\/]+$/)) ? e[1] : ''
    }), qe = e(function (e) {
        return e.replace(/^\/+/, '/').replace(/([^:])\/{2,}/g, '$1/')
    }), Ne = {}, Re = function (t, n) {
        this.config = t, this.router = n, this.cacheTree = {}, this.toc = [], this.linkTarget = t.externalLinkTarget || '_blank', this.contentBase = n.getBasePath();
        var i, o = this._initRenderer(), a = t.markdown || {};
        r(a) ? i = a(Ee, o) : (Ee.setOptions(oe(a, {renderer: oe(o, a.renderer)})), i = Ee), this.compile = e(function (e) {
            var n = '';
            return e ? (n = i(e), n = t.noEmoji ? n : A(n), $.clear(), n) : e
        })
    };
    Re.prototype.matchNotCompileLink = function (e) {
        for (var t = this.config.noCompileLinks, n = 0; n < t.length; n++) {
            var r = t[n];
            if ((Ne[r] || (Ne[r] = new RegExp('^' + r + '$'))).test(e)) return e
        }
    }, Re.prototype._initRenderer = function () {
        var e = new Ee.Renderer(), t = this, n = t.linkTarget, r = t.router, i = t.contentBase, o = this, a = {};
        return a.heading = e.heading = function (e, t) {
            var n = {level: t, title: e};
            /{docsify-ignore}/g.test(e) && (e = e.replace('{docsify-ignore}', ''), n.title = e, n.ignoreSubHeading = !0), /{docsify-ignore-all}/g.test(e) && (e = e.replace('{docsify-ignore-all}', ''), n.title = e, n.ignoreAllSubs = !0);
            var i = $(e), a = r.toURL(r.getCurrentPath(), {id: i});
            return n.slug = a, o.toc.push(n), '<h' + t + ' id="' + i + '"><a href="' + a + '" data-id="' + i + '" class="anchor"><span>' + e + '</span></a></h' + t + '>'
        }, a.code = e.code = function (e, t) {
            return void 0 === t && (t = ''), '<pre v-pre data-lang="' + t + '"><code class="lang-' + t + '">' + $e.highlight(e, $e.languages[t] || $e.languages.markup) + '</code></pre>'
        }, a.link = e.link = function (e, t, i) {
            var a = '';
            /:|(\/{2})/.test(e) || o.matchNotCompileLink(e) || /(\s?:ignore)(\s\S+)?$/.test(t) ? (a = ' target="' + n + '"', t = t && t.replace(/:ignore/g, '').trim()) : e = r.toURL(e, null, r.getCurrentPath());
            var s = t && t.match(/:target=\w+/);
            return s && (s = s[0], t = t.replace(s, ''), a = ' ' + s.slice(1)), t && (t = ' title="' + t + '"'), '<a href="' + e + '"' + (t || '') + a + '>' + i + '</a>'
        }, a.paragraph = e.paragraph = function (e) {
            return /^!&gt;/.test(e) ? k('tip', e) : /^\?&gt;/.test(e) ? k('warn', e) : '<p>' + e + '</p>'
        }, a.image = e.image = function (e, t, n) {
            var r = e, o = t ? ' title="' + t + '"' : '';
            return je(e) || (r = j(i, e)), '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '"' + o + '>'
        }, e.origin = a, e
    }, Re.prototype.sidebar = function (e, t) {
        var n = this.router.getCurrentPath(), r = '';
        if (e) r = this.compile(e), r = r && r.match(/<ul[^>]*>([\s\S]+)<\/ul>/g)[0]; else {
            var i = this.cacheTree[n] || L(this.toc, t);
            r = b(i, '<ul>'), this.cacheTree[n] = i
        }
        return r
    }, Re.prototype.subSidebar = function (e) {
        if (!e) return void (this.toc = []);
        var t = this.router.getCurrentPath(), n = this, r = n.cacheTree, i = n.toc;
        i[0] && i[0].ignoreAllSubs && (this.toc = []), i[0] && i[0].level === 1 && i.shift(), i.forEach(function (e, t) {
            e.ignoreSubHeading && i.splice(t, 1)
        });
        var o = r[t] || L(i, e);
        return r[t] = o, this.toc = [], b(o, '<ul class="app-sub-sidebar">')
    }, Re.prototype.article = function (e) {
        return this.compile(e)
    }, Re.prototype.cover = function (e) {
        var t = this.toc.slice(), n = this.compile(e);
        return this.toc = t.slice(), n
    };
    var Fe = de.title, He = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()), Be = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                R(this, e), this.duration = t.duration || 1e3, this.ease = t.easing || this._defaultEase, this.start = t.start, this.end = t.end, this.frame = null, this.next = null, this.isRunning = !1, this.events = {}, this.direction = this.start < this.end ? 'up' : 'down'
            }

            return He(e, [{
                key: 'begin', value: function () {
                    return this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this
                }
            }, {
                key: 'stop', value: function () {
                    return window.cancelAnimationFrame(this.frame), this.isRunning = !1, this.frame = null, this.timeStart = null, this.next = null, this
                }
            }, {
                key: 'on', value: function (e, t) {
                    return this.events[e] = this.events[e] || [], this.events[e].push(t), this
                }
            }, {
                key: 'emit', value: function (e, t) {
                    var n = this, r = this.events[e];
                    r && r.forEach(function (e) {
                        return e.call(n, t)
                    })
                }
            }, {
                key: '_tick', value: function (e) {
                    this.isRunning = !0;
                    var t = this.next || this.start;
                    this.timeStart || (this.timeStart = e), this.timeElapsed = e - this.timeStart, this.next = Math.round(this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration)), this._shouldTick(t) ? (this.emit('tick', this.next), this.frame = window.requestAnimationFrame(this._tick.bind(this))) : (this.emit('tick', this.end), this.emit('done', null))
                }
            }, {
                key: '_shouldTick', value: function (e) {
                    return {
                        up: this.next < this.end && e <= this.next,
                        down: this.next > this.end && e >= this.next
                    }[this.direction]
                }
            }, {
                key: '_defaultEase', value: function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                }
            }]), e
        }()), Ie = {}, ze = !1, De = null, We = !0, Ue = 0, Ye = de.scrollingElement || de.documentElement, Ze = {},
        Ge = function (e) {
            this.config = e
        };
    Ge.prototype.getBasePath = function () {
        return this.config.basePath
    }, Ge.prototype.getFile = function (e, t) {
        e = e || this.getCurrentPath();
        var n = this, r = n.config, i = this.getBasePath();
        return e = r.alias ? G(e, r.alias) : e, e = X(e), e = e === '/README.md' ? r.homepage || e : e, e = je(e) ? e : j(i, e), t && (e = e.replace(new RegExp('^' + i), '')), e
    }, Ge.prototype.onchange = function (e) {
        void 0 === e && (e = n), e()
    }, Ge.prototype.getCurrentPath = function () {
    }, Ge.prototype.normalize = function () {
    }, Ge.prototype.parse = function () {
    }, Ge.prototype.toURL = function () {
    };
    var Xe = e(function (e) {
        return e.replace('#', '?id=')
    }), Ve = (function (e) {
        function t(t) {
            e.call(this, t), this.mode = 'hash'
        }

        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getBasePath = function () {
            var e = window.location.pathname || '', t = this.config.basePath;
            return /^(\/|https?:)/g.test(t) ? t : qe(e + '/' + t)
        }, t.prototype.getCurrentPath = function () {
            var e = location.href, t = e.indexOf('#');
            return t === -1 ? '' : e.slice(t + 1)
        }, t.prototype.onchange = function (e) {
            void 0 === e && (e = n), p('hashchange', e)
        }, t.prototype.normalize = function () {
            var e = this.getCurrentPath();
            if (e = Xe(e), e.charAt(0) === '/') return V(e);
            V('/' + e)
        }, t.prototype.parse = function (e) {
            void 0 === e && (e = location.href);
            var t = '', n = e.indexOf('#');
            n && (e = e.slice(n + 1));
            var r = e.indexOf('?');
            return r >= 0 && (t = e.slice(r + 1), e = e.slice(0, r)), {path: e, file: this.getFile(e, !0), query: P(t)}
        }, t.prototype.toURL = function (e, t, n) {
            var r = n && e[0] === '#', i = this.parse(Xe(e));
            return i.query = oe({}, i.query, t), e = i.path + O(i.query), e = e.replace(/\.md(\?)|\.md$/, '$1'), r && (e = n + e), qe('#/' + e)
        }, t
    }(Ge)), Je = (function (e) {
        function t(t) {
            e.call(this, t), this.mode = 'history'
        }

        return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.getCurrentPath = function () {
            var e = this.getBasePath(), t = window.location.pathname;
            return e && t.indexOf(e) === 0 && (t = t.slice(e.length)), (t || '/') + window.location.search + window.location.hash
        }, t.prototype.onchange = function (e) {
            void 0 === e && (e = n), p('click', function (t) {
                var n = t.target.tagName === 'A' ? t.target : t.target.parentNode;
                if (n.tagName === 'A' && !/_blank/.test(n.target)) {
                    t.preventDefault();
                    var r = n.href;
                    window.history.pushState({key: r}, '', r), e()
                }
            }), p('popstate', e)
        }, t.prototype.parse = function (e) {
            void 0 === e && (e = location.href);
            var t = '', n = e.indexOf('?');
            n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n));
            var r = j(location.origin), i = e.indexOf(r);
            return i > -1 && (e = e.slice(i + r.length)), {path: e, file: this.getFile(e), query: P(t)}
        }, t.prototype.toURL = function (e, t, n) {
            var r = n && e[0] === '#', i = this.parse(e);
            return i.query = oe({}, i.query, t), e = i.path + O(i.query), e = e.replace(/\.md(\?)|\.md$/, '$1'), r && (e = n + e), qe('/' + e)
        }, t
    }(Ge)), Qe = {}, Ke = Object.freeze({
        cached: e,
        hyphenate: ie,
        merge: oe,
        isPrimitive: t,
        noop: n,
        isFn: r,
        inBrowser: ve,
        isMobile: ye,
        supportsPushState: be,
        parseQuery: P,
        stringifyQuery: O,
        getPath: j,
        isAbsolutePath: je,
        getParentPath: Me,
        cleanPath: qe
    }), et = re.prototype;
    !(function (e) {
        e._init = function () {
            var e = this;
            e.config = ae || {}, i(e), ne(e), o(e, 'init'), Q(e), Z(e), K(e), te(e), o(e, 'mounted')
        }
    }(et)), (function (e) {
        e.route = {}
    }(et)), (function (e) {
        e._renderTo = function (e, t, n) {
            var r = a(e);
            r && (r[n ? 'outerHTML' : 'innerHTML'] = t)
        }, e._renderSidebar = function (e) {
            var t = this.config, n = t.maxLevel, r = t.subMaxLevel, i = t.loadSidebar;
            this._renderTo('.sidebar-nav', this.compiler.sidebar(e, n));
            var o = N(this.router, '.sidebar-nav', !0, !0);
            i && o ? o.parentNode.innerHTML += this.compiler.subSidebar(r) || '' : this.compiler.subSidebar(), this._bindEventOnRendered(o)
        }, e._bindEventOnRendered = function (e) {
            var t = this.config, n = t.autoHeader, r = t.auto2top;
            if (B(this.router), n && e) {
                var i = a('#main'), o = i.children[0];
                if (o && o.tagName !== 'H1') {
                    var s = c('h1');
                    s.innerText = e.innerText, h(i, s)
                }
            }
            r && z(r)
        }, e._renderNav = function (e) {
            e && this._renderTo('nav', this.compiler.compile(e)), N(this.router, 'nav')
        }, e._renderMain = function (e, t) {
            var n = this;
            if (void 0 === t && (t = {}), !e) return U.call(this, e);
            o(this, 'beforeEach', e, function (e) {
                var r = n.isHTML ? e : n.compiler.compile(e);
                t.updatedAt && (r = W(r, t.updatedAt, n.config.formatUpdated)), o(n, 'afterEach', r, function (e) {
                    return U.call(n, e)
                })
            })
        }, e._renderCover = function (e) {
            var t = a('.cover');
            if (!e) return void g(t, 'remove', 'show');
            g(t, 'add', 'show');
            var n = this.coverIsHTML ? e : this.compiler.cover(e),
                r = n.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');
            if (r) {
                if (r[2] === 'color') t.style.background = r[1] + (r[3] || ''); else {
                    var i = r[1];
                    g(t, 'add', 'has-mask'), je(r[1]) || (i = j(this.router.getBasePath(), r[1])), t.style.backgroundImage = 'url(' + i + ')', t.style.backgroundSize = 'cover', t.style.backgroundPosition = 'center center'
                }
                n = n.replace(r[0], '')
            }
            this._renderTo('.cover-main', n), q()
        }, e._updateRender = function () {
            Y(this)
        }
    }(et)), (function (e) {
        var t;
        e._fetch = function (e) {
            var r = this;
            void 0 === e && (e = n);
            var i = this.route, o = i.path, a = this.config, s = a.loadNavbar, l = a.loadSidebar;
            t && t.abort && t.abort(), t = _(this.router.getFile(o), !0), this.isHTML = /\.html$/g.test(o);
            var c = function () {
                if (!l) return e();
                ee(o, l, function (t) {
                    r._renderSidebar(t), e()
                }, r, !0)
            };
            t.then(function (e, t) {
                r._renderMain(e, t), c()
            }, function (e) {
                r._renderMain(null), c()
            }), s && ee(o, s, function (e) {
                return r._renderNav(e)
            }, this, !0)
        }, e._fetchCover = function () {
            var e = this, t = this.config, n = t.coverpage, r = Me(this.route.path), i = this.router.getFile(r + n);
            if (this.route.path !== '/' || !n) return void this._renderCover();
            this.coverIsHTML = /\.html$/g.test(i), _(i).then(function (t) {
                return e._renderCover(t)
            })
        }, e.$fetch = function (e) {
            var t = this;
            void 0 === e && (e = n), this._fetchCover(), this._fetch(function (n) {
                t.$resetEvents(), o(t, 'doneEach'), e()
            })
        }
    }(et)), (function (e) {
        e.$resetEvents = function () {
            I(this.route.query.id), N(this.router, 'nav')
        }
    }(et)), (function () {
        window.Docsify = {
            util: Ke,
            dom: me,
            get: _,
            slugify: $
        }, window.DocsifyCompiler = Re, window.marked = Ee, window.Prism = $e
    }()), re.version = '4.3.8', (function (e) {
        var t = document.readyState;
        if (t === 'complete' || t === 'interactive') return setTimeout(e, 0);
        document.addEventListener('DOMContentLoaded', e)
    }(function (e) {
        return new re()
    }))
}())