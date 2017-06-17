var gvjs_6R = "tooltip-shapes"
  , gvjs_7R = "ticks.pixelsPerTick"
  , gvjs_8R = "subtitle"
  , gvjs_9R = "selectedRows"
  , gvjs_$R = "min-width"
  , gvjs_aS = "max-lines"
  , gvjs_bS = "margin.bottom"
  , gvjs_cS = "links"
  , gvjs_dS = "legend.style.text"
  , gvjs_eS = "gridlines"
  , gvjs_fS = "fgrid"
  , gvjs_gS = "chart.style.text"
  , gvjs_hS = "above"
  , gvjs_iS = "Unknown granularity."
  , gvjs_jS = "TOOLTIP"
  , gvjs_kS = "Shape does not exist in this group."
  , gvjs_lS = "Roboto:medium"
  , gvjs_mS = "OBJECT_INDEX"
  , gvjs_nS = "DOMAIN_INDEX"
  , gvjs_oS = '". Axis does not exist.';
function gvjs_pS(a, b) {
    gvjs_Kz.call(this, b);
    this.Lh = [];
    if (a)
        throw "prepopulating a group is unimplemented.";
    this.zz = gvjs_p(this.U3, this);
    this.lm = gvjs_p(this.S3, this);
    this.LD = gvjs_p(this.R3, this);
    this.OD = gvjs_p(this.V3, this)
}
gvjs_q(gvjs_pS, gvjs_Kz);
gvjs_ = gvjs_pS.prototype;
gvjs_.Ls = function() {
    return "Group"
}
;
gvjs_.Ou = function(a) {
    if (a.getContext())
        throw "cannot add a shape to a group that already has a context.";
    this.Lh.push(a);
    a.F(gvjs_Pw, this.zz);
    a.F(gvjs_Yj, this.lm);
    a.F(gvjs_7v, this.lm);
    a.F(gvjs_5v, this.lm);
    a.F(gvjs_6v, this.lm);
    a.F(gvjs_Nu, this.LD);
    a.F(gvjs_Rw, this.OD);
    this.fireEvent("add", [a, !1]);
    return this
}
;
gvjs_.add = gvjs_pS.prototype.Ou;
gvjs_.clear = function() {
    for (var a = 0, b = this.Lh.length; a < b; a++)
        this.Lh[a].Sb(gvjs_Pw, this.zz),
        this.fireEvent(gvjs_Rw, [this.Lh[a]]);
    this.Lh = [];
    this.fireEvent(gvjs_Pw, [this]);
    return this
}
;
gvjs_.contains = function(a) {
    return 0 <= this.Lh.indexOf(a)
}
;
gvjs_.U3 = function() {}
;
gvjs_.S3 = function(a) {
    this.fireEvent(a.type, [a])
}
;
gvjs_.R3 = function(a) {
    a.Jl = this;
    return !0
}
;
gvjs_.V3 = function(a) {
    var b = this.Lh.indexOf(a);
    if (0 > b)
        throw gvjs_kS;
    a.Sb(gvjs_Pw, this.zz);
    a.Sb(gvjs_Yj, this.lm);
    a.Sb(gvjs_7v, this.lm);
    a.Sb(gvjs_5v, this.lm);
    a.Sb(gvjs_6v, this.lm);
    a.Sb(gvjs_Nu, this.LD);
    a.Sb(gvjs_Rw, this.OD);
    a.Jl = null;
    this.Lh.splice(b, 1);
    return !0
}
;
gvjs_.qU = function(a) {
    if (0 > this.Lh.indexOf(a))
        throw gvjs_kS;
    a.fireEvent(gvjs_Rw, [a]);
    return this
}
;
gvjs_.remove = gvjs_pS.prototype.qU;
gvjs_.D0 = function() {
    return this.Lh
}
;
function gvjs_qS(a, b, c, d, e) {
    this.Yx = a;
    this.aa = b.dw();
    this.Fe = b;
    this.ht = null;
    this.ez = gvjs_xia;
    this.As = d;
    this.aO = e;
    this.po = null
}
gvjs_q(gvjs_qS, gvjs_IL);
gvjs_ = gvjs_qS.prototype;
gvjs_.draw = function(a) {
    this.ht = {};
    this.aa.clear();
    this.po = this.Yx.to(a, null);
    this.po.fc();
    for (a = 0; a < this.ez.length; a++) {
        var b = this.ht[this.ez[a]] = new gvjs_pS;
        this.E5(b)
    }
    this.po.draw(this);
    gvjs_rS(this)
}
;
function gvjs_rS(a) {
    var b = a.Fe.dw();
    gvjs_r(gvjs_vd(a.ht), function(a) {
        b.Ou(a)
    }, a)
}
gvjs_.nw = function(a) {
    this.ez = a
}
;
gvjs_.refresh = function(a) {
    this.eM(a.us, !1);
    this.eM(a.ts, !0);
    this.po.draw(this)
}
;
gvjs_.eM = function(a, b) {
    for (var c = 0; c < a.length; c++)
        for (var d = a[c], e = d.qr, f = 0; f < e.length; f++)
            this.po.vm(e[f], d.Yp, b)
}
;
gvjs_.E5 = function(a) {
    function b(a, b) {
        return function(c) {
            a.apply(b, [this, c])
        }
    }
    a.F(gvjs_Yj, b(function(a, b) {
        gvjs_sS(this, gvjs_Yj, a, b)
    }, this));
    a.F(gvjs_7v, b(function(a, b) {
        gvjs_sS(this, gvjs_9u, a, b)
    }, this));
    a.F(gvjs_6v, b(function(a, b) {
        gvjs_sS(this, gvjs_$u, a, b)
    }, this))
}
;
function gvjs_sS(a, b, c, d) {
    c = d.target;
    (c = c.data() && c.data().idStr) && c != gvjs_Pa && (c = gvjs_zL(c),
    a.As(c, b))
}
gvjs_.hb = function() {
    return this.Fe
}
;
gvjs_.eo = function(a, b, c) {
    var d = a.data() || {};
    d.idStr = b.se();
    a.data(d);
    this.ht[c].add(a)
}
;
gvjs_.Le = function(a, b, c, d) {
    b !== a && (b && this.df(b),
    this.eo(a, c, d))
}
;
gvjs_.df = function(a) {
    a && this.aa.qU(a)
}
;
var gvjs_xia = [gvjs_Hs, gvjs_1w, gvjs_0w, gvjs_4r, gvjs_3r];
function gvjs_tS(a) {
    gvjs_rp.call(this, a);
    this.gp = null
}
gvjs_q(gvjs_tS, gvjs_HL);
gvjs_tS.prototype.Hg = function(a, b, c) {
    gvjs_T.Kc(this.ga);
    c = c || {};
    var d = this.vh() || {};
    c = new gvjs_nh([c, d]);
    var d = gvjs_9l(this.ga, c)
      , e = gvjs_$l(this.ga, c)
      , d = new gvjs_z(d,e);
    this.gp = new gvjs_iA(this.ga,d.width,d.height);
    gvjs_qA(this.gp).then(gvjs_p(this.ro, this, b, c, d, a))
}
;
gvjs_tS.prototype.ro = function(a, b, c, d, e) {
    this.gp = e;
    e = gvjs_jh(gvjs_pA(this.gp), {
        eV: function(a, b) {
            a = [a, b[0]];
            a.push(gvjs_Fe(b[1]));
            return a.join("_")
        }
    });
    a = this.Tm(a, b, e, c).wh();
    c = gvjs_tL(this.gp);
    this.fe = new gvjs_GL(this,c,null,this,b,d);
    b = new gvjs_AL;
    this.fe.draw(a, b)
}
;
gvjs_tS.prototype.Pp = function(a, b, c, d) {
    a = new gvjs_qS(this,a,0,c,d);
    a.nw([]);
    return a
}
;
function gvjs_uS() {}
function gvjs_vS(a, b) {
    return new gvjs_wS(a,b)
}
function gvjs_wS(a, b) {
    this.WAa = a;
    this.XAa = b
}
gvjs_q(gvjs_wS, gvjs_uS);
gvjs_wS.prototype.transform = function(a) {
    a = this.WAa.transform(a);
    return this.XAa.transform(a)
}
;
function gvjs_xS(a) {
    this.Jw = a
}
gvjs_q(gvjs_xS, gvjs_uS);
gvjs_xS.prototype.transform = function(a) {
    return gvjs_s(a, function(a) {
        return this.Jw.transform(a)
    }, this)
}
;
function gvjs_yS(a, b) {
    this.Aqa = a;
    this.hxa = new gvjs_v(b)
}
gvjs_yS.prototype.sqa = function(a, b) {
    return gvjs_cc(this.Aqa, function(b) {
        return b.YC(a)
    }) && this.hxa.contains(b)
}
;
function gvjs_zS(a) {
    gvjs_yS.call(this, a, [gvjs_Yj])
}
gvjs_q(gvjs_zS, gvjs_yS);
gvjs_zS.prototype.cH = function(a, b, c) {
    c.selected.clear();
    return !0
}
;
gvjs_zS.prototype.Gk = function() {
    return []
}
;
function gvjs_AS(a) {
    gvjs_yS.call(this, a, [gvjs_9u, gvjs_$u])
}
gvjs_q(gvjs_AS, gvjs_yS);
gvjs_AS.prototype.cH = function(a, b, c) {
    if (b == gvjs_9u) {
        if (!a.equals(c.Bf))
            return c.Bf = a,
            !0
    } else if (null != c.Bf)
        return c.Bf = null,
        !0;
    return !1
}
;
gvjs_AS.prototype.Gk = function(a) {
    return null != a.Bf ? [new gvjs_EL(gvjs_0a,a.Bf)] : []
}
;
function gvjs_BS(a, b) {
    gvjs_yS.call(this, a, [gvjs_Yj]);
    this.a2 = null == b ? !0 : b
}
gvjs_q(gvjs_BS, gvjs_yS);
gvjs_BS.prototype.cH = function(a, b, c) {
    switch (a.type()) {
    case gvjs_Sr:
        gvjs_Np(c.selected, a.xb.ROW_INDEX, this.a2);
        break;
    case gvjs_yr:
        gvjs_Pp(c.selected, a.xb.ROW_INDEX, a.xb.COLUMN_INDEX, this.a2);
        break;
    case gvjs_zr:
        gvjs_Op(c.selected, a.xb.COLUMN_INDEX, this.a2)
    }
    return !0
}
;
gvjs_BS.prototype.Gk = function(a) {
    a = a.selected.getSelection();
    return gvjs_s(a, function(a) {
        var b = a.row;
        a = a.column;
        if (null != b && null != a)
            b = gvjs_yL(a, b);
        else if (null != b)
            b = gvjs_vL(b);
        else if (null != a)
            b = gvjs_xL(a);
        else
            throw Error("Invalid selection. No row or column");
        return new gvjs_EL(gvjs_J,b)
    })
}
;
function gvjs_CS(a, b) {
    gvjs_yS.call(this, a, [gvjs_Yj]);
    this.Mza = null == b ? !0 : b
}
gvjs_q(gvjs_CS, gvjs_yS);
gvjs_CS.prototype.cH = function(a, b, c) {
    a = a.se();
    c.Jn.contains(a) ? c.Jn.remove(a) : (this.Mza && c.Jn.clear(),
    c.Jn.add(a));
    return !0
}
;
gvjs_CS.prototype.Gk = function(a) {
    return gvjs_le(gvjs_je(a.Jn, function(a) {
        return new gvjs_EL(gvjs_J,gvjs_zL(a))
    }))
}
;
function gvjs_DS(a) {
    gvjs_yS.call(this, a, [gvjs_9u, gvjs_$u])
}
gvjs_q(gvjs_DS, gvjs_yS);
gvjs_DS.prototype.cH = function(a, b, c) {
    if (b == gvjs_9u) {
        if (!a.equals(c.Zn))
            return c.Zn = a,
            !0
    } else if (null != c.Zn)
        return c.Zn = null,
        !0;
    return !1
}
;
gvjs_DS.prototype.Gk = function(a) {
    return null != a.Zn ? [new gvjs_EL(gvjs_oi,a.Bf)] : []
}
;
function gvjs_ES(a, b, c) {
    this.dn = a;
    this.featureId = b.clone();
    this.gm = c
}
;function gvjs_FS() {
    this.Ct = new gvjs_me;
    this.rU = null;
    this.v9 = !0
}
gvjs_FS.prototype.XX = function() {
    return []
}
;
gvjs_FS.prototype.draw = function(a) {
    if (null == this.rU) {
        this.rU = new gvjs_me;
        var b = this.XX(a);
        gvjs_r(b, gvjs_p(this.Yga, this, a, this.rU))
    }
    var b = this.gB(a)
      , c = new gvjs_v(this.Ct.bk());
    gvjs_r(b, function(b) {
        var d = b.featureId.se();
        c.remove(d);
        this.Yga(a, this.Ct, b)
    }, this);
    this.v9 && gvjs_he(c, function(b) {
        var c = this.Ct.get(b);
        a.df(c.dn);
        this.Ct.remove(b)
    }, this)
}
;
gvjs_FS.prototype.Yga = function(a, b, c) {
    var d = c.featureId.se()
      , e = b.get(d, null);
    e && e.q6 && a.df(e.q6);
    "_" === c.gm[0] ? (gvjs_R(e.dn, !1),
    e.q6 = c.dn,
    e.aAa = c.gm,
    a.eo(e.q6, e.featureId, e.aAa)) : e != c && (null === e || e.gm !== c.gm ? (null != e && a.df(e.dn),
    a.eo(c.dn, c.featureId, c.gm)) : a.Le(c.dn, e.dn, c.featureId, c.gm),
    b.set(d, c))
}
;
function gvjs_GS() {
    this.aj = 0
}
gvjs_ = gvjs_GS.prototype;
gvjs_.Cx = function(a, b) {
    return this.Bx(this.scale(a), this.scale(b))
}
;
gvjs_.Bx = function(a, b) {
    return b - a
}
;
gvjs_.hC = function() {
    return this.ni(this.aj)
}
;
gvjs_.Ho = function() {
    return this.aj
}
;
gvjs_.Mt = function(a) {
    this.aj = this.scale(a)
}
;
gvjs_.rw = function(a) {
    this.aj = a
}
;
function gvjs_HS(a, b) {
    this.gy = a;
    this.WL = b
}
gvjs_ = gvjs_HS.prototype;
gvjs_.Cx = function(a, b) {
    return this.gy.Bx(a, b)
}
;
gvjs_.Bx = function(a, b) {
    return this.WL.Bx(a, b)
}
;
gvjs_.hC = function() {
    return this.gy.hC()
}
;
gvjs_.Ho = function() {
    return this.WL.Ho()
}
;
gvjs_.zi = function() {
    return this.gy.zi()
}
;
gvjs_.Mt = function(a) {
    this.rw(this.gy.scale(a))
}
;
gvjs_.rw = function(a) {
    this.gy.rw(a);
    this.WL.Mt(a)
}
;
gvjs_.scale = function(a) {
    a = this.gy.scale(a);
    return this.WL.scale(a)
}
;
gvjs_.ni = function(a) {
    a = this.WL.ni(a);
    return this.gy.ni(a)
}
;
function gvjs_IS() {
    this.aj = 0
}
gvjs_q(gvjs_IS, gvjs_GS);
gvjs_IS.prototype.scale = function(a) {
    return null != a ? a.getTime() : null
}
;
gvjs_IS.prototype.ni = function(a) {
    if (null === a)
        return null;
    var b = new Date;
    b.setTime(a);
    return b
}
;
gvjs_IS.prototype.zi = function() {
    return !1
}
;
function gvjs_JS() {
    this.aj = 0;
    this.yi = {};
    this.bL = []
}
gvjs_q(gvjs_JS, gvjs_GS);
gvjs_JS.prototype.zi = function() {
    return !0
}
;
function gvjs_KS(a) {
    return gvjs_s(a.bL, function(a, c) {
        return {
            v: c + .5,
            f: a
        }
    })
}
gvjs_JS.prototype.scale = function(a) {
    if (null === a)
        return null;
    a = String(a);
    return a in this.yi ? this.yi[a] + .5 : null
}
;
gvjs_JS.prototype.ni = function(a) {
    return null != a && (a -= .5,
    0 <= a && a < this.bL.length) ? this.bL[a] : null
}
;
gvjs_JS.prototype.add = function(a, b) {
    var c = null;
    a = String(a);
    a in this.yi && b || (this.yi[a] = c = this.bL.length,
    this.bL.push(a));
    return c + .5
}
;
function gvjs_LS(a) {
    this.De = a
}
gvjs_ = gvjs_LS.prototype;
gvjs_.Cx = function(a, b) {
    return this.De.Bx(a, b)
}
;
gvjs_.Bx = function(a, b) {
    return this.De.Cx(a, b)
}
;
gvjs_.hC = function() {
    return this.De.Ho()
}
;
gvjs_.Ho = function() {
    return this.De.hC()
}
;
gvjs_.Mt = function(a) {
    this.De.rw(a)
}
;
gvjs_.rw = function(a) {
    this.De.Mt(a)
}
;
gvjs_.zi = function() {
    return this.De.zi()
}
;
gvjs_.scale = function(a) {
    return this.De.ni(a)
}
;
gvjs_.ni = function(a) {
    return this.De.scale(a)
}
;
function gvjs_MS() {
    this.aj = 0
}
gvjs_q(gvjs_MS, gvjs_GS);
gvjs_MS.prototype.scale = function(a) {
    return null != a ? Number(a) : null
}
;
gvjs_MS.prototype.ni = function(a) {
    return null != a ? a : null
}
;
gvjs_MS.prototype.zi = function() {
    return !1
}
;
function gvjs_NS(a, b) {
    this.aj = 0;
    this.Co = {
        start: a ? a.start : 0,
        end: a ? a.end : 1
    };
    this.mA = {
        start: b ? b.start : 0,
        end: b ? b.end : 1
    }
}
gvjs_q(gvjs_NS, gvjs_MS);
gvjs_NS.prototype.domain = function(a, b) {
    a = null != a ? this.Co.start : a;
    b = null != b ? this.Co.end : b;
    this.Co = {
        start: a,
        end: b
    };
    return this
}
;
gvjs_NS.prototype.range = function(a, b) {
    a = null != a ? this.Co.start : a;
    b = null != b ? this.Co.end : b;
    this.mA = {
        start: a,
        end: b
    };
    return this
}
;
gvjs_NS.prototype.scale = function(a) {
    return null != a ? (a - this.Co.start) / (this.Co.end - this.Co.start) * (this.mA.end - this.mA.start) + this.mA.start : null
}
;
gvjs_NS.prototype.ni = function(a) {
    return null != a ? (a - this.mA.start) / (this.mA.end - this.mA.start) * (this.Co.end - this.Co.start) + this.Co.start : null
}
;
function gvjs_OS() {
    this.aj = 0
}
gvjs_q(gvjs_OS, gvjs_GS);
gvjs_OS.prototype.scale = function(a) {
    return gvjs_XD(a)
}
;
gvjs_OS.prototype.ni = function(a) {
    return null === a ? null : gvjs_TD(a).reverse()
}
;
gvjs_OS.prototype.zi = function() {
    return !1
}
;
var gvjs_PS = {};
gvjs_PS[gvjs_Ua] = gvjs_JS;
gvjs_PS.string = gvjs_JS;
gvjs_PS.number = gvjs_MS;
gvjs_PS.date = gvjs_IS;
gvjs_PS.datetime = gvjs_IS;
gvjs_PS.timeofday = gvjs_OS;
function gvjs_QS() {
    this.aj = this.scale([0, 0, 0]);
    this.hW = new gvjs_OS;
    this.aI = new gvjs_IS
}
gvjs_ = gvjs_QS.prototype;
gvjs_.Cx = function(a, b) {
    return this.hW.Cx(a, b)
}
;
gvjs_.Bx = function(a, b) {
    return this.aI.Cx(a, b)
}
;
gvjs_.hC = function() {
    return this.ni(this.aj)
}
;
gvjs_.Ho = function() {
    return this.aj
}
;
gvjs_.Mt = function(a) {
    this.aj = this.scale(a)
}
;
gvjs_.rw = function(a) {
    this.aj = a
}
;
gvjs_.zi = function() {
    return !1
}
;
gvjs_.scale = function(a) {
    return null === a ? null : gvjs_ZD(a)
}
;
gvjs_.ni = function(a) {
    return null === a ? null : gvjs_TD(gvjs_SD([a.getUTCMilliseconds(), a.getUTCSeconds(), a.getUTCMinutes(), a.getUTCHours(), a.getUTCDate() - 1, a.getUTCMonth(), a.getUTCFullYear() - 1970])).reverse()
}
;
function gvjs_RS(a) {
    this.Eh = a;
    this.uu = new gvjs_me;
    this.Wt = new gvjs_me
}
gvjs_RS.prototype.mq = function(a, b) {
    a = gvjs_MM(this.Eh, this.uu.get(a));
    if (2 > this.Wt.Bb() || null == b)
        return a;
    a = gvjs_Zc(a);
    b = this.Wt.get(b);
    return gvjs_Xc(gvjs_4c(a, [255, 255, 255], 1 - b / this.Wt.Bb()))
}
;
function gvjs_SS(a, b) {
    this.qR = a;
    this.Poa = b;
    this.uu = new gvjs_me;
    this.Wt = new gvjs_me
}
gvjs_SS.prototype.gu = function(a, b) {
    this.uu.Ie(a) || this.uu.set(a, this.uu.Bb());
    null != b && !this.Wt.Ie(b) && this.Wt.set(b, this.Wt.Bb())
}
;
gvjs_SS.prototype.Rc = function() {
    var a = new gvjs_LM(this.uu.Bb(),this.qR,this.Poa)
      , a = new gvjs_RS(a);
    a.uu = this.uu.clone();
    a.Wt = this.Wt.clone();
    return a
}
;
function gvjs_TS() {
    this.Ct = new gvjs_me;
    this.Ba = this.Ea = this.rU = null
}
gvjs_ = gvjs_TS.prototype;
gvjs_.vm = function() {}
;
gvjs_.dM = function(a) {
    this.Ba = a;
    this.sf(a.fc())
}
;
gvjs_.sf = function(a) {
    this.Ea = a
}
;
gvjs_.fc = function() {
    return this.Ea
}
;
gvjs_.draw = function(a) {
    var b = new gvjs_me;
    gvjs_r(this.Ba.Lh, function(c) {
        var d = c.cba.se();
        this.Ct.Ie(d) ? c.dn = this.Ct.get(d).dn : a.ht[c.fva].add(c.dn());
        b.set(d, c)
    }, this);
    gvjs_he(this.Ct.Br(!0), function(a) {
        b.Ie(a)
    }, this);
    this.Ct = b;
    gvjs_rS(a)
}
;
function gvjs_US(a) {
    gvjs_tS.call(this, a)
}
gvjs_q(gvjs_US, gvjs_tS);
gvjs_US.prototype.to = function(a) {
    var b = new gvjs_TS;
    b.dM(a);
    return b
}
;
function gvjs_VS(a, b, c) {
    this.label = a;
    this.va = b;
    this.textAlign = c || null
}
gvjs_VS.prototype.Db = function(a) {
    for (var b = this.label.split("\n"), c = 0, d = 0, e = b.length; d < e; d++)
        c = Math.max(c, a(b[d], this.va));
    return c
}
;
function gvjs_WS(a) {
    this.K = a ? a.element() : null;
    this.VS = a ? a.wK() : null;
    this.bg = a ? a.left() : null;
    this.Jj = a ? a.top() : null;
    this.ha = a ? a.width() : null;
    this.Ma = a ? a.height() : null;
    this.WB = a ? a.nc() : null;
    this.hd = a ? gvjs_qc(a.children()) : [];
    this.At = a ? gvjs_u(a.properties()) : {}
}
gvjs_ = gvjs_WS.prototype;
gvjs_.Rc = function() {
    return new gvjs_NF(this.K,this.VS,this.hd,this.bg,this.Jj,this.ha,this.Ma,this.WB,this.At)
}
;
gvjs_.property = function(a, b) {
    return null != b ? (this.At[a] = b,
    this) : this.At[a]
}
;
gvjs_.Ra = function(a) {
    this.hd.push(a);
    return this
}
;
gvjs_.Uz = function(a) {
    this.K = a;
    return this
}
;
gvjs_.j = function() {
    return this.K
}
;
gvjs_.Nt = function(a) {
    this.bg = a;
    return this
}
;
gvjs_.Qn = function(a) {
    this.Jj = a;
    return this
}
;
gvjs_.jv = function() {
    return this.Jj
}
;
gvjs_.mh = function(a) {
    this.ha = a;
    return this
}
;
gvjs_.Db = function() {
    return this.ha
}
;
gvjs_.nl = function(a) {
    this.Ma = a;
    return this
}
;
gvjs_.getHeight = function() {
    return this.Ma
}
;
function gvjs_XS(a) {
    this.Pc = a || {}
}
gvjs_ = gvjs_XS.prototype;
gvjs_.children = function() {
    return null
}
;
gvjs_.clone = function() {
    var a = gvjs_Ed(this.Pc);
    return new gvjs_XS(a)
}
;
gvjs_.getStyle = function(a, b) {
    a = this.Pc[a];
    return null == a && null != b ? b : a
}
;
gvjs_.setStyle = function(a, b) {
    if ("padding" === a || a === gvjs_Nv)
        return this.setStyle(a + ".left", b).setStyle(a + ".right", b).setStyle(a + ".top", b).setStyle(a + ".bottom", b);
    this.Pc[a] = b;
    return this
}
;
function gvjs_YS(a, b) {
    for (var c in b)
        a.setStyle(c, b[c]);
    return a
}
gvjs_.layout = function(a, b, c) {
    b = {};
    gvjs_Vg(b, this.Pc);
    var d, e = gvjs_MF(gvjs_LF((new gvjs_KF).Nt(this.getStyle("padding.left", 0)), this.getStyle("padding.right", 0)), this.getStyle("padding.bottom", 0)).Qn(this.getStyle("padding.top", 0));
    d = gvjs_MF(gvjs_LF((new gvjs_KF).Nt(this.getStyle("margin.left", 0)), this.getStyle("margin.right", 0)), this.getStyle(gvjs_bS, 0)).Qn(this.getStyle("margin.top", 0));
    var f = gvjs_MF(gvjs_LF((new gvjs_KF).Nt(this.getStyle("border.left", 0)), this.getStyle("border.right", 0)), this.getStyle("border.bottom", 0)).Qn(this.getStyle("border.top", 0))
      , g = gvjs_MF(gvjs_LF((new gvjs_KF).Nt(e.left() + d.left() + f.left()), e.right() + d.right() + f.right()).Qn(e.top() + d.top() + f.top()), e.bottom() + d.bottom() + f.bottom())
      , h = c ? c.width : null
      , k = c ? c.height : null
      , l = this.getStyle(gvjs_nb);
    null != l && gvjs_Rc(l) || (l = null);
    null != h && gvjs_Rc(h) && (null == l || Infinity == l || l > h) && (l = h);
    null != l && gvjs_Rc(l) && (l -= g.width());
    h = this.getStyle(gvjs_3a);
    null != h && gvjs_Rc(h) || (h = null);
    null != k && gvjs_Rc(k) && (null == h || Infinity == h || h > k) && (h = k);
    null != h && gvjs_Rc(h) && (h -= g.height());
    d = {
        padding: e,
        margin: d,
        border: f,
        hl: g,
        content: {
            width: null != l ? l : null,
            height: null != h ? h : null
        }
    };
    null != d.content.width && (d.content.width = Math.max(0, d.content.width));
    null != d.content.height && (d.content.height = Math.max(0, d.content.height));
    e = (new gvjs_WS).Uz(this);
    e.VS = d;
    null != d.content.width && e.mh(d.content.width + d.hl.width());
    null != d.content.height && e.nl(d.content.height + d.hl.height());
    f = e;
    e = (e = this.t2(a, e, d, b)) || f;
    a = b.halign || 0;
    d = b.valign || 0;
    e.Nt(e.bg || 0);
    e.Qn(e.jv() || 0);
    f = b[gvjs_$R];
    null != f && gvjs_Rc(f) && e.mh(f);
    b = b["min-height"];
    null != b && gvjs_Rc(b) && e.nl(b);
    b = (f = e.WB) ? f.width : 0;
    f = f ? f.height : 0;
    c && (e.Db() > c.width && e.mh(c.width),
    e.getHeight() > c.height && e.nl(c.height));
    e.WB = new gvjs_z(b,f);
    c && null != c.width && a && e.Db() < c.width && e.Nt(a * c.width - e.Db() * a + e.bg);
    c && null != c.height && d && e.getHeight() < c.height && e.Qn(d * c.height - e.getHeight() * d + e.jv());
    return e.Rc()
}
;
gvjs_.t2 = function(a, b, c) {
    a = b.Db();
    var d = b.getHeight();
    return b.mh(null == a ? c.hl.width() : a).nl(null == d ? c.hl.height() : d)
}
;
function gvjs_ZS(a, b, c) {
    this.Pc = c || {};
    this.Ke = new gvjs_z(a,b);
    this.Gp = gvjs_Cc(null, this.Ke.width * this.Ke.height)
}
gvjs_q(gvjs_ZS, gvjs_XS);
gvjs_ = gvjs_ZS.prototype;
gvjs_.Pk = function() {
    return this.Ke.clone()
}
;
gvjs_.clone = function() {
    for (var a = gvjs_Ed(this.Pc), b = this.Ke.width, c = this.Ke.height, a = new gvjs_ZS(b,c,a), d = 0; d < b; d++)
        for (var e = 0; e < c; e++) {
            var f = this.Gp[e * this.Ke.width + d];
            f && a.wc(d, e, f.clone())
        }
    return a
}
;
gvjs_.children = function() {
    return gvjs_ac(this.Gp, gvjs_de())
}
;
gvjs_.xL = function(a, b) {
    this.Gp[b * this.Ke.width + a] = null;
    return this
}
;
gvjs_.wc = function(a, b, c) {
    this.Gp[b * this.Ke.width + a] = c;
    return this
}
;
function gvjs__S(a, b, c, d, e) {
    var f = null == d ? !1 : d
      , g = null == e ? !1 : e
      , h = a.Ke.width;
    e = c && c.bQ || {};
    d = c && c.aQ || {};
    for (var k = gvjs_Cc(0, h), l = gvjs_Cc(0, a.Ke.height), m = [], n = {}, p = 0; p < a.Gp.length; p++)
        if (n[p])
            m.push(void 0);
        else {
            var q = p % h
              , r = (p - q) / h
              , t = a.Gp[p] || new gvjs_XS
              , u = t.getStyle("colspan");
            if (!gvjs_n(u) || 1 > u)
                u = 1;
            var w = t.getStyle("rowspan");
            if (!gvjs_n(w) || 1 > w)
                w = 1;
            var v = void 0;
            if (c && (!f || !g)) {
                for (var x = f ? Infinity : 0, y = g ? Infinity : 0, v = q, z = q + u; v < z; v++)
                    for (var x = x + c.Yc[v], A = r, B = r + w; A < B; A++)
                        n[A * a.Ke.width + v] = !0,
                        y += c.Uc[A];
                v = new gvjs_z(x,y)
            }
            var C = t.layout(b, {}, v)
              , x = t.getStyle(gvjs_nb)
              , y = t.getStyle(gvjs_3a);
            if (!v && (Infinity == x || Infinity == y)) {
                if (Infinity == x)
                    for (v = q,
                    z = q + u; v < z; v++)
                        e[v] = !0;
                if (Infinity == y)
                    for (A = r,
                    B = r + w; A < B; A++)
                        d[A] = !0
            }
            m.push(C);
            1 >= u && (k[q] = Math.max(C.width(), k[q]));
            if (c && !f)
                for (v = q,
                z = q + u; v < z; v++)
                    gvjs_Rc(c.Yc[v]) && (k[v] = Math.max(k[v], c.Yc[v]));
            1 >= w && (l[r] = Math.max(C.height(), l[r]));
            if (c && !g)
                for (A = r,
                B = r + w; A < B; A++)
                    gvjs_Rc(c.Uc[A]) && (l[A] = Math.max(l[A], c.Uc[A]))
        }
    a = gvjs_Oc.apply(null, k);
    b = gvjs_Oc.apply(null, l);
    return {
        cells: m,
        bQ: e,
        aQ: d,
        Yc: k,
        Uc: l,
        size: new gvjs_z(a,b)
    }
}
function gvjs_0S(a, b, c) {
    for (var d = 0, e = gvjs_s(b.Yc, function(a, c) {
        b.bQ[c] && d++;
        for (var e = Infinity, f = 0, g = this.Ke.height; f < g; f++) {
            var h = b.cells[f * this.Ke.width + c]
              , k = this.Gp[f * this.Ke.width + c];
            h && k && (k = k.getStyle("colspan"),
            gvjs_n(k) && 1 < k || (e = Math.min(e, a - h.width() + h.nc().width)))
        }
        return Infinity > e ? e : 0
    }, a), f = [], g = 0, h = a.Ke.width; g < h; g++)
        for (var k = 0, l = a.Ke.height; k < l; k++) {
            var m = k * a.Ke.width + g
              , n = b.cells[m];
            if (n = a.Gp[k * a.Ke.width + g]) {
                n = n.getStyle("colspan");
                if (!gvjs_n(n) || 1 > n)
                    n = 1;
                if (1 < n) {
                    var p = {
                        index: m,
                        columns: {
                            Mz: [],
                            zo: []
                        }
                    };
                    f.push(p);
                    m = g;
                    for (n = g + n; m < n; m++)
                        b.bQ[m] ? p.columns.zo.push(m) : p.columns.Mz.push(m)
                }
            }
        }
    g = 0;
    for (h = f.length; g < h; g++) {
        var p = f[g]
          , n = b.cells[p.index]
          , q = 0
          , r = 0;
        gvjs_r(p.columns.Mz, function(a) {
            q += e[a];
            b.Yc[a] -= e[a];
            b.size.width -= e[a];
            r += b.Yc[a];
            e[a] = 0
        });
        gvjs_r(p.columns.zo, function(a) {
            q += e[a];
            b.Yc[a] -= e[a];
            b.size.width -= e[a];
            r += b.Yc[a];
            e[a] = 0
        });
        if (r < n.width())
            if (0 < p.columns.zo.length)
                q = Math.max(0, n.width() - r),
                gvjs_r(p.columns.zo, function(a) {
                    var c = b.Yc[a];
                    b.Yc[a] += q / p.columns.zo.length;
                    b.size.width += b.Yc[a] - c
                });
            else {
                var q = Math.max(0, Math.min(q, r - n.width() + n.nc().width))
                  , t = n.width() - q;
                gvjs_r(p.columns.Mz, function(a) {
                    var c = b.Yc[a];
                    b.Yc[a] = b.Yc[a] / r * t;
                    b.size.width += b.Yc[a] - c
                })
            }
    }
    b.Yc = gvjs_s(gvjs_Ec(b.Yc, e), function(a) {
        b.size.width -= a[1];
        return a[0] - a[1]
    });
    f = a.getStyle(gvjs_Tv, Infinity) - c.hl.width();
    a = a.getStyle(gvjs_$R, -Infinity) - c.hl.width();
    c = gvjs_OF(c.content.width, b.size.width, a, f);
    if (null != c) {
        if (b.size.width < c) {
            if (a = c - b.size.width,
            0 < d) {
                for (var u in b.bQ)
                    b.Yc[Number(u)] += a / d;
                b.size.width = c
            }
        } else if (b.size.width > c)
            if (1 === b.Yc.length)
                b.size.width = b.Yc[0] = c;
            else
                for (u = gvjs_Bc(b.Yc.length),
                gvjs_xc(u, function(a, c) {
                    return -gvjs_wc(b.Yc[a], b.Yc[c])
                }),
                g = 0,
                h = u.length - 1; g < h; g++)
                    if (a = b.Yc[u[g]],
                    f = b.Yc[u[g + 1]],
                    a !== f) {
                        f = a * (g + 1) - f;
                        k = b.size.width - c;
                        a = f;
                        f >= k && (a = k);
                        f = 0;
                        for (k = g; f <= k; f++)
                            b.Yc[u[f]] -= a / (g + 1);
                        b.size.width -= a;
                        if (b.size.width <= c)
                            break
                    }
        if (b.size.width !== c) {
            g = 0;
            for (h = b.Yc.length; g < h; g++)
                b.Yc[g] = 0 >= b.size.width ? c / b.Yc.length : b.Yc[g] / b.size.width * c;
            b.size.width = c
        }
    }
}
function gvjs_1S(a, b, c) {
    for (var d = 0, e = gvjs_s(b.Uc, function(a, c) {
        b.aQ[c] && d++;
        for (var e = Infinity, f = 0, g = this.Ke.width; f < g; f++) {
            var h = b.cells[c * this.Ke.width + f]
              , k = this.Gp[c * this.Ke.width + f];
            h && k && (k = k.getStyle("rowspan"),
            gvjs_n(k) && 1 < k || (e = Math.min(e, a - h.height() + h.nc().height)))
        }
        return Infinity > e ? e : 0
    }, a), f = [], g = 0, h = a.Ke.height; g < h; g++)
        for (var k = 0, l = a.Ke.width; k < l; k++) {
            var m = g * a.Ke.width + k
              , n = b.cells[m];
            if (n = a.Gp[g * a.Ke.width + k]) {
                n = n.getStyle("rowspan");
                if (!gvjs_n(n) || 1 > n)
                    n = 1;
                if (1 < n) {
                    var p = {
                        index: m,
                        rows: {
                            Mz: [],
                            zo: []
                        }
                    };
                    f.push(p);
                    m = g;
                    for (n = g + n; m < n; m++)
                        b.aQ[m] ? p.rows.zo.push(m) : p.rows.Mz.push(m)
                }
            }
        }
    g = 0;
    for (h = f.length; g < h; g++) {
        var p = f[g]
          , n = b.cells[p.index]
          , q = 0
          , r = 0;
        gvjs_r(p.rows.Mz, function(a) {
            q += e[a];
            b.Uc[a] -= e[a];
            b.size.height -= e[a];
            r += b.Uc[a];
            e[a] = 0
        });
        gvjs_r(p.rows.zo, function(a) {
            q += e[a];
            b.Uc[a] -= e[a];
            b.size.height -= e[a];
            r += b.Uc[a];
            e[a] = 0
        });
        if (r < n.height())
            if (0 < p.rows.zo.length)
                q = Math.max(0, n.height() - r),
                gvjs_r(p.rows.zo, function(a) {
                    var c = b.Uc[a];
                    b.Uc[a] += q / p.rows.zo.length;
                    b.size.height += b.Uc[a] - c
                });
            else {
                var q = Math.max(0, Math.min(q, r - n.height() + n.nc().height))
                  , t = n.height() - q;
                gvjs_r(p.rows.Mz, function(a) {
                    var c = b.Uc[a];
                    b.Uc[a] = b.Uc[a] / r * t;
                    b.size.height += b.Uc[a] - c
                })
            }
    }
    b.Uc = gvjs_s(gvjs_Ec(b.Uc, e), function(a) {
        b.size.height -= a[1];
        return a[0] - a[1]
    });
    f = a.getStyle("max-height", Infinity) - c.hl.height();
    a = a.getStyle("min-height", -Infinity) - c.hl.height();
    c = gvjs_OF(c.content.height, b.size.height, a, f);
    if (null != c) {
        if (b.size.height < c) {
            if (a = c - b.size.height,
            0 < d) {
                for (var u in b.aQ)
                    b.Uc[Number(u)] += a / d;
                b.size.height = c
            }
        } else if (b.size.height > c)
            if (1 === b.Uc.length)
                b.size.height = b.Uc[0] = c;
            else
                for (u = gvjs_Bc(b.Uc.length),
                gvjs_xc(u, function(a, c) {
                    return -gvjs_wc(b.Uc[a], b.Uc[c])
                }),
                g = 0,
                h = u.length - 1; g < h; g++)
                    if (a = b.Uc[u[g]],
                    f = b.Uc[u[g + 1]],
                    a !== f) {
                        f = a * (g + 1) - f;
                        k = b.size.height - c;
                        a = f;
                        f >= k && (a = k);
                        f = 0;
                        for (k = g; f <= k; f++)
                            b.Uc[u[f]] -= a / (g + 1);
                        b.size.height -= a;
                        if (b.size.height <= c)
                            break
                    }
        if (b.size.height !== c) {
            g = 0;
            for (h = b.Uc.length; g < h; g++)
                b.Uc[g] = 0 >= b.size.height ? c / b.Uc.length : b.Uc[g] / b.size.height * c;
            b.size.height = c
        }
    }
}
gvjs_.t2 = function(a, b, c) {
    var d = gvjs__S(this, a);
    gvjs_0S(this, d, c);
    gvjs_1S(this, d, c);
    d = gvjs__S(this, a, d, !1, !0);
    gvjs_0S(this, d, c);
    gvjs_1S(this, d, c);
    d = gvjs__S(this, a, d, !1, !1);
    a = this.Ke.width;
    for (var e = this.Ke.height, f = d.Yc, g = d.Uc, h = d.cells, k = gvjs_Cc(Infinity, a), l = gvjs_Cc(Infinity, e), m = d = 0, n = 0; n < e; n++) {
        for (var p = 0, q = 0; q < a; q++) {
            var r = h[n * a + q];
            if (null != r) {
                k[q] = Math.min(k[q], f[q] - r.width() + r.nc().width);
                l[n] = Math.min(l[n], g[n] - r.height() + r.nc().height);
                var t = (r.left() || 0) + p
                  , u = (r.top() || 0) + m
                  , r = (new gvjs_WS(r)).Nt(t).Qn(u).Rc();
                b.Ra(r)
            }
            p += f[q]
        }
        d = Math.max(d, p);
        m += g[n]
    }
    a = new gvjs_z(gvjs_Oc.apply(null, k),gvjs_Oc.apply(null, l));
    b.WB = a;
    a = new gvjs_z(d,m);
    b.mh(a.width + c.hl.width());
    b.nl(a.height + c.hl.height());
    b.Nt(null != b.bg ? b.bg : 0);
    b.Qn(null != b.jv() ? b.jv() : 0);
    return b
}
;
function gvjs_2S(a, b) {
    this.Pc = b || {};
    this.ej = a
}
gvjs_q(gvjs_2S, gvjs_XS);
gvjs_2S.prototype.clone = function() {
    var a = gvjs_Ed(this.Pc);
    return new gvjs_2S(this.getContent(),a)
}
;
gvjs_2S.prototype.getContent = function() {
    return this.ej
}
;
gvjs_2S.prototype.setContent = function(a) {
    this.ej = a;
    return this
}
;
gvjs_2S.prototype.t2 = function(a, b, c) {
    var d = this.Pc
      , e = this.getContent();
    if (null === e)
        return b.mh(0),
        b.nl(0),
        b;
    var f = b.Db()
      , f = (null == f ? Infinity : f) - c.hl.width()
      , g = d[gvjs_aS];
    null == g && (g = Infinity);
    0 >= g ? e = [] : (e = gvjs_SF(a, e, d, f, g),
    e = gvjs_s(e.Z, gvjs_Pb));
    e = e.join("\n");
    a = a(e, d);
    b.mh(Math.min(a.width + c.hl.width(), b.Db() || Infinity));
    b.property(gvjs_I, e);
    d.width = b.Db() - c.hl.width();
    b.property(gvjs_eb, d);
    b.nl(a.height + c.hl.height());
    return b
}
;
var gvjs_3S = {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: gvjs_Lq,
    700: "#616161",
    800: "#424242",
    900: "#212121"
};
function gvjs_4S(a) {
    this.zq = (a || {}).maxWidth || null
}
var gvjs_yia = {
    "line-spacing": 5,
    "max-lines": 2,
    fill: gvjs_3S[gvjs_gr],
    "font.family": gvjs_Vr,
    "font.size": 14,
    "font.weight": 500
}
  , gvjs_5S = {
    fill: gvjs_3S[gvjs_er],
    "font.family": gvjs_Vr,
    "font.size": 14
}
  , gvjs_zia = {
    "max-lines": 1,
    fill: gvjs_3S[gvjs_cr],
    "font.family": gvjs_Vr,
    "font.size": 14
}
  , gvjs_Aia = {
    "font.family": gvjs_Vr,
    "font.size": 14
}
  , gvjs_6S = {
    "font.family": gvjs_Vr,
    "font.size": 24,
    "max-lines": 1
}
  , gvjs_Bia = {
    "corners.rx": 2,
    "corners.ry": 2,
    "fill.color": gvjs_mb,
    "stroke.color": "#c1c1c1",
    "stroke.width": 1.1,
    "padding.left": 15,
    "padding.right": 15,
    "padding.top": 18,
    "padding.bottom": 18,
    "shadow.xoffset": 0,
    "shadow.yoffset": 2,
    "shadow.radius": 1,
    "shadow.opacity": .2
};
gvjs_4S.prototype.Hu = function(a, b) {
    var c = 20;
    if (1 < b.length)
        b = gvjs_Cia(b);
    else {
        b = b[0];
        b.title || (c = 7);
        var d = new gvjs_ZS(1,2)
          , e = gvjs_7S(b);
        e && (e.setStyle(gvjs_bS, b.Lf ? 15 : 5),
        d.wc(0, 0, e));
        d.wc(0, 1, gvjs_YS(new gvjs_2S(b.value), gvjs_6S).setStyle(gvjs_mu, b.color));
        b = d
    }
    a = (new gvjs_ZS(1,2)).wc(0, 0, gvjs_YS(new gvjs_2S(a), gvjs_yia).setStyle(gvjs_bS, c)).wc(0, 1, b);
    this.zq && a.setStyle(gvjs_Tv, this.zq);
    return gvjs_YS(a, gvjs_Bia)
}
;
function gvjs_7S(a) {
    return a.Lf ? (new gvjs_ZS(1,2)).wc(0, 0, gvjs_YS(new gvjs_2S(a.title || "\u2014"), gvjs_5S).setStyle(gvjs_aS, 1).setStyle(gvjs_bS, 5)).wc(0, 1, gvjs_YS(new gvjs_2S(a.Lf), gvjs_zia)) : a.title ? gvjs_YS(new gvjs_2S(a.title), gvjs_5S).setStyle("line-spacing", 5).setStyle(gvjs_aS, 2) : null
}
function gvjs_Dia(a) {
    for (var b = (new gvjs_ZS(1,a.length)).setStyle(gvjs_nb, Infinity), c = 0, d = a.length; c < d; c++) {
        var e = a[c]
          , e = gvjs_YS(new gvjs_2S(e.value), gvjs_6S).setStyle(gvjs_aS, 1).setStyle(gvjs_mu, e.color);
        b.wc(0, c, e);
        c < d - 1 && e.setStyle(gvjs_bS, 15)
    }
    return b
}
function gvjs_Eia(a) {
    for (var b = (new gvjs_ZS(3,a.length)).setStyle(gvjs_nb, Infinity), c = 0, d = a.length; c < d; c++) {
        var e = a[c]
          , f = gvjs_7S(e);
        f || (f = gvjs_YS(new gvjs_2S("\u2014"), gvjs_5S).setStyle(gvjs_aS, 1));
        e = gvjs_YS(new gvjs_2S(e.value), gvjs_Aia).setStyle(gvjs_Yu, 1).setStyle(gvjs_aS, 1).setStyle(gvjs_mu, e.color);
        c < d - 1 && f.setStyle(gvjs_bS, 15);
        b.wc(0, c, f);
        b.wc(1, c, (new gvjs_XS).setStyle(gvjs_nb, Infinity).setStyle(gvjs_$R, 15));
        b.wc(2, c, e)
    }
    return b
}
function gvjs_Cia(a) {
    return gvjs_dc(a, function(a) {
        return !(a.title || a.Lf)
    }) ? gvjs_Dia(a) : gvjs_Eia(a)
}
;function gvjs_8S(a, b, c, d, e) {
    this.Rm = a;
    this.he = b;
    this.pj = c;
    this.vR = d;
    this.vo = e
}
var gvjs_9S = [gvjs_hS, gvjs_K, gvjs_Ss, gvjs_Oi];
gvjs_8S.prototype.position = function(a, b) {
    if (null == a) {
        var c = 0 === this.vo.x && 0 === this.vo.y ? gvjs_hS : 0 !== this.vo.x && 0 !== this.vo.y ? gvjs_hS : 0 > this.vo.y ? gvjs_hS : 0 < this.vo.x ? gvjs_K : 0 < this.vo.y ? gvjs_Ss : gvjs_Oi;
        a = [];
        for (var d = 0, e = gvjs_9S.length; d < e; d++)
            a.push(c),
            c = gvjs_9b(gvjs_9S, c),
            c = gvjs_9S[(c + 1) % gvjs_9S.length]
    }
    d = 0;
    for (e = a.length; d < e; d++)
        if (c = a[d],
        !b && d === e - 1 || gvjs_Fia(this, c))
            return gvjs_$S(this, c);
    return null != b ? gvjs_$S(this, b) : null
}
;
function gvjs_Fia(a, b) {
    switch (b) {
    case gvjs_hS:
        return a.he.top - a.Rm.top >= a.pj.height;
    case gvjs_Ss:
        return a.Rm.top + a.Rm.height - (a.he.top + a.he.height) >= a.pj.height;
    case gvjs_K:
        return a.Rm.left + a.Rm.width - (a.he.left + a.he.width) >= a.pj.width;
    case gvjs_Oi:
        return a.he.left - a.Rm.left >= a.pj.width;
    case gvjs_1:
        return b = new gvjs_P(a.he.left - (a.pj.width / 2 - a.he.width / 2),a.he.top - (a.pj.height / 2 - a.he.height / 2),a.pj.width,a.pj.height),
        b.left >= a.Rm.left && b.top >= a.Rm.top && b.left + b.width <= a.Rm.left + a.Rm.width && b.top + b.height <= a.Rm.top + a.Rm.height
    }
}
function gvjs_aT(a) {
    return 0 > a.vo.x ? a.he.left + a.vR : 0 < a.vo.x ? a.he.left + a.he.width - a.pj.width - a.vR : a.he.left + a.he.width / 2 - a.pj.width / 2
}
function gvjs_bT(a) {
    return 0 > a.vo.y ? a.he.top + a.vR : 0 < a.vo.y ? a.he.top + a.he.height - a.pj.height - a.vR : a.he.top + a.he.height / 2 - a.pj.height / 2
}
function gvjs_$S(a, b) {
    switch (b) {
    case gvjs_hS:
        return new gvjs_w(gvjs_aT(a),a.he.top - a.pj.height);
    case gvjs_Ss:
        return new gvjs_w(gvjs_aT(a),a.he.top + a.he.height);
    case gvjs_K:
        return new gvjs_w(a.he.left + a.he.width,gvjs_bT(a));
    case gvjs_Oi:
        return new gvjs_w(a.he.left - a.pj.width,gvjs_bT(a));
    case gvjs_1:
        return new gvjs_w(a.he.left - (a.pj.width / 2 - a.he.width / 2),a.he.top - (a.pj.height / 2 - a.he.height / 2))
    }
}
;function gvjs_cT(a) {
    this.pv = gvjs_pc(a, [gvjs_p(this.$xa, this), gvjs_p(this.Yxa, this)]);
    this.debug = !1
}
gvjs_cT.prototype.$xa = function(a, b) {
    if (a.element()instanceof gvjs_2S) {
        var c = a.wK()
          , d = c.margin
          , e = c.padding
          , c = b.x + a.left() + d.left() + e.left();
        b = b.y + a.top() + d.top() + e.top();
        var f = a.width() - d.width() - e.width()
          , d = a.height() - d.height() - e.height()
          , e = a.element().getStyle(gvjs_Yu);
        gvjs_n(e) && gvjs_Rc(e) || (e = 0);
        var g = a.element().getStyle(gvjs_ly);
        gvjs_n(g) && gvjs_Rc(g) || (g = 0);
        c = new gvjs_Qz(c + f * e,b + d * g,void 0,a.property(gvjs_eb));
        c.setStyle(gvjs_I, a.property(gvjs_I));
        return [c]
    }
    return null
}
;
gvjs_cT.prototype.Yxa = function(a, b) {
    var c = a.element()
      , d = a.children()
      , e = []
      , f = a.wK()
      , g = f.margin
      , f = f.padding;
    (c.getStyle(gvjs_Ex) || c.getStyle(gvjs_ou) || c.getStyle(gvjs_Hx) || c.getStyle(gvjs_qu)) && e.push(new gvjs_Pz(b.x + a.left() + g.left(),b.y + a.top() + g.top(),a.width() - g.width(),a.height() - g.height(),c.Pc));
    for (var c = 0, h = d.length; c < h; c++)
        gvjs_rc(e, this.W(d[c], new gvjs_w(b.x + a.left() + g.left() + f.left(),b.y + a.top() + g.top() + f.top())));
    return e
}
;
gvjs_cT.prototype.W = function(a, b) {
    b = b || new gvjs_w(0,0);
    for (var c = [], d = 0, e = this.pv.length; d < e; d++) {
        var f = (0,
        this.pv[d])(a, b);
        if (null !== f) {
            gvjs_rc(c, f);
            break
        }
    }
    this.debug && (e = a.wK(),
    d = e.margin,
    e = e.padding,
    gvjs_rc(c, [new gvjs_Pz(b.x + a.left(),b.y + a.top(),a.width(),a.height(),{
        strokeColor: "red",
        fillColor: gvjs_d
    }), new gvjs_Pz(b.x + a.left() + d.left(),b.y + a.top() + d.top(),a.width() - d.width(),a.height() - d.height(),{
        strokeColor: "green",
        fillColor: gvjs_d
    }), new gvjs_Pz(b.x + a.left() + d.left() + e.left(),b.y + a.top() + d.top() + e.top(),a.width() - d.width() - e.width(),a.height() - d.height() - e.height(),{
        strokeColor: "blue",
        fillColor: gvjs_d
    })]));
    return c
}
;
var gvjs_dT = {
    uN: gvjs_c,
    yN: gvjs_g
};
var gvjs_eT = {
    selectionMode: gvjs_cb,
    groupSize: .65,
    collapseGaps: !0,
    blendingMode: "rgb",
    orientation: gvjs_c,
    stacked: !1,
    chart: {
        style: {
            titleSpacing: 36,
            subtitleSpacing: 4,
            background: {
                fillColor: gvjs_mb,
                stroke: gvjs_Ta,
                "stroke.width": 0
            },
            chartArea: {
                fillColor: gvjs_d
            },
            title: {
                fontSize: 16,
                fillColor: gvjs_3S[gvjs_er]
            },
            subtitle: {
                fontSize: 14,
                fillColor: gvjs_3S[gvjs_cr]
            },
            text: {
                fontName: gvjs_Vr
            }
        }
    },
    legend: {
        style: {
            margin: 40,
            spacing: 16,
            icon: {
                rowspan: 2,
                "corners.rx": 2,
                "corners.ry": 2,
                width: 20,
                height: 12,
                "margin.right": 8
            },
            title: {
                fillColor: gvjs_3S[gvjs_er]
            },
            subtitle: {
                fillColor: gvjs_3S[gvjs_cr],
                "padding.top": 4,
                "max-lines": 1
            },
            selected: {
                title: {
                    fontWeight: 500,
                    fillColor: gvjs_3S[gvjs_gr]
                },
                subtitle: {
                    fontWeight: 500,
                    fillColor: gvjs_3S[gvjs_er]
                }
            }
        }
    },
    axes: {
        all: {
            margin: 6,
            style: {
                baseline: {
                    strokeColor: gvjs_3S[gvjs_dr],
                    strokeWidth: 1
                },
                contextTicks: {
                    fillColor: gvjs_3S[gvjs_gr]
                },
                gridlines: {
                    strokeColor: gvjs_3S["300"],
                    strokeWidth: 1
                },
                label: {
                    fillColor: gvjs_3S[gvjs_gr]
                },
                text: {
                    fontSize: 12
                },
                ticks: {
                    fillColor: gvjs_3S[gvjs_er]
                }
            }
        },
        domain: {
            all: {
                gridlines: !1
            }
        },
        target: {
            all: {
                gridlines: !0
            }
        },
        x: {
            all: {
                ticks: {
                    pixelsPerTick: 100
                }
            }
        },
        y: {
            all: {
                ticks: {
                    pixelsPerTick: 40
                }
            }
        }
    }
};
function gvjs_fT(a) {
    if (null != a)
        try {
            a = gvjs_Tc(a).gc
        } catch (b) {}
    return a
}
function gvjs_gT(a, b) {
    return {
        fillColor: gvjs_fT(gvjs_Mh(a, gvjs_FD(b, gvjs_2))),
        opacity: gvjs_Ih(a, gvjs_FD(b, gvjs_Ei)),
        fontName: gvjs_Mh(a, gvjs_FD(b, gvjs_Du)),
        fontSize: gvjs_F(a, gvjs_FD(b, gvjs_Eu)),
        fontWeight: gvjs_zh(a, gvjs_FD(b, gvjs_Us)) ? gvjs_Us : null,
        italic: gvjs_zh(a, gvjs_FD(b, gvjs_nv)),
        underline: gvjs_zh(a, gvjs_FD(b, gvjs_8x))
    }
}
function gvjs_hT(a, b, c) {
    a = gvjs_Xh(a, b, c);
    return {
        fillColor: gvjs_fT(a.rb()),
        fillOpacity: a.Ne,
        strokeColor: gvjs_fT(a.Ee),
        strokeWidth: a.ac,
        strokeOpacity: a.gi
    }
}
function gvjs_iT(a, b) {
    return {
        axis: gvjs_Mh(a, gvjs_FD(b, gvjs_Lx)),
        title: gvjs_Mh(a, gvjs_FD(b, gvjs_tv)),
        inLegend: gvjs_zh(a, gvjs_FD(b, gvjs_ry))
    }
}
function gvjs_Gia(a) {
    return (a = gvjs_Vh(a, gvjs_yv, gvjs_Aca)) ? a === gvjs_4 ? 0 : a === gvjs_1 ? .5 : 1 : null
}
function gvjs_jT(a, b) {
    var c = gvjs_F(a, gvjs_FD(b, gvjs_Vu))
      , c = {
        baseline: a.ba(gvjs_FD(b, gvjs_Ns)),
        discrete: gvjs_Mh(a, gvjs_FD(b, gvjs_lb)) !== gvjs_H,
        label: gvjs_Mh(a, gvjs_FD(b, gvjs_Sx)),
        gridlines: null != c ? 0 !== c : null,
        range: {
            min: a.ba(gvjs_FD(b, gvjs_py)),
            max: a.ba(gvjs_FD(b, gvjs_oy))
        },
        format: {},
        style: {
            gridlines: {
                strokeColor: gvjs_fT(gvjs_Mh(a, gvjs_FD(b, gvjs_Uu)))
            },
            baseline: {
                strokeColor: gvjs_fT(gvjs_Mh(a, gvjs_FD(b, gvjs_Os)))
            },
            label: gvjs_gT(a, gvjs_FD(b, gvjs_Ux)),
            ticks: gvjs_gT(a, gvjs_FD(b, gvjs_Px)),
            text: gvjs_gT(a, gvjs_FD(b, gvjs_Px))
        }
    }
      , d = gvjs_Mh(a, gvjs_FD(b, gvjs_Gu));
    a = gvjs_xh(a, gvjs_FD(b, gvjs_Hu));
    null != d && (a.pattern = d);
    c.format = a;
    return c
}
function gvjs_kT(a) {
    var b = new gvjs_nh([a]);
    a = gvjs_8g(gvjs_mb, 1);
    return gvjs_Vg(gvjs_uh(b), {
        width: gvjs_F(b, gvjs_nb),
        height: gvjs_F(b, gvjs_3a),
        stacked: gvjs_zh(b, gvjs_mv),
        selectionMode: gvjs_Mh(b, gvjs_7w),
        groupSize: gvjs_2h(b, gvjs_Ks, 1),
        chart: {
            title: gvjs_Mh(b, gvjs_Sx),
            subtitle: gvjs_Mh(b, gvjs_8R),
            style: {
                background: gvjs_hT(b, gvjs_Is, a),
                chartArea: gvjs_hT(b, gvjs_dt, a),
                text: {
                    fontName: gvjs_Mh(b, gvjs_Du),
                    fontSize: gvjs_F(b, gvjs_Eu)
                },
                title: gvjs_gT(b, gvjs_Ux)
            }
        },
        legend: {
            position: gvjs_Mh(b, gvjs_Av),
            style: {
                container: {
                    valign: gvjs_Gia(b)
                },
                text: gvjs_gT(b, gvjs_Bv),
                title: {
                    "max-lines": gvjs_F(b, gvjs_zv)
                }
            }
        },
        axes: {
            all: {
                style: {
                    gridlines: {
                        strokeColor: gvjs_fT(gvjs_Mh(b, gvjs_Tu))
                    },
                    baseline: {
                        strokeColor: gvjs_fT(gvjs_Mh(b, gvjs_Os))
                    }
                }
            },
            domain: gvjs_Vg(gvjs_qd(gvjs_xh(b, "domainAxes"), function(a, d) {
                return gvjs_jT(b, "domainAxes." + d)
            }), {
                all: gvjs_jT(b, gvjs_Nj)
            }),
            target: gvjs_Vg(gvjs_qd(gvjs_xh(b, "targetAxes"), function(a, d) {
                return gvjs_jT(b, "targetAxes." + d)
            }), {
                all: gvjs_jT(b, gvjs_ri)
            }),
            x: gvjs_Vg(gvjs_qd(gvjs_xh(b, "hAxes"), function(a, d) {
                return gvjs_jT(b, "hAxes." + d)
            }), {
                all: gvjs_jT(b, gvjs_Xu)
            }),
            y: gvjs_Vg(gvjs_qd(gvjs_xh(b, gvjs_ky), function(a, d) {
                return gvjs_jT(b, "vAxes." + d)
            }), {
                all: gvjs_jT(b, gvjs_li)
            })
        },
        series: gvjs_Vg(gvjs_qd(gvjs_xh(b, gvjs_9w), function(a, d) {
            return gvjs_iT(b, gvjs_cx + d)
        }), {
            all: gvjs_iT(b, "")
        })
    })
}
;var gvjs_lT = {
    ala: gvjs_Oi,
    Kla: gvjs_K
}
  , gvjs_mT = {
    B8: gvjs_2x,
    e8: gvjs_Ws
};
function gvjs_nT(a) {
    this.ji = a.ticks;
    this.De = a.scale;
    this.ib = a.range;
    this.$b = a.label || void 0;
    this.GG = a.E9;
    this.c6 = a.wk || gvjs_Ws;
    this.Bi = a.gm;
    this.U6 = a.Sia || {};
    this.poa = a.ooa || {};
    this.hh = a.Tda || {}
}
gvjs_nT.prototype.W = function(a, b) {
    var c = []
      , d = new gvjs_x(b.top,b.left + b.width,b.top + b.height,b.left)
      , e = this.c6 === gvjs_Ws ? gvjs_4 : gvjs_3
      , f = null;
    gvjs_r(this.ji.ticks, function(g, h) {
        var k = g.value;
        if (!(this.ib.start > k || this.ib.end < k)) {
            var l = g.label;
            g = l.textAlign || gvjs_1;
            var k = this.De.scale(k) * b.width + b.left
              , p = {};
            gvjs_Hd(p, this.U6);
            l.va.bold && gvjs_Hd(p, this.poa);
            var l = l.label
              , q = b.top;
            switch (e) {
            case gvjs_1:
                q += b.height / 2;
                break;
            case gvjs_3:
                q += b.height
            }
            var r = a.nf(l, p)
              , q = new gvjs_x(q,k + r.width,q + r.height,k);
            switch (g) {
            case gvjs_1:
                var t = r.width / 2;
                q.left -= t;
                q.right -= t;
                break;
            case gvjs_3:
                q.left -= r.width,
                q.right -= r.width
            }
            switch (e) {
            case gvjs_1:
                r = r.height / 2;
                q.top -= r;
                q.bottom -= r;
                break;
            case gvjs_3:
                q.top -= r.height,
                q.bottom -= r.height
            }
            f && 8 > q.left - f.right || (f = q,
            gvjs_Re(d, q),
            g = (new gvjs_Qz(k,b.top,l,p)).style(gvjs_Yu, g === gvjs_3 ? 1 : g === gvjs_1 ? .5 : 0).style(gvjs_ly, e === gvjs_3 ? 1 : e === gvjs_1 ? .5 : 0),
            h = gvjs_wL(this.GG.clone(), gvjs_Ba, h),
            c.push(new gvjs_ES(g,h,this.Bi)))
        }
    }, this);
    if (this.$b) {
        var g = this.$b
          , h = a.nf(g, this.hh);
        e === gvjs_4 ? (g = (new gvjs_Qz((d.right - d.left) / 2 + d.left,d.bottom + 18,g,this.hh)).style(gvjs_Yu, .5).style(gvjs_ly, 0),
        d.bottom += h.height + 18) : (g = (new gvjs_Qz((d.right - d.left) / 2 + d.left,d.top - 18,g,this.hh)).style(gvjs_Yu, .5).style(gvjs_ly, 1),
        d.top -= h.height + 18);
        c.push(new gvjs_ES(g,gvjs_wL(this.GG.clone(), gvjs_Ba, gvjs_sv),this.Bi))
    }
    return {
        size: new gvjs_P(d.left,d.top,d.right - d.left,d.bottom - d.top),
        elements: c
    }
}
;
function gvjs_oT(a) {
    this.na = a.scale;
    this.Ana = a.expand;
    this.iua = a.V$;
    this.fL = a.fL || 50;
    this.size = a.size;
    this.cd = a.cd;
    this.Me = a.Me;
    this.format = a.format;
    this.Wk = null;
    this.ticks = gvjs_Hia(this)
}
gvjs_oT.prototype.OR = function() {}
;
function gvjs_Hia(a) {
    var b = a.hJ(a.cd, a.Me);
    a.OR(b);
    b = gvjs_s(b, function(a) {
        a = a.v;
        return {
            value: a,
            label: this.Fs(a)
        }
    }, a);
    if (0 === b.length)
        b.push({
            value: a.cd,
            label: a.Fs(a.cd)
        }),
        a.cd != a.Me && b.push({
            value: a.Me,
            label: a.Fs(a.Me)
        });
    else if (a.Ana) {
        var c = a.cd
          , d = a.Me
          , e = d - c
          , f = Math.min(b[0].value.valueOf(), c.valueOf());
        .25 >= (c - f) / e && (a.cd = f);
        c = Math.max(b[b.length - 1].value.valueOf(), d.valueOf());
        .25 >= (c - d) / e && (a.Me = c)
    }
    if (a.iua) {
        for (; b[0].value < a.cd; )
            b.shift();
        b[0].value != a.cd && (d = a.Fs(a.cd),
        null != d && b.unshift({
            value: a.cd,
            label: d
        }));
        for (; b[b.length - 1].value > a.Me; )
            b.pop();
        b[b.length - 1].value != a.Me && (d = a.Fs(a.Me),
        null != d && b.push({
            value: a.Me,
            label: d
        }))
    }
    return gvjs_ac(b, function(a) {
        return null != a.label
    })
}
gvjs_oT.prototype.Fs = function(a) {
    a = this.na.ni(a);
    return null == a ? null : {
        label: null != this.Wk ? this.Wk.yc(a) : String(a),
        va: {}
    }
}
;
function gvjs_pT(a) {
    this.ji = a.ticks;
    this.De = a.scale;
    this.ib = a.range;
    this.$b = a.label || void 0;
    this.GG = a.E9;
    this.Bi = a.gm;
    this.c6 = a.wk || gvjs_Oi;
    this.U6 = a.Sia || {};
    this.hh = a.Tda || {}
}
gvjs_pT.prototype.W = function(a, b) {
    var c = []
      , d = new gvjs_x(b.top,b.left + b.width,b.top + b.height,b.left)
      , e = this.c6 === gvjs_Oi ? gvjs_3 : gvjs_4;
    gvjs_r(this.ji.ticks, function(f, g) {
        var h = f.value;
        if (!(this.ib.start > h || this.ib.end < h)) {
            var k = f.label;
            f = k.textAlign || gvjs_1;
            var h = this.De.scale(h) * b.height + b.top
              , l = {};
            gvjs_Hd(l, k.va, this.U6);
            var k = k.label
              , q = b.left;
            switch (e) {
            case gvjs_1:
                q += b.width / 2;
                break;
            case gvjs_3:
                q += b.width
            }
            var r = a.nf(k, l)
              , q = new gvjs_x(h,q + r.width,h + r.height,q);
            switch (e) {
            case gvjs_1:
                var t = r.width / 2;
                q.left -= t;
                q.right -= t;
                break;
            case gvjs_3:
                q.left -= r.width,
                q.right -= r.width
            }
            switch (f) {
            case gvjs_1:
                r = r.height / 2;
                q.top -= r;
                q.bottom -= r;
                break;
            case gvjs_3:
                q.top -= r.height,
                q.bottom -= r.height
            }
            gvjs_Re(d, q);
            f = [(new gvjs_Qz(b.left,h,k,l)).style(gvjs_Yu, e === gvjs_3 ? 1 : e === gvjs_1 ? .5 : 0).style(gvjs_ly, f === gvjs_3 ? 1 : f === gvjs_1 ? .5 : 0)];
            gvjs_r(f, function(a, b) {
                b = gvjs_wL(gvjs_wL(this.GG.clone(), gvjs_Ba, g), gvjs_mS, b);
                c.push(new gvjs_ES(a,b,this.Bi))
            }, this)
        }
    }, this);
    if (this.$b) {
        var f = this.$b, g = a.nf(f, this.hh), h;
        e === gvjs_4 ? (h = (new gvjs_Qz(d.right + 18,(d.bottom - d.top) / 2 + d.top,f,this.hh)).style(gvjs_Zw, 90).style(gvjs_Yu, .5).style(gvjs_ly, 1),
        d.right += g.height + 18) : e === gvjs_3 && (h = (new gvjs_Qz(d.left - 18,(d.bottom - d.top) / 2 + d.top,f,this.hh)).style(gvjs_Zw, -90).style(gvjs_Yu, .5).style(gvjs_ly, 1),
        d.left -= g.height + 18);
        c.push(new gvjs_ES(h,gvjs_wL(this.GG.clone(), gvjs_Ba, gvjs_sv),this.Bi))
    }
    return {
        size: new gvjs_P(d.left,d.top,d.right - d.left,d.bottom - d.top),
        elements: c
    }
}
;
function gvjs_qT() {}
gvjs_q(gvjs_qT, gvjs_6h);
gvjs_qT.prototype.format = function(a, b) {
    for (var c = 0; c < a.fa(); c++) {
        var d = a.getValue(c, b);
        null != d && (d = this.yc(d),
        a.Wz(c, b, d))
    }
}
;
gvjs_qT.prototype.mQ = function(a) {
    return String(a)
}
;
function gvjs_rT(a) {
    var b = a && a.granularity;
    null != b && gvjs_n(b) || (b = 1);
    b = {
        pattern: 1 < b ? gvjs_qk : 1 === b ? "HH:mm:ss" : "HH:mm:ss.SSS"
    };
    a && gvjs_Hd(b, a);
    this.vd = new gvjs_7h(b)
}
gvjs_q(gvjs_rT, gvjs_6h);
gvjs_rT.prototype.format = function(a, b) {
    if (a.X(b) === gvjs_ib)
        for (var c = a.fa(), d = 0; d < c; d++) {
            var e = a.getValue(d, b)
              , e = this.yc(e);
            a.Wz(d, b, e)
        }
}
;
gvjs_rT.prototype.mQ = function(a) {
    a = gvjs_ZD(a);
    return this.vd.yc(a)
}
;
var gvjs_sT = {};
gvjs_sT[gvjs_Ua] = gvjs_qT;
gvjs_sT.string = gvjs_qT;
gvjs_sT.number = gvjs_ai;
gvjs_sT.date = gvjs_7h;
gvjs_sT.datetime = gvjs_7h;
gvjs_sT.timeofday = gvjs_rT;
function gvjs_tT(a) {
    this.ji = a.ticks;
    this.De = a.scale;
    this.FG = a.eY;
    this.Bi = a.gm;
    this.zL = a.eb || !1;
    this.S4 = a.Hb || !1;
    this.kJ = a.style.eb;
    this.HG = gvjs_Vg({}, this.kJ, a.style.Hb)
}
gvjs_tT.prototype.EL = function(a, b, c, d) {
    if (null == c)
        return null;
    a = c * b.height + b.top;
    return new gvjs_Oz(b.left,a,b.left + b.width,a,d)
}
;
gvjs_tT.prototype.W = function(a, b) {
    var c = []
      , d = !1;
    this.zL && gvjs_r(this.ji.ticks, function(e, f) {
        e = e.value;
        e = this.De.scale(e);
        if (!(0 > e || 1 < e)) {
            var g = this.kJ;
            e === this.De.Ho() && (g = this.HG,
            d = !0);
            e = this.EL(a, b, e, g);
            null != e && (f = gvjs_wL(this.FG.clone(), gvjs_mS, f),
            c.push(new gvjs_ES(e,f,this.Bi)))
        }
    }, this);
    if (!d && this.S4) {
        var e = this.De.Ho();
        if (0 <= e && 1 >= e && (e = this.EL(a, b, e, this.HG),
        null != e)) {
            var f = gvjs_wL(this.FG.clone(), gvjs_mS, this.ji.ticks.length);
            c.push(new gvjs_ES(e,f,this.Bi))
        }
    }
    return c
}
;
function gvjs_uT(a) {
    this.ji = a.ticks;
    this.De = a.scale;
    this.FG = a.eY;
    this.Bi = a.gm;
    this.zL = a.eb || !1;
    this.S4 = a.Hb || !1;
    this.kJ = a.style.eb;
    this.HG = gvjs_Vg({}, this.kJ, a.style.Hb)
}
gvjs_uT.prototype.EL = function(a, b, c, d) {
    if (null == c)
        return null;
    a = c * b.width + b.left;
    return new gvjs_Oz(a,b.top,a,b.top + b.height,d)
}
;
gvjs_uT.prototype.W = function(a, b) {
    var c = []
      , d = !1;
    this.zL && gvjs_r(this.ji.ticks, function(e, f) {
        e = e.value;
        e = this.De.scale(e);
        if (!(0 > e || 1 < e)) {
            var g = this.kJ;
            e === this.De.Ho() && (g = this.HG,
            d = !0);
            e = this.EL(a, b, e, g);
            null != e && (f = gvjs_wL(this.FG.clone(), gvjs_mS, f),
            c.push(new gvjs_ES(e,f,this.Bi)))
        }
    }, this);
    if (!d && this.S4) {
        var e = this.De.Ho();
        if (0 <= e && 1 >= e && (e = this.EL(a, b, e, this.HG),
        null != e)) {
            var f = gvjs_wL(this.FG.clone(), gvjs_mS, this.ji.ticks.length);
            c.push(new gvjs_ES(e,f,this.Bi))
        }
    }
    return c
}
;
function gvjs_vT(a) {
    a = a || {};
    this.Oda = a.style && a.style.spacing || 0;
    this.moa = a.style && a.style.ga || {};
    this.bua = a.style && a.style.icon || {};
    this.JAa = a.style && a.style.title || {};
    this.jAa = a.style && a.style.Lf || {}
}
gvjs_vT.prototype.Hu = function(a) {
    var b = gvjs_YS(new gvjs_ZS(2,2 * a.length - 1), this.moa);
    gvjs_r(a, function(c, d) {
        d *= 2;
        var e = gvjs_YS((new gvjs_XS).setStyle(gvjs_ou, c.color), this.bua).setStyle(gvjs_dv, c.aua);
        b.wc(0, d, e);
        e = c.Lf;
        if (null != c.title || e) {
            var f = gvjs_YS(new gvjs_2S(c.title), this.JAa).setStyle(gvjs_dv, c.yk), g;
            e && (g = gvjs_YS(new gvjs_2S(c.Lf), this.jAa).setStyle(gvjs_dv, c.hAa));
            null == f.getStyle(gvjs_aS) && f.setStyle(gvjs_aS, g ? 1 : 2);
            g ? (c = (new gvjs_ZS(1,2)).wc(0, 0, f),
            c.wc(1, 0, g),
            b.wc(1, d, c)) : b.wc(1, d, f)
        }
        d / 2 + 1 < a.length && 0 < this.Oda && b.wc(1, d + 1, (new gvjs_XS).setStyle(gvjs_3a, this.Oda))
    }, this);
    return b
}
;
function gvjs_wT(a) {
    this.window = {
        x: a.x,
        y: a.y
    };
    this.Bo = a.Fqa || !1
}
gvjs_q(gvjs_wT, gvjs_uS);
function gvjs_Iia(a, b, c) {
    function d(a, b, c) {
        return (0 < b ? gvjs_Ws : gvjs_2x) + (0 < a ? gvjs_K : gvjs_Oi) + (0 < c ? ".ry" : ".rx")
    }
    var e = a.Bo;
    c.style(gvjs_Dt, null).style(gvjs_Et, null).style(gvjs_Ft, null).style(gvjs_Gt, null).style(gvjs_Lt, null).style(gvjs_Mt, null).style(gvjs_Jt, null).style(gvjs_Kt, null);
    for (var f = 0; 2 > f; f++)
        for (var g = 0; 2 > g; g++)
            for (var h = 0; 2 > h; h++) {
                var k = "corners." + d(f, g, h)
                  , l = 0 === g ? -Infinity : Infinity
                  , m = 0 === h ? -Infinity : Infinity
                  , n = a.window.x.ni(0 === f ? -Infinity : Infinity)
                  , l = a.window.y.ni(l)
                  , m = b.getStyle("corners." + d(e ? l : n, e ? n : l, e ? -m : m));
                null != m && c.style(k, m)
            }
}
function gvjs_Jia(a, b) {
    var c = b.Ax
      , d = (new gvjs_Wz(b.Pc)).setData(b.data());
    gvjs_r(c, function(a) {
        switch (a[0]) {
        case "M":
            d.move(this.window.x.scale(this.Bo ? a[2] : a[1]), this.window.y.scale(this.Bo ? a[1] : a[2]));
            break;
        case "L":
            d.line(this.window.x.scale(this.Bo ? a[2] : a[1]), this.window.y.scale(this.Bo ? a[1] : a[2]));
            break;
        default:
            throw Error("Unrecognized command " + a[0]);
        }
    }, a);
    return d
}
gvjs_wT.prototype.transform = function(a) {
    if (a instanceof gvjs_Pz) {
        var b = gvjs_Lz(a)
          , c = this.Bo ? gvjs_E(b, "y") : gvjs_E(b, "x")
          , d = this.Bo ? gvjs_E(b, "x") : gvjs_E(b, "y")
          , e = this.Bo ? gvjs_E(b, gvjs_3a) : gvjs_E(b, gvjs_nb)
          , f = this.Bo ? gvjs_E(b, gvjs_nb) : gvjs_E(b, gvjs_3a)
          , b = c + e
          , e = d + f
          , c = this.window.x.scale(c)
          , b = this.window.x.scale(b)
          , d = this.window.y.scale(d)
          , e = this.window.y.scale(e)
          , d = new gvjs_Pz(c,d,b - c,e - d,a.Pc);
        gvjs_Iia(this, a, d);
        d.data(a.data());
        return d
    }
    if (a instanceof gvjs_Wz)
        return gvjs_Jia(this, a);
    if (a instanceof gvjs_Mz)
        return d = gvjs_Lz(a),
        c = a.Pc,
        (new gvjs_Mz(gvjs_E(d, "r"),this.window.x.scale(gvjs_E(d, this.Bo ? "y" : "x")),this.window.y.scale(gvjs_E(d, this.Bo ? "x" : "y")),c)).setData(a.data());
    throw Error("Projection unknown type: " + a);
}
;
function gvjs_xT(a) {
    this.tC = 0;
    gvjs_oT.call(this, a)
}
gvjs_q(gvjs_xT, gvjs_oT);
gvjs_xT.prototype.OR = function() {
    null != this.format && 0 < gvjs_wd(this.format).length && (this.Wk = new gvjs_7h(this.format))
}
;
gvjs_xT.prototype.Fs = function(a) {
    if (this.Wk)
        return {
            label: this.Wk.yc(new Date(a)),
            va: {}
        };
    var b = !1, c;
    a = new Date(a);
    switch (this.tC) {
    case Dygraph.SECONDLY:
    case Dygraph.TWO_SECONDLY:
    case Dygraph.FIVE_SECONDLY:
    case Dygraph.THIRTY_SECONDLY:
        c = "s";
        break;
    case Dygraph.MINUTELY:
    case Dygraph.TWO_MINUTELY:
    case Dygraph.FIVE_MINUTELY:
    case Dygraph.TEN_MINUTELY:
    case Dygraph.THIRTY_MINUTELY:
        c = ":mm";
        0 === a.getMinutes() || this.Lr ? (b = !0,
        c = 7) : b = !1;
        this.Lr = !1;
        break;
    case Dygraph.HOURLY:
    case Dygraph.TWO_HOURLY:
    case Dygraph.SIX_HOURLY:
        c = "h";
        b = a.getHours();
        0 !== a.getMinutes() && (c += ":mm");
        b = 12 === b || 0 === b || this.Lr;
        this.Lr = this.cd > a.valueOf();
        b && (c += "\n a");
        break;
    case Dygraph.DAILY:
    case Dygraph.TWO_DAILY:
        c = "E";
        0 === a.getDay() || this.Lr ? (c += "\n" + gvjs_Td.MONTH_DAY_SHORT,
        b = !0) : b = !1;
        this.Lr = !1;
        break;
    case Dygraph.WEEKLY:
        c = gvjs_Td.MONTH_DAY_ABBR;
        b = this.Lr;
        this.Lr = !1;
        break;
    case Dygraph.MONTHLY:
    case Dygraph.QUARTERLY:
    case Dygraph.BIANNUAL:
        c = "LLL";
        b = 0 === a.getMonth() || this.Lr;
        this.Lr = this.cd > a.valueOf();
        b && (c += "\n" + gvjs_Td.YEAR_FULL);
        break;
    case Dygraph.ANNUAL:
    case Dygraph.DECADAL:
    case Dygraph.CENTENNIAL:
        c = gvjs_Td.YEAR_FULL
    }
    if (null != c)
        return c = (new gvjs_Nd(c)).format(a),
        {
            label: c,
            va: {
                bold: b
            }
        };
    throw gvjs_iS;
}
;
gvjs_xT.prototype.hJ = function(a, b) {
    var c = this.DH()
      , d = Dygraph.pickDateTickGranularity(a, b, this.size, c);
    return Dygraph.getDateAxis(a, b, d, c)
}
;
gvjs_xT.prototype.DH = function() {
    var a = this
      , b = {
        axisLabelFormatter: function(b, d) {
            a.tC = d;
            return "" + b
        },
        pixelsPerLabel: this.fL
    };
    return function(a) {
        return b[a]
    }
}
;
function gvjs_yT(a) {
    gvjs_oT.call(this, a)
}
gvjs_q(gvjs_yT, gvjs_oT);
gvjs_yT.prototype.Fs = function(a) {
    return {
        label: String(this.na.ni(a)),
        va: {
            Wb: "",
            bold: !1,
            color: gvjs_Ta,
            ob: gvjs_wr,
            fontSize: 13,
            Vc: !1,
            gf: !1
        }
    }
}
;
gvjs_yT.prototype.hJ = function(a, b) {
    var c = this.DH()
      , d = gvjs_s(gvjs_KS(this.na), function(a) {
        return a.v
    });
    return Dygraph.numericTicks(a, b, this.size, c, void 0, d)
}
;
gvjs_yT.prototype.DH = function() {
    var a = {
        axisLabelFormatter: function(a) {
            return "" + a
        },
        pixelsPerLabel: this.fL
    };
    return function(b) {
        return a[b]
    }
}
;
function gvjs_zT(a) {
    this.Wk = null;
    gvjs_oT.call(this, a)
}
gvjs_q(gvjs_zT, gvjs_oT);
gvjs_zT.prototype.Fs = function(a) {
    return {
        label: this.Wk.yc(a),
        va: {
            Wb: "",
            bold: !1,
            color: gvjs_Ta,
            ob: gvjs_wr,
            fontSize: 13,
            Vc: !1,
            gf: !1
        }
    }
}
;
gvjs_zT.prototype.OR = function(a) {
    var b = 0;
    gvjs_r(a, function(a) {
        b = Math.max(b, gvjs_CD(a.v))
    }, this);
    a = {
        fractionDigits: b
    };
    this.format && gvjs_Hd(a, this.format);
    this.Wk = new gvjs_ai(a)
}
;
gvjs_zT.prototype.hJ = function(a, b) {
    return Dygraph.numericTicks(a, b, this.size, this.DH())
}
;
gvjs_zT.prototype.DH = function() {
    var a = {
        axisLabelFormatter: function(a) {
            return "" + a
        },
        pixelsPerLabel: this.fL
    };
    return function(b) {
        return a[b]
    }
}
;
function gvjs_AT(a) {
    this.hW = new gvjs_OS;
    this.aI = new gvjs_HS(new gvjs_LS(this.hW),new gvjs_HS(new gvjs_QS,new gvjs_IS));
    gvjs_xT.call(this, a)
}
gvjs_q(gvjs_AT, gvjs_xT);
gvjs_AT.prototype.OR = function() {
    this.Wk = new gvjs_rT(this.format)
}
;
gvjs_AT.prototype.hJ = function(a, b) {
    a = this.aI.scale(a);
    b = this.aI.scale(b);
    b = gvjs_AT.o.hJ.call(this, a, b);
    return gvjs_s(b, function(a) {
        return {
            v: this.aI.ni(a.v)
        }
    }, this)
}
;
gvjs_AT.prototype.Fs = function(a) {
    a = this.hW.ni(a);
    return {
        label: this.Wk.yc(a),
        va: {}
    }
}
;
var gvjs_BT = {};
gvjs_BT[gvjs_Ua] = gvjs_yT;
gvjs_BT.string = gvjs_yT;
gvjs_BT.number = gvjs_zT;
gvjs_BT.date = gvjs_xT;
gvjs_BT.datetime = gvjs_xT;
gvjs_BT.timeofday = gvjs_AT;
function gvjs_CT() {}
gvjs_q(gvjs_CT, gvjs_uS);
gvjs_CT.prototype.transform = function(a) {
    var b = {}
      , c = {}
      , d = [];
    gvjs_r(a, function(a) {
        if (a instanceof gvjs_Pz) {
            var e = a.data().id, g = gvjs_s([e.xb.DOMAIN_INDEX, e.xb.group, e.xb.stack], String).join("-"), e = e.xb.OBJECT_INDEX, h = 0 < e ? b : c, k = h[g], l;
            if (l = k)
                l = k.data().id.xb.OBJECT_INDEX;
            !k || Math.abs(e) > Math.abs(l) ? (k && d.push(k),
            h[g] = a) : d.push(a)
        } else
            d.push(a)
    });
    gvjs_t(b, function(a) {
        d.push(a.clone().data(a.data()).style(gvjs_Dt, 2).style(gvjs_Et, 2).style(gvjs_Ft, 2).style(gvjs_Gt, 2))
    });
    gvjs_t(c, function(a) {
        d.push(a.clone().data(a.data()).style(gvjs_Jt, 2).style(gvjs_Kt, 2).style(gvjs_Lt, 2).style(gvjs_Mt, 2))
    });
    return d
}
;
function gvjs_DT(a, b) {
    this.Yta = a;
    this.CBa = b
}
gvjs_q(gvjs_DT, gvjs_uS);
gvjs_DT.prototype.transform = function(a) {
    var b = {};
    return gvjs_s(a, function(a) {
        var c = a.data().value
          , e = c.FP;
        e in b || (b[e] = {});
        var f = b[e]
          , c = c.wM;
        if (!(c in f)) {
            var e = this.Yta[e]
              , g = this.CBa[c];
            f[c] = new gvjs_wT({
                x: new gvjs_HS(e.uB,e.i5),
                y: new gvjs_HS(g.uB,g.i5)
            })
        }
        return f[c].transform(a)
    }, this)
}
;
function gvjs_ET(a) {
    this.Y8 = a
}
gvjs_q(gvjs_ET, gvjs_uS);
gvjs_ET.prototype.transform = function(a) {
    if (a instanceof gvjs_Pz) {
        var b = this.Y8
          , c = this.Y8 + 1
          , d = gvjs_Lz(a)
          , e = gvjs_E(d, "x")
          , f = gvjs_E(d, gvjs_nb);
        if (Math.abs(f) > c)
            var g = gvjs_Nc(f)
              , f = f - g * b
              , e = e + g * b / 2;
        g = gvjs_E(d, "y");
        d = gvjs_E(d, gvjs_3a);
        Math.abs(d) > c && (c = gvjs_Nc(d),
        d -= c * b,
        g += c * b / 2);
        b = a.data();
        null != b || (b = null);
        return (new gvjs_Pz(e,g,f,d,a.Pc)).setData(b)
    }
    return a
}
;
function gvjs_FT(a, b) {
    gvjs_FS.call(this);
    this.n$ = !0;
    this.Ws = new gvjs_v;
    this.ip = new gvjs_v;
    this.definition = a;
    this.kc = {};
    this.EV = {};
    this.Ni = b;
    this.mB = gvjs_G(this.definition.options, "blendingMode", "rgb");
    this.sR = gvjs_Kh(this.definition.options, "hoverDarkenAmount", .15);
    this.yha = gvjs_Kh(this.definition.options, "selectLightenAmount", .7)
}
gvjs_q(gvjs_FT, gvjs_FS);
function gvjs_GT(a, b, c) {
    a = gvjs_Zc(a);
    "hsl" === c ? (c = gvjs_1c(a[0], a[1], a[2]),
    c[2] = Math.max(c[2] - b, 0),
    a = gvjs_3c(c[0], c[1], c[2])) : a = gvjs_5c(a, b);
    return gvjs_Xc(a)
}
function gvjs_HT(a, b, c) {
    a = gvjs_Zc(a);
    "hsl" === c ? (c = gvjs_1c(a[0], a[1], a[2]),
    c[2] = Math.min(c[2] + b, 1),
    a = gvjs_3c(c[0], c[1], c[2])) : a = gvjs_6c(a, b);
    return gvjs_Xc(a)
}
gvjs_ = gvjs_FT.prototype;
gvjs_.cache = function(a, b, c) {
    a = a in this.kc ? this.kc[a] : this.kc[a] = {
        Nl: !0,
        value: null
    };
    a.Nl && (a.Nl = !1,
    gvjs_Bb(),
    a.value = c ? b.call(c) : b());
    return a.value
}
;
gvjs_.Nl = function(a) {
    a in this.kc && (this.kc[a].Nl = !0)
}
;
function gvjs_IT(a, b, c) {
    var d = a.definition.orientation === gvjs_g;
    c = a.definition.vM[c];
    a = a.definition.mI[b];
    return {
        vv: d ? c : a,
        Ow: d ? a : c
    }
}
function gvjs_JT(a) {
    return a.definition.orientation === gvjs_g ? a.definition.vM : a.definition.mI
}
function gvjs_KT(a) {
    return a.definition.orientation === gvjs_g ? a.definition.mI : a.definition.vM
}
function gvjs_LT(a) {
    switch (a.type()) {
    case gvjs_yr:
        return gvjs_yL(a.xb.COLUMN_INDEX, a.xb.ROW_INDEX);
    case gvjs_zr:
        return gvjs_xL(a.xb.COLUMN_INDEX)
    }
    return null
}
gvjs_.xV = function() {}
;
gvjs_.qV = function() {}
;
gvjs_.nV = function() {}
;
gvjs_.wV = function() {}
;
gvjs_.Uha = function() {}
;
gvjs_.Nha = function() {}
;
gvjs_.Lha = function() {}
;
gvjs_.Rha = function() {}
;
function gvjs_MT(a, b, c) {
    var d = c.type();
    if (d === gvjs_yr) {
        d = gvjs_LT(c);
        c = d.se();
        var d = gvjs_xL(d.xb.COLUMN_INDEX).se()
          , e = 0 < a.ip.Bb()
          , f = a.Ws.contains(c) || a.Ws.contains(d);
        a.ip.contains(c) || a.ip.contains(d) ? a.xV(b) : f ? a.qV(b) : e ? a.nV(b) : a.wV(b)
    } else
        d === gvjs_zr && (d = gvjs_LT(c),
        c = d.se(),
        d = gvjs_xL(d.xb.COLUMN_INDEX).se(),
        e = 0 < a.ip.Bb(),
        f = a.Ws.contains(c) || a.Ws.contains(d),
        a.ip.contains(c) || a.ip.contains(d) ? a.Uha(b) : f ? a.Nha(b) : e ? a.Lha(b) : a.Rha(b))
}
function gvjs_Kia(a) {
    gvjs_t(a.EV, function(a, c) {
        c = gvjs_zL(c);
        c.type();
        gvjs_MT(this, a, c)
    }, a)
}
function gvjs_Lia(a, b) {
    b = gvjs_xL(b);
    var c = b.se();
    b = gvjs_NT(a, b);
    gvjs_r(b, function(a) {
        var b = a.id.xb.SUBTYPE;
        switch (b) {
        case gvjs_Sx:
        case gvjs_8R:
            break;
        default:
            return
        }
        var d = this.definition.style.Ya
          , g = b === gvjs_Sx ? d.title : d.Lf
          , h = b === gvjs_Sx ? d.selected.title : d.selected.Lf
          , k = b === gvjs_Sx ? d.focused.title : d.focused.Lf
          , l = this.ip.contains(c)
          , m = this.Ws.contains(c)
          , n = new gvjs_v(gvjs_wd(g))
          , p = new gvjs_v(gvjs_wd(h))
          , q = new gvjs_v(gvjs_wd(k))
          , b = new gvjs_v;
        b.addAll(n);
        b.addAll(p);
        b.addAll(q);
        var r = a.shape;
        gvjs_he(b, function(a) {
            try {
                var b = q.contains(a)
                  , c = p.contains(a);
                if (m && b)
                    r.style(a, k[a]);
                else if (l && c)
                    r.style(a, h[a]);
                else if (b || c)
                    n.contains(a) ? r.style(a, g[a]) : r.style(a, null)
            } catch (v) {}
        })
    }, a)
}
gvjs_.U4 = function(a, b) {
    this.Jw || (this.Jw = gvjs_vS(gvjs_vS(new gvjs_CT, new gvjs_DT(this.definition.mI,this.definition.vM)), new gvjs_xS(gvjs_vS(new gvjs_ET(1), new gvjs_wT({
        x: new gvjs_MS,
        y: new gvjs_MS,
        Fqa: this.definition.orientation === gvjs_g
    })))));
    return this.cache("chart-shapes", gvjs_p(function() {
        var a = this.Jw.transform(this.definition.layout.$I());
        gvjs_r(a, function(a) {
            this.n$ && a.style("clip.x", b.left).style("clip.y", b.top).style("clip.width", b.width).style("clip.height", b.height);
            gvjs_MT(this, a, a.data().id)
        }, this);
        return gvjs_s(a, function(a) {
            var b = a.data().id, c;
            c = gvjs_LT(a.data().id).se();
            c = this.ip.contains(c) || this.Ws.contains(c) ? gvjs_9R : gvjs_1w;
            return new gvjs_ES(a,b,c)
        }, this)
    }, this))
}
;
function gvjs_OT(a, b, c) {
    var d;
    return (d = (d = a.scale) && d.zi() ? gvjs_yT : gvjs_BT[a.type]) && new d({
        expand: a.expand,
        V$: a.V$,
        format: a.format,
        scale: a.scale,
        size: b,
        cd: a.range.start,
        Me: a.range.end,
        fL: c
    })
}
function gvjs_PT(a, b) {
    return {
        ticks: a.ticks,
        scale: a.uB,
        label: a.label,
        wk: a.wk,
        range: a.range,
        gm: gvjs_fS,
        Sia: gvjs_QF(a.style.ticks),
        ooa: gvjs_QF(a.style.B$),
        Tda: gvjs_QF(a.style.label),
        E9: b
    }
}
function gvjs_NT(a, b) {
    var c = []
      , d = gvjs_vga(b);
    gvjs_t(a.EV, function(a, b) {
        b = gvjs_zL(b);
        gvjs_sd(d, function(a, c) {
            return b.xb[c] === a
        }) && c.push({
            id: b,
            shape: a
        })
    });
    return c
}
function gvjs_QT(a, b, c, d) {
    var e = []
      , f = c;
    c = c.clone();
    var g = 0
      , h = 0;
    gvjs_t(gvjs_JT(a), function(a) {
        var k = a.name
          , m = a.margin
          , n = a.ticks;
        n && n.size == f.right - f.left || (n = gvjs_IT(this, k, k).vv,
        n = null != n ? gvjs_OT(n, f.right - f.left, gvjs_Hh(n.options, gvjs_7R)) : void 0,
        n = a.ticks = n);
        if (n) {
            gvjs_Te(a.range, n.cd);
            gvjs_Te(a.range, n.Me);
            gvjs_RT(a);
            if (a.wk == gvjs_2x && 0 < g || a.wk == gvjs_Ws && 0 < h)
                m = 12;
            n = new gvjs_NS({
                start: a.range.start,
                end: a.range.end
            });
            n.Mt(a.scale.Ho());
            a.uB = n;
            a.i5 = new gvjs_NS({
                start: 0,
                end: 1
            },{
                start: f.left + d.left,
                end: f.right - d.right
            });
            var n = a.wk == gvjs_2x ? f.top - g - m : f.bottom + h + m
              , p = gvjs_IT(this, k, k).vv;
            if (null == p)
                throw Error('Could not construct axis renderer for horizontal axis named "' + k + gvjs_oS);
            k = (new gvjs_nT(gvjs_PT(p, gvjs_wL(new gvjs_5("haxis"), "LAYER", k)))).W(b, new gvjs_P(f.left + d.left,n,f.right - f.left - d.left - d.right,0));
            gvjs_Re(c, gvjs_Kk(k.size));
            a.wk === gvjs_2x ? g += k.size.height + m : h += k.size.height + m;
            gvjs_rc(e, k.elements)
        }
    }, a);
    return {
        za: c,
        elements: e
    }
}
function gvjs_ST(a, b, c, d) {
    var e = a.definition.orientation === gvjs_g
      , f = []
      , g = c;
    c = c.clone();
    var h = 0
      , k = 0;
    gvjs_t(gvjs_KT(a), function(a) {
        var l = a.name
          , n = a.ticks
          , p = a.margin;
        n && n.size == g.bottom - g.top || (n = gvjs_IT(this, l, l).Ow,
        n = null != n ? gvjs_OT(n, c.bottom - c.top, gvjs_Hh(n.options, gvjs_7R)) : void 0,
        n = a.ticks = n);
        if (n) {
            gvjs_Te(a.range, n.cd);
            gvjs_Te(a.range, n.Me);
            gvjs_RT(a);
            if (a.wk == gvjs_Oi && 0 < h || a.wk == gvjs_K && 0 < k)
                p = 12;
            n = new gvjs_NS({
                start: e ? a.range.start : a.range.end,
                end: e ? a.range.end : a.range.start
            });
            n.Mt(a.scale.Ho());
            a.uB = n;
            a.i5 = new gvjs_NS({
                start: 0,
                end: 1
            },{
                start: g.top + d.top,
                end: g.bottom - d.bottom
            });
            var n = a.wk == gvjs_Oi ? g.left - h - p : g.right + k + p
              , q = gvjs_IT(this, l, l).Ow;
            if (null == q)
                throw Error('Could not construct axis renderer for vertical axis named "' + l + gvjs_oS);
            l = (new gvjs_pT(gvjs_PT(q, gvjs_wL(new gvjs_5("vaxis"), "LAYER", l)))).W(b, new gvjs_P(n,g.top + d.top,0,g.bottom - g.top - d.top - d.bottom));
            gvjs_Re(c, gvjs_Kk(l.size));
            a.wk == gvjs_Oi ? h += l.size.width + p : k += l.size.width + p;
            gvjs_rc(f, l.elements)
        }
    }, a);
    return {
        za: c,
        elements: f
    }
}
function gvjs_TT(a) {
    var b = new gvjs_P(0,0,0,0);
    b.left = Math.min(a.left, a.right);
    b.top = Math.min(a.top, a.bottom);
    b.width = Math.abs(a.right - a.left);
    b.height = Math.abs(a.bottom - a.top);
    return b
}
gvjs_.zL = function(a, b, c) {
    var d = [];
    gvjs_t(gvjs_KT(this), function(e) {
        if (e.eb) {
            var f = gvjs_Kk(b);
            f.top += c.top;
            f.bottom -= c.bottom;
            e = new gvjs_tT({
                ticks: e.ticks,
                scale: e.uB,
                eb: e.eb,
                Hb: e.Hb,
                eY: gvjs_wL(gvjs_wL(new gvjs_5(gvjs_xr), gvjs_Wr, "hgridline"), gvjs_Ba, e.name),
                gm: gvjs_Su,
                style: {
                    eb: e.style.eb,
                    Hb: e.style.Hb
                }
            });
            gvjs_rc(d, e.W(a, gvjs_Lk(f)))
        }
    }, this);
    gvjs_t(gvjs_JT(this), function(e) {
        var f = gvjs_Kk(b);
        f.left += c.left;
        f.right -= c.right;
        e = new gvjs_uT({
            ticks: e.ticks,
            scale: e.uB,
            eb: e.eb,
            Hb: e.Hb,
            eY: gvjs_wL(gvjs_wL(new gvjs_5(gvjs_xr), gvjs_Wr, "vgridline"), gvjs_Ba, e.name),
            gm: gvjs_Su,
            style: {
                eb: e.style.eb,
                Hb: e.style.Hb
            }
        });
        gvjs_rc(d, e.W(a, gvjs_Lk(f)))
    }, this);
    return d
}
;
function gvjs_Mia(a, b, c, d) {
    function e(a) {
        a.left < c.left && (l.left += c.left - a.left);
        a.top < c.top && (l.top += c.top - a.top);
        a.right > c.left + c.width && (l.right -= a.right - (c.left + c.width));
        a.bottom > c.top + c.height && (l.bottom -= a.bottom - (c.top + c.height))
    }
    for (var f = null, g = 10, h = null, k = null, l = gvjs_Kk(c), m = gvjs_TT(l), n = 0, p = 0; !gvjs_Mk(m, f) && 0 < --g; )
        f = m,
        n++,
        p++,
        h = gvjs_QT(a, b, l, d),
        e(h.za),
        k = gvjs_ST(a, b, l, d),
        e(k.za),
        m = gvjs_TT(l);
    return {
        rect: m,
        elements: gvjs_pc(h.elements, k.elements)
    }
}
function gvjs_RT(a) {
    var b = a.options.ba("range.min");
    if (null != b) {
        var c = gvjs_n(b)
          , b = c ? b : a.scale.scale(b);
        !c && a.scale.zi() && (b -= .5);
        null != b && gvjs_Rc(b) && (a.range.start = b)
    }
    b = a.options.ba("range.max");
    null != b && (b = (c = gvjs_n(b)) ? b : a.scale.scale(b),
    !c && a.scale.zi() && (b += .5),
    null != b && gvjs_Rc(b) && (a.range.end = b));
    a.range.start > a.range.end && (c = a.range.start,
    a.range.start = a.range.end,
    a.range.end = c)
}
function gvjs_Nia(a) {
    if (gvjs_G(a.definition.options, gvjs_Av) == gvjs_d)
        return null;
    var b = new gvjs_vT({
        maxWidth: null,
        style: {
            ga: a.definition.style.Ya.ga,
            spacing: a.definition.style.Ya.spacing,
            icon: a.definition.style.Ya.icon,
            title: a.definition.style.Ya.title,
            Lf: a.definition.style.Ya.Lf
        }
    })
      , c = a.definition.layout.vy()
      , d = gvjs_s(c, function(a, b) {
        return {
            index: b,
            Yb: a.Yb
        }
    });
    gvjs_xc(d, function(a, b) {
        return gvjs_wc(a.Yb, b.Yb)
    });
    return b.Hu(gvjs_ac(gvjs_s(d, function(a, b) {
        a = c[a.index];
        var d = this.definition.table.Xa(a.Yb);
        this.definition.table.Xa(a.Yb);
        return gvjs_D(this.definition.options, gvjs_cx + b + ".inLegend", !0) ? {
            color: a.color,
            title: gvjs_G(this.definition.options, gvjs_cx + b + ".title", d),
            Lf: gvjs_G(this.definition.options, gvjs_cx + b + ".subtitle"),
            aua: gvjs_xL(a.Yb, "icon").se(),
            yk: gvjs_xL(a.Yb, gvjs_Sx).se(),
            hAa: gvjs_xL(a.Yb, gvjs_8R).se()
        } : null
    }, a), gvjs_de(), a)).setStyle(gvjs_lb, gvjs_xv)
}
gvjs_.gB = function(a) {
    gvjs_Bb();
    var b = a.hb().dw();
    this.C = b;
    var c = this.fc()
      , d = this.cache("chart-layout", function() {
        var a = c;
        null == a && (a = new gvjs_z(Infinity,Infinity));
        var d = gvjs_YS(gvjs_YS(new gvjs_ZS(1,5), this.definition.style.background), {
            width: a.width,
            height: a.height,
            id: (new gvjs_5(gvjs_xr)).se(),
            layer: gvjs_Hs
        })
          , e = this.definition.title ? gvjs_YS(new gvjs_2S(this.definition.title), this.definition.style.title).setStyle(gvjs_dv, (new gvjs_5(gvjs_Sx)).se()).setStyle("layer", gvjs_Hs) : null
          , k = this.definition.Lf ? gvjs_YS(new gvjs_2S(this.definition.Lf), this.definition.style.Lf).setStyle(gvjs_dv, gvjs_wL(new gvjs_5(gvjs_Sx), gvjs_Wr, gvjs_8R).se()).setStyle("layer", gvjs_Hs) : null;
        e && d.wc(0, 0, e);
        k && d.wc(0, 2, k);
        e && k && d.wc(0, 1, (new gvjs_XS).setStyle(gvjs_3a, this.definition.style.iAa));
        (e || k) && d.wc(0, 3, (new gvjs_XS).setStyle(gvjs_3a, this.definition.style.IAa));
        e = gvjs_YS(new gvjs_XS, this.definition.style.N).setStyle(gvjs_lb, gvjs_Zj).setStyle(gvjs_3a, Infinity).setStyle(gvjs_nb, Infinity);
        if (k = gvjs_Nia(this)) {
            k.setStyle(gvjs_Tv, a.width / 3);
            var a = gvjs_Hh(this.definition.options, "legend.style.margin", 0)
              , l = gvjs_G(this.definition.options, gvjs_Av);
            gvjs_G(this.definition.options, gvjs_yv, gvjs_4);
            var m = l === gvjs_Oi ? 0 : 2
              , l = l === gvjs_Oi ? 2 : 0;
            d.wc(0, 4, (new gvjs_ZS(3,1)).setStyle(gvjs_3a, Infinity).wc(1, 0, (new gvjs_XS).setStyle(gvjs_nb, a)).wc(m, 0, k).wc(l, 0, e))
        } else
            d.wc(0, 4, e);
        return d.layout(b.nf, {})
    }, this)
      , e = this.definition.orientation === gvjs_g ? new gvjs_x(0,0,12,0) : new gvjs_x(0,12,0,12);
    a = [];
    gvjs_rc(a, this.cache("chart-chrome", function() {
        var a = this
          , c = []
          , h = null
          , k = null
          , l = 0
          , m = null
          , n = new gvjs_cT([function(c, d) {
            var f = c.element();
            if (f.getStyle(gvjs_lb) === gvjs_Zj) {
                var g = c.wK()
                  , f = g.margin
                  , n = g.padding
                  , g = d.x + c.left() + f.left() + n.left();
                d = d.y + c.top() + f.top() + n.top();
                var p = c.width() - f.width() - n.width();
                c = c.height() - f.height() - n.height();
                c = new gvjs_P(g,d,p,c);
                f = gvjs_Mia(a, b, c, e);
                f.rect.top = Math.ceil(f.rect.top) + .5;
                f.rect.height = Math.floor(f.rect.height) - 1;
                f.rect.left = Math.ceil(f.rect.left) + .5;
                f.rect.width = Math.floor(f.rect.width) - 1;
                m = f.rect.clone();
                l = m.top - c.top;
                return []
            }
            return f.getStyle(gvjs_lb) === gvjs_xv ? (h = c,
            k = d,
            []) : null
        }
        ]);
        n.debug = !1;
        var p = n.W(d);
        this.definition.N = m;
        var q = gvjs_Kk(m);
        gvjs_rc(c, gvjs_QT(this, b, q, e).elements);
        gvjs_rc(c, gvjs_ST(this, b, q, e).elements);
        q = new gvjs_cT([]);
        q.debug = n.debug;
        var r = [];
        h && (r = q.W(h.element().layout(b.nf, {}, new gvjs_z(h.width(),m.height)), gvjs_Qe(k, new gvjs_w(h.left(),l))));
        var t = 0
          , u = 0;
        gvjs_he(gvjs_ke(gvjs_ge(p), gvjs_ge(r)), function(a) {
            var b = a.style(gvjs_dv)
              , d = a.style("layer") || gvjs_Hs;
            null == b && n.debug ? c.push(new gvjs_ES(a,gvjs_wL(new gvjs_5("debug"), gvjs_mS, t++),gvjs_Hs)) : null != b && c.push(new gvjs_ES(a,gvjs_wL(gvjs_zL(b), gvjs_mS, u++),d))
        });
        c.push(new gvjs_ES((new gvjs_Pz(m.left,m.top,m.width,m.height)).styles(this.definition.style.N),gvjs_wL(new gvjs_5(gvjs_xr), gvjs_Wr, gvjs_ct),gvjs_Hs));
        return c
    }, this));
    gvjs_rc(a, this.cache("chart-gridlines", function() {
        return this.zL(b, this.definition.N, e)
    }, this));
    gvjs_rc(a, this.U4(b, this.definition.N, e));
    this.EV = {};
    gvjs_r(a, function(a) {
        this.EV[a.featureId.se()] = a.dn
    }, this);
    this.ua && a.push(this.cache(gvjs_6R, function() {
        var a = (new gvjs_cT([])).W(this.ua.layout, this.ua.offset)
          , b = new gvjs_pS;
        gvjs_r(a, function(a) {
            b.add(a)
        });
        return new gvjs_ES(b,new gvjs_5(gvjs_jS),gvjs_oi)
    }, this));
    return a
}
;
gvjs_.Gy = function(a, b) {
    this.Nl(gvjs_6R);
    if (b && !this.ua && a.type() === gvjs_yr) {
        gvjs_Bb();
        this.fc();
        var c = a.xb.DOMAIN_INDEX
          , d = a.xb.COLUMN_INDEX
          , e = a.xb.ROW_INDEX
          , f = this.definition.table.Xa(d);
        b = gvjs_NT(this, a)[0].shape;
        var g = b.data().value;
        a = this.definition.orientation === gvjs_g;
        var h = this.definition.mI[g.FP]
          , h = h.ticks.Wk || new gvjs_sT[h.type](h.format)
          , c = this.definition.table.Qa(e, c, h)
          , h = this.definition.vM[g.wM]
          , h = h.ticks.Wk || new gvjs_sT[h.type](h.format)
          , d = this.definition.table.Qa(e, d, h)
          , f = (new gvjs_4S).Hu(c, [{
            title: f,
            value: d,
            color: gvjs_GT(g.color, this.sR, this.mB)
        }]).layout(this.C.nf, {})
          , d = f.width()
          , e = f.height()
          , c = new gvjs_z(f.width(),f.height())
          , g = this.definition.N
          , k = gvjs_Lz(b)
          , h = b instanceof gvjs_Pz ? new gvjs_P((0 > gvjs_E(k, gvjs_nb) ? gvjs_E(k, gvjs_nb) : 0) + gvjs_E(k, "x") - 10,(0 > gvjs_E(k, gvjs_3a) ? gvjs_E(k, gvjs_3a) : 0) + gvjs_E(k, "y") - 10,Math.abs(gvjs_E(k, gvjs_nb)) + 20,Math.abs(gvjs_E(k, gvjs_3a)) + 20) : new gvjs_P(gvjs_E(k, "x") - gvjs_E(k, "r") - 10,gvjs_E(k, "y") - gvjs_E(k, "r") - 10,2 * gvjs_E(k, "r") + 20,2 * gvjs_E(k, "r") + 20);
        b instanceof gvjs_Pz ? (b = a ? gvjs_Nc(gvjs_E(k, gvjs_nb)) : 0,
        a = a ? 0 : gvjs_Nc(gvjs_E(k, gvjs_3a))) : a = b = 0;
        a = (new gvjs_8S(g,h,c,10,new gvjs_w(b,a))).position();
        this.ua = {
            layout: f,
            offset: new gvjs_w(gvjs_Fc(a.x, g.left, g.left + g.width - d),gvjs_Fc(a.y, g.top, g.top + g.height - e))
        }
    } else
        b || (this.ua = null)
}
;
gvjs_.fc = function() {
    return this.definition.size
}
;
gvjs_.vm = function(a, b, c) {
    if (a)
        if (b.type === gvjs_oi)
            this.Gy(a, c);
        else {
            var d = this.ip.Bb();
            this.Ws.Bb();
            b = b.type === gvjs_J ? this.ip : this.Ws;
            var e = a.type(), f;
            switch (e) {
            case gvjs_zr:
            case gvjs_yr:
                f = gvjs_LT(a);
                c ? b.add(f.se()) : b.remove(f.se());
                break;
            case gvjs_xr:
            case gvjs_jS:
                this.Ws.clear()
            }
            if (this.ip.Bb() !== d || e === gvjs_zr)
                gvjs_Bb(),
                gvjs_Kia(this);
            e === gvjs_zr ? gvjs_Lia(this, a.xb.COLUMN_INDEX) : f && e === gvjs_yr && (a = gvjs_NT(this, f)) && gvjs_r(a, function(a) {
                gvjs_MT(this, a.shape, f)
            }, this)
        }
}
;
function gvjs_UT(a, b, c, d) {
    this.fj = a;
    this.options = b;
    this.Ec = c;
    this.Vna = d;
    this.oP = (new gvjs_No).Qc(a)
}
gvjs_UT.prototype.mj = function() {
    return gvjs_c
}
;
function gvjs_VT(a, b) {
    if (a)
        return gvjs_JS;
    if (b in gvjs_PS)
        return gvjs_PS[b];
    throw Error("Unrecognized type: " + b);
}
function gvjs_Oia(a, b, c, d) {
    var e = []
      , f = {}
      , g = {}
      , h = 0
      , k = d === gvjs_g;
    gvjs_r(b.an, function(b, d) {
        b = a.X(b.hj);
        var k = gvjs_D(c, "domain." + d + ".discrete", !1)
          , k = gvjs_VT(k, b)
          , l = null;
        k.Kka && (b = "_discrete",
        b in f && (l = e[f[b][0]]));
        var m = gvjs_Mh(c, "domain." + d + ".axis");
        null != m ? l = m : null === l && (l = h++);
        e.push(l);
        null != m || gvjs_Dd(f, b, []).push(d);
        gvjs_Dd(g, l, k)
    });
    var l = {}
      , m = !0;
    gvjs_r(e, function(d, e) {
        e = b.an[e].hj;
        if (!(d in l)) {
            var f = k ? "y" : "x"
              , h = gvjs_xh(c, gvjs_gS)
              , f = c.view(["axes.domain." + d, "axes." + f + "." + d, "axes.domain.all", "axes." + f + ".all", "axes.all"])
              , n = f.view(gvjs_eb)
              , p = gvjs_Uh(f, "side", k ? gvjs_lT : gvjs_mT, k ? m ? gvjs_Oi : gvjs_K : gvjs_Ws)
              , w = a.X(e)
              , v = new g[d]
              , x = f.ba(gvjs_Ns)
              , y = !1;
            null != x && (y = !0,
            gvjs_n(x) ? v.rw(x) : v.Mt(x));
            x = gvjs_xh(f, gvjs_Gu);
            gvjs_zd(x) && w === gvjs_e && (x = {
                pattern: gvjs_bb
            });
            l[d] = {
                name: d,
                type: w,
                scale: v,
                label: gvjs_G(f, gvjs_sv, a.Xa(e)),
                columns: [],
                eb: gvjs_D(f, gvjs_eS, !1),
                Hb: gvjs_D(f, gvjs_eS, y),
                margin: gvjs_Hh(f, gvjs_Nv),
                wk: p,
                range: null,
                options: f,
                format: x,
                style: {
                    label: gvjs_xh(n, [gvjs_sv, gvjs_I], h),
                    ticks: gvjs_xh(n, [gvjs_Rx, gvjs_I], h),
                    B$: gvjs_xh(n, ["contextTicks", gvjs_I], h),
                    eb: gvjs_xh(n, gvjs_eS),
                    Hb: gvjs_xh(n, gvjs_Ns)
                }
            }
        }
        l[d].columns.push(e);
        m = !1
    });
    return l
}
function gvjs_Pia(a, b, c, d) {
    var e = []
      , f = {}
      , g = {}
      , h = 0
      , k = d === gvjs_g;
    gvjs_r(b.an, function(b) {
        var d = [];
        e.push(d);
        gvjs_r(b.D, function(b, e) {
            b = a.X(b.fs);
            var k = gvjs_D(c, gvjs_cx + e + ".discrete", !1)
              , k = gvjs_VT(k, b);
            k.Kka && (b = "_discrete");
            e = gvjs_Mh(c, gvjs_cx + e + ".axis");
            null == e && (b in f ? e = f[b][0] : (f[b] = [],
            e = h++),
            f[b].push(e));
            d.push(e);
            gvjs_Dd(g, String(e), k)
        })
    });
    var l = {}
      , m = !0;
    gvjs_r(e, function(d, e) {
        gvjs_r(d, function(d, f) {
            f = b.an[e].D[f].fs;
            if (!(d in l)) {
                var h = k ? "x" : "y"
                  , n = gvjs_xh(c, [gvjs_gS])
                  , h = c.view(["axes.target." + d, "axes." + h + "." + d, "axes.target.all", "axes." + h + ".all", "axes.all"])
                  , p = h.view(gvjs_eb)
                  , q = gvjs_Uh(h, "side", k ? gvjs_mT : gvjs_lT, k ? gvjs_Ws : m ? gvjs_Oi : gvjs_K)
                  , r = new g[d]
                  , y = h.ba(gvjs_Ns)
                  , z = !1;
                null != y && (z = !0,
                gvjs_n(y) ? r.rw(y) : r.Mt(y));
                var y = a.X(f)
                  , A = gvjs_xh(h, gvjs_Gu);
                gvjs_zd(A) && y === gvjs_e && (A = {
                    pattern: gvjs_bb
                });
                l[d] = {
                    name: d,
                    columns: [],
                    label: gvjs_G(h, gvjs_sv),
                    eb: gvjs_D(h, gvjs_eS, !0),
                    Hb: gvjs_D(h, gvjs_eS, z),
                    scale: r,
                    type: y,
                    margin: gvjs_Hh(h, gvjs_Nv),
                    wk: q,
                    range: null,
                    options: h,
                    format: A,
                    style: {
                        label: gvjs_xh(p, [gvjs_sv, gvjs_I], n),
                        ticks: gvjs_xh(p, [gvjs_Rx, gvjs_I], n),
                        B$: gvjs_xh(p, ["contextTicks", gvjs_I], n),
                        eb: gvjs_xh(p, gvjs_eS),
                        Hb: gvjs_xh(p, gvjs_Ns)
                    }
                }
            }
            l[d].columns.push(f);
            m = !1
        })
    });
    return l
}
gvjs_UT.prototype.wh = function() {
    var a = this.fj
      , b = this.oP
      , c = this.options;
    gvjs_D(this.options, "stacked", !1);
    var d = gvjs_D(c, gvjs_2u, !1)
      , e = c.ba(gvjs_At, null, gvjs_Sh);
    null != e && (e = gvjs_s(gvjs_ac(gvjs_s(e, function(a) {
        try {
            return gvjs_Tc(a).gc
        } catch (m) {
            return null
        }
    }), gvjs_ub), gvjs_Zc));
    var d = new gvjs_SS(d,null != e ? e : null), e = this.mj(), f = gvjs_Oia(a, b, c, e), b = gvjs_Pia(a, b, c, e), c = this.i0(f, b, d), g;
    for (g in f) {
        var h = f[g];
        null == h.range ? h.range = new gvjs_y(0,1) : h.range.start === h.range.end && (--h.range.start,
        h.range.end += 1)
    }
    for (var k in b)
        h = b[k],
        null == h.range ? h.range = new gvjs_y(0,1) : h.range.start === h.range.end && (--h.range.start,
        h.range.end += 1);
    return {
        table: a,
        title: gvjs_G(this.options, "chart.title"),
        Lf: gvjs_G(this.options, "chart.subtitle"),
        orientation: e,
        mI: f,
        vM: b,
        options: this.options,
        dL: d,
        size: this.Vna,
        layout: c,
        style: {
            title: gvjs_xh(this.options, ["chart.style.title", gvjs_gS]),
            Lf: gvjs_xh(this.options, ["chart.style.subtitle", gvjs_gS]),
            IAa: gvjs_Hh(this.options, "chart.style.titleSpacing"),
            iAa: gvjs_Hh(this.options, "chart.style.subtitleSpacing"),
            background: gvjs_QF(gvjs_xh(this.options, "chart.style.background")),
            N: gvjs_QF(gvjs_xh(this.options, "chart.style.chartArea")),
            Ya: {
                ga: gvjs_QF(gvjs_xh(this.options, "legend.style.container")),
                spacing: gvjs_Hh(this.options, "legend.style.spacing", 0),
                icon: gvjs_QF(gvjs_xh(this.options, "legend.style.icon")),
                title: gvjs_QF(gvjs_xh(this.options, ["legend.style.title", gvjs_dS, gvjs_gS])),
                Lf: gvjs_QF(gvjs_xh(this.options, ["legend.style.subtitle", gvjs_dS, gvjs_gS])),
                selected: {
                    icon: gvjs_QF(gvjs_xh(this.options, "legend.style.selected.icon")),
                    title: gvjs_QF(gvjs_xh(this.options, "legend.style.selected.title")),
                    Lf: gvjs_QF(gvjs_xh(this.options, "legend.style.selected.subtitle"))
                },
                focused: {
                    icon: gvjs_QF(gvjs_xh(this.options, "legend.style.focused.icon")),
                    title: gvjs_QF(gvjs_xh(this.options, "legend.style.focused.title")),
                    Lf: gvjs_QF(gvjs_xh(this.options, "legend.style.focused.subtitle"))
                }
            }
        }
    }
}
;
function gvjs_WT(a) {
    this.m = a.options;
    this.mF = a.table;
    this.k_ = a.an;
    this.Eh = a.dL;
    this.EP = a.axes.domain;
    this.K6 = a.axes.target;
    this.layout = this.nO()
}
gvjs_WT.prototype.vy = function() {
    var a = [];
    gvjs_r(this.layout, function(b) {
        gvjs_r(b.D, function(b) {
            a.push({
                Yb: b.Tn,
                color: b.color
            })
        })
    });
    return a
}
;
gvjs_WT.prototype.nO = function() {
    var a = this.EP
      , b = this.K6;
    gvjs_t(b, function(a) {
        a.expand = !0
    });
    gvjs_t(a, function(a) {
        a.expand = !0
    });
    var c = {}, d;
    for (d in b)
        gvjs_r(b[d].columns, function(a) {
            c[a] = {
                name: d,
                axis: b[d]
            }
        });
    var e = {};
    for (d in a)
        gvjs_r(a[d].columns, function(b) {
            e[b] = {
                name: d,
                axis: a[d]
            }
        });
    var f = this.mF
      , g = gvjs_s(this.k_, function(a, b) {
        for (var d = e[a.hj], g = d.axis.scale, h = {
            Yb: a.hj,
            D: gvjs_s(a.D, function(a, c) {
                this.Eh.gu(b + "/" + c);
                return {
                    Tn: a.fs,
                    FP: d.name,
                    data: []
                }
            }, this)
        }, k = 0, l = f.fa(); k < l; k++) {
            var m = f.getValue(k, a.hj)
              , w = null
              , w = g.zi() ? g.add(m) : g.scale(m);
            null != w && gvjs_Rc(w) && (null === d.axis.range ? d.axis.range = new gvjs_y(w,w) : gvjs_Te(d.axis.range, w));
            gvjs_r(a.D, function(a, b) {
                var e = c[a.fs];
                h.D[b].wM = e.name;
                a = f.getValue(k, a.fs);
                var g = e.axis.scale.scale(a);
                null != g && gvjs_Rc(g) && (null === e.axis.range ? e.axis.range = new gvjs_y(g,g) : null != w && gvjs_Te(e.axis.range, g));
                h.D[b].data.push({
                    FP: d.name,
                    Zg: m,
                    Gt: w,
                    wM: e.name,
                    Ia: a,
                    iw: g,
                    iF: k
                })
            }, this)
        }
        return h
    }, this)
      , h = this.Eh.Rc()
      , k = 0;
    gvjs_r(g, function(a, b) {
        gvjs_r(a.D, function(a, c) {
            a.color = gvjs_Tc(gvjs_G(this.m, gvjs_cx + k + ".color", h.mq(b + "/" + c))).gc;
            k++
        }, this)
    }, this);
    return g
}
;
function gvjs_XT() {
    this.jra = gvjs_jh(gvjs_p(this.kra, this));
    this.format = gvjs_p(this.nra, this)
}
gvjs_rb(gvjs_XT);
gvjs_XT.prototype.nra = function(a, b) {
    return this.jra(a).yc(b)
}
;
gvjs_XT.prototype.kra = function(a) {
    return new gvjs_7h({
        pattern: a,
        valueType: "time"
    })
}
;
function gvjs_YT(a, b, c, d, e, f, g) {
    this.ha = a;
    this.cd = b;
    this.Me = c;
    this.fz = e;
    this.lya = f;
    this.Zm = !0;
    this.nh = [];
    this.w6 = d;
    this.lr = null;
    this.tC = 0;
    this.Nqa = g || null;
    a = gvjs_p(this.Oka, this);
    b = Dygraph.pickDateTickGranularity(this.cd, this.Me, this.ha, a);
    this.rp = Dygraph.getDateAxis(this.cd, this.Me, b, a);
    this.rp[0].v.valueOf() > this.cd && (this.rp.unshift({
        v: this.cd,
        label: ""
    }),
    this.nh.unshift(new gvjs_VS("",{})));
    this.cd = Math.min(this.rp[0].v.valueOf(), this.cd);
    a = this.rp[this.rp.length - 1].v.valueOf();
    a > this.Me.valueOf() && (this.Me = a);
    this.L7 = this.ha / (this.Me - this.cd);
    this.Jh = [];
    a = 0;
    for (b = this.rp.length; a < b; a++)
        this.Jh.push(this.scale(this.rp[a].v))
}
gvjs_YT.prototype.draw = function(a, b, c) {
    if (this.Zm) {
        if (null == this.lr)
            throw "startY must be set before calling draw().";
        var d = this.rp.length - 1;
        if (0 !== d) {
            var e = this.nh[0]
              , f = e.Db(a)
              , g = [new gvjs_y(this.Jh[0] - f / 2,this.Jh[0] + f / 2)]
              , h = [];
            this.Jh[0] - f / 2 < this.w6 - this.fz && (e.textAlign = gvjs_4,
            g[0].start = this.Jh[0],
            g[0].end = this.Jh[0] + f);
            var e = this.nh[d]
              , f = e.Db(a)
              , k = new gvjs_y(this.Jh[d] - f / 2,this.Jh[d] + f / 2);
            f / 2 + this.Jh[d] - this.lya > this.ha + this.w6 && (e.textAlign = gvjs_3,
            k.start = this.Jh[d] - f,
            k.end = this.Jh[d]);
            gvjs_Ue(k, g[0]) ? h.push(d) : g.push(k);
            for (e = 1; e < d; e++) {
                var l = this.nh[e];
                switch (l.textAlign) {
                case gvjs_4:
                    l = new gvjs_y(this.Jh[e],this.Jh[e] + l.Db(a));
                    break;
                case gvjs_1:
                case null:
                    l = new gvjs_y(this.Jh[e] - l.Db(a) / 2,this.Jh[e] + l.Db(a) / 2);
                    break;
                case gvjs_3:
                    l = new gvjs_y(this.Jh[e] - l.Db(a),this.Jh[e]);
                    break;
                default:
                    throw Error("unknown alignment in tick label.");
                }
                for (var m = !1, f = 0, k = g.length; f < k; f++)
                    if (gvjs_Ue(g[f], l)) {
                        m = !0;
                        break
                    }
                m ? h.push(e) : g.push(l)
            }
            f = 0;
            for (k = h.length; f < k; f++)
                l = this.nh[h[f]],
                l.label = ""
        }
        a = {};
        d = 0;
        for (g = this.rp.length; d < g; d++)
            if (m = this.nh[d],
            !(this.cd > this.rp[d].v) && m.label) {
                for (var h = b, e = this.Jh[d], f = this.lr + 10, k = m.textAlign || gvjs_1, l = m.va, m = m.label.split("\n"), n = [], p = 0, q = m.length; p < q; p++)
                    n.push(h(m[p], e, f, 15, k, gvjs_4, l)),
                    f += 15;
                h = n;
                e = 0;
                for (f = h.length; e < f; e++)
                    c(h[e], null, a)
            }
        this.Zm = !1
    }
}
;
gvjs_YT.prototype.scale = function(a) {
    return (a - this.cd) * this.L7 + this.w6
}
;
gvjs_YT.prototype.Oka = function(a) {
    function b(a, b) {
        return e(c.Nqa || a, b)
    }
    var c = this
      , d = !0
      , e = gvjs_XT.Ac().format;
    switch (a) {
    case "axisLabelFormatter":
        return function(a, e) {
            var f;
            c.tC = e;
            if (e <= Dygraph.THIRTY_SECONDLY)
                return a = b("s", a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: !1,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            if (e <= Dygraph.THIRTY_MINUTELY)
                return f = ":mm",
                0 === a.getMinutes() || d ? (e = !0,
                f = gvjs_qk) : e = !1,
                d = !1,
                a = b(f, a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: e,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            if (e <= Dygraph.SIX_HOURLY)
                return f = "h",
                e = a.getHours(),
                0 !== a.getMinutes() && (f += ":m"),
                e = 12 === e || 0 === e || d,
                d = c.cd > a.valueOf() ? !0 : !1,
                e && (f += "\n a"),
                a = b(f, a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: e,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            if (e <= Dygraph.DAILY)
                return f = "E",
                0 === a.getDay() || d ? (f += "\n M/d",
                e = !0) : e = !1,
                d = !1,
                a = b(f, a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: e,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            if (e <= Dygraph.WEEKLY)
                return e = d,
                d = !1,
                a = b("MMM d", a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: e,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            if (e <= Dygraph.BIANNUAL)
                return f = "MMM",
                e = 0 === a.getMonth() || d,
                d = c.cd > a.valueOf() ? !0 : !1,
                e && (f += "\n yyyy"),
                a = b(f, a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: e,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            if (e <= Dygraph.CENTENNIAL)
                return a = b("yyyy", a),
                c.nh.push(new gvjs_VS(a,{
                    Wb: "",
                    bold: !1,
                    color: gvjs_Ta,
                    opacity: 1,
                    ob: gvjs_wr,
                    fontSize: 13,
                    Vc: !1,
                    gf: !1
                })),
                c.nh.length - 1 + "";
            throw gvjs_iS;
        }
        ;
    case "pixelsPerLabel":
        return 50
    }
}
;
function gvjs_ZT(a, b) {
    return 1 === a ? b : b + "s"
}
;function gvjs__T() {}
gvjs__T.prototype.format = function(a, b) {
    var c = "MMM dd, yyyy"
      , d = "MMM dd, yyyy";
    a.getYear() === b.getYear() && (c = "MMM dd",
    a.getMonth() === b.getMonth() && (d = "dd, yyyy"));
    c = new gvjs_Nd(c);
    d = new gvjs_Nd(d);
    return [c.format(a), d.format(b)].join(gvjs_sq)
}
;
gvjs__T.prototype.Zu = function(a, b) {
    a = Math.ceil(Math.abs(b - a) / 864E5);
    return a + gvjs_ZT(parseFloat(a), " day")
}
;
function gvjs_0T() {}
gvjs_0T.prototype.format = function(a, b) {
    var c = new gvjs_Nd("h:mm a")
      , d = c.format(a).toLowerCase()
      , c = c.format(b).toLowerCase();
    if (864E5 > Math.abs(b - a))
        return [d, c].join(gvjs_sq);
    var e = new gvjs_Nd("MMM d");
    a = e.format(a);
    b = e.format(b);
    return [a, d, "-", b, c].join(" ")
}
;
gvjs_0T.prototype.Zu = function(a, b) {
    a = (Math.abs(b - a) / 36E5).toFixed(2).replace(/\.?0*$/, "");
    return a + gvjs_ZT(parseFloat(a), " hour")
}
;
function gvjs_1T() {}
gvjs_1T.prototype.format = function(a, b) {
    var c = gvjs_qk;
    if (0 !== a.getMilliseconds() || 0 !== b.getMilliseconds())
        c += ":ss.SSS";
    else if (0 !== a.getSeconds() || 0 !== b.getSeconds())
        c += ":ss";
    c = new gvjs_Nd(c);
    return [c.format(a), c.format(b)].join(gvjs_sq)
}
;
gvjs_1T.prototype.Zu = function(a, b) {
    a = b - a;
    var c = Math.floor(a / 36E5)
      , d = Math.floor(a / 6E4 % 60)
      , e = Math.floor(a / 1E3 % 60);
    b = a % 1E3;
    a = [];
    0 < c && a.push(c + "h");
    0 < d && a.push(d + "m");
    if (e || b)
        c = e.toString(),
        0 < b && (d = b.toString(),
        3 <= d.length ? b = d : (b = "000" + b.toString(),
        b = b.substr(b.length - 3)),
        c += "." + b),
        a.push(c + "s");
    return 0 == a.length ? "0s" : a.join(" ")
}
;
function gvjs_2T() {}
gvjs_2T.prototype.format = function(a, b) {
    var c = new gvjs_Nd("MMM yyyy")
      , d = c.format(a);
    a.getYear() === b.getYear() && (d = d.substr(0, 3));
    return [d, c.format(b)].join(gvjs_sq)
}
;
gvjs_2T.prototype.Zu = function(a, b) {
    var c = a.getYear()
      , d = a.getMonth()
      , e = a.getDate()
      , f = b.getYear()
      , g = b.getMonth()
      , h = b.getDate()
      , c = f - c
      , d = g - d
      , e = h - e;
    0 > e && (d--,
    e += gvjs_hd(f, (g + 11) % 12));
    0 > d && (c--,
    d += 12);
    f = [];
    0 < c && (g = gvjs_ZT(c, " year"),
    f.push(c.toString() + g));
    0 < d && (g = gvjs_ZT(d, " month"),
    f.push(d.toString() + g));
    0 < e && (g = gvjs_ZT(e, " day"),
    f.push(e.toString() + g));
    return 0 === c && 0 === d && 0 === e ? gvjs_3T(2).Zu(a, b) : f.join(gvjs_ha)
}
;
function gvjs_4T() {}
gvjs_4T.prototype.format = function(a, b) {
    var c = "s";
    if (0 !== a.getMilliseconds() || 0 !== b.getMilliseconds())
        c += ".SSS";
    c += "'s'";
    if (a.getSeconds() > b.getSeconds() || 6E4 < b - a)
        c = "m'm' " + c;
    c = new gvjs_Nd(c);
    return [c.format(a), c.format(b)].join(gvjs_sq)
}
;
gvjs_4T.prototype.Zu = function(a, b) {
    a = Math.abs(b - a) / 1E3;
    return a.toString() + gvjs_ZT(a, " second")
}
;
var gvjs_5T = {};
gvjs_5T[0] = gvjs_4T;
gvjs_5T[1] = gvjs_1T;
gvjs_5T[2] = gvjs_0T;
gvjs_5T[3] = gvjs__T;
gvjs_5T[4] = gvjs_2T;
function gvjs_6T(a) {
    return a < Dygraph.MINUTELY ? 0 : a < Dygraph.HOURLY ? 1 : a < Dygraph.DAILY ? 2 : a < Dygraph.MONTHLY ? 3 : 4
}
function gvjs_3T(a) {
    var b = gvjs_5T[a];
    if (!b)
        throw "Formatter not found for granularity: " + a + ".";
    return new b
}
;