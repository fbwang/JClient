function gvjs_KX(a, b) {
    gvjs_FS.call(this);
    this.Ba = a;
    this.ua = null;
    this.Ni = b;
    this.O_ = null;
    this.XU = new gvjs_v;
    this.FY = new gvjs_me;
    this.vd = new gvjs_Nd(gvjs_Nd.Format.LONG_DATE);
    this.v9 = !1
}
gvjs_q(gvjs_KX, gvjs_FS);
gvjs_ = gvjs_KX.prototype;
gvjs_.XX = function(a) {
    var b = gvjs_uL(a.hb())
      , c = [];
    gvjs_r(this.Ba.labels, function(a, e) {
        a = b.cs(a.text, a.x, a.y, a.width, a.angle, a.Dz, a.Ez, a.style);
        e = gvjs_wL(gvjs_wL(new gvjs_5(gvjs_xr), gvjs_Tr, e), gvjs_Wr, gvjs_sv);
        c.push(new gvjs_ES(a,e,gvjs_Su))
    }, this);
    gvjs_r(this.Ba.Bra, function(a, e) {
        a = b.Tc(a.Oc, a.brush);
        e = gvjs_wL(gvjs_wL(new gvjs_5(gvjs_xr), gvjs_Tr, e), gvjs_Wr, "gridpath");
        c.push(new gvjs_ES(a,e,gvjs_Su))
    }, this);
    gvjs_r(this.Ba.dwa, function(a, e) {
        a = b.Tc(a.Oc, a.brush);
        e = gvjs_wL(gvjs_wL(new gvjs_5(gvjs_xr), gvjs_Tr, e), gvjs_Wr, "monthpath");
        c.push(new gvjs_ES(a,e,gvjs_fS))
    }, this);
    return c
}
;
gvjs_.gB = function(a) {
    var b = gvjs_uL(a.hb())
      , c = [];
    this.ua && (this.Ba.yg ? gvjs_sF(this.ua, this.Ni.getContainer()) : c.push(new gvjs_ES(gvjs_wF(this.ua, b).j(),new gvjs_5(gvjs_jS),gvjs_oi)),
    this.ua = null);
    gvjs_r(this.Ba.cells, function(a) {
        if (a.Nl) {
            a.Nl = !1;
            var d = gvjs_wL(gvjs_wL(new gvjs_5(gvjs_Sr), "DATE", a.Fa.getTime()), gvjs_Wr, a.Fa.getTime());
            null != a.EU && gvjs_wL(d, gvjs_Tr, a.EU);
            this.FY.set(a.Fa.getTime(), a);
            var f = a.brush
              , g = gvjs_1w
              , h = d.se();
            if (d.equals(this.O_) || this.XU.contains(h))
                f = this.Ba.Gqa.clone(),
                f.ff(a.fillColor),
                f.Kf(1),
                g = gvjs_3r;
            a = b.Kl(a.x, a.y, a.width, a.height, f);
            c.push(new gvjs_ES(a,d,g))
        }
    }, this);
    return c
}
;
gvjs_.fc = function() {
    return this.Ba.size
}
;
gvjs_.vm = function(a, b, c) {
    switch (b.type) {
    case gvjs_oi:
        this.Gy(a, c);
        break;
    case gvjs_0a:
        gvjs_LX(this, this.O_);
        gvjs_LX(this, a);
        this.O_ = c ? a : null;
        break;
    case gvjs_J:
        gvjs_he(this.XU, function(a) {
            gvjs_LX(this, gvjs_zL(a))
        }, this),
        gvjs_LX(this, a),
        c ? this.XU.add(a.se()) : this.XU.remove(a.se())
    }
}
;
function gvjs_LX(a, b) {
    null != b && (a.FY.get(b.xb.SUBTYPE).Nl = !0)
}
gvjs_.Gy = function(a, b) {
    this.Ni.clear();
    this.ua = null;
    if (b) {
        a = this.FY.get(a.xb.SUBTYPE);
        b = this.Ba.size;
        b = new gvjs_x(0,b.width,b.height,0);
        var c = new gvjs_w(a.x,a.y)
          , d = gvjs_Qe(c, new gvjs_w(-1,1));
        if (a.Ca && this.Ba.yg)
            a = {
                html: {
                    name: gvjs_Za,
                    content: a.Ca.content,
                    properties: {
                        className: gvjs_Qu
                    }
                },
                VH: a.Ca.wi,
                eL: d,
                anchor: c,
                RG: b,
                spacing: 20,
                margin: 5
            };
        else {
            var e = {
                entries: []
            }
              , f = this.vd.format(a.Fa);
            e.entries.push(gvjs_3I(a.Ca ? a.Ca.content : "" + f + (null != a.value ? ": " + a.value : ""), this.Ba.up));
            a = gvjs_6I(e, this.Ba.Ec, !1, c, b, d, void 0, this.Ba.yg)
        }
        this.ua = a
    }
}
;
function gvjs_MX(a, b) {
    this.via = a;
    this.TB = b
}
new gvjs_kd(0,0,1);
new gvjs_kd(9999,11,31);
gvjs_MX.prototype.getStartDate = function() {
    return this.via
}
;
gvjs_MX.prototype.contains = function(a) {
    return a.valueOf() >= this.via.valueOf() && a.valueOf() <= this.TB.valueOf()
}
;
function gvjs_NX(a, b, c, d, e, f, g) {
    a = gvjs_n(a) ? Date.UTC(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : a ? a.getTime() : gvjs_Bb();
    this.Fa = new Date(a)
}
gvjs_q(gvjs_NX, gvjs_pd);
gvjs_ = gvjs_NX.prototype;
gvjs_.clone = function() {
    var a = new gvjs_NX(this.Fa);
    a.$B = this.$B;
    a.aC = this.aC;
    return a
}
;
gvjs_.add = function(a) {
    (a.years || a.months) && gvjs_kd.prototype.add.call(this, new gvjs_jd(a.years,a.months));
    a = 1E3 * (a.seconds + 60 * (a.minutes + 60 * (a.hours + 24 * a.days)));
    this.Fa = new Date(this.Fa.getTime() + a)
}
;
gvjs_.getTimezoneOffset = function() {
    return 0
}
;
gvjs_.getFullYear = gvjs_pd.prototype.getUTCFullYear;
gvjs_.getMonth = gvjs_pd.prototype.getUTCMonth;
gvjs_.getDate = gvjs_pd.prototype.getUTCDate;
gvjs_.getHours = gvjs_pd.prototype.getUTCHours;
gvjs_.getMinutes = gvjs_pd.prototype.getUTCMinutes;
gvjs_.getSeconds = gvjs_pd.prototype.getUTCSeconds;
gvjs_.getMilliseconds = gvjs_pd.prototype.getUTCMilliseconds;
gvjs_.getDay = gvjs_pd.prototype.getUTCDay;
gvjs_.setFullYear = gvjs_pd.prototype.setUTCFullYear;
gvjs_.setMonth = gvjs_pd.prototype.setUTCMonth;
gvjs_.setDate = gvjs_pd.prototype.setUTCDate;
gvjs_.setHours = gvjs_pd.prototype.setUTCHours;
gvjs_.setMinutes = gvjs_pd.prototype.setUTCMinutes;
gvjs_.setSeconds = gvjs_pd.prototype.setUTCSeconds;
gvjs_.setMilliseconds = gvjs_pd.prototype.setUTCMilliseconds;
function gvjs_OX(a, b, c, d) {
    this.r = a;
    this.g = b;
    this.b = c;
    this.a = d
}
var gvjs_hka = new gvjs_OX(0,0,0,1);
function gvjs_PX(a) {
    if (!a)
        return null;
    try {
        var b = gvjs_Zc(gvjs_Tc(a).gc);
        return new gvjs_OX(b[0] / 255,b[1] / 255,b[2] / 255,1)
    } catch (c) {
        return null
    }
}
gvjs_OX.prototype.xl = function() {
    return [this.r, this.g, this.b, this.a]
}
;
gvjs_OX.prototype.multiply = function(a) {
    return new gvjs_OX(gvjs_Fc(this.r * a, 0, 1),gvjs_Fc(this.g * a, 0, 1),gvjs_Fc(this.b * a, 0, 1),this.a)
}
;
gvjs_OX.prototype.equals = function(a) {
    return !!a && a.r == this.r && a.g == this.g && a.b == this.b && a.a == this.a
}
;
var gvjs_QX = ["#e7711c", gvjs_mb, "#4374e0"];
function gvjs_RX() {
    this.K1 = [0];
    this.Jb = [gvjs_hka];
    this.twa = gvjs_PX("#eeeeee")
}
gvjs_ = gvjs_RX.prototype;
gvjs_.rV = function(a) {
    this.K1 = Array.prototype.slice.call(arguments);
    return this
}
;
gvjs_.jp = function(a) {
    for (var b = [], c = 0, d = arguments.length; c < d; ++c)
        b.push(gvjs_ika(arguments[c]));
    this.Jb = b;
    return this
}
;
gvjs_.getColors = function() {
    return this.Jb
}
;
function gvjs_ika(a) {
    return a instanceof gvjs_OX ? a : a instanceof Array ? 4 <= a.length ? new gvjs_OX(a[0],a[1],a[2],a[3]) : new gvjs_OX(a[0],a[1],a[2],1) : gvjs_PX(a)
}
gvjs_.color = function(a) {
    if (null === a || void 0 === a || isNaN(a))
        return this.twa;
    var b = this.K1;
    if (a <= b[0])
        return this.Jb[0];
    for (var c = 0, d = b.length - 1; c < d; ++c)
        if (b[c] < a && a <= b[c + 1]) {
            var d = this.Jb[c]
              , e = this.Jb[c + 1];
            a = (a - b[c]) / (b[c + 1] - b[c]);
            return new gvjs_OX(gvjs_Hc(d.r, e.r, a),gvjs_Hc(d.g, e.g, a),gvjs_Hc(d.b, e.b, a),gvjs_Hc(d.a, e.a, a))
        }
    return this.Jb[this.Jb.length - 1]
}
;
gvjs_.mq = function(a) {
    return gvjs_SX(this.color(a))
}
;
function gvjs_SX(a) {
    a = a.xl();
    for (var b = 0; 3 > b; ++b)
        a[b] = Math.floor(255 * a[b]);
    return gvjs_Xc(a)
}
;function gvjs_TX(a) {
    this.Jr = new gvjs_z(100,10);
    this.fK = null;
    this.Bc = new gvjs_w;
    this.Eh = a
}
gvjs_TX.prototype.RE = function(a, b) {
    this.Bc = new gvjs_w(a,b);
    return this
}
;
gvjs_TX.prototype.fc = function() {
    return new gvjs_z(this.Jr.width,this.Jr.height + this.fK.fontSize + 3)
}
;
gvjs_TX.prototype.wh = function() {
    for (var a = [], b = this.Eh.getColors(), c = b.length - 1, d = this.Jr.width / c, e = 0; e < c; ++e) {
        var f = gvjs_8g("green")
          , g = {
            og: gvjs_SX(b[e]),
            Qf: gvjs_SX(b[e + 1]),
            Jq: null,
            Kq: null,
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 0,
            wr: !0,
            aF: !1
        };
        f.wg = g;
        var g = new gvjs_uy
          , h = this.Bc.x + e * d
          , k = this.Bc.y + this.fK.fontSize + 3;
        g.move(h, k);
        h += d;
        g.Da(h, k);
        k += this.Jr.height;
        g.Da(h, k);
        h -= d;
        g.Da(h, k);
        g.close();
        a.push({
            brush: f,
            Oc: g
        })
    }
    f = gvjs_9g("#eee", 1);
    g = new gvjs_uy;
    h = this.Bc.x;
    k = this.Bc.y + this.fK.fontSize + 3;
    g.move(h, k);
    h += this.Jr.width;
    g.Da(h, k);
    k += this.Jr.height;
    g.Da(h, k);
    h -= this.Jr.width;
    g.Da(h, k);
    g.close();
    a.push({
        brush: f,
        Oc: g
    });
    b = this.wY();
    return {
        paths: a,
        labels: b
    }
}
;
gvjs_TX.prototype.wY = function() {
    var a = []
      , b = this.Bc.x
      , c = this.Bc.y
      , d = this.Eh.K1
      , e = d.length
      , f = this.Jr.width / (e - 1);
    gvjs_r(d, function(d, h) {
        var g = gvjs_1;
        0 == h ? g = gvjs_4 : h == e - 1 && (g = gvjs_3);
        a.push({
            angle: 0,
            Dz: g,
            Ez: gvjs_4,
            style: this.fK,
            text: "" + d,
            width: 1,
            x: b + f * h,
            y: c
        })
    }, this);
    return a
}
;
function gvjs_UX(a, b, c) {
    this.Bc = new gvjs_w;
    this.zw = c;
    this.Hj = a;
    this.tW = b
}
gvjs_ = gvjs_UX.prototype;
gvjs_.RE = function(a, b) {
    this.Bc = new gvjs_w(a,b);
    return this
}
;
gvjs_.setTitle = function(a) {
    this.Hj = a;
    return this
}
;
gvjs_.fc = function() {
    var a = this.tW.fontSize
      , b = this.zw(this.Hj, this.tW).width;
    return new gvjs_z(b,a)
}
;
gvjs_.wh = function() {
    return {
        paths: [],
        labels: this.wY()
    }
}
;
gvjs_.wY = function() {
    var a = [];
    a.push({
        angle: 0,
        Dz: gvjs_4,
        Ez: gvjs_4,
        style: this.tW,
        text: this.Hj,
        width: 1,
        x: this.Bc.x,
        y: this.Bc.y
    });
    return a
}
;
function gvjs_VX(a, b, c, d) {
    this.J = a;
    this.m = b;
    this.je = c;
    this.jb = d;
    this.nb = (new gvjs_Uo).Qc(a);
    this.tP = gvjs_Zh(b, "calendar.dayOfWeekLabel");
    this.GK = gvjs_Zh(b, "calendar.monthLabel");
    this.cX = gvjs_Zh(b, "calendar.yearLabel");
    this.$oa = gvjs_E(b, "calendar.dayOfWeekRightSpace");
    this.gBa = gvjs_E(b, "calendar.underMonthSpace");
    this.fBa = 6;
    this.mja = gvjs_E(b, "calendar.underYearSpace");
    this.X$ = gvjs_G(b, "calendar.daysOfWeek");
    this.Ina = gvjs_Xh(b, "calendar.cellColor");
    this.afa = gvjs_Xh(b, "calendar.monthOutlineColor");
    this.afa.ff(gvjs_d);
    this.uja = gvjs_Xh(b, "calendar.unusedMonthOutlineColor");
    this.uja.ff(gvjs_d);
    a = this.vu = gvjs_E(b, "calendar.cellSize");
    b = this.cX;
    if (null == b.fontSize) {
        c = 7 * a;
        d = this.je;
        b.fontSize = 3 * a;
        var e = d("2222", b);
        if (e.width < c) {
            for (var f = 0; e.width < c; )
                f = b.fontSize,
                b.fontSize++,
                e = d("2222", b);
            b.fontSize = f
        } else
            for (; e.width > c; )
                b.fontSize--,
                e = d("2222", b)
    }
    b = this.tP;
    null == b.fontSize && (b.fontSize = Math.max(a - 6, 5));
    a = this.GK;
    null == a.fontSize && (a.fontSize = b.fontSize + 2);
    this.U7 = gvjs_jka(this);
    this.Cm = 1;
    this.fz = this.cX.fontSize + this.mja + this.U7 + this.$oa
}
function gvjs_WX(a, b, c, d) {
    var e = new gvjs_NX;
    e.setTime(a.getTime() - 1);
    e = c(e);
    d(e);
    for (a = []; e < b; )
        a.push(new gvjs_NX(e)),
        d(e);
    return a
}
function gvjs_kka(a, b) {
    return gvjs_WX(a, b, function(a) {
        return new gvjs_NX(a.getFullYear(),a.getMonth(),a.getDate())
    }, function(a) {
        a.setDate(a.getDate() + 1)
    })
}
function gvjs_lka(a, b) {
    return gvjs_WX(a, b, function(a) {
        return new gvjs_NX(a.getFullYear(),a.getMonth(),1)
    }, function(a) {
        a.setMonth(a.getMonth() + 1)
    })
}
gvjs_VX.prototype.wh = function() {
    var a = gvjs_mka(this), b, c = a.yBa, d = c.end - c.start, d = this.HS(d ? d : 1), d = Math.pow(10, d - 1);
    b = new gvjs_y(Math.floor(c.start / d) * d,Math.ceil(c.end / d) * d);
    var c = this.m
      , d = c.ba("colorAxis.colors", null, gvjs_Sh) || gvjs_QX
      , e = d === gvjs_QX
      , f = gvjs_E(c, "colorAxis.minValue", b.start);
    b = gvjs_E(c, "colorAxis.maxValue", b.end);
    var g = c.ba("colorAxis.values", null, gvjs_Bh)
      , h = 0 > f && 0 < b;
    if (2 > d.length)
        throw Error("palette.colors must contain at least two values.");
    2 == d.length && (h = !1);
    c = new gvjs_RX;
    if (null != g) {
        if (d.length != g.length)
            throw Error("colorAxis.colors must be the same length as colorAxis.values.");
        f = c.rV.apply(c, g)
    } else if (e)
        h ? (f = Math.max(Math.abs(f), Math.abs(b)),
        f = c.rV(-f, 0, f),
        d = d.slice(0, 3)) : (d = 0 > f ? d.slice(0, 2) : d.slice(-2),
        f = c.rV(f, b));
    else {
        g = [];
        for (e = 0; e < d.length; e++)
            h = (b - f) / d.length * e,
            0 === e ? h = f : e === d.length - 1 && (h = b),
            g.push(h);
        f = c.rV.apply(c, g)
    }
    f.jp.apply(f, d);
    d = gvjs_G(this.m, gvjs_Sx, "");
    d = (new gvjs_UX(d,this.GK,this.je)).RE(this.fz, this.Cm);
    f = gvjs_u(this.GK);
    b = this.vu - 1;
    e = new gvjs_TX(c);
    e.fK = this.GK;
    e.Jr = new gvjs_z(10 * b,b);
    g = e.fc();
    e.RE(this.fz + 53 * this.vu - 10 * b, this.Cm);
    this.Cm += g.height + this.fBa;
    f.fontSize = g.height;
    d.tW = f;
    b = e.wh();
    e = d.wh();
    d = [];
    f = b.labels;
    gvjs_rc(f, e.labels);
    b = b.paths;
    gvjs_rc(b, e.paths);
    for (var e = [], g = a.rP.getStartDate().getFullYear(), h = a.rP.TB.getFullYear(), k = 0; g <= h; g++,
    k++) {
        var l = new gvjs_NX(g,0,1)
          , m = new gvjs_NX(g + 1,0,1)
          , n = gvjs_lka(l, m);
        0 === k && gvjs_rc(f, gvjs_nka(this, n, this.vu));
        var p = l
          , q = new gvjs_NX(p.getFullYear() + 1,p.getMonth(),1,-24)
          , p = gvjs_XX(this, p, q)
          , q = gvjs_Oh(this.m, "noDataPattern.color", gvjs_Lj)
          , r = gvjs_Oh(this.m, "noDataPattern.backgroundColor", gvjs_Lj)
          , q = new gvjs_0g(gvjs_5w,q,r)
          , r = new gvjs_C;
        r.ee = q;
        gvjs_rc(e, {
            brush: r,
            Oc: p
        });
        gvjs_rc(f, gvjs_oka(this, g));
        gvjs_rc(b, gvjs_pka(this, a.ewa, n));
        gvjs_rc(d, gvjs_qka(this, a.Jna, l, m, c));
        this.Cm += 9 * this.vu
    }
    return {
        cells: d,
        labels: f,
        dwa: b,
        Bra: e,
        yg: gvjs_D(this.m, gvjs_Yx, !0),
        up: gvjs_Zh(this.m, gvjs__x),
        Gqa: gvjs_Xh(this.m, "calendar.focusedCellColor"),
        size: this.jb,
        Ec: this.je
    }
}
;
function gvjs_mka(a) {
    for (var b = new gvjs_me, c = new gvjs_v, d = Number.MAX_VALUE, e = Number.MIN_VALUE, f = a.nb.OZ.index(), g = a.nb.yA.index(), h = a.nb.yA.b5.get(gvjs_eb), k = a.nb.yA.b5.get(gvjs_oi), l = 0, m = a.J.fa(); l < m; l++) {
        var n = a.J.getValue(l, f)
          , p = new gvjs_NX(n.getFullYear(),n.getMonth(),1);
        c.add(p.getTime());
        var n = new gvjs_NX(n.getFullYear(),n.getMonth(),n.getDate())
          , p = a.J.getValue(l, g)
          , d = Math.min(d, p)
          , e = Math.max(e, p)
          , q = null;
        h && (q = a.J.getValue(l, h),
        "" === q && (q = null));
        var r = null;
        k && (r = a.J.getValue(l, k)) && (r = {
            wi: !(!a.J.getProperty(l, k, gvjs_Wi) && !a.J.vg(k, gvjs_Wi)),
            content: r
        });
        n = {
            color: q,
            Fa: n,
            EU: l,
            value: p,
            Ca: r
        };
        b.set(n.Fa, n)
    }
    a = b.ab();
    gvjs_xc(a, function(a, b) {
        return gvjs_od(a.Fa, b.Fa)
    });
    g = f = new gvjs_kd;
    0 < a.length && (f = a[0].Fa,
    g = a[a.length - 1].Fa);
    return {
        Jna: b,
        rP: new gvjs_MX(f,g),
        ewa: c,
        yBa: new gvjs_y(d,e)
    }
}
gvjs_VX.prototype.HS = function(a) {
    return Math.floor(Math.log(Math.abs(a)) / Math.log(10))
}
;
function gvjs_YX(a) {
    a = new gvjs_NX(a);
    for (var b = a.getDate(), c = a.getFullYear(), d = a.getMonth() - 1; 0 <= d; d--)
        b += gvjs_hd(c, d);
    --b;
    a = (new gvjs_NX(a.getFullYear(),0,1)).getDay();
    return Math.floor((b + a % 7) / 7)
}
var gvjs_ZX = new gvjs_7h({
    pattern: "MMM"
});
gvjs_VX.prototype.pza = gvjs_p(gvjs_ZX.yc, gvjs_ZX);
function gvjs_jka(a) {
    var b = a.je
      , c = a.tP;
    return gvjs_bc(a.X$.split(""), function(a, e) {
        e = b(e, c);
        return Math.max(a, e.width)
    }, 0, a)
}
function gvjs_qka(a, b, c, d, e) {
    var f = a.vu;
    c = gvjs_kka(c, d);
    return gvjs_s(c, function(a) {
        var c = a.getDay()
          , d = gvjs_YX(a)
          , g = b.Ie(a) ? b.get(a) : null
          , m = g ? g.value : null
          , n = g ? g.color : null
          , p = g ? g.EU : null
          , g = g ? g.Ca : null
          , q = this.Ina.clone();
        null != m ? (n = n || e.mq(m),
        q.ff(n),
        q.Kf(1)) : (n = gvjs_da,
        q.ff(n),
        q.Kf(0));
        return {
            brush: q,
            Fa: a,
            Nl: !0,
            Ca: g,
            fillColor: n,
            height: f,
            EU: p,
            value: m,
            width: f,
            x: this.fz + d * f,
            y: this.Cm + c * f
        }
    }, a)
}
function gvjs_nka(a, b, c) {
    b = gvjs_s(b, function(a) {
        var b = new gvjs_NX(a.getFullYear(),a.getMonth() + 1,1,-24)
          , d = +gvjs_YX(a)
          , b = +gvjs_YX(b);
        return {
            angle: 0,
            Dz: gvjs_1,
            Ez: gvjs_4,
            style: this.GK,
            text: this.pza(a),
            width: (b - d + 1) * c,
            x: this.fz + (d + b + 1) * c / 2,
            y: this.Cm
        }
    }, a);
    a.Cm += a.tP.fontSize + a.gBa;
    return b
}
function gvjs_oka(a, b) {
    var c = a.vu
      , d = 7 * c
      , e = [{
        angle: 270,
        Dz: gvjs_1,
        Ez: gvjs_4,
        style: a.cX,
        text: "" + b,
        width: d,
        x: 0,
        y: a.Cm + d / 2
    }]
      , f = a.cX.fontSize + a.mja;
    gvjs_r(a.X$.split(""), function(a, b) {
        e.push({
            angle: 0,
            Dz: gvjs_1,
            Ez: gvjs_1,
            style: this.tP,
            text: a,
            width: this.U7,
            x: f + this.U7 / 2,
            y: this.Cm + b * c + c / 2
        })
    }, a);
    return e
}
function gvjs_pka(a, b, c) {
    var d = []
      , e = [];
    gvjs_r(c, function(a) {
        var c;
        c = new gvjs_NX(a.getFullYear(),a.getMonth() + 1,1,-24);
        c = gvjs_XX(this, a, c);
        b.contains(a.getTime()) ? e.push({
            brush: this.afa,
            Oc: c
        }) : d.push({
            brush: this.uja,
            Oc: c
        })
    }, a);
    gvjs_rc(d, e);
    return d
}
function gvjs_XX(a, b, c) {
    var d = +b.getDay();
    b = +gvjs_YX(b);
    var e = +c.getDay();
    c = +gvjs_YX(c);
    var f = a.vu
      , g = a.Cm;
    a = a.fz;
    var h = new gvjs_uy
      , k = g + d * f;
    h.move((b + 1) * f + a, k);
    d = b * f + a;
    h.Da(d, k);
    k = g + 7 * f;
    h.Da(d, k);
    d = c * f + a;
    h.Da(d, k);
    k = g + (e + 1) * f;
    h.Da(d, k);
    d = (c + 1) * f + a;
    h.Da(d, k);
    k = g + 0;
    h.Da(d, k);
    h.Da((b + 1) * f + a, k);
    h.close();
    return h
}
;function gvjs__X(a) {
    gvjs_KL.call(this, a)
}
gvjs_q(gvjs__X, gvjs_KL);
gvjs_ = gvjs__X.prototype;
gvjs_.hq = function() {
    return {
        DATE: gvjs_Xa,
        ROW_INDEX: gvjs_xi
    }
}
;
gvjs_.vh = function() {
    return {
        backgroundColor: {
            fill: gvjs_da,
            stroke: gvjs_Fq,
            strokeWidth: 10,
            strokeOpacity: .2
        },
        tooltip: {
            isHtml: !0,
            textStyle: {
                fontName: gvjs_wr,
                fontSize: "16",
                color: gvjs_Ta
            }
        },
        calendar: {
            cellColor: {
                stroke: gvjs_da,
                strokeOpacity: 1,
                strokeWidth: 1
            },
            cellSize: 16,
            dayOfWeekLabel: {
                fontName: gvjs_$a,
                color: "#888",
                bold: !1,
                italic: !1
            },
            dayOfWeekRightSpace: 4,
            daysOfWeek: "SMTWTFS",
            focusedCellColor: {
                stroke: gvjs_Fq,
                strokeOpacity: 1,
                strokeWidth: 2
            },
            monthLabel: {
                fontName: gvjs_$a,
                color: "#888",
                bold: !1,
                italic: !1
            },
            monthOutlineColor: {
                stroke: gvjs_Fq,
                strokeOpacity: 1,
                strokeWidth: 1
            },
            underMonthSpace: 6,
            underYearSpace: 0,
            unusedMonthOutlineColor: {
                stroke: "#c9c9c9",
                strokeOpacity: 1,
                strokeWidth: 1
            },
            yearLabel: {
                fontName: gvjs_$a,
                color: "#dfdfdf",
                bold: !1,
                italic: !1
            }
        },
        noDataPattern: {
            backgroundColor: "#ddd",
            color: "#f8f8f8"
        }
    }
}
;
gvjs_.Pp = function(a, b, c, d) {
    a = gvjs__X.o.Pp.call(this, a, b, c, d);
    a.nw([gvjs_Su, gvjs_1w, gvjs_fS, gvjs_4r, gvjs_3r, gvjs_oi]);
    return a
}
;
gvjs_.to = function(a, b) {
    return new gvjs_KX(a,b)
}
;
gvjs_.Tm = function(a, b, c, d) {
    return new gvjs_VX(a,b,c,d)
}
;
gvjs_.bs = function() {
    return [new gvjs_AS([new gvjs_5(gvjs_Sr)]), new gvjs_DS([new gvjs_5(gvjs_Sr)]), new gvjs_CS([new gvjs_5(gvjs_Sr)])]
}
;
gvjs_j("google.visualization.Calendar", gvjs__X, void 0);
gvjs__X.prototype.draw = gvjs__X.prototype.draw;
gvjs__X.prototype.setSelection = gvjs__X.prototype.setSelection;
gvjs__X.prototype.getSelection = gvjs__X.prototype.getSelection;
gvjs__X.prototype.clearChart = gvjs__X.prototype.cc;
gvjs__X.prototype.getContainer = gvjs__X.prototype.getContainer;
gvjs__X.prototype.getDefaultOptions = gvjs__X.prototype.vh;
