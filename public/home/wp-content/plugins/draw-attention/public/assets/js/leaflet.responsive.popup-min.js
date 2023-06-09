L.ResponsivePopup = L.Popup.extend({
    options: {
        hasTip: !0
    },
    _initLayout: function() {
        var t = "leaflet-rrose",
            e = this._container = L.DomUtil.create("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
            s = this._wrapper = L.DomUtil.create("div", t + "-content-wrapper", e);
        if (this._contentNode = L.DomUtil.create("div", t + "-content", s), L.DomEvent.disableClickPropagation(s), L.DomEvent.disableScrollPropagation(this._contentNode), L.DomEvent.on(s, "contextmenu", L.DomEvent.stopPropagation), this._tipContainer = L.DomUtil.create("div", t + "-tip-container", e), this.options.hasTip || (this._tipContainer.style.visibility = "hidden"), this._tip = L.DomUtil.create("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var i = this._closeButton = L.DomUtil.create("a", t + "-close-button", e);
            i.href = "#close", i.innerHTML = "&#215;", L.DomEvent.on(i, "click", this._onCloseButtonClick, this)
        }
    },
    _updatePosition: function() {
        if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng),
                e = this._map.layerPointToContainerPoint(t),
                s = this._container.offsetWidth,
                i = this._container.offsetHeight,
                o = L.point(this.options.autoPanPadding),
                p = L.point(this.options.autoPanPaddingTopLeft || o),
                a = L.point(this.options.autoPanPaddingBottomRight || o),
                n = this._map.getSize(),
                l = this._getAnchor(),
                r = L.point(this.options.offset),
                h = 11,
                y = 22,
                x = 12,
                _ = Math.abs(r.x),
                u = Math.abs(r.y);
            this.options.hasTip && (_ += 11, u += 11, L.DomUtil.removeClass(this._container, "leaflet-resp-popup-north"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-south"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-east"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-west"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-north-east"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-north-west"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-south-east"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-south-west"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-east-north"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-east-south"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-west-north"), L.DomUtil.removeClass(this._container, "leaflet-resp-popup-west-south"));
            var c = !0,
                f = !0,
                m = !0,
                C = !0,
                d = !1;
            e.y + l.y - u - i - Math.abs(p.y) < 0 && (c = !1), e.y + l.y + u + i + Math.abs(a.y) > n.y && (f = !1), e.x + l.x - _ - s - Math.abs(p.x) < 0 && (m = !1), e.x + l.x + _ + s + Math.abs(a.x) > n.x && (C = !1);
            var v = s / 2 - l.x,
                D = i / 2 - l.y;
            if (c || f) {
                var U = e.x + l.x - s / 2,
                    b = e.x + l.x + s / 2;
                U < Math.abs(p.x) && (v = s / 2 - l.x - Math.abs(p.x) + U), b > n.x - Math.abs(a.x) && (v = s / 2 - l.x + b - n.x + Math.abs(a.x))
            }
            if (m || C) {
                var P = e.y + l.y - i / 2,
                    M = e.y + l.y + i / 2;
                P < Math.abs(p.y) && (D = i / 2 - l.y - Math.abs(p.y) + P), M > n.y - Math.abs(a.y) && (D = i / 2 - l.y + M - n.y + Math.abs(a.y))
            }
            if (c) d = t.subtract(L.point(v, -l.y + i + u, !0)), this.options.hasTip && (e.x + l.x < p.x + 12 + 11 ? (d.x = t.x + l.x, L.DomUtil.addClass(this._container, "leaflet-resp-popup-north-east"), this._tipContainer.style.top = i + "px", this._tipContainer.style.left = "0px") : e.x + l.x > n.x - a.x - 12 - 11 ? (d.x = t.x + l.x - s, L.DomUtil.addClass(this._container, "leaflet-resp-popup-north-west"), this._tipContainer.style.top = i + "px", this._tipContainer.style.left = s + "px") : (L.DomUtil.addClass(this._container, "leaflet-resp-popup-north"), this._tipContainer.style.top = i + "px", this._tipContainer.style.left = t.x + l.x - d.x + "px"));
            else if (m) d = t.subtract(L.point(-l.x + s + _, D, !0)), this.options.hasTip && (e.y + l.y < p.y + 12 + 11 ? (d.y = t.y + l.y, L.DomUtil.addClass(this._container, "leaflet-resp-popup-west-south"), this._tipContainer.style.top = "0px", this._tipContainer.style.left = s + "px") : e.y + l.y > n.y - a.y - 12 - 11 ? (d.y = t.y + l.y - i, L.DomUtil.addClass(this._container, "leaflet-resp-popup-west-north"), this._tipContainer.style.top = i + "px", this._tipContainer.style.left = s + "px") : (L.DomUtil.addClass(this._container, "leaflet-resp-popup-west"), this._tipContainer.style.top = t.y + l.y - d.y + "px", this._tipContainer.style.left = s + "px"));
            else if (f) d = t.subtract(L.point(v, -l.y - u, !0)), this.options.hasTip && (e.x + l.x < p.x + 12 + 11 ? (d.x = t.x + l.x, L.DomUtil.addClass(this._container, "leaflet-resp-popup-south-east"), this._tipContainer.style.top = "1px", this._tipContainer.style.left = "0px") : e.x + l.x > n.x - a.x - 12 - 11 ? (d.x = t.x + l.x - s, L.DomUtil.addClass(this._container, "leaflet-resp-popup-south-west"), this._tipContainer.style.top = "0px", this._tipContainer.style.left = s + "px") : (L.DomUtil.addClass(this._container, "leaflet-resp-popup-south"), this._tipContainer.style.top = "2px", this._tipContainer.style.left = t.x + l.x - d.x + "px"));
            else if (C) d = t.subtract(L.point(-l.x - _, D, !0)), this.options.hasTip && (e.y + l.y < p.y + 12 + 11 ? (d.y = t.y + l.y, L.DomUtil.addClass(this._container, "leaflet-resp-popup-east-south"), this._tipContainer.style.top = "0px", this._tipContainer.style.left = "0px") : e.y + l.y > n.y - a.y - 12 - 11 ? (d.y = t.y + l.y - i, L.DomUtil.addClass(this._container, "leaflet-resp-popup-east-north"), this._tipContainer.style.top = i + "px", this._tipContainer.style.left = "0px") : (L.DomUtil.addClass(this._container, "leaflet-resp-popup-east"), this._tipContainer.style.top = t.y + l.y - d.y + "px", this._tipContainer.style.left = "4px"));
            else {
                var t;
                d = (t = this._map.latLngToLayerPoint(this._map.getCenter())).subtract(L.point(s / 2, i / 2)), this.options.hasTip
            }
            e.x < 0 || e.y < 0 || e.x > n.x || (e.y, n.y), s - Math.abs(p.x) - Math.abs(a.x) > n.x || (Math.abs(p.y), Math.abs(a.y), n.y), L.DomUtil.setPosition(this._container, d)
        }
    }
}), L.responsivePopup = function(t, e) {
    return new L.ResponsivePopup(t, e)
}, "object" == typeof exports && "undefined" != typeof module && (exports.responsivePopup = L.responsivePopup, exports.ResponsivePopup = L.ResponsivePopup);