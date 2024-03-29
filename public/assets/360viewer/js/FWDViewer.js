﻿(function (e) {
    var t = function (e, n, r, i, s, o, u, a, f, l, c) {
        var h = this;
        var p = t.prototype;
        h.pointer_img;
        h.left_sdo = null;
        h.middle_sdo = null;
        h.right_sdo = null;
        h.text_sdo = null;
        h.pointer_sdo = null;
        h.leftImagePath_str = s;
        h.middleImagePath_str = o;
        h.rightImagePath_str = u;
        h.fontColor_str = a;
        h.bottomPointer_str = c;
        h.topPointer_str = l;
        h.pointerPosition_str = f;
        h.toolTipLabel_str = r;
        h.toolTipLabel2_str = i;
        h.marginWidth = e.width;
        h.totalHeight = e.height;
        h.pointerWidth = n.width;
        h.pointerHeight = n.height;
        h.totalWidth;
        h.hideWithDelayId_do;
        h.isMobile_bl = FWDUtils.isMobile;
        h.isShowed_bl = true;
        h.init = function () {
            h.setOverflow("visible");
            h.setWidth(200);
            h.setupMainContainers();
            h.setLabel(h.toolTipLabel_str);
            h.hide()
        };
        h.setupMainContainers = function () {
            var e;
            h.left_sdo = new FWDSimpleDisplayObject("img");
            e = new Image;
            e.src = h.leftImagePath_str;
            h.left_sdo.setScreen(e);
            h.left_sdo.setWidth(h.marginWidth);
            h.left_sdo.setHeight(h.totalHeight);
            h.addChild(h.left_sdo);
            h.middle_sdo = new FWDSimpleDisplayObject("img");
            e = new Image;
            e.src = h.middleImagePath_str;
            h.middle_sdo.setScreen(e);
            h.middle_sdo.setX(h.marginWidth);
            h.middle_sdo.setWidth(h.marginWidth);
            h.middle_sdo.setHeight(h.totalHeight);
            h.addChild(h.middle_sdo);
            h.right_sdo = new FWDSimpleDisplayObject("img");
            e = new Image;
            e.src = h.rightImagePath_str;
            h.right_sdo.setScreen(e);
            h.right_sdo.setWidth(h.marginWidth);
            h.right_sdo.setHeight(h.totalHeight);
            h.addChild(h.right_sdo);
            h.text_sdo = new FWDSimpleDisplayObject("div");
            h.text_sdo.setBackfaceVisibility();
            h.text_sdo.setDisplay("inline-block");
            h.text_sdo.getStyle().fontFamily = "Arial";
            h.text_sdo.getStyle().fontSize = "12px";
            h.text_sdo.setHeight(20);
            h.text_sdo.getStyle().color = h.fontColor_str;
            h.text_sdo.getStyle().fontSmoothing = "antialiased";
            h.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            h.text_sdo.getStyle().textRendering = "optimizeLegibility";
            h.text_sdo.setX(h.marginWidth);
            if (FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari) {
                h.text_sdo.setY(parseInt((h.totalHeight - 8) / 2) - 2)
            } else {
                h.text_sdo.setY(parseInt((h.totalHeight - 8) / 2) - 1)
            }
            h.addChild(h.text_sdo);
            h.pointer_img = new Image;
            if (h.pointerPosition_str == FWDController.POSITION_BOTTOM) {
                h.pointer_img.src = h.bottomPointer_str
            } else {
                h.pointer_img.src = h.topPointer_str
            }
            h.pointer_sdo = new FWDSimpleDisplayObject("img");
            h.pointer_sdo.setScreen(h.pointer_img);
            h.pointer_sdo.setWidth(h.pointerWidth);
            h.pointer_sdo.setHeight(h.pointerHeight);
            h.addChild(h.pointer_sdo)
        };
        h.setLabel = function (e) {
            if (h == null) return;
            if (!h.middle_sdo) return;
            h.text_sdo.setInnerHTML(e);
            setTimeout(function () {
                if (h == null) return;
                h.middle_sdo.setWidth(h.text_sdo.screen.offsetWidth);
                h.right_sdo.setX(h.text_sdo.screen.offsetWidth + h.marginWidth);
                h.totalWidth = h.marginWidth * 2 + h.text_sdo.screen.offsetWidth;
                h.positionPointer(0)
            }, 50)
        };
        h.positionPointer = function (e) {
            var t;
            var n;
            if (!e) e = 0;
            t = parseInt((h.totalWidth - h.pointerWidth) / 2) + e;
            if (h.pointerPosition_str == FWDController.POSITION_BOTTOM) {
                n = h.totalHeight - 1
            } else {
                n = -h.pointerHeight + 1
            }
            h.pointer_sdo.setX(t);
            h.pointer_sdo.setY(n)
        };
        h.show = function () {
            if (h.isShowed_bl) return;
            clearInterval(h.hideWithDelayId_do);
            h.positionPointer();
            TweenMax.killTweensOf(h);
            TweenMax.to(h, .4, {
                alpha: 1,
                delay: .1,
                ease: Quart.easeOut
            });
            h.isShowed_bl = true
        };
        h.hide = function () {
            if (!h.isShowed_bl) return;
            TweenMax.killTweensOf(h);
            h.setX(-5e3);
            h.setAlpha(0);
            h.isShowed_bl = false
        };
        h.destroy = function () {
            TweenMax.killTweensOf(h);
            h.pointer_img = null;
            h.left_sdo.destroy();
            h.middle_sdo.destroy();
            h.right_sdo.destroy();
            h.text_sdo.destroy();
            h.pointer_sdo.destroy();
            h.leftImagePath_str = null;
            h.middleImagePath_str = null;
            h.rightImagePath_str = null;
            h.fontColor_str = null;
            h.bottomPointer_str = null;
            h.topPointer_str = null;
            h.pointerPosition_str = null;
            h.toolTipLabel_str = null;
            h.toolTipLabel2_str = null;
            h.left_sdo = null;
            h.middle_sdo = null;
            h.right_sdo = null;
            h.text_sdo = null;
            h.pointer_sdo = null;
            e = null;
            n = null;
            r = null;
            i = null;
            s = null;
            o = null;
            u = null;
            a = null;
            f = null;
            l = null;
            c = null;
            h.setInnerHTML("");
            p.destroy();
            h = null;
            p = null;
            t.prototype = null
        };
        h.init()
    };
    t.setPrototype = function () {
        t.prototype = null;
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDButtonToolTip = t
})(window);
(function () {
    var e = function (t, n, r, i, s) {
        var o = this;
        var u = e.prototype;
        this.n1Img = t;
        this.s1Img = n;
        this.n2Img = r;
        this.s2Img = i;
        this.firstButton_do;
        this.n1_do;
        this.s1_do;
        this.secondButton_do;
        this.n2_do;
        this.s2_do;
        this.buttonWidth = o.n1Img.width;
        this.buttonHeight = o.n1Img.height;
        this.currentState = 1;
        this.isDisabled_bl = false;
        this.isMaximized_bl = false;
        this.disptachMainEvent_bl = s;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        o.init = function () {
            o.setButtonMode(true);
            o.setWidth(o.buttonWidth);
            o.setHeight(o.buttonHeight);
            o.setupMainContainers();
            o.secondButton_do.setVisible(false)
        };
        o.setupMainContainers = function () {
            o.firstButton_do = new FWDDisplayObject("div");
            o.addChild(o.firstButton_do);
            o.n1_do = new FWDSimpleDisplayObject("img");
            o.n1_do.setScreen(o.n1Img);
            o.s1_do = new FWDSimpleDisplayObject("img");
            o.s1_do.setScreen(o.s1Img);
            o.s1_do.setAlpha(0);
            o.firstButton_do.addChild(o.n1_do);
            o.firstButton_do.addChild(o.s1_do);
            o.firstButton_do.setWidth(o.n1Img.width);
            o.firstButton_do.setHeight(o.n1Img.height);
            o.secondButton_do = new FWDDisplayObject("div");
            o.addChild(o.secondButton_do);
            o.n2_do = new FWDSimpleDisplayObject("img");
            o.n2_do.setScreen(o.n2Img);
            o.s2_do = new FWDSimpleDisplayObject("img");
            o.s2_do.setScreen(o.s2Img);
            o.s2_do.setAlpha(0);
            o.secondButton_do.addChild(o.n2_do);
            o.secondButton_do.addChild(o.s2_do);
            o.secondButton_do.setWidth(o.n2Img.width);
            o.secondButton_do.setHeight(o.n2Img.height);
            o.addChild(o.secondButton_do);
            o.addChild(o.firstButton_do);
            if (o.isMobile_bl) {
                if (o.hasPointerEvent_bl) {
                    o.screen.addEventListener("MSPointerDown", o.onMouseDown);
                    o.screen.addEventListener("MSPointerUp", o.onClick);
                    o.screen.addEventListener("MSPointerOver", o.onMouseOver);
                    o.screen.addEventListener("MSPointerOut", o.onMouseOut)
                } else {
                    o.screen.addEventListener("touchstart", o.onMouseDown)
                }
            } else if (o.screen.addEventListener) {
                o.screen.addEventListener("mouseover", o.onMouseOver);
                o.screen.addEventListener("mouseout", o.onMouseOut);
                o.screen.addEventListener("mousedown", o.onMouseDown);
                o.screen.addEventListener("click", o.onClick)
            } else if (o.screen.attachEvent) {
                o.screen.attachEvent("onmouseover", o.onMouseOver);
                o.screen.attachEvent("onmouseout", o.onMouseOut);
                o.screen.attachEvent("onmousedown", o.onMouseDown);
                o.screen.attachEvent("onclick", o.onClick)
            }
        };
        o.onMouseOver = function (t, n) {
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                o.dispatchEvent(e.MOUSE_OVER, {
                    e: t
                });
                TweenMax.killTweensOf(o.s1_do);
                TweenMax.killTweensOf(o.s2_do);
                TweenMax.to(o.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                });
                TweenMax.to(o.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }
        };
        o.onMouseOut = function (t) {
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                TweenMax.killTweensOf(o.s1_do);
                TweenMax.killTweensOf(o.s2_do);
                TweenMax.to(o.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
                TweenMax.to(o.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
                o.dispatchEvent(e.MOUSE_OUT)
            }
        };
        o.onClick = function (t) {
            if (o.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            if (o.disptachMainEvent_bl) o.dispatchEvent(e.CLICK)
        };
        o.onMouseDown = function (t) {
            if (o.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            if (!o.isMobile_bl) o.onMouseOver(t, false);
            if (o.disptachMainEvent_bl) o.dispatchEvent(e.MOUSE_DOWN, {
                e: t
            })
        };
        o.toggleButton = function () {
            if (o.currentState == 1) {
                o.firstButton_do.setVisible(false);
                o.secondButton_do.setVisible(true);
                o.currentState = 0;
                o.dispatchEvent(e.FIRST_BUTTON_CLICK)
            } else {
                o.firstButton_do.setVisible(true);
                o.secondButton_do.setVisible(false);
                o.currentState = 1;
                o.dispatchEvent(e.SECOND_BUTTON_CLICK)
            }
        };
        o.setButtonState = function (e) {
            if (e == 1) {
                o.firstButton_do.setVisible(true);
                o.secondButton_do.setVisible(false);
                o.currentState = 1
            } else {
                o.firstButton_do.setVisible(false);
                o.secondButton_do.setVisible(true);
                o.currentState = 0
            }
        };
        o.destroy = function () {
            if (o.isMobile_bl) {
                if (o.hasPointerEvent_bl) {
                    o.screen.removeEventListener("MSPointerDown", o.onMouseDown);
                    o.screen.removeEventListener("MSPointerUp", o.onClick);
                    o.screen.removeEventListener("MSPointerOver", o.onMouseOver);
                    o.screen.removeEventListener("MSPointerOut", o.onMouseOut)
                } else {
                    o.screen.removeEventListener("touchstart", o.onMouseDown)
                }
            } else if (o.screen.removeEventListener) {
                o.screen.removeEventListener("mouseover", o.onMouseOver);
                o.screen.removeEventListener("mouseout", o.onMouseOut);
                o.screen.removeEventListener("mousedown", o.onMouseDown);
                o.screen.removeEventListener("click", o.onClick)
            } else if (o.screen.detachEvent) {
                o.screen.detachEvent("onmouseover", o.onMouseOver);
                o.screen.detachEvent("onmouseout", o.onMouseOut);
                o.screen.detachEvent("onmousedown", o.onMouseDown);
                o.screen.detachEvent("onclick", o.onClick)
            }
            TweenMax.killTweensOf(o.s1_do);
            TweenMax.killTweensOf(o.s2_do);
            o.firstButton_do.destroy();
            o.n1_do.destroy();
            o.s1_do.destroy();
            o.secondButton_do.destroy();
            o.n2_do.destroy();
            o.s2_do.destroy();
            o.firstButton_do = null;
            o.n1_do = null;
            o.s1_do = null;
            o.secondButton_do = null;
            o.n2_do = null;
            o.s2_do = null;
            o.n1Img = null;
            o.s1Img = null;
            o.n2Img = null;
            o.s2Img = null;
            t = null;
            n = null;
            r = null;
            i = null;
            o.init = null;
            o.setupMainContainers = null;
            o.onMouseOver = null;
            o.onMouseOut = null;
            o.onClick = null;
            o.onMouseDown = null;
            o.toggleButton = null;
            o.setButtonState = null;
            o.destroy = null;
            o.setInnerHTML("");
            u.destroy();
            o = null;
            u = null;
            e.prototype = null
        };
        o.init()
    };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.FIRST_BUTTON_CLICK = "onFirstClick";
    e.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    e.MOUSE_OVER = "onMouseOver";
    e.MOUSE_OUT = "onMouseOut";
    e.MOUSE_DOWN = "onMouseDown";
    e.CLICK = "onClick";
    e.prototype = null;
    window.FWDComplexButton = e
})(window);
(function (e) {
    var t = function () {
        var n = this;
        var r = t.prototype;
        this.main_do = null;
        this.init = function () {
            this.setupScreen();
            e.onerror = this.showError;
            this.screen.style.zIndex = 100000009;
            setTimeout(this.addConsoleToDom, 100);
            setInterval(this.position, 100)
        };
        this.position = function () {
            var e = FWDUtils.getScrollOffsets();
            n.setX(e.x);
            n.setY(e.y)
        };
        this.addConsoleToDom = function () {
            if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) {
                document.getElementsByTagName("body")[0].appendChild(n.screen)
            } else {
                document.documentElement.appendChild(n.screen)
            }
        };
        this.setupScreen = function () {
            this.main_do = new FWDDisplayObject("div", "absolute");
            this.main_do.setOverflow("auto");
            this.main_do.setWidth(200);
            this.main_do.setHeight(300);
            this.setWidth(200);
            this.setHeight(300);
            this.main_do.setBkColor("#FFFFFF");
            this.addChild(this.main_do)
        };
        this.showError = function (e, t, r) {
            var i = n.main_do.getInnerHTML() + "<br>" + "JavaScript error: " + e + " on line " + r + " for " + t;
            n.main_do.setInnerHTML(i);
            n.main_do.screen.scrollTop = n.main_do.screen.scrollHeight
        };
        this.log = function (e) {
            var t = n.main_do.getInnerHTML() + "<br>" + e;
            n.main_do.setInnerHTML(t);
            n.main_do.getScreen().scrollTop = 1e4
        };
        this.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div", "absolute")
    };
    t.prototype = null;
    e.FWDConsole = t
})(window);
(function () {
    var e = function (t, n) {
        var r = this;
        var i = e.prototype;
        r.parent = t;
        r.buttonsTest_ar = n.buttons_ar;
        r.itemsLabels_ar = n.contextMenuLabels_ar;
        r.items_ar = [];
        r.spacers_ar = [];
        r.panButton_do = null;
        r.rotateButton_do = null;
        r.nextButton_do = null;
        r.prevButton_do = null;
        r.slideShowButton_do = null;
        r.infoButton_do = null;
        r.linkButton_do = null;
        r.fullScreenButton_do = null;
        r.zoomInButton_do = null;
        r.zoomOutButton_do = null;
        r.slideShowButton_do = null;
        r.linkButton_do = null;
        r.infoButton_do = null;
        r.fullScreenButton_do = null;
        r.backgroundColor_str = n.contextMenuBackgroundColor_str;
        r.borderColor_str = n.contextMenuBorderColor_str;
        r.spacerColor_str = n.contextMenuSpacerColor_str;
        r.itemNormalColor_str = n.contextMenuItemNormalColor_str;
        r.itemSelectedColor_str = n.contextMenuItemSelectedColor_str;
        r.itemDisabledColor_str = n.contextMenuItemDisabledColor_str;
        r.draggingMode_str = n.startDraggingMode_str;
        r.link_str = n.link_str;
        r.borderRadius = 6;
        r.biggestWidth;
        r.totalWidth = 400;
        r.totalHeight = 400;
        r.sapaceBetweenButtons = 7;
        r.padding = 6;
        r.getMaxWidthResizeAndPositionId_to;
        r.inverseNextAndPrevRotation_bl = n.inverseNextAndPrevRotation_bl;
        r.showScriptDeveloper_bl = n.showScriptDeveloper_bl;
        r.show_bl = false;
        r.isActive_bl = false;
        r.init = function () {
            if (r.itemsLabels_ar || r.showScriptDeveloper_bl) {
                r.show_bl = true;
                r.setWidth(r.totalWidth);
                r.setHeight(r.totalHeight);
                r.setBkColor(r.backgroundColor_str);
                r.getStyle().borderColor = r.borderColor_str;
                r.getStyle().borderStyle = "solid";
                r.getStyle().borderRadius = r.borderRadius + "px";
                r.getStyle().borderWidth = "1px";
                r.setVisible(false);
                r.setY(-2e3);
                r.parent.main_do.addChild(r);
                r.setupLabels();
                r.setupDeveloperButton();
                r.setupSpacers();
                r.getMaxWidthResizeAndPositionId_to = setTimeout(r.getMaxWidthResizeAndPosition, 200)
            }
            r.addContextEvent()
        };
        r.setupLabels = function () {
            var e = r.buttonsTest_ar.length;
            var n;
            var i = "";
            var s = "";
            if (!r.itemsLabels_ar) return;
            for (var o = 0; o < e; o++) {
                n = r.buttonsTest_ar[o];
                if (n == "pan") {
                    i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                    FWDContextMenuButton.setPrototype();
                    r.panButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.panButton_do);
                    if (r.draggingMode_str == FWDController.PAN) r.panButton_do.disable();
                    r.panButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.panRotateStartHandler);
                    r.addChild(r.panButton_do)
                } else if (n == "rotate") {
                    i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                    FWDContextMenuButton.setPrototype();
                    r.rotateButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.rotateButton_do);
                    if (r.draggingMode_str == FWDController.ROTATE) r.rotateButton_do.disable();
                    r.rotateButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.panButtonStartHandler);
                    r.addChild(r.rotateButton_do)
                } else if (n == "rotateright") {
                    i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                    FWDContextMenuButton.setPrototype();
                    r.nextButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.nextButton_do);
                    r.nextButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.nextButtonStartHandler);
                    r.addChild(r.nextButton_do)
                } else if (n == "roteteleft") {
                    i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                    FWDContextMenuButton.setPrototype();
                    r.prevButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.prevButton_do);
                    r.prevButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.prevButtonStartHandler);
                    r.addChild(r.prevButton_do)
                } else if (n == "scrollbar") {
                    var u = r.itemsLabels_ar[o];
                    if (u) {
                        if (u.indexOf("/") == -1) {
                            i = "Contextmenu item is not defined!";
                            s = "Contextmenu item is not defined!"
                        } else {
                            i = u.substr(0, u.indexOf("/"));
                            s = u.substr(u.indexOf("/") + 1)
                        }
                    } else {
                        i = "Contextmenu item is not defined!";
                        s = "Contextmenu item is not defined!"
                    }
                    FWDContextMenuButton.setPrototype();
                    r.zoomInButton_do = new FWDContextMenuButton(i, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.zoomInButton_do);
                    r.zoomInButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.zoomInButtonStartHandler);
                    r.addChild(r.zoomInButton_do);
                    FWDContextMenuButton.setPrototype();
                    r.zoomOutButton_do = new FWDContextMenuButton(s, undefined, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.zoomOutButton_do);
                    r.zoomOutButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.zoomOutButtonStartHandler);
                    r.addChild(r.zoomOutButton_do)
                } else if (n == "play") {
                    var u = r.itemsLabels_ar[o];
                    if (u) {
                        if (u.indexOf("/") == -1) {
                            i = "Contextmenu item is not defined!";
                            s = "Contextmenu item is not defined!"
                        } else {
                            i = u.substr(0, u.indexOf("/"));
                            s = u.substr(u.indexOf("/") + 1)
                        }
                    } else {
                        i = "Contextmenu item is not defined!";
                        s = "Contextmenu item is not defined!"
                    }
                    FWDContextMenuButton.setPrototype();
                    r.slideShowButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.slideShowButton_do);
                    r.slideShowButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.startSlideShowHandler);
                    r.addChild(r.slideShowButton_do)
                } else if (n == "info") {
                    i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                    FWDContextMenuButton.setPrototype();
                    r.infoButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.infoButton_do);
                    r.infoButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.infoButtonStart);
                    r.addChild(r.infoButton_do)
                } else if (n == "link") {
                    i = r.itemsLabels_ar[o] || "Contextmenu item is not defined!";
                    FWDContextMenuButton.setPrototype();
                    r.linkButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                    r.items_ar.push(r.linkButton_do);
                    r.linkButton_do.addListener(FWDContextMenuButton.CLICK, r.startLinkHandler);
                    r.addChild(r.linkButton_do)
                } else if (n == "fullscreen") {
                    if (!(t.displayType == FWDViewer.FULL_SCREEN && !FWDUtils.hasFullScreen)) {
                        u = r.itemsLabels_ar[o];
                        if (u) {
                            if (u.indexOf("/") == -1) {
                                i = "Contextmenu item is not defined!";
                                s = "Contextmenu item is not defined!"
                            } else {
                                i = u.substr(0, u.indexOf("/"));
                                s = u.substr(u.indexOf("/") + 1)
                            }
                        } else {
                            i = "Contextmenu item is not defined!";
                            s = "Contextmenu item is not defined!"
                        }
                        FWDContextMenuButton.setPrototype();
                        r.fullScreenButton_do = new FWDContextMenuButton(i, s, r.itemNormalColor_str, r.itemSelectedColor_str, r.itemDisabledColor_str);
                        r.items_ar.push(r.fullScreenButton_do);
                        r.fullScreenButton_do.addListener(FWDContextMenuButton.MOUSE_DOWN, r.fullScreenStartHandler);
                        r.addChild(r.fullScreenButton_do)
                    }
                }
            }
        };
        r.setupDeveloperButton = function () {
            if (r.showScriptDeveloper_bl) {
                if (!r.itemsLabels_ar) r.itemsLabels_ar = [];
                r.itemsLabels_ar.push("&#0169; made by FWD");
                label1_str = "&#0169; made by FWD";
                FWDContextMenuButton.setPrototype();
                r.developerButton_do = new FWDContextMenuButton(label1_str, undefined, r.itemSelectedColor_str, r.itemNormalColor_str, r.itemDisabledColor_str);
                r.developerButton_do.isDeveleper_bl = true;
                r.items_ar.push(r.developerButton_do);
                r.addChild(r.developerButton_do)
            }
        };
        r.panButtonStartHandler = function (e) {
            r.dispatchEvent(FWDController.ROTATE);
            r.removeFromDOM()
        };
        r.enablePanButton = function () {
            if (r.panButton_do) r.panButton_do.enable();
            if (r.rotateButton_do) r.rotateButton_do.disable();
            r.draggingMode_str = FWDController.ROTATE
        };
        r.panRotateStartHandler = function (e) {
            r.dispatchEvent(FWDController.PAN);
            r.removeFromDOM()
        };
        r.enableRotateButton = function () {
            if (r.rotateButton_do) r.rotateButton_do.enable();
            if (r.panButton_do) r.panButton_do.disable();
            r.draggingMode_str = FWDController.PAN
        };
        r.nextButtonStartHandler = function (e) {
            r.dispatchEvent(FWDController.GOTO_NEXT_IMAGE, {
                e: e
            })
        };
        r.prevButtonStartHandler = function (e) {
            r.dispatchEvent(FWDController.GOTO_PREV_IMAGE, {
                e: e
            })
        };
        r.zoomInButtonStartHandler = function (e) {
            r.dispatchEvent(FWDController.ZOOM_IN, {
                e: e
            })
        };
        r.zoomOutButtonStartHandler = function (e) {
            r.dispatchEvent(FWDController.ZOOM_OUT, {
                e: e
            })
        };
        r.startSlideShowHandler = function (e) {
            if (r.slideShowButton_do.currentState == 0) {
                r.dispatchEvent(FWDController.START_SLIDE_SHOW, {
                    e: e
                })
            } else {
                r.dispatchEvent(FWDController.STOP_SLIDE_SHOW, {
                    e: e
                })
            }
        };
        r.updateSlideShowButton = function (e) {
            if (!r.slideShowButton_do) return;
            if (e == 0) {
                r.slideShowButton_do.setButtonState(0)
            } else {
                r.slideShowButton_do.setButtonState(1)
            }
        };
        r.infoButtonStart = function (e) {
            r.removeFromDOM();
            r.dispatchEvent(FWDController.SHOW_INFO)
        };
        r.fullScreenStartHandler = function (e) {
            if (r.fullScreenButton_do.currentState == 0) {
                r.dispatchEvent(FWDController.GO_FULL_SCREEN)
            } else if (r.fullScreenButton_do.currentState == 1) {
                r.dispatchEvent(FWDController.GO_NORMAL_SCREEN)
            }
            r.fullScreenButton_do.onMouseOut()
        };
        r.updateFullScreenButton = function (e) {
            if (!r.fullScreenButton_do) return;
            if (e == 0) {
                r.fullScreenButton_do.setButtonState(0)
            } else {
                r.fullScreenButton_do.setButtonState(1)
            }
            r.removeFromDOM()
        };
        r.startLinkHandler = function (e) {
            window.open(r.link_str, "_blank")
        };
        r.setupSpacers = function () {
            var e = r.items_ar.length - 1;
            var t;
            for (var n = 0; n < e; n++) {
                t = new FWDSimpleDisplayObject("div");
                r.spacers_ar[n] = t;
                t.setHeight(1);
                t.setBkColor(r.spacerColor_str);
                r.addChild(t)
            }
        };
        r.getMaxWidthResizeAndPosition = function () {
            var e = r.items_ar.length;
            var t;
            var n;
            var i;
            var s;
            r.totalWidth = 0;
            r.totalHeight = 0;
            for (var o = 0; o < e; o++) {
                t = r.items_ar[o];
                if (t.getMaxTextWidth() > r.totalWidth) r.totalWidth = t.getMaxTextWidth()
            }
            for (var o = 0; o < e; o++) {
                n = r.spacers_ar[o - 1];
                t = r.items_ar[o];
                t.setX(r.padding);
                t.setY(10 + o * (t.totalHeight + r.sapaceBetweenButtons) - r.padding);
                if (n) {
                    n.setWidth(r.totalWidth + 2);
                    n.setX(r.padding);
                    n.setY(parseInt(t.getY() - r.sapaceBetweenButtons / 2) - 1)
                }
                t.setWidth(r.totalWidth + 2);
                t.centerText()
            }
            r.totalHeight = t.getY() + t.totalHeight + 2;
            r.setWidth(r.totalWidth + r.padding * 2 + 4);
            r.setHeight(r.totalHeight);
            r.setVisible(true);
            r.removeFromDOM()
        };
        r.addContextEvent = function () {
            if (r.parent.main_do.screen.addEventListener) {
                r.parent.main_do.screen.addEventListener("contextmenu", r.contextMenuHandler)
            } else {
                r.parent.main_do.screen.attachEvent("oncontextmenu", r.contextMenuHandler)
            }
        };
        r.contextMenuHandler = function (e) {
            if (!r.show_bl || !r.isActive_bl) {
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
                return
            }
            r.parent.main_do.addChild(r);
            r.positionButtons(e);
            r.setAlpha(0);
            TweenMax.to(r, .4, {
                alpha: 1,
                ease: Quart.easeOut
            });
            if (window.addEventListener) {
                window.addEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler);
                window.addEventListener("mouseup", r.contextMenuWindowOnMouseDownHandler)
            } else {
                document.documentElement.attachEvent("onmousedown", r.contextMenuWindowOnMouseDownHandler);
                document.documentElement.attachEvent("onmouseup", r.contextMenuWindowOnMouseDownHandler)
            } if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        r.contextMenuWindowOnMouseDownHandler = function (e) {
            var t = FWDUtils.getViewportMouseCoordinates(e);
            var n = t.screenX;
            var i = t.screenY;
            if (!FWDUtils.hitTest(r.screen, n, i)) {
                if (window.removeEventListener) {
                    window.removeEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler);
                    window.removeEventListener("mouseup", r.contextMenuWindowOnMouseDownHandler)
                } else {
                    document.documentElement.detachEvent("onmousedown", r.contextMenuWindowOnMouseDownHandler);
                    document.documentElement.detachEvent("onmouseup", r.contextMenuWindowOnMouseDownHandler)
                }
                r.removeFromDOM()
            }
        };
        r.positionButtons = function (e) {
            var t = FWDUtils.getViewportMouseCoordinates(e);
            var n = r.parent.main_do.getWidth();
            var i = r.parent.main_do.getHeight();
            var s = t.screenX - r.parent.main_do.getGlobalX();
            var o = t.screenY - r.parent.main_do.getGlobalY();
            var u = s - 2;
            var a = o - 2;
            r.totalWidth = r.getWidth();
            r.totalHeight = r.getHeight();
            if (u + r.totalWidth > n - 2) u = s - r.totalWidth;
            if (u < 0) u = parseInt((n - r.totalWidth) / 2);
            if (u < 0) u = 0;
            if (a + r.totalHeight > i - 2) a = o - r.totalHeight;
            if (a < 0) a = parseInt((i - r.totalHeight) / 2);
            if (a < 0) a = 0;
            r.setX(u);
            r.setY(a)
        };
        r.disable = function () {
            if (r.panButton_do) r.panButton_do.disable();
            if (r.rotateButton_do) r.rotateButton_do.disable();
            if (r.nextButton_do) r.nextButton_do.disable();
            if (r.prevButton_do) r.prevButton_do.disable();
            if (r.slideShowButton_do) r.slideShowButton_do.disable();
            if (r.infoButton_do) r.infoButton_do.disable();
            if (r.zoomInButton_do) r.zoomInButton_do.disable();
            if (r.zoomOutButton_do) r.zoomOutButton_do.disable();
            if (r.slideShowButton_do) r.slideShowButton_do.disable()
        };
        r.enable = function () {
            if (r.panButton_do && r.draggingMode_str == FWDController.ROTATE) r.panButton_do.enable();
            if (r.rotateButton_do && r.draggingMode_str == FWDController.PAN) r.rotateButton_do.enable();
            if (r.nextButton_do) r.nextButton_do.enable();
            if (r.prevButton_do) r.prevButton_do.enable();
            if (r.slideShowButton_do) r.slideShowButton_do.enable();
            if (r.infoButton_do) r.infoButton_do.enable();
            if (r.zoomInButton_do) r.zoomInButton_do.enable();
            if (r.zoomOutButton_do) r.zoomOutButton_do.enable();
            if (r.slideShowButton_do) r.slideShowButton_do.enable()
        };
        r.removeFromDOM = function () {
            r.setX(-5e3)
        };
        r.destroy = function () {
            var s;
            clearTimeout(r.getMaxWidthResizeAndPositionId_to);
            TweenMax.killTweensOf(r);
            if (window.removeEventListener) {
                window.removeEventListener("mousedown", r.contextMenuWindowOnMouseDownHandler);
                window.removeEventListener("mouseup", r.contextMenuWindowOnMouseDownHandler);
                r.parent.main_do.screen.removeEventListener("contextmenu", r.contextMenuHandler)
            } else {
                document.documentElement.detachEvent("onmousedown", r.contextMenuWindowOnMouseDownHandler);
                document.documentElement.detachEvent("onmouseup", r.contextMenuWindowOnMouseDownHandler);
                r.parent.main_do.screen.detachEvent("oncontextmenu", r.contextMenuHandler)
            }
            s = r.items_ar.length;
            for (var o = 0; o < s; o++) {
                r.items_ar[o].destroy()
            }
            s = r.spacers_ar.length;
            for (var o = 0; o < s; o++) {
                r.spacers_ar[o].destroy()
            }
            r.buttonsTest_ar = null;
            r.itemsLabels_ar = null;
            r.items_ar = null;
            r.spacers_ar = null;
            r.panButton_do = null;
            r.rotateButton_do = null;
            r.nextButton_do = null;
            r.prevButton_do = null;
            r.slideShowButton_do = null;
            r.infoButton_do = null;
            r.linkButton_do = null;
            r.fullScreenButton_do = null;
            r.zoomInButton_do = null;
            r.zoomOutButton_do = null;
            r.slideShowButton_do = null;
            r.linkButton_do = null;
            r.infoButton_do = null;
            r.fullScreenButton_do = null;
            r.backgroundColor_str = null;
            r.borderColor_str = null;
            r.spacerColor_str = null;
            r.itemNormalColor_str = null;
            r.itemSelectedColor_str = null;
            r.itemDisabledColor_str = null;
            r.draggingMode_str = null;
            r.link_str = null;
            r.init = null;
            r.setupLabels = null;
            r.setupDeveloperButton = null;
            r.panButtonStartHandler = null;
            r.enablePanButton = null;
            r.panRotateStartHandler = null;
            r.nextButtonStartHandler = null;
            r.prevButtonStartHandler = null;
            r.zoomInButtonStartHandler = null;
            r.zoomOutButtonStartHandler = null;
            r.startSlideShowHandler = null;
            r.updateSlideShowButton = null;
            r.fullScreenStartHandler = null;
            r.updateFullScreenButton = null;
            r.setupSpacers = null;
            r.getMaxWidthResizeAndPosition = null;
            r.addContextEvent = null;
            r.contextMenuHandler = null;
            r.contextMenuWindowOnMouseDownHandler = null;
            r.positionButtons = null;
            r.removeFromDOM = null;
            r.destroy = null;
            t = null;
            n = null;
            r.setInnerHTML("");
            i.destroy();
            i = null;
            r = null;
            e.prototype = null
        };
        r.init()
    };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.prototype = null;
    window.FWDContextMenu = e
})(window);
(function () {
    var e = function (t, n, r, i, s, o) {
        var u = this;
        var a = e.prototype;
        u.label1_str = t;
        u.label2_str = n;
        u.normalColor_str = r;
        u.selectedColor_str = i;
        u.disabledColor_str = s;
        u.totalWidth = 400;
        u.totalHeight = 20;
        u.padding;
        u.text1_sdo = null;
        u.text2_sdo = null;
        u.dumy_sdo = null;
        u.isMobile_bl = FWDUtils.isMobile;
        u.currentState = 1;
        u.isDisabled_bl = false;
        u.isMaximized_bl = false;
        u.showSecondButton_bl = n != undefined;
        u.isDeveleper_bl = false;
        u.init = function () {
            u.setBackfaceVisibility();
            u.setButtonMode(true);
            u.setupMainContainers();
            u.setWidth(u.totalWidth);
            u.setHeight(u.totalHeight);
            u.setButtonState(0)
        };
        u.setupMainContainers = function () {
            u.text1_sdo = new FWDSimpleDisplayObject("div");
            u.text1_sdo.setBackfaceVisibility();
            u.text1_sdo.setDisplay("inline-block");
            u.text1_sdo.getStyle().fontFamily = "Arial";
            u.text1_sdo.getStyle().fontSize = "12px";
            u.text1_sdo.getStyle().color = u.normalColor_str;
            u.text1_sdo.getStyle().fontSmoothing = "antialiased";
            u.text1_sdo.getStyle().webkitFontSmoothing = "antialiased";
            u.text1_sdo.getStyle().textRendering = "optimizeLegibility";
            u.text1_sdo.setInnerHTML(u.label1_str);
            u.addChild(u.text1_sdo);
            if (u.showSecondButton_bl) {
                u.text2_sdo = new FWDSimpleDisplayObject("div");
                u.text2_sdo.setBackfaceVisibility();
                u.text2_sdo.setDisplay("inline-block");
                u.text2_sdo.getStyle().fontFamily = "Arial";
                u.text2_sdo.getStyle().fontSize = "12px";
                u.text2_sdo.getStyle().color = u.normalColor_str;
                u.text2_sdo.getStyle().fontSmoothing = "antialiased";
                u.text2_sdo.getStyle().webkitFontSmoothing = "antialiased";
                u.text2_sdo.getStyle().textRendering = "optimizeLegibility";
                u.text2_sdo.setInnerHTML(u.label2_str);
                u.addChild(u.text2_sdo)
            }
            u.dumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) {
                u.dumy_sdo.setBkColor("#FF0000");
                u.dumy_sdo.setAlpha(0)
            }
            u.addChild(u.dumy_sdo);
            if (u.isMobile_bl) {
                u.screen.addEventListener("touchstart", u.onMouseDown)
            } else if (u.screen.addEventListener) {
                u.screen.addEventListener("mouseover", u.onMouseOver);
                u.screen.addEventListener("mouseout", u.onMouseOut);
                u.screen.addEventListener("mousedown", u.onMouseDown);
                u.screen.addEventListener("click", u.onClick)
            } else if (u.screen.attachEvent) {
                u.screen.attachEvent("onmouseover", u.onMouseOver);
                u.screen.attachEvent("onmouseout", u.onMouseOut);
                u.screen.attachEvent("onmousedown", u.onMouseDown);
                u.screen.attachEvent("onclick", u.onClick)
            }
        };
        u.onMouseOver = function (t) {
            if (u.isDisabled_bl) return;
            TweenMax.killTweensOf(u.text1_sdo);
            if (t) {
                TweenMax.to(u.text1_sdo.screen, .5, {
                    css: {
                        color: u.selectedColor_str
                    },
                    ease: Expo.easeOut
                });
                if (u.showSecondButton_bl) TweenMax.to(u.text2_sdo.screen, .5, {
                    css: {
                        color: u.selectedColor_str
                    },
                    ease: Expo.easeOut
                })
            } else {
                u.text1_sdo.getStyle().color = u.selectedColor_str;
                if (u.showSecondButton_bl) {
                    TweenMax.killTweensOf(u.text2_sdo);
                    u.text2_sdo.getStyle().color = u.selectedColor_str
                }
            }
            u.dispatchEvent(e.MOUSE_OVER)
        };
        u.onMouseOut = function (t) {
            if (u.isDisabled_bl) return;
            TweenMax.killTweensOf(u.text1_sdo);
            TweenMax.to(u.text1_sdo.screen, .5, {
                css: {
                    color: u.normalColor_str
                },
                ease: Expo.easeOut
            });
            if (u.showSecondButton_bl) {
                TweenMax.killTweensOf(u.text2_sdo);
                TweenMax.to(u.text2_sdo.screen, .5, {
                    css: {
                        color: u.normalColor_str
                    },
                    ease: Expo.easeOut
                })
            }
            u.dispatchEvent(e.MOUSE_OUT)
        };
        u.onClick = function (t) {
            if (u.isDeveleper_bl) {
                window.open("http://www.webdesign-flash.ro", "_blank");
                return
            }
            if (u.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            u.dispatchEvent(e.CLICK)
        };
        u.onMouseDown = function (t) {
            if (u.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            u.dispatchEvent(e.MOUSE_DOWN, {
                e: t
            })
        };
        u.toggleButton = function () {
            if (!u.showSecondButton_bl) return;
            if (u.currentState == 1) {
                u.text1_sdo.setVisible(true);
                u.text2_sdo.setVisible(false);
                u.currentState = 0;
                u.dispatchEvent(e.FIRST_BUTTON_CLICK)
            } else {
                u.text1_sdo.setVisible(false);
                u.text2_sdo.setVisible(true);
                u.currentState = 1;
                u.dispatchEvent(e.SECOND_BUTTON_CLICK)
            }
        };
        u.setButtonState = function (e) {
            if (e == 0) {
                u.text1_sdo.setVisible(true);
                if (u.showSecondButton_bl) u.text2_sdo.setVisible(false);
                u.currentState = 0
            } else if (e == 1) {
                u.text1_sdo.setVisible(false);
                if (u.showSecondButton_bl) u.text2_sdo.setVisible(true);
                u.currentState = 1
            }
        };
        u.centerText = function () {
            u.dumy_sdo.setWidth(u.totalWidth);
            u.dumy_sdo.setHeight(u.totalHeight);
            if (FWDUtils.isIEAndLessThen9) {
                u.text1_sdo.setY(Math.round((u.totalHeight - u.text1_sdo.getHeight()) / 2) - 1);
                if (u.showSecondButton_bl) u.text2_sdo.setY(Math.round((u.totalHeight - u.text2_sdo.getHeight()) / 2) - 1)
            } else {
                u.text1_sdo.setY(Math.round((u.totalHeight - u.text1_sdo.getHeight()) / 2));
                if (u.showSecondButton_bl) u.text2_sdo.setY(Math.round((u.totalHeight - u.text2_sdo.getHeight()) / 2))
            }
            u.text1_sdo.setHeight(u.totalHeight + 2);
            if (u.showSecondButton_bl) u.text2_sdo.setHeight(u.totalHeight + 2)
        };
        u.getMaxTextWidth = function () {
            var e = u.text1_sdo.getWidth();
            var t = 0;
            if (u.showSecondButton_bl) t = u.text2_sdo.getWidth();
            return Math.max(e, t)
        };
        u.disable = function () {
            u.isDisabled_bl = true;
            TweenMax.killTweensOf(u.text1_sdo);
            TweenMax.to(u.text1_sdo.screen, .5, {
                css: {
                    color: u.disabledColor_str
                },
                ease: Expo.easeOut
            });
            u.setButtonMode(false)
        };
        u.enable = function () {
            u.isDisabled_bl = false;
            TweenMax.killTweensOf(u.text1_sdo);
            TweenMax.to(u.text1_sdo.screen, .5, {
                css: {
                    color: u.normalColor_str
                },
                ease: Expo.easeOut
            });
            u.setButtonMode(true)
        };
        u.destroy = function () {
            if (u.isMobile_bl) {
                u.screen.removeEventListener("touchstart", u.onMouseDown)
            } else if (u.screen.removeEventListener) {
                u.screen.removeEventListener("mouseover", u.onMouseOver);
                u.screen.removeEventListener("mouseout", u.onMouseOut);
                u.screen.removeEventListener("mousedown", u.onMouseDown);
                u.screen.removeEventListener("click", u.onClick)
            } else if (u.screen.detachEvent) {
                u.screen.detachEvent("onmouseover", u.onMouseOver);
                u.screen.detachEvent("onmouseout", u.onMouseOut);
                u.screen.detachEvent("onmousedown", u.onMouseDown);
                u.screen.detachEvent("onclick", u.onClick)
            }
            TweenMax.killTweensOf(u.text1_sdo);
            u.text1_sdo.destroy();
            if (u.text2_sdo) {
                TweenMax.killTweensOf(u.text2_sdo);
                u.text2_sdo.destroy()
            }
            u.dumy_sdo.destroy();
            u.text1_sdo = null;
            u.text2_sdo = null;
            u.dumy_sdo = null;
            u.label1_str = null;
            u.label2_str = null;
            u.normalColor_str = null;
            u.selectedColor_str = null;
            u.disabledColor_str = null;
            t = null;
            n = null;
            r = null;
            i = null;
            s = null;
            u.setInnerHTML("");
            a.destroy();
            u = null;
            a = null;
            e.prototype = null
        };
        u.init()
    };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.FIRST_BUTTON_CLICK = "onFirstClick";
    e.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    e.MOUSE_OVER = "onMouseOver";
    e.MOUSE_OUT = "onMouseOut";
    e.MOUSE_DOWN = "onMouseDown";
    e.CLICK = "onClick";
    e.prototype = null;
    window.FWDContextMenuButton = e
})(window);
(function () {
    var e = function (t, n) {
        var r = this;
        var i = e.prototype;
        this.buttonsTest_ar = t.buttons_ar;
        this.buttonsLabels_ar = t.buttonsLabels_ar;
        this.buttons_ar = [];
        this.backgroundLeft_img = t.controllerBackgroundLeft_img;
        this.backgroundRight_img = t.controllerBackgroundRight_img;
        this.panN_img = t.controllerPanN_img;
        this.panS_img = t.controllerPanS_img;
        this.rotateN_img = t.controllerRotateN_img;
        this.rotateS_img = t.controllerRotateS_img;
        this.nextN_img = t.controllerNextN_img;
        this.nextS_img = t.controllerNextS_img;
        this.prevN_img = t.controllerPrevN_img;
        this.prevS_img = t.controllerPrevS_img;
        this.playN_img = t.controllerPlayN_img;
        this.playS_img = t.controllerPlayS_img;
        this.pauseN_img = t.controllerPauseN_img;
        this.pauseS_img = t.controllerPauseS_img;
        this.infoN_img = t.controllerInfoN_img;
        this.infoS_img = t.controllerInfoS_img;
        this.linkN_img = t.controllerLinkN_img;
        this.linkS_img = t.controllerLinkS_img;
        this.fullScreenNormalN_img = t.controllerFullScreenNormalN_img;
        this.fullScreenNormalS_img = t.controllerFullScreenNormalS_img;
        this.fullScreenFullN_img = t.controllerFullScreenFullN_img;
        this.fullScreenFullS_img = t.controllerFullScreenFullS_img;
        this.zoomInN_img = t.zoomInN_img;
        this.zoomInS_img = t.zoomInS_img;
        this.zoomOutN_img = t.zoomOutN_img;
        this.zoomOutS_img = t.zoomOutS_img;
        this.scrollBarHandlerN_img = t.scrollBarHandlerN_img;
        this.scrollBarHandlerS_img = t.scrollBarHandlerS_img;
        this.scrollBarLeft_img = t.scrollBarLeft_img;
        this.scrollBarRight_img = t.scrollBarRight_img;
        this.toolTipLeft_img = t.toolTipLeft_img;
        this.toolTipPointer_img = t.toolTipPointer_img;
        this.hider = null;
        this.mainHolder_do = null;
        this.backgroundLeft_sdo = null;
        this.backgroundMiddle_sdo = null;
        this.backgroundRight_sdo = null;
        this.panButton_do = null;
        this.rotateButton_do = null;
        this.nextButton_do = null;
        this.prevButton_do = null;
        this.slideShowButton_do = null;
        this.infoButton_do = null;
        this.linkButton_do = null;
        this.fullScreenButton_do = null;
        this.zoomIn_do = null;
        this.zoomOut_do = null;
        this.scrollBar_do = null;
        this.scrollBarLeft_sdo = null;
        this.scrollBarRight_sdo = null;
        this.scrollBarMiddle_sdo = null;
        this.scrollBarHandler_do = null;
        this.scrollBarHandlerN_sdo = null;
        this.scrollBarHandlerS_sdo = null;
        this.panButtonTooTipLabel_do = null;
        this.scrollBarHandlerToolTip_do = null;
        this.rotateButtonToolTip_do = null;
        this.nextButtonToolTip_do = null;
        this.prevButtonToolTip_do = null;
        this.slideShowToolTip_do = null;
        this.infoToolTip_do = null;
        this.linkToolTip_do = null;
        this.fullscreenToolTip_do = null;
        this.backgroundMiddlePath_str = t.controllerBackgroundMiddlePath_str;
        this.scrollBarMiddlePath_str = t.scrollBarMiddlePath_str;
        this.draggingMode_str = t.startDraggingMode_str;
        this.controllerPosition_str = t.controllerPosition_str;
        this.buttonToolTipLeft_str = t.buttonToolTipLeft_str;
        this.buttonToolTipMiddle_str = t.buttonToolTipMiddle_str;
        this.buttonToolTipRight_str = t.buttonToolTipRight_str;
        this.link_str = t.link_str;
        this.buttonToolTipFontColor_str = t.buttonToolTipFontColor_str;
        this.buttonToolTipBottomPointer_str = t.buttonToolTipBottomPointer_str;
        this.buttonToolTipTopPointer_str = t.buttonToolTipTopPointer_str;
        this.scrollBarPosition = FWDUtils.indexOfArray(r.buttonsTest_ar, "scrollbar");
        this.controllerBackgroundOpacity = t.controllerBackgroundOpacity;
        this.rotationSpeed = t.buttonsRotationSpeed;
        this.slideShowDelay = t.slideShowDelay;
        this.stageWidth;
        this.setHeight;
        this.controllerOffsetY = t.controllerOffsetY;
        this.scrollBarOffsetX = t.scrollBarOffsetX;
        this.scrollBarRightPartWidth = r.scrollBarRight_img.width;
        this.startSpaceBetweenButtons = t.startSpaceBetweenButtons;
        this.scrollBarHeight = r.scrollBarLeft_img.height;
        this.scrollBarHandlerWidth = r.scrollBarHandlerN_img.width;
        this.scrollBarHandlerHeight = r.scrollBarHandlerN_img.height;
        this.spaceBetweenButtons = t.spaceBetweenButtons;
        this.curHeight = r.backgroundLeft_img.height;
        this.zoomButtonWidth = r.zoomOutN_img.width;
        this.zoomButtonHeight = r.zoomOutN_img.height;
        this.finalHandlerX;
        this.startSpaceForScrollBarButtons = t.startSpaceForScrollBarButtons;
        this.smallSpaceForScrollBar = t.startSpaceForScrollBar;
        this.totalLargeButtons;
        this.curWidth;
        this.maxWidth = t.controllerMaxWidth;
        this.minWidth;
        this.buttonWidth = r.panN_img.width;
        this.buttonHeight = r.panN_img.height;
        this.scrollBarTotalWidth;
        this.scrollBarHandlerXPositionOnPress;
        this.lastPresedX;
        this.scrollBarHandlerToolTipOffsetY = t.scrollBarHandlerToolTipOffsetY;
        this.zoomInAndOutToolTipOffsetY = t.zoomInAndOutToolTipOffsetY;
        this.buttonsToolTipOffsetY = t.buttonsToolTipOffsetY;
        this.gotoImageId_int;
        this.zoomWithButtonsId_int;
        this.slideShowId_int;
        this.gotoImageId_to;
        this.zoomWithButtonsId_to;
        this.showScrollBar_bl = false;
        if (FWDUtils.indexOfArray(r.buttonsTest_ar, "scrollbar") != -1) r.showScrollBar_bl = true;
        this.isMobile_bl = t.isMobile_bl;
        this.inverseNextAndPrevRotation_bl = t.inverseNextAndPrevRotation_bl;
        this.isScrollBarActive_bl = false;
        this.isZoomInOrOutPressed_bl = false;
        this.isKeyPressed_bl = false;
        this.addKeyboardSupport_bl = t.addKeyboardSupport_bl;
        this.showButtonsLabels_bl = Boolean(r.buttonsLabels_ar);
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        r.init = function () {
            r.setOverflow("visible");
            r.setSelectable(false);
            r.setupMainHolder();
            r.setupBackground();
            if (r.addKeyboardSupport_bl) r.addKeyboardSupport();
            r.setupButtons();
            r.totalLargeButtons = r.buttons_ar.lenght;
            if (r.showScrollBar_bl) r.setupScrollBar();
            if (r.buttonsTest_ar.length == 0 && !r.showScrollBar_bl) r.setVisible(false);
            r.hide();
            r.show();
            r.screen.onmousedown = function () {
                r.dispatchEvent(e.MOUSE_DOWN)
            }
        };
        r.resizeAndPosition = function () {
            if (n.stageWidth == r.stageWidth && n.stageHeight == r.stageHeight) return;
            r.stageWidth = n.stageWidth;
            r.stageHeight = n.stageHeight;
            r.setWidth(r.stageWidth);
            r.setHeight(r.stageHeight);
            r.positionButtons()
        };
        r.setupMainHolder = function () {
            r.mainHolder_do = new FWDDisplayObject("div");
            r.mainHolder_do.setOverflow("visible");
            r.addChild(r.mainHolder_do)
        };
        r.setupHider = function (e) {
            r.hider = e;
            r.hider.addListener(FWDHider.SHOW, r.onHiderShow);
            r.hider.addListener(FWDHider.HIDE, r.onHiderHide)
        };
        r.onHiderShow = function () {
            r.show()
        };
        r.onHiderHide = function () {
            if (FWDUtils.hitTest(r.mainHolder_do.screen, r.hider.globalX, r.hider.globalY)) {
                r.hider.reset();
                return
            } else {
                r.hide(true)
            }
        };
        this.addKeyboardSupport = function () {
            if (document.addEventListener) {
                window.addEventListener("keydown", r.onKeyDownHandler);
                window.addEventListener("keyup", r.onKeyUpHandler)
            } else if (document.attachEvent) {
                document.attachEvent("onkeydown", r.onKeyDownHandler);
                document.attachEvent("onkeyup", r.onKeyUpHandler)
            }
        };
        this.onKeyDownHandler = function (t) {
            if (n.hibernate_bl) return;
            if (r.isKeyPressed_bl) return;
            if (t.keyCode == 39) {
                r.isKeyPressed_bl = true;
                if (r.slideShowButton_do) r.stopSlideShow();
                r.gotoNextImage();
                clearInterval(r.gotoImageId_int);
                clearTimeout(r.gotoImageId_to);
                r.gotoImageId_to = setTimeout(r.goToNextImageInWithDelay, 400);
                r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE);
                if (t.preventDefault) {
                    t.preventDefault()
                } else {
                    return false
                }
            } else if (t.keyCode == 37) {
                r.isKeyPressed_bl = true;
                if (r.slideShowButton_do) r.stopSlideShow();
                r.gotoPrevImage();
                clearInterval(r.gotoImageId_int);
                clearTimeout(r.gotoImageId_to);
                r.gotoImageId_to = setTimeout(r.goToPrevImageInWithDelay, 400);
                r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE);
                if (t.preventDefault) {
                    t.preventDefault()
                } else {
                    return false
                }
            }
        };
        this.onKeyUpHandler = function (t) {
            r.isKeyPressed_bl = false;
            clearInterval(r.gotoImageId_int);
            clearTimeout(r.gotoImageId_to);
            if (window.addEventListener) {
                window.addEventListener("keydown", r.onKeyDownHandler)
            } else if (document.attachEvent) {
                document.attachEvent("onkeydown", r.onKeyDownHandler)
            }
            r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE)
        };
        r.setupButtons = function () {
            var e = r.buttonsTest_ar.length;
            var t;
            var i = "";
            var s = "";
            for (var o = 0; o < e; o++) {
                t = r.buttonsTest_ar[o];
                if (t == "pan") {
                    if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                    r.setupPanButton(i);
                    r.buttons_ar.push(r.panButton_do)
                } else if (t == "rotate") {
                    if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                    r.setupRotateButton(i);
                    r.buttons_ar.push(r.rotateButton_do)
                } else if (t == "rotateright") {
                    if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                    r.setupNextButton(i);
                    r.buttons_ar.push(r.nextButton_do)
                } else if (t == "roteteleft") {
                    if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                    r.setupPrevButton(i);
                    r.buttons_ar.push(r.prevButton_do)
                } else if (t == "play") {
                    if (r.showButtonsLabels_bl) {
                        var u = r.buttonsLabels_ar[o];
                        if (u) {
                            if (u.indexOf("/") == -1) {
                                i = "tooltip is not defined!";
                                s = "tooltip is not defined!"
                            } else {
                                i = u.substr(0, u.indexOf("/"));
                                s = u.substr(u.indexOf("/") + 1)
                            }
                        } else {
                            i = "tooltip is not defined!";
                            s = "tooltip is not defined!"
                        }
                    }
                    r.setupSlideshowButton(i, s);
                    r.buttons_ar.push(r.slideShowButton_do)
                } else if (t == "info") {
                    if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                    r.setupInfoButton(i);
                    r.buttons_ar.push(r.infoButton_do)
                } else if (t == "link") {
                    if (r.showButtonsLabels_bl) i = r.buttonsLabels_ar[o] || "tooltip is not defined!";
                    r.setupLinkButton(i);
                    r.buttons_ar.push(r.linkButton_do)
                } else if (t == "fullscreen") {
                    if (!(n.displayType == FWDViewer.FULL_SCREEN && !FWDUtils.hasFullScreen)) {
                        if (r.showButtonsLabels_bl) {
                            var u = r.buttonsLabels_ar[o];
                            if (u) {
                                if (u.indexOf("/") == -1) {
                                    i = "tooltip is not defined!";
                                    s = "tooltip is not defined!"
                                } else {
                                    i = u.substr(0, u.indexOf("/"));
                                    s = u.substr(u.indexOf("/") + 1)
                                }
                            } else {
                                i = "tooltip is not defined!";
                                s = "tooltip is not defined!"
                            }
                        }
                        r.setupFullScreenButton(i, s);
                        r.buttons_ar.push(r.fullScreenButton_do)
                    }
                }
            }
        };
        r.positionButtons = function () {
            var t = r.buttons_ar.length;
            var n = r.spaceBetweenButtons;
            var i;
            var s;
            var o;
            var u;
            var a;
            var f;
            var l;
            var c;
            if (r.showScrollBar_bl) {
                r.isScrollBarActive_bl = true;
                r.curWidth = r.stageWidth;
                c = FWDUtils.indexOfArray(r.buttons_ar, r.zoomIn_do);
                if (c != -1) {
                    r.buttons_ar.splice(c, 1);
                    t--
                }
                c = FWDUtils.indexOfArray(r.buttons_ar, r.zoomOut_do);
                if (c != -1) {
                    r.buttons_ar.splice(c, 1);
                    t--
                }
                if (r.scrollBarPosition > t) r.scrollBarPosition = t;
                if (r.scrollBarPosition < 0) r.scrollBarPosition = 0;
                if (r.curWidth > r.maxWidth) r.curWidth = r.maxWidth;
                if (t == 0) {
                    r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 2 + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                } else if (t > 1 && r.scrollBarPosition != 0 && r.scrollBarPosition != t) {
                    r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 2 + t * r.buttonWidth + r.spaceBetweenButtons * (t - 2) + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                } else if (t > 1 && (r.scrollBarPosition == 0 || r.scrollBarPosition == t)) {
                    r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 3 + t * r.buttonWidth + r.spaceBetweenButtons * (t - 1) + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                } else {
                    r.scrollBarTotalWidth = r.startSpaceBetweenButtons * 2 + t * r.buttonWidth + r.startSpaceForScrollBarButtons * 2 + r.smallSpaceForScrollBar * 2 + r.zoomButtonWidth * 2
                }
                r.scrollBarTotalWidth = r.curWidth - r.scrollBarTotalWidth;
                if (r.scrollBarTotalWidth < 100) r.isScrollBarActive_bl = false
            }
            if (r.isScrollBarActive_bl) {
                r.scrollBar_do.setVisible(true);
                for (var h = 0; h < r.scrollBarPosition; h++) {
                    l = r.buttons_ar[h];
                    if (l) {
                        l = r.buttons_ar[h];
                        a = r.startSpaceBetweenButtons + h * (n + r.buttonWidth);
                        a = r.startSpaceBetweenButtons + h * (n + r.buttonWidth);
                        f = parseInt((r.curHeight - r.buttonHeight) / 2);
                        l.setX(a);
                        l.setY(f)
                    }
                }
                for (var h = t + 1; h >= r.scrollBarPosition; h--) {
                    l = r.buttons_ar[h];
                    if (l) {
                        l = r.buttons_ar[h];
                        a = r.curWidth - r.startSpaceBetweenButtons - r.buttonWidth - Math.abs(h - t + 1) * (n + r.buttonWidth);
                        f = parseInt((r.curHeight - r.buttonHeight) / 2);
                        l.setX(a);
                        l.setY(f)
                    }
                }
                if (t == 0) {
                    u = r.startSpaceForScrollBarButtons + r.startSpaceBetweenButtons
                } else if (t > 1 && r.scrollBarPosition != 0 && r.scrollBarPosition != t) {
                    u = r.buttons_ar[r.scrollBarPosition - 1].getX() + r.buttonWidth + r.startSpaceForScrollBarButtons
                } else if (t > 1 && r.scrollBarPosition == 0) {
                    u = r.startSpaceBetweenButtons + r.startSpaceForScrollBarButtons
                } else if (t > 1 && r.scrollBarPosition == t) {
                    u = r.buttons_ar[r.scrollBarPosition - 1].getX() + r.buttonWidth + r.startSpaceForScrollBarButtons + r.startSpaceBetweenButtons
                } else if (t == 1 && r.scrollBarPosition > 0) {
                    u = r.startSpaceBetweenButtons + r.buttonWidth + r.startSpaceForScrollBarButtons
                } else if (t == 1 && r.scrollBarPosition == 0) {
                    u = r.startSpaceForScrollBarButtons + r.startSpaceBetweenButtons
                }
                u += r.scrollBarOffsetX;
                r.zoomOut_do.setX(u);
                r.zoomOut_do.setY(parseInt((r.curHeight - r.zoomButtonHeight) / 2));
                r.zoomIn_do.setX(r.zoomOut_do.getX() + r.zoomButtonWidth + r.smallSpaceForScrollBar * 2 + r.scrollBarTotalWidth);
                r.zoomIn_do.setY(parseInt((r.curHeight - r.zoomButtonHeight) / 2));
                r.scrollBar_do.setX(r.zoomOut_do.getX() + r.smallSpaceForScrollBar + r.zoomButtonWidth);
                r.scrollBar_do.setY(parseInt((r.curHeight - r.scrollBarHeight) / 2) + 1);
                r.scrollBar_do.setWidth(r.scrollBarTotalWidth);
                r.scrollBarMiddle_do.setX(r.scrollBarRightPartWidth - 1);
                r.scrollBarMiddle_do.setWidth(r.scrollBarTotalWidth - r.scrollBarRightPartWidth * 2 + 2);
                r.scrollBarRight_do.setX(r.scrollBarTotalWidth - r.scrollBarRightPartWidth)
            } else {
                if (r.showScrollBar_bl) {
                    r.scrollBar_do.setVisible(false);
                    if (FWDUtils.indexOfArray(r.buttons_ar, r.zoomIn_do) == -1) {
                        c = r.scrollBarPosition;
                        r.buttons_ar.splice(c, 0, r.zoomIn_do);
                        r.buttons_ar.splice(c, 0, r.zoomOut_do)
                    }
                    t = r.buttons_ar.length
                }
                r.minWidth = t * r.buttonWidth + r.startSpaceBetweenButtons * 2 + r.spaceBetweenButtons * t - r.spaceBetweenButtons;
                if (r.minWidth > r.stageWidth) {
                    r.minWidth = r.stageWidth;
                    if (r.minWidth < 320) r.minWidth = 320;
                    s = r.buttonWidth * t;
                    n = (r.minWidth - r.startSpaceBetweenButtons * 2 - s) / (t - 1)
                }
                r.curWidth = r.minWidth;
                for (var h = 0; h < t + 2; h++) {
                    l = r.buttons_ar[h];
                    if (l) {
                        a = r.startSpaceBetweenButtons + h * (n + r.buttonWidth);
                        f = parseInt((r.curHeight - r.buttonHeight) / 2);
                        if (l == r.zoomIn_do) {
                            a = a + parseInt((r.buttonWidth - r.zoomButtonWidth) / 2) - 2;
                            f = parseInt((r.curHeight - r.zoomButtonHeight) / 2)
                        } else if (l == r.zoomOut_do) {
                            a = a + parseInt((r.buttonWidth - r.zoomButtonWidth) / 2) + 2;
                            f = parseInt((r.curHeight - r.zoomButtonHeight) / 2)
                        }
                        l.setX(a);
                        l.setY(f)
                    }
                }
            }
            r.backgroundRight_sdo.setX(r.curWidth - r.backgroundRight_sdo.getWidth());
            r.backgroundMiddle_sdo.setX(r.backgroundLeft_sdo.getWidth());
            r.backgroundMiddle_sdo.setWidth(r.curWidth - r.backgroundLeft_sdo.getWidth() * 2);
            r.backgroundMiddle_sdo.setHeight(r.curHeight);
            r.mainHolder_do.setWidth(r.curWidth);
            r.mainHolder_do.setHeight(r.curHeight);
            r.setWidth(r.curWidth);
            r.setHeight(r.curHeight);
            if (r.controllerPosition_str == e.POSITION_TOP) {
                r.mainHolder_do.setX(Math.round((r.stageWidth - r.curWidth) / 2));
                r.setY(r.controllerOffsetY)
            } else {
                r.mainHolder_do.setX(Math.round((r.stageWidth - r.curWidth) / 2));
                r.setY(r.stageHeight - r.curHeight - r.controllerOffsetY)
            }
        };
        r.setupBackground = function () {
            r.backgroundLeft_sdo = new FWDSimpleDisplayObject("img");
            r.backgroundLeft_sdo.setScreen(r.backgroundLeft_img);
            if (r.controllerBackgroundOpacity != 1) r.backgroundLeft_sdo.setAlpha(r.controllerBackgroundOpacity);
            r.backgroundMiddle_sdo = new FWDSimpleDisplayObject("div");
            r.backgroundMiddle_sdo.getStyle().background = "url('" + r.backgroundMiddlePath_str + "')";
            r.backgroundMiddle_sdo.getStyle().backgroundRepeat = "repeat-x";
            if (r.controllerBackgroundOpacity != 1) r.backgroundMiddle_sdo.setAlpha(r.controllerBackgroundOpacity);
            r.backgroundRight_sdo = new FWDSimpleDisplayObject("img");
            r.backgroundRight_sdo.setScreen(r.backgroundRight_img);
            if (r.controllerBackgroundOpacity != 1) r.backgroundRight_sdo.setAlpha(r.controllerBackgroundOpacity);
            r.mainHolder_do.addChild(r.backgroundLeft_sdo);
            r.mainHolder_do.addChild(r.backgroundRight_sdo);
            r.mainHolder_do.addChild(r.backgroundMiddle_sdo)
        };
        r.setupPanButton = function (t) {
            FWDSimpleButton.setPrototype();
            r.panButton_do = new FWDSimpleButton(r.panN_img, r.panS_img, r.isMobile_bl);
            r.panButton_do.addListener(FWDSimpleButton.MOUSE_OVER, r.panButtonOnMouseOverHandler);
            r.panButton_do.addListener(FWDSimpleButton.MOUSE_OUT, r.panButtonOnMouseOutHandler);
            r.panButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.panButtonOnMouseDownHandler);
            r.mainHolder_do.addChild(r.panButton_do);
            if (r.draggingMode_str == e.PAN) r.disablePanButton();
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.panButtonTooTipLabel_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, t, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.panButtonTooTipLabel_do)
            }
        };
        r.panButtonOnMouseOverHandler = function (e) {
            if (r.panButton_do.isSelectedFinal_bl) return;
            r.showToolTipButton(r.panButton_do, r.panButtonTooTipLabel_do, r.buttonsToolTipOffsetY)
        };
        r.panButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.panButtonTooTipLabel_do.hide()
        };
        r.panButtonOnMouseDownHandler = function (e) {
            r.pan()
        };
        r.disablePanButton = function () {
            r.panButton_do.setSelctedFinal();
            if (r.rotateButton_do) r.rotateButton_do.setUnselctedFinal()
        };
        this.pan = function () {
            if (r.slideShowButton_do) r.stopSlideShow();
            clearInterval(r.gotoImageId_int);
            if (r.panButton_do) {
                if (r.showButtonsLabels_bl) r.panButtonTooTipLabel_do.hide();
                r.disablePanButton()
            }
            r.dispatchEvent(e.CHANGE_NAVIGATION_STYLE, {
                draggingMode: e.PAN
            })
        };
        r.setupRotateButton = function (t) {
            FWDSimpleButton.setPrototype();
            r.rotateButton_do = new FWDSimpleButton(r.rotateN_img, r.rotateS_img, r.isMobile_bl);
            r.rotateButton_do.addListener(FWDSimpleButton.MOUSE_OVER, r.rotateButtonOnMouseOverHandler);
            r.rotateButton_do.addListener(FWDSimpleButton.MOUSE_OUT, r.rotateButtonOnMouseOutHandler);
            r.rotateButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.rotateButtonOnMouseDownHandler);
            r.mainHolder_do.addChild(r.rotateButton_do);
            if (r.draggingMode_str == e.ROTATE) r.disableRotateButton();
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.rotateButtonToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, t, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.rotateButtonToolTip_do)
            }
        };
        r.rotateButtonOnMouseOverHandler = function (e) {
            if (r.rotateButton_do.isSelectedFinal_bl) return;
            r.showToolTipButton(r.rotateButton_do, r.rotateButtonToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.rotateButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.rotateButtonToolTip_do.hide()
        };
        r.rotateButtonOnMouseDownHandler = function (e) {
            r.rotate()
        };
        r.disableRotateButton = function () {
            r.rotateButton_do.setSelctedFinal();
            if (r.panButton_do) r.panButton_do.setUnselctedFinal()
        };
        this.rotate = function () {
            if (r.slideShowButton_do) r.stopSlideShow();
            clearInterval(r.gotoImageId_int);
            if (r.rotateButton_do) {
                if (r.showButtonsLabels_bl) r.rotateButtonToolTip_do.hide();
                r.disableRotateButton()
            }
            r.dispatchEvent(e.CHANGE_NAVIGATION_STYLE, {
                draggingMode: e.ROTATE
            })
        };
        r.setupNextButton = function (e) {
            FWDSimpleButton.setPrototype();
            r.nextButton_do = new FWDSimpleButton(r.nextN_img, r.nextS_img, r.isMobile_bl);
            r.nextButton_do.addListener(FWDSimpleButton.MOUSE_OVER, r.nextButtonOnMouseOverHandler);
            r.nextButton_do.addListener(FWDSimpleButton.MOUSE_OUT, r.nextButtonOnMouseOutHandler);
            r.nextButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.nextButtonStartHandler);
            r.mainHolder_do.addChild(r.nextButton_do);
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.nextButtonToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.nextButtonToolTip_do)
            }
        };
        r.nextButtonOnMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) r.showToolTipButton(r.nextButton_do, r.nextButtonToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.nextButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.nextButtonToolTip_do.hide()
        };
        r.nextButtonStartHandler = function (t) {
            if (t) {
                var t = t.e;
                if (t.touches) {
                    if (r.scrollBarHandler_do) {
                        r.zoomInWithButtonsEndHandler(t);
                        r.zoomOutWithButtonsEndHandler(t);
                        r.handlerDragEndHandler(t)
                    }
                }
            }
            r.gotoNextImage();
            if (r.slideShowButton_do) r.stopSlideShow();
            clearInterval(r.gotoImageId_int);
            clearTimeout(r.gotoImageId_to);
            r.gotoImageId_to = setTimeout(r.goToNextImageInWithDelay, 400);
            r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerUp", r.gotoImageEndHandler)
                } else {
                    window.addEventListener("touchend", r.gotoImageEndHandler)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mouseup", r.gotoImageEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmouseup", r.gotoImageEndHandler)
                }
            }
        };
        r.goToNextImageInWithDelay = function () {
            r.gotoImageId_int = setInterval(r.gotoNextImage, r.rotationSpeed)
        };
        r.gotoImageEndHandler = function (t) {
            clearInterval(r.gotoImageId_int);
            clearTimeout(r.gotoImageId_to);
            r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.removeEventListener("MSPointerUp", r.gotoImageEndHandler)
                } else {
                    window.removeEventListener("touchend", r.gotoImageEndHandler)
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mouseup", r.gotoImageEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmouseup", r.gotoImageEndHandler)
                }
            }
            r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE)
        };
        r.gotoNextImage = function () {
            var t = 1;
            if (r.inverseNextAndPrevRotation_bl) t = -1;
            r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE, {
                dir: t
            })
        };
        r.setupPrevButton = function (e) {
            FWDSimpleButton.setPrototype();
            r.prevButton_do = new FWDSimpleButton(r.prevN_img, r.prevS_img, r.isMobile_bl);
            r.prevButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.prevButtonOnMouseOverHandler);
            r.prevButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.prevShowButtonOnMouseOutHandler);
            r.prevButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.prevButtonStartHandler);
            r.mainHolder_do.addChild(r.prevButton_do);
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.prevButtonToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.prevButtonToolTip_do)
            }
        };
        r.prevButtonOnMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) r.showToolTipButton(r.prevButton_do, r.prevButtonToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.prevShowButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.prevButtonToolTip_do.hide()
        };
        r.prevButtonStartHandler = function (t) {
            if (t) {
                var t = t.e;
                if (t.touches) {
                    if (r.scrollBarHandler_do) {
                        r.zoomInWithButtonsEndHandler(t);
                        r.zoomOutWithButtonsEndHandler(t);
                        r.handlerDragEndHandler(t)
                    }
                }
            }
            if (r.slideShowButton_do) r.stopSlideShow();
            r.gotoPrevImage();
            clearInterval(r.gotoImageId_int);
            clearTimeout(r.gotoImageId_to);
            r.gotoImageId_to = setTimeout(r.goToPrevImageInWithDelay, 400);
            r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerUp", r.gotoImageEndHandler)
                } else {
                    window.addEventListener("touchend", r.gotoImageEndHandler)
                }
                window.addEventListener("mouseup", r.gotoImageEndHandler)
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mouseup", r.gotoImageEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmouseup", r.gotoImageEndHandler)
                }
            }
        };
        r.goToPrevImageInWithDelay = function () {
            r.gotoImageId_int = setInterval(r.gotoPrevImage, r.rotationSpeed)
        };
        r.gotoPrevImage = function () {
            var t = -1;
            if (r.inverseNextAndPrevRotation_bl) t = 1;
            r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE, {
                dir: t
            })
        };
        r.setupSlideshowButton = function (e, t) {
            FWDComplexButton.setPrototype();
            r.slideShowButton_do = new FWDComplexButton(r.playN_img, r.playS_img, r.pauseN_img, r.pauseS_img, true);
            r.slideShowButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.slideSwhoButtonOnMouseOverHandler);
            r.slideShowButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.slideShowButtonOnMouseOutHandler);
            r.slideShowButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.slideShowButtonStartHandler);
            r.mainHolder_do.addChild(r.slideShowButton_do);
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.slideShowToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, t, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.slideShowToolTip_do)
            }
        };
        r.slideSwhoButtonOnMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) r.showToolTipButton(r.slideShowButton_do, r.slideShowToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.slideShowButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.slideShowToolTip_do.hide()
        };
        r.slideShowButtonStartHandler = function (e) {
            if (r.showButtonsLabels_bl) r.slideShowToolTip_do.hide();
            if (r.slideShowButton_do.currentState == 1) {
                r.startSlideshow();
                r.slideShowButton_do.setButtonState(0);
                if (r.showButtonsLabels_bl) r.slideShowToolTip_do.setLabel(r.slideShowToolTip_do.toolTipLabel2_str)
            } else {
                r.stopSlideShow();
                r.slideShowButton_do.setButtonState(1);
                if (r.showButtonsLabels_bl) r.slideShowToolTip_do.setLabel(r.slideShowToolTip_do.toolTipLabel_str)
            }
        };
        r.startSlideshow = function () {
            if (r.slideShowButton_do) r.slideShowButton_do.setButtonState(0);
            clearInterval(r.slideShowId_int);
            r.slideShowId_int = setInterval(r.slideShowComplete, r.slideShowDelay);
            r.dispatchEvent(e.START_SLIDE_SHOW)
        };
        r.stopSlideShow = function () {
            if (r.slideShowButton_do) r.slideShowButton_do.setButtonState(1);
            clearInterval(r.slideShowId_int);
            r.dispatchEvent(e.STOP_SLIDE_SHOW)
        };
        r.slideShowComplete = function () {
            r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE, {
                dir: 1
            });
            r.dispatchEvent(e.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE)
        };
        r.setupInfoButton = function (e) {
            FWDSimpleButton.setPrototype();
            r.infoButton_do = new FWDSimpleButton(r.infoN_img, r.infoS_img, r.isMobile_bl);
            r.infoButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.infoButtonOnMouseOverHandler);
            r.infoButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.infoButtonOnMouseOutHandler);
            r.infoButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.infoButtonStartHandler);
            r.mainHolder_do.addChild(r.infoButton_do);
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.infoToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.infoToolTip_do)
            }
        };
        r.infoButtonOnMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) r.showToolTipButton(r.infoButton_do, r.infoToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.infoButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.infoToolTip_do.hide()
        };
        r.infoButtonStartHandler = function (t) {
            r.dispatchEvent(e.SHOW_INFO)
        };
        r.setupLinkButton = function (e) {
            FWDSimpleButton.setPrototype();
            r.linkButton_do = new FWDSimpleButton(r.linkN_img, r.linkS_img, r.isMobile_bl);
            r.linkButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.linkButtonOnMouseOverHandler);
            r.linkButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.linkButtonOnMouseOutHandler);
            r.linkButton_do.addListener(FWDComplexButton.CLICK, r.linkButtonOnMouseClickHandler);
            r.mainHolder_do.addChild(r.linkButton_do);
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.linkToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.linkToolTip_do)
            }
        };
        r.linkButtonOnMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) r.showToolTipButton(r.linkButton_do, r.linkToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.linkButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.linkToolTip_do.hide()
        };
        r.linkButtonOnMouseClickHandler = function (e) {
            window.open(r.link_str, "_blank")
        };
        r.setupFullScreenButton = function (e, t) {
            FWDComplexButton.setPrototype();
            r.fullScreenButton_do = new FWDComplexButton(r.fullScreenFullN_img, r.fullScreenFullS_img, r.fullScreenNormalN_img, r.fullScreenNormalS_img, true);
            r.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_OVER, r.fullscreenButtonOnMouseOverHandler);
            r.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_OUT, r.fullscreenButtonOnMouseOutHandler);
            r.fullScreenButton_do.addListener(FWDComplexButton.MOUSE_DOWN, r.fullScreenButtonStartHandler);
            r.mainHolder_do.addChild(r.fullScreenButton_do);
            if (r.showButtonsLabels_bl) {
                FWDButtonToolTip.setPrototype();
                r.fullscreenToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, t, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.fullscreenToolTip_do)
            }
        };
        r.fullscreenButtonOnMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) r.showToolTipButton(r.fullScreenButton_do, r.fullscreenToolTip_do, r.buttonsToolTipOffsetY)
        };
        r.fullscreenButtonOnMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.hide()
        };
        r.fullScreenButtonStartHandler = function (t) {
            if (r.fullScreenButton_do.currentState == 1) {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str);
                r.fullScreenButton_do.setButtonState(0);
                r.dispatchEvent(e.GO_FULL_SCREEN)
            } else if (r.fullScreenButton_do.currentState == 0) {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel_str);
                r.fullScreenButton_do.setButtonState(1);
                r.dispatchEvent(e.GO_NORMAL_SCREEN)
            }
            setTimeout(function () {
                if (r == null) return;
                r.fullScreenButton_do.onMouseOut(t)
            }, 50)
        };
        r.setFullScreenButtonState = function (e) {
            if (e == 0) {
                r.fullScreenButton_do.setButtonState(0);
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str)
            } else if (e == 1) {
                r.fullScreenButton_do.setButtonState(1);
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel_str)
            }
        };
        this.onFullScreenChange = function (t) {
            if (n.hibernate_bl) return;
            if (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen) {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str);
                r.fullScreenButton_do.setButtonState(0);
                r.dispatchEvent(e.GO_FULL_SCREEN)
            } else {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel_str);
                r.fullScreenButton_do.setButtonState(1);
                r.dispatchEvent(e.GO_NORMAL_SCREEN)
            }
        };
        r.setupScrollBar = function () {
            var e;
            FWDSimpleButton.setPrototype();
            r.zoomIn_do = new FWDSimpleButton(r.zoomInN_img, r.zoomInS_img);
            r.zoomIn_do.addListener(FWDSimpleButton.MOUSE_OVER, r.zoomInMouseOverHandler);
            r.zoomIn_do.addListener(FWDSimpleButton.MOUSE_OUT, r.zoomInOrOutMouseOutHandler);
            r.zoomIn_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.zoomInStartHandler);
            r.mainHolder_do.addChild(r.zoomIn_do);
            FWDSimpleButton.setPrototype();
            r.zoomOut_do = new FWDSimpleButton(r.zoomOutN_img, r.zoomOutS_img);
            r.zoomOut_do.addListener(FWDSimpleButton.MOUSE_OVER, r.zoomOutMouseOverHandler);
            r.zoomOut_do.addListener(FWDSimpleButton.MOUSE_OUT, r.zoomInOrOutMouseOutHandler);
            r.zoomOut_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.zoomOutStartHandler);
            r.mainHolder_do.addChild(r.zoomOut_do);
            r.scrollBar_do = new FWDDisplayObject("div");
            r.scrollBar_do.setOverflow("visible");
            r.scrollBar_do.setHeight(r.scrollBarHeight);
            r.mainHolder_do.addChild(r.scrollBar_do);
            r.scrollBarLeft_do = new FWDSimpleDisplayObject("img");
            r.scrollBarLeft_do.setScreen(t.scrollBarLeft_img);
            r.scrollBar_do.addChild(r.scrollBarLeft_do);
            r.scrollBarMiddle_do = new FWDSimpleDisplayObject("div");
            r.scrollBarMiddle_do.setHeight(r.scrollBarHeight);
            r.scrollBarMiddle_do.getStyle().background = "url('" + r.scrollBarMiddlePath_str + "')";
            r.scrollBarMiddle_do.getStyle().backgroundRepeat = "repeat-x";
            r.scrollBar_do.addChild(r.scrollBarMiddle_do);
            r.scrollBarRight_do = new FWDSimpleDisplayObject("img");
            r.scrollBarRight_do.setScreen(r.scrollBarRight_img);
            r.scrollBar_do.addChild(r.scrollBarRight_do);
            FWDSimpleButton.setPrototype();
            r.scrollBarHandler_do = new FWDSimpleButton(r.scrollBarHandlerN_img, r.scrollBarHandlerS_img, r.isMobile_bl);
            r.scrollBarHandler_do.setY(parseInt((r.scrollBarHeight - r.scrollBarHandlerHeight) / 2) - 1);
            r.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_OVER, r.handlerOnMouseOver);
            r.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_OUT, r.handlerOnMouseOut);
            r.scrollBarHandler_do.addListener(FWDSimpleButton.MOUSE_DOWN, r.handlerDragStartHandler);
            r.scrollBar_do.addChild(r.scrollBarHandler_do);
            if (r.showButtonsLabels_bl) {
                e = r.buttonsLabels_ar[r.scrollBarPosition] || "tooltip is not defined!";
                FWDButtonToolTip.setPrototype();
                r.scrollBarHandlerToolTip_do = new FWDButtonToolTip(r.toolTipLeft_img, r.toolTipPointer_img, e, "", r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.controllerPosition_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
                r.mainHolder_do.addChild(r.scrollBarHandlerToolTip_do)
            }
        };
        r.zoomInMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) {
                r.scrollBarHandlerToolTip_do.show();
                if (r.isScrollBarActive_bl) {
                    r.positionAndSetLabelScrollBarHandler()
                } else {
                    if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                        setTimeout(function () {
                            if (r == null) return;
                            var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                            r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                            r.showZoomInOrOutToolTipButton(r.zoomIn_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                        }, 50)
                    }
                }
            }
        };
        r.zoomInOrOutMouseOutHandler = function (e) {
            if (r.showButtonsLabels_bl) r.scrollBarHandlerToolTip_do.hide()
        };
        r.zoomInStartHandler = function (t) {
            if (t) {
                t = t.e;
                if (t.touches) {
                    r.handlerDragEndHandler(t)
                }
            }
            clearInterval(r.zoomWithButtonsId_int);
            clearTimeout(r.zoomWithButtonsId_to);
            r.zoomWithButtonsId_to = setTimeout(r.startZoomInWithDelay, 400);
            r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
            r.zoomInWithButtonsDispatchEvent(true);
            if (r.slideShowButton_do) r.stopSlideShow();
            if (r.zoomIn_do) r.zoomIn_do.isSelectedFinal_bl = true;
            r.isZoomInOrOutPressed_bl = true;
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerUp", r.zoomInWithButtonsEndHandler)
                } else {
                    window.addEventListener("touchend", r.zoomInWithButtonsEndHandler)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mouseup", r.zoomInWithButtonsEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmouseup", r.zoomInWithButtonsEndHandler)
                }
            }
        };
        r.startZoomInWithDelay = function () {
            r.zoomWithButtonsId_int = setInterval(r.zoomInWithButtonsDispatchEvent, 16)
        };
        r.zoomInWithButtonsDispatchEvent = function (t) {
            if (t) {
                r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                    dir: 1,
                    withPause: true
                })
            } else {
                r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                    dir: 1,
                    withPause: false
                })
            } if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                setTimeout(function () {
                    if (r == null) return;
                    var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                    if (r.scrollBarHandlerToolTip_do) r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                    if (r.showZoomInOrOutToolTipButton) r.showZoomInOrOutToolTipButton(r.zoomIn_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                }, 50)
            }
        };
        r.zoomInWithButtonsEndHandler = function (t) {
            var n;
            clearInterval(r.zoomWithButtonsId_int);
            clearTimeout(r.zoomWithButtonsId_to);
            r.isZoomInOrOutPressed_bl = false;
            if (r.zoomIn_do) {
                r.zoomIn_do.isSelectedFinal_bl = false;
                n = FWDUtils.getViewportMouseCoordinates(t);
                if (!FWDUtils.hitTest(r.zoomIn_do.screen, n.screenX, n.screenY)) {
                    r.zoomIn_do.onMouseOut(t)
                }
            }
            r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.removeEventListener("MSPointerUp", r.zoomInWithButtonsEndHandler)
                } else {
                    window.removeEventListener("touchend", r.zoomInWithButtonsEndHandler)
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mouseup", r.zoomInWithButtonsEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmouseup", r.zoomInWithButtonsEndHandler)
                }
            }
        };
        r.zoomOutMouseOverHandler = function (e) {
            if (r.showButtonsLabels_bl) {
                r.scrollBarHandlerToolTip_do.show();
                if (r.isScrollBarActive_bl) {
                    r.positionAndSetLabelScrollBarHandler()
                } else {
                    if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                        setTimeout(function () {
                            if (r == null) return;
                            var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                            r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                            r.showZoomInOrOutToolTipButton(r.zoomOut_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                        }, 50)
                    }
                }
            }
        };
        r.zoomOutStartHandler = function (t) {
            if (t) {
                t = t.e;
                if (t.touches) {
                    r.handlerDragEndHandler(t)
                }
            }
            clearInterval(r.zoomWithButtonsId_int);
            clearTimeout(r.zoomWithButtonsId_to);
            r.zoomWithButtonsId_to = setTimeout(r.startZoomOutWithDelay, 400);
            r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
            r.zoomOutWithButtonsDispatchEvent(true);
            if (r.slideShowButton_do) r.stopSlideShow();
            if (r.zoomOut_do) r.zoomOut_do.isSelectedFinal_bl = true;
            r.isZoomInOrOutPressed_bl = true;
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerUp", r.zoomOutWithButtonsEndHandler)
                } else {
                    window.addEventListener("touchend", r.zoomOutWithButtonsEndHandler)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mouseup", r.zoomOutWithButtonsEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmouseup", r.zoomOutWithButtonsEndHandler)
                }
            }
        };
        r.startZoomOutWithDelay = function () {
            r.zoomWithButtonsId_int = setInterval(r.zoomOutWithButtonsDispatchEvent, 16)
        };
        r.zoomOutWithButtonsDispatchEvent = function (t) {
            if (!r.isScrollBarActive_bl && r.showButtonsLabels_bl) {
                setTimeout(function () {
                    if (r == null) return;
                    var e = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
                    if (r.scrollBarHandlerToolTip_do) r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(e * 100) + "%");
                    if (r.showZoomInOrOutToolTipButton) r.showZoomInOrOutToolTipButton(r.zoomOut_do, r.scrollBarHandlerToolTip_do, r.zoomInAndOutToolTipOffsetY)
                }, 50)
            }
            if (t) {
                r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                    dir: -1,
                    withPause: true
                })
            } else {
                r.dispatchEvent(e.ZOOM_WITH_BUTTONS, {
                    dir: -1,
                    withPause: false
                })
            }
        };
        r.zoomOutWithButtonsEndHandler = function (t) {
            var n;
            clearInterval(r.zoomWithButtonsId_int);
            clearTimeout(r.zoomWithButtonsId_to);
            r.isZoomInOrOutPressed_bl = false;
            if (r.zoomOut_do) {
                r.zoomOut_do.isSelectedFinal_bl = false;
                n = FWDUtils.getViewportMouseCoordinates(t);
                if (!FWDUtils.hitTest(r.zoomOut_do.screen, n.screenX, n.screenY)) {
                    r.zoomOut_do.onMouseOut(t)
                }
            }
            r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.removeEventListener("MSPointerUp", r.zoomOutWithButtonsEndHandler)
                } else {
                    window.removeEventListener("touchend", r.zoomOutWithButtonsEndHandler)
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mouseup", r.zoomOutWithButtonsEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmouseup", r.zoomOutWithButtonsEndHandler)
                }
            }
        };
        r.handlerOnMouseOver = function (e) {
            if (r.showButtonsLabels_bl) {
                r.positionAndSetLabelScrollBarHandler();
                r.scrollBarHandlerToolTip_do.show()
            }
        };
        r.handlerOnMouseOut = function (e) {
            if (r.showButtonsLabels_bl) r.scrollBarHandlerToolTip_do.hide()
        };
        r.handlerDragStartHandler = function (t) {
            t = t.e;
            if (r.isMobile_bl) {
                r.handlerDragEndHandler(t);
                if (r.prevButton_do || r.prevButton_do) r.gotoImageEndHandler(t)
            }
            if (r.slideShowButton_do) r.stopSlideShow();
            var n = FWDUtils.getViewportMouseCoordinates(t);
            r.lastPresedX = n.screenX;
            r.scrollBarHandlerXPositionOnPress = r.scrollBarHandler_do.getX();
            r.scrollBarHandler_do.isSelectedFinal_bl = true;
            r.dispatchEvent(e.DISABLE_PAN_OR_MOVE);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerMove", r.handlerDragMoveHandler);
                    window.addEventListener("MSPointerUp", r.handlerDragEndHandler)
                } else {
                    window.addEventListener("touchmove", r.handlerDragMoveHandler);
                    window.addEventListener("touchend", r.handlerDragEndHandler)
                }
            } else {
                r.scrollBarHandler_do.isSelectedFinal_bl = true;
                if (window.addEventListener) {
                    window.addEventListener("mousemove", r.handlerDragMoveHandler);
                    window.addEventListener("mouseup", r.handlerDragEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", r.handlerDragMoveHandler);
                    document.attachEvent("onmouseup", r.handlerDragEndHandler)
                }
            }
        };
        r.handlerDragMoveHandler = function (t) {
            if (t.preventDefault) t.preventDefault();
            var n = FWDUtils.getViewportMouseCoordinates(t);
            r.finalHandlerX = Math.round(r.scrollBarHandlerXPositionOnPress + n.screenX - r.lastPresedX);
            if (r.finalHandlerX <= 0) {
                r.finalHandlerX = 0
            } else if (r.finalHandlerX >= r.scrollBarTotalWidth - r.scrollBarHandlerWidth) {
                r.finalHandlerX = r.scrollBarTotalWidth - r.scrollBarHandlerWidth
            }
            var i = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
            r.dispatchEvent(e.SCROLL_BAR_UPDATE, {
                percent: i
            });
            r.scrollBarHandler_do.setX(r.finalHandlerX);
            r.positionAndSetLabelScrollBarHandler()
        };
        r.handlerDragEndHandler = function (t) {
            var n;
            r.dispatchEvent(e.ENABLE_PAN_OR_MOVE);
            n = FWDUtils.getViewportMouseCoordinates(t);
            if (!FWDUtils.hitTest(r.scrollBarHandler_do.screen, n.screenX, n.screenY)) {
                r.scrollBarHandler_do.onMouseOut(t);
                if (r.showButtonsLabels_bl) r.scrollBarHandlerToolTip_do.hide();
                r.scrollBarHandler_do.setUnselctedFinal()
            }
            r.scrollBarHandler_do.isSelectedFinal_bl = false;
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.removeEventListener("MSPointerMove", r.handlerDragMoveHandler);
                    window.removeEventListener("MSPointerUp", r.handlerDragEndHandler)
                } else {
                    window.removeEventListener("touchmove", r.handlerDragMoveHandler);
                    window.removeEventListener("touchend", r.handlerDragEndHandler)
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mousemove", r.handlerDragMoveHandler);
                    window.removeEventListener("mouseup", r.handlerDragEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", r.handlerDragMoveHandler);
                    document.detachEvent("onmouseup", r.handlerDragEndHandler)
                }
            }
        };
        r.updateScrollBar = function (e, t) {
            if (!r.scrollBarHandler_do) return;
            r.finalHandlerX = Math.round(e * (r.scrollBarTotalWidth - r.scrollBarHandlerWidth));
            if (!r.isScrollBarActive_bl) return;
            if (r.finalHandlerX <= 0) {
                r.finalHandlerX = 0
            } else if (r.finalHandlerX >= r.scrollBarTotalWidth - r.scrollBarHandlerWidth) {
                r.finalHandlerX = r.scrollBarTotalWidth - r.scrollBarHandlerWidth
            }
            if (t) {
                TweenMax.to(r.scrollBarHandler_do, .2, {
                    x: r.finalHandlerX,
                    onUpdate: r.positionAndSetLabelScrollBarHandler,
                    onComplete: r.positionAndSetLabelScrollBarHandler
                })
            } else {
                TweenMax.killTweensOf(r.scrollBarHandler_do);
                r.scrollBarHandler_do.setX(r.finalHandlerX)
            }
        };
        r.positionAndSetLabelScrollBarHandler = function () {
            if (!r.showButtonsLabels_bl || !r.isScrollBarActive_bl) return;
            var t = 0;
            var n = 0;
            var i = r.finalHandlerX / (r.scrollBarTotalWidth - r.scrollBarHandlerWidth);
            var s = r.getGlobalX();
            r.scrollBarHandlerToolTip_do.setLabel(r.scrollBarHandlerToolTip_do.toolTipLabel_str + Math.round(i * 100) + "%");
            setTimeout(function () {
                if (r == null || !r.scrollBarHandlerToolTip_do.isShowed_bl) return;
                t = parseInt(r.scrollBarHandler_do.getX() + r.scrollBar_do.getX() + (r.scrollBarHandlerWidth - r.scrollBarHandlerToolTip_do.totalWidth) / 2);
                if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                    n = -r.scrollBarHandlerToolTip_do.totalHeight - r.scrollBarHandlerToolTipOffsetY
                } else {
                    n = r.curHeight + r.scrollBarHandlerToolTipOffsetY
                } if (s + t < 0) t = 0;
                r.scrollBarHandlerToolTip_do.setX(t);
                r.scrollBarHandlerToolTip_do.setY(n)
            }, 51)
        };
        r.hide = function (t) {
            if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                if (t) {
                    TweenMax.to(r.mainHolder_do, 1, {
                        y: r.curHeight + r.controllerOffsetY,
                        ease: Expo.easeInOut
                    })
                } else {
                    r.mainHolder_do.setY(r.curHeight + r.controllerOffsetY)
                }
            } else if (r.controllerPosition_str == e.POSITION_TOP) {
                if (t) {
                    TweenMax.to(r.mainHolder_do, 1, {
                        y: -r.curHeight - r.controllerOffsetY,
                        ease: Expo.easeInOut
                    })
                } else {
                    r.mainHolder_do.setY(-r.curHeight - r.controllerOffsetY)
                }
            }
        };
        r.show = function () {
            TweenMax.to(r.mainHolder_do, 1, {
                y: 0,
                ease: Expo.easeInOut
            })
        };
        r.showToolTipButton = function (t, n, i) {
            if (r.showButtonsLabels_bl) {
                var s;
                var o;
                var u = r.mainHolder_do.getX();
                var a = 0;
                if (r.showButtonsLabels_bl) n.show();
                setTimeout(function () {
                    if (r == null || !n.isShowed_bl) return;
                    s = parseInt(t.getX() + (r.buttonWidth - n.totalWidth) / 2);
                    if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                        o = -n.totalHeight - i
                    } else {
                        o = r.curHeight + i
                    } if (u + s < 0) {
                        a = u + s;
                        s = s + Math.abs(u + s)
                    } else if (u + r.curWidth - s - n.totalWidth < 0) {
                        a = -(u + r.curWidth - s - n.totalWidth);
                        s = s + u + r.curWidth - s - n.totalWidth
                    }
                    n.setX(s);
                    n.setY(o);
                    n.positionPointer(a)
                }, 51)
            }
        };
        r.showZoomInOrOutToolTipButton = function (t, n, i) {
            if (r.showButtonsLabels_bl && n) {
                var s;
                var o;
                var u = r.mainHolder_do.getX();
                var a = 0;
                setTimeout(function () {
                    if (r == null || !n.isShowed_bl) return;
                    s = parseInt(t.getX() + (r.zoomButtonHeight - n.totalWidth) / 2);
                    if (r.controllerPosition_str == e.POSITION_BOTTOM) {
                        o = -n.totalHeight - i
                    } else {
                        o = r.curHeight + i
                    } if (u + s < 0) {
                        a = u + s;
                        s = s + Math.abs(u + s)
                    } else if (u + r.curWidth - s - n.totalWidth < 0) {
                        a = -(u + r.curWidth - s - n.totalWidth);
                        s = s + u + r.curWidth - s - n.totalWidth
                    }
                    n.setX(s);
                    n.setY(o);
                    n.positionPointer(a)
                }, 51)
            }
        };
        r.cleanMainEvents = function () {
            clearInterval(r.gotoImageId_int);
            clearInterval(r.zoomWithButtonsId_int);
            clearInterval(r.slideShowId_int);
            clearTimeout(r.gotoImageId_to);
            clearTimeout(r.zoomWithButtonsId_to);
            if (r.hider) {
                r.hider.removeListener(FWDHider.SHOW, r.onHiderShow);
                r.hider.removeListener(FWDHider.HIDE, r.onHiderHide)
            }
            r.screen.onmousedown = null;
            if (r.isMobile_bl) {
                window.removeEventListener("touchend", r.gotoImageEndHandler);
                window.removeEventListener("MSPointerUp", r.gotoImageEndHandler);
                window.removeEventListener("touchend", r.zoomInWithButtonsEndHandler);
                window.removeEventListener("MSPointerUp", r.zoomInWithButtonsEndHandler);
                window.removeEventListener("touchend", r.zoomOutWithButtonsEndHandler);
                window.removeEventListener("MSPointerUp", r.zoomOutWithButtonsEndHandler);
                window.removeEventListener("touchmove", r.handlerDragMoveHandler);
                window.removeEventListener("touchend", r.handlerDragEndHandler);
                window.removeEventListener("MSPointerMove", r.handlerDragMoveHandler);
                window.removeEventListener("MSPointerUp", r.handlerDragEndHandler)
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mouseup", r.gotoImageEndHandler);
                    window.removeEventListener("mouseup", r.zoomInWithButtonsEndHandler);
                    window.removeEventListener("mouseup", r.zoomOutWithButtonsEndHandler);
                    window.removeEventListener("mousemove", r.handlerDragMoveHandler);
                    window.removeEventListener("mouseup", r.handlerDragEndHandler);
                    window.removeEventListener("keydown", r.onKeyDownHandler);
                    window.removeEventListener("keyup", r.onKeyUpHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmouseup", r.gotoImageEndHandler);
                    document.detachEvent("onmouseup", r.zoomInWithButtonsEndHandler);
                    document.detachEvent("onmouseup", r.zoomOutWithButtonsEndHandler);
                    document.detachEvent("onmousemove", r.handlerDragMoveHandler);
                    document.detachEvent("onmouseup", r.handlerDragEndHandler);
                    document.detachEvent("onkeydown", r.onKeyDownHandler);
                    document.detachEvent("onkeyup", r.onKeyUpHandler)
                }
            }
        };
        this.destroy = function () {
            r.cleanMainEvents();
            TweenMax.killTweensOf(r.mainHolder_do);
            r.mainHolder_do.destroy();
            r.backgroundLeft_sdo.destroy();
            r.backgroundMiddle_sdo.destroy();
            r.backgroundRight_sdo.destroy();
            if (r.panButton_do) r.panButton_do.destroy();
            if (r.rotateButton_do) r.rotateButton_do.destroy();
            if (r.nextButton_do) r.nextButton_do.destroy();
            if (r.prevButton_do) r.prevButton_do.destroy();
            if (r.slideShowButton_do) r.slideShowButton_do.destroy();
            if (r.infoButton_do) r.infoButton_do.destroy();
            if (r.linkButton_do) r.linkButton_do.destroy();
            if (r.fullScreenButton_do) r.fullScreenButton_do.destroy();
            if (r.zoomIn_do) r.zoomIn_do.destroy();
            if (r.zoomOut_do) r.zoomOut_do.destroy();
            if (r.scrollBar_do) r.scrollBar_do.destroy();
            if (r.scrollBarLeft_sdo) r.scrollBarLeft_sdo.destroy();
            if (r.scrollBarRight_sdo) r.scrollBarRight_sdo.destroy();
            if (r.scrollBarMiddle_sdo) r.scrollBarMiddle_sdo.destroy();
            if (r.scrollBarHandler_do) {
                TweenMax.killTweensOf(r.mainHolder_do);
                r.scrollBarHandler_do.destroy()
            }
            if (r.scrollBarHandlerN_sdo) r.scrollBarHandlerN_sdo.destroy();
            if (r.scrollBarHandlerS_sdo) r.scrollBarHandlerS_sdo.destroy();
            if (r.panButtonTooTipLabel_do) r.panButtonTooTipLabel_do.destroy();
            if (r.scrollBarHandlerToolTip_do) r.scrollBarHandlerToolTip_do.destroy();
            if (r.rotateButtonToolTip_do) r.rotateButtonToolTip_do.destroy();
            if (r.nextButtonToolTip_do) r.nextButtonToolTip_do.destroy();
            if (r.prevButtonToolTip_do) r.prevButtonToolTip_do.destroy();
            if (r.slideShowToolTip_do) r.slideShowToolTip_do.destroy();
            if (r.infoToolTip_do) r.infoToolTip_do.destroy();
            if (r.linkToolTip_do) r.linkToolTip_do.destroy();
            if (r.fullscreenToolTip_do) r.fullscreenToolTip_do.destroy();
            r.buttonsTest_ar = null;
            r.buttons_ar = null;
            r.hider = null;
            r.mainHolder_do = null;
            r.backgroundLeft_sdo = null;
            r.backgroundMiddle_sdo = null;
            r.backgroundRight_sdo = null;
            r.panButton_do = null;
            r.rotateButton_do = null;
            r.nextButton_do = null;
            r.prevButton_do = null;
            r.slideShowButton_do = null;
            r.infoButton_do = null;
            r.linkButton_do = null;
            r.fullScreenButton_do = null;
            r.zoomIn_do = null;
            r.zoomOut_do = null;
            r.scrollBar_do = null;
            r.scrollBarLeft_sdo = null;
            r.scrollBarRight_sdo = null;
            r.scrollBarMiddle_sdo = null;
            r.scrollBarHandler_do = null;
            r.scrollBarHandlerN_sdo = null;
            r.scrollBarHandlerS_sdo = null;
            r.panButtonTooTipLabel_do = null;
            r.scrollBarHandlerToolTip_do = null;
            r.rotateButtonToolTip_do = null;
            r.nextButtonToolTip_do = null;
            r.prevButtonToolTip_do = null;
            r.slideShowToolTip_do = null;
            r.infoToolTip_do = null;
            r.linkToolTip_do = null;
            r.fullscreenToolTip_do = null;
            r.backgroundLeft_img = null;
            r.backgroundRight_img = null;
            r.panN_img = null;
            r.panS_img = null;
            r.rotateN_img = null;
            r.rotateS_img = null;
            r.nextN_img = null;
            r.nextS_img = null;
            r.prevN_img = null;
            r.prevS_img = null;
            r.playN_img = null;
            r.playS_img = null;
            r.pauseN_img = null;
            r.pauseS_img = null;
            r.infoN_img = null;
            r.infoS_img = null;
            r.linkN_img = null;
            r.linkS_img = null;
            r.fullScreenNormalN_img = null;
            r.fullScreenNormalS_img = null;
            r.fullScreenFullN_img = null;
            r.fullScreenFullS_img = null;
            r.zoomInN_img = null;
            r.zoomInS_img = null;
            r.zoomOutN_img = null;
            r.zoomOutS_img = null;
            r.scrollBarHandlerN_img = null;
            r.scrollBarHandlerS_img = null;
            r.scrollBarLeft_img = null;
            r.scrollBarRight_img = null;
            r.toolTipLeft_img = null;
            r.toolTipPointer_img = null;
            r.backgroundMiddlePath_str = null;
            r.scrollBarMiddlePath_str = null;
            r.draggingMode_str = null;
            r.controllerPosition_str = null;
            r.buttonToolTipLeft_str = null;
            r.buttonToolTipMiddle_str = null;
            r.buttonToolTipRight_str = null;
            r.link_str = null;
            t = null;
            n = null;
            r.setInnerHTML("");
            i.destroy();
            r = null;
            i = null;
            e.prototype = null
        };
        this.init()
    };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.SHOW_INFO = "showInfo";
    e.POSITION_TOP = "top";
    e.POSITION_BOTTOM = "bottom";
    e.CHANGE_NAVIGATION_STYLE = "changeNavigationStyle";
    e.GOTO_NEXT_IMAGE = "gotoNextImage";
    e.GOTO_PREV_IMAGE = "gotoPrevImage";
    e.GOTO_NEXT_OR_PREV_IMAGE = "gotoNextOrPrevImage";
    e.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE = "gotoNextOrPrevImageComplete";
    e.DISABLE_PAN_OR_MOVE = "disablePanOrMove";
    e.ENABLE_PAN_OR_MOVE = "enablePanOrMove";
    e.SCROLL_BAR_UPDATE = "scrollBarUpdate";
    e.ZOOM_WITH_BUTTONS = "zoomWithButtons";
    e.ZOOM_IN = "zoomIn";
    e.ZOOM_OUT = "zoomOut";
    e.PAN = "pan";
    e.ROTATE = "rotate";
    e.START_SLIDE_SHOW = "startSlideShow";
    e.STOP_SLIDE_SHOW = "stopSlideShow";
    e.GO_FULL_SCREEN = "goFullScreen";
    e.GO_NORMAL_SCREEN = "goNormalScreen";
    e.MOUSE_DOWN = "controllerOnMouseDown";
    e.prototype = null;
    window.FWDController = e
})();
(function (e) {
    var t = function (e) {
        var n = this;
        var r = t.prototype;
        this.navigatorImage_img;
        this.mainPreloader_img = null;
        this.mainLightboxCloseButtonN_img = null;
        this.mainLightboxCloseButtonS_img = null;
        this.controllerBackgroundLeft_img = null;
        this.controllerBackgroundRight_img = null;
        this.controllerPanN_img = null;
        this.controllerPanS_img = null;
        this.controllerRotateN_img = null;
        this.controllerRotateS_img = null;
        this.controllerNextN_img = null;
        this.controllerNextS_img = null;
        this.controllerPrevN_img = null;
        this.controllerPrevS_img = null;
        this.controllerPlayN_img = null;
        this.controllerPlayS_img = null;
        this.controllerPauseN_img = null;
        this.controllerPauseS_img = null;
        this.controllerInfoN_img = null;
        this.controllerInfoS_img = null;
        this.controllerLinkN_img = null;
        this.controllerLinkS_img = null;
        this.controllerFullScreenNormalN_img = null;
        this.controllerFullScreenNormalS_img = null;
        this.controllerFullScreenFullN_img = null;
        this.controllerFullScreenFullS_img = null;
        this.zoomInN_img = null;
        this.zoomInS_img = null;
        this.zoomOutN_img = null;
        this.zoomOutS_img = null;
        this.scrollBarHandlerN_img = null;
        this.scrollBarHandlerS_img = null;
        this.scrollBarLeft_img = null;
        this.scrollBarRight_img = null;
        this.toolTipLeft_img = null;
        this.toolTipPointer_img = null;
        this.infoWindowCloseNormal_img = null;
        this.infoWindowCloseSelected_img = null;
        this.props_obj = e;
        this.rootElement_el = null;
        this.skinPaths_ar = [];
        this.playListData_ar = [];
        this.imagesPaths_ar = [];
        this.largeImagesPaths_ar = [];
        this.navigatorImagesPaths_ar = [];
        this.images_ar = [];
        this.navigatorImages_ar = [];
        this.markersList_ar = [];
        this.markersPosition_ar = [];
        this.buttons_ar = null;
        this.buttonsLabels_ar = null;
        this.contextMenuLabels_ar = null;
        this.backgroundColor_str = null;
        this.handMovePath_str = null;
        this.handGrabRotatePath_str = null;
        this.handGrabPath_str = null;
        this.handGrabRotatePath_str = null;
        this.controllerBackgroundMiddlePath_str = null;
        this.scrollBarMiddlePath_str = null;
        this.startDraggingMode_str = null;
        this.controllerPosition_str = null;
        this.preloaderFontColor_str = null;
        this.preloaderBackgroundColor_str = null;
        this.preloaderText_str = null;
        this.buttonToolTipLeft_str = null;
        this.buttonToolTipMiddle_str = null;
        this.buttonToolTipRight_str = null;
        this.buttonToolTipBottomPointer_str = null;
        this.buttonToolTipTopPointer_str = null;
        this.buttonToolTipFontColor_str = null;
        this.link_str = null;
        this.contextMenuBackgroundColor_str = null;
        this.contextMenuBorderColor_str = null;
        this.contextMenuSpacerColor_str = null;
        this.contextMenuItemNormalColor_str = null;
        this.contextMenuItemSelectedColor_str = null;
        this.contextMenuItemSelectedColor_str = null;
        this.contextMenuItemDisabledColor_str = null;
        this.navigatorPosition_str = null;
        this.navigatorHandlerColor_str = null;
        this.navigatorBorderColor_str = null;
        this.infoText_str = null;
        this.infoWindowBackgroundColor_str = null;
        this.infoWindowScrollBarColor_str = null;
        this.dragAndSpinSpeed;
        this.dragRotationSpeed;
        this.buttonsRotationSpeed;
        this.controllerHeight;
        this.startAtImage;
        this.imageWidth;
        this.imageHeight;
        this.spaceBetweenButtons;
        this.startSpaceBetweenButtons;
        this.scrollBarOffsetX;
        this.zoomFactor;
        this.controllerOffsetY;
        this.hideControllerDelay;
        this.controllerBackgroundOpacity;
        this.controllerMaxWidth;
        this.countLoadedSkinImages = 0;
        this.countLoadedImages = 0;
        this.scrollBarHandlerToolTipOffsetY;
        this.zoomInAndOutToolTipOffsetY;
        this.buttonsToolTipOffsetY;
        this.scrollBarPosition;
        this.startSpaceForScrollBarButtons;
        this.totalGraphics;
        this.slideShowDelay;
        this.totalImages;
        this.navigatorWidth;
        this.navigatorHeight;
        this.navigatorOffsetX;
        this.navigatorOffsetY;
        this.infoWindowBackgroundOpacity;
        this.markerToolTipOffsetY;
        this.toolTipWindowMaxWidth;
        this.lightBoxBackgroundOpacity;
        this.parseDelayId_to;
        this.loadImageId_to;
        this.showContextMenu_bl;
        this.showLargeImageVersionOnZoom_bl;
        this.showNavigator_bl;
        this.addCorrectionForWebKit_bl;
        this.inverseNextAndPrevRotation_bl;
        this.useEntireScreenFor3dObject_bl;
        this.hideController_bl;
        this.showScriptDeveloper_bl;
        this.showMarkers_bl;
        this.hasNavigatorError_bl = false;
        this.showMarkersInfo_bl = false;
        this.addKeyboardSupport_bl = false;
        this.addDragAndSpinSupport_bl = false;
        this.stopRotationAtEnds_bl = false;
        this.slideShowAutoPlay_bl = false;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.areAllImagesLoaded_bl = false;
        n.init = function () {
            n.parseDelayId_to = setTimeout(n.parseProperties, 100)
        };
        n.parseProperties = function () {
            var e;
            var r;
            var i;
            var s;
            var o;
            var u;
            var a;
            var f;
            var l;
            var c;
            var h;
            var p;
            var d;
            var v;
            var m;
            var g;
            var y;
            if (!n.props_obj.playListAndSkinId) {
                a = "<font color='#FFFFFF'>playListAndSkinId</font> property which represents the grid playlist id is not defined in FWDGrid constructor function!";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: a
                });
                return
            }
            n.rootElement_el = FWDUtils.getChildById(n.props_obj.playListAndSkinId);
            if (!n.rootElement_el) {
                a = "Make sure that the a div with the id - <font color='#FFFFFF'>" + n.props_obj.playListAndSkinId + "</font> exists, self represents the data playlist.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: a
                });
                return
            }
            n.rootElement_el.style.display = "none";
            e = FWDUtils.getChildFromNodeListFromAttribute(n.rootElement_el, "data-skin");
            r = FWDUtils.getChildFromNodeListFromAttribute(n.rootElement_el, "data-markers");
            i = FWDUtils.getChildFromNodeListFromAttribute(n.rootElement_el, "data-paylist");
            if (!e) {
                a = "Make sure that the an ul tag with the data type attribute - <font color='#FFFFFF'>data-skin</font> is defined, this tag is used for creating the playlist.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: a
                });
                return
            }
            if (!i) {
                a = "Make sure that the an ul tag with the data type attribute - <font color='#FFFFFF'>data-paylist</font> is defined, this tag is used for creating the playlist.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: a
                });
                return
            }
            if (r) n.showMarkers_bl = true;
            if (n.showMarkers_bl) {
                u = FWDUtils.getChildren(r);
                for (var b = 0; b < u.length; b++) {
                    c = {};
                    p = u[b];
                    d = false;
                    v = "";
                    g = FWDUtils.hasAttribute(p, "data-marker-type", b);
                    if (!g) {
                        n.showMarkerError("data-marker-type", b);
                        return
                    }
                    g = FWDUtils.hasAttribute(p, "data-marker-id", b);
                    if (!g) {
                        n.showMarkerError("data-marker-id", b);
                        return
                    }
                    g = FWDUtils.hasAttribute(p, "data-marker-normal-state-path", b);
                    if (!g) {
                        n.showMarkerError("data-marker-normal-state-path", b);
                        return
                    }
                    g = FWDUtils.hasAttribute(p, "data-marker-selected-state-path", b);
                    if (!g) {
                        n.showMarkerError("data-marker-selected-state-path", b);
                        return
                    }
                    g = FWDUtils.hasAttribute(p, "data-marker-width", b);
                    if (!g) {
                        n.showMarkerError("data-marker-width", b);
                        return
                    }
                    g = FWDUtils.hasAttribute(p, "data-marker-height", b);
                    if (!g) {
                        n.showMarkerError("data-marker-height", b);
                        return
                    }
                    c.type = FWDUtils.getAttributeValue(p, "data-marker-type");
                    l = c.type == "link" || c.type == "tooltip" || c.type == "infowindow";
                    if (!l) {
                        n.showMarkerTypeError(c.type, b);
                        return
                    }
                    c.markerId = FWDUtils.trim(FWDUtils.getAttributeValue(p, "data-marker-id"));
                    c.normalStatePath_str = FWDUtils.trim(FWDUtils.getAttributeValue(p, "data-marker-normal-state-path"));
                    c.selectedStatePath_str = FWDUtils.trim(FWDUtils.getAttributeValue(p, "data-marker-selected-state-path"));
                    c.toolTipLabel = FWDUtils.getAttributeValue(p, "data-tool-tip-label") || undefined;
                    c.markerWidth = parseInt(FWDUtils.getAttributeValue(p, "data-marker-width"));
                    if (isNaN(c.markerWidth)) c.markerWidth = 5;
                    c.markerHeight = parseInt(FWDUtils.getAttributeValue(p, "data-marker-height"));
                    if (isNaN(c.markerHeight)) c.markerHeight = 5;
                    if (c.type == "link") {
                        c.link = FWDUtils.getAttributeValue(p, "data-marker-url") || "http://www.link-is-not-defined.com";
                        c.target = FWDUtils.getAttributeValue(p, "data-marker-target") || "_blank"
                    } else {
                        c.innerHTML = p.innerHTML
                    }
                    l = FWDUtils.getAttributeValue(p, "data-reg-point");
                    l = l === "center" || l === "centertop" || l === "centerbottom";
                    if (!l) {
                        l = "center"
                    } else {
                        l = FWDUtils.trim(FWDUtils.getAttributeValue(p, "data-reg-point")).toLowerCase()
                    }
                    c.regPoint = l;
                    c.maxWidth = parseInt(FWDUtils.getAttributeValue(p, "data-marker-window-width"));
                    if (isNaN(c.maxWidth)) c.maxWidth = 200;
                    n.markersList_ar.push(c)
                }
            }
            if (!FWDUtils.getChildAt(i, 0)) {
                a = "The playlist dose not have any chidren <ul> element.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: a
                });
                return
            }
            n.showLargeImageVersionOnZoom_bl = n.props_obj.showLargeImageVersionOnZoom;
            n.showLargeImageVersionOnZoom_bl = n.showLargeImageVersionOnZoom_bl == "yes" ? true : false;
            n.showNavigator_bl = n.props_obj.showNavigator;
            n.showNavigator_bl = n.showNavigator_bl == "yes" ? true : false;
            n.showMarkersInfo_bl = n.props_obj.showMarkersInfo == "yes" ? true : false;
            n.addKeyboardSupport_bl = n.props_obj.addKeyboardSupport == "no" ? false : true;
            n.stopRotationAtEnds_bl = n.props_obj.stopRotationAtEnds == "yes" ? true : false;
            n.addDragAndSpinSupport_bl = n.props_obj.addDragAndSpinSupport == "yes" ? true : false;
            if (n.stopRotationAtEnds_bl) n.addDragAndSpinSupport_bl = false;
            n.slideShowAutoPlay_bl = n.props_obj.slideShowAutoPlay == "yes" ? true : false;
            if (n.isMobile_bl) n.showMarkersInfo_bl = false;
            var o = FWDUtils.getChildren(i);
            n.totalImages = o.length;
            var w = undefined;
            for (var b = 0; b < o.length; b++) {
                c = {};
                p = o[b];
                s = FWDUtils.getChildren(p);
                d;
                v = "";
                m = b;
                g = n.checkForAttribute(p, "data-small-image-path", b);
                if (!g) return;
                if (n.showLargeImageVersionOnZoom_bl) {
                    g = n.checkForAttribute(p, "data-large-image-path", b);
                    if (!g) return
                }
                if (n.showNavigator_bl) {
                    g = n.checkForAttribute(p, "data-navigator-image-path", b);
                    if (!g) return
                }
                y = false;
                w = undefined;
                h = undefined;
                for (var E = 0; E < s.length; E++) {
                    if (FWDUtils.hasAttribute(s[E], "data-small-image-path")) {
                        c.smallImagePath = FWDUtils.trim(FWDUtils.getAttributeValue(s[E], "data-small-image-path"))
                    }
                    if (FWDUtils.hasAttribute(s[E], "data-large-image-path")) {
                        c.largeImagePath = FWDUtils.trim(FWDUtils.getAttributeValue(s[E], "data-large-image-path"))
                    }
                    if (n.showNavigator_bl) {
                        if (FWDUtils.hasAttribute(s[E], "data-navigator-image-path")) {
                            c.navigatorImagePath = FWDUtils.trim(FWDUtils.getAttributeValue(s[E], "data-navigator-image-path"))
                        }
                    }
                    if (FWDUtils.getAttributeValue(s[E], "data-marker-id")) {
                        y = true;
                        if (!w) w = [];
                        h = {};
                        h.markerId = FWDUtils.trim(FWDUtils.getAttributeValue(s[E], "data-marker-id"));
                        h.x = FWDUtils.getAttributeValue(s[E], "data-marker-x") || 0;
                        h.y = FWDUtils.getAttributeValue(s[E], "data-marker-y") || 0;
                        w.push(h)
                    }
                    if (E == s.length - 1) {
                        if (y) {
                            n.markersPosition_ar.push(w)
                        } else {
                            n.markersPosition_ar.push(undefined)
                        }
                        w = undefined;
                        h = undefined
                    }
                }
                n.playListData_ar[b] = c
            }
            l = n.props_obj.startAtImage || 0;
            if (isNaN(l)) l = 0;
            l = l - 1;
            if (l < 0) {
                l = 0
            } else if (l > n.totalImages - 1) {
                l = n.totalImages - 1
            }
            n.startAtImage = l;
            n.backgroundColor_str = n.props_obj.backgroundColor || "transparent";
            n.preloaderFontColor_str = n.props_obj.preloaderFontColor || "#000000";
            n.preloaderBackgroundColor_str = n.props_obj.preloaderBackgroundColor || "transparent";
            n.preloaderText_str = n.props_obj.preloaderText || "Loading:";
            n.startDraggingMode_str = n.props_obj.startDraggingMode || "rotate";
            if (n.startDraggingMode_str != "rotate" && n.startDraggingMode_str != "pan") n.startDraggingMode_str = "rotate";
            n.controllerPosition_str = n.props_obj.controllerPosition || "bottom";
            if (n.controllerPosition_str != "top" && n.controllerPosition_str != "bottom") n.startDraggingMode_str = "top";
            if (!n.props_obj.buttons) {
                a = "The <font color='#FFFFFF'>buttons</font> is not defined in the contructor, this is necessary to setup the main buttons.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: a
                });
                console.log(a);
                return
            }
            n.buttons_ar = FWDUtils.splitAndTrim(n.props_obj.buttons, true);
            if (n.isMobile_bl && !n.hasPointerEvent_bl) {
                n.buttonsLabels_ar = null;
                n.contextMenuLabels_ar = null
            } else {
                if (n.props_obj.buttonsToolTips) n.buttonsLabels_ar = FWDUtils.splitAndTrim(n.props_obj.buttonsToolTips, false);
                if (n.props_obj.contextMenuLabels) n.contextMenuLabels_ar = FWDUtils.splitAndTrim(n.props_obj.contextMenuLabels, false)
            }
            n.showScriptDeveloper_bl = n.props_obj.showScriptDeveloper;
            n.showScriptDeveloper_bl = n.showScriptDeveloper_bl == "no" ? false : true;
            n.dragRotationSpeed = n.props_obj.dragRotationSpeed || .5;
            if (isNaN(n.dragRotationSpeed)) n.dragRotationSpeed = .5;
            if (n.dragRotationSpeed < 0) {
                n.dragRotationSpeed = 0
            } else if (n.dragRotationSpeed > 1) {
                n.dragRotationSpeed = 1
            }
            n.dragAndSpinSpeed = n.props_obj.dragAndSpinSpeed || .4;
            if (isNaN(n.dragAndSpinSpeed)) n.dragAndSpinSpeed = .4;
            if (n.dragRotationSpeed < .1) {
                n.dragRotationSpeed = .1
            } else if (n.dragRotationSpeed > 1) {
                n.dragRotationSpeed = 1
            }
            n.buttonsRotationSpeed = n.props_obj.buttonsRotationSpeed || 500;
            if (isNaN(n.buttonsRotationSpeed)) n.buttonsRotationSpeed = 500;
            if (n.buttonsRotationSpeed < 200) {
                n.buttonsRotationSpeed = 200
            } else if (n.buttonsRotationSpeed > 2e3) {
                n.buttonsRotationSpeed = 2e3
            }
            n.imageWidth = n.props_obj.imageWidth;
            if (!n.imageWidth) {
                n.showPropertyError("imageWidth");
                return
            }
            n.imageHeight = n.props_obj.imageHeight;
            if (!n.imageHeight) {
                n.showPropertyError("imageHeight");
                return
            }
            n.zoomFactor = n.props_obj.zoomFactor;
            if (!n.zoomFactor) {
                n.showPropertyError("zoomFactor");
                return
            }
            if (n.zoomFactor < 1) {
                n.zoomFactor = 1
            } else if (n.zoomFactor > 4) {
                n.zoomFactor = 4
            }
            n.navigatorOffsetX = n.props_obj.navigatorOffsetX || 0;
            if (isNaN(n.navigatorOffsetX)) n.navigatorOffsetX = 0;
            n.navigatorOffsetY = n.props_obj.navigatorOffsetY || 0;
            if (isNaN(n.navigatorOffsetY)) n.navigatorOffsetY = 0;
            n.controllerBackgroundOpacity = n.props_obj.controllerBackgroundOpacity;
            if (!n.controllerBackgroundOpacity) n.controllerBackgroundOpacity = 1;
            if (isNaN(n.controllerBackgroundOpacity)) n.controllerBackgroundOpacity = 1;
            if (n.controllerBackgroundOpacity < 0) {
                n.controllerBackgroundOpacity = 0
            } else if (n.controllerBackgroundOpacity > 1) {
                n.controllerBackgroundOpacity = 1
            }
            n.controllerMaxWidth = n.props_obj.controllerMaxWidth;
            if (!n.controllerMaxWidth) n.controllerMaxWidth = 900;
            if (isNaN(n.controllerMaxWidth)) n.controllerMaxWidth = 900;
            if (n.controllerMaxWidth < 200) n.controllerMaxWidth = 200;
            n.hideControllerDelay = n.props_obj.hideControllerDelay;
            if (n.hideControllerDelay) {
                n.hideController_bl = true;
                if (isNaN(n.hideControllerDelay)) {
                    n.hideControllerDelay = 4e3
                } else if (n.hideControllerDelay < 0) {
                    n.hideControllerDelay = 4e3
                } else {
                    n.hideControllerDelay *= 1e3
                }
            }
            n.spaceBetweenButtons = n.props_obj.spaceBetweenButtons || 0;
            n.scrollBarPosition = n.props_obj.scrollBarPosition || 0;
            n.startSpaceForScrollBarButtons = n.props_obj.startSpaceForScrollBarButtons || 0;
            n.startSpaceBetweenButtons = n.props_obj.startSpaceBetweenButtons || 0;
            n.startSpaceForScrollBar = n.props_obj.startSpaceForScrollBar || 0;
            n.scrollBarOffsetX = n.props_obj.scrollBarOffsetX || 0;
            n.controllerOffsetY = n.props_obj.controllerOffsetY || 0;
            n.scrollBarHandlerToolTipOffsetY = n.props_obj.scrollBarHandlerToolTipOffsetY || 0;
            n.zoomInAndOutToolTipOffsetY = n.props_obj.zoomInAndOutToolTipOffsetY || 0;
            n.buttonsToolTipOffsetY = n.props_obj.buttonsToolTipOffsetY || 0;
            n.infoWindowBackgroundOpacity = n.props_obj.infoWindowBackgroundOpacity || 1;
            n.markerToolTipOffsetY = n.props_obj.markerToolTipOffsetY || 1;
            n.toolTipWindowMaxWidth = n.props_obj.toolTipWindowMaxWidth || 300;
            n.buttonToolTipFontColor_str = n.props_obj.buttonToolTipFontColor || "#000000";
            n.link_str = n.props_obj.link || "http://www.link-is-not-defined.com!";
            n.contextMenuBackgroundColor_str = n.props_obj.contextMenuBackgroundColor || "#000000";
            n.contextMenuBorderColor_str = n.props_obj.contextMenuBorderColor || "#FF0000";
            n.contextMenuSpacerColor_str = n.props_obj.contextMenuSpacerColor || "#FF0000";
            n.contextMenuItemNormalColor_str = n.props_obj.contextMenuItemNormalColor || "#FF0000";
            n.contextMenuItemSelectedColor_str = n.props_obj.contextMenuItemSelectedColor || "#FF0000";
            n.contextMenuItemDisabledColor_str = n.props_obj.contextMenuItemDisabledColor || "#FF0000";
            n.infoWindowBackgroundColor_str = n.props_obj.infoWindowBackgroundColor || "#FF0000";
            n.infoWindowScrollBarColor_str = n.props_obj.infoWindowScrollBarColor || "#FF0000";
            n.navigatorPosition_str = n.props_obj.navigatorPosition || "topleft";
            n.navigatorPosition_str = String(n.navigatorPosition_str).toLowerCase();
            l = n.navigatorPosition_str == "topleft" || n.navigatorPosition_str == "topright" || n.navigatorPosition_str == "bottomleft" || n.navigatorPosition_str == "bottomright";
            if (!l) n.navigatorPosition_str = "topleft";
            n.navigatorHandlerColor_str = n.props_obj.navigatorHandlerColor || "#FF0000";
            n.navigatorBorderColor_str = n.props_obj.navigatorBorderColor || "#FF0000";
            n.slideShowDelay = n.props_obj.slideShowDelay || 100;
            if (n.slideShowDelay < 100) n.slideShowDelay = 100;
            n.showContextMenu_bl = n.props_obj.showContextMenu;
            n.showContextMenu_bl = n.showContextMenu_bl == "no" ? false : true;
            n.inverseNextAndPrevRotation_bl = n.props_obj.inverseNextAndPrevRotation;
            n.inverseNextAndPrevRotation_bl = n.inverseNextAndPrevRotation_bl == "yes" ? true : false;
            n.addCorrectionForWebKit_bl = n.props_obj.addCorrectionForWebKit;
            n.addCorrectionForWebKit_bl = n.addCorrectionForWebKit_bl == "yes" ? true : false;
            if (!FWDUtils.isChrome || n.hasTouch_bl) n.addCorrectionForWebKit_bl = false;
            n.useEntireScreenFor3dObject_bl = n.props_obj.useEntireScreenFor3dObject;
            n.useEntireScreenFor3dObject_bl = n.useEntireScreenFor3dObject_bl == "yes" ? true : false;
            n.infoText_str = FWDUtils.getChildFromNodeListFromAttribute(n.rootElement_el, "data-info");
            if (n.infoText_str) {
                n.infoText_str = n.infoText_str.innerHTML
            } else {
                n.infoText_str = "not defined make sure that an ul element with the attribute data-info is defined!"
            }
            n.handMovePath_str = n.checkForAttribute(e, "data-hand-move-path");
            if (!n.handMovePath_str) return;
            n.handGrabRotatePath_str = n.checkForAttribute(e, "data-hand-rotate-path");
            if (!n.handGrabRotatePath_str) return;
            n.handGrabPath_str = n.checkForAttribute(e, "data-hand-grab-path");
            if (!n.handGrabPath_str) return;
            var S = n.checkForAttribute(e, "data-preloader-path");
            if (!S) return;
            var x = n.checkForAttribute(e, "data-main-lightbox-close-button-normal-path");
            if (!x) return;
            var T = n.checkForAttribute(e, "data-main-lightbox-close-button-selected-path");
            if (!x) return;
            var N = n.checkForAttribute(e, "data-controller-background-left-path");
            if (!N) return;
            var C = n.checkForAttribute(e, "data-controller-background-right-path");
            if (!C) return;
            var k = n.checkForAttribute(e, "data-controller-pan-button-normal-state-path");
            if (!k) return;
            var L = n.checkForAttribute(e, "data-controller-pan-button-selected-state-path");
            if (!L) return;
            var A = n.checkForAttribute(e, "data-controller-rotate-button-normal-state-path");
            if (!A) return;
            var O = n.checkForAttribute(e, "data-controller-rotate-button-selected-state-path");
            if (!O) return;
            var M = n.checkForAttribute(e, "data-controller-next-button-normal-state-path");
            if (!M) return;
            var _ = n.checkForAttribute(e, "data-controller-next-button-selected-state-path");
            if (!_) return;
            var D = n.checkForAttribute(e, "data-controller-prev-button-normal-state-path");
            if (!D) return;
            var P = n.checkForAttribute(e, "data-controller-prev-button-selected-state-path");
            if (!P) return;
            var H = n.checkForAttribute(e, "data-controller-play-button-normal-state-path");
            if (!H) return;
            var B = n.checkForAttribute(e, "data-controller-play-button-selected-state-path");
            if (!B) return;
            var j = n.checkForAttribute(e, "data-controller-pause-button-normal-state-path");
            if (!j) return;
            var F = n.checkForAttribute(e, "data-controller-pause-button-selected-state-path");
            if (!F) return;
            var I = n.checkForAttribute(e, "data-controller-info-button-normal-state-path");
            if (!I) return;
            var q = n.checkForAttribute(e, "data-controller-info-button-selected-state-path");
            if (!q) return;
            var R = n.checkForAttribute(e, "data-controller-link-button-normal-state-path");
            if (!R) return;
            var U = n.checkForAttribute(e, "data-controller-link-button-selected-state-path");
            if (!U) return;
            var z = n.checkForAttribute(e, "data-controller-fullscreen-normal-button-normal-state-path");
            if (!z) return;
            var W = n.checkForAttribute(e, "data-controller-fullscreen-normal-button-selected-state-path");
            if (!W) return;
            var X = n.checkForAttribute(e, "data-controller-fullscreen-full-button-normal-state-path");
            if (!X) return;
            var V = n.checkForAttribute(e, "data-controller-fullscreen-full-button-selected-state-path");
            if (!V) return;
            var $ = n.checkForAttribute(e, "data-controller-zoomin-button-normal-state-path");
            if (!$) return;
            var J = n.checkForAttribute(e, "data-controller-zoomin-button-slected-state-path");
            if (!J) return;
            var K = n.checkForAttribute(e, "data-controller-zoomout-button-normal-state-path");
            if (!K) return;
            var Q = n.checkForAttribute(e, "data-controller-zoomout-button-slected-state-path");
            if (!Q) return;
            var G = n.checkForAttribute(e, "data-controller-scrollbar-handler-normal-state-path");
            if (!G) return;
            var Y = n.checkForAttribute(e, "data-controller-scrollbar-handler-selected-state-path");
            if (!Y) return;
            var Z = n.checkForAttribute(e, "data-controller-scrollba-background-left-path");
            if (!Z) return;
            var et = n.checkForAttribute(e, "data-controller-scrollbar-background-right-path");
            if (!et) return;
            n.scrollBarMiddlePath_str = n.checkForAttribute(e, "data-controller-scrollbar-background-middle-path");
            if (!n.scrollBarMiddlePath_str) return;
            n.controllerBackgroundMiddlePath_str = n.checkForAttribute(e, "data-controller-background-center-path");
            if (!n.controllerBackgroundMiddlePath_str) return;
            n.buttonToolTipLeft_str = n.checkForAttribute(e, "data-button-tooltip-left-path");
            if (!n.buttonToolTipLeft_str) return;
            n.buttonToolTipMiddle_str = n.checkForAttribute(e, "data-button-tooltip-middle-path");
            if (!n.buttonToolTipMiddle_str) return;
            n.buttonToolTipRight_str = n.checkForAttribute(e, "data-button-tooltip-right-path");
            if (!n.buttonToolTipRight_str) return;
            n.buttonToolTipBottomPointer_str = n.checkForAttribute(e, "data-button-tooltip-bottom-pointer-path");
            if (!n.buttonToolTipBottomPointer_str) return;
            n.buttonToolTipTopPointer_str = n.checkForAttribute(e, "data-button-tooltip-top-pointer-path");
            if (!n.buttonToolTipTopPointer_str) return;
            var tt = n.checkForAttribute(e, "data-info-window-close-button-normal-state-path");
            if (!tt) return;
            var nt = n.checkForAttribute(e, "data-info-window-close-button-selected-state-path");
            if (!nt) return;
            n.skinPaths_ar.push(S);
            n.skinPaths_ar.push(x);
            n.skinPaths_ar.push(T);
            n.skinPaths_ar.push(N);
            n.skinPaths_ar.push(C);
            n.skinPaths_ar.push(k);
            n.skinPaths_ar.push(L);
            n.skinPaths_ar.push(A);
            n.skinPaths_ar.push(O);
            n.skinPaths_ar.push(M);
            n.skinPaths_ar.push(_);
            n.skinPaths_ar.push(D);
            n.skinPaths_ar.push(P);
            n.skinPaths_ar.push(H);
            n.skinPaths_ar.push(B);
            n.skinPaths_ar.push(j);
            n.skinPaths_ar.push(F);
            n.skinPaths_ar.push(I);
            n.skinPaths_ar.push(q);
            n.skinPaths_ar.push(R);
            n.skinPaths_ar.push(U);
            n.skinPaths_ar.push(z);
            n.skinPaths_ar.push(W);
            n.skinPaths_ar.push(X);
            n.skinPaths_ar.push(V);
            n.skinPaths_ar.push($);
            n.skinPaths_ar.push(J);
            n.skinPaths_ar.push(K);
            n.skinPaths_ar.push(Q);
            n.skinPaths_ar.push(G);
            n.skinPaths_ar.push(Y);
            n.skinPaths_ar.push(Z);
            n.skinPaths_ar.push(et);
            n.skinPaths_ar.push(n.buttonToolTipTopPointer_str);
            n.skinPaths_ar.push(n.buttonToolTipLeft_str);
            n.skinPaths_ar.push(tt);
            n.skinPaths_ar.push(nt);
            n.skinPaths_ar.push(n.buttonToolTipMiddle_str);
            n.skinPaths_ar.push(n.buttonToolTipRight_str);
            n.skinPaths_ar.push(n.controllerBackgroundMiddlePath_str);
            n.totalGraphics = n.skinPaths_ar.length;
            n.loadSkin();
            for (var b = 0; b < n.totalImages; b++) {
                n.imagesPaths_ar[b] = n.playListData_ar[b].smallImagePath;
                if (n.showLargeImageVersionOnZoom_bl) n.largeImagesPaths_ar[b] = n.playListData_ar[b].largeImagePath;
                if (n.showNavigator_bl) n.navigatorImagesPaths_ar[b] = n.playListData_ar[b].navigatorImagePath
            }
        };
        n.loadSkin = function () {
            if (n.image_img) {
                n.image_img.onload = null;
                n.image_img.onerror = null
            }
            var e = n.skinPaths_ar[n.countLoadedSkinImages];
            n.image_img = new Image;
            n.image_img.onload = n.onSkinLoadHandler;
            n.image_img.onerror = n.onKinLoadErrorHandler;
            n.image_img.src = e
        };
        n.onSkinLoadHandler = function (e) {
            if (n.countLoadedSkinImages == 0) {
                n.mainPreloader_img = n.image_img;
                n.dispatchEvent(t.PRELOADER_LOAD_DONE)
            } else if (n.countLoadedSkinImages == 1) {
                n.mainLightboxCloseButtonN_img = n.image_img
            } else if (n.countLoadedSkinImages == 2) {
                n.mainLightboxCloseButtonS_img = n.image_img;
                n.dispatchEvent(t.LIGHBOX_CLOSE_BUTTON_LOADED)
            } else if (n.countLoadedSkinImages == 3) {
                n.controllerBackgroundLeft_img = n.image_img;
                n.controllerHeight = n.controllerBackgroundLeft_img.height
            } else if (n.countLoadedSkinImages == 4) {
                n.controllerBackgroundRight_img = n.image_img
            } else if (n.countLoadedSkinImages == 5) {
                n.controllerPanN_img = n.image_img
            } else if (n.countLoadedSkinImages == 6) {
                n.controllerPanS_img = n.image_img
            } else if (n.countLoadedSkinImages == 7) {
                n.controllerRotateN_img = n.image_img
            } else if (n.countLoadedSkinImages == 8) {
                n.controllerRotateS_img = n.image_img
            } else if (n.countLoadedSkinImages == 9) {
                n.controllerNextN_img = n.image_img
            } else if (n.countLoadedSkinImages == 10) {
                n.controllerNextS_img = n.image_img
            } else if (n.countLoadedSkinImages == 11) {
                n.controllerPrevN_img = n.image_img
            } else if (n.countLoadedSkinImages == 12) {
                n.controllerPrevS_img = n.image_img
            } else if (n.countLoadedSkinImages == 13) {
                n.controllerPlayN_img = n.image_img
            } else if (n.countLoadedSkinImages == 14) {
                n.controllerPlayS_img = n.image_img
            } else if (n.countLoadedSkinImages == 15) {
                n.controllerPauseN_img = n.image_img
            } else if (n.countLoadedSkinImages == 16) {
                n.controllerPauseS_img = n.image_img
            } else if (n.countLoadedSkinImages == 17) {
                n.controllerInfoN_img = n.image_img
            } else if (n.countLoadedSkinImages == 18) {
                n.controllerInfoS_img = n.image_img
            } else if (n.countLoadedSkinImages == 19) {
                n.controllerLinkN_img = n.image_img
            } else if (n.countLoadedSkinImages == 20) {
                n.controllerLinkS_img = n.image_img
            } else if (n.countLoadedSkinImages == 21) {
                n.controllerFullScreenNormalN_img = n.image_img
            } else if (n.countLoadedSkinImages == 22) {
                n.controllerFullScreenNormalS_img = n.image_img
            } else if (n.countLoadedSkinImages == 23) {
                n.controllerFullScreenFullN_img = n.image_img
            } else if (n.countLoadedSkinImages == 24) {
                n.controllerFullScreenFullS_img = n.image_img
            } else if (n.countLoadedSkinImages == 25) {
                n.zoomInN_img = n.image_img
            } else if (n.countLoadedSkinImages == 26) {
                n.zoomInS_img = n.image_img
            } else if (n.countLoadedSkinImages == 27) {
                n.zoomOutN_img = n.image_img
            } else if (n.countLoadedSkinImages == 28) {
                n.zoomOutS_img = n.image_img
            } else if (n.countLoadedSkinImages == 29) {
                n.scrollBarHandlerN_img = n.image_img
            } else if (n.countLoadedSkinImages == 30) {
                n.scrollBarHandlerS_img = n.image_img
            } else if (n.countLoadedSkinImages == 31) {
                n.scrollBarLeft_img = n.image_img
            } else if (n.countLoadedSkinImages == 32) {
                n.scrollBarRight_img = n.image_img
            } else if (n.countLoadedSkinImages == 33) {
                n.toolTipPointer_img = n.image_img
            } else if (n.countLoadedSkinImages == 34) {
                n.toolTipLeft_img = n.image_img
            } else if (n.countLoadedSkinImages == 35) {
                n.infoWindowCloseNormal_img = n.image_img
            } else if (n.countLoadedSkinImages == 36) {
                n.infoWindowCloseSelected_img = n.image_img
            }
            n.dispatchEvent(t.SKIN_PROGRESS, {
                percent: n.countLoadedSkinImages / n.totalGraphics
            });
            n.countLoadedSkinImages++;
            if (n.countLoadedSkinImages < n.totalGraphics) {
                n.loadImageId_to = setTimeout(n.loadSkin, 16)
            } else {
                n.dispatchEvent(t.SKIN_PROGRESS, {
                    percent: n.countLoadedSkinImages / n.totalGraphics
                });
                n.dispatchEvent(t.LOAD_DONE);
                if (n.showNavigator_bl) {
                    n.loadNavigatorFirstImage()
                } else {
                    n.loadImages()
                }
            }
        };
        n.onKinLoadErrorHandler = function (e) {
            var r = "The skin graphics with the label <font color='#FFFFFF'>" + n.skinPaths_ar[n.countLoadedSkinImages] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            console.log(e);
            var i = {
                text: r
            };
            n.dispatchEvent(t.LOAD_ERROR, i)
        };
        n.stopToLoad = function () {
            clearTimeout(n.loadImageId_to);
            if (n.image_img) {
                n.image_img.onload = null;
                n.image_img.onerror = null
            }
            if (n.navigatorImage_img) {
                n.navigatorImage_img.onload = null;
                n.navigatorImage_img.onerror = null
            }
        };
        n.loadNavigatorFirstImage = function () {
            if (n.image_img) {
                n.image_img.onload = null;
                n.image_img.onerror = null
            }
            var e = n.navigatorImagesPaths_ar[0];
            n.image_img = new Image;
            n.image_img.onload = n.onFirstNavigatorImageLoadHandler;
            n.image_img.onerror = n.onImageLoadErrorHandler;
            n.image_img.src = e
        };
        n.onFirstNavigatorImageLoadHandler = function () {
            n.navigatorImages_ar.push(n.image_img);
            n.navigatorWidth = n.image_img.width;
            n.navigatorHeight = n.image_img.height;
            n.loadImages()
        };
        n.loadImages = function () {
            if (n.hasNavigatorError_bl) return;
            if (n.image_img) {
                n.image_img.onload = null;
                n.image_img.onerror = null
            }
            var e = n.imagesPaths_ar[n.countLoadedImages];
            n.image_img = new Image;
            n.image_img.onload = n.onImageLoadHandler;
            n.image_img.onerror = n.onImageLoadErrorHandler;
            n.image_img.src = e
        };
        n.onImageLoadHandler = function (e) {
            if (n.countLoadedImages == 0) n.dispatchEvent(t.FIRST_IMAGE_LOAD_COMPLETE);
            n.images_ar.push(n.image_img);
            n.dispatchEvent(t.IMAGE_LOADED, {
                id: n.countLoadedImages
            });
            n.dispatchEvent(t.IMAGES_PROGRESS, {
                percent: n.countLoadedImages / n.totalImages
            });
            if (n.showNavigator_bl && n.countLoadedImages != 0) {
                n.navigatorImage_img = new Image;
                n.navigatorImages_ar.push(n.navigatorImage_img);
                if (n.countLoadedImages == n.totalImages - 1) n.navigatorImage_img.onload = n.onLastNavigatorImageLoadHandler;
                n.navigatorImage_img.onerror = n.onNavigatorImageLoadErrorHandler;
                n.navigatorImage_img.src = n.navigatorImagesPaths_ar[n.countLoadedImages]
            }
            n.countLoadedImages++;
            if (n.countLoadedImages < n.totalImages) {
                n.loadImageId_to = setTimeout(n.loadImages, 40)
            } else {
                if (!n.showNavigator_bl) {
                    n.areAllImagesLoaded_bl = true;
                    n.dispatchEvent(t.IMAGES_PROGRESS, {
                        percent: n.countLoadedImages / n.totalImages
                    });
                    n.dispatchEvent(t.IMAGES_LOAD_COMPLETE)
                }
            }
        };
        n.onLastNavigatorImageLoadHandler = function (e) {
            if (n == null) return;
            n.areAllImagesLoaded_bl = true;
            n.dispatchEvent(t.IMAGES_PROGRESS, {
                percent: n.countLoadedImages / n.totalImages
            });
            n.dispatchEvent(t.IMAGES_LOAD_COMPLETE)
        };
        n.onNavigatorImageLoadErrorHandler = function (e) {
            var r = "The navigator image with the label <font color='#FFFFFF'>" + n.navigatorImagesPaths_ar[n.countLoadedImages] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            n.hasNavigatorError_bl = true;
            var i = {
                text: r
            };
            n.dispatchEvent(t.LOAD_ERROR, i);
            console.log(e)
        };
        n.onImageLoadErrorHandler = function (e) {
            var r = "The image with the label <font color='#FFFFFF'>" + n.imagesPaths_ar[n.countLoadedImages] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            console.log(e);
            var i = {
                text: r
            };
            n.dispatchEvent(t.LOAD_ERROR, i)
        };
        n.checkForAttribute = function (e, r, i) {
            var s = FWDUtils.getChildFromNodeListFromAttribute(e, r);
            s = s ? FWDUtils.trim(FWDUtils.getAttributeValue(s, r)) : undefined;
            if (!s) {
                if (i != undefined) {
                    n.dispatchEvent(t.LOAD_ERROR, {
                        text: "Element with attribute <font color='#FFFFFF'>" + r + "</font> is not defined at positon <font color='#FFFFFF'>" + (i + 1) + "</font>"
                    })
                } else {
                    n.dispatchEvent(t.LOAD_ERROR, {
                        text: "Element with attribute <font color='#FFFFFF'>" + r + "</font> is not defined."
                    })
                }
                return
            }
            return s
        };
        n.showPropertyError = function (e) {
            n.dispatchEvent(t.LOAD_ERROR, {
                text: "The property called <font color='#FFFFFF'>" + e + "</font> is not defined."
            })
        };
        n.showMarkerError = function (e, r) {
            n.dispatchEvent(t.LOAD_ERROR, {
                text: "The marker at position <font color='#FFFFFF'>" + r + "</font> dose not have defined an attribute <font color='#FFFFFF'>" + e + "</font>."
            })
        };
        n.showMarkerTypeError = function (e, r) {
            n.dispatchEvent(t.LOAD_ERROR, {
                text: "Marker type is incorrect <font color='#FFFFFF'>" + e + "</font> at position <font color='#FFFFFF'>" + r + "</font>. Accepted types are <font color='#FFFFFF'>link, tooltip, infowindow</font>."
            })
        };
        n.destroy = function () {
            var e;
            var i;
            clearTimeout(n.parseDelayId_to);
            clearTimeout(n.loadImageId_to);
            if (n.image_img) {
                n.image_img.onload = null;
                n.image_img.onerror = null;
                n.image_img.src = null
            }
            if (n.navigatorImage_img) {
                n.navigatorImage_img.onload = null;
                n.navigatorImage_img.onerror = null;
                n.navigatorImage_img.src = null
            }
            e = n.images_ar.length;
            for (var s = 0; s < e; s++) {
                i = n.images_ar[s];
                i.onerror = null;
                i.onload = null;
                i.src = null;
                i = null
            }
            e = n.navigatorImages_ar.length;
            for (var s = 0; s < e; s++) {
                i = n.navigatorImages_ar[s];
                i.onerror = null;
                i.onload = null;
                i.src = null;
                i = null
            }
            if (n.mainPreloader_img) n.mainPreloader_img.src = null;
            if (n.mainLightboxCloseButtonN_img) n.mainLightboxCloseButtonN_img.src = null;
            if (n.mainLightboxCloseButtonS_img) n.mainLightboxCloseButtonS_img.src = null;
            if (n.controllerBackgroundLeft_img) n.controllerBackgroundLeft_img.src = null;
            if (n.controllerBackgroundRight_img) n.controllerBackgroundRight_img.src = null;
            if (n.controllerPanN_img) n.controllerPanN_img.src = null;
            if (n.controllerPanS_img) n.controllerPanS_img.src = null;
            if (n.controllerRotateN_img) n.controllerRotateN_img.src = null;
            if (n.controllerRotateS_img) n.controllerRotateS_img.src = null;
            if (n.controllerNextN_img) n.controllerNextN_img.src = null;
            if (n.controllerNextS_img) n.controllerNextS_img.src = null;
            if (n.controllerPrevN_img) n.controllerPrevN_img.src = null;
            if (n.controllerPrevS_img) n.controllerPrevS_img.src = null;
            if (n.controllerPlayN_img) n.controllerPlayN_img.src = null;
            if (n.controllerPlayS_img) n.controllerPlayS_img.src = null;
            if (n.controllerPauseN_img) n.controllerPauseN_img.src = null;
            if (n.controllerPauseS_img) n.controllerPauseS_img.src = null;
            if (n.controllerInfoN_img) n.controllerInfoN_img.src = null;
            if (n.controllerLinkN_img) n.controllerLinkN_img.src = null;
            if (n.controllerLinkS_img) n.controllerLinkS_img.src = null;
            if (n.controllerFullScreenNormalN_img) n.controllerFullScreenNormalN_img.src = null;
            if (n.controllerFullScreenNormalS_img) n.controllerFullScreenNormalS_img.src = null;
            if (n.controllerFullScreenFullN_img) n.controllerFullScreenFullN_img.src = null;
            if (n.controllerFullScreenFullS_img) n.controllerFullScreenFullS_img.src = null;
            if (n.zoomInN_img) n.zoomInN_img.src = null;
            if (n.zoomInS_img) n.zoomInS_img.src = null;
            if (n.zoomOutN_img) n.zoomOutN_img.src = null;
            if (n.zoomOutS_img) n.zoomOutS_img.src = null;
            if (n.scrollBarHandlerN_img) n.scrollBarHandlerN_img.src = null;
            if (n.scrollBarHandlerN_img) n.scrollBarHandlerN_img.src = null;
            if (n.scrollBarHandlerS_img) n.scrollBarHandlerS_img.src = null;
            if (n.scrollBarLeft_img) n.scrollBarLeft_img.src = null;
            if (n.scrollBarLeft_img) n.scrollBarLeft_img.src = null;
            if (n.scrollBarRight_img) n.scrollBarRight_img.src = null;
            if (n.toolTipLeft_img) n.toolTipLeft_img.src = null;
            if (n.toolTipPointer_img) n.toolTipPointer_img.src = null;
            if (n.infoWindowCloseNormal_img) n.infoWindowCloseNormal_img.src = null;
            if (n.infoWindowCloseSelected_img) n.infoWindowCloseSelected_img.src = null;
            n.mainPreloader_img = null;
            n.mainLightboxCloseButtonN_img = null;
            n.mainLightboxCloseButtonS_img = null;
            n.controllerBackgroundLeft_img = null;
            n.controllerBackgroundRight_img = null;
            n.controllerPanN_img = null;
            n.controllerPanS_img = null;
            n.controllerRotateN_img = null;
            n.controllerRotateS_img = null;
            n.controllerNextN_img = null;
            n.controllerNextS_img = null;
            n.controllerPrevN_img = null;
            n.controllerPrevS_img = null;
            n.controllerPlayN_img = null;
            n.controllerPlayS_img = null;
            n.controllerPauseN_img = null;
            n.controllerPauseS_img = null;
            n.controllerInfoN_img = null;
            n.controllerInfoS_img = null;
            n.controllerLinkN_img = null;
            n.controllerLinkS_img = null;
            n.controllerFullScreenNormalN_img = null;
            n.controllerFullScreenNormalS_img = null;
            n.controllerFullScreenFullN_img = null;
            n.controllerFullScreenFullS_img = null;
            n.zoomInN_img = null;
            n.zoomInS_img = null;
            n.zoomOutN_img = null;
            n.zoomOutS_img = null;
            n.scrollBarHandlerN_img = null;
            n.scrollBarHandlerS_img = null;
            n.scrollBarLeft_img = null;
            n.scrollBarRight_img = null;
            n.toolTipLeft_img = null;
            n.toolTipPointer_img = null;
            n.infoWindowCloseNormal_img = null;
            n.infoWindowCloseSelected_img = null;
            this.props_obj = null;
            this.rootElement_el = null;
            this.skinPaths_ar = null;
            this.playListData_ar = null;
            this.imagesPaths_ar = null;
            this.largeImagesPaths_ar = null;
            this.navigatorImagesPaths_ar = null;
            this.images_ar = null;
            this.navigatorImages_ar = null;
            this.markersList_ar = null;
            this.markersPosition_ar = null;
            this.buttons_ar = null;
            this.buttonsLabels_ar = null;
            this.contextMenuLabels_ar = null;
            this.backgroundColor_str = null;
            this.handMovePath_str = null;
            this.handGrabRotatePath_str = null;
            this.controllerBackgroundMiddlePath_str = null;
            this.scrollBarMiddlePath_str = null;
            this.startDraggingMode_str = null;
            this.controllerPosition_str = null;
            this.preloaderFontColor_str = null;
            this.preloaderBackgroundColor_str = null;
            this.preloaderText_str = null;
            this.buttonToolTipLeft_str = null;
            this.buttonToolTipMiddle_str = null;
            this.buttonToolTipRight_str = null;
            this.buttonToolTipBottomPointer_str = null;
            this.buttonToolTipTopPointer_str = null;
            this.buttonToolTipFontColor_str = null;
            this.link_str = null;
            this.contextMenuBackgroundColor_str = null;
            this.contextMenuBorderColor_str = null;
            this.contextMenuSpacerColor_str = null;
            this.contextMenuItemNormalColor_str = null;
            this.contextMenuItemSelectedColor_str = null;
            this.contextMenuItemSelectedColor_str = null;
            this.contextMenuItemDisabledColor_str = null;
            this.navigatorPosition_str = null;
            this.navigatorHandlerColor_str = null;
            this.navigatorBorderColor_str = null;
            this.infoText_str = null;
            this.infoWindowBackgroundColor_str = null;
            this.infoWindowScrollBarColor_str = null;
            r.destroy();
            n = null;
            r = null;
            t.prototype = null
        };
        n.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDEventDispatcher
    };
    t.prototype = null;
    t.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
    t.LOAD_DONE = "onLoadDone";
    t.LOAD_ERROR = "onLoadError";
    t.LIGHBOX_CLOSE_BUTTON_LOADED = "onLightBoxCloseButtonLoadDone";
    t.IMAGE_LOADED = "onImageLoaded";
    t.FIRST_IMAGE_LOAD_COMPLETE = "onFirstImageLoadComplete";
    t.IMAGES_LOAD_COMPLETE = "onImagesLoadComplete";
    t.SKIN_PROGRESS = "onSkinProgress";
    t.IMAGES_PROGRESS = "onImagesPogress";
    t.hasTouch_bl = false;
    e.FWDData = t
})(window);
(function (e) {
    var t = function (n, r) {
        var i = this;
        var s = t.prototype;
        this.infoWindowCloseNormal_img = r.infoWindowCloseNormal_img;
        this.infoWindowCloseSelected_img = r.infoWindowCloseSelected_img;
        this.close_do = null;
        this.background_sdo = null;
        this.mainContentHolder_do = null;
        this.dumyHolder_do = null;
        this.contentHolder_sdo = null;
        this.scrollBar_do = null;
        this.scrollBarTrack_sdo = null;
        this.scrollBarHandler_sdo = null;
        this.mainBackgroundColor_str = r.infoWindowBackgroundColor_str;
        this.scrollBarHandlerColor = r.infoWindowScrollBarColor_str;
        this.scrollBarTrackColor = r.infoWindowScrollBarColor_str;
        this.scrollBarTrackOpacity = .6;
        this.toolTipWindowId = "none";
        this.backgroundOpacity = r.infoWindowBackgroundOpacity;
        this.mainContentHolderWidth;
        this.mainContentHolderHeight;
        this.contentHolderHeight;
        this.scrollBarHandlerFinalY;
        this.mainContentFinalX = 0;
        this.mainContentFinalY = 0;
        this.contentFinalX = 0;
        this.contentFinalY = 0;
        this.headerFinalY = 0;
        this.contentHeight;
        this.maxWidth = 800;
        this.offestWidth = 20;
        this.offsetHeight = 20;
        this.stageWidth;
        this.stageHeight;
        this.scrollBarHeight = 0;
        this.scrollBarWidth = 4;
        this.scrollBarHandlerHeight;
        this.scrollBarBorderRadius = 15;
        this.yPositionOnPress;
        this.lastPresedY;
        this.closeButtonWidth = i.infoWindowCloseNormal_img.width;
        this.closeButtonHeight = i.infoWindowCloseNormal_img.height;
        this.vy = 0;
        this.vy2 = 0;
        this.friction = .9;
        this.hideWithDelayId_do;
        this.showOrHideWithDelayId_to;
        this.hideCompleteId_to;
        this.updateMobileScrollBarId_int;
        this.isShowed_bl = true;
        this.isDragging_bl = false;
        this.allowToScroll_bl = true;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        i.init = function () {
            i.setOverflow("visible");
            i.setBackfaceVisibility();
            i.setupMainContainers();
            if (i.isMobile_bl) {
                i.setupMobileScrollbar()
            } else {
                i.setupPCScrollBar();
                i.addMouseWheelSupport()
            }
            i.setupCloseButton();
            i.hide(false)
        };
        i.resizeAndPosition = function () {
            if (i.stageWidth == n.stageWidth && i.stageHeight == n.stageHeight) return;
            i.stageWidth = n.stageWidth;
            i.stageHeight = n.stageHeight;
            i.background_sdo.setWidth(i.stageWidth);
            i.background_sdo.setHeight(i.stageHeight);
            i.updateSize()
        };
        i.setupMainContainers = function () {
            i.background_sdo = new FWDSimpleDisplayObject("div");
            i.background_sdo.setBkColor(i.mainBackgroundColor_str);
            i.addChild(i.background_sdo);
            i.mainContentHolder_do = new FWDDisplayObject("div");
            i.mainContentHolder_do.setBackfaceVisibility();
            i.dumyHolder_do = new FWDDisplayObject("div");
            i.dumyHolder_do.setBackfaceVisibility();
            i.addChild(i.dumyHolder_do);
            i.dumyHolder_do.addChild(i.mainContentHolder_do);
            i.contentHolder_sdo = new FWDSimpleDisplayObject("div");
            i.contentHolder_sdo.getStyle().fontSmoothing = "antialiased";
            i.contentHolder_sdo.getStyle().webkitFontSmoothing = "antialiased";
            i.contentHolder_sdo.getStyle().textRendering = "optimizeLegibility";
            if (!FWDUtils.isMobile) {
                i.contentHolder_sdo.hasTransform3d_bl = false;
                i.contentHolder_sdo.hasTransform2d_bl = false
            }
            i.contentHolder_sdo.setBackfaceVisibility();
            i.mainContentHolder_do.addChild(i.contentHolder_sdo)
        };
        i.setupCloseButton = function () {
            FWDSimpleButton.setPrototype();
            i.close_do = new FWDSimpleButton(i.infoWindowCloseNormal_img, i.infoWindowCloseSelected_img);
            i.close_do.addListener(FWDSimpleButton.MOUSE_DOWN, i.closeButtonStartHandler);
            i.mainContentHolder_do.addChild(i.close_do)
        };
        i.closeButtonStartHandler = function (e) {
            if (!i.isShowed_bl) return;
            i.hide(true)
        };
        i.updateSize = function () {
            i.mainContentHolderWidth = i.stageWidth - i.offestWidth;
            if (i.mainContentHolderWidth > i.maxWidth) i.mainContentHolderWidth = i.maxWidth;
            i.mainContentHolder_do.setWidth(i.mainContentHolderWidth);
            i.dumyHolder_do.setWidth(i.stageWidth);
            i.dumyHolder_do.setHeight(i.stageHeight);
            i.close_do.setX(i.mainContentHolderWidth - i.closeButtonWidth);
            if (i.isMobile_bl) {
                setTimeout(function () {
                    if (i == null) return;
                    TweenMax.killTweensOf(i.mainContentHolder_do);
                    i.contentHolderHeight = i.contentHolder_sdo.getHeight();
                    i.mainContentHolderHeight = Math.min(i.stageHeight, i.contentHolderHeight);
                    i.mainContentFinalX = Math.round((i.stageWidth - i.mainContentHolderWidth) / 2);
                    if (i.stageHeight > i.contentHolderHeight) {
                        i.mainContentFinalY = Math.round((i.stageHeight - i.contentHolderHeight) / 2);
                        i.allowToScroll_bl = false
                    } else {
                        i.mainContentFinalY = 0;
                        i.allowToScroll_bl = true
                    }
                    i.updateMobileScrollBarWithoutAnimation();
                    TweenMax.killTweensOf(i.mainContentHolder_do);
                    i.mainContentHolder_do.setX(i.mainContentFinalX);
                    i.mainContentHolder_do.setY(i.mainContentFinalY);
                    i.mainContentHolder_do.setHeight(i.mainContentHolderHeight)
                }, 50)
            } else {
                setTimeout(function () {
                    if (i == null) return;
                    TweenMax.killTweensOf(i.mainContentHolder_do);
                    i.contentHolderHeight = i.contentHolder_sdo.getHeight();
                    i.mainContentHolderHeight = i.stageHeight;
                    i.mainContentFinalX = Math.round((i.stageWidth - i.mainContentHolderWidth) / 2);
                    i.scrollBarHeight = Math.min(i.contentHolderHeight - 20 - i.closeButtonHeight, i.stageHeight - 20 - i.closeButtonHeight);
                    if (i.stageHeight > i.contentHolderHeight) {
                        i.scrollBar_do.setOverflow("hidden");
                        i.mainContentHolderHeight = i.contentHolderHeight;
                        i.scrollBarHandler_sdo.setY(0);
                        i.mainContentFinalY = Math.round((i.stageHeight - i.contentHolderHeight) / 2);
                        i.allowToScroll_bl = false
                    } else {
                        i.mainContentFinalY = 0;
                        i.scrollBar_do.setOverflow("visible");
                        i.scrollBar_do.setY(5 + i.closeButtonHeight);
                        i.allowToScroll_bl = true
                    } if (i.stageHeight < 120) i.mainContentFinalY = 0;
                    i.scrollBarHandlerHeight = Math.min(i.scrollBarHeight - 20, i.stageHeight / i.contentHolderHeight * (i.scrollBarHeight - 20));
                    if (i.scrollBarHandlerHeight > 500) {
                        i.scrollBarHandlerHeight = 500
                    }
                    i.scrollBar_do.setX(i.mainContentHolderWidth - i.scrollBarWidth - 2);
                    i.scrollBarTrack_sdo.setHeight(Math.max(i.scrollBarHeight, i.scrollBarHandlerHeight));
                    i.scrollBarHandler_sdo.setHeight(i.scrollBarHandlerHeight);
                    TweenMax.killTweensOf(i.mainContentHolder_do);
                    i.mainContentHolder_do.setX(i.mainContentFinalX);
                    i.mainContentHolder_do.setY(i.mainContentFinalY);
                    i.mainContentHolder_do.setHeight(i.mainContentHolderHeight);
                    i.updatePCHandler(false)
                }, 50)
            }
        };
        i.setText = function (e) {
            if (i == null) return;
            i.updateSize();
            i.contentHolder_sdo.setInnerHTML(e);
            setTimeout(i.updateSize, 120)
        };
        i.setupPCScrollBar = function () {
            i.scrollBar_do = new FWDDisplayObject("div");
            i.scrollBar_do.setOverflow("visible");
            i.mainContentHolder_do.addChild(i.scrollBar_do);
            i.scrollBarTrack_sdo = new FWDSimpleDisplayObject("div");
            i.scrollBarTrack_sdo.setWidth(i.scrollBarWidth);
            i.scrollBarTrack_sdo.setBkColor(i.scrollBarTrackColor);
            i.scrollBarTrack_sdo.setAlpha(0);
            i.scrollBarTrack_sdo.getStyle().borderRadius = i.scrollBarBorderRadius + "px";
            i.scrollBar_do.addChild(i.scrollBarTrack_sdo);
            i.scrollBarHandler_sdo = new FWDSimpleDisplayObject("div");
            i.scrollBarHandler_sdo.setButtonMode(true);
            i.scrollBarHandler_sdo.setWidth(i.scrollBarWidth);
            i.scrollBarHandler_sdo.getStyle().borderRadius = i.scrollBarBorderRadius + "px";
            i.scrollBarHandler_sdo.setBkColor(i.scrollBarHandlerColor);
            i.scrollBarHandler_sdo.setAlpha(.5);
            if (i.scrollBarHandler_sdo.screen.addEventListener) {
                i.scrollBarHandler_sdo.screen.addEventListener("mouseover", i.scrollBarHandlerOnMouseOver);
                i.scrollBarHandler_sdo.screen.addEventListener("mouseout", i.scrollBarHandlerOnMouseOut);
                i.scrollBarHandler_sdo.screen.addEventListener("mousedown", i.scrollBarHandlerOnMouseDown)
            } else if (i.screen.attachEvent) {
                i.scrollBarHandler_sdo.screen.attachEvent("onmouseover", i.scrollBarHandlerOnMouseOver);
                i.scrollBarHandler_sdo.screen.attachEvent("onmouseout", i.scrollBarHandlerOnMouseOut);
                i.scrollBarHandler_sdo.screen.attachEvent("onmousedown", i.scrollBarHandlerOnMouseDown)
            }
            i.scrollBar_do.addChild(i.scrollBarHandler_sdo)
        };
        i.scrollBarHandlerOnMouseOver = function () {
            TweenMax.to(i.scrollBarHandler_sdo, .2, {
                alpha: 1,
                w: 10
            });
            TweenMax.to(i.scrollBarTrack_sdo, .2, {
                alpha: .4,
                w: 10
            });
            TweenMax.to(i.scrollBar_do, .2, {
                x: i.mainContentHolderWidth - i.scrollBarWidth - 6
            })
        };
        i.scrollBarHandlerOnMouseOut = function () {
            if (i.isDragging_bl) return;
            TweenMax.to(i.scrollBarHandler_sdo, .3, {
                alpha: .5,
                w: i.scrollBarWidth
            });
            TweenMax.to(i.scrollBarTrack_sdo, .3, {
                alpha: 0,
                w: i.scrollBarWidth
            });
            TweenMax.to(i.scrollBar_do, .3, {
                x: i.mainContentHolderWidth - i.scrollBarWidth - 2
            })
        };
        i.scrollBarHandlerOnMouseDown = function (t) {
            if (!i.allowToScroll_bl) return;
            var n = FWDUtils.getViewportMouseCoordinates(t);
            i.isDragging_bl = true;
            i.yPositionOnPress = i.scrollBarHandler_sdo.getY();
            i.lastPresedY = n.screenY;
            if (e.addEventListener) {
                e.addEventListener("mousemove", i.scrollBarHandlerMoveHandler);
                e.addEventListener("mouseup", i.scrollBarHandlerEndHandler)
            } else if (document.attachEvent) {
                document.attachEvent("onmousemove", i.scrollBarHandlerMoveHandler);
                document.attachEvent("onmouseup", i.scrollBarHandlerEndHandler)
            }
        };
        i.scrollBarHandlerMoveHandler = function (e) {
            if (e.preventDefault) e.preventDefault();
            var t = FWDUtils.getViewportMouseCoordinates(e);
            i.scrollBarHandlerFinalY = Math.round(i.yPositionOnPress + t.screenY - i.lastPresedY);
            if (i.scrollBarHandlerFinalY >= i.scrollBarHeight - i.scrollBarHandlerHeight) {
                i.scrollBarHandlerFinalY = i.scrollBarHeight - i.scrollBarHandlerHeight
            }
            if (i.scrollBarHandlerFinalY <= 0) i.scrollBarHandlerFinalY = 0;
            i.scrollBarHandler_sdo.setY(i.scrollBarHandlerFinalY);
            i.updatePCHandler(true)
        };
        i.scrollBarHandlerEndHandler = function (t) {
            var n = FWDUtils.getViewportMouseCoordinates(t);
            i.isDragging_bl = false;
            if (!FWDUtils.hitTest(i.scrollBarHandler_sdo.screen, n.screenX, n.screenY)) {
                i.scrollBarHandlerOnMouseOut()
            }
            if (e.removeEventListener) {
                e.removeEventListener("mousemove", i.scrollBarHandlerMoveHandler);
                e.removeEventListener("mouseup", i.scrollBarHandlerEndHandler)
            } else if (document.detachEvent) {
                document.detachEvent("onmousemove", i.scrollBarHandlerMoveHandler);
                document.detachEvent("onmouseup", i.scrollBarHandlerEndHandler)
            }
        };
        i.updatePCHandler = function (e) {
            var t;
            var n;
            n = i.scrollBarHandlerFinalY / (i.scrollBarHeight - i.scrollBarHandlerHeight);
            if (n == "Infinity") n = 0;
            if (n >= 1) n = 1;
            if (i.isDragging_bl) {
                i.contentFinalY = parseInt(n * (i.stageHeight - i.contentHolderHeight))
            } else {
                if (i.scrollBarHandler_sdo.getY() < 0) {
                    i.scrollBarHandler_sdo.setY(0)
                } else if (i.scrollBarHandler_sdo.getY() > i.scrollBarHeight - i.scrollBarHandlerHeight) {
                    i.scrollBarHandler_sdo.setY(i.scrollBarHeight - i.scrollBarHandlerHeight)
                }
                t = i.scrollBarHandler_sdo.getY() / (i.scrollBarHeight - i.scrollBarHandlerHeight);
                if (isNaN(t)) t = 0;
                if (i.stageHeight > i.contentHolderHeight) {
                    i.contentFinalY = 0
                } else {
                    i.contentFinalY = Math.round(t * (i.scrollBarHeight - i.scrollBarHandlerHeight));
                    i.contentFinalY = Math.round(t * (i.stageHeight - i.contentHolderHeight))
                }
            } if (e) {
                TweenMax.to(i.contentHolder_sdo, .3, {
                    y: Math.round(i.contentFinalY)
                })
            } else {
                i.contentHolder_sdo.setY(Math.round(i.contentFinalY))
            }
        };
        i.addMouseWheelSupport = function () {
            if (e.addEventListener) {
                i.screen.addEventListener("mousewheel", i.mouseWheelHandler);
                i.screen.addEventListener("DOMMouseScroll", i.mouseWheelHandler)
            } else if (document.attachEvent) {
                i.screen.attachEvent("onmousewheel", i.mouseWheelHandler)
            }
        };
        this.mouseWheelHandler = function (e) {
            if (!i.isShowed_bl) return;
            if (i.isDragging_bl) return;
            if (i.stageHeight > i.contentHolderHeight) return;
            var t = i.stageHeight / i.contentHolderHeight;
            var n = e.detail || e.wheelDelta;
            if (e.wheelDelta) n *= -1;
            if (FWDUtils.isOpera) n *= -1;
            if (n > 0) {
                i.scrollBarHandler_sdo.setY(i.scrollBarHandler_sdo.getY() + 45 * t)
            } else if (n < 0) {
                i.scrollBarHandler_sdo.setY(i.scrollBarHandler_sdo.getY() - 45 * t)
            }
            i.updatePCHandler(true);
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
            return
        };
        i.setupMobileScrollbar = function () {
            if (i.hasPointerEvent_bl) {
                i.screen.addEventListener("MSPointerDown", i.scrollBarTouchStartHandler)
            } else {
                i.screen.addEventListener("touchstart", i.scrollBarTouchStartHandler)
            }
        };
        i.scrollBarTouchStartHandler = function (t) {
            if (!i.allowToScroll_bl) return;
            var n = FWDUtils.getViewportMouseCoordinates(t);
            i.isDragging_bl = true;
            i.lastPresedY = n.screenY;
            if (i.hasPointerEvent_bl) {
                e.addEventListener("MSPointerUp", i.scrollBarTouchEndHandler);
                e.addEventListener("MSPointerMove", i.scrollBarTouchMoveHandler)
            } else {
                e.addEventListener("touchend", i.scrollBarTouchEndHandler);
                e.addEventListener("touchmove", i.scrollBarTouchMoveHandler)
            }
        };
        i.scrollBarTouchMoveHandler = function (e) {
            if (e.preventDefault) e.preventDefault();
            var t = FWDUtils.getViewportMouseCoordinates(e);
            var n = t.screenY - i.lastPresedY;
            i.contentFinalY += n;
            i.contentFinalY = Math.round(i.contentFinalY);
            i.contentHolder_sdo.setY(i.contentFinalY);
            i.lastPresedY = t.screenY;
            i.vy = n * 2
        };
        i.scrollBarTouchEndHandler = function (t) {
            i.isDragging_bl = false;
            if (i.hasPointerEvent_bl) {
                e.removeEventListener("MSPointerUp", i.scrollBarTouchEndHandler);
                e.removeEventListener("MSPointerMove", i.scrollBarTouchMoveHandler)
            } else {
                e.removeEventListener("touchend", i.scrollBarTouchEndHandler);
                e.removeEventListener("touchmove", i.scrollBarTouchMoveHandler)
            }
        };
        i.updateMobileScrollBar = function (e) {
            if (!i.isDragging_bl) {
                i.vy *= i.friction;
                i.contentFinalY += i.vy;
                if (i.contentFinalY > 0) {
                    i.vy2 = (0 - i.contentFinalY) * .3;
                    i.vy *= i.friction;
                    i.contentFinalY += i.vy2
                } else if (i.contentFinalY < i.mainContentHolderHeight - i.contentHolderHeight) {
                    i.vy2 = (i.mainContentHolderHeight - i.contentHolderHeight - i.contentFinalY) * .3;
                    i.vy *= i.friction;
                    i.contentFinalY += i.vy2
                }
                i.contentHolder_sdo.setY(Math.round(i.contentFinalY))
            }
        };
        i.updateMobileScrollBarWithoutAnimation = function () {
            if (i.contentFinalY > 0) {
                i.contentFinalY = 0
            } else if (i.contentFinalY < i.mainContentHolderHeight - i.contentHolderHeight) {
                i.contentFinalY = i.mainContentHolderHeight - i.contentHolderHeight
            }
            i.contentHolder_sdo.setY(Math.round(i.contentFinalY))
        };
        i.activateScrollBar = function () {
            if (i.isMobile_bl) {
                i.updateMobileScrollBarId_int = setInterval(i.updateMobileScrollBar, 16)
            }
        };
        i.show = function (e) {
            if (i.isShowed_bl) return;
            i.isShowed_bl = true;
            i.resizeAndPosition();
            i.setText(e);
            i.activateScrollBar();
            if (FWDUtils.isMobile) {
                TweenMax.to(i.background_sdo, .8, {
                    alpha: i.backgroundOpacity,
                    delay: .2
                });
                i.showOrHideWithDelayId_to = setTimeout(i.showWithDelay, 1800)
            } else {
                TweenMax.to(i.background_sdo, .6, {
                    alpha: i.backgroundOpacity
                });
                i.showOrHideWithDelayId_to = setTimeout(i.showWithDelay, 600)
            }
            i.dispatchEvent(t.SHOW_START)
        };
        i.showWithDelay = function () {
            i.dumyHolder_do.setX(0);
            if (i.scrollBarHandler_sdo) i.scrollBarHandler_sdo.setVisible(true);
            i.mainContentHolder_do.setY(-i.mainContentHolderHeight);
            TweenMax.to(i.mainContentHolder_do, .8, {
                y: i.mainContentFinalY,
                ease: Expo.easeInOut
            })
        };
        i.hide = function (e, t) {
            if (!i.isShowed_bl && !t) return;
            TweenMax.killTweensOf(i.background_sdo);
            if (e) {
                TweenMax.to(i.mainContentHolder_do, .8, {
                    y: i.stageHeight,
                    ease: Expo.easeInOut
                });
                i.showOrHideWithDelayId_to = setTimeout(i.hideWithDelay, 800)
            } else {
                i.dumyHolder_do.setX(-3e3);
                if (i.scrollBarHandler_sdo) i.scrollBarHandler_sdo.setVisible(false);
                i.background_sdo.setAlpha(0)
            }
            clearInterval(i.updateMobileScrollBarId_int);
            i.isShowed_bl = false
        };
        i.hideWithDelay = function () {
            i.contentHolder_sdo.setInnerHTML("");
            TweenMax.to(i.background_sdo, .6, {
                alpha: 0
            });
            i.hideCompleteId_to = setTimeout(i.hideWithDelayComplete, 600)
        };
        i.hideWithDelayComplete = function () {
            i.contentFinalY = 0;
            if (i.scrollBarHandler_sdo) i.scrollBarHandler_sdo.setY(0);
            i.dispatchEvent(t.HIDE_COMPLETE)
        };
        i.cleanMainEvents = function () {
            if (i.screen.removeEventListener) {
                if (i.scrollBarHandler_sdo) {
                    i.scrollBarHandler_sdo.screen.removeEventListener("mouseover", i.scrollBarHandlerOnMouseOver);
                    i.scrollBarHandler_sdo.screen.removeEventListener("mouseout", i.scrollBarHandlerOnMouseOut);
                    i.scrollBarHandler_sdo.screen.removeEventListener("mousedown", i.scrollBarHandlerOnMouseDown)
                }
                e.removeEventListener("mousemove", i.scrollBarHandlerMoveHandler);
                e.removeEventListener("mouseup", i.scrollBarHandlerEndHandler);
                i.screen.removeEventListener("mousewheel", i.mouseWheelHandler);
                i.screen.removeEventListener("DOMMouseScroll", i.mouseWheelHandler);
                i.screen.addEventListener("MSPointerDown", i.scrollBarTouchStartHandler);
                i.screen.addEventListener("touchstart", i.scrollBarTouchStartHandler);
                e.removeEventListener("MSPointerUp", i.scrollBarTouchEndHandler);
                e.removeEventListener("MSPointerMove", i.scrollBarTouchMoveHandler);
                e.removeEventListener("touchend", i.scrollBarTouchEndHandler);
                e.removeEventListener("touchmove", i.scrollBarTouchMoveHandler)
            } else if (i.screen.detachEvent) {
                i.scrollBarHandler_sdo.screen.detachEvent("onmouseover", i.scrollBarHandlerOnMouseOver);
                i.scrollBarHandler_sdo.screen.detachEvent("onmouseout", i.scrollBarHandlerOnMouseOut);
                i.scrollBarHandler_sdo.screen.detachEvent("onmousedown", i.scrollBarHandlerOnMouseDown);
                document.detachEvent("onmousemove", i.scrollBarHandlerMoveHandler);
                document.detachEvent("onmouseup", i.scrollBarHandlerEndHandler);
                i.screen.detachEvent("onmousewheel", i.mouseWheelHandler)
            }
            clearTimeout(i.hideWithDelayId_do);
            clearTimeout(i.showOrHideWithDelayId_to);
            clearTimeout(i.hideCompleteId_to);
            clearInterval(i.updateMobileScrollBarId_int)
        };
        i.destroy = function () {
            i.cleanMainEvents();
            if (i.scrollBar_do) {
                TweenMax.killTweensOf(i.scrollBar_do);
                TweenMax.killTweensOf(i.scrollBarHandler_sdo);
                TweenMax.killTweensOf(i.scrollBarTrack_sdo);
                i.scrollBar_do.destroy();
                i.scrollBarHandler_sdo.destroy();
                i.scrollBarTrack_sdo.destroy()
            }
            TweenMax.killTweensOf(i.contentHolder_sdo);
            i.contentHolder_sdo.destroy();
            TweenMax.killTweensOf(i.background_sdo);
            i.background_sdo.destroy();
            TweenMax.killTweensOf(i.mainContentHolder_do);
            i.mainContentHolder_do.destroy();
            i.close_do.destroy();
            i.infoWindowCloseNormal_img = null;
            i.infoWindowCloseSelected_img = null;
            i.close_do = null;
            i.background_sdo = null;
            i.mainContentHolder_do = null;
            i.contentHolder_sdo = null;
            i.scrollBar_do = null;
            i.scrollBarTrack_sdo = null;
            i.scrollBarHandler_sdo = null;
            i.mainBackgroundColor_str = null;
            i.scrollBarHandlerColor = null;
            i.scrollBarTrackColor = null;
            i.scrollBarTrackOpacity = null;
            n = null;
            r = null;
            i.setInnerHTML("");
            s.destroy();
            i = null;
            s = null;
            t.prototype = null
        };
        i.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.HIDE_COMPLETE = "hideComplete";
    t.SHOW_START = "showStart";
    t.prototype = null;
    e.FWDDescriptionWindow = t
})(window);
(function (e) {
    var t = function (e, t, n, r) {
        var i = this;
        i.listeners = {
            events_ar: []
        };
        if (e == "div" || e == "img" || e == "canvas") {
            i.type = e
        } else {
            throw Error("Type is not valid! " + e)
        }
        this.children_ar = [];
        this.style;
        this.screen;
        this.transform;
        this.position = t || "absolute";
        this.overflow = n || "hidden";
        this.display = r || "inline-block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDUtils.hasTransform2d;
        if (FWDUtils.isIE || FWDUtils.isFirefox) i.hasTransform3d_bl = false;
        this.hasBeenSetSelectable_bl = false;
        i.init = function () {
            i.setScreen()
        };
        i.getTransform = function () {
            var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
            var t;
            while (t = e.shift()) {
                if (typeof i.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return false
        };
        i.getOpacityType = function () {
            var e;
            if (typeof i.screen.style.opacity != "undefined") {
                e = "opacity"
            } else {
                e = "filter"
            }
            return e
        };
        i.setScreen = function (e) {
            if (i.type == "img" && e) {
                i.screen = e;
                i.setMainProperties()
            } else {
                i.screen = document.createElement(i.type);
                i.setMainProperties()
            }
        };
        i.setMainProperties = function () {
            i.transform = i.getTransform();
            i.setPosition(i.position);
            i.setDisplay(i.display);
            i.setOverflow(i.overflow);
            i.opacityType = i.getOpacityType();
            if (i.opacityType == "opacity") i.isHtml5_bl = true;
            if (i.opacityType == "filter") i.screen.style.filter = "inherit";
            i.screen.style.left = "0px";
            i.screen.style.top = "0px";
            i.screen.style.margin = "0px";
            i.screen.style.padding = "0px";
            i.screen.style.maxWidth = "none";
            i.screen.style.maxHeight = "none";
            i.screen.style.border = "none";
            i.screen.style.lineHeight = "1";
            i.screen.style.backgroundColor = "transparent";
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden";
            if (e == "img") {
                i.setWidth(i.screen.width);
                i.setHeight(i.screen.height)
            }
        };
        i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible";
            i.screen.style.webkitBackfaceVisibility = "visible";
            i.screen.style.MozBackfaceVisibility = "visible"
        };
        i.setSelectable = function (e) {
            if (!e) {
                i.screen.style.userSelect = "none";
                i.screen.style.MozUserSelect = "none";
                i.screen.style.webkitUserSelect = "none";
                i.screen.style.khtmlUserSelect = "none";
                i.screen.style.oUserSelect = "none";
                i.screen.style.msUserSelect = "none";
                i.screen.msUserSelect = "none";
                i.screen.ondragstart = function (e) {
                    return false
                };
                i.screen.onselectstart = function () {
                    return false
                };
                i.screen.ontouchstart = function () {
                    return false
                };
                i.screen.style.webkitTouchCallout = "none";
                i.hasBeenSetSelectable_bl = true
            }
        };
        i.getScreen = function () {
            return i.screen
        };
        i.setVisible = function (e) {
            i.visible = e;
            if (i.visible == true) {
                i.screen.style.visibility = "visible"
            } else {
                i.screen.style.visibility = "hidden"
            }
        };
        i.getVisible = function () {
            return i.visible
        };
        i.setResizableSizeAfterParent = function () {
            i.screen.style.width = "100%";
            i.screen.style.height = "100%"
        };
        i.getStyle = function () {
            return i.screen.style
        };
        i.setOverflow = function (e) {
            i.overflow = e;
            i.screen.style.overflow = i.overflow
        };
        i.setPosition = function (e) {
            i.position = e;
            i.screen.style.position = i.position
        };
        i.setDisplay = function (e) {
            i.display = e;
            i.screen.style.display = i.display
        };
        i.setButtonMode = function (e) {
            i.buttonMode = e;
            if (i.buttonMode == true) {
                i.screen.style.cursor = "pointer"
            } else {
                i.screen.style.cursor = "default"
            }
        };
        i.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        };
        i.setInnerHTML = function (e) {
            i.innerHTML = e;
            i.screen.innerHTML = i.innerHTML
        };
        i.getInnerHTML = function () {
            return i.innerHTML
        };
        i.getRect = function () {
            return i.screen.getBoundingClientRect()
        };
        i.setAlpha = function (e) {
            i.alpha = e;
            if (i.opacityType == "opacity") {
                i.screen.style.opacity = i.alpha
            } else if (i.opacityType == "filter") {
                i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
            }
        };
        i.getAlpha = function () {
            return i.alpha
        };
        i.getRect = function () {
            return i.screen.getBoundingClientRect()
        };
        i.getGlobalX = function () {
            return i.getRect().left
        };
        i.getGlobalY = function () {
            return i.getRect().top
        };
        i.setX = function (e) {
            i.x = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.left = i.x + "px"
            }
        };
        i.getX = function () {
            return i.x
        };
        i.setY = function (e) {
            i.y = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.top = i.y + "px"
            }
        };
        i.getY = function () {
            return i.y
        };
        i.setWidth = function (e) {
            i.w = e;
            if (i.type == "img") {
                i.screen.width = i.w
            } else {
                i.screen.style.width = i.w + "px"
            }
        };
        i.getWidth = function () {
            if (i.type == "div") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            } else if (i.type == "img") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                if (i.screen.width != 0) return i.screen.width;
                return i._w
            } else if (i.type == "canvas") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            }
        };
        i.setHeight = function (e) {
            i.h = e;
            if (i.type == "img") {
                i.screen.height = i.h
            } else {
                i.screen.style.height = i.h + "px"
            }
        };
        i.getHeight = function () {
            if (i.type == "div") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            } else if (i.type == "img") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                if (i.screen.height != 0) return i.screen.height;
                return i.h
            } else if (i.type == "canvas") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            }
        };
        i.addChild = function (e) {
            if (i.contains(e)) {
                i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1);
                i.children_ar.push(e);
                i.screen.appendChild(e.screen)
            } else {
                i.children_ar.push(e);
                i.screen.appendChild(e.screen)
            }
        };
        i.removeChild = function (e) {
            if (i.contains(e)) {
                i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1);
                i.screen.removeChild(e.screen)
            } else {
                throw Error("##removeChild()## Child dose't exist, it can't be removed!")
            }
        };
        i.contains = function (e) {
            if (FWDUtils.indexOfArray(i.children_ar, e) == -1) {
                return false
            } else {
                return true
            }
        };
        i.addChildAt = function (e, t) {
            if (i.getNumChildren() == 0) {
                i.children_ar.push(e);
                i.screen.appendChild(e.screen)
            } else if (t == 1) {
                i.screen.insertBefore(e.screen, i.children_ar[0].screen);
                i.screen.insertBefore(i.children_ar[0].screen, e.screen);
                if (i.contains(e)) {
                    i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1, e)
                } else {
                    i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 0, e)
                }
            } else {
                if (t < 0 || t > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                i.screen.insertBefore(e.screen, i.children_ar[t].screen);
                if (i.contains(e)) {
                    i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 1, e)
                } else {
                    i.children_ar.splice(FWDUtils.indexOfArray(i.children_ar, e), 0, e)
                }
            }
        };
        i.getChildAt = function (e) {
            if (e < 0 || e > i.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (i.getNumChildren() == 0) throw Errror("##getChildAt## Child dose not exist!");
            return i.children_ar[e]
        };
        i.removeChildAtZero = function () {
            i.screen.removeChild(i.children_ar[0].screen);
            i.children_ar.shift()
        };
        i.getNumChildren = function () {
            return i.children_ar.length
        };
        i.addListener = function (e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function.");
            var n = {};
            n.type = e;
            n.listener = t;
            n.target = this;
            this.listeners.events_ar.push(n)
        };
        i.dispatchEvent = function (e, t) {
            if (this.listeners == null) return;
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                    if (t) {
                        for (var i in t) {
                            this.listeners.events_ar[n][i] = t[i]
                        }
                    }
                    this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n])
                }
            }
        };
        i.removeListener = function (e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function." + e);
            for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                    this.listeners.events_ar.splice(n, 1);
                    break
                }
            }
        };
        i.disposeImage = function () {
            if (i.type == "img") i.screen.src = null
        };
        i.destroy = function () {
            if (i.hasBeenSetSelectable_bl) {
                i.screen.ondragstart = null;
                i.screen.onselectstart = null;
                i.screen.ontouchstart = null
            }
            i.listeners = [];
            i.listeners = null;
            i.children_ar = [];
            i.children_ar = null;
            i.style = null;
            i.screen = null;
            i.transform = null;
            i.position = null;
            i.overflow = null;
            i.display = null;
            i.visible = null;
            i.buttonMode = null;
            i.x = null;
            i.y = null;
            i.w = null;
            i.h = null;
            i.rect = null;
            i.alpha = null;
            i.innerHTML = null;
            i.opacityType = null;
            i.isHtml5_bl = null;
            i.hasTransform3d_bl = null;
            i.hasTransform2d_bl = null;
            i = null
        };
        i.init()
    };
    e.FWDDisplayObject = t
})(window);
(function () {
    var e = function () {
        this.listeners = {
            events_ar: []
        };
        this.addListener = function (e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function.");
            var n = {};
            n.type = e;
            n.listener = t;
            n.target = this;
            this.listeners.events_ar.push(n)
        };
        this.dispatchEvent = function (e, t) {
            if (this.listeners == null) return;
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                    if (t) {
                        for (var i in t) {
                            this.listeners.events_ar[n][i] = t[i]
                        }
                    }
                    this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n])
                }
            }
        };
        this.removeListener = function (e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function." + e);
            for (var n = 0, r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                    this.listeners.events_ar.splice(n, 1);
                    break
                }
            }
        };
        this.destroy = function () {
            this.listeners = null;
            this.addListener = null;
            this.dispatchEvent = null;
            this.removeListener = null
        }
    };
    window.FWDEventDispatcher = e
})(window);
(function (e) {
    var t = function (e, n, r) {
        var i = this;
        var s = t.prototype;
        this.screenToTest = n;
        this.hideDelay = r;
        this.globalX = 0;
        this.globalY = 0;
        this.currentTime;
        this.checkIntervalId_int;
        this.dispatchOnceShow_bl = true;
        this.dispatchOnceHide_bl = false;
        this.isMobile_bl = e;
        this.isStopped_bl = true;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        i.init = function () {};
        i.start = function () {
            i.currentTime = (new Date).getTime();
            i.checkIntervalId_int = setInterval(i.update, 100);
            i.addMouseOrTouchCheck();
            i.isStopped_bl = false
        };
        i.stop = function () {
            clearInterval(i.checkIntervalId_int);
            i.isStopped_bl = true;
            i.removeMouseOrTouchCheck()
        };
        i.addMouseOrTouchCheck = function () {
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    i.screenToTest.screen.addEventListener("MSPointerDown", i.onMouseOrTouchUpdate);
                    i.screenToTest.screen.addEventListener("MSPointerMove", i.onMouseOrTouchUpdate)
                } else {
                    i.screenToTest.screen.addEventListener("touchstart", i.onMouseOrTouchUpdate)
                }
            } else if (i.screenToTest.screen.addEventListener) {
                i.screenToTest.screen.addEventListener("mousemove", i.onMouseOrTouchUpdate)
            } else if (i.screenToTest.screen.attachEvent) {
                i.screenToTest.screen.attachEvent("onmousemove", i.onMouseOrTouchUpdate)
            }
        };
        i.removeMouseOrTouchCheck = function () {
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    i.screenToTest.screen.removeEventListener("MSPointerDown", i.onMouseOrTouchUpdate);
                    i.screenToTest.screen.removeEventListener("MSPointerMove", i.onMouseOrTouchUpdate)
                } else {
                    i.screenToTest.screen.removeEventListener("touchstart", i.onMouseOrTouchUpdate)
                }
            } else if (i.screenToTest.screen.removeEventListener) {
                i.screenToTest.screen.removeEventListener("mousemove", i.onMouseOrTouchUpdate)
            } else if (i.screenToTest.screen.detachEvent) {
                i.screenToTest.screen.detachEvent("onmousemove", i.onMouseOrTouchUpdate)
            }
        };
        i.onMouseOrTouchUpdate = function (e) {
            var t = FWDUtils.getViewportMouseCoordinates(e);
            if (i.globalX == t.screenX && i.globalY == t.screenY) return;
            i.currentTime = (new Date).getTime();
            i.globalX = t.screenX;
            i.globalY = t.screenY
        };
        i.update = function (e) {
            if ((new Date).getTime() > i.currentTime + i.hideDelay) {
                if (i.dispatchOnceShow_bl) {
                    i.dispatchEvent(t.HIDE);
                    i.dispatchOnceHide_bl = true;
                    i.dispatchOnceShow_bl = false
                }
            } else {
                if (i.dispatchOnceHide_bl) {
                    i.dispatchEvent(t.SHOW);
                    i.dispatchOnceHide_bl = false;
                    i.dispatchOnceShow_bl = true
                }
            }
        };
        i.reset = function () {
            i.currentTime = (new Date).getTime();
            i.dispatchEvent(t.SHOW)
        };
        i.destroy = function () {
            i.removeMouseOrTouchCheck();
            clearInterval(i.checkIntervalId_int);
            i.screenToTest = null;
            n = null;
            i.init = null;
            i.start = null;
            i.stop = null;
            i.addMouseOrTouchCheck = null;
            i.removeMouseOrTouchCheck = null;
            i.onMouseOrTouchUpdate = null;
            i.update = null;
            i.reset = null;
            i.destroy = null;
            s.destroy();
            s = null;
            i = null;
            t.prototype = null
        };
        i.init()
    };
    t.HIDE = "hide";
    t.SHOW = "show";
    t.setPrototype = function () {
        t.prototype = new FWDEventDispatcher
    };
    e.FWDHider = t
})(window);
(function () {
    var e = function (t, n) {
        var r = this;
        var i = e.prototype;
        this.toolTipLeft_img = t.toolTipLeft_img;
        this.toolTipPointer_img = t.toolTipPointer_img;
        this.playListData_ar = t.playListData_ar;
        this.images_ar = t.images_ar;
        this.smallDos_ar = [];
        this.markers_ar = [];
        this.markersList_ar = t.markersList_ar;
        this.markersPosition_ar = t.markersPosition_ar;
        this.largeImagesPaths_ar = t.largeImagesPaths_ar;
        this.curMarker_do;
        this.markersToolTip_do;
        this.markersToolTipWindow_do;
        this.hider;
        this.prevSmall_sdo;
        this.largeImage_img;
        this.dumy_sdo;
        this.mainImagesHolder_do;
        this.smallImage_sdo;
        this.largeImage_sdo;
        this.left_sdo;
        this.top_sdo;
        this.right_sdo;
        this.bottom_sdo;
        this.markersPositionInfo_sdo;
        this.handMovePath_str = t.handMovePath_str;
        this.backgroundColor_str = n.backgroundColor_str;
        this.draggingMode_str = t.startDraggingMode_str;
        this.controllerPosition_str = t.controllerPosition_str;
        this.buttonToolTipLeft_str = t.buttonToolTipLeft_str;
        this.buttonToolTipMiddle_str = t.buttonToolTipMiddle_str;
        this.buttonToolTipRight_str = t.buttonToolTipRight_str;
        this.buttonToolTipFontColor_str = t.buttonToolTipFontColor_str;
        this.buttonToolTipBottomPointer_str = t.buttonToolTipBottomPointer_str;
        this.buttonToolTipTopPointer_str = t.buttonToolTipTopPointer_str;
        this.lastMarkerId_str;
        this.swipeDirection_str;
        this.curId = t.startAtImage;
        this.prevId = 1e3;
        this.curLargeImageId = 1e3;
        this.totalImages = t.totalImages;
        this.stageWidth;
        this.stageHeight;
        this.smallestPossibleScale;
        this.currentScale = 1;
        this.prevScale = 0;
        this.percentZoomed = .1;
        this.imageWidth = t.imageWidth;
        this.imageHeight = t.imageHeight;
        this.zoomFactor = t.zoomFactor;
        this.zoomSpeed = .1;
        this.finalX = 0;
        this.finalY = 0;
        this.xPositionOnPress;
        this.yPositionOnPress;
        this.lastPresedX = 0;
        this.lastPresedY = 0;
        this.lastPresedX2 = 0;
        this.lastPresedY2 = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.controllerHeight = t.controllerHeight;
        this.rotationSpeed = Math.abs(-1.1 + t.dragRotationSpeed);
        this.startScaleForMobileZoom;
        this.totalMarkers;
        this.globalX;
        this.globalY;
        this.markerToolTipOffsetY = t.markerToolTipOffsetY;
        this.toolTipWindowMaxWidth = t.toolTipWindowMaxWidth;
        this.swipeDragDist = 0;
        this.currentDist = 0;
        this.spinDist = 10;
        this.dragAndSpinSpeed = t.dragAndSpinSpeed;
        this.tweenDone_to;
        this.removeSmallSDOId_to;
        this.setAlphaWithDelayId_to;
        this.hideToolTipWindowId_to;
        this.addHideToolTipWindowTestWithDelayId_to;
        this.showToolTipWindoId_to;
        this.showMarkerToolTipId_to;
        this.dragAndSpinId_int;
        this.allImagesAreLoaded_bl = false;
        this.allowToDragHoriz_bl = false;
        this.allowToDragVert_bl = false;
        this.isTweening_bl = false;
        this.isDragging_bl = false;
        this.isRotatingFirstTime_bl = true;
        this.addCorrectionForWebKit_bl = t.addCorrectionForWebKit_bl;
        this.disablePanOrRotate_bl = false;
        this.useEntireScreenFor3dObject_bl = t.useEntireScreenFor3dObject_bl;
        this.stopRotationAtEnds_bl = t.stopRotationAtEnds_bl;
        this.isMobile_bl = t.isMobile_bl;
        this.isLargeImageLoaded_bl = false;
        this.showNavigator_bl = t.showNavigator_bl;
        this.showMarkers_bl = t.showMarkers_bl;
        this.isNavigatorShowed_bl = false;
        this.addImageFirstTimeOnActivate_bl = true;
        this.showMarkersInfo_bl = t.showMarkersInfo_bl;
        this.addDragAndSpinSupport_bl = t.addDragAndSpinSupport_bl;
        this.isMobile_bl = t.isMobile_bl;
        this.firstInteractionOccured_bl = false;
        this.isSwiping_bl = false;
        this.showLargeImageVersionOnZoom_bl = t.showLargeImageVersionOnZoom_bl;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        r.init = function () {
            if (r.controllerPosition_str == FWDController.POSITION_TOP && !r.useEntireScreenFor3dObject_bl) r.setY(r.controllerHeight);
            r.setupMainContiners();
            r.setupDumy();
            if (r.showMarkers_bl) {
                r.setupMarkers();
                if (!r.isMobile_bl || r.hasPointerEvent_bl) r.setupMarkersToolTip();
                r.setupMarkersToolTipWindow()
            }
        };
        r.setupHider = function (e) {
            r.hider = e
        };
        r.setupMainContiners = function () {
            r.setOverflow("visible");
            r.setBkColor(r.backgroundColor_str);
            r.largeImage_img = new Image;
            r.mainImagesHolder_do = new FWDDisplayObject("div", "absolute", "visible");
            r.smallImage_sdo = new FWDSimpleDisplayObject("img");
            r.largeImage_sdo = new FWDSimpleDisplayObject("img");
            r.addChild(r.mainImagesHolder_do);
            if (r.addCorrectionForWebKit_bl) r.setupCorrectionLinesForChrome()
        };
        r.setupCorrectionLinesForChrome = function () {
            r.left_sdo = new FWDSimpleDisplayObject("div");
            r.top_sdo = new FWDSimpleDisplayObject("div");
            r.right_sdo = new FWDSimpleDisplayObject("div");
            r.bottom_sdo = new FWDSimpleDisplayObject("div");
            r.left_sdo.setBkColor(r.backgroundColor_str);
            r.top_sdo.setBkColor(r.backgroundColor_str);
            r.right_sdo.setBkColor(r.backgroundColor_str);
            r.bottom_sdo.setBkColor(r.backgroundColor_str);
            r.left_sdo.setWidth(1);
            r.top_sdo.setHeight(1);
            r.right_sdo.setWidth(2);
            r.bottom_sdo.setHeight(2);
            r.addChild(r.left_sdo);
            r.addChild(r.top_sdo);
            r.addChild(r.right_sdo);
            r.addChild(r.bottom_sdo)
        };
        r.resizeAndPositionCorrectionLines = function (e) {
            TweenMax.killTweensOf(r.left_sdo);
            TweenMax.killTweensOf(r.top_sdo);
            TweenMax.killTweensOf(r.right_sdo);
            TweenMax.killTweensOf(r.bottom_sdo);
            if (e) {
                TweenMax.to(r.left_sdo, .2, {
                    x: r.finalX,
                    y: r.finalY,
                    h: r.finalHeight
                });
                TweenMax.to(r.top_sdo, .2, {
                    x: r.finalX,
                    y: r.finalY,
                    w: r.finalWidth
                });
                TweenMax.to(r.right_sdo, .2, {
                    x: r.finalX + r.finalWidth - 2,
                    y: r.finalY,
                    h: r.finalHeight
                });
                TweenMax.to(r.bottom_sdo, .2, {
                    x: r.finalX,
                    y: r.finalY + r.finalHeight - 2,
                    w: r.finalWidth
                })
            } else {
                r.left_sdo.setX(r.finalX - 1);
                r.left_sdo.setY(r.finalY);
                r.left_sdo.setHeight(r.finalHeight);
                r.top_sdo.setX(r.finalX);
                r.top_sdo.setY(r.finalY - 1);
                r.top_sdo.setWidth(r.finalWidth);
                r.right_sdo.setX(r.finalX + r.finalWidth - 2);
                r.right_sdo.setY(r.finalY);
                r.right_sdo.setHeight(r.finalHeight);
                r.bottom_sdo.setX(r.finalX);
                r.bottom_sdo.setY(r.finalY + r.finalHeight - 2);
                r.bottom_sdo.setWidth(r.finalWidth)
            }
        };
        r.resizeAndPosition = function (e) {
            if (r.stageWidth == n.stageWidth && r.stageHeight == n.stageHeight - r.controllerHeight) return;
            r.stageWidth = n.stageWidth;
            if (r.useEntireScreenFor3dObject_bl) {
                r.stageHeight = n.stageHeight
            } else {
                r.stageHeight = n.stageHeight - r.controllerHeight
            }
            r.setWidth(r.stageWidth);
            r.setHeight(r.stageHeight);
            if (r.allImagesAreLoaded_bl) {
                r.resizeAndPositionAfterAllLoad();
                if (e) r.centerImage();
                if (r.showNavigator_bl) {
                    r.hideOrShowNavigator();
                    r.updateNavigator(false)
                }
                r.positionMarkers()
            } else {
                r.resiezeAndPositionIfNotAllImagesAreLoaded()
            }
        };
        r.resiezeAndPositionIfNotAllImagesAreLoaded = function () {
            var e = r.stageWidth / r.imageWidth;
            var t = r.stageHeight / r.imageHeight;
            var n;
            if (e < t) {
                n = e
            } else {
                n = t
            } if (n > 1) n = 1;
            r.currentScale = r.prevScale = r.smallestPossibleScale = n;
            r.finalWidth = Math.round(r.currentScale * r.imageWidth);
            r.finalHeight = Math.round(r.currentScale * r.imageHeight);
            r.finalX = Math.round((r.stageWidth - r.finalWidth) / 2);
            r.finalY = Math.round((r.stageHeight - r.finalHeight) / 2);
            r.resizeAndPositionSmallImage(false)
        };
        r.showLoadedImage = function (e) {
            r.smallImage_sdo = new FWDSimpleDisplayObject("img");
            r.smallImage_sdo.setScreen(r.images_ar[e]);
            if (FWDUtils.isAndroid) r.smallImage_sdo.setBackfaceVisibility();
            r.smallDos_ar[e] = r.smallImage_sdo;
            r.mainImagesHolder_do.addChild(r.smallImage_sdo);
            r.removeSmallSDOId_to = setTimeout(function () {
                if (r == null) return;
                if (e > 0) r.smallDos_ar[e - 1].setVisible(false)
            }, 40);
            r.resizeAndPosition();
            r.resiezeAndPositionIfNotAllImagesAreLoaded()
        };
        r.activate = function () {
            r.allImagesAreLoaded_bl = true;
            r.addSmallImage();
            r.addLargeImage();
            r.resizeAndPositionAfterAllLoad();
            r.addPannSupport();
            r.addRotationSupport();
            r.addPinchSupport();
            r.addMouseWheelSupport();
            r.showOrHideMarkers();
            r.positionMarkers(false);
            if (r.showMarkersInfo_bl) r.setupMarkersInfo()
        };
        r.setupDumy = function () {
            r.dumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) r.dumy_sdo.getStyle().background = "url('dumy')";
            if (!r.showMarkersInfo_bl) r.dumy_sdo.getStyle().cursor = "url(" + r.handMovePath_str + "), default";
            r.addChild(r.dumy_sdo)
        };
        r.addSmallImage = function () {
            if (r.curId == r.prevId) return;
            r.prevId = r.curId;
            r.curLargeImageId = 1e3;
            if (r.addImageFirstTimeOnActivate_bl) {
                r.removeSmallSDOId_to = setTimeout(function () {
                    if (r == null) return;
                    r.smallImage_sdo.setVisible(false);
                    r.smallImage_sdo = r.smallDos_ar[r.curId];
                    r.smallImage_sdo.setVisible(true);
                    r.resizeAndPositionAfterAllLoad()
                }, 40)
            }
            clearTimeout(r.setAlphaWithDelayId_to);
            if (r.largeImage_img) {
                r.largeImage_img.onload = null;
                r.largeImage_img.onerror = null;
                if (!FWDUtils.isIEAndLessThen9) r.largeImage_img.src = null
            }
            if (r.mainImagesHolder_do.contains(r.largeImage_sdo)) r.mainImagesHolder_do.removeChild(r.largeImage_sdo);
            if (!r.addImageFirstTimeOnActivate_bl) {
                r.smallImage_sdo.setVisible(false);
                r.smallImage_sdo = r.smallDos_ar[r.curId];
                r.smallImage_sdo.setVisible(true)
            }
            r.addImageFirstTimeOnActivate_bl = false
        };
        r.removeWithDelay = function () {
            while (r.mainImagesHolder_do.getNumChildren() > 1) {
                r.mainImagesHolder_do.removeChildAtZero(0)
            }
        };
        r.addLargeImage = function () {
            if (!r.showLargeImageVersionOnZoom_bl) return;
            if (r.currentScale <= 1) return;
            if (r.curLargeImageId == r.curId) return;
            r.isLargeImageLoaded_bl = false;
            r.curLargeImageId = r.curId;
            clearTimeout(r.setAlphaWithDelayId_to);
            if (r.mainImagesHolder_do.contains(r.largeImage_sdo)) r.mainImagesHolder_do.removeChild(r.largeImage_sdo);
            if (r.largeImage_img) {
                r.largeImage_img.onload = null;
                r.largeImage_img.onerror = null;
                if (!FWDUtils.isIEAndLessThen9) r.largeImage_img.src = null
            }
            r.largeImage_img.src = r.largeImagesPaths_ar[r.curId];
            r.largeImage_img.onload = r.largeImageLoadHandler;
            r.largeImage_img.onerror = r.largeImageErrorHandler;
            r.largeImage_sdo.setScreen(r.largeImage_img);
            r.largeImage_sdo.setAlpha(0);
            r.mainImagesHolder_do.addChild(r.largeImage_sdo)
        };
        r.largeImageErrorHandler = function () {
            var t = "The large image labeled <font color='#FFFFFF'>" + r.largeImagesPaths_ar[r.curId] + "</font> can't be loaded, make sure that the image exists and the path is correct!";
            r.dispatchEvent(e.LARGE_IMAGE_LOAD_ERROR, {
                error: t
            })
        };
        r.largeImageLoadHandler = function () {
            r.isLargeImageLoaded_bl = true;
            r.setAlphaWithDelayId_to = setTimeout(function () {
                r.largeImage_sdo.setAlpha(1)
            }, 100);
            r.largeImage_sdo.setWidth(r.finalWidth);
            r.largeImage_sdo.setHeight(r.finalHeight)
        };
        r.gotoImage = function () {
            if (r.stopRotationAtEnds_bl) {
                if (r.curId < 0) {
                    r.curId = 0
                } else if (r.curId > r.totalImages - 1) {
                    r.curId = r.totalImages - 1
                }
            } else {
                if (r.curId > r.totalImages - 1) {
                    r.curId = 0
                } else if (r.curId < 0) {
                    r.curId = r.totalImages - 1
                }
            }
            r.addSmallImage();
            r.resizeAndPositionAfterAllLoad();
            if (!r.isSwiping_bl) {
                r.showOrHideMarkers();
                r.positionMarkers()
            }
            r.dispatchEvent(e.ROTATE_UPDATE, {
                id: r.curId
            })
        };
        r.resizeAndPositionAfterAllLoad = function () {
            var e = r.stageWidth / r.imageWidth;
            var t = r.stageHeight / r.imageHeight;
            var n;
            if (e < t) {
                n = e
            } else {
                n = t
            }
            r.smallestPossibleScale = n;
            if (n >= 1) r.smallestPossibleScale = 1;
            if (r.currentScale <= 1) {
                if (e > t && r.finalHeight <= r.stageHeight) {
                    r.currentScale = r.smallestPossibleScale
                } else if (e < t && r.finalWidth <= r.stageWidth) {
                    r.currentScale = r.smallestPossibleScale
                }
            }
            r.finalWidth = Math.round(r.currentScale * r.imageWidth);
            r.finalHeight = Math.round(r.currentScale * r.imageHeight);
            r.setWidth(r.stageWidth);
            r.dumy_sdo.setWidth(r.stageWidth);
            if (r.useEntireScreenFor3dObject_bl) {
                r.setHeight(r.stageHeight);
                r.dumy_sdo.setHeight(r.stageHeight)
            } else {
                r.setHeight(r.stageHeight + r.controllerHeight);
                r.dumy_sdo.setHeight(r.stageHeight + r.controllerHeight)
            }
            r.checkXAndYBouds();
            r.resizeAndPositionSmallImage(false);
            r.resizeAndPositionLargeImage(false);
            if (r.addCorrectionForWebKit_bl) r.resizeAndPositionCorrectionLines(false);
            r.dispatchScrollBarUpdate(false)
        };
        r.resizeAndPositionSmallImage = function (t) {
            r.isTweening_bl = true;
            TweenMax.killTweensOf(r.mainImagesHolder_do);
            TweenMax.killTweensOf(r.smallImage_sdo);
            clearTimeout(r.tweenDone_to);
            if (t) {
                TweenMax.to(r.mainImagesHolder_do, .2, {
                    x: r.finalX,
                    y: r.finalY
                });
                TweenMax.to(r.smallImage_sdo, .2, {
                    w: r.finalWidth,
                    h: r.finalHeight
                });
                r.tweenDone_to = setTimeout(r.tweenDoneHandler, 200)
            } else {
                r.mainImagesHolder_do.setX(r.finalX);
                r.mainImagesHolder_do.setY(r.finalY);
                r.smallImage_sdo.setWidth(r.finalWidth);
                r.smallImage_sdo.setHeight(r.finalHeight);
                r.isTweening_bl = false;
                r.dispatchEvent(e.IMAGE_ZOOM_COMPLETE)
            }
        };
        r.resizeAndPositionLargeImage = function (e) {
            if (!r.showLargeImageVersionOnZoom_bl || !r.isLargeImageLoaded_bl) return;
            TweenMax.killTweensOf(r.largeImage_sdo);
            if (e) {
                TweenMax.to(r.largeImage_sdo, .2, {
                    w: r.finalWidth,
                    h: r.finalHeight
                })
            } else {
                r.largeImage_sdo.setWidth(r.finalWidth);
                r.largeImage_sdo.setHeight(r.finalHeight)
            }
        };
        r.tweenDoneHandler = function () {
            r.isTweening_bl = false;
            r.addLargeImage();
            r.resizeAndPositionLargeImage();
            r.dispatchEvent(e.IMAGE_ZOOM_COMPLETE)
        };
        r.checkXAndYBouds = function () {
            if (r.finalWidth <= r.stageWidth) {
                r.finalX = Math.round((r.stageWidth - r.finalWidth) / 2)
            } else if (r.finalWidth > r.stageWidth + 1) {
                r.allowToDragHoriz_bl = true;
                if (r.finalX > 0) {
                    r.finalX = 0
                } else if (r.finalX <= r.stageWidth - r.finalWidth + 1) {
                    r.finalX = r.stageWidth - r.finalWidth + 1
                }
            } else {
                r.allowToDragHoriz_bl = false
            } if (r.finalHeight <= r.stageHeight) {
                r.finalY = Math.round((r.stageHeight - r.finalHeight) / 2)
            } else if (r.finalHeight > r.stageHeight + 1) {
                r.allowToDragVert_bl = true;
                if (r.finalY > 0) {
                    r.finalY = 0
                } else if (r.finalY <= r.stageHeight - r.finalHeight) {
                    r.finalY = r.stageHeight - r.finalHeight
                }
            } else {
                r.allowToDragVert_bl = false
            }
        };
        r.zoomImage = function (e) {
            if (e) {
                r.finalWidth = Math.round(r.currentScale * r.imageWidth);
                r.finalHeight = Math.round(r.currentScale * r.imageHeight);
                r.finalX -= Math.round((r.mouseX - r.finalX) * (r.currentScale - r.prevScale) / r.prevScale);
                r.finalY -= Math.round((r.mouseY - r.finalY) * (r.currentScale - r.prevScale) / r.prevScale)
            }
            r.dispatchScrollBarUpdate(true);
            r.checkXAndYBouds();
            r.resizeAndPositionSmallImage(true);
            r.resizeAndPositionLargeImage(true);
            if (r.addCorrectionForWebKit_bl) r.resizeAndPositionCorrectionLines(true);
            if (r.showNavigator_bl) {
                r.hideOrShowNavigator();
                r.updateNavigator(true)
            }
            r.positionMarkers(true);
            r.prevScale = r.currentScale
        };
        r.addPinchSupport = function () {
            if (r.screen.addEventListener) {
                r.screen.addEventListener("gesturestart", this.gestureStartHandler);
                r.screen.addEventListener("gesturechange", this.gestureChangeHandler)
            }
        };
        r.gestureStartHandler = function (e) {
            r.startScaleForMobileZoom = 1
        };
        r.gestureChangeHandler = function (e) {
            e.preventDefault();
            if (r.disablePanOrRotate_bl) return;
            var t;
            if (e.scale > 1) {
                t = e.scale - r.startScaleForMobileZoom
            } else {
                t = -(r.startScaleForMobileZoom - e.scale)
            }
            r.startScaleForMobileZoom = 1;
            r.mouseX = Math.round(r.stageWidth / 2);
            r.mouseY = Math.round(r.stageHeight / 2);
            r.currentScale += t;
            r.startScaleForMobileZoom = e.scale;
            if (parseFloat(r.currentScale.toFixed(5)) <= parseFloat(r.smallestPossibleScale.toFixed(5))) {
                r.currentScale = r.smallestPossibleScale
            } else if (r.currentScale > r.zoomFactor) {
                r.currentScale = r.zoomFactor
            }
            r.zoomImage(true)
        };
        r.addPannSupport = function () {
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.dumy_sdo.screen.addEventListener("MSPointerDown", r.panStartHandler)
                } else {
                    r.dumy_sdo.screen.addEventListener("touchstart", r.panStartHandler)
                }
            } else if (r.screen.addEventListener) {
                r.dumy_sdo.screen.addEventListener("mousedown", r.panStartHandler)
            } else if (r.screen.attachEvent) {
                r.dumy_sdo.screen.attachEvent("onmousedown", r.panStartHandler)
            }
        };
        r.panStartHandler = function (t) {
            if (r.draggingMode_str != e.PAN || r.isTweening_bl || r.disablePanOrRotate_bl) return;
            if (t.preventDefault) t.preventDefault();
            if (r.finalWidth < r.stageWidth && r.finalHeight < r.stageHeight) return;
            if (!r.isMobile_bl || t.pointerType == t.MSPOINTER_TYPE_MOUSE) n.showPanDumy();
            var i = FWDUtils.getViewportMouseCoordinates(t);
            r.isDragging_bl = true;
            r.xPositionOnPress = r.mainImagesHolder_do.getX();
            r.yPositionOnPress = r.mainImagesHolder_do.getY();
            r.lastPresedX = i.screenX;
            r.lastPresedY = i.screenY;
            r.dispatchEvent(e.PAN_START);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerMove", r.panMoveHandler);
                    window.addEventListener("MSPointerUp", r.panEndHandler)
                } else {
                    window.addEventListener("touchmove", r.panMoveHandler);
                    window.addEventListener("touchend", r.panEndHandler)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mousemove", r.panMoveHandler);
                    window.addEventListener("mouseup", r.panEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", r.panMoveHandler);
                    document.attachEvent("onmouseup", r.panEndHandler)
                }
            }
        };
        r.panMoveHandler = function (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.touches && e.touches.length != 1 || r.disablePanOrRotate_bl) return;
            var t = FWDUtils.getViewportMouseCoordinates(e);
            if (r.finalWidth > r.stageWidth + 1) {
                r.finalX = Math.round(r.xPositionOnPress + t.screenX - r.lastPresedX);
                if (r.finalX > 0) {
                    r.finalX = 0
                } else if (r.finalX <= r.stageWidth - r.finalWidth + 1) {
                    r.finalX = r.stageWidth - r.finalWidth + 1
                }
                r.mainImagesHolder_do.setX(r.finalX)
            }
            if (r.finalHeight > r.stageHeight + 1) {
                r.finalY = Math.round(r.yPositionOnPress + t.screenY - r.lastPresedY);
                if (r.finalY > 0) {
                    r.finalY = 0
                } else if (r.finalY <= r.stageHeight - r.finalHeight) {
                    r.finalY = r.stageHeight - r.finalHeight
                }
                r.mainImagesHolder_do.setY(r.finalY)
            }
            if (r.showNavigator_bl) {
                r.hideOrShowNavigator();
                r.updateNavigator(false)
            }
            r.positionMarkers(false)
        };
        r.panEndHandler = function (e) {
            r.isDragging_bl = false;
            if (!r.isMobile_bl || e.pointerType == e.MSPOINTER_TYPE_MOUSE) n.hidePanDumy();
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.removeEventListener("MSPointerMove", r.panMoveHandler);
                    window.removeEventListener("MSPointerUp", r.panEndHandler)
                } else {
                    window.removeEventListener("touchmove", r.panMoveHandler);
                    window.removeEventListener("touchend", r.panEndHandler)
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mousemove", r.panMoveHandler);
                    window.removeEventListener("mouseup", r.panEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", r.panMoveHandler);
                    document.detachEvent("onmouseup", r.panEndHandler)
                }
            }
        };
        r.addRotationSupport = function () {
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.dumy_sdo.screen.addEventListener("MSPointerDown", r.rotateStartHandler)
                } else {
                    r.dumy_sdo.screen.addEventListener("touchstart", r.rotateStartHandler)
                }
            } else if (r.screen.addEventListener) {
                r.dumy_sdo.screen.addEventListener("mousedown", r.rotateStartHandler)
            } else if (r.screen.attachEvent) {
                r.dumy_sdo.screen.attachEvent("onmousedown", r.rotateStartHandler)
            }
        };
        r.rotateStartHandler = function (t) {
            if (r.draggingMode_str != e.ROTATE || r.isTweening_bl || r.disablePanOrRotate_bl) return;
            clearInterval(r.dragAndSpinId_int);
            if (t.preventDefault) t.preventDefault();
            var i = FWDUtils.getViewportMouseCoordinates(t);
            r.isDragging_bl = true;
            r.isSwiping_bl = false;
            if (r.markersToolTipWindow_do) r.markersToolTipWindow_do.hide();
            if (!r.isMobile_bl || t.pointerType == t.MSPOINTER_TYPE_MOUSE) n.showRotateDumy();
            r.currentDist = r.lastPresedX = i.screenX;
            r.showOrHideMarkers();
            r.positionMarkers();
            r.dispatchEvent(e.ROTATE_START);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.addEventListener("MSPointerMove", r.rotateMoveHandler);
                    window.addEventListener("MSPointerUp", r.rotateEndHandler)
                } else {
                    window.addEventListener("touchmove", r.rotateMoveHandler);
                    window.addEventListener("touchend", r.rotateEndHandler)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mousemove", r.rotateMoveHandler);
                    window.addEventListener("mouseup", r.rotateEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", r.rotateMoveHandler);
                    document.attachEvent("onmouseup", r.rotateEndHandler)
                }
            }
        };
        r.rotateMoveHandler = function (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.touches && e.touches.length != 1 || r.disablePanOrRotate_bl) return;
            var t = FWDUtils.getViewportMouseCoordinates(e);
            var n = (t.screenX - r.lastPresedX) / (80 * r.rotationSpeed);
            r.swipeDragDist = t.screenX - r.currentDist;
            r.currentDist = t.screenX;
            if (r.isRotatingFirstTime_bl) {
                if (n > 0) {
                    if (n != 0) n = -1
                } else {
                    if (n != 0) n = 1
                }
                r.curId += n;
                r.gotoImage();
                r.isRotatingFirstTime_bl = false;
                return
            }
            if (Math.abs(n) >= 1) {
                if (n > 0) {
                    r.lastPresedX = r.lastPresedX + 80 * r.rotationSpeed;
                    if (n != 0) n = -1
                } else {
                    r.lastPresedX = r.lastPresedX - 80 * r.rotationSpeed;
                    if (n != 0) n = 1
                }
                r.curId += n;
                r.gotoImage()
            }
        };
        r.rotateEndHandler = function (e) {
            if (Math.abs(r.swipeDragDist) > r.spinDist && r.addDragAndSpinSupport_bl && r.firstInteractionOccured_bl) {
                r.startToSwipe()
            } else {
                r.addLargeImage()
            }
            r.isDragging_bl = false;
            r.isRotatingFirstTime_bl = true;
            r.firstInteractionOccured_bl = true;
            if (!r.isMobile_bl || e.pointerType == e.MSPOINTER_TYPE_MOUSE) n.hideRotateDumy();
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    window.removeEventListener("MSPointerMove", r.rotateMoveHandler);
                    window.removeEventListener("MSPointerUp", r.rotateEndHandler)
                } else {
                    window.removeEventListener("touchmove", r.rotateMoveHandler);
                    window.removeEventListener("touchend", r.rotateEndHandler)
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("mousemove", r.rotateMoveHandler);
                    window.removeEventListener("mouseup", r.rotateEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", r.rotateMoveHandler);
                    document.detachEvent("onmouseup", r.rotateEndHandler)
                }
            }
        };
        this.startToSwipe = function () {
            r.isSwiping_bl = true;
            for (var e = 0; e < r.totalMarkers; e++) {
                marker = r.markers_ar[e];
                marker.hide()
            }
            r.swipeDirection_str = r.swipeDragDist < 0 ? "left" : "right";
            r.swipeDragDist = Math.abs(r.swipeDragDist / (20 * r.dragAndSpinSpeed));
            r.dragAndSpinId_int = setInterval(r.swipeTweenUpdate, 16)
        };
        this.swipeTweenUpdate = function () {
            var e = 0;
            var t;
            r.swipeDragDist += (0 - r.swipeDragDist) * .07;
            e = Math.round(r.swipeDragDist);
            if (r.swipeDirection_str == "left") {
                t = 1
            } else {
                t = -1
            }
            r.curId += e * t;
            if (e == 0) {
                r.isSwiping_bl = false;
                clearInterval(r.dragAndSpinId_int);
                r.gotoImage();
                r.addLargeImage()
            } else {
                r.gotoImage()
            }
        };
        r.addMouseWheelSupport = function () {
            if (window.addEventListener) {
                r.dumy_sdo.screen.addEventListener("mousewheel", r.mouseWheelHandler);
                r.dumy_sdo.screen.addEventListener("DOMMouseScroll", r.mouseWheelHandler)
            } else if (document.attachEvent) {
                r.dumy_sdo.screen.attachEvent("onmousewheel", r.mouseWheelHandler)
            }
        };
        r.mouseWheelHandler = function (e) {
            if (e.preventDefault) e.preventDefault();
            if (r.isDragging_bl || r.disablePanOrRotate_bl) return;
            var t = FWDUtils.getViewportMouseCoordinates(e);
            if (r.hider) r.hider.reset();
            r.mouseX = t.screenX - r.getGlobalX();
            r.mouseY = t.screenY - r.getGlobalY();
            var n = e.detail || e.wheelDelta;
            if (e.wheelDelta) n *= -1;
            if (FWDUtils.isOpera) n *= -1;
            if (n > 0) {
                r.currentScale -= r.zoomSpeed;
                if (parseFloat(r.currentScale.toFixed(5)) <= parseFloat(r.smallestPossibleScale.toFixed(5))) r.currentScale = r.smallestPossibleScale
            } else if (n < 0) {
                r.currentScale += r.zoomSpeed;
                if (r.currentScale > r.zoomFactor) r.currentScale = r.zoomFactor
            }
            r.zoomImage(true);
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        r.setupMarkers = function () {
            var e;
            var t;
            var n = 0;
            r.totalMarkers = r.markersList_ar.length;
            for (var i = 0; i < r.totalMarkers; i++) {
                t = r.markersList_ar[i];
                FWDMarker.setPrototype();
                e = new FWDMarker(t.markerId, t.normalStatePath_str, t.selectedStatePath_str, t.type, t.regPoint, t.toolTipLabel, t.markerWidth, t.markerHeight);
                e.addListener(FWDMarker.MOUSE_OVER, r.markerOnMouseOverHandler);
                e.addListener(FWDMarker.MOUSE_OUT, r.markerOnMouseOutHandler);
                e.addListener(FWDMarker.MOUSE_DOWN, r.markerOnStartHandler);
                if (t.type == "tooltip") {
                    e.toolTipId = n;
                    e.innerHTML_str = t.innerHTML;
                    e.toolTipWindowMaxWidth = t.maxWidth
                } else if (t.type == "infowindow") {
                    e.innerHTML_str = t.innerHTML
                } else if (t.type == "link") {
                    e.link_str = t.link;
                    e.target_str = t.target
                }
                r.markers_ar.push(e);
                r.addChild(e)
            }
        };
        r.markerOnMouseOverHandler = function (e) {
            var t = e.target;
            if (t.hasToolTip_bl) {
                r.showMarkerToolTip(t, t.toolTipLabel_str)
            }
            if (t.type_str == "tooltip") {
                if (r.lastMarkerId_str != t.markerId) r.hideToolTipWindow();
                r.lastMarkerId_str = t.markerId;
                r.curMarker_do = t;
                clearTimeout(r.hideToolTipWindowId_to);
                r.showToolTipWindow(t, t.innerHTML_str, t.toolTipWindowMaxWidth)
            }
        };
        r.markerOnMouseOutHandler = function (e) {
            var t = e.target;
            if (t.hasToolTip_bl) {
                if (r.markersToolTip_do) {
                    if (r.contains(r.markersToolTip_do)) r.removeChild(r.markersToolTip_do);
                    r.markersToolTip_do.hide()
                }
            }
            if (t.type_str == "tooltip") {
                r.toolTipWindowAddEventsToSetGlobalXAndGlobalY();
                clearTimeout(r.hideToolTipWindowId_to);
                r.hideToolTipWindowId_to = setTimeout(r.hideToolTipWindowWithDelay, 300)
            }
        };
        r.markerOnStartHandler = function (t) {
            var n = t.target;
            if (n.type_str == "infowindow") {
                r.dispatchEvent(e.SHOW_INFO, {
                    text: n.innerHTML_str
                })
            } else if (n.type_str == "tooltip") {
                if (r.lastMarkerId_str != n.markerId) r.hideToolTipWindow();
                r.curMarker_do = n;
                r.lastMarkerId_str = n.markerId;
                r.toolTipWindowAddEventsToSetGlobalXAndGlobalY();
                r.showToolTipWindow(n, n.innerHTML_str, n.toolTipWindowMaxWidth)
            }
        };
        r.showMarkersWithAlphaForChromeFirstTime_bl = true;
        r.showOrHideMarkers = function () {
            var e;
            var t = r.markersPosition_ar[r.curId];
            var n;
            var i;
            for (var s = 0; s < r.totalMarkers; s++) {
                e = r.markers_ar[s];
                e.isActive_bl = false
            }
            if (t) {
                i = t.length;
                for (var s = 0; s < i; s++) {
                    n = t[s];
                    for (var o = 0; o < r.totalMarkers; o++) {
                        e = r.markers_ar[o];
                        if (n.markerId == e.markerId && !e.isActive_bl) {
                            e.originalX = n.x;
                            e.originalY = n.y;
                            e.show();
                            e.isActive_bl = true
                        }
                    }
                }
            }
            for (var s = 0; s < r.totalMarkers; s++) {
                e = r.markers_ar[s];
                if (!e.isActive_bl) e.hide();
                if (e.isActive_bl && r.showMarkersWithAlphaForChromeFirstTime_bl) {
                    e.showOnChromeOnce()
                }
            }
            r.showMarkersWithAlphaForChromeFirstTime_bl = false
        };
        r.positionMarkers = function (e) {
            var t;
            for (var n = 0; n < r.totalMarkers; n++) {
                t = r.markers_ar[n];
                if (t.isActive_bl) {
                    t.finalX = r.finalX + t.offsetX + Math.round(t.originalX * r.currentScale);
                    t.finalY = r.finalY + t.offsetY + Math.round(t.originalY * r.currentScale);
                    if (e) {
                        TweenMax.killTweensOf(t);
                        TweenMax.to(t, .2, {
                            x: t.finalX,
                            y: t.finalY
                        })
                    } else {
                        TweenMax.killTweensOf(t);
                        t.setX(t.finalX);
                        t.setY(t.finalY)
                    }
                }
            }
        };
        r.setupMarkersToolTip = function () {
            FWDMarkerToolTip.setPrototype();
            r.markersToolTip_do = new FWDMarkerToolTip(r.toolTipLeft_img, r.toolTipPointer_img, r.buttonToolTipLeft_str, r.buttonToolTipMiddle_str, r.buttonToolTipRight_str, r.buttonToolTipFontColor_str, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str)
        };
        r.setupMarkersToolTipWindow = function () {
            FWDMarkerWindowToolTip.setPrototype();
            r.markersToolTipWindow_do = new FWDMarkerWindowToolTip(r, r.toolTipPointer_img, r.buttonToolTipTopPointer_str, r.buttonToolTipBottomPointer_str);
            r.addChild(r.markersToolTipWindow_do)
        };
        r.showMarkerToolTip = function (e, t) {
            var n;
            var i;
            var s = r.getX();
            var o = 0;
            var u;
            r.addChild(r.markersToolTip_do);
            r.markersToolTip_do.setLabel(t);
            r.markersToolTip_do.show();
            clearTimeout(r.showMarkerToolTipId_to);
            r.showMarkerToolTipId_to = setTimeout(function () {
                if (!r.markersToolTip_do.isShowed_bl) return;
                n = parseInt(e.finalX + (e.width - r.markersToolTip_do.totalWidth) / 2);
                i = e.finalY - r.markersToolTip_do.totalHeight - r.markerToolTipOffsetY;
                if (i < 0) {
                    i = e.finalY + e.height + r.markersToolTip_do.pointerHeight + r.markerToolTipOffsetY;
                    r.markersToolTip_do.pointerUp_sdo.setVisible(true);
                    r.markersToolTip_do.pointerDown_sdo.setVisible(false);
                    u = FWDMarkerToolTip.POINTER_UP
                } else {
                    r.markersToolTip_do.pointerUp_sdo.setVisible(false);
                    r.markersToolTip_do.pointerDown_sdo.setVisible(true);
                    u = FWDMarkerToolTip.POINTER_DOWN
                } if (n < 0) {
                    o = n;
                    n = 0
                } else if (r.stageWidth - n - r.markersToolTip_do.totalWidth < 0) {
                    o = -(r.stageWidth - n - r.markersToolTip_do.totalWidth);
                    n = n + r.stageWidth - n - r.markersToolTip_do.totalWidth
                }
                r.markersToolTip_do.setX(n);
                r.markersToolTip_do.setY(i);
                r.markersToolTip_do.positionPointer(o, u)
            }, 80)
        };
        r.showToolTipWindow = function (e, t, n) {
            if (r.markersToolTipWindow_do.toolTipWindowId == e.toolTipWindowId) return;
            var i;
            var s;
            var o = r.getX();
            var u = 0;
            var a;
            r.markersToolTipWindow_do.setLabel(t, n);
            r.markersToolTipWindow_do.toolTipWindowId = e.toolTipWindowId;
            clearTimeout(r.showToolTipWindoId_to);
            r.showToolTipWindoId_to = setTimeout(function () {
                i = parseInt(e.finalX + (e.width - r.markersToolTipWindow_do.totalWidth) / 2);
                if (e.finalY < r.stageHeight / 2) {
                    s = e.finalY + e.height + r.markersToolTipWindow_do.pointerHeight + r.markerToolTipOffsetY;
                    r.markersToolTipWindow_do.pointerUp_sdo.setVisible(true);
                    r.markersToolTipWindow_do.pointerDown_sdo.setVisible(false);
                    a = FWDMarkerWindowToolTip.POINTER_UP
                } else {
                    s = e.finalY - r.markersToolTipWindow_do.totalHeight - r.markerToolTipOffsetY;
                    r.markersToolTipWindow_do.pointerUp_sdo.setVisible(false);
                    r.markersToolTipWindow_do.pointerDown_sdo.setVisible(true);
                    a = FWDMarkerWindowToolTip.POINTER_DOWN
                } if (i < 0) {
                    u = i;
                    i = 0
                } else if (r.stageWidth - i - r.markersToolTipWindow_do.totalWidth < 0) {
                    u = -(r.stageWidth - i - r.markersToolTipWindow_do.totalWidth);
                    i = i + r.stageWidth - i - r.markersToolTipWindow_do.totalWidth
                }
                r.markersToolTipWindow_do.show();
                r.markersToolTipWindow_do.setX(i);
                r.markersToolTipWindow_do.setY(s);
                r.markersToolTipWindow_do.positionPointer(u, a)
            }, 80)
        };
        r.toolTipWindowAddEventsToSetGlobalXAndGlobalY = function () {
            if (r.isMobile_bl) {
                r.addHideToolTipWindowTestWithDelayId_to = setTimeout(function () {
                    if (r.hasPointerEvent_bl) {
                        window.addEventListener("MSPointerDown", r.hideToolTipWindowTest);
                        window.addEventListener("MSPointerMove", r.hideToolTipWindowTest)
                    } else {
                        window.addEventListener("touchstart", r.hideToolTipWindowTest)
                    }
                }, 50)
            } else {
                if (window.addEventListener) {
                    window.addEventListener("mousemove", r.hideToolTipWindowTest)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", r.hideToolTipWindowTest)
                }
            }
        };
        r.hideToolTipWindowTest = function (e) {
            var t = FWDUtils.getViewportMouseCoordinates(e);
            r.globalX = t.screenX;
            r.globalY = t.screenY;
            if (e.touches || e.pointerType != e.MSPOINTER_TYPE_MOUSE) r.hideToolTipWindowWithDelay()
        };
        r.hideToolTipWindowWithDelay = function (e) {
            if (!FWDUtils.hitTest(r.markersToolTipWindow_do.screen, r.globalX, r.globalY) && !FWDUtils.hitTest(r.curMarker_do.screen, r.globalX, r.globalY)) {
                r.hideToolTipWindow();
                if (r.isMobile_bl) {
                    clearTimeout(r.addHideToolTipWindowTestWithDelayId_to);
                    if (r.hasPointerEvent_bl) {
                        window.removeEventListener("MSPointerDown", r.hideToolTipWindowTest);
                        window.removeEventListener("MSPointerMove", r.hideToolTipWindowTest)
                    } else {
                        window.removeEventListener("touchstart", r.hideToolTipWindowTest)
                    }
                } else {
                    if (window.removeEventListener) {
                        window.removeEventListener("mousemove", r.hideToolTipWindowTest)
                    } else if (document.detachEvent) {
                        document.detachEvent("onmousemove", r.hideToolTipWindowTest)
                    }
                }
            } else {
                r.hideToolTipWindowId_to = setTimeout(r.hideToolTipWindowWithDelay, 300)
            }
        };
        r.hideToolTipWindow = function () {
            if (!r.markersToolTipWindow_do) return;
            clearTimeout(r.hideToolTipWindowId_to);
            r.markersToolTipWindow_do.hide();
            r.markersToolTipWindow_do.toolTipWindowId = "none"
        };
        r.setupMarkersInfo = function () {
            if (window.addEventListener) {
                window.addEventListener("mousemove", r.showMarkersInfoPosition);
                window.addEventListener("mousewheel", r.showMarkersInfoPosition);
                window.addEventListener("DOMMouseScroll", r.showMarkersInfoPosition)
            } else if (document.attachEvent) {
                document.attachEvent("onmousemove", r.showMarkersInfoPosition);
                document.attachEvent("onmousewheel", r.showMarkersInfoPosition)
            }
            r.markersPositionInfo_sdo = new FWDSimpleDisplayObject("div");
            r.markersPositionInfo_sdo.setDisplay("inline-block");
            r.markersPositionInfo_sdo.getStyle().fontSmoothing = "antialiased";
            r.markersPositionInfo_sdo.getStyle().webkitFontSmoothing = "antialiased";
            r.markersPositionInfo_sdo.getStyle().textRendering = "optimizeLegibility";
            r.markersPositionInfo_sdo.getStyle().padding = "6px";
            r.markersPositionInfo_sdo.getStyle().fontFamily = "Arial";
            r.markersPositionInfo_sdo.getStyle().fontSize = "12px";
            r.markersPositionInfo_sdo.getStyle().lineHeight = "20px";
            r.markersPositionInfo_sdo.getStyle().color = "#000000";
            r.markersPositionInfo_sdo.setBkColor("#FFFFFF");
            r.addChild(r.markersPositionInfo_sdo)
        };
        r.showMarkersInfoPosition = function (e) {
            var t = FWDUtils.getViewportMouseCoordinates(e);
            var n = r.getGlobalX();
            var i = r.getGlobalY();
            var s = t.screenX - n;
            var o = t.screenY - i;
            var u = parseInt((s - r.finalX) * (1 / r.currentScale));
            var a = parseInt((o - r.finalY) * (1 / r.currentScale));
            var f = s + 10;
            var l = o + 10;
            r.markersPositionInfo_sdo.setInnerHTML("Image nr:" + "<font color='#FF0000'>" + (r.curId + 1) + "</font>" + "<br>x:" + "<font color='#FF0000'>" + u + "</font>" + " y:" + "<font color='#FF0000'>" + a + "</font>");
            var c = r.markersPositionInfo_sdo.getWidth();
            var h = r.markersPositionInfo_sdo.getHeight();
            if (f + c > r.stageWidth) {
                f = f - c - 10
            }
            if (l + h > r.stageHeight) {
                l = l - h - 10
            }
            r.markersPositionInfo_sdo.setX(f);
            r.markersPositionInfo_sdo.setY(l)
        };
        r.setDraggingMode = function (e) {
            r.draggingMode_str = e
        };
        r.disableOrEnablePanOrTouch = function (e) {
            r.disablePanOrRotate_bl = e
        };
        r.zoomInOrOutWithScrollBar = function (e) {
            r.currentScale = e * (r.zoomFactor - r.smallestPossibleScale) + r.smallestPossibleScale;
            r.mouseX = r.stageWidth / 2;
            r.mouseY = r.stageHeight / 2;
            r.zoomImage(true)
        };
        r.dispatchScrollBarUpdate = function (t, n) {
            if (!r.disablePanOrRotate_bl || n) {
                r.dispatchEvent(e.SCROLL_BAR_UPDATE, {
                    percent: (r.currentScale - r.smallestPossibleScale) / (r.zoomFactor - r.smallestPossibleScale),
                    animate: t
                })
            }
        };
        r.zoomInOrOutWithButtons = function (e, t) {
            r.mouseX = r.stageWidth / 2;
            r.mouseY = r.stageHeight / 2;
            if (e > 0) {
                if (t) {
                    r.currentScale += r.zoomSpeed
                } else {
                    r.currentScale += r.zoomSpeed / 15
                } if (r.currentScale > r.zoomFactor) r.currentScale = r.zoomFactor
            } else if (e < 0) {
                if (t) {
                    r.currentScale -= r.zoomSpeed
                } else {
                    r.currentScale -= r.zoomSpeed / 15
                } if (parseFloat(r.currentScale.toFixed(5)) <= parseFloat(r.smallestPossibleScale.toFixed(5))) r.currentScale = r.smallestPossibleScale
            }
            r.dispatchScrollBarUpdate(true, true);
            r.zoomImage(true)
        };
        r.centerImage = function () {
            r.mouseX = r.stageWidth / 2;
            r.mouseY = r.stageHeight / 2;
            r.finalX = Math.round((r.stageWidth - r.finalWidth) / 2);
            r.finalY = Math.round((r.stageHeight - r.finalHeight) / 2);
            r.resizeAndPositionSmallImage(false);
            r.positionMarkers()
        };
        r.updateNavigator = function (t) {
            if (!r.isNavigatorShowed_bl) return;
            r.dispatchEvent(e.UPDATE_NAVIGATOR, {
                percentX: Math.abs(r.finalX / (r.finalWidth - r.stageWidth)),
                percentY: Math.abs(r.finalY / (r.finalHeight - r.stageHeight)),
                percentWidth: r.stageWidth / r.finalWidth,
                percentHeight: r.stageHeight / r.finalHeight,
                animate: t
            })
        };
        r.hideOrShowNavigator = function () {
            if (r.stageWidth < r.finalWidth || r.stageHeight < r.finalHeight) {
                r.isNavigatorShowed_bl = true;
                r.dispatchEvent(e.SHOW_NAVIGATOR)
            } else {
                r.isNavigatorShowed_bl = false;
                r.dispatchEvent(e.HIDE_NAVIGATOR)
            }
        };
        r.updateOnNavigatorPan = function (e, t) {
            r.finalX = parseInt(e * (r.stageWidth - r.finalWidth));
            r.finalY = parseInt(t * (r.stageHeight - r.finalHeight));
            r.positionMarkers(true);
            r.resizeAndPositionSmallImage(true)
        };
        r.cleanMainEvents = function () {
            if (window.addEventListener) {} else if (window.attachEvent) {}
            if (r.isMobile_bl) {
                r.dumy_sdo.screen.removeEventListener("touchstart", r.panStartHandler);
                r.dumy_sdo.screen.removeEventListener("MSPointerDown", r.panStartHandler);
                window.removeEventListener("touchmove", r.panMoveHandler);
                window.removeEventListener("touchend", r.panEndHandler);
                window.removeEventListener("MSPointerMove", r.panMoveHandler);
                window.removeEventListener("MSPointerUp", r.panEndHandler);
                r.dumy_sdo.screen.removeEventListener("touchstart", r.rotateStartHandler);
                r.dumy_sdo.screen.removeEventListener("MSPointerDown", r.rotateStartHandler);
                window.removeEventListener("touchmove", r.rotateMoveHandler);
                window.removeEventListener("touchend", r.rotateEndHandler);
                window.removeEventListener("MSPointerMove", r.rotateMoveHandler);
                window.removeEventListener("MSPointerUp", r.rotateEndHandler);
                window.removeEventListener("touchstart", r.hideToolTipWindowTest);
                window.removeEventListener("MSPointerDown", r.hideToolTipWindowTest);
                window.removeEventListener("MSPointerMove", r.hideToolTipWindowTest);
                r.screen.removeEventListener("gesturestart", r.gestureStartHandler);
                r.screen.removeEventListener("gesturechange", r.gestureChangeHandler)
            } else {
                if (window.removeEventListener) {
                    r.dumy_sdo.screen.removeEventListener("mousedown", r.panStartHandler);
                    window.removeEventListener("mousemove", r.panMoveHandler);
                    window.removeEventListener("mouseup", r.panEndHandler);
                    r.dumy_sdo.screen.removeEventListener("mousedown", r.rotateStartHandler);
                    window.removeEventListener("mousemove", r.rotateMoveHandler);
                    window.removeEventListener("mouseup", r.rotateEndHandler);
                    r.dumy_sdo.screen.removeEventListener("mousewheel", r.mouseWheelHandler);
                    r.dumy_sdo.screen.removeEventListener("DOMMouseScroll", r.mouseWheelHandler);
                    window.removeEventListener("mousemove", r.hideToolTipWindowTest);
                    window.removeEventListener("mousemove", r.showMarkersInfoPosition);
                    window.removeEventListener("mousewheel", r.showMarkersInfoPosition);
                    window.removeEventListener("DOMMouseScroll", r.showMarkersInfoPosition)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", r.panMoveHandler);
                    document.detachEvent("onmouseup", r.panEndHandler);
                    r.dumy_sdo.screen.detachEvent("onmousedown", r.panStartHandler);
                    r.dumy_sdo.screen.detachEvent("onmousedown", r.rotateStartHandler);
                    document.detachEvent("onmousemove", r.rotateMoveHandler);
                    document.detachEvent("onmouseup", r.rotateEndHandler);
                    r.dumy_sdo.screen.detachEvent("onmousewheel", r.mouseWheelHandler);
                    document.detachEvent("onmousemove", r.hideToolTipWindowTest);
                    document.detachEvent("onmousemove", r.showMarkersInfoPosition);
                    document.detachEvent("onmousewheel", r.showMarkersInfoPosition)
                }
            }
            clearTimeout(r.tweenDone_to);
            clearTimeout(r.removeSmallSDOId_to);
            clearTimeout(r.setAlphaWithDelayId_to);
            clearTimeout(r.hideToolTipWindowId_to);
            clearTimeout(r.addHideToolTipWindowTestWithDelayId_to);
            clearTimeout(r.showToolTipWindoId_to);
            clearTimeout(r.showMarkerToolTipId_to);
            clearInterval(r.dragAndSpinId_int)
        };
        r.destroy = function () {
            r.cleanMainEvents();
            if (r.largeImage_img) {
                r.largeImage_img.onerror = null;
                r.largeImage_img.onload = null;
                r.largeImage_img.src = null
            }
            if (r.mainImagesHolder_do) {
                TweenMax.killTweensOf(r.mainImagesHolder_do);
                r.mainImagesHolder_do.destroy()
            }
            if (r.smallImage_sdo) {
                TweenMax.killTweensOf(r.smallImage_sdo);
                r.smallImage_sdo.destroy()
            }
            if (r.showMarkers_bl) {
                var s;
                for (var o = 0; o < r.totalMarkers; o++) {
                    s = r.markers_ar[o];
                    TweenMax.killTweensOf(s);
                    s.destroy()
                }
                if (r.markersToolTip_do) r.markersToolTip_do.destroy();
                r.markersToolTipWindow_do.destroy()
            }
            if (r.addCorrectionForWebKit_bl) {
                TweenMax.killTweensOf(r.left_sdo);
                TweenMax.killTweensOf(r.top_sdo);
                TweenMax.killTweensOf(r.right_sdo);
                TweenMax.killTweensOf(r.bottom_sdo);
                r.left_sdo.destroy();
                r.top_sdo.destroy();
                r.right_sdo.destroy();
                r.bottom_sdo.destroy()
            }
            for (var o = 0; o < r.smallDos_ar.length; o++) {
                var u = r.smallDos_ar[o];
                TweenMax.killTweensOf(u);
                u.destroy()
            }
            if (r.largeImage_sdo) {
                TweenMax.killTweensOf(r.largeImage_sdo);
                r.largeImage_sdo.destroy()
            }
            if (r.markersPositionInfo_sdo) {
                r.markersPositionInfo_sdo.setInnerHTML("");
                r.markersPositionInfo_sdo.destroy()
            }
            t = null;
            n = null;
            r.playListData_ar = null;
            r.images_ar = null;
            r.smallDos_ar = null;
            r.markers_ar = null;
            r.markersList_ar = null;
            r.markersPosition_ar = null;
            r.largeImagesPaths_ar = null;
            r.hider = null;
            r.curMarker_do = null;
            r.prevSmall_sdo = null;
            r.largeImage_img = null;
            r.dumy_sdo = null;
            r.mainImagesHolder_do = null;
            r.smallImage_sdo = null;
            r.largeImage_sdo = null;
            r.left_sdo = null;
            r.top_sdo = null;
            r.right_sdo = null;
            r.bottom_sdo = null;
            r.markersPositionInfo_sdo = null;
            r.handMovePath_str = null;
            r.backgroundColor_str = null;
            r.draggingMode_str = null;
            r.setInnerHTML("");
            i.destroy();
            r = null;
            i = null;
            e.prototype = null
        };
        r.init()
    };
    e.setPrototype = function () {
        e.prototype = new FWDDisplayObject("div")
    };
    e.LARGE_IMAGE_LOAD_ERROR = "largeImageLoadError";
    e.IMAGE_ZOOM_COMPLETE = "zoomComplete";
    e.SCROLL_BAR_UPDATE = "scrollBarUpdate";
    e.PAN_START = "panStart";
    e.ROTATE_START = "rotateStart";
    e.ROTATE_UPDATE = "rotateUpdate";
    e.ROTATE = "rotate";
    e.PAN = "pan";
    e.UPDATE_NAVIGATOR = "updateNavigator";
    e.SHOW_NAVIGATOR = "showNavigator";
    e.HIDE_NAVIGATOR = "hideNavigator";
    e.SHOW_INFO = "showInfo";
    e.prototype = null;
    window.FWDImageManager = e
})(window);
(function (e) {
    var t = function () {
        var e = this;
        var n = t.prototype;
        this.init = function () {
            this.setWidth(500);
            this.setBkColor("#FF0000");
            this.getStyle().padding = "10px"
        };
        this.showText = function (e) {
            this.setInnerHTML(e)
        };
        this.destroy = function () {
            this.init = null;
            this.showText = null;
            this.destroy = null;
            e.setInnerHTML("");
            n.destroy();
            e = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div", "relative")
    };
    t.prototype = null;
    e.FWDInfo = t
})(window);
(function (e) {
    function c(t, n, r) {
        function u() {
            if (s) {
                s.apply(e, arguments);
                if (!o) {
                    delete n[i];
                    s = null
                }
            }
        }
        var i, s = r[0],
            o = t === a;
        r[0] = u;
        i = t.apply(e, r);
        n[i] = {
            args: r,
            created: Date.now(),
            cb: s,
            id: i
        };
        return i
    }

    function h(t, n, r, i, s) {
        function c() {
            if (o.cb) {
                o.cb.apply(e, arguments);
                if (!u) {
                    delete r[i];
                    o.cb = null
                }
            }
        }
        var o = r[i];
        if (!o) {
            return
        }
        var u = t === a;
        n(o.id);
        if (!u) {
            var f = o.args[1];
            var l = Date.now() - o.created;
            if (l < 0) {
                l = 0
            }
            f -= l;
            if (f < 0) {
                f = 0
            }
            o.args[1] = f
        }
        o.args[0] = c;
        o.created = Date.now();
        o.id = t.apply(e, o.args)
    }
    var t = navigator.platform;
    var n = false;
    if (t == "iPad" || t == "iPhone") n = true;
    if (!n) return;
    var r = navigator.userAgent;
    var i = false;
    if (r.indexOf("6") != -1) i = true;
    if (!i) return;
    var s = {};
    var o = {};
    var u = e.setTimeout;
    var a = e.setInterval;
    var f = e.clearTimeout;
    var l = e.clearInterval;
    e.setTimeout = function () {
        return c(u, s, arguments)
    };
    e.setInterval = function () {
        return c(a, o, arguments)
    };
    e.clearTimeout = function (e) {
        var t = s[e];
        if (t) {
            delete s[e];
            f(t.id)
        }
    };
    e.clearInterval = function (e) {
        var t = o[e];
        if (t) {
            delete o[e];
            l(t.id)
        }
    };
    e.addEventListener("scroll", function () {
        var e;
        for (e in s) {
            h(u, f, s, e)
        }
        for (e in o) {
            h(a, l, o, e)
        }
    })
})(window);
(function (e) {
    var t = function (n, r, i, s, o, u) {
        var a = this;
        var f = t.prototype;
        this.mainLightBox_do = null;
        this.lightBoxBackground_sdo = null;
        this.lightBoxGridHolder_do = null;
        this.closeButton_do = null;
        this.mainBackgroundColor_str = r;
        this.holderBackgroundColor_str = i;
        this.lightBoxBackgroundOpacity = s;
        this.lightBoxWidth = o;
        this.lightBoxHeight = u;
        this.setupButtonWithDelayId_to;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        this.closeButtonIsTweening_bl = true;
        this.init = function () {
            a.getStyle().zIndex = 1e8;
            a.setupMainContainers()
        };
        this.setupMainContainers = function () {
            var e = FWDUtils.getViewportSize();
            var t = FWDUtils.getScrollOffsets();
            if (a.isMobile_bl && a.hasPointerEvent_bl) a.getStyle().msTouchAction = "none";
            a.setWidth(e.w);
            a.setHeight(e.h);
            a.setX(t.x);
            a.setY(t.y);
            a.lightBoxBackground_sdo = new FWDSimpleDisplayObject("div");
            a.lightBoxBackground_sdo.setResizableSizeAfterParent();
            a.lightBoxBackground_sdo.setBkColor(a.mainBackgroundColor_str);
            a.addChild(a.lightBoxBackground_sdo);
            a.mainLightBox_do = new FWDDisplayObject("div");
            a.mainLightBox_do.setBkColor(a.holderBackgroundColor_str);
            n.stageContainer = a.mainLightBox_do.screen;
            a.addChild(a.mainLightBox_do);
            if (navigator.userAgent.toLowerCase().indexOf("msie 7") == -1) {
                document.documentElement.appendChild(a.screen)
            } else {
                document.getElementsByTagName("body")[0].appendChild(a.screen)
            }
            a.lightBoxBackground_sdo.setAlpha(0);
            TweenMax.to(a.lightBoxBackground_sdo, .8, {
                alpha: a.lightBoxBackgroundOpacity
            });
            a.setX(t.x);
            a.setY(t.y);
            a.mainLightBox_do.setWidth(0);
            a.mainLightBox_do.setHeight(0);
            a.mainLightBox_do.setX(parseInt(e.w / 2));
            a.mainLightBox_do.setY(parseInt(e.h / 2));
            if (a.lightBoxWidth > e.w) {
                a.finalLightBoxWidth = e.w;
                a.finalLightBoxHeight = parseInt(a.lightBoxHeight * (e.w / a.lightBoxWidth))
            } else {
                a.finalLightBoxWidth = a.lightBoxWidth;
                a.finalLightBoxHeight = a.lightBoxHeight
            }
            TweenMax.to(a.mainLightBox_do, .8, {
                w: a.finalLightBoxWidth,
                h: a.finalLightBoxHeight,
                x: parseInt((e.w - a.finalLightBoxWidth) / 2),
                y: parseInt((e.h - a.finalLightBoxHeight) / 2),
                delay: .4,
                ease: Expo.easeInOut
            })
        };
        this.setupCloseButton = function (t, n) {
            var r = FWDUtils.getViewportSize();
            FWDSimpleButton.setPrototype();
            a.closeButton_do = new FWDSimpleButton(t, n);
            a.closeButton_do.addListener(FWDSimpleButton.MOUSE_DOWN, a.closeButtonOnStartHandler);
            a.addChild(a.closeButton_do);
            var i = parseInt((r.w + a.finalLightBoxWidth) / 2 - a.closeButton_do.totalWidth / 2);
            var s = parseInt((r.h - a.finalLightBoxHeight) / 2 - a.closeButton_do.totalHeight / 2);
            if (i + a.closeButton_do.totalWidth > r.w) {
                i = r.w - a.closeButton_do.totalWidth
            }
            if (s < 0) {
                s = 0
            }
            a.closeButton_do.setX(r.w);
            a.closeButton_do.setY(s);
            TweenMax.to(a.closeButton_do, .9, {
                x: i,
                onComplete: a.showCloseButtonComplete,
                ease: Expo.easeInOut
            });
            if (a.isMobile_bl) {
                if (!a.hasPointerEvent_bl) {
                    e.addEventListener("touchstart", a.mouseDummyHandler);
                    e.addEventListener("touchmove", a.mouseDummyHandler)
                }
            } else {
                if (e.addEventListener) {
                    e.addEventListener("mousewheel", a.mouseDummyHandler);
                    e.addEventListener("DOMMouseScroll", a.mouseDummyHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousewheel", a.mouseDummyHandler)
                }
            }
        };
        this.showCloseButtonComplete = function () {
            a.closeButtonIsTweening_bl = false
        };
        this.mouseDummyHandler = function (e) {
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        this.closeButtonOnStartHandler = function (e) {
            var n = FWDUtils.getViewportSize();
            a.closeButton_do.isDisabled_bl = true;
            TweenMax.to(a.closeButton_do, .9, {
                x: n.w,
                ease: Expo.easeInOut
            });
            TweenMax.to(a.mainLightBox_do, .8, {
                w: 0,
                h: 0,
                x: parseInt(n.w / 2),
                y: parseInt(n.h / 2),
                delay: .4,
                ease: Expo.easeInOut
            });
            TweenMax.to(a.lightBoxBackground_sdo, .8, {
                alpha: 0,
                delay: .8
            });
            a.lighboxAnimDoneId_to = setTimeout(a.lighboxHideAnimationDone, 1600);
            a.dispatchEvent(t.CLOSE)
        };
        this.lighboxHideAnimationDone = function () {
            a.dispatchEvent(t.HIDE_COMPLETE)
        };
        a.destroy = function () {
            try {
                if (navigator.userAgent.toLowerCase().indexOf("msie 7") == -1) {
                    document.documentElement.removeChild(a.screen)
                } else {
                    document.getElementsByTagName("body")[0].removeChild(a.screen)
                }
            } catch (s) {}
            if (a.isMobile_bl) {
                if (!a.hasPointerEvent_bl) {
                    e.removeEventListener("touchstart", a.mouseDummyHandler);
                    e.removeEventListener("touchmove", a.mouseDummyHandler)
                }
            } else {
                if (e.removeEventListener) {
                    e.removeEventListener("mousewheel", a.mouseDummyHandler);
                    e.removeEventListener("DOMMouseScroll", a.mouseDummyHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousewheel", a.mouseDummyHandler)
                }
            }
            clearTimeout(a.lighboxAnimDoneId_to);
            if (a.lightBoxBackground_sdo) {
                TweenMax.killTweensOf(a.lightBoxBackground_sdo);
                a.lightBoxBackground_sdo.destroy()
            }
            if (a.lightBoxGridHolder_do) {
                TweenMax.killTweensOf(a.lightBoxGridHolder_do);
                a.lightBoxGridHolder_do.destroy()
            }
            if (a.closeButton_do) {
                TweenMax.killTweensOf(a.closeButton_do);
                a.closeButton_do.destroy()
            }
            a.mainLightBox_do = null;
            a.lightBoxBackground_sdo = null;
            a.lightBoxGridHolder_do = null;
            a.closeButton_do = null;
            a.mainBackgroundColor_str = null;
            a.holderBackgroundColor_str = null;
            n = null;
            r = null;
            i = null;
            a.setInnerHTML("");
            f.destroy();
            a = null;
            f = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLOSE = "ligtBoxClose";
    t.HIDE_COMPLETE = "hideComplete";
    t.prototype = null;
    e.FWDLightBox = t
})(window);
(function (e) {
    var t = function (n, r, i, s, o, u, a, f) {
        var l = this;
        var c = t.prototype;
        this.n_do;
        this.s_do;
        this.markerId = n;
        this.normalImagePath_str = r;
        this.selectedImagePath_str = i;
        this.type_str = s;
        this.toolTipLabel_str = u;
        this.innerHTML_str;
        this.link_str;
        this.target_str;
        this.regPoint_str = o;
        this.toolTipWindowId;
        this.width = a;
        this.height = f;
        this.toolTipId;
        this.originalX;
        this.originalY;
        this.finalX;
        this.finalY;
        this.offsetX;
        this.offsetY;
        this.toolTipWindowMaxWidth;
        this.showId_to;
        this.isDisabled_bl = false;
        this.hasToolTip_bl = true;
        this.isShowed_bl = true;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        l.init = function () {
            l.setOverflow("visible");
            if (l.type_str == "tooltip" || !l.toolTipLabel_str) l.hasToolTip_bl = false;
            if (l.regPoint_str == "center") {
                l.offsetX = -parseInt(l.width / 2);
                l.offsetY = -parseInt(l.height / 2)
            } else if (l.regPoint_str == "centertop") {
                l.offsetX = -parseInt(l.width / 2);
                l.offsetY = 0
            } else if (l.regPoint_str == "centerbottom") {
                l.offsetX = -parseInt(l.width / 2);
                l.offsetY = -l.height
            }
            l.setupMainContainers();
            l.hide()
        };
        l.setupMainContainers = function () {
            var e;
            var t;
            l.n_do = new FWDTransformDisplayObject("img");
            e = new Image;
            e.src = l.normalImagePath_str;
            l.n_do.setScreen(e);
            l.n_do.setWidth(l.width);
            l.n_do.setHeight(l.height);
            l.s_do = new FWDTransformDisplayObject("img");
            t = new Image;
            t.src = l.selectedImagePath_str;
            l.s_do.setScreen(t);
            l.s_do.setWidth(l.width);
            l.s_do.setHeight(l.height);
            l.s_do.setAlpha(0);
            l.addChild(l.n_do);
            l.addChild(l.s_do);
            l.setButtonMode(true);
            if (l.isMobile_bl) {
                if (l.hasPointerEvent_bl) {
                    l.screen.addEventListener("MSPointerDown", l.onMouseDown);
                    l.screen.addEventListener("MSPointerUp", l.onClick);
                    l.screen.addEventListener("MSPointerOver", l.onMouseOver);
                    l.screen.addEventListener("MSPointerOut", l.onMouseOut)
                } else {
                    l.screen.addEventListener("touchstart", l.onMouseDown)
                }
            } else if (l.screen.addEventListener) {
                l.screen.addEventListener("mouseover", l.onMouseOver);
                l.screen.addEventListener("mouseout", l.onMouseOut);
                l.screen.addEventListener("mousedown", l.onMouseDown);
                l.screen.addEventListener("click", l.onClick)
            } else if (l.screen.attachEvent) {
                l.screen.attachEvent("onmouseover", l.onMouseOver);
                l.screen.attachEvent("onmouseout", l.onMouseOut);
                l.screen.attachEvent("onmousedown", l.onMouseDown);
                l.screen.attachEvent("onclick", l.onClick)
            }
        };
        l.onMouseOver = function (e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                l.dispatchEvent(t.MOUSE_OVER, {
                    e: e
                });
                if (l.isDisabled_bl) return;
                TweenMax.killTweensOf(l.s_do);
                TweenMax.to(l.s_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }
        };
        l.onMouseOut = function (e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                l.dispatchEvent(t.MOUSE_OUT, {
                    e: e
                });
                if (l.isDisabled_bl) return;
                TweenMax.killTweensOf(l.s_do);
                TweenMax.to(l.s_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        };
        l.onClick = function (n) {
            if (l.isDisabled_bl) return;
            if (l.type_str == "link") {
                e.open(l.link_str, l.target_str);
                l.dispatchEvent(t.MOUSE_OUT, {
                    e: n
                })
            }
            l.dispatchEvent(t.CLICK, {
                e: n
            })
        };
        l.onMouseDown = function (n) {
            if (n.preventDefault) n.preventDefault();
            if (l.isDisabled_bl) return;
            if (l.isMobile_bl && !l.hasPointerEvent_bl) {
                if (l.type_str == "link") {
                    e.open(l.link_str, l.target_str);
                    l.dispatchEvent(t.MOUSE_OUT, {
                        e: n
                    })
                }
            }
            l.dispatchEvent(t.MOUSE_DOWN, {
                e: n
            })
        };
        l.hide = function () {
            if (!l.isShowed_bl) return;
            l.isShowed_bl = false;
            clearTimeout(l.showId_to);
            TweenMax.killTweensOf(l.n_do);
            l.n_do.setAlpha(0);
            if (l.hasTransform2d_bl) {
                l.n_do.setScale(0);
                l.s_do.setScale(0)
            } else {
                l.n_do.setWidth(0);
                l.n_do.setHeight(0);
                l.s_do.setWidth(0);
                l.s_do.setHeight(0)
            }
        };
        l.show = function () {
            if (l.isShowed_bl) return;
            l.isShowed_bl = true;
            clearTimeout(l.showId_to);
            l.showId_to = setTimeout(function () {
                TweenMax.to(l.n_do, .8, {
                    alpha: 1,
                    ease: Quart.easeOut
                });
                if (l.hasTransform2d_bl) {
                    l.n_do.setScale(1);
                    l.s_do.setScale(1)
                } else {
                    l.n_do.setWidth(a);
                    l.n_do.setHeight(f);
                    l.s_do.setWidth(a);
                    l.s_do.setHeight(f)
                }
            }, 200)
        };
        l.showOnChromeOnce = function () {
            l.n_do.setAlpha(0);
            TweenMax.to(l.n_do, .8, {
                alpha: 1,
                delay: .1,
                ease: Quart.easeOut
            })
        };
        l.destroy = function () {
            if (l.isMobile_bl) {
                l.screen.removeEventListener("touchstart", l.onMouseDown)
            } else if (l.screen.addEventListener) {
                l.screen.removeEventListener("mouseover", l.onMouseOver);
                l.screen.removeEventListener("mouseout", l.onMouseOut);
                l.screen.removeEventListener("mousedown", l.onMouseDown);
                l.screen.removeEventListener("click", l.onClick)
            } else if (l.screen.detachEvent) {
                l.screen.detachEvent("onmouseover", l.onMouseOver);
                l.screen.detachEvent("onmouseout", l.onMouseOut);
                l.screen.detachEvent("onmousedown", l.onMouseDown);
                l.screen.detachEvent("onclick", l.onClick)
            }
            TweenMax.killTweensOf(l.n_do);
            TweenMax.killTweensOf(l.s_do);
            l.n_do.destroy();
            l.s_do.destroy();
            l.n_do = null;
            l.s_do = null;
            l.markerId = null;
            l.normalImagePath_str = null;
            l.selectedImagePath_str = null;
            l.type_str = null;
            l.toolTipLabel_str = null;
            l.innerHTML_str = null;
            l.link_str = null;
            l.target_str = null;
            l.regPoint_str = null;
            n = null;
            r = null;
            i = null;
            s = null;
            o = null;
            u = null;
            l.setInnerHTML("");
            c.destroy();
            l = null;
            c = null;
            t.prototype = null
        };
        l.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.MOUSE_OVER = "onMouseOver";
    t.MOUSE_OUT = "onMouseOut";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDMarker = t
})(window);
(function (e) {
    var t = function (e, n, r, i, s, o, u, a) {
        var f = this;
        var l = t.prototype;
        f.pointerUp_img;
        f.pointerDown_img;
        f.left_sdo = null;
        f.middle_sdo = null;
        f.right_sdo = null;
        f.text_sdo = null;
        f.pointerUp_sdo = null;
        f.pointerDown_sdo = null;
        f.leftImagePath_str = r;
        f.middleImagePath_str = i;
        f.rightImagePath_str = s;
        f.fontColor_str = o;
        f.bottomPointer_str = a;
        f.topPointer_str = u;
        f.pointerPosition_str;
        f.toolTipLabel_str;
        f.marginWidth = e.width;
        f.totalHeight = e.height;
        f.pointerWidth = n.width;
        f.pointerHeight = n.height;
        f.totalWidth;
        f.isMobile_bl = FWDUtils.isMobile;
        f.isShowed_bl = true;
        f.init = function () {
            f.setOverflow("visible");
            f.setWidth(300);
            f.setupMainContainers();
            f.hide()
        };
        f.setupMainContainers = function () {
            var e;
            f.left_sdo = new FWDSimpleDisplayObject("img");
            e = new Image;
            e.src = f.leftImagePath_str;
            f.left_sdo.setScreen(e);
            f.left_sdo.setWidth(f.marginWidth);
            f.left_sdo.setHeight(f.totalHeight);
            f.addChild(f.left_sdo);
            f.middle_sdo = new FWDSimpleDisplayObject("img");
            e = new Image;
            e.src = f.middleImagePath_str;
            f.middle_sdo.setScreen(e);
            f.middle_sdo.setX(f.marginWidth);
            f.middle_sdo.setWidth(f.marginWidth);
            f.middle_sdo.setHeight(f.totalHeight);
            f.addChild(f.middle_sdo);
            f.right_sdo = new FWDSimpleDisplayObject("img");
            e = new Image;
            e.src = f.rightImagePath_str;
            f.right_sdo.setScreen(e);
            f.right_sdo.setWidth(f.marginWidth);
            f.right_sdo.setHeight(f.totalHeight);
            f.addChild(f.right_sdo);
            f.text_sdo = new FWDSimpleDisplayObject("div");
            f.text_sdo.setBackfaceVisibility();
            f.text_sdo.setDisplay("inline-block");
            f.text_sdo.getStyle().fontFamily = "Arial";
            f.text_sdo.getStyle().fontSize = "12px";
            f.text_sdo.setHeight(20);
            f.text_sdo.getStyle().color = f.fontColor_str;
            f.text_sdo.getStyle().fontSmoothing = "antialiased";
            f.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            f.text_sdo.getStyle().textRendering = "optimizeLegibility";
            f.text_sdo.setX(f.marginWidth);
            if (FWDUtils.isIEAndLessThen9 || FWDUtils.isSafari) {
                f.text_sdo.setY(parseInt((f.totalHeight - 8) / 2) - 2)
            } else {
                f.text_sdo.setY(parseInt((f.totalHeight - 8) / 2) - 1)
            }
            f.addChild(f.text_sdo);
            f.pointerUp_img = new Image;
            f.pointerUp_img.src = f.topPointer_str;
            f.pointerUp_sdo = new FWDSimpleDisplayObject("img");
            f.pointerUp_sdo.setScreen(f.pointerUp_img);
            f.pointerUp_sdo.setWidth(f.pointerWidth);
            f.pointerUp_sdo.setHeight(f.pointerHeight);
            f.pointerUp_sdo.setVisible(false);
            f.addChild(f.pointerUp_sdo);
            f.pointerDown_img = new Image;
            f.pointerDown_img.src = f.bottomPointer_str;
            f.pointerDown_sdo = new FWDSimpleDisplayObject("img");
            f.pointerDown_sdo.setScreen(f.pointerDown_img);
            f.pointerDown_sdo.setWidth(f.pointerWidth);
            f.pointerDown_sdo.setHeight(f.pointerHeight);
            f.pointerDown_sdo.setVisible(false);
            f.addChild(f.pointerDown_sdo);
            f.totalHeight += f.pointerHeight
        };
        f.setLabel = function (e) {
            if (f == null) return;
            if (!f.middle_sdo) return;
            f.text_sdo.setInnerHTML(e);
            setTimeout(function () {
                f.middle_sdo.setWidth(f.text_sdo.screen.offsetWidth);
                f.right_sdo.setX(f.text_sdo.screen.offsetWidth + f.marginWidth);
                f.totalWidth = f.marginWidth * 2 + f.text_sdo.screen.offsetWidth
            }, 79)
        };
        f.positionPointer = function (e, n) {
            var r = 0;
            var i = 0;
            if (!e) e = 0;
            r = parseInt((f.totalWidth - f.pointerWidth) / 2) + e;
            if (r < 0) r = 0;
            if (n == t.POINTER_DOWN) {
                i = f.totalHeight - f.pointerHeight - 1;
                f.pointerDown_sdo.setX(r);
                f.pointerDown_sdo.setY(i)
            } else {
                i = -f.pointerHeight + 1;
                f.pointerUp_sdo.setX(r);
                f.pointerUp_sdo.setY(i)
            }
        };
        f.show = function () {
            if (f.isShowed_bl) return;
            TweenMax.to(f, .4, {
                alpha: 1,
                delay: .1,
                ease: Quart.easeOut
            });
            f.isShowed_bl = true
        };
        f.hide = function () {
            if (!f.isShowed_bl) return;
            TweenMax.killTweensOf(f);
            f.setX(-5e3);
            f.setAlpha(0);
            f.isShowed_bl = false
        };
        f.destroy = function () {
            TweenMax.killTweensOf(f);
            f.pointerUp_img = null;
            f.pointerDown_img = null;
            f.left_sdo.destroy();
            f.middle_sdo.destroy();
            f.right_sdo.destroy();
            f.text_sdo.destroy();
            f.pointerDown_sdo.destroy();
            f.leftImagePath_str = null;
            f.middleImagePath_str = null;
            f.rightImagePath_str = null;
            f.fontColor_str = null;
            f.bottomPointer_str = null;
            f.topPointer_str = null;
            f.pointerPosition_str = null;
            f.toolTipLabel_str = null;
            f.left_sdo = null;
            f.middle_sdo = null;
            f.right_sdo = null;
            f.text_sdo = null;
            f.pointerUp_sdo = null;
            f.pointerDown_sdo = null;
            e = null;
            n = null;
            r = null;
            i = null;
            s = null;
            o = null;
            u = null;
            a = null;
            f.setInnerHTML("");
            l.destroy();
            f = null;
            l = null;
            t.prototype = null
        };
        f.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.POINTER_UP = "pointerUp";
    t.POINTER_DOWN = "pointerDown";
    t.CLICK = "onClick";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDMarkerToolTip = t
})(window);
(function (e) {
    var t = function (e, n, r, i) {
        var s = this;
        var o = t.prototype;
        s.pointerUp_img;
        s.pointerDown_img;
        s.text_sdo = null;
        s.pointerUp_sdo = null;
        s.pointerDown_sdo = null;
        s.bottomPointer_str = i;
        s.topPointer_str = r;
        s.pointerPosition_str;
        s.toolTipLabel_str;
        s.totalHeight = 0;
        s.pointerWidth = n.width;
        s.pointerHeight = n.height;
        s.totalWidth;
        s.maxWidth;
        s.isMobile_bl = FWDUtils.isMobile;
        s.isShowed_bl = true;
        s.hasLabel_bl = false;
        s.init = function () {
            s.setOverflow("visible");
            s.setupMainContainers();
            s.hide()
        };
        s.setupMainContainers = function () {
            s.text_sdo = new FWDSimpleDisplayObject("div");
            s.text_sdo.setBackfaceVisibility();
            s.text_sdo.getStyle().fontSmoothing = "antialiased";
            s.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            s.text_sdo.getStyle().textRendering = "optimizeLegibility";
            s.addChild(s.text_sdo);
            s.pointerUp_img = new Image;
            s.pointerUp_img.src = s.topPointer_str;
            s.pointerUp_sdo = new FWDSimpleDisplayObject("img");
            s.pointerUp_sdo.setScreen(s.pointerUp_img);
            s.pointerUp_sdo.setWidth(s.pointerWidth);
            s.pointerUp_sdo.setHeight(s.pointerHeight);
            s.pointerUp_sdo.setVisible(false);
            s.addChild(s.pointerUp_sdo);
            s.pointerDown_img = new Image;
            s.pointerDown_img.src = s.bottomPointer_str;
            s.pointerDown_sdo = new FWDSimpleDisplayObject("img");
            s.pointerDown_sdo.setScreen(s.pointerDown_img);
            s.pointerDown_sdo.setWidth(s.pointerWidth);
            s.pointerDown_sdo.setHeight(s.pointerHeight);
            s.pointerDown_sdo.setVisible(false);
            s.addChild(s.pointerDown_sdo)
        };
        s.setLabel = function (t, n) {
            if (s == null) return;
            s.maxWidth = n;
            var r = Math.min(s.maxWidth, e.stageWidth);
            s.totalWidth = r;
            s.setWidth(s.totalWidth);
            s.text_sdo.setInnerHTML(t);
            setTimeout(function () {
                s.totalHeight = s.text_sdo.getHeight() + s.pointerHeight;
                s.setWidth(s.totalWidth);
                s.setHeight(s.totalHeight - s.pointerHeight)
            }, 79)
        };
        s.positionPointer = function (e, n) {
            var r = 0;
            var i = 0;
            if (!e) e = 0;
            r = parseInt((s.totalWidth - s.pointerWidth) / 2) + e;
            if (r < 0) r = 0;
            if (n == t.POINTER_DOWN) {
                i = s.totalHeight - s.pointerHeight - 1;
                s.pointerDown_sdo.setX(r);
                s.pointerDown_sdo.setY(i)
            } else {
                i = -s.pointerHeight + 1;
                s.pointerUp_sdo.setX(r);
                s.pointerUp_sdo.setY(i)
            }
        };
        s.show = function () {
            if (s.isShowed_bl) return;
            s.positionPointer();
            if (s.isMobile_bl) {
                s.setAlpha(1)
            } else {
                TweenMax.to(s, .4, {
                    alpha: 1,
                    delay: .1,
                    ease: Quart.easeOut
                })
            }
            s.isShowed_bl = true
        };
        s.hide = function () {
            if (!s.isShowed_bl) return;
            if (!s.isMobile_bl) TweenMax.killTweensOf(s);
            s.setX(-5e3);
            s.setAlpha(0);
            s.text_sdo.setInnerHTML("");
            s.isShowed_bl = false
        };
        s.destroy = function () {
            TweenMax.killTweensOf(s);
            s.text_sdo.destroy();
            s.pointerUp_sdo.destroy();
            s.pointerDown_sdo.destroy();
            s.text_sdo = null;
            s.pointerUp_sdo = null;
            s.pointerDown_sdo = null;
            s.pointerUp_img = null;
            s.pointerDown_img = null;
            s.bottomPointer_str = null;
            s.topPointer_str = null;
            s.pointerPosition_str = null;
            s.toolTipLabel_str = null;
            e = null;
            n = null;
            r = null;
            i = null;
            s.setInnerHTML("");
            o.destroy();
            s = null;
            o = null;
            t.prototype = null
        };
        s.init()
    };
    t.setPrototype = function () {
        t.prototype = null;
        t.prototype = new FWDDisplayObject("div")
    };
    t.POINTER_UP = "pointerUp";
    t.POINTER_DOWN = "pointerDown";
    t.CLICK = "onClick";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDMarkerWindowToolTip = t
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function () {
    _gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        var r = function (e, t, r) {
            n.call(this, e, t, r);
            this._cycle = 0;
            this._yoyo = this.vars.yoyo == true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._dirty = true
        }, i = r.prototype = n.to({}, .1, {}),
            s = [];
        i.constructor = r;
        i.kill()._gc = false;
        r.killTweensOf = r.killDelayedCallsTo = n.killTweensOf;
        r.getTweensOf = n.getTweensOf;
        r.ticker = n.ticker;
        i.invalidate = function () {
            this._yoyo = this.vars.yoyo == true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return n.prototype.invalidate.call(this)
        };
        i.updateTo = function (e, t) {
            var r = this.ratio,
                i;
            if (t)
                if (this.timeline != null)
                    if (this._startTime < this._timeline._time) {
                        this._startTime = this._timeline._time;
                        this._uncache(false);
                        if (this._gc) {
                            this._enabled(true, false)
                        } else {
                            this._timeline.insert(this, this._startTime - this._delay)
                        }
                    }
            for (i in e) {
                this.vars[i] = e[i]
            }
            if (this._initted) {
                if (t) {
                    this._initted = false
                } else {
                    if (this._notifyPluginsOfEnabled && this._firstPT) {
                        n._onPluginEvent("_onDisable", this)
                    }
                    if (this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, true, false);
                        this._initted = false;
                        this.render(s, true, false)
                    } else if (this._time > 0) {
                        this._initted = false;
                        this._init();
                        var o = 1 / (1 - r),
                            u = this._firstPT,
                            a;
                        while (u) {
                            a = u.s + u.c;
                            u.c *= o;
                            u.s = a - u.c;
                            u = u._next
                        }
                    }
                }
            }
            return this
        };
        i.render = function (e, t, n) {
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                i = this._time,
                o = this._totalTime,
                u = this._cycle,
                a, f, l;
            if (e >= r) {
                this._totalTime = r;
                this._cycle = this._repeat;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0
                } else {
                    this._time = this._duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1
                } if (!this._reversed) {
                    a = true;
                    f = "onComplete"
                }
                if (this._duration === 0) {
                    if (e === 0 || this._rawPrevTime < 0)
                        if (this._rawPrevTime !== e) {
                            n = true
                        }
                    this._rawPrevTime = e
                }
            } else if (e <= 0) {
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (o !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    f = "onReverseComplete";
                    a = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0) {
                        if (this._rawPrevTime >= 0) {
                            n = true
                        }
                        this._rawPrevTime = e
                    }
                } else if (!this._initted) {
                    n = true
                }
            } else {
                this._totalTime = this._time = e;
                if (this._repeat !== 0) {
                    var c = this._duration + this._repeatDelay;
                    this._cycle = this._totalTime / c >> 0;
                    if (this._cycle !== 0)
                        if (this._cycle === this._totalTime / c) {
                            this._cycle--
                        }
                    this._time = this._totalTime - this._cycle * c;
                    if (this._yoyo)
                        if ((this._cycle & 1) !== 0) {
                            this._time = this._duration - this._time
                        }
                    if (this._time > this._duration) {
                        this._time = this._duration
                    } else if (this._time < 0) {
                        this._time = 0
                    }
                }
                if (this._easeType) {
                    var h = this._time / this._duration,
                        p = this._easeType,
                        d = this._easePower;
                    if (p === 1 || p === 3 && h >= .5) {
                        h = 1 - h
                    }
                    if (p === 3) {
                        h *= 2
                    }
                    if (d === 1) {
                        h *= h
                    } else if (d === 2) {
                        h *= h * h
                    } else if (d === 3) {
                        h *= h * h * h
                    } else if (d === 4) {
                        h *= h * h * h * h
                    }
                    if (p === 1) {
                        this.ratio = 1 - h
                    } else if (p === 2) {
                        this.ratio = h
                    } else if (this._time / this._duration < .5) {
                        this.ratio = h / 2
                    } else {
                        this.ratio = 1 - h / 2
                    }
                } else {
                    this.ratio = this._ease.getRatio(this._time / this._duration)
                }
            } if (i === this._time && !n) {
                return
            } else if (!this._initted) {
                this._init();
                if (!a && this._time) {
                    this.ratio = this._ease.getRatio(this._time / this._duration)
                }
            }
            if (!this._active)
                if (!this._paused) {
                    this._active = true
                }
            if (o == 0)
                if (this.vars.onStart)
                    if (this._totalTime !== 0 || this._duration === 0)
                        if (!t) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)
                        }
            l = this._firstPT;
            while (l) {
                if (l.f) {
                    l.t[l.p](l.c * this.ratio + l.s)
                } else {
                    var v = l.c * this.ratio + l.s;
                    if (l.p == "x") {
                        l.t.setX(v)
                    } else if (l.p == "y") {
                        l.t.setY(v)
                    } else if (l.p == "w") {
                        l.t.setWidth(v)
                    } else if (l.p == "h") {
                        l.t.setHeight(v)
                    } else if (l.p == "alpha") {
                        l.t.setAlpha(v)
                    } else {
                        l.t[l.p] = v
                    }
                }
                l = l._next
            }
            if (this._onUpdate)
                if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)
                }
            if (this._cycle != u)
                if (!t)
                    if (!this._gc)
                        if (this.vars.onRepeat) {
                            this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s)
                        }
            if (f)
                if (!this._gc) {
                    if (a) {
                        if (this._timeline.autoRemoveChildren) {
                            this._enabled(false, false)
                        }
                        this._active = false
                    }
                    if (!t)
                        if (this.vars[f]) {
                            this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || s)
                        }
                }
        };
        r.to = function (e, t, n) {
            return new r(e, t, n)
        };
        r.from = function (e, t, n) {
            n.runBackwards = true;
            if (n.immediateRender != false) {
                n.immediateRender = true
            }
            return new r(e, t, n)
        };
        r.fromTo = function (e, t, n, i) {
            i.startAt = n;
            if (n.immediateRender) {
                i.immediateRender = true
            }
            return new r(e, t, i)
        };
        r.staggerTo = r.allTo = function (e, t, n, i, s, o, u) {
            i = i || 0;
            var a = [],
                f = e.length,
                l = n.delay || 0,
                c, h, p;
            for (h = 0; h < f; h++) {
                c = {};
                for (p in n) {
                    c[p] = n[p]
                }
                c.delay = l;
                if (h === f - 1)
                    if (s) {
                        c.onComplete = function () {
                            if (n.onComplete) {
                                n.onComplete.apply(n.onCompleteScope, n.onCompleteParams)
                            }
                            s.apply(u, o)
                        }
                    }
                a[h] = new r(e[h], t, c);
                l += i
            }
            return a
        };
        r.staggerFrom = r.allFrom = function (e, t, n, i, s, o, u) {
            n.runBackwards = true;
            if (n.immediateRender != false) {
                n.immediateRender = true
            }
            return r.staggerTo(e, t, n, i, s, o, u)
        };
        r.staggerFromTo = r.allFromTo = function (e, t, n, i, s, o, u, a) {
            i.startAt = n;
            if (n.immediateRender) {
                i.immediateRender = true
            }
            return r.staggerTo(e, t, i, s, o, u, a)
        };
        r.delayedCall = function (e, t, n, i, s) {
            return new r(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: i,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: i,
                immediateRender: false,
                useFrames: s,
                overwrite: 0
            })
        };
        r.set = function (e, t) {
            return new r(e, 0, t)
        };
        r.isTweening = function (e) {
            var t = n.getTweensOf(e),
                r = t.length,
                i;
            while (--r > -1) {
                if ((i = t[r])._active || i._startTime === i.timeline._time && i.timeline._active) {
                    return true
                }
            }
            return false
        };
        var o = function (e, t) {
            var r = [],
                i = 0,
                s = e._first;
            while (s) {
                if (s instanceof n) {
                    r[i++] = s
                } else {
                    if (t) {
                        r[i++] = s
                    }
                    r = r.concat(o(s, t));
                    i = r.length
                }
                s = s._next
            }
            return r
        }, u = r.getAllTweens = function (t) {
                var n = o(e._rootTimeline, t);
                return n.concat(o(e._rootFramesTimeline, t))
            };
        r.killAll = function (e, n, r, i) {
            if (n == null) {
                n = true
            }
            if (r == null) {
                r = true
            }
            var s = u(i != false),
                o = s.length,
                a = n && r && i,
                f, l, c;
            for (c = 0; c < o; c++) {
                l = s[c];
                if (a || l instanceof t || (f = l.target === l.vars.onComplete) && r || n && !f) {
                    if (e) {
                        l.totalTime(l.totalDuration())
                    } else {
                        l._enabled(false, false)
                    }
                }
            }
        };
        r.killChildTweensOf = function (e, t) {
            if (e == null) {
                return
            }
            if (e.jquery) {
                e.each(function (e, n) {
                    r.killChildTweensOf(n, t)
                });
                return
            }
            var i = n._tweenLookup,
                s = [],
                o, u, a, f, l;
            for (a in i) {
                u = i[a].target.parentNode;
                while (u) {
                    if (u === e) {
                        s = s.concat(i[a].tweens)
                    }
                    u = u.parentNode
                }
            }
            l = s.length;
            for (f = 0; f < l; f++) {
                if (t) {
                    s[f].totalTime(s[f].totalDuration())
                }
                s[f]._enabled(false, false)
            }
        };
        r.pauseAll = function (e, t, n) {
            a(true, e, t, n)
        };
        r.resumeAll = function (e, t, n) {
            a(false, e, t, n)
        };
        var a = function (e, n, r, i) {
            if (n == undefined) {
                n = true
            }
            if (r == undefined) {
                r = true
            }
            var s = u(i),
                o = n && r && i,
                a = s.length,
                f, l;
            while (--a > -1) {
                l = s[a];
                if (o || l instanceof t || (f = l.target === l.vars.onComplete) && r || n && !f) {
                    l.paused(e)
                }
            }
        };
        i.progress = function (e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e + this._cycle * this._duration, false)
        };
        i.totalProgress = function (e) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        i.time = function (e, t) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (e > this._duration) {
                e = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)
            } else if (this._repeat != 0) {
                e += this._cycle * (this._duration + this._repeatDelay)
            }
            return this.totalTime(e, t)
        };
        i.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
                    this._dirty = false
                }
                return this._totalDuration
            }
            return this._repeat == -1 ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        i.repeat = function (e) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = e;
            return this._uncache(true)
        };
        i.repeatDelay = function (e) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = e;
            return this._uncache(true)
        };
        i.yoyo = function (e) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = e;
            return this
        };
        return r
    }, true);
    _gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (e, t, n) {
        "use strict";
        var r = function (e) {
            t.call(this, e);
            this._labels = {};
            this.autoRemoveChildren = this.vars.autoRemoveChildren == true;
            this.smoothChildTiming = this.vars.smoothChildTiming == true;
            this._sortChildren = true;
            this._onUpdate = this.vars.onUpdate;
            var n = i.length,
                r, s;
            while (--n > -1) {
                if (s = this.vars[i[n]]) {
                    r = s.length;
                    while (--r > -1) {
                        if (s[r] === "{self}") {
                            s = this.vars[i[n]] = s.concat();
                            s[r] = this
                        }
                    }
                }
            }
            if (this.vars.tweens instanceof Array) {
                this.insertMultiple(this.vars.tweens, 0, this.vars.align || "normal", this.vars.stagger || 0)
            }
        }, i = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
            s = [],
            o = function (e) {
                var t = {}, n;
                for (n in e) {
                    t[n] = e[n]
                }
                return t
            }, u = r.prototype = new t;
        u.constructor = r;
        u.kill()._gc = false;
        u.to = function (e, t, r, i, s) {
            return this.insert(new n(e, t, r), this._parseTimeOrLabel(s) + (i || 0))
        };
        u.from = function (e, t, r, i, s) {
            return this.insert(n.from(e, t, r), this._parseTimeOrLabel(s) + (i || 0))
        };
        u.fromTo = function (e, t, r, i, s, o) {
            return this.insert(n.fromTo(e, t, r, i), this._parseTimeOrLabel(o) + (s || 0))
        };
        u.staggerTo = function (e, t, i, s, u, a, f, l, c) {
            var h = new r({
                onComplete: f,
                onCompleteParams: l,
                onCompleteScope: c
            });
            s = s || 0;
            for (var p = 0; p < e.length; p++) {
                if (i.startAt != null) {
                    i.startAt = o(i.startAt)
                }
                h.insert(new n(e[p], t, o(i)), p * s)
            }
            return this.insert(h, this._parseTimeOrLabel(a) + (u || 0))
        };
        u.staggerFrom = function (e, t, n, r, i, s, o, u, a) {
            if (n.immediateRender == null) {
                n.immediateRender = true
            }
            n.runBackwards = true;
            return this.staggerTo(e, t, n, r, i, s, o, u, a)
        };
        u.staggerFromTo = function (e, t, n, r, i, s, o, u, a, f) {
            r.startAt = n;
            if (n.immediateRender) {
                r.immediateRender = true
            }
            return this.staggerTo(e, t, r, i, s, o, u, a, f)
        };
        u.call = function (e, t, r, i, s) {
            return this.insert(n.delayedCall(0, e, t, r), this._parseTimeOrLabel(s) + (i || 0))
        };
        u.set = function (e, t, r, i) {
            t.immediateRender = false;
            return this.insert(new n(e, 0, t), this._parseTimeOrLabel(i) + (r || 0))
        };
        r.exportRoot = function (e, t) {
            e = e || {};
            if (e.smoothChildTiming == null) {
                e.smoothChildTiming = true
            }
            var i = new r(e),
                s = i._timeline;
            if (t == null) {
                t = true
            }
            s._remove(i, true);
            i._startTime = 0;
            i._rawPrevTime = i._time = i._totalTime = s._time;
            var o = s._first,
                u;
            while (o) {
                u = o._next;
                if (!t || !(o instanceof n && o.target == o.vars.onComplete)) {
                    i.insert(o, o._startTime - o._delay)
                }
                o = u
            }
            s.insert(i, 0);
            return i
        };
        u.insert = function (r, i) {
            if (r instanceof e) {} else if (r instanceof Array) {
                return this.insertMultiple(r, i)
            } else if (typeof r === "string") {
                return this.addLabel(r, this._parseTimeOrLabel(i || 0, true))
            } else if (typeof r === "function") {
                r = n.delayedCall(0, r)
            } else {
                throw "ERROR: Cannot insert() " + r + " into the TimelineLite/Max because it is neither a tween, timeline, function, nor a String.";
                return this
            }
            t.prototype.insert.call(this, r, this._parseTimeOrLabel(i || 0, true));
            if (this._gc)
                if (!this._paused)
                    if (this._time === this._duration)
                        if (this._time < this.duration()) {
                            var s = this;
                            while (s._gc && s._timeline) {
                                if (s._timeline.smoothChildTiming) {
                                    s.totalTime(s._totalTime, true)
                                } else {
                                    s._enabled(true, false)
                                }
                                s = s._timeline
                            }
                        }
            return this
        };
        u.remove = function (t) {
            if (t instanceof e) {
                return this._remove(t, false)
            } else if (t instanceof Array) {
                var n = t.length;
                while (--n > -1) {
                    this.remove(t[n])
                }
                return this
            } else if (typeof t === "string") {
                return this.removeLabel(t)
            }
            return this.kill(null, t)
        };
        u.append = function (e, t) {
            return this.insert(e, this.duration() + (t || 0))
        };
        u.insertMultiple = function (e, t, n, i) {
            n = n || "normal";
            i = i || 0;
            var s, o, u = this._parseTimeOrLabel(t || 0, true),
                a = e.length;
            for (s = 0; s < a; s++) {
                if ((o = e[s]) instanceof Array) {
                    o = new r({
                        tweens: o
                    })
                }
                this.insert(o, u);
                if (typeof o === "string" || typeof o === "function") {} else if (n === "sequence") {
                    u = o._startTime + o.totalDuration() / o._timeScale
                } else if (n === "start") {
                    o._startTime -= o.delay()
                }
                u += i
            }
            return this._uncache(true)
        };
        u.appendMultiple = function (e, t, n, r) {
            return this.insertMultiple(e, this.duration() + (t || 0), n, r)
        };
        u.addLabel = function (e, t) {
            this._labels[e] = t;
            return this
        };
        u.removeLabel = function (e) {
            delete this._labels[e];
            return this
        };
        u.getLabelTime = function (e) {
            return this._labels[e] != null ? this._labels[e] : -1
        };
        u._parseTimeOrLabel = function (e, t) {
            if (e == null) {
                return this.duration()
            } else if (typeof e === "string" && isNaN(e)) {
                if (this._labels[e] == null) {
                    return t ? this._labels[e] = this.duration() : 0
                }
                return this._labels[e]
            }
            return Number(e)
        };
        u.seek = function (e, t) {
            return this.totalTime(this._parseTimeOrLabel(e, false), t != false)
        };
        u.stop = function () {
            return this.paused(true)
        };
        u.gotoAndPlay = function (e, n) {
            return t.prototype.play.call(this, e, n)
        };
        u.gotoAndStop = function (e, t) {
            return this.pause(e, t)
        };
        u.render = function (e, t, n) {
            if (this._gc) {
                this._enabled(true, false)
            }
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                i = this._time,
                o = this._startTime,
                u = this._timeScale,
                a = this._paused,
                f, l, c, h;
            if (e >= r) {
                this._totalTime = this._time = r;
                if (!this._reversed)
                    if (!this._hasPausedChild()) {
                        l = true;
                        h = "onComplete";
                        if (this._duration === 0)
                            if (e === 0 || this._rawPrevTime < 0)
                                if (this._rawPrevTime !== e) {
                                    n = true
                                }
                    }
                this._rawPrevTime = e;
                e = r + 1e-6
            } else if (e <= 0) {
                this._totalTime = this._time = 0;
                if (i !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    h = "onReverseComplete";
                    l = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0)
                        if (this._rawPrevTime >= 0) {
                            n = true
                        }
                } else if (!this._initted) {
                    n = true
                }
                this._rawPrevTime = e;
                e = -1e-6
            } else {
                this._totalTime = this._time = this._rawPrevTime = e
            } if (this._time === i && !n) {
                return
            } else if (!this._initted) {
                this._initted = true
            }
            if (i === 0)
                if (this.vars.onStart)
                    if (this._time !== 0)
                        if (!t) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)
                        }
            if (this._time > i) {
                f = this._first;
                while (f) {
                    c = f._next;
                    if (this._paused && !a) {
                        break
                    } else if (f._active || f._startTime <= this._time && !f._paused && !f._gc) {
                        if (!f._reversed) {
                            f.render((e - f._startTime) * f._timeScale, t, false)
                        } else {
                            f.render((!f._dirty ? f._totalDuration : f.totalDuration()) - (e - f._startTime) * f._timeScale, t, false)
                        }
                    }
                    f = c
                }
            } else {
                f = this._last;
                while (f) {
                    c = f._prev;
                    if (this._paused && !a) {
                        break
                    } else if (f._active || f._startTime <= i && !f._paused && !f._gc) {
                        if (!f._reversed) {
                            f.render((e - f._startTime) * f._timeScale, t, false)
                        } else {
                            f.render((!f._dirty ? f._totalDuration : f.totalDuration()) - (e - f._startTime) * f._timeScale, t, false)
                        }
                    }
                    f = c
                }
            } if (this._onUpdate)
                if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)
                }
            if (h)
                if (!this._gc)
                    if (o === this._startTime || u != this._timeScale)
                        if (this._time === 0 || r >= this.totalDuration()) {
                            if (l) {
                                if (this._timeline.autoRemoveChildren) {
                                    this._enabled(false, false)
                                }
                                this._active = false
                            }
                            if (!t)
                                if (this.vars[h]) {
                                    this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)
                                }
                        }
        };
        u._hasPausedChild = function () {
            var e = this._first;
            while (e) {
                if (e._paused || e instanceof r && e._hasPausedChild()) {
                    return true
                }
                e = e._next
            }
            return false
        };
        u.getChildren = function (e, t, r, i) {
            i = i || -9999999999;
            var s = [],
                o = this._first,
                u = 0;
            while (o) {
                if (o._startTime < i) {} else if (o instanceof n) {
                    if (t != false) {
                        s[u++] = o
                    }
                } else {
                    if (r != false) {
                        s[u++] = o
                    }
                    if (e != false) {
                        s = s.concat(o.getChildren(true, t, r));
                        u = s.length
                    }
                }
                o = o._next
            }
            return s
        };
        u.getTweensOf = function (e, t) {
            var r = n.getTweensOf(e),
                i = r.length,
                s = [],
                o = 0;
            while (--i > -1) {
                if (r[i].timeline === this || t && this._contains(r[i])) {
                    s[o++] = r[i]
                }
            }
            return s
        };
        u._contains = function (e) {
            var t = e.timeline;
            while (t) {
                if (t === this) {
                    return true
                }
                t = t.timeline
            }
            return false
        };
        u.shiftChildren = function (e, t, n) {
            n = n || 0;
            var r = this._first;
            while (r) {
                if (r._startTime >= n) {
                    r._startTime += e
                }
                r = r._next
            }
            if (t) {
                for (var i in this._labels) {
                    if (this._labels[i] >= n) {
                        this._labels[i] += e
                    }
                }
            }
            return this._uncache(true)
        };
        u._kill = function (e, t) {
            if (e == null)
                if (t == null) {
                    return this._enabled(false, false)
                }
            var n = t == null ? this.getChildren(true, true, false) : this.getTweensOf(t),
                r = n.length,
                i = false;
            while (--r > -1) {
                if (n[r]._kill(e, t)) {
                    i = true
                }
            }
            return i
        };
        u.clear = function (e) {
            var t = this.getChildren(false, true, true),
                n = t.length;
            this._time = this._totalTime = 0;
            while (--n > -1) {
                t[n]._enabled(false, false)
            }
            if (e != false) {
                this._labels = {}
            }
            return this._uncache(true)
        };
        u.invalidate = function () {
            var e = this._first;
            while (e) {
                e.invalidate();
                e = e._next
            }
            return this
        };
        u._enabled = function (e, n) {
            if (e == this._gc) {
                var r = this._first;
                while (r) {
                    r._enabled(e, true);
                    r = r._next
                }
            }
            return t.prototype._enabled.call(this, e, n)
        };
        u.progress = function (e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e, false)
        };
        u.duration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    this.totalDuration()
                }
                return this._duration
            }
            if (this.duration() !== 0)
                if (e !== 0) {
                    this.timeScale(this._duration / e)
                }
            return this
        };
        u.totalDuration = function (e) {
            if (!arguments.length) {
                if (this._dirty) {
                    var t = 0,
                        n = this._first,
                        r = -999999999999,
                        i, s;
                    while (n) {
                        i = n._next;
                        if (n._startTime < r && this._sortChildren) {
                            this.insert(n, n._startTime - n._delay)
                        } else {
                            r = n._startTime
                        } if (n._startTime < 0) {
                            t -= n._startTime;
                            this.shiftChildren(-n._startTime, false, -9999999999)
                        }
                        s = n._startTime + (!n._dirty ? n._totalDuration : n.totalDuration()) / n._timeScale;
                        if (s > t) {
                            t = s
                        }
                        n = i
                    }
                    this._duration = this._totalDuration = t;
                    this._dirty = false
                }
                return this._totalDuration
            }
            if (this.totalDuration() !== 0)
                if (e !== 0) {
                    this.timeScale(this._totalDuration / e)
                }
            return this
        };
        u.usesFrames = function () {
            var t = this._timeline;
            while (t._timeline) {
                t = t._timeline
            }
            return t === e._rootFramesTimeline
        };
        u.rawTime = function () {
            return this._paused || this._totalTime !== 0 && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return r
    }, true);
    _gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, t, n) {
        var r = function (t) {
            e.call(this, t);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = this.vars.yoyo == true;
            this._dirty = true
        }, i = [],
            s = new n(null, null, 1, 0),
            o = function (e) {
                while (e) {
                    if (e._paused) {
                        return true
                    }
                    e = e._timeline
                }
                return false
            }, u = r.prototype = new e;
        u.constructor = r;
        u.kill()._gc = false;
        r.version = 12;
        u.invalidate = function () {
            this._yoyo = this.vars.yoyo == true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return e.prototype.invalidate.call(this)
        };
        u.addCallback = function (e, n, r, i) {
            return this.insert(t.delayedCall(0, e, r, i), n)
        };
        u.removeCallback = function (e, t) {
            if (t == null) {
                this._kill(null, e)
            } else {
                var n = this.getTweensOf(e, false),
                    r = n.length,
                    i = this._parseTimeOrLabel(t, false);
                while (--r > -1) {
                    if (n[r]._startTime === i) {
                        n[r]._enabled(false, false)
                    }
                }
            }
            return this
        };
        u.tweenTo = function (e, n) {
            n = n || {};
            var r = {
                ease: s,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: false
            }, o, u;
            for (o in n) {
                r[o] = n[o]
            }
            r.time = this._parseTimeOrLabel(e, false);
            u = new t(this, Math.abs(Number(r.time) - this._time) / this._timeScale || .001, r);
            r.onStart = function () {
                u.target.paused(true);
                if (u.vars.time != u.target.time()) {
                    u.duration(Math.abs(u.vars.time - u.target.time()) / u.target._timeScale)
                }
                if (n.onStart) {
                    n.onStart.apply(n.onStartScope || u, n.onStartParams || i)
                }
            };
            return u
        };
        u.tweenFromTo = function (e, t, n) {
            n = n || {};
            n.startAt = {
                time: this._parseTimeOrLabel(e, false)
            };
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - r.vars.startAt.time) / this._timeScale || .001)
        };
        u.render = function (e, t, n) {
            if (this._gc) {
                this._enabled(true, false)
            }
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration : this.totalDuration(),
                s = this._time,
                o = this._totalTime,
                u = this._startTime,
                a = this._timeScale,
                f = this._rawPrevTime,
                l = this._paused,
                c = this._cycle,
                h, p, d, v, m;
            if (e >= r) {
                if (!this._locked) {
                    this._totalTime = r;
                    this._cycle = this._repeat
                }
                if (!this._reversed)
                    if (!this._hasPausedChild()) {
                        p = true;
                        m = "onComplete";
                        if (this._duration === 0)
                            if (e === 0 || this._rawPrevTime < 0)
                                if (this._rawPrevTime !== e) {
                                    n = true
                                }
                    }
                this._rawPrevTime = e;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = 0;
                    e = -1e-6
                } else {
                    this._time = this._duration;
                    e = this._duration + 1e-6
                }
            } else if (e <= 0) {
                if (!this._locked) {
                    this._totalTime = this._cycle = 0
                }
                this._time = 0;
                if (s !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    m = "onReverseComplete";
                    p = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0)
                        if (this._rawPrevTime >= 0) {
                            n = true
                        }
                } else if (!this._initted) {
                    n = true
                }
                this._rawPrevTime = e;
                e = -1e-6
            } else {
                this._time = this._rawPrevTime = e;
                if (!this._locked) {
                    this._totalTime = e;
                    if (this._repeat !== 0) {
                        var g = this._duration + this._repeatDelay;
                        this._cycle = this._totalTime / g >> 0;
                        if (this._cycle !== 0)
                            if (this._cycle === this._totalTime / g) {
                                this._cycle--
                            }
                        this._time = this._totalTime - this._cycle * g;
                        if (this._yoyo)
                            if ((this._cycle & 1) != 0) {
                                this._time = this._duration - this._time
                            }
                        if (this._time > this._duration) {
                            this._time = this._duration;
                            e = this._duration + 1e-6
                        } else if (this._time < 0) {
                            this._time = 0;
                            e = -1e-6
                        } else {
                            e = this._time
                        }
                    }
                }
            } if (this._cycle !== c)
                if (!this._locked) {
                    var y = this._yoyo && (c & 1) !== 0,
                        b = y === (this._yoyo && (this._cycle & 1) !== 0),
                        w = this._totalTime,
                        E = this._cycle,
                        S = this._rawPrevTime,
                        x = this._time;
                    this._totalTime = c * this._duration;
                    if (this._cycle < c) {
                        y = !y
                    } else {
                        this._totalTime += this._duration
                    }
                    this._time = s;
                    this._rawPrevTime = f;
                    this._cycle = c;
                    this._locked = true;
                    s = y ? 0 : this._duration;
                    this.render(s, t, false);
                    if (!t)
                        if (!this._gc) {
                            if (this.vars.onRepeat) {
                                this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || i)
                            }
                        }
                    if (b) {
                        s = y ? this._duration + 1e-6 : -1e-6;
                        this.render(s, true, false)
                    }
                    this._time = x;
                    this._totalTime = w;
                    this._cycle = E;
                    this._rawPrevTime = S;
                    this._locked = false
                }
            if (this._time === s && !n) {
                return
            } else if (!this._initted) {
                this._initted = true
            }
            if (o === 0)
                if (this.vars.onStart)
                    if (this._totalTime !== 0)
                        if (!t) {
                            this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || i)
                        }
            if (this._time > s) {
                h = this._first;
                while (h) {
                    d = h._next;
                    if (this._paused && !l) {
                        break
                    } else if (h._active || h._startTime <= this._time && !h._paused && !h._gc) {
                        if (!h._reversed) {
                            h.render((e - h._startTime) * h._timeScale, t, false)
                        } else {
                            h.render((!h._dirty ? h._totalDuration : h.totalDuration()) - (e - h._startTime) * h._timeScale, t, false)
                        }
                    }
                    h = d
                }
            } else {
                h = this._last;
                while (h) {
                    d = h._prev;
                    if (this._paused && !l) {
                        break
                    } else if (h._active || h._startTime <= s && !h._paused && !h._gc) {
                        if (!h._reversed) {
                            h.render((e - h._startTime) * h._timeScale, t, false)
                        } else {
                            h.render((!h._dirty ? h._totalDuration : h.totalDuration()) - (e - h._startTime) * h._timeScale, t, false)
                        }
                    }
                    h = d
                }
            } if (this._onUpdate)
                if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)
                }
            if (m)
                if (!this._locked)
                    if (!this._gc)
                        if (u === this._startTime || a != this._timeScale)
                            if (this._time === 0 || r >= this.totalDuration()) {
                                if (p) {
                                    if (this._timeline.autoRemoveChildren) {
                                        this._enabled(false, false)
                                    }
                                    this._active = false
                                }
                                if (!t)
                                    if (this.vars[m]) {
                                        this.vars[m].apply(this.vars[m + "Scope"] || this, this.vars[m + "Params"] || i)
                                    }
                            }
        };
        u.getActive = function (e, t, n) {
            if (e == null) {
                e = true
            }
            if (t == null) {
                t = true
            }
            if (n == null) {
                n = false
            }
            var r = [],
                i = this.getChildren(e, t, n),
                s = 0,
                u = i.length,
                a, f;
            for (a = 0; a < u; a++) {
                f = i[a];
                if (!f._paused)
                    if (f._timeline._time >= f._startTime)
                        if (f._timeline._time < f._startTime + f._totalDuration / f._timeScale)
                            if (!o(f._timeline)) {
                                r[s++] = f
                            }
            }
            return r
        };
        u.getLabelAfter = function (e) {
            if (!e)
                if (e !== 0) {
                    e = this._time
                }
            var t = this.getLabelsArray(),
                n = t.length,
                r;
            for (r = 0; r < n; r++) {
                if (t[r].time > e) {
                    return t[r].name
                }
            }
            return null
        };
        u.getLabelBefore = function (e) {
            if (e == null) {
                e = this._time
            }
            var t = this.getLabelsArray(),
                n = t.length;
            while (--n > -1) {
                if (t[n].time < e) {
                    return t[n].name
                }
            }
            return null
        };
        u.getLabelsArray = function () {
            var e = [],
                t = 0,
                n;
            for (n in this._labels) {
                e[t++] = {
                    time: this._labels[n],
                    name: n
                }
            }
            e.sort(function (e, t) {
                return e.time - t.time
            });
            return e
        };
        u.progress = function (e) {
            return !arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e + this._cycle * this._duration, false)
        };
        u.totalProgress = function (e) {
            return !arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        u.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    e.prototype.totalDuration.call(this);
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat
                }
                return this._totalDuration
            }
            return this._repeat == -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        u.time = function (e, t) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (e > this._duration) {
                e = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)
            } else if (this._repeat != 0) {
                e += this._cycle * (this._duration + this._repeatDelay)
            }
            return this.totalTime(e, t)
        };
        u.repeat = function (e) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = e;
            return this._uncache(true)
        };
        u.repeatDelay = function (e) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = e;
            return this._uncache(true)
        };
        u.yoyo = function (e) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = e;
            return this
        };
        u.currentLabel = function (e) {
            if (!arguments.length) {
                return this.getLabelBefore(this._time + 1e-8)
            }
            return this.seek(e, true)
        };
        return r
    }, true);
    _gsDefine("plugins.BezierPlugin", ["plugins.TweenPlugin"], function (e) {
        var t = function (t, n) {
            e.call(this, "bezier", -1);
            this._overwriteProps.pop();
            this._func = {};
            this._round = {}
        }, n = t.prototype = new e("bezier", 1),
            i = 180 / Math.PI,
            s = [],
            o = [],
            u = [],
            f = {}, c = function (t, n, r, i) {
                this.a = t;
                this.b = n;
                this.c = r;
                this.d = i;
                this.da = i - t;
                this.ca = r - t;
                this.ba = n - t
            }, h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            p = t.bezierThrough = function (e, t, n, i, c, p) {
                var d = {}, g = [],
                    y, b;
                c = typeof c === "string" ? "," + c + "," : h;
                if (t == null) {
                    t = 1
                }
                for (b in e[0]) {
                    g.push(b)
                }
                s.length = o.length = u.length = 0;
                y = g.length;
                while (--y > -1) {
                    b = g[y];
                    f[b] = c.indexOf("," + b + ",") !== -1;
                    d[b] = v(e, b, f[b], p)
                }
                y = s.length;
                while (--y > -1) {
                    s[y] = Math.sqrt(s[y]);
                    o[y] = Math.sqrt(o[y])
                }
                if (!i) {
                    y = g.length;
                    while (--y > -1) {
                        if (f[b]) {
                            a = d[g[y]];
                            l = a.length - 1;
                            for (j = 0; j < l; j++) {
                                r = a[j + 1].da / o[j] + a[j].da / s[j];
                                u[j] = (u[j] || 0) + r * r
                            }
                        }
                    }
                    y = u.length;
                    while (--y > -1) {
                        u[y] = Math.sqrt(u[y])
                    }
                }
                y = g.length;
                while (--y > -1) {
                    b = g[y];
                    m(d[b], t, n, i, f[b])
                }
                return d
            }, d = function (e, t, n) {
                t = t || "soft";
                var r = {}, i = t === "cubic" ? 3 : 2,
                    s = t === "soft",
                    o = [],
                    u, a, f, l, h, p, d, v, m, g, y;
                if (s && n) {
                    e = [n].concat(e)
                }
                if (e == null || e.length < i + 1) {
                    throw "invalid Bezier data"
                }
                for (m in e[0]) {
                    o.push(m)
                }
                p = o.length;
                while (--p > -1) {
                    m = o[p];
                    r[m] = h = [];
                    g = 0;
                    v = e.length;
                    for (d = 0; d < v; d++) {
                        u = n == null ? e[d][m] : typeof (y = e[d][m]) === "string" && y.charAt(1) === "=" ? n[m] + Number(y.charAt(0) + y.substr(2)) : Number(y);
                        if (s)
                            if (d > 1)
                                if (d < v - 1) {
                                    h[g++] = (u + h[g - 2]) / 2
                                }
                        h[g++] = u
                    }
                    v = g - i + 1;
                    g = 0;
                    for (d = 0; d < v; d += i) {
                        u = h[d];
                        a = h[d + 1];
                        f = h[d + 2];
                        l = i === 2 ? 0 : h[d + 3];
                        h[g++] = y = i === 3 ? new c(u, a, f, l) : new c(u, (2 * a + u) / 3, (2 * a + f) / 3, f)
                    }
                    h.length = g
                }
                return r
            }, v = function (e, t, n, r) {
                var i = [],
                    u, a, f, l, h, p, d, v;
                if (r) {
                    e = [r].concat(e);
                    a = e.length;
                    while (--a > -1) {
                        if (typeof (v = e[a][t]) === "string")
                            if (v.charAt(1) === "=") {
                                e[a][t] = r[t] + Number(v.charAt(0) + v.substr(2))
                            }
                    }
                }
                u = e.length - 2;
                if (u < 0) {
                    i[0] = new c(e[0][t], 0, 0, e[u < -1 ? 0 : 1][t]);
                    return i
                }
                for (a = 0; a < u; a++) {
                    l = e[a][t];
                    h = e[a + 1][t];
                    i[a] = new c(l, 0, 0, h);
                    if (n) {
                        p = e[a + 2][t];
                        s[a] = (s[a] || 0) + (h - l) * (h - l);
                        o[a] = (o[a] || 0) + (p - h) * (p - h)
                    }
                }
                i[a] = new c(e[a][t], 0, 0, e[a + 1][t]);
                return i
            }, m = function (e, t, n, r, i) {
                var a = e.length - 1,
                    f = 0,
                    l = e[0].a,
                    c, h, p, d, v, m, y, b, w, E, S, x, T;
                for (c = 0; c < a; c++) {
                    v = e[f];
                    h = v.a;
                    p = v.d;
                    d = e[f + 1].d;
                    if (i) {
                        S = s[c];
                        x = o[c];
                        T = (x + S) * t * .25 / (r ? .5 : u[c] || .5);
                        m = p - (p - h) * (r ? t * .5 : T / S);
                        y = p + (d - p) * (r ? t * .5 : T / x);
                        b = p - (m + (y - m) * (S * 3 / (S + x) + .5) / 4)
                    } else {
                        m = p - (p - h) * t * .5;
                        y = p + (d - p) * t * .5;
                        b = p - (m + y) / 2
                    }
                    m += b;
                    y += b;
                    v.c = w = m;
                    if (c != 0) {
                        v.b = l
                    } else {
                        v.b = l = v.a + (v.c - v.a) * .6
                    }
                    v.da = p - h;
                    v.ca = w - h;
                    v.ba = l - h;
                    if (n) {
                        E = g(h, l, w, p);
                        e.splice(f, 1, E[0], E[1], E[2], E[3]);
                        f += 4
                    } else {
                        f++
                    }
                    l = y
                }
                v = e[f];
                v.b = l;
                v.c = l + (v.d - l) * .4;
                v.da = v.d - v.a;
                v.ca = v.c - v.a;
                v.ba = l - v.a;
                if (n) {
                    E = g(v.a, l, v.c, v.d);
                    e.splice(f, 1, E[0], E[1], E[2], E[3])
                }
            }, g = t.cubicToQuadratic = function (e, t, n, r) {
                var i = {
                    a: e
                }, s = {}, o = {}, u = {
                        c: r
                    }, a = (e + t) / 2,
                    f = (t + n) / 2,
                    l = (n + r) / 2,
                    c = (a + f) / 2,
                    h = (f + l) / 2,
                    p = (h - c) / 8;
                i.b = a + (e - a) / 4;
                s.b = c + p;
                i.c = s.a = (i.b + s.b) / 2;
                s.c = o.a = (c + h) / 2;
                o.b = h - p;
                u.b = l + (r - l) / 4;
                o.c = u.a = (o.b + u.b) / 2;
                return [i, s, o, u]
            }, y = t.quadraticToCubic = function (e, t, n) {
                return new c(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
            }, b = function (e, t) {
                t = t >> 0 || 6;
                var n = [],
                    r = [],
                    i = 0,
                    s = 0,
                    o = t - 1,
                    u = [],
                    a = [],
                    f, l, c, h;
                for (f in e) {
                    w(e[f], n, t)
                }
                c = n.length;
                for (l = 0; l < c; l++) {
                    i += Math.sqrt(n[l]);
                    h = l % t;
                    a[h] = i;
                    if (h === o) {
                        s += i;
                        h = l / t >> 0;
                        u[h] = a;
                        r[h] = s;
                        i = 0;
                        a = []
                    }
                }
                return {
                    length: s,
                    lengths: r,
                    segments: u
                }
            }, w = function (e, t, n) {
                var r = 1 / n,
                    i = e.length,
                    s, o, u, a, f, l, c, h, p, d, v;
                while (--i > -1) {
                    d = e[i];
                    u = d.a;
                    a = d.d - u;
                    f = d.c - u;
                    l = d.b - u;
                    s = o = 0;
                    for (h = 1; h <= n; h++) {
                        c = r * h;
                        p = 1 - c;
                        s = o - (o = (c * c * a + 3 * p * (c * f + p * l)) * c);
                        v = i * n + h - 1;
                        t[v] = (t[v] || 0) + s * s
                    }
                }
            };
        n.constructor = t;
        t.API = 2;
        n._onInitTween = function (e, t, n) {
            this._target = e;
            if (t instanceof Array) {
                t = {
                    values: t
                }
            }
            this._props = [];
            this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution);
            var r = t.values || [],
                i = {}, s = r[0],
                o = t.autoRotate || n.vars.orientToBezier,
                u, a, f, l, c;
            this._autoRotate = o ? o instanceof Array ? o : [
                ["x", "y", "rotation", o === true ? 0 : Number(o) || 0]
            ] : null;
            for (u in s) {
                this._props.push(u)
            }
            f = this._props.length;
            while (--f > -1) {
                u = this._props[f];
                this._overwriteProps.push(u);
                a = this._func[u] = typeof e[u] === "function";
                i[u] = !a ? parseFloat(e[u]) : e[u.indexOf("set") || typeof e["get" + u.substr(3)] !== "function" ? u : "get" + u.substr(3)]();
                if (!c)
                    if (i[u] !== r[0][u]) {
                        c = i
                    }
            }
            this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? p(r, isNaN(t.curviness) ? 1 : t.curviness, false, t.type === "thruBasic", t.correlate, c) : d(r, t.type, i);
            this._segCount = this._beziers[u].length;
            if (this._timeRes) {
                var h = b(this._beziers, this._timeRes);
                this._length = h.length;
                this._lengths = h.lengths;
                this._segments = h.segments;
                this._l1 = this._li = this._s1 = this._si = 0;
                this._l2 = this._lengths[0];
                this._curSeg = this._segments[0];
                this._s2 = this._curSeg[0];
                this._prec = 1 / this._curSeg.length
            }
            if (o = this._autoRotate) {
                if (!(o[0] instanceof Array)) {
                    this._autoRotate = o = [o]
                }
                f = o.length;
                while (--f > -1) {
                    for (l = 0; l < 3; l++) {
                        u = o[f][l];
                        this._func[u] = typeof e[u] === "function" ? e[u.indexOf("set") || typeof e["get" + u.substr(3)] !== "function" ? u : "get" + u.substr(3)] : false
                    }
                }
            }
            return true
        };
        n.setRatio = function (e) {
            var t = this._segCount,
                n = this._func,
                r = this._target,
                s, o, u, a, f, l, c, h, p, d;
            if (!this._timeRes) {
                s = e < 0 ? 0 : e >= 1 ? t - 1 : t * e >> 0;
                l = (e - s * (1 / t)) * t
            } else {
                p = this._lengths;
                d = this._curSeg;
                e *= this._length;
                u = this._li;
                if (e > this._l2 && u < t - 1) {
                    h = t - 1;
                    while (u < h && (this._l2 = p[++u]) <= e) {}
                    this._l1 = p[u - 1];
                    this._li = u;
                    this._curSeg = d = this._segments[u];
                    this._s2 = d[this._s1 = this._si = 0]
                } else if (e < this._l1 && u > 0) {
                    while (u > 0 && (this._l1 = p[--u]) >= e) {}
                    if (u === 0 && e < this._l1) {
                        this._l1 = 0
                    } else {
                        u++
                    }
                    this._l2 = p[u];
                    this._li = u;
                    this._curSeg = d = this._segments[u];
                    this._s1 = d[(this._si = d.length - 1) - 1] || 0;
                    this._s2 = d[this._si]
                }
                s = u;
                e -= this._l1;
                u = this._si;
                if (e > this._s2 && u < d.length - 1) {
                    h = d.length - 1;
                    while (u < h && (this._s2 = d[++u]) <= e) {}
                    this._s1 = d[u - 1];
                    this._si = u
                } else if (e < this._s1 && u > 0) {
                    while (u > 0 && (this._s1 = d[--u]) >= e) {}
                    if (u === 0 && e < this._s1) {
                        this._s1 = 0
                    } else {
                        u++
                    }
                    this._s2 = d[u];
                    this._si = u
                }
                l = (u + (e - this._s1) / (this._s2 - this._s1)) * this._prec
            }
            o = 1 - l;
            u = this._props.length;
            while (--u > -1) {
                a = this._props[u];
                f = this._beziers[a][s];
                c = (l * l * f.da + 3 * o * (l * f.ca + o * f.ba)) * l + f.a;
                if (this._round[a]) {
                    c = c + (c > 0 ? .5 : -.5) >> 0
                }
                if (n[a]) {
                    r[a](c)
                } else {
                    r[a] = c
                }
            }
            if (this._autoRotate) {
                var v = this._autoRotate,
                    m, g, y, b, w, E, S;
                u = v.length;
                while (--u > -1) {
                    a = v[u][2];
                    E = v[u][3] || 0;
                    S = v[u][4] == true ? 1 : i;
                    f = this._beziers[v[u][0]][s];
                    m = this._beziers[v[u][1]][s];
                    g = f.a + (f.b - f.a) * l;
                    b = f.b + (f.c - f.b) * l;
                    g += (b - g) * l;
                    b += (f.c + (f.d - f.c) * l - b) * l;
                    y = m.a + (m.b - m.a) * l;
                    w = m.b + (m.c - m.b) * l;
                    y += (w - y) * l;
                    w += (m.c + (m.d - m.c) * l - w) * l;
                    c = Math.atan2(w - y, b - g) * S + E;
                    if (n[a]) {
                        n[a].call(r, c)
                    } else {
                        r[a] = c
                    }
                }
            }
        };
        n._roundProps = function (e, t) {
            var n = this._overwriteProps,
                r = n.length;
            while (--r > -1) {
                if (e[n[r]] || e.bezier || e.bezierThrough) {
                    this._round[n[r]] = t
                }
            }
        };
        n._kill = function (t) {
            var n = this._props,
                r, i;
            for (r in _beziers) {
                if (r in t) {
                    delete this._beziers[r];
                    delete this._func[r];
                    i = n.length;
                    while (--i > -1) {
                        if (n[i] === r) {
                            n.splice(i, 1)
                        }
                    }
                }
            }
            return e.prototype._kill.call(this, t)
        };
        e.activate([t]);
        return t
    }, true);
    _gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (e, t) {
        "use strict";
        var n = function () {
            e.call(this, "css");
            this._overwriteProps.pop()
        }, r = n.prototype = new e("css");
        r.constructor = n;
        n.API = 2;
        n.suffixMap = {
            top: "px",
            right: "px",
            bottom: "px",
            left: "px",
            width: "px",
            height: "px",
            fontSize: "px",
            padding: "px",
            margin: "px"
        };
        var i = /[^\d\-\.]/g,
            s = /(\d|\-|\+|=|#|\.)*/g,
            o = /(\d|\.)+/g,
            u = /opacity *= *([^)]*)/,
            a = /opacity:([^;]*)/,
            f = /([A-Z])/g,
            l = /-([a-z])/gi,
            c = function (e, t) {
                return t.toUpperCase()
            }, h = /(Left|Right|Width)/i,
            p = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            d = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            v = Math.PI / 180,
            m = 180 / Math.PI,
            g = {}, y = document,
            b = y.createElement("div"),
            w = navigator.userAgent,
            E, S, x, T, N = function () {
                var e = w.indexOf("Android"),
                    t = y.createElement("div"),
                    n;
                x = w.indexOf("Safari") !== -1 && w.indexOf("Chrome") === -1 && (e === -1 || Number(w.substr(e + 8, 1)) > 3);
                /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(w);
                T = parseFloat(RegExp.$1);
                t.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
                n = t.getElementsByTagName("a")[0];
                return n ? /^0.55/.test(n.style.opacity) : false
            }(),
            C = function (e) {
                if (!e || e === "") {
                    return V.black
                } else if (V[e]) {
                    return V[e]
                } else if (typeof e === "number") {
                    return [e >> 16, e >> 8 & 255, e & 255]
                } else if (e.charAt(0) === "#") {
                    if (e.length === 4) {
                        var t = e.charAt(1),
                            n = e.charAt(2),
                            r = e.charAt(3);
                        e = "#" + t + t + n + n + r + r
                    }
                    e = parseInt(e.substr(1), 16);
                    return [e >> 16, e >> 8 & 255, e & 255]
                } else {
                    return e.match(o) || V.transparent
                }
            }, k = function (e) {
                return u.test(typeof e === "string" ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, L = y.defaultView ? y.defaultView.getComputedStyle : function (e, t) {}, A = function (e, t, n, r) {
                if (!N && t === "opacity") {
                    return k(e)
                } else if (!r && e.style[t]) {
                    return e.style[t]
                } else if (n = n || L(e, null)) {
                    e = n.getPropertyValue(t.replace(f, "-$1").toLowerCase());
                    return e || n.length ? e : n[t]
                } else if (e.currentStyle) {
                    n = e.currentStyle, r = n[t];
                    if (!r && t === "backgroundPosition") {
                        return n[t + "X"] + " " + n[t + "Y"]
                    }
                    return r
                }
                return null
            }, O = function (e, t) {
                var n = {}, r;
                if (t = t || L(e, null)) {
                    if (r = t.length) {
                        while (--r > -1) {
                            n[t[r].replace(l, c)] = t.getPropertyValue(t[r])
                        }
                    } else {
                        for (r in t) {
                            n[r] = t[r]
                        }
                    }
                } else if (t = e.currentStyle || e.style) {
                    for (r in t) {
                        n[r.replace(l, c)] = t[r]
                    }
                }
                if (!N) {
                    n.opacity = k(e)
                }
                var i = F(e, t, false);
                n.rotation = i.rotation * m;
                n.skewX = i.skewX * m;
                n.scaleX = i.scaleX;
                n.scaleY = i.scaleY;
                n.x = i.x;
                n.y = i.y;
                if (n.filters != null) {
                    delete n.filters
                }
                return n
            }, M = function (e, t, n, r) {
                var s = {}, o, u;
                for (u in t) {
                    if (u !== "cssText")
                        if (u !== "length")
                            if (isNaN(u))
                                if (e[u] != (o = t[u]))
                                    if (o !== B)
                                        if (typeof o === "number" || typeof o === "string") {
                                            s[u] = (o === "" || o === "auto") && typeof e[u] === "string" && e[u].replace(i, "") !== "" ? 0 : o;
                                            if (r) {
                                                r.props.push(u)
                                            }
                                        }
                }
                if (n) {
                    for (u in n) {
                        if (u !== "className") {
                            s[u] = n[u]
                        }
                    }
                }
                return s
            }, _ = {
                scaleX: 1,
                scaleY: 1,
                x: 1,
                y: 1,
                rotation: 1,
                shortRotation: 1,
                skewX: 1,
                skewY: 1,
                scale: 1
            }, D = "",
            P = "",
            H = function (e, t) {
                t = t || b;
                var n = t.style,
                    r, i;
                if (n[e] !== undefined) {
                    return e
                }
                e = e.substr(0, 1).toUpperCase() + e.substr(1);
                r = ["O", "Moz", "ms", "Ms", "Webkit"];
                i = 5;
                while (--i > -1 && n[r[i] + e] === undefined) {}
                if (i >= 0) {
                    P = i === 3 ? "ms" : r[i];
                    D = "-" + P.toLowerCase() + "-";
                    return P + e
                }
                return null
            }, B = H("transform"),
            j = D + "transform",
            F = function (e, t, n) {
                var r = e._gsTransform,
                    i;
                if (B) {
                    i = A(e, j, t, true)
                } else if (e.currentStyle) {
                    i = e.currentStyle.filter.match(p);
                    i = i && i.length === 4 ? i[0].substr(4) + "," + Number(i[2].substr(4)) + "," + Number(i[1].substr(4)) + "," + i[3].substr(4) + "," + (r ? r.x : 0) + "," + (r ? r.y : 0) : null
                }
                var s = (i || "").replace(/[^\d\-\.e,]/g, "").split(","),
                    o = s.length >= 6,
                    u = o ? Number(s[0]) : 1,
                    a = o ? Number(s[1]) : 0,
                    f = o ? Number(s[2]) : 0,
                    l = o ? Number(s[3]) : 1,
                    c = 1e-6,
                    h = n ? r || {
                        skewY: 0
                    } : {
                        skewY: 0
                    }, d = h.scaleX < 0;
                h.x = o ? Number(s[4]) : 0;
                h.y = o ? Number(s[5]) : 0;
                h.scaleX = Math.sqrt(u * u + a * a);
                h.scaleY = Math.sqrt(l * l + f * f);
                h.rotation = u || a ? Math.atan2(a, u) : h.rotation || 0;
                h.skewX = f || l ? Math.atan2(f, l) + h.rotation : h.skewX || 0;
                if (Math.abs(h.skewX) > Math.PI / 2) {
                    if (d) {
                        h.scaleX *= -1;
                        h.skewX += h.rotation <= 0 ? Math.PI : -Math.PI;
                        h.rotation += h.rotation <= 0 ? Math.PI : -Math.PI
                    } else {
                        h.scaleY *= -1;
                        h.skewX += h.skewX <= 0 ? Math.PI : -Math.PI
                    }
                }
                if (h.rotation < c)
                    if (h.rotation > -c)
                        if (u || a) {
                            h.rotation = 0
                        }
                if (h.skewX < c)
                    if (h.skewX > -c)
                        if (a || f) {
                            h.skewX = 0
                        }
                if (n) {
                    e._gsTransform = h
                }
                return h
            }, I = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            }, q = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            R = function (e, t, n) {
                var r = parseFloat(e === "width" ? t.offsetWidth : t.offsetHeight),
                    i = I[e],
                    s = i.length,
                    n = n || L(t, null);
                while (--s > -1) {
                    r -= parseFloat(A(t, "padding" + i[s], n, true)) || 0;
                    r -= parseFloat(A(t, "border" + i[s] + "Width", n, true)) || 0
                }
                return r
            }, U = function (e, t, n, r, i) {
                if (r === "px" || !r) {
                    return n
                }
                if (r === "auto" || !n) {
                    return 0
                }
                var s = h.test(t),
                    o = e,
                    u = b.style,
                    a = n < 0;
                if (a) {
                    n = -n
                }
                u.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;";
                if (r === "%" || r === "em" || !o.appendChild) {
                    o = e.parentNode || y.body;
                    u[s ? "width" : "height"] = n + r
                } else {
                    u[s ? "borderLeftWidth" : "borderTopWidth"] = n + r
                }
                o.appendChild(b);
                var f = parseFloat(b[s ? "offsetWidth" : "offsetHeight"]);
                o.removeChild(b);
                if (f === 0 && !i) {
                    f = U(e, t, n, r, true)
                }
                return a ? -f : f
            }, z = function (e, t) {
                if (e == null || e === "" || e === "auto" || e === "auto auto") {
                    e = "0 0"
                }
                t = t || {};
                var n = e.indexOf("left") !== -1 ? "0%" : e.indexOf("right") !== -1 ? "100%" : e.split(" ")[0],
                    r = e.indexOf("top") !== -1 ? "0%" : e.indexOf("bottom") !== -1 ? "100%" : e.split(" ")[1];
                if (r == null) {
                    r = "0"
                } else if (r === "center") {
                    r = "50%"
                }
                if (n === "center") {
                    n = "50%"
                }
                t.oxp = n.indexOf("%") !== -1;
                t.oyp = r.indexOf("%") !== -1;
                t.oxr = n.charAt(1) === "=";
                t.oyr = r.charAt(1) === "=";
                t.ox = parseFloat(n.replace(i, ""));
                t.oy = parseFloat(r.replace(i, ""));
                return t
            }, W = function (e, t) {
                return e == null ? t : typeof e === "string" && e.indexOf("=") === 1 ? Number(e.split("=").join("")) + t : Number(e)
            }, X = function (e, t) {
                var n = e.indexOf("rad") === -1 ? v : 1,
                    r = e.indexOf("=") === 1;
                e = Number(e.replace(i, "")) * n;
                return r ? e + t : e
            }, V = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            };
        r._onInitTween = function (e, t, r) {
            if (!e.nodeType) {
                return false
            }
            this._target = e;
            this._tween = r;
            this._classData = this._transform = null;
            E = t.autoRound;
            var i = this._style = e.style,
                s = L(e, ""),
                o, u, f;
            if (S)
                if (i.zIndex === "") {
                    f = A(e, "zIndex", s);
                    if (f === "auto" || f === "") {
                        i.zIndex = 0
                    }
                }
            if (typeof t === "string") {
                o = i.cssText;
                u = O(e, s);
                i.cssText = o + ";" + t;
                f = M(u, O(e));
                if (!N && a.test(t)) {
                    f.opacity = parseFloat(RegExp.$1)
                }
                t = f;
                i.cssText = o
            } else if (t.className) {
                o = e.className;
                this._classData = {
                    b: o,
                    e: t.className.charAt(1) !== "=" ? t.className : t.className.charAt(0) === "+" ? e.className + " " + t.className.substr(2) : e.className.split(t.className.substr(2)).join(""),
                    props: []
                };
                if (r._duration) {
                    u = O(e, s);
                    e.className = this._classData.e;
                    t = M(u, O(e), t, this._classData);
                    e.className = o
                } else {
                    t = {}
                }
            }
            this._parseVars(t, e, s, t.suffixMap || n.suffixMap);
            return true
        };
        r._parseVars = function (e, t, n, r) {
            var o = this._style,
                u, a, f, l, c, h, p, d, v, m, g, y;
            for (u in e) {
                a = e[u];
                if (u === "transform" || u === B) {
                    this._parseTransform(t, a, n, r);
                    continue
                } else if (_[u] || u === "transformOrigin") {
                    this._parseTransform(t, e, n, r);
                    continue
                } else if (u === "alpha" || u === "autoAlpha") {
                    u = "opacity"
                } else if (u === "margin" || u === "padding") {
                    g = (a + "").split(" ");
                    v = g.length;
                    f = {};
                    f[u + "Top"] = g[0];
                    f[u + "Right"] = v > 1 ? g[1] : g[0];
                    f[u + "Bottom"] = v === 4 ? g[2] : g[0];
                    f[u + "Left"] = v === 4 ? g[3] : v === 2 ? g[1] : g[0];
                    this._parseVars(f, t, n, r);
                    continue
                } else if (u === "backgroundPosition" || u === "backgroundSize") {
                    f = z(a);
                    m = z(l = A(t, u, n));
                    this._firstPT = f = {
                        _next: this._firstPT,
                        t: o,
                        p: u,
                        b: l,
                        f: false,
                        n: "css_" + u,
                        type: 3,
                        s: m.ox,
                        c: f.oxr ? f.ox : f.ox - m.ox,
                        ys: m.oy,
                        yc: f.oyr ? f.oy : f.oy - m.oy,
                        sfx: f.oxp ? "%" : "px",
                        ysfx: f.oyp ? "%" : "px",
                        r: !f.oxp && e.autoRound !== false
                    };
                    f.e = f.s + f.c + f.sfx + " " + (f.ys + f.yc) + f.ysfx;
                    continue
                } else if (u === "border") {
                    g = (a + "").split(" ");
                    this._parseVars({
                        borderWidth: g[0],
                        borderStyle: g[1] || "none",
                        borderColor: g[2] || "#000000"
                    }, t, n, r);
                    continue
                } else if (u === "bezier") {
                    this._parseBezier(a, t, n, r);
                    continue
                } else if (u === "autoRound") {
                    continue
                }
                l = A(t, u, n);
                l = l != null ? l + "" : "";
                this._firstPT = f = {
                    _next: this._firstPT,
                    t: o,
                    p: u,
                    b: l,
                    f: false,
                    n: "css_" + u,
                    sfx: "",
                    r: false,
                    type: 0
                };
                if (u === "opacity")
                    if (e.autoAlpha != null) {
                        if (l === "1")
                            if (A(t, "visibility", n) === "hidden") {
                                l = f.b = "0"
                            }
                        this._firstPT = f._prev = {
                            _next: f,
                            t: o,
                            p: "visibility",
                            f: false,
                            n: "css_visibility",
                            r: false,
                            type: -1,
                            b: Number(l) !== 0 ? "visible" : "hidden",
                            i: "visible",
                            e: Number(a) === 0 ? "hidden" : "visible"
                        };
                        this._overwriteProps.push("css_visibility")
                    }
                y = typeof a === "string";
                if (u === "color" || u === "fill" || u === "stroke" || u.indexOf("Color") !== -1 || y && !a.indexOf("rgb(")) {
                    c = C(l);
                    h = C(a);
                    f.e = f.i = (h.length > 3 ? "rgba(" : "rgb(") + h.join(",") + ")";
                    f.b = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")";
                    f.s = Number(c[0]);
                    f.c = Number(h[0]) - f.s;
                    f.gs = Number(c[1]);
                    f.gc = Number(h[1]) - f.gs;
                    f.bs = Number(c[2]);
                    f.bc = Number(h[2]) - f.bs;
                    f.type = 1;
                    if (c.length > 3 || h.length > 3) {
                        if (N) {
                            f.as = c.length < 4 ? 1 : Number(c[3]);
                            f.ac = (h.length < 4 ? 1 : Number(h[3])) - f.as;
                            f.type = 2
                        } else {
                            if (h[3] == 0) {
                                f.e = f.i = "transparent";
                                f.type = -1
                            }
                            if (c[3] == 0) {
                                f.b = "transparent"
                            }
                        }
                    }
                } else {
                    p = l.replace(s, "");
                    if (l === "" || l === "auto") {
                        if (u === "width" || u === "height") {
                            m = R(u, t, n);
                            p = "px"
                        } else {
                            m = u !== "opacity" ? 0 : 1;
                            p = ""
                        }
                    } else {
                        m = l.indexOf(" ") === -1 ? parseFloat(l.replace(i, "")) : NaN
                    } if (y) {
                        v = a.charAt(1) === "=";
                        d = a.replace(s, "");
                        a = a.indexOf(" ") === -1 ? parseFloat(a.replace(i, "")) : NaN
                    } else {
                        v = false;
                        d = ""
                    } if (d === "") {
                        d = r[u] || p
                    }
                    f.e = a || a === 0 ? (v ? a + m : a) + d : e[u];
                    if (p !== d)
                        if (d !== "")
                            if (a || a === 0)
                                if (m || m === 0) {
                                    m = U(t, u, m, p);
                                    if (d === "%") {
                                        m /= U(t, u, 100, "%") / 100;
                                        if (m > 100) {
                                            m = 100
                                        }
                                    } else if (d === "em") {
                                        m /= U(t, u, 1, "em")
                                    } else {
                                        a = U(t, u, a, d);
                                        d = "px"
                                    } if (v)
                                        if (a || a === 0) {
                                            f.e = a + m + d
                                        }
                                }
                    if ((m || m === 0) && (a || a === 0) && (f.c = v ? a : a - m)) {
                        f.s = m;
                        f.sfx = d;
                        if (u === "opacity") {
                            if (!N) {
                                f.type = 4;
                                f.p = "filter";
                                f.b = "alpha(opacity=" + f.s * 100 + ")";
                                f.e = "alpha(opacity=" + (f.s + f.c) * 100 + ")";
                                f.dup = e.autoAlpha != null;
                                this._style.zoom = 1
                            }
                        } else if (E !== false && (d === "px" || u === "zIndex")) {
                            f.r = true
                        }
                    } else {
                        f.type = -1;
                        f.i = u === "display" && f.e === "none" ? f.b : f.e;
                        f.s = f.c = 0
                    }
                }
                this._overwriteProps.push("css_" + u);
                if (f._next) {
                    f._next._prev = f
                }
            }
        };
        r._parseTransform = function (e, t, n, r) {
            if (this._transform) {
                return
            }
            var i = this._transform = F(e, n, true),
                s = this._style,
                o = 1e-6,
                u, a, f, l, c, h;
            if (typeof t === "object") {
                u = {
                    scaleX: W(t.scaleX != null ? t.scaleX : t.scale, i.scaleX),
                    scaleY: W(t.scaleY != null ? t.scaleY : t.scale, i.scaleY),
                    x: W(t.x, i.x),
                    y: W(t.y, i.y)
                };
                if (t.shortRotation != null) {
                    u.rotation = typeof t.shortRotation === "number" ? t.shortRotation * v : X(t.shortRotation, i.rotation);
                    var p = (u.rotation - i.rotation) % (Math.PI * 2);
                    if (p !== p % Math.PI) {
                        p += Math.PI * (p < 0 ? 2 : -2)
                    }
                    u.rotation = i.rotation + p
                } else {
                    u.rotation = t.rotation == null ? i.rotation : typeof t.rotation === "number" ? t.rotation * v : X(t.rotation, i.rotation)
                }
                u.skewX = t.skewX == null ? i.skewX : typeof t.skewX === "number" ? t.skewX * v : X(t.skewX, i.skewX);
                u.skewY = t.skewY == null ? i.skewY : typeof t.skewY === "number" ? t.skewY * v : X(t.skewY, i.skewY);
                if (a = u.skewY - i.skewY) {
                    u.skewX += a;
                    u.rotation += a
                }
                if (u.skewY < o)
                    if (u.skewY > -o) {
                        u.skewY = 0
                    }
                if (u.skewX < o)
                    if (u.skewX > -o) {
                        u.skewX = 0
                    }
                if (u.rotation < o)
                    if (u.rotation > -o) {
                        u.rotation = 0
                    }
                if ((h = t.transformOrigin) != null) {
                    if (B) {
                        f = B + "Origin";
                        this._firstPT = l = {
                            _next: this._firstPT,
                            t: s,
                            p: f,
                            s: 0,
                            c: 0,
                            n: f,
                            f: false,
                            r: false,
                            b: s[f],
                            e: h,
                            i: h,
                            type: -1,
                            sfx: ""
                        };
                        if (l._next) {
                            l._next._prev = l
                        }
                    } else {
                        z(h, i)
                    }
                }
            } else if (typeof t === "string" && B) {
                c = s[B];
                s[B] = t;
                u = F(e, null, false);
                s[B] = c
            } else {
                return
            } if (!B) {
                s.zoom = 1
            } else if (x) {
                S = true;
                if (s.WebkitBackfaceVisibility === "") {
                    s.WebkitBackfaceVisibility = "hidden"
                }
                if (s.zIndex === "") {
                    c = A(e, "zIndex", n);
                    if (c === "auto" || c === "") {
                        s.zIndex = 0
                    }
                }
            }
            for (f in _) {
                if (i[f] !== u[f] || g[f] != null)
                    if (f !== "shortRotation")
                        if (f !== "scale") {
                            this._firstPT = l = {
                                _next: this._firstPT,
                                t: i,
                                p: f,
                                s: i[f],
                                c: u[f] - i[f],
                                n: f,
                                f: false,
                                r: false,
                                b: i[f],
                                e: u[f],
                                type: 0,
                                sfx: 0
                            };
                            if (l._next) {
                                l._next._prev = l
                            }
                            this._overwriteProps.push("css_" + f)
                        }
            }
        };
        r._parseBezier = function (e, t, n, r) {
            if (!window.com.greensock.plugins.BezierPlugin) {
                console.log("Error: BezierPlugin not loaded.");
                return
            }
            if (e instanceof Array) {
                e = {
                    values: e
                }
            }
            var i = e.values || [],
                s = i.length,
                o = [],
                u = this._bezier = {
                    _pt: []
                }, a = u._proxy = {}, f = 0,
                l = 0,
                c = {}, h = s - 1,
                p = g,
                d = u._plugin = new window.com.greensock.plugins.BezierPlugin,
                v, m, y, b, w, E;
            for (m = 0; m < s; m++) {
                w = {};
                this._transform = null;
                b = this._firstPT;
                this._parseVars(g = i[m], t, n, r);
                y = this._firstPT;
                if (m === 0) {
                    E = this._transform;
                    while (y !== b) {
                        a[y.p] = y.s;
                        u._pt[l++] = c[y.p] = y;
                        if (y.type === 1 || y.type === 2) {
                            a[y.p + "_g"] = y.gs;
                            a[y.p + "_b"] = y.bs;
                            if (y.type === 2) {
                                a[y.p + "_a"] = y.as
                            }
                        } else if (y.type === 3) {
                            a[y.p + "_y"] = y.ys
                        }
                        y = y._next
                    }
                    y = this._firstPT
                } else {
                    this._firstPT = b;
                    if (b._prev) {
                        b._prev._next = null
                    }
                    b._prev = null;
                    b = null
                }
                while (y !== b) {
                    if (c[y.p]) {
                        w[y.p] = y.s + y.c;
                        if (m === h) {
                            c[y.p].e = y.e
                        }
                        if (y.type === 1 || y.type === 2) {
                            w[y.p + "_g"] = y.gs + y.gc;
                            w[y.p + "_b"] = y.bs + y.bc;
                            if (y.type === 2) {
                                w[y.p + "_a"] = y.as + y.ac
                            }
                        } else if (y.type === 3) {
                            w[y.p + "_y"] = y.ys + y.yc
                        }
                        if (m === 0) {
                            y.c = y.ac = y.gc = y.bc = y.yc = 0
                        }
                    }
                    y = y._next
                }
                o[f++] = w
            }
            this._transform = E;
            g = p;
            e.values = o;
            if (e.autoRotate === 0) {
                e.autoRotate = true
            }
            if (e.autoRotate)
                if (!(e.autoRotate instanceof Array)) {
                    m = e.autoRotate == true ? 0 : Number(e.autoRotate) * Math.PI / 180;
                    e.autoRotate = o[0].left != null ? [
                        ["left", "top", "rotation", m, true]
                    ] : o[0].x != null ? [
                        ["x", "y", "rotation", m, true]
                    ] : false
                }
            if (u._autoRotate = e.autoRotate)
                if (!E) {
                    this._transform = F(t, n, true)
                }
            d._onInitTween(a, e, this._tween);
            e.values = i
        };
        r.setRatio = function (e) {
            var t = this._firstPT,
                n = this._bezier,
                r = 1e-6,
                i, o, a;
            if (n) {
                n._plugin.setRatio(e);
                var f = n._pt,
                    l = n._proxy;
                o = f.length;
                while (--o > -1) {
                    t = f[o];
                    t.s = l[t.p];
                    if (t.type === 1 || t.type === 2) {
                        t.gs = l[t.p + "_g"];
                        t.bs = l[t.p + "_b"];
                        if (t.type === 2) {
                            t.as = l[t.p + "_a"]
                        }
                    } else if (t.type === 3) {
                        t.ys = l[t.p + "_y"]
                    }
                }
                if (n._autoRotate) {
                    this._transform.rotation = l.rotation
                }
            }
            if (e === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (t) {
                    t.t[t.p] = t.e;
                    if (t.type === 4)
                        if (t.s + t.c === 1) {
                            this._style.removeAttribute("filter");
                            if (A(this._target, "filter")) {
                                t.t[t.p] = t.e
                            }
                        }
                    t = t._next
                }
            } else if (e || !(this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (t) {
                    i = t.c * e + t.s;
                    if (t.r) {
                        i = i > 0 ? i + .5 >> 0 : i - .5 >> 0
                    } else if (i < r)
                        if (i > -r) {
                            i = 0
                        }
                    if (!t.type) {
                        t.t[t.p] = i + t.sfx
                    } else if (t.type === 1) {
                        t.t[t.p] = "rgb(" + (i >> 0) + ", " + (t.gs + e * t.gc >> 0) + ", " + (t.bs + e * t.bc >> 0) + ")"
                    } else if (t.type === 2) {
                        t.t[t.p] = "rgba(" + (i >> 0) + ", " + (t.gs + e * t.gc >> 0) + ", " + (t.bs + e * t.bc >> 0) + ", " + (t.as + e * t.ac) + ")"
                    } else if (t.type === -1) {
                        t.t[t.p] = t.i
                    } else if (t.type === 3) {
                        a = t.ys + e * t.yc;
                        if (t.r) {
                            a = a > 0 ? a + .5 >> 0 : a - .5 >> 0
                        }
                        t.t[t.p] = i + t.sfx + " " + a + t.ysfx
                    } else {
                        if (t.dup) {
                            t.t.filter = t.t.filter || "alpha(opacity=100)"
                        }
                        if (t.t.filter.indexOf("opacity") === -1) {
                            t.t.filter += " alpha(opacity=" + (i * 100 >> 0) + ")"
                        } else {
                            t.t.filter = t.t.filter.replace(u, "opacity=" + (i * 100 >> 0))
                        }
                    }
                    t = t._next
                }
            } else {
                while (t) {
                    t.t[t.p] = t.b;
                    if (t.type === 4)
                        if (t.s === 1) {
                            this._style.removeAttribute("filter");
                            if (A(this._target, "filter")) {
                                t.t[t.p] = t.b
                            }
                        }
                    t = t._next
                }
            } if (this._transform) {
                t = this._transform;
                if (B && !t.rotation && !t.skewX) {
                    this._style[B] = (t.x || t.y ? "translate(" + t.x + "px," + t.y + "px) " : "") + (t.scaleX !== 1 || t.scaleY !== 1 ? "scale(" + t.scaleX + "," + t.scaleY + ")" : "") || "translate(0px,0px)"
                } else {
                    var c = B ? t.rotation : -t.rotation,
                        h = B ? c - t.skewX : c + t.skewX,
                        p = Math.cos(c) * t.scaleX,
                        v = Math.sin(c) * t.scaleX,
                        m = Math.sin(h) * -t.scaleY,
                        g = Math.cos(h) * t.scaleY,
                        y;
                    if (p < r)
                        if (p > -r) {
                            p = 0
                        }
                    if (v < r)
                        if (v > -r) {
                            v = 0
                        }
                    if (m < r)
                        if (m > -r) {
                            m = 0
                        }
                    if (g < r)
                        if (g > -r) {
                            g = 0
                        }
                    if (B) {
                        this._style[B] = "matrix(" + p + "," + v + "," + m + "," + g + "," + t.x + "," + t.y + ")"
                    } else if (y = this._target.currentStyle) {
                        r = v;
                        v = -m;
                        m = -r;
                        var b = y.filter;
                        this._style.filter = "";
                        var w = this._target.offsetWidth,
                            E = this._target.offsetHeight,
                            S = y.position !== "absolute",
                            x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + p + ", M12=" + v + ", M21=" + m + ", M22=" + g,
                            N = t.x,
                            C = t.y,
                            k, L;
                        if (t.ox != null) {
                            k = (t.oxp ? w * t.ox * .01 : t.ox) - w / 2;
                            L = (t.oyp ? E * t.oy * .01 : t.oy) - E / 2;
                            N = k - (k * p + L * v) + t.x;
                            C = L - (k * m + L * g) + t.y
                        }
                        if (!S) {
                            var O = T < 8 ? 1 : -1,
                                M, _, D;
                            k = t.ieOffsetX || 0;
                            L = t.ieOffsetY || 0;
                            t.ieOffsetX = Math.round((w - ((p < 0 ? -p : p) * w + (v < 0 ? -v : v) * E)) / 2 + N);
                            t.ieOffsetY = Math.round((E - ((g < 0 ? -g : g) * E + (m < 0 ? -m : m) * w)) / 2 + C);
                            for (o = 0; o < 4; o++) {
                                _ = q[o];
                                M = y[_];
                                i = M.indexOf("px") !== -1 ? parseFloat(M) : U(this._target, _, parseFloat(M), M.replace(s, "")) || 0;
                                if (i !== t[_]) {
                                    D = o < 2 ? -t.ieOffsetX : -t.ieOffsetY
                                } else {
                                    D = o < 2 ? k - t.ieOffsetX : L - t.ieOffsetY
                                }
                                this._style[_] = (t[_] = Math.round(i - D * (o === 0 || o === 2 ? 1 : O))) + "px"
                            }
                            x += ", sizingMethod='auto expand')"
                        } else {
                            k = w / 2, L = E / 2;
                            x += ", Dx=" + (k - (k * p + L * v) + N) + ", Dy=" + (L - (k * m + L * g) + C) + ")"
                        } if (b.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                            this._style.filter = b.replace(d, x)
                        } else {
                            this._style.filter = x + " " + b
                        } if (e === 0 || e === 1)
                            if (p === 1)
                                if (v === 0)
                                    if (m === 0)
                                        if (g === 1)
                                            if (!S || x.indexOf("Dx=0, Dy=0") !== -1)
                                                if (!u.test(b) || parseFloat(RegExp.$1) === 100) {
                                                    this._style.removeAttribute("filter")
                                                }
                    }
                }
            }
            if (this._classData) {
                t = this._classData;
                if (e === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                    var o = t.props.length;
                    while (--o > -1) {
                        this._style[t.props[o]] = ""
                    }
                    this._target.className = t.e
                } else if (this._target.className !== t.b) {
                    this._target.className = t.b
                }
            }
        };
        r._kill = function (t) {
            var n = t,
                r;
            if (t.autoAlpha || t.alpha) {
                n = {};
                for (r in t) {
                    n[r] = t[r]
                }
                n.opacity = 1;
                if (n.autoAlpha) {
                    n.visibility = 1
                }
            }
            return e.prototype._kill.call(this, n)
        };
        e.activate([n]);
        return n
    }, true);
    _gsDefine("plugins.RoundPropsPlugin", ["plugins.TweenPlugin"], function (e) {
        var t = function (t, n) {
            e.call(this, "roundProps", -1);
            this._overwriteProps.length = 0
        }, n = t.prototype = new e("roundProps", -1);
        n.constructor = t;
        t.API = 2;
        n._onInitTween = function (e, t, n) {
            this._tween = n;
            return true
        };
        n._onInitAllProps = function () {
            var e = this._tween,
                t = e.vars.roundProps instanceof Array ? e.vars.roundProps : e.vars.roundProps.split(","),
                n = t.length,
                r = {}, i = e._propLookup.roundProps,
                s, o, u;
            while (--n > -1) {
                r[t[n]] = 1
            }
            n = t.length;
            while (--n > -1) {
                s = t[n];
                o = e._firstPT;
                while (o) {
                    u = o._next;
                    if (o.pg) {
                        o.t._roundProps(r, true)
                    } else if (o.n === s) {
                        this._add(o.t, s, o.s, o.c);
                        if (u) {
                            u._prev = o._prev
                        }
                        if (o._prev) {
                            o._prev._next = u
                        } else if (_tween._firstPT === o) {
                            e._firstPT = u
                        }
                        o._next = o._prev = null;
                        e._propLookup[s] = i
                    }
                    o = u
                }
            }
            return false
        };
        n._add = function (e, t, n, r) {
            this._addTween(e, t, n, n + r, t, true);
            this._overwriteProps.push(t)
        };
        e.activate([t]);
        return t
    }, true);
    _gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t = window.com.greensock,
            n = t._class,
            r = function (t, r) {
                var i = n("easing." + t, function () {}, true),
                    s = i.prototype = new e;
                s.constructor = i;
                s.getRatio = r;
                return i
            }, i = function (t, r) {
                var i = n("easing." + t, function (e) {
                    this._p1 = e || e === 0 ? e : 1.70158;
                    this._p2 = this._p1 * 1.525
                }, true),
                    s = i.prototype = new e;
                s.constructor = i;
                s.getRatio = r;
                s.config = function (e) {
                    return new i(e)
                };
                return i
            }, s = i("BackOut", function (e) {
                return (e = e - 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }),
            o = i("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }),
            u = i("BackInOut", function (e) {
                return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            }),
            a = r("BounceOut", function (e) {
                if (e < 1 / 2.75) {
                    return 7.5625 * e * e
                } else if (e < 2 / 2.75) {
                    return 7.5625 * (e -= 1.5 / 2.75) * e + .75
                } else if (e < 2.5 / 2.75) {
                    return 7.5625 * (e -= 2.25 / 2.75) * e + .9375
                } else {
                    return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }
            }),
            f = r("BounceIn", function (e) {
                if ((e = 1 - e) < 1 / 2.75) {
                    return 1 - 7.5625 * e * e
                } else if (e < 2 / 2.75) {
                    return 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75)
                } else if (e < 2.5 / 2.75) {
                    return 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375)
                } else {
                    return 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }
            }),
            l = r("BounceInOut", function (e) {
                var t = e < .5;
                if (t) {
                    e = 1 - e * 2
                } else {
                    e = e * 2 - 1
                } if (e < 1 / 2.75) {
                    e = 7.5625 * e * e
                } else if (e < 2 / 2.75) {
                    e = 7.5625 * (e -= 1.5 / 2.75) * e + .75
                } else if (e < 2.5 / 2.75) {
                    e = 7.5625 * (e -= 2.25 / 2.75) * e + .9375
                } else {
                    e = 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }
                return t ? (1 - e) * .5 : e * .5 + .5
            }),
            c = r("CircOut", function (e) {
                return Math.sqrt(1 - (e = e - 1) * e)
            }),
            h = r("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }),
            p = r("CircInOut", function (e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }),
            d = Math.PI * 2,
            v = function (t, r, i) {
                var s = n("easing." + t, function (e, t) {
                    this._p1 = e || 1;
                    this._p2 = t || i;
                    this._p3 = this._p2 / d * (Math.asin(1 / this._p1) || 0)
                }, true),
                    o = s.prototype = new e;
                o.constructor = s;
                o.getRatio = r;
                o.config = function (e, t) {
                    return new s(e, t)
                };
                return s
            }, m = v("ElasticOut", function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * d / this._p2) + 1
            }, .3),
            g = v("ElasticIn", function (e) {
                return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * d / this._p2))
            }, .3),
            y = v("ElasticInOut", function (e) {
                return (e *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * d / this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * d / this._p2) * .5 + 1
            }, .45),
            b = r("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
            }),
            w = r("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }),
            E = r("ExpoInOut", function (e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            }),
            S = Math.PI / 2,
            x = r("SineOut", function (e) {
                return Math.sin(e * S)
            }),
            T = r("SineIn", function (e) {
                return -Math.cos(e * S) + 1
            }),
            N = r("SineInOut", function (e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }),
            C = n("easing.SlowMo", function (e, t, n) {
                t = t || t === 0 ? t : .7;
                if (e == null) {
                    e = .7
                } else if (e > 1) {
                    e = 1
                }
                this._p = e != 1 ? t : 0;
                this._p1 = (1 - e) / 2;
                this._p2 = e;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = n === true
            }, true),
            k = C.prototype = new e;
        k.constructor = C;
        k.getRatio = function (e) {
            var t = e + (.5 - e) * this._p;
            if (e < this._p1) {
                return this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t
            } else if (e > this._p3) {
                return this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
            }
            return this._calcEnd ? 1 : t
        };
        C.ease = new C(.7, .7);
        k.config = C.config = function (e, t, n) {
            return new C(e, t, n)
        };
        var L = n("easing.SteppedEase", function (e) {
            e = e || 1;
            this._p1 = 1 / e;
            this._p2 = e + 1
        }, true);
        k = L.prototype = new e;
        k.constructor = L;
        k.getRatio = function (e) {
            if (e < 0) {
                e = 0
            } else if (e >= 1) {
                e = .999999999
            }
            return (this._p2 * e >> 0) * this._p1
        };
        k.config = L.config = function (e) {
            return new L(e)
        };
        n("easing.Bounce", {
            easeOut: new a,
            easeIn: new f,
            easeInOut: new l
        }, true);
        n("easing.Circ", {
            easeOut: new c,
            easeIn: new h,
            easeInOut: new p
        }, true);
        n("easing.Elastic", {
            easeOut: new m,
            easeIn: new g,
            easeInOut: new y
        }, true);
        n("easing.Expo", {
            easeOut: new b,
            easeIn: new w,
            easeInOut: new E
        }, true);
        n("easing.Sine", {
            easeOut: new x,
            easeIn: new T,
            easeInOut: new N
        }, true);
        return {
            easeOut: new s,
            easeIn: new o,
            easeInOut: new u
        }
    }, true)
});
(function (e) {
    "use strict";
    var t = function (t) {
        var n = t.split("."),
            r = e,
            i;
        for (i = 0; i < n.length; i++) {
            r[n[i]] = r = r[n[i]] || {}
        }
        return r
    }, n = t("com.greensock"),
        r, i, s, o, u, a, f = {}, l = function (n, r, i, s) {
            this.sc = f[n] ? f[n].sc : [];
            f[n] = this;
            this.gsClass = null;
            this.def = i;
            var o = r || [],
                u = [];
            this.check = function (r) {
                var a = o.length,
                    c = 0,
                    h;
                while (--a > -1) {
                    if ((h = f[o[a]] || new l(o[a])).gsClass) {
                        u[a] = h.gsClass
                    } else {
                        c++;
                        if (r) {
                            h.sc.push(this)
                        }
                    }
                }
                if (c === 0 && i) {
                    var p = ("com.greensock." + n).split("."),
                        d = p.pop(),
                        v = t(p.join("."))[d] = this.gsClass = i.apply(i, u);
                    if (s) {
                        (e.GreenSockGlobals || e)[d] = v;
                        if (typeof define === "function" && define.amd) {
                            define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + n.split(".").join("/"), [], function () {
                                return v
                            })
                        } else if (typeof module !== "undefined" && module.exports) {
                            module.exports = v
                        }
                    }
                    for (a = 0; a < this.sc.length; a++) {
                        this.sc[a].check(false)
                    }
                }
            };
            this.check(true)
        }, c = n._class = function (e, t, n) {
            new l(e, [], function () {
                return t
            }, n);
            return t
        };
    e._gsDefine = function (e, t, n, r) {
        return new l(e, t, n, r)
    };
    var h = [0, 0, 1, 1],
        p = [],
        d = c("easing.Ease", function (e, t, n, r) {
            this._func = e;
            this._type = n || 0;
            this._power = r || 0;
            this._params = t ? h.concat(t) : h
        }, true);
    u = d.prototype;
    u._calcEnd = false;
    u.getRatio = function (e) {
        if (this._func) {
            this._params[0] = e;
            return this._func.apply(null, this._params)
        } else {
            var t = this._type,
                n = this._power,
                r = t === 1 ? 1 - e : t === 2 ? e : e < .5 ? e * 2 : (1 - e) * 2;
            if (n === 1) {
                r *= r
            } else if (n === 2) {
                r *= r * r
            } else if (n === 3) {
                r *= r * r * r
            } else if (n === 4) {
                r *= r * r * r * r
            }
            return t === 1 ? 1 - r : t === 2 ? r : e < .5 ? r / 2 : 1 - r / 2
        }
    };
    r = ["Linear", "Quad", "Cubic", "Quart", "Quint"];
    i = r.length;
    while (--i > -1) {
        s = c("easing." + r[i], function () {}, true);
        o = c("easing.Power" + i, function () {}, true);
        s.easeOut = o.easeOut = new d(null, null, 1, i);
        s.easeIn = o.easeIn = new d(null, null, 2, i);
        s.easeInOut = o.easeInOut = new d(null, null, 3, i)
    }
    c("easing.Strong", n.easing.Power4, true);
    n.easing.Linear.easeNone = n.easing.Linear.easeIn;
    u = c("events.EventDispatcher", function (e) {
        this._listeners = {};
        this._eventTarget = e || this
    }).prototype;
    u.addEventListener = function (e, t, n, r, i) {
        i = i || 0;
        var s = this._listeners[e],
            o = 0,
            u, a;
        if (s == null) {
            this._listeners[e] = s = []
        }
        a = s.length;
        while (--a > -1) {
            u = s[a];
            if (u.c === t) {
                s.splice(a, 1)
            } else if (o === 0 && u.pr < i) {
                o = a + 1
            }
        }
        s.splice(o, 0, {
            c: t,
            s: n,
            up: r,
            pr: i
        })
    };
    u.removeEventListener = function (e, t) {
        var n = this._listeners[e];
        if (n) {
            var r = n.length;
            while (--r > -1) {
                if (n[r].c === t) {
                    n.splice(r, 1);
                    return
                }
            }
        }
    };
    u.dispatchEvent = function (e) {
        var t = this._listeners[e];
        if (t) {
            var n = t.length,
                r, i = this._eventTarget;
            while (--n > -1) {
                r = t[n];
                if (r.up) {
                    r.c.call(r.s || i, {
                        type: e,
                        target: i
                    })
                } else {
                    r.c.call(r.s || i)
                }
            }
        }
    };
    var v = e.requestAnimationFrame,
        m = e.cancelAnimationFrame,
        g = Date.now || function () {
            return (new Date).getTime()
        };
    r = ["ms", "moz", "webkit", "o"];
    i = r.length;
    while (--i > -1 && !v) {
        v = e[r[i] + "RequestAnimationFrame"];
        m = e[r[i] + "CancelAnimationFrame"] || e[r[i] + "CancelRequestAnimationFrame"]
    }
    if (!m) {
        m = function (t) {
            e.clearTimeout(t)
        }
    }
    c("Ticker", function (t, n) {
        this.time = 0;
        this.frame = 0;
        var r = this,
            i = g(),
            s = n !== false,
            o, u, a, f, l;
        this.tick = function () {
            r.time = (g() - i) / 1e3;
            if (!o || r.time >= l) {
                r.frame++;
                l = r.time + f - (r.time - l) - 5e-4;
                if (l <= r.time) {
                    l = r.time + .001
                }
                r.dispatchEvent("tick")
            }
            a = u(r.tick)
        };
        this.fps = function (t) {
            if (!arguments.length) {
                return o
            }
            o = t;
            f = 1 / (o || 60);
            l = this.time + f;
            u = o === 0 ? function (e) {} : !s || !v ? function (t) {
                return e.setTimeout(t, (l - r.time) * 1e3 + 1 >> 0 || 1)
            } : v;
            m(a);
            a = u(r.tick)
        };
        this.useRAF = function (e) {
            if (!arguments.length) {
                return s
            }
            s = e;
            this.fps(o)
        };
        this.fps(t)
    });
    u = n.Ticker.prototype = new n.events.EventDispatcher;
    u.constructor = n.Ticker;
    var y = c("core.Animation", function (e, t) {
        this.vars = t || {};
        this._duration = this._totalDuration = e || 0;
        this._delay = Number(this.vars.delay) || 0;
        this._timeScale = 1;
        this._active = this.vars.immediateRender == true;
        this.data = this.vars.data;
        this._reversed = this.vars.reversed == true;
        if (!L) {
            return
        }
        if (!a) {
            b.tick();
            a = true
        }
        var n = this.vars.useFrames ? k : L;
        n.insert(this, n._time);
        if (this.vars.paused) {
            this.paused(true)
        }
    }),
        b = y.ticker = new n.Ticker;
    u = y.prototype;
    u._dirty = u._gc = u._initted = u._paused = false;
    u._totalTime = u._time = 0;
    u._rawPrevTime = -1;
    u._next = u._last = u._onUpdate = u._timeline = u.timeline = null;
    u._paused = false;
    u.play = function (e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        this.reversed(false);
        return this.paused(false)
    };
    u.pause = function (e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.paused(true)
    };
    u.resume = function (e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.paused(false)
    };
    u.seek = function (e, t) {
        return this.totalTime(Number(e), t != false)
    };
    u.restart = function (e, t) {
        this.reversed(false);
        this.paused(false);
        return this.totalTime(e ? -this._delay : 0, t != false)
    };
    u.reverse = function (e, t) {
        if (arguments.length) {
            this.seek(e || this.totalDuration(), t)
        }
        this.reversed(true);
        return this.paused(false)
    };
    u.render = function () {};
    u.invalidate = function () {
        return this
    };
    u._enabled = function (e, t) {
        this._gc = !e;
        this._active = e && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration;
        if (t != true) {
            if (e && this.timeline == null) {
                this._timeline.insert(this, this._startTime - this._delay)
            } else if (!e && this.timeline != null) {
                this._timeline._remove(this, true)
            }
        }
        return false
    };
    u._kill = function (e, t) {
        return this._enabled(false, false)
    };
    u.kill = function (e, t) {
        this._kill(e, t);
        return this
    };
    u._uncache = function (e) {
        var t = e ? this : this.timeline;
        while (t) {
            t._dirty = true;
            t = t.timeline
        }
        return this
    };
    u.eventCallback = function (e, t, n, r) {
        if (e == null) {
            return null
        } else if (e.substr(0, 2) === "on") {
            if (arguments.length === 1) {
                return this.vars[e]
            }
            if (t == null) {
                delete this.vars[e]
            } else {
                this.vars[e] = t;
                this.vars[e + "Params"] = n;
                this.vars[e + "Scope"] = r;
                if (n) {
                    var i = n.length;
                    while (--i > -1) {
                        if (n[i] === "{self}") {
                            n = this.vars[e + "Params"] = n.concat();
                            n[i] = this
                        }
                    }
                }
            } if (e === "onUpdate") {
                this._onUpdate = t
            }
        }
        return this
    };
    u.delay = function (e) {
        if (!arguments.length) {
            return this._delay
        }
        if (this._timeline.smoothChildTiming) {
            this.startTime(this._startTime + e - this._delay)
        }
        this._delay = e;
        return this
    };
    u.duration = function (e) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration
        }
        this._duration = this._totalDuration = e;
        this._uncache(true);
        if (this._timeline.smoothChildTiming)
            if (this._active)
                if (e != 0) {
                    this.totalTime(this._totalTime * (e / this._duration), true)
                }
        return this
    };
    u.totalDuration = function (e) {
        this._dirty = false;
        return !arguments.length ? this._totalDuration : this.duration(e)
    };
    u.time = function (e, t) {
        if (!arguments.length) {
            return this._time
        }
        if (this._dirty) {
            this.totalDuration()
        }
        if (e > this._duration) {
            e = this._duration
        }
        return this.totalTime(e, t)
    };
    u.totalTime = function (e, t) {
        if (!arguments.length) {
            return this._totalTime
        }
        if (this._timeline) {
            if (e < 0) {
                e += this.totalDuration()
            }
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) {
                    this.totalDuration()
                }
                if (e > this._totalDuration) {
                    e = this._totalDuration
                }
                this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (!this._reversed ? e : this._totalDuration - e) / this._timeScale;
                if (!this._timeline._dirty) {
                    this._uncache(false)
                }
                if (!this._timeline._active) {
                    var n = this._timeline;
                    while (n._timeline) {
                        n.totalTime(n._totalTime, true);
                        n = n._timeline
                    }
                }
            }
            if (this._gc) {
                this._enabled(true, false)
            }
            if (this._totalTime != e) {
                this.render(e, t, false)
            }
        }
        return this
    };
    u.startTime = function (e) {
        if (!arguments.length) {
            return this._startTime
        }
        if (e != this._startTime) {
            this._startTime = e;
            if (this.timeline)
                if (this.timeline._sortChildren) {
                    this.timeline.insert(this, e - this._delay)
                }
        }
        return this
    };
    u.timeScale = function (e) {
        if (!arguments.length) {
            return this._timeScale
        }
        e = e || 1e-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime || this._pauseTime == 0 ? this._pauseTime : this._timeline._totalTime;
            this._startTime = t - (t - this._startTime) * this._timeScale / e
        }
        this._timeScale = e;
        return this._uncache(false)
    };
    u.reversed = function (e) {
        if (!arguments.length) {
            return this._reversed
        }
        if (e != this._reversed) {
            this._reversed = e;
            this.totalTime(this._totalTime, true)
        }
        return this
    };
    u.paused = function (e) {
        if (!arguments.length) {
            return this._paused
        }
        if (e != this._paused)
            if (this._timeline) {
                if (!e && this._timeline.smoothChildTiming) {
                    this._startTime += this._timeline.rawTime() - this._pauseTime;
                    this._uncache(false)
                }
                this._pauseTime = e ? this._timeline.rawTime() : null;
                this._paused = e;
                this._active = !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration
            }
        if (this._gc)
            if (!e) {
                this._enabled(true, false)
            }
        return this
    };
    var w = c("core.SimpleTimeline", function (e) {
        y.call(this, 0, e);
        this.autoRemoveChildren = this.smoothChildTiming = true
    });
    u = w.prototype = new y;
    u.constructor = w;
    u.kill()._gc = false;
    u._first = u._last = null;
    u._sortChildren = false;
    u.insert = function (e, t) {
        e._startTime = Number(t || 0) + e._delay;
        if (e._paused)
            if (this !== e._timeline) {
                e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale
            }
        if (e.timeline) {
            e.timeline._remove(e, true)
        }
        e.timeline = e._timeline = this;
        if (e._gc) {
            e._enabled(true, true)
        }
        var n = this._last;
        if (this._sortChildren) {
            var r = e._startTime;
            while (n && n._startTime > r) {
                n = n._prev
            }
        }
        if (n) {
            e._next = n._next;
            n._next = e
        } else {
            e._next = this._first;
            this._first = e
        } if (e._next) {
            e._next._prev = e
        } else {
            this._last = e
        }
        e._prev = n;
        if (this._timeline) {
            this._uncache(true)
        }
        return this
    };
    u._remove = function (e, t) {
        if (e.timeline === this) {
            if (!t) {
                e._enabled(false, true)
            }
            e.timeline = null;
            if (e._prev) {
                e._prev._next = e._next
            } else if (this._first === e) {
                this._first = e._next
            }
            if (e._next) {
                e._next._prev = e._prev
            } else if (this._last === e) {
                this._last = e._prev
            }
            if (this._timeline) {
                this._uncache(true)
            }
        }
        return this
    };
    u.render = function (e, t, n) {
        var r = this._first,
            i;
        this._totalTime = this._time = this._rawPrevTime = e;
        while (r) {
            i = r._next;
            if (r._active || e >= r._startTime && !r._paused) {
                if (!r._reversed) {
                    r.render((e - r._startTime) * r._timeScale, t, false)
                } else {
                    r.render((!r._dirty ? r._totalDuration : r.totalDuration()) - (e - r._startTime) * r._timeScale, t, false)
                }
            }
            r = i
        }
    };
    u.rawTime = function () {
        return this._totalTime
    };
    var E = c("TweenLite", function (e, t, n) {
        y.call(this, t, n);
        if (e == null) {
            throw "Cannot tween an undefined reference."
        }
        this.target = e;
        this._overwrite = this.vars.overwrite == null ? C[E.defaultOverwrite] : typeof this.vars.overwrite === "number" ? this.vars.overwrite >> 0 : C[this.vars.overwrite];
        var r, i, s;
        if ((e instanceof Array || e.jquery) && typeof e[0] === "object") {
            this._targets = e.slice(0);
            this._propLookup = [];
            this._siblings = [];
            for (i = 0; i < this._targets.length; i++) {
                s = this._targets[i];
                if (s.jquery) {
                    this._targets.splice(i--, 1);
                    this._targets = this._targets.concat(s.constructor.makeArray(s));
                    continue
                }
                this._siblings[i] = A(s, this, false);
                if (this._overwrite === 1)
                    if (this._siblings[i].length > 1) {
                        O(s, this, null, 1, this._siblings[i])
                    }
            }
        } else {
            this._propLookup = {};
            this._siblings = A(e, this, false);
            if (this._overwrite === 1)
                if (this._siblings.length > 1) {
                    O(e, this, null, 1, this._siblings)
                }
        } if (this.vars.immediateRender || t === 0 && this._delay === 0 && this.vars.immediateRender != false) {
            this.render(-this._delay, false, true)
        }
    }, true);
    u = E.prototype = new y;
    u.constructor = E;
    u.kill()._gc = false;
    u.ratio = 0;
    u._firstPT = u._targets = u._overwrittenProps = null;
    u._notifyPluginsOfEnabled = false;
    E.version = 12;
    E.defaultEase = u._ease = new d(null, null, 1, 1);
    E.defaultOverwrite = "auto";
    E.ticker = b;
    var S = E._plugins = {}, x = E._tweenLookup = {}, T = 0,
        N = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            orientToBezier: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1
        }, C = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, k = y._rootFramesTimeline = new w,
        L = y._rootTimeline = new w;
    L._startTime = b.time;
    k._startTime = b.frame;
    L._active = k._active = true;
    y._updateRoot = function () {
        L.render((b.time - L._startTime) * L._timeScale, false, false);
        k.render((b.frame - k._startTime) * k._timeScale, false, false);
        if (!(b.frame % 120)) {
            var e, t, n;
            for (n in x) {
                t = x[n].tweens;
                e = t.length;
                while (--e > -1) {
                    if (t[e]._gc) {
                        t.splice(e, 1)
                    }
                }
                if (t.length === 0) {
                    delete x[n]
                }
            }
        }
    };
    b.addEventListener("tick", y._updateRoot);
    var A = function (e, t, n) {
        var r = e._gsTweenID,
            i, s;
        if (!x[r || (e._gsTweenID = r = "t" + T++)]) {
            x[r] = {
                target: e,
                tweens: []
            }
        }
        if (t) {
            i = x[r].tweens;
            i[s = i.length] = t;
            if (n) {
                while (--s > -1) {
                    if (i[s] === t) {
                        i.splice(s, 1)
                    }
                }
            }
        }
        return x[r].tweens
    }, O = function (e, t, n, r, i) {
            var s, o, u;
            if (r === 1 || r >= 4) {
                var a = i.length;
                for (s = 0; s < a; s++) {
                    if ((u = i[s]) !== t) {
                        if (!u._gc)
                            if (u._enabled(false, false)) {
                                o = true
                            }
                    } else if (r === 5) {
                        break
                    }
                }
                return o
            }
            var f = t._startTime + 1e-10,
                l = [],
                c = 0,
                h;
            s = i.length;
            while (--s > -1) {
                if ((u = i[s]) === t || u._gc || u._paused) {} else if (u._timeline !== t._timeline) {
                    h = h || M(t, 0);
                    if (M(u, h) === 0) {
                        l[c++] = u
                    }
                } else if (u._startTime <= f)
                    if (u._startTime + u.totalDuration() / u._timeScale + 1e-10 > f)
                        if (!((t._duration === 0 || !u._initted) && f - u._startTime <= 2e-10)) {
                            l[c++] = u
                        }
            }
            s = c;
            while (--s > -1) {
                u = l[s];
                if (r === 2)
                    if (u._kill(n, e)) {
                        o = true
                    }
                if (r !== 2 || !u._firstPT && u._initted) {
                    if (u._enabled(false, false)) {
                        o = true
                    }
                }
            }
            return o
        }, M = function (e, t) {
            var n = e._timeline,
                r = n._timeScale,
                i = e._startTime;
            while (n._timeline) {
                i += n._startTime;
                r *= n._timeScale;
                if (n._paused) {
                    return -100
                }
                n = n._timeline
            }
            i /= r;
            return i > t ? i - t : !e._initted && i - t < 2e-10 ? 1e-10 : (i = i + e.totalDuration() / e._timeScale / r) > t ? 0 : i - t - 1e-10
        };
    u._init = function () {
        if (this.vars.startAt) {
            this.vars.startAt.overwrite = 0;
            this.vars.startAt.immediateRender = true;
            E.to(this.target, 0, this.vars.startAt)
        }
        var e, t, n;
        if (this.vars.ease instanceof d) {
            this._ease = this.vars.easeParams instanceof Array ? this.vars.ease.config.apply(this.vars.ease, this.vars.easeParams) : this.vars.ease
        } else if (typeof this.vars.ease === "function") {
            this._ease = new d(this.vars.ease, this.vars.easeParams)
        } else {
            this._ease = E.defaultEase
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets) {
            e = this._targets.length;
            while (--e > -1) {
                if (this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], this._overwrittenProps ? this._overwrittenProps[e] : null)) {
                    t = true
                }
            }
        } else {
            t = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps)
        } if (t) {
            E._onPluginEvent("_onInitAllProps", this)
        }
        if (this._overwrittenProps)
            if (this._firstPT == null)
                if (typeof this.target !== "function") {
                    this._enabled(false, false)
                }
        if (this.vars.runBackwards) {
            n = this._firstPT;
            while (n) {
                n.s += n.c;
                n.c = -n.c;
                n = n._next
            }
        }
        this._onUpdate = this.vars.onUpdate;
        this._initted = true
    };
    u._initProps = function (e, t, n, r) {
        var i, s, o, u, a, f;
        if (e == null) {
            return false
        }
        for (i in this.vars) {
            if (N[i]) {
                if (i === "onStartParams" || i === "onUpdateParams" || i === "onCompleteParams" || i === "onReverseCompleteParams" || i === "onRepeatParams")
                    if (a = this.vars[i]) {
                        s = a.length;
                        while (--s > -1) {
                            if (a[s] === "{self}") {
                                a = this.vars[i] = a.concat();
                                a[s] = this
                            }
                        }
                    }
            } else if (S[i] && (u = new S[i])._onInitTween(e, this.vars[i], this)) {
                this._firstPT = f = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: true,
                    n: i,
                    pg: true,
                    pr: u._priority
                };
                s = u._overwriteProps.length;
                while (--s > -1) {
                    t[u._overwriteProps[s]] = this._firstPT
                }
                if (u._priority || u._onInitAllProps) {
                    o = true
                }
                if (u._onDisable || u._onEnable) {
                    this._notifyPluginsOfEnabled = true
                }
            } else {
                this._firstPT = t[i] = f = {
                    _next: this._firstPT,
                    t: e,
                    p: i,
                    f: typeof e[i] === "function",
                    n: i,
                    pg: false,
                    pr: 0
                };
                f.s = !f.f ? parseFloat(e[i]) : e[i.indexOf("set") || typeof e["get" + i.substr(3)] !== "function" ? i : "get" + i.substr(3)]();
                f.c = typeof this.vars[i] === "number" ? this.vars[i] - f.s : typeof this.vars[i] === "string" ? parseFloat(this.vars[i].split("=").join("")) : 0
            } if (f)
                if (f._next) {
                    f._next._prev = f
                }
        }
        if (r)
            if (this._kill(r, e)) {
                return this._initProps(e, t, n, r)
            }
        if (this._overwrite > 1)
            if (this._firstPT)
                if (n.length > 1)
                    if (O(e, this, t, this._overwrite, n)) {
                        this._kill(t, e);
                        return this._initProps(e, t, n, r)
                    }
        return o
    };
    u.render = function (e, t, n) {
        var r = this._time,
            i, s, o;
        if (e >= this._duration) {
            this._totalTime = this._time = this._duration;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            if (!this._reversed) {
                i = true;
                s = "onComplete"
            }
            if (this._duration === 0) {
                if (e === 0 || this._rawPrevTime < 0)
                    if (this._rawPrevTime !== e) {
                        n = true
                    }
                this._rawPrevTime = e
            }
        } else if (e <= 0) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (r !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                s = "onReverseComplete";
                i = this._reversed
            }
            if (e < 0) {
                this._active = false;
                if (this._duration === 0) {
                    if (this._rawPrevTime >= 0) {
                        n = true
                    }
                    this._rawPrevTime = e
                }
            } else if (!this._initted) {
                n = true
            }
        } else {
            this._totalTime = this._time = e;
            if (this._easeType) {
                var u = e / this._duration,
                    a = this._easeType,
                    f = this._easePower;
                if (a === 1 || a === 3 && u >= .5) {
                    u = 1 - u
                }
                if (a === 3) {
                    u *= 2
                }
                if (f === 1) {
                    u *= u
                } else if (f === 2) {
                    u *= u * u
                } else if (f === 3) {
                    u *= u * u * u
                } else if (f === 4) {
                    u *= u * u * u * u
                }
                if (a === 1) {
                    this.ratio = 1 - u
                } else if (a === 2) {
                    this.ratio = u
                } else if (e / this._duration < .5) {
                    this.ratio = u / 2
                } else {
                    this.ratio = 1 - u / 2
                }
            } else {
                this.ratio = this._ease.getRatio(e / this._duration)
            }
        } if (this._time === r && !n) {
            return
        } else if (!this._initted) {
            this._init();
            if (!i && this._time) {
                this.ratio = this._ease.getRatio(this._time / this._duration)
            }
        }
        if (!this._active)
            if (!this._paused) {
                this._active = true
            }
        if (r === 0)
            if (this.vars.onStart)
                if (this._time !== 0 || this._duration === 0)
                    if (!t) {
                        this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || p)
                    }
        o = this._firstPT;
        while (o) {
            if (o.f) {
                o.t[o.p](o.c * this.ratio + o.s)
            } else {
                o.t[o.p] = o.c * this.ratio + o.s
            }
            o = o._next
        }
        if (this._onUpdate)
            if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p)
            }
        if (s)
            if (!this._gc) {
                if (i) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t)
                    if (this.vars[s]) {
                        this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || p)
                    }
            }
    };
    u._kill = function (e, t) {
        if (e === "all") {
            e = null
        }
        if (e == null)
            if (t == null || t == this.target) {
                return this._enabled(false, false)
            }
        t = t || this._targets || this.target;
        var n, r, i, s, o, u, a, f;
        if ((t instanceof Array || t.jquery) && typeof t[0] === "object") {
            n = t.length;
            while (--n > -1) {
                if (this._kill(e, t[n])) {
                    u = true
                }
            }
        } else {
            if (this._targets) {
                n = this._targets.length;
                while (--n > -1) {
                    if (t === this._targets[n]) {
                        o = this._propLookup[n] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                }
            } else if (t !== this.target) {
                return false
            } else {
                o = this._propLookup;
                r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
            } if (o) {
                a = e || o;
                f = e != r && r != "all" && e != o && (e == null || e._tempKill != true);
                for (i in a) {
                    if (s = o[i]) {
                        if (s.pg && s.t._kill(a)) {
                            u = true
                        }
                        if (!s.pg || s.t._overwriteProps.length === 0) {
                            if (s._prev) {
                                s._prev._next = s._next
                            } else if (s === this._firstPT) {
                                this._firstPT = s._next
                            }
                            if (s._next) {
                                s._next._prev = s._prev
                            }
                            s._next = s._prev = null
                        }
                        delete o[i]
                    }
                    if (f) {
                        r[i] = 1
                    }
                }
            }
        }
        return u
    };
    u.invalidate = function () {
        if (this._notifyPluginsOfEnabled) {
            E._onPluginEvent("_onDisable", this)
        }
        this._firstPT = null;
        this._overwrittenProps = null;
        this._onUpdate = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = false;
        this._propLookup = this._targets ? {} : [];
        return this
    };
    u._enabled = function (e, t) {
        if (e && this._gc) {
            if (this._targets) {
                var n = this._targets.length;
                while (--n > -1) {
                    this._siblings[n] = A(this._targets[n], this, true)
                }
            } else {
                this._siblings = A(this.target, this, true)
            }
        }
        y.prototype._enabled.call(this, e, t);
        if (this._notifyPluginsOfEnabled)
            if (this._firstPT) {
                return E._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
            }
        return false
    };
    E.to = function (e, t, n) {
        return new E(e, t, n)
    };
    E.from = function (e, t, n) {
        n.runBackwards = true;
        if (n.immediateRender != false) {
            n.immediateRender = true
        }
        return new E(e, t, n)
    };
    E.fromTo = function (e, t, n, r) {
        r.startAt = n;
        if (n.immediateRender) {
            r.immediateRender = true
        }
        return new E(e, t, r)
    };
    E.delayedCall = function (e, t, n, r, i) {
        return new E(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: false,
            useFrames: i,
            overwrite: 0
        })
    };
    E.set = function (e, t) {
        return new E(e, 0, t)
    };
    E.killTweensOf = E.killDelayedCallsTo = function (e, t) {
        var n = E.getTweensOf(e),
            r = n.length;
        while (--r > -1) {
            n[r]._kill(t, e)
        }
    };
    E.getTweensOf = function (e) {
        if (e == null) {
            return
        }
        var t, n, r, i;
        if ((e instanceof Array || e.jquery) && typeof e[0] === "object") {
            t = e.length;
            n = [];
            while (--t > -1) {
                n = n.concat(E.getTweensOf(e[t]))
            }
            t = n.length;
            while (--t > -1) {
                i = n[t];
                r = t;
                while (--r > -1) {
                    if (i === n[r]) {
                        n.splice(t, 1)
                    }
                }
            }
        } else {
            n = A(e).concat();
            t = n.length;
            while (--t > -1) {
                if (n[t]._gc) {
                    n.splice(t, 1)
                }
            }
        }
        return n
    };
    var _ = c("plugins.TweenPlugin", function (e, t) {
        this._overwriteProps = (e || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = t || 0
    }, true);
    u = _.prototype;
    _.version = 12;
    _.API = 2;
    u._firstPT = null;
    u._addTween = function (e, t, n, r, i, s) {
        var o;
        if (r != null && (o = typeof r === "number" || r.charAt(1) !== "=" ? Number(r) - n : Number(r.split("=").join("")))) {
            this._firstPT = {
                _next: this._firstPT,
                t: e,
                p: t,
                s: n,
                c: o,
                f: typeof e[t] === "function",
                n: i || t,
                r: s
            };
            if (this._firstPT._next) {
                this._firstPT._next._prev = this._firstPT
            }
        }
    };
    u.setRatio = function (e) {
        var t = this._firstPT,
            n;
        while (t) {
            n = t.c * e + t.s;
            if (t.r) {
                n = n + (n > 0 ? .5 : -.5) >> 0
            }
            if (t.f) {
                t.t[t.p](n)
            } else {
                t.t[t.p] = n
            }
            t = t._next
        }
    };
    u._kill = function (e) {
        if (e[this._propName] != null) {
            this._overwriteProps = []
        } else {
            var t = this._overwriteProps.length;
            while (--t > -1) {
                if (e[this._overwriteProps[t]] != null) {
                    this._overwriteProps.splice(t, 1)
                }
            }
        }
        var n = this._firstPT;
        while (n) {
            if (e[n.n] != null) {
                if (n._next) {
                    n._next._prev = n._prev
                }
                if (n._prev) {
                    n._prev._next = n._next;
                    n._prev = null
                } else if (this._firstPT === n) {
                    this._firstPT = n._next
                }
            }
            n = n._next
        }
        return false
    };
    u._roundProps = function (e, t) {
        var n = this._firstPT;
        while (n) {
            if (e[this._propName] || n.n != null && e[n.n.split(this._propName + "_").join("")]) {
                n.r = t
            }
            n = n._next
        }
    };
    E._onPluginEvent = function (e, t) {
        var n = t._firstPT,
            r;
        if (e === "_onInitAllProps") {
            var i, s, o, u;
            while (n) {
                u = n._next;
                i = s;
                while (i && i.pr > n.pr) {
                    i = i._next
                }
                if (n._prev = i ? i._prev : o) {
                    n._prev._next = n
                } else {
                    s = n
                } if (n._next = i) {
                    i._prev = n
                } else {
                    o = n
                }
                n = u
            }
            n = t._firstPT = s
        }
        while (n) {
            if (n.pg)
                if (typeof n.t[e] === "function")
                    if (n.t[e]()) {
                        r = true
                    }
            n = n._next
        }
        return r
    };
    _.activate = function (e) {
        var t = e.length;
        while (--t > -1) {
            if (e[t].API === _.API) {
                E._plugins[(new e[t])._propName] = e[t]
            }
        }
        return true
    };
    if (r = e._gsQueue) {
        for (i = 0; i < r.length; i++) {
            r[i]()
        }
        for (u in f) {
            if (!f[u].def) {
                console.log("Warning: TweenLite encountered missing dependency: com.greensock." + u)
            }
        }
    }
})(window);
(function (e) {
    var t = function (n, r) {
        var i = this;
        var s = t.prototype;
        this.hider = null;
        this.mainHolder_do = null;
        this.mainImagesHolder_do = null;
        this.smallImage_sdo = null;
        this.border_sdo = null;
        this.handler_sdo = null;
        this.images_ar = r.navigatorImages_ar;
        this.iamgesSdo_ar = [];
        this.borderColor_str = r.navigatorBorderColor_str;
        this.handlerColor_str = r.navigatorHandlerColor_str;
        this.handMovePath_str = r.handMovePath_str;
        this.handGrabPath_str = r.handGrabPath_str;
        this.navigatorPosition_str = r.navigatorPosition_str;
        this.totalImages = i.images_ar.length;
        this.stageWidth;
        this.stageHeight;
        this.totalWidth = r.navigatorWidth;
        this.totalHeight = r.navigatorHeight;
        this.offsetX = r.navigatorOffsetX;
        this.offsetY = r.navigatorOffsetY;
        this.finalWidth;
        this.finalHeight;
        this.finalX;
        this.finalY;
        this.xPositionOnPress;
        this.yPositionOnPress;
        this.lastPresedX;
        this.lastPresedY;
        this.tweenCompleteId_to;
        this.isShowed_bl = true;
        this.isTweening_bl = false;
        this.isDragging_bl = false;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        i.init = function () {
            i.setOverflow("visible");
            i.setSelectable(false);
            i.setupMainContiners();
            i.setupImagesSdos(0);
            i.hide();
            i.resizeAndPosition()
        };
        i.activate = function () {
            i.images_ar = r.navigatorImages_ar;
            i.totalImages = i.images_ar.length;
            i.setupImagesSdos(1);
            i.updateImage(0);
            i.addPannSupport();
            i.screen.onmousedown = function () {
                i.dispatchEvent(t.MOUSE_DOWN)
            };
            if (FWDUtils.isIEAndLessThen9) i.handler_sdo.screen.onmousedown = function () {
                i.dispatchEvent(t.MOUSE_DOWN)
            }
        };
        i.resizeAndPosition = function () {
            if (n.stageWidth == i.stageWidth && n.stageHeight == i.stageHeight) return;
            i.stageWidth = n.stageWidth;
            i.stageHeight = n.stageHeight;
            if (i.navigatorPosition_str == t.TOP_LEFT) {
                i.setX(i.offsetX);
                i.setY(i.offsetY)
            } else if (i.navigatorPosition_str == t.TOP_RIGHT) {
                i.setX(i.stageWidth - i.totalWidth - i.offsetX);
                i.setY(i.offsetY)
            } else if (i.navigatorPosition_str == t.BOTTOM_LEFT) {
                i.setX(i.offsetX);
                i.setY(i.stageHeight - i.totalHeight - i.offsetY)
            } else if (i.navigatorPosition_str == t.BOTTOM_RIGHT) {
                i.setX(i.stageWidth - i.totalWidth - i.offsetX);
                i.setY(i.stageHeight - i.totalHeight - i.offsetY)
            }
        };
        i.setupHider = function (e) {
            i.hider = e;
            i.hider.addListener(FWDHider.HIDE, i.onHiderHide)
        };
        i.onHiderHide = function () {
            if (FWDUtils.hitTest(i.mainHolder_do.screen, i.hider.globalX, i.hider.globalY)) i.hider.reset()
        };
        i.setupMainContiners = function () {
            i.mainHolder_do = new FWDDisplayObject("div", "absolute", "visible");
            i.mainHolder_do.setWidth(i.totalWidth);
            i.mainHolder_do.setHeight(i.totalHeight);
            i.addChild(i.mainHolder_do);
            i.mainImagesHolder_do = new FWDDisplayObject("div", "absolute", "visible");
            i.smallImage_sdo = new FWDSimpleDisplayObject("img");
            i.mainHolder_do.addChild(i.mainImagesHolder_do);
            i.border_sdo = new FWDSimpleDisplayObject("div");
            i.border_sdo.setWidth(i.totalWidth - 2);
            i.border_sdo.setHeight(i.totalHeight - 2);
            i.border_sdo.getStyle().borderStyle = "solid";
            i.border_sdo.getStyle().borderWidth = "1px";
            i.border_sdo.getStyle().borderColor = i.borderColor_str;
            i.mainHolder_do.addChild(i.border_sdo);
            i.handler_sdo = new FWDSimpleDisplayObject("div");
            i.handler_sdo.setWidth(i.totalWidth - 2);
            i.handler_sdo.setHeight(i.totalHeight - 2);
            i.handler_sdo.getStyle().borderStyle = "solid";
            i.handler_sdo.getStyle().borderWidth = "1px";
            if (FWDUtils.isIE) i.handler_sdo.getStyle().background = "url('dumy')";
            i.handler_sdo.getStyle().borderColor = i.handlerColor_str;
            i.mainHolder_do.addChild(i.handler_sdo)
        };
        i.setupImagesSdos = function (e) {
            var t;
            for (var n = e; n < i.totalImages; n++) {
                t = new FWDSimpleDisplayObject("img");
                t.setScreen(i.images_ar[n]);
                t.setVisible(false);
                i.iamgesSdo_ar.push(t);
                i.mainImagesHolder_do.addChild(t)
            }
            if (e == 0) i.smallImage_sdo = i.iamgesSdo_ar[0]
        };
        i.updateImage = function (e) {
            if (i.smallImage_sdo) i.smallImage_sdo.setVisible(false);
            i.smallImage_sdo = i.iamgesSdo_ar[e];
            i.smallImage_sdo.setVisible(true)
        };
        i.update = function (e, t, n, r, s) {
            if (n > 1) n = 1;
            if (r > 1) r = 1;
            if (e > 1) e = 1;
            if (t > 1) t = 1;
            if (isNaN(e)) e = 0;
            if (isNaN(t)) t = 0;
            i.finalWidth = Math.round(n * (i.totalWidth - 4));
            i.finalHeight = Math.round(r * (i.totalHeight - 4));
            i.finalX = Math.round(e * (i.totalWidth - 2 - i.finalWidth));
            i.finalY = Math.round(t * (i.totalHeight - 2 - i.finalHeight));
            clearTimeout(i.tweenCompleteId_to);
            if (s) {
                i.isTweening_bl = true;
                i.tweenCompleteId_to = setTimeout(function () {
                    if (i == null) return;
                    i.isTweening_bl = false
                }, 200);
                TweenMax.killTweensOf(i.handler_sdo);
                TweenMax.to(i.handler_sdo, .2, {
                    x: i.finalX,
                    y: i.finalY,
                    w: i.finalWidth,
                    h: i.finalHeight
                })
            } else {
                i.isTweening_bl = false;
                TweenMax.killTweensOf(i.handler_sdo);
                i.handler_sdo.setX(i.finalX);
                i.handler_sdo.setY(i.finalY);
                i.handler_sdo.setWidth(i.finalWidth);
                i.handler_sdo.setHeight(i.finalHeight)
            }
        };
        i.addPannSupport = function () {
            i.handler_sdo.screen.style.cursor = "url(" + i.handMovePath_str + "), default";
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    i.handler_sdo.screen.addEventListener("MSPointerDown", i.panStartHandler)
                } else {
                    i.handler_sdo.screen.addEventListener("touchstart", i.panStartHandler)
                }
            } else if (i.handler_sdo.screen.addEventListener) {
                i.handler_sdo.screen.addEventListener("mousedown", i.panStartHandler)
            } else if (i.handler_sdo.screen.attachEvent) {
                i.handler_sdo.screen.attachEvent("onmousedown", i.panStartHandler)
            }
        };
        i.panStartHandler = function (r) {
            if (r.preventDefault) r.preventDefault();
            if (i.isTweening_bl) return;
            if (!i.isMobile_bl) n.showPanDumy();
            var s = FWDUtils.getViewportMouseCoordinates(r);
            i.isDragging_bl = true;
            i.xPositionOnPress = i.handler_sdo.getX();
            i.yPositionOnPress = i.handler_sdo.getY();
            i.lastPresedX = s.screenX;
            i.lastPresedY = s.screenY;
            i.dispatchEvent(t.PAN_START);
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    e.addEventListener("MSPointerMove", i.panMoveHandler);
                    e.addEventListener("MSPointerUp", i.panEndHandler)
                } else {
                    e.addEventListener("touchmove", i.panMoveHandler);
                    e.addEventListener("touchend", i.panEndHandler)
                }
            } else {
                i.handler_sdo.screen.style.cursor = "url(" + i.handGrabPath_str + "), default";
                i.screen.style.cursor = "url(" + i.handGrabPath_str + "), default";
                if (e.addEventListener) {
                    e.addEventListener("mousemove", i.panMoveHandler);
                    e.addEventListener("mouseup", i.panEndHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", i.panMoveHandler);
                    document.attachEvent("onmouseup", i.panEndHandler)
                }
            }
        };
        i.panMoveHandler = function (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.touches && e.touches.length != 1) return;
            var n = FWDUtils.getViewportMouseCoordinates(e);
            i.finalX = Math.round(i.xPositionOnPress + n.screenX - i.lastPresedX);
            if (i.finalX < 1) {
                i.finalX = 1
            } else if (i.finalX >= i.totalWidth - 3 - i.finalWidth) {
                i.finalX = i.totalWidth - 3 - i.finalWidth
            }
            i.handler_sdo.setX(i.finalX);
            i.finalY = Math.round(i.yPositionOnPress + n.screenY - i.lastPresedY);
            if (i.finalY < 1) {
                i.finalY = 1
            } else if (i.finalY >= i.totalHeight - 3 - i.finalHeight) {
                i.finalY = i.totalHeight - 3 - i.finalHeight
            }
            i.handler_sdo.setY(i.finalY);
            i.dispatchEvent(t.PAN, {
                percentX: i.finalX / (i.totalWidth - 2 - i.finalWidth),
                percentY: i.finalY / (i.totalHeight - 2 - i.finalHeight)
            })
        };
        i.panEndHandler = function (t) {
            i.isDragging_bl = false;
            if (!i.isMobile_bl) n.hidePanDumy();
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    e.removeEventListener("MSPointerMove", i.panMoveHandler);
                    e.removeEventListener("MSPointerUp", i.panEndHandler)
                } else {
                    e.removeEventListener("touchmove", i.panMoveHandler);
                    e.removeEventListener("touchend", i.panEndHandler)
                }
            } else {
                i.handler_sdo.screen.style.cursor = "url(" + i.handMovePath_str + "), default";
                i.screen.style.cursor = "default";
                if (e.removeEventListener) {
                    e.removeEventListener("mousemove", i.panMoveHandler);
                    e.removeEventListener("mouseup", i.panEndHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", i.panMoveHandler);
                    document.detachEvent("onmouseup", i.panEndHandler)
                }
            }
        };
        i.show = function (e) {
            if (i.isShowed_bl) return;
            i.resizeAndPosition();
            if (e) {
                TweenMax.to(i.mainHolder_do, 1, {
                    y: 0,
                    ease: Expo.easeInOut
                })
            } else {
                TweenMax.killTweensOf(i.mainHolder_do);
                i.mainHolder_do.setY(0)
            }
            i.isShowed_bl = true
        };
        i.hide = function (e) {
            if (!i.isShowed_bl) return;
            if (i.navigatorPosition_str == t.TOP_LEFT || i.navigatorPosition_str == t.TOP_RIGHT) {
                if (e) {
                    TweenMax.to(i.mainHolder_do, 1, {
                        y: -i.totalHeight - i.offsetY,
                        ease: Expo.easeInOut
                    });
                    i.update(1, 1, 1, 1, true)
                } else {
                    TweenMax.killTweensOf(i.mainHolder_do);
                    i.mainHolder_do.setY(-i.totalHeight - i.offsetY)
                }
            } else if (i.navigatorPosition_str == t.BOTTOM_LEFT || i.navigatorPosition_str == t.BOTTOM_RIGHT) {
                if (e) {
                    TweenMax.to(i.mainHolder_do, 1, {
                        y: i.totalHeight + i.offsetY,
                        ease: Expo.easeInOut
                    });
                    i.update(1, 1, 1, 1, true)
                } else {
                    TweenMax.killTweensOf(i.mainHolder_do);
                    i.mainHolder_do.setY(i.totalHeight + i.offsetY)
                }
            }
            i.isShowed_bl = false
        };
        i.cleanMainEvents = function () {
            if (i.isMobile_bl) {
                i.handler_sdo.screen.removeEventListener("touchstart", i.panStartHandler);
                i.handler_sdo.screen.addEventListener("MSPointerDown", i.panStartHandler);
                e.removeEventListener("touchmove", i.panMoveHandler);
                e.removeEventListener("touchend", i.panEndHandler);
                e.removeEventListener("MSPointerMove", i.panMoveHandler);
                e.removeEventListener("MSPointerUp", i.panEndHandler)
            } else if (i.handler_sdo.screen.removeEventListener) {
                i.handler_sdo.screen.removeEventListener("mousedown", i.panStartHandler);
                e.removeEventListener("mousemove", i.panMoveHandler);
                e.removeEventListener("mouseup", i.panEndHandler)
            } else if (i.handler_sdo.screen.detachEvent) {
                i.handler_sdo.screen.detachEvent("onmousedown", i.panStartHandler);
                document.detachEvent("onmousemove", i.panMoveHandler);
                document.detachEvent("onmouseup", i.panEndHandler)
            }
            i.screen.onmousedown = null;
            i.handler_sdo.screen.onmousedown = null;
            clearTimeout(i.tweenCompleteId_to)
        };
        i.destroy = function () {
            i.cleanMainEvents();
            if (i.hider) {
                i.hider.removeListener(FWDHider.HIDE, i.onHiderHide)
            }
            var e = i.iamgesSdo_ar.length;
            for (var o = 0; o < e; o++) {
                i.iamgesSdo_ar[o].destroy()
            }
            TweenMax.killTweensOf(i.mainHolder_do);
            i.mainHolder_do.destroy();
            TweenMax.killTweensOf(i.handler_sdo);
            i.handler_sdo.destroy();
            i.mainImagesHolder_do.destroy();
            i.hider = null;
            i.mainHolder_do = null;
            i.mainImagesHolder_do = null;
            i.smallImage_sdo = null;
            i.handler_sdo = null;
            i.images_ar = r.navigatorImages_ar;
            i.iamgesSdo_ar = [];
            i.borderColor_str = null;
            i.handlerColor_str = null;
            i.handMovePath_str = null;
            i.handGrabPath_str = null;
            i.navigatorPosition_str = null;
            r = null;
            n = null;
            i.setInnerHTML("");
            s.destroy();
            i = null;
            s = null;
            t.prototype = null
        };
        i.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.TOP_LEFT = "topleft";
    t.TOP_RIGHT = "topright";
    t.BOTTOM_LEFT = "bottomleft";
    t.BOTTOM_RIGHT = "bottomright";
    t.PAN_START = "panStart";
    t.PAN = "pan";
    t.MOUSE_DOWN = "navigatorOnMouseDown";
    t.prototype = null;
    e.FWDNavigator = t
})(window);
(function (e) {
    var t = function (e, n, r, i, s, o, u) {
        var a = this;
        var f = t.prototype;
        a.imageSource_img = n;
        a.bk_do = null;
        a.mainAnimHolder_do = null;
        a.animHolder_do = null;
        a.imageAnimHolder_do = null;
        a.images_do = null;
        a.text_do = null;
        a.backgroundColor_str = u;
        a.fontColor_str = o;
        a.stageWidth;
        a.stageHeight;
        a.segmentWidth = r;
        a.segmentHeight = i;
        a.totalSegments = s;
        a.isShowed_bl = false;
        a.allowResize_bl = true;
        a.init = function () {
            a.setupMainContainers();
            if (FWDUtils.isMobile) {
                a.screen.addEventListener("touchstart", a.windowTouchStartHandler)
            }
        };
        a.windowTouchStartHandler = function (e) {
            if (e.preventDefault) e.preventDefault()
        };
        a.setupMainContainers = function () {
            a.bk_do = new FWDSimpleDisplayObject("div");
            a.bk_do.setBkColor(a.backgroundColor_str);
            a.bk_do.setAlpha(0);
            a.bk_do.setResizableSizeAfterParent();
            a.addChild(a.bk_do);
            a.mainAnimHolder_do = new FWDDisplayObject("div");
            a.mainAnimHolder_do.setOverflow("visible");
            a.mainAnimHolder_do.setWidth(300);
            a.mainAnimHolder_do.setHeight(300);
            a.addChild(a.mainAnimHolder_do);
            a.animHolder_do = new FWDDisplayObject("div");
            a.animHolder_do.setOverflow("visible");
            a.animHolder_do.setWidth(300);
            a.animHolder_do.setHeight(300);
            a.mainAnimHolder_do.addChild(a.animHolder_do);
            a.imageAnimHolder_do = new FWDDisplayObject("div");
            a.imageAnimHolder_do.setWidth(a.segmentWidth);
            a.imageAnimHolder_do.setHeight(a.segmentHeight);
            a.animHolder_do.addChild(a.imageAnimHolder_do);
            a.images_do = new FWDSimpleDisplayObject("img");
            a.images_do.setScreen(a.imageSource_img);
            a.imageAnimHolder_do.addChild(a.images_do);
            a.text_do = new FWDSimpleDisplayObject("div");
            a.text_do.setDisplay("inline-block");
            a.text_do.getStyle().fontFamily = "Arial";
            a.text_do.getStyle().fontSize = "12px";
            a.text_do.getStyle().whiteSpace = "nowrap";
            a.text_do.getStyle().color = a.fontColor_str;
            a.text_do.getStyle().fontSmoothing = "antialiased";
            a.text_do.getStyle().webkitFontSmoothing = "antialiased";
            a.text_do.getStyle().textRendering = "optimizeLegibility";
            a.text_do.setY(a.segmentHeight + 2);
            a.animHolder_do.addChild(a.text_do)
        };
        a.positionAndResize = function () {
            if (e.stageWidth == a.stageWidth && e.stageHeight == a.stageHeight) return;
            if (!a.allowResize_bl) return;
            a.stageWidth = e.stageWidth;
            a.stageHeight = e.stageHeight;
            a.mainAnimHolder_do.setX(Math.round(a.stageWidth - a.segmentWidth) / 2);
            a.mainAnimHolder_do.setY(Math.round((a.stageHeight - a.segmentHeight) / 2) - 10);
            a.setWidth(a.stageWidth);
            a.setHeight(a.stageHeight)
        };
        a.update = function (e, t) {
            var n = Math.round(e * (a.totalSegments - 1)) * a.segmentWidth;
            a.images_do.setX(-n);
            a.text_do.setInnerHTML(t);
            a.text_do.setX(Math.round((a.segmentWidth - a.text_do.getWidth()) / 2))
        };
        a.show = function () {
            TweenMax.killTweensOf(a.bk_do);
            TweenMax.to(a.bk_do, 1, {
                alpha: .6
            });
            TweenMax.to(a.animHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            });
            a.isShowed_bl = true
        };
        a.hide = function (e) {
            if (a == null) return;
            TweenMax.killTweensOf(a);
            TweenMax.killTweensOf(a.animHolder_do);
            if (e) {
                a.allowResize_bl = false;
                TweenMax.to(a.bk_do, .8, {
                    alpha: 0,
                    delay: .6,
                    onComplete: a.onHideComplete
                });
                TweenMax.to(a.animHolder_do, .8, {
                    y: a.stageHeight / 2 + a.segmentHeight,
                    ease: Expo.easeInOut
                })
            } else {
                a.bk_do.setAlpha(0);
                a.animHolder_do.setY(-a.stageHeight / 2 - a.segmentHeight)
            }
            a.isShowed_bl = false
        };
        a.onHideComplete = function () {
            a.dispatchEvent(t.HIDE_COMPLETE)
        };
        a.destroy = function () {
            if (FWDUtils.isMobile) {
                a.screen.removeEventListener("touchstart", a.windowTouchStartHandler)
            }
            TweenMax.killTweensOf(a);
            TweenMax.killTweensOf(a.bk_do);
            TweenMax.killTweensOf(a.animHolder_do);
            a.bk_do.destroy();
            a.mainAnimHolder_do.destroy();
            a.animHolder_do.destroy();
            a.imageAnimHolder_do.destroy();
            a.images_do.destroy();
            a.text_do.destroy();
            a.imageSource_img = null;
            a.bk_do = null;
            a.mainAnimHolder_do = null;
            a.animHolder_do = null;
            a.imageAnimHolder_do = null;
            a.images_do = null;
            a.text_do = null;
            a.backgroundColor_str = null;
            a.fontColor_str = null;
            a.init = null;
            a.setupMainContainers = null;
            a.positionAndResize = null;
            a.update = null;
            a.show = null;
            a.hide = null;
            a.onHideComplete = null;
            e = null;
            n = null;
            u = null;
            o = null;
            a.setInnerHTML("");
            f.destroy();
            a = null;
            t.prototype = null
        };
        a.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDDisplayObject("div")
    };
    t.HIDE_COMPLETE = "hideComplete";
    t.prototype = null;
    e.FWDPreloader = t
})(window);
(function (e) {
    var t = function (e, n) {
        var r = this;
        var i = t.prototype;
        r.nImg = e;
        r.sImg = n;
        this.n_do;
        this.s_do;
        this.toolTipLabel_str;
        this.totalWidth = this.nImg.width;
        this.totalHeight = this.nImg.height;
        this.isDisabled_bl = false;
        this.isSelectedFinal_bl = false;
        this.isActive_bl = false;
        this.isMobile_bl = FWDUtils.isMobile;
        this.hasPointerEvent_bl = FWDUtils.hasPointerEvent;
        r.init = function () {
            r.setupMainContainers()
        };
        r.setupMainContainers = function () {
            r.n_do = new FWDSimpleDisplayObject("img");
            r.n_do.setScreen(r.nImg);
            r.s_do = new FWDSimpleDisplayObject("img");
            r.s_do.setScreen(r.sImg);
            r.s_do.setAlpha(0);
            r.addChild(r.n_do);
            r.addChild(r.s_do);
            r.setWidth(r.nImg.width);
            r.setHeight(r.nImg.height);
            r.setButtonMode(true);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.screen.addEventListener("MSPointerDown", r.onMouseDown);
                    r.screen.addEventListener("MSPointerUp", r.onClick);
                    r.screen.addEventListener("MSPointerOver", r.onMouseOver);
                    r.screen.addEventListener("MSPointerOut", r.onMouseOut)
                } else {
                    r.screen.addEventListener("touchstart", r.onMouseDown)
                }
            } else if (r.screen.addEventListener) {
                r.screen.addEventListener("mouseover", r.onMouseOver);
                r.screen.addEventListener("mouseout", r.onMouseOut);
                r.screen.addEventListener("mousedown", r.onMouseDown);
                r.screen.addEventListener("click", r.onClick)
            } else if (r.screen.attachEvent) {
                r.screen.attachEvent("onmouseover", r.onMouseOver);
                r.screen.attachEvent("onmouseout", r.onMouseOut);
                r.screen.attachEvent("onmousedown", r.onMouseDown);
                r.screen.attachEvent("onclick", r.onClick)
            }
        };
        r.onMouseOver = function (e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                r.dispatchEvent(t.MOUSE_OVER, {
                    e: e
                });
                if (r.isDisabled_bl || r.isSelectedFinal_bl) return;
                TweenMax.killTweensOf(r.s_do);
                TweenMax.to(r.s_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }
        };
        r.onMouseOut = function (e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                r.dispatchEvent(t.MOUSE_OUT, {
                    e: e
                });
                if (r.isDisabled_bl || r.isSelectedFinal_bl) return;
                TweenMax.killTweensOf(r.s_do);
                TweenMax.to(r.s_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        };
        r.onClick = function (e) {
            if (r.isDisabled_bl || r.isSelectedFinal_bl) return;
            r.dispatchEvent(t.CLICK, {
                e: e
            })
        };
        r.onMouseDown = function (e) {
            if (e.preventDefault) e.preventDefault();
            if (r.isDisabled_bl || r.isSelectedFinal_bl) return;
            r.dispatchEvent(t.MOUSE_DOWN, {
                e: e
            })
        };
        r.setSelctedFinal = function () {
            r.isSelectedFinal_bl = true;
            TweenMax.killTweensOf(r.s_do);
            TweenMax.to(r.s_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            r.setButtonMode(false)
        };
        r.setUnselctedFinal = function () {
            r.isSelectedFinal_bl = false;
            TweenMax.to(r.s_do, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            });
            r.setButtonMode(true)
        };
        r.destroy = function () {
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.screen.removeEventListener("MSPointerDown", r.onMouseDown);
                    r.screen.removeEventListener("MSPointerUp", r.onClick);
                    r.screen.removeEventListener("MSPointerOver", r.onMouseOver);
                    r.screen.removeEventListener("MSPointerOut", r.onMouseOut)
                } else {
                    r.screen.removeEventListener("touchstart", r.onMouseDown)
                }
            } else if (r.screen.addEventListener) {
                r.screen.removeEventListener("mouseover", r.onMouseOver);
                r.screen.removeEventListener("mouseout", r.onMouseOut);
                r.screen.removeEventListener("mousedown", r.onMouseDown);
                r.screen.removeEventListener("click", r.onClick)
            } else if (r.screen.detachEvent) {
                r.screen.detachEvent("onmouseover", r.onMouseOver);
                r.screen.detachEvent("onmouseout", r.onMouseOut);
                r.screen.detachEvent("onmousedown", r.onMouseDown);
                r.screen.detachEvent("onclick", r.onClick)
            }
            TweenMax.killTweensOf(r.s_do);
            r.n_do.destroy();
            r.s_do.destroy();
            r.nImg = null;
            r.sImg = null;
            r.n_do = null;
            r.s_do = null;
            e = null;
            n = null;
            r.toolTipLabel_str = null;
            r.init = null;
            r.setupMainContainers = null;
            r.onMouseOver = null;
            r.onMouseOut = null;
            r.onClick = null;
            r.onMouseDown = null;
            r.setSelctedFinal = null;
            r.setUnselctedFinal = null;
            r.setInnerHTML("");
            i.destroy();
            r = null;
            i = null;
            t.prototype = null
        };
        r.init()
    };
    t.setPrototype = function () {
        t.prototype = null;
        t.prototype = new FWDDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.MOUSE_OVER = "onMouseOver";
    t.MOUSE_OUT = "onMouseOut";
    t.MOUSE_DOWN = "onMouseDown";
    t.prototype = null;
    e.FWDSimpleButton = t
})(window);
(function (e) {
    var t = function (e, t, n, r) {
        var i = this;
        if (e == "div" || e == "img" || e == "canvas") {
            i.type = e
        } else {
            throw Error("Type is not valid! " + e)
        }
        this.style;
        this.screen;
        this.transform;
        this.position = t || "absolute";
        this.overflow = n || "hidden";
        this.display = r || "block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDUtils.hasTransform2d;
        if (FWDUtils.isIE || FWDUtils.isFirefox) i.hasTransform3d_bl = false;
        this.hasBeenSetSelectable_bl = false;
        i.init = function () {
            i.setScreen()
        };
        i.getTransform = function () {
            var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
            var t;
            while (t = e.shift()) {
                if (typeof i.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return false
        };
        i.getOpacityType = function () {
            var e;
            if (typeof i.screen.style.opacity != "undefined") {
                e = "opacity"
            } else {
                e = "filter"
            }
            return e
        };
        i.setScreen = function (e) {
            if (i.type == "img" && e) {
                i.screen = e;
                i.setMainProperties()
            } else {
                i.screen = document.createElement(i.type);
                i.setMainProperties()
            }
        };
        i.setMainProperties = function () {
            i.transform = i.getTransform();
            i.setPosition(i.position);
            i.setDisplay(i.display);
            i.setOverflow(i.overflow);
            i.opacityType = i.getOpacityType();
            if (i.opacityType == "opacity") i.isHtml5_bl = true;
            if (i.opacityType == "filter") i.screen.style.filter = "inherit";
            i.screen.style.left = "0px";
            i.screen.style.top = "0px";
            i.screen.style.margin = "0px";
            i.screen.style.padding = "0px";
            i.screen.style.maxWidth = "none";
            i.screen.style.maxHeight = "none";
            i.screen.style.border = "none";
            i.screen.style.lineHeight = "1";
            i.screen.style.backgroundColor = "transparent";
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden";
            if (e == "img") {
                i.setWidth(i.screen.width);
                i.setHeight(i.screen.height);
                i.setSelectable(false)
            }
        };
        i.setSelectable = function (e) {
            if (!e) {
                i.screen.style.userSelect = "none";
                i.screen.style.MozUserSelect = "none";
                i.screen.style.webkitUserSelect = "none";
                i.screen.style.khtmlUserSelect = "none";
                i.screen.style.oUserSelect = "none";
                i.screen.style.msUserSelect = "none";
                i.screen.msUserSelect = "none";
                i.screen.ondragstart = function (e) {
                    return false
                };
                i.screen.onselectstart = function () {
                    return false
                };
                i.screen.ontouchstart = function (e) {
                    return false
                };
                i.screen.style.webkitTouchCallout = "none";
                i.hasBeenSetSelectable_bl = true
            }
        };
        i.setBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "visible";
            i.screen.style.webkitBackfaceVisibility = "visible";
            i.screen.style.MozBackfaceVisibility = "visible"
        };
        i.removeBackfaceVisibility = function () {
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden"
        };
        i.getScreen = function () {
            return i.screen
        };
        i.setVisible = function (e) {
            i.visible = e;
            if (i.visible == true) {
                i.screen.style.visibility = "visible"
            } else {
                i.screen.style.visibility = "hidden"
            }
        };
        i.getVisible = function () {
            return i.visible
        };
        i.setResizableSizeAfterParent = function () {
            i.screen.style.width = "100%";
            i.screen.style.height = "100%"
        };
        i.getStyle = function () {
            return i.screen.style
        };
        i.setOverflow = function (e) {
            i.overflow = e;
            i.screen.style.overflow = i.overflow
        };
        i.setPosition = function (e) {
            i.position = e;
            i.screen.style.position = i.position
        };
        i.setDisplay = function (e) {
            i.display = e;
            i.screen.style.display = i.display
        };
        i.setButtonMode = function (e) {
            i.buttonMode = e;
            if (i.buttonMode == true) {
                i.screen.style.cursor = "pointer"
            } else {
                i.screen.style.cursor = "default"
            }
        };
        i.setBkColor = function (e) {
            i.screen.style.backgroundColor = e
        };
        i.setInnerHTML = function (e) {
            i.innerHTML = e;
            i.screen.innerHTML = i.innerHTML
        };
        i.getInnerHTML = function () {
            return i.innerHTML
        };
        i.getRect = function () {
            return i.screen.getBoundingClientRect()
        };
        i.setAlpha = function (e) {
            i.alpha = e;
            if (i.opacityType == "opacity") {
                i.screen.style.opacity = i.alpha
            } else if (i.opacityType == "filter") {
                i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
            }
        };
        i.getAlpha = function () {
            return i.alpha
        };
        i.getRect = function () {
            return i.screen.getBoundingClientRect()
        };
        i.getGlobalX = function () {
            return i.getRect().left
        };
        i.getGlobalY = function () {
            return i.getRect().top
        };
        i.setX = function (e) {
            i.x = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.left = i.x + "px"
            }
        };
        i.getX = function () {
            return i.x
        };
        i.setY = function (e) {
            i.y = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.top = i.y + "px"
            }
        };
        i.getY = function () {
            return i.y
        };
        i.setWidth = function (e) {
            i.w = e;
            if (i.type == "img") {
                i.screen.width = i.w
            } else {
                i.screen.style.width = i.w + "px"
            }
        };
        i.getWidth = function () {
            if (i.type == "div") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            } else if (i.type == "img") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                if (i.screen.width != 0) return i.screen.width;
                return i._w
            } else if (i.type == "canvas") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            }
        };
        i.setHeight = function (e) {
            i.h = e;
            if (i.type == "img") {
                i.screen.height = i.h
            } else {
                i.screen.style.height = i.h + "px"
            }
        };
        i.getHeight = function () {
            if (i.type == "div") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            } else if (i.type == "img") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                if (i.screen.height != 0) return i.screen.height;
                return i.h
            } else if (i.type == "canvas") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            }
        };
        i.disposeImage = function () {
            if (i.type == "img") i.screen.src = null
        };
        i.destroy = function () {
            if (i == null) return;
            if (i.hasBeenSetSelectable_bl) {
                i.screen.ondragstart = null;
                i.screen.onselectstart = null;
                i.screen.ontouchstart = null
            }
            i.style = null;
            i.screen = null;
            i.transform = null;
            i.position = null;
            i.overflow = null;
            i.display = null;
            i.visible = null;
            i.buttonMode = null;
            i.x = null;
            i.y = null;
            i.w = null;
            i.h = null;
            i.rect = null;
            i.alpha = null;
            i.innerHTML = null;
            i.opacityType = null;
            i.isHtml5_bl = null;
            e = null;
            t = null;
            n = null;
            r = null;
            i.hasTransform3d_bl = null;
            i.hasTransform2d_bl = null;
            i = null
        };
        i.init()
    };
    e.FWDSimpleDisplayObject = t
})(window);
(function (e) {
    var t = function (e, t, n) {
        var r = this;
        if (e == "div" || e == "img" || e == "canvas") {
            r.type = e
        } else {
            throw Error("Type is not valid! " + e)
        }
        this.style;
        this.screen;
        this.transform;
        this.transformOrigin;
        this.position = t || "absolute";
        this.overflow = n || "hidden";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.scale = 1;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDUtils.hasTransform2d;
        if (FWDUtils.isIE || FWDUtils.isFirefox) r.hasTransform3d_bl = false;
        this.hasBeenSetSelectable_bl = false;
        r.init = function () {
            r.setScreen()
        };
        r.getTransform = function () {
            var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
            var t;
            while (t = e.shift()) {
                if (typeof r.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return undefined
        };
        r.getTransformOrigin = function () {
            var e = ["transformOrigin", "msTransformOrigin", "WebkitTransformOrigin", "MozTransformOrigin", "OTransformOrigin"];
            var t;
            while (t = e.shift()) {
                if (typeof r.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return undefined
        };
        r.getOpacityType = function () {
            var e;
            if (typeof r.screen.style.opacity != "undefined") {
                e = "opacity"
            } else {
                e = "filter"
            }
            return e
        };
        r.setScreen = function (e) {
            if (r.type == "img" && e) {
                r.screen = e;
                r.setMainProperties()
            } else {
                r.screen = document.createElement(r.type);
                r.setMainProperties()
            }
        };
        r.setMainProperties = function () {
            r.transform = r.getTransform();
            r.transformOrigin = r.getTransformOrigin();
            r.setPosition(r.position);
            r.setOverflow(r.overflow);
            r.opacityType = r.getOpacityType();
            if (r.opacityType == "opacity") r.isHtml5_bl = true;
            if (r.opacityType == "filter") r.screen.style.filter = "inherit";
            r.screen.style.left = "0px";
            r.screen.style.top = "0px";
            r.screen.style.margin = "0px";
            r.screen.style.padding = "0px";
            r.screen.style.maxWidth = "none";
            r.screen.style.maxHeight = "none";
            r.screen.style.border = "none";
            r.screen.style.lineHeight = "1";
            r.screen.style.backgroundColor = "transparent";
            r.screen.style.backfaceVisibility = "hidden";
            r.screen.style.webkitBackfaceVisibility = "hidden";
            r.screen.style.MozBackfaceVisibility = "hidden";
            if (e == "img") {
                r.setWidth(r.screen.width);
                r.setHeight(r.screen.height);
                r.setSelectable(false)
            }
        };
        r.setSelectable = function (e) {
            if (!e) {
                r.screen.style.userSelect = "none";
                r.screen.style.MozUserSelect = "none";
                r.screen.style.webkitUserSelect = "none";
                r.screen.style.khtmlUserSelect = "none";
                r.screen.style.oUserSelect = "none";
                r.screen.style.msUserSelect = "none";
                r.screen.msUserSelect = "none";
                r.screen.ondragstart = function (e) {
                    return false
                };
                r.screen.onselectstart = function () {
                    return false
                };
                r.screen.ontouchstart = function (e) {
                    return false
                };
                r.screen.style.webkitTouchCallout = "none";
                r.hasBeenSetSelectable_bl = true
            }
        };
        r.setBackfaceVisibility = function () {
            r.screen.style.backfaceVisibility = "visible";
            r.screen.style.webkitBackfaceVisibility = "visible";
            r.screen.style.MozBackfaceVisibility = "visible"
        };
        r.removeBackfaceVisibility = function () {
            r.screen.style.backfaceVisibility = "hidden";
            r.screen.style.webkitBackfaceVisibility = "hidden";
            r.screen.style.MozBackfaceVisibility = "hidden"
        };
        r.getScreen = function () {
            return r.screen
        };
        r.setVisible = function (e) {
            r.visible = e;
            if (r.visible == true) {
                r.screen.style.visibility = "visible"
            } else {
                r.screen.style.visibility = "hidden"
            }
        };
        r.getVisible = function () {
            return r.visible
        };
        r.setResizableSizeAfterParent = function () {
            r.screen.style.width = "100%";
            r.screen.style.height = "100%"
        };
        r.getStyle = function () {
            return r.screen.style
        };
        r.setOverflow = function (e) {
            r.overflow = e;
            r.screen.style.overflow = r.overflow
        };
        r.setPosition = function (e) {
            r.position = e;
            r.screen.style.position = r.position
        };
        r.setDisplay = function (e) {
            r.display = e;
            r.screen.style.display = r.display
        };
        r.setButtonMode = function (e) {
            r.buttonMode = e;
            if (r.buttonMode == true) {
                r.screen.style.cursor = "pointer"
            } else {
                r.screen.style.cursor = "default"
            }
        };
        r.setBkColor = function (e) {
            r.screen.style.backgroundColor = e
        };
        r.setInnerHTML = function (e) {
            r.innerHTML = e;
            r.screen.innerHTML = r.innerHTML
        };
        r.getInnerHTML = function () {
            return r.innerHTML
        };
        r.getRect = function () {
            return r.screen.getBoundingClientRect()
        };
        r.setAlpha = function (e) {
            r.alpha = e;
            if (r.opacityType == "opacity") {
                r.screen.style.opacity = r.alpha
            } else if (r.opacityType == "filter") {
                r.screen.style.filter = "alpha(opacity=" + r.alpha * 100 + ")";
                r.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(r.alpha * 100) + ")"
            }
        };
        r.getAlpha = function () {
            return r.alpha
        };
        r.getRect = function () {
            return r.screen.getBoundingClientRect()
        };
        r.getGlobalX = function () {
            return r.getRect().left
        };
        r.getGlobalY = function () {
            return r.getRect().top
        };
        r.setX = function (e) {
            r.x = e;
            if (r.hasTransform3d_bl) {
                r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
            } else {
                r.screen.style.left = r.x + "px"
            }
        };
        r.getX = function () {
            return r.x
        };
        r.setY = function (e) {
            r.y = e;
            if (r.hasTransform3d_bl) {
                r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
            } else {
                r.screen.style.top = r.y + "px"
            }
        };
        r.getY = function () {
            return r.y
        };
        r.setWidth = function (e) {
            r.w = e;
            if (r.type == "img") {
                r.screen.width = r.w
            } else {
                r.screen.style.width = r.w + "px"
            }
        };
        r.getWidth = function () {
            if (r.type == "div") {
                if (r.screen.offsetWidth != 0) return r.screen.offsetWidth;
                return r.w
            } else if (r.type == "img") {
                if (r.screen.offsetWidth != 0) return r.screen.offsetWidth;
                if (r.screen.width != 0) return r.screen.width;
                return r._w
            } else if (r.type == "canvas") {
                if (r.screen.offsetWidth != 0) return r.screen.offsetWidth;
                return r.w
            }
        };
        r.setHeight = function (e) {
            r.h = e;
            if (r.type == "img") {
                r.screen.height = r.h
            } else {
                r.screen.style.height = r.h + "px"
            }
        };
        r.getHeight = function () {
            if (r.type == "div") {
                if (r.screen.offsetHeight != 0) return r.screen.offsetHeight;
                return r.h
            } else if (r.type == "img") {
                if (r.screen.offsetHeight != 0) return r.screen.offsetHeight;
                if (r.screen.height != 0) return r.screen.height;
                return r.h
            } else if (r.type == "canvas") {
                if (r.screen.offsetHeight != 0) return r.screen.offsetHeight;
                return r.h
            }
        };
        this.setScale = function (e) {
            r.scale = e;
            if (r.hasTransform2d_bl) {
                r.screen.style[r.transform] = "scale(" + r.scale + "," + r.scale + ")"
            } else {
                r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
            }
        };
        this.setTransformOrigin = function (e, t) {
            r.screen.style[r.transformOrigin] = e + "%" + " " + t + "%"
        };
        r.setPositionAndScale = function (e, t, n) {
            r.x = e;
            r.y = t;
            r.scale = n;
            r.screen.style[r.transform] = "translate3d(" + r.x + "px," + r.y + "px,0) scale(" + r.scale + "," + r.scale + ")"
        };
        r.disposeImage = function () {
            if (r.type == "img") r.screen.src = null
        };
        r.addChild = function (e) {
            if (r.contains(e)) {
                r.children_ar.splice(FWDUtils.indexOfArray(r.children_ar, e), 1);
                r.children_ar.push(e);
                r.screen.appendChild(e.screen)
            } else {
                r.children_ar.push(e);
                r.screen.appendChild(e.screen)
            }
        };
        r.destroy = function () {
            if (r.hasBeenSetSelectable_bl) {
                r.screen.ondragstart = null;
                r.screen.onselectstart = null;
                r.screen.ontouchstart = null
            }
            r.style = null;
            r.screen = null;
            r.transform = null;
            r.position = null;
            r.overflow = null;
            r.display = null;
            r.visible = null;
            r.buttonMode = null;
            r.x = null;
            r.y = null;
            r.w = null;
            r.h = null;
            r.rect = null;
            r.alpha = null;
            r.innerHTML = null;
            r.opacityType = null;
            r.isHtml5_bl = null;
            e = null;
            t = null;
            n = null;
            display = null;
            r.hasTransform3d_bl = null;
            r.hasTransform2d_bl = null;
            r = null
        };
        r.init()
    };
    e.FWDTransformDisplayObject = t
})(window);
(function (e) {
    function n() {
        var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
        var n;
        var r;
        while (n = e.shift()) {
            if (typeof t.dumy.style[n] !== "undefined") {
                t.dumy.style.position = "absolute";
                r = t.dumy.getBoundingClientRect().left;
                t.dumy.style[n] = "translate3d(500px, 0px, 0px)";
                r = Math.abs(t.dumy.getBoundingClientRect().left - r);
                if (r > 100 && r < 900) {
                    try {
                        document.documentElement.removeChild(t.dumy)
                    } catch (i) {}
                    return true
                }
            }
        }
        try {
            document.documentElement.removeChild(t.dumy)
        } catch (i) {}
        return false
    }

    function r() {
        var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
        var n;
        while (n = e.shift()) {
            if (typeof t.dumy.style[n] !== "undefined") {
                return true
            }
        }
        try {
            document.documentElement.removeChild(t.dumy)
        } catch (r) {}
        return false
    }
    var t = function () {};
    t.dumy = document.createElement("div");
    t.trim = function (e) {
        return e.replace(/\s/gi, "")
    };
    t.trimAndFormatUrl = function (e) {
        e = e.toLocaleLowerCase();
        e = e.replace(/ /g, "-");
        e = e.replace(/ä/g, "a");
        e = e.replace(/â/g, "a");
        e = e.replace(/â/g, "a");
        e = e.replace(/à/g, "a");
        e = e.replace(/è/g, "e");
        e = e.replace(/é/g, "e");
        e = e.replace(/ë/g, "e");
        e = e.replace(/ï/g, "i");
        e = e.replace(/î/g, "i");
        e = e.replace(/ù/g, "u");
        e = e.replace(/ô/g, "o");
        e = e.replace(/ù/g, "u");
        e = e.replace(/û/g, "u");
        e = e.replace(/ÿ/g, "y");
        e = e.replace(/ç/g, "c");
        e = e.replace(/œ/g, "ce");
        return e
    };
    t.splitAndTrim = function (e, n, r) {
        var i = e.split(",");
        var s = i.length;
        for (var o = 0; o < s; o++) {
            if (n) i[o] = t.trim(i[o]);
            if (r) i[o] = i[o].toLowerCase()
        }
        return i
    };
    t.indexOfArray = function (e, t) {
        var n = e.length;
        for (var r = 0; r < n; r++) {
            if (e[r] === t) return r
        }
        return -1
    };
    t.randomizeArray = function (e) {
        var t = [];
        var n = e.concat();
        var r = n.length;
        for (var i = 0; i < r; i++) {
            var s = Math.floor(Math.random() * n.length);
            t.push(n[s]);
            n.splice(s, 1)
        }
        return t
    };
    t.parent = function (e, t) {
        if (t === undefined) t = 1;
        while (t-- && e) e = e.parentNode;
        if (!e || e.nodeType !== 1) return null;
        return e
    };
    t.sibling = function (e, t) {
        while (e && t !== 0) {
            if (t > 0) {
                if (e.nextElementSibling) {
                    e = e.nextElementSibling
                } else {
                    for (var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
                }
                t--
            } else {
                if (e.previousElementSibling) {
                    e = e.previousElementSibling
                } else {
                    for (var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
                }
                t++
            }
        }
        return e
    };
    t.getChildAt = function (e, n) {
        var r = t.getChildren(e);
        if (n < 0) n += r.length;
        if (n < 0) return null;
        return r[n]
    };
    t.getChildById = function (e) {
        return document.getElementById(e) || undefined
    };
    t.getChildren = function (e, t) {
        var n = [];
        for (var r = e.firstChild; r != null; r = r.nextSibling) {
            if (t) {
                n.push(r)
            } else if (r.nodeType === 1) {
                n.push(r)
            }
        }
        return n
    };
    t.getChildrenFromAttribute = function (e, n, r) {
        var i = [];
        for (var s = e.firstChild; s != null; s = s.nextSibling) {
            if (r && t.hasAttribute(s, n)) {
                i.push(s)
            } else if (s.nodeType === 1 && t.hasAttribute(s, n)) {
                i.push(s)
            }
        }
        return i.length == 0 ? undefined : i
    };
    t.getChildFromNodeListFromAttribute = function (e, n, r) {
        for (var i = e.firstChild; i != null; i = i.nextSibling) {
            if (r && t.hasAttribute(i, n)) {
                return i
            } else if (i.nodeType === 1 && t.hasAttribute(i, n)) {
                return i
            }
        }
        return undefined
    };
    t.getAttributeValue = function (e, n) {
        if (!t.hasAttribute(e, n)) return undefined;
        return e.getAttribute(n)
    };
    t.hasAttribute = function (e, t) {
        if (e.hasAttribute) {
            return e.hasAttribute(t)
        } else {
            var n = e.attributes[t];
            return n ? true : false
        }
    };
    t.insertNodeAt = function (e, n, r) {
        var i = t.children(e);
        if (r < 0 || r > i.length) {
            throw new Error("invalid index!")
        } else {
            e.insertBefore(n, i[r])
        }
    };
    t.hasCanvas = function () {
        return Boolean(document.createElement("canvas"))
    };
    t.hitTest = function (e, t, n) {
        var r = false;
        if (!e) throw Error("Hit test target is null!");
        var i = e.getBoundingClientRect();
        if (t >= i.left && t <= i.left + (i.right - i.left) && n >= i.top && n <= i.top + (i.bottom - i.top)) return true;
        return false
    };
    t.getScrollOffsets = function () {
        if (e.pageXOffset != null) return {
            x: e.pageXOffset,
            y: e.pageYOffset
        };
        if (document.compatMode == "CSS1Compat") {
            return {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            }
        }
    };
    t.getViewportSize = function () {
        if (t.hasPointerEvent && navigator.msMaxTouchPoints > 1) {
            return {
                w: document.documentElement.clientWidth || e.innerWidth,
                h: document.documentElement.clientHeight || e.innerHeight
            }
        }
        if (t.isMobile) return {
            w: e.innerWidth,
            h: e.innerHeight
        };
        return {
            w: document.documentElement.clientWidth || e.innerWidth,
            h: document.documentElement.clientHeight || e.innerHeight
        }
    };
    t.getViewportMouseCoordinates = function (e) {
        var n = t.getScrollOffsets();
        if (e.touches) {
            return {
                screenX: e.touches[0] == undefined ? e.touches.pageX - n.x : e.touches[0].pageX - n.x,
                screenY: e.touches[0] == undefined ? e.touches.pageY - n.y : e.touches[0].pageY - n.y
            }
        }
        return {
            screenX: e.clientX == undefined ? e.pageX - n.x : e.clientX,
            screenY: e.clientY == undefined ? e.pageY - n.y : e.clientY
        }
    };
    t.hasPointerEvent = function () {
        return Boolean(e.navigator.msPointerEnabled)
    }();
    t.isMobile = function () {
        if (t.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
        var e = ["android", "webos", "iphone", "ipad", "blackberry"];
        for (i in e) {
            if (navigator.userAgent.toLowerCase().indexOf(e[i].toLowerCase()) != -1) {
                return true
            }
        }
        return false
    }();
    t.isAndroid = function () {
        return navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1
    }();
    t.isChrome = function () {
        return navigator.userAgent.toLowerCase().indexOf("chrome") != -1
    }();
    t.isSafari = function () {
        return navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
    }();
    t.isOpera = function () {
        return navigator.userAgent.toLowerCase().indexOf("opera") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
    }();
    t.isFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf("firefox") != -1
    }();
    t.isIE = function () {
        return navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    }();
    t.isIEAndLessThen9 = function () {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
    }();
    t.isApple = function () {
        return navigator.appVersion.toLowerCase().indexOf("mac") != -1;
    }();
    t.hasFullScreen = function () {
        return t.dumy.requestFullScreen || t.dumy.mozRequestFullScreen || t.dumy.webkitRequestFullScreen || t.dumy.msieRequestFullScreen
    }();
    t.checkIfHasTransofrms = function () {
        document.documentElement.appendChild(t.dumy);
        t.hasTransform3d = n();
        t.hasTransform2d = r();
        t.isReadyMethodCalled_bl = true
    };
    t.onReady = function (e) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.documentElement.appendChild(t.dumy);
                t.hasTransform3d = n();
                t.hasTransform2d = r();
                e()
            })
        } else {
            document.onreadystatechange = function () {
                document.documentElement.appendChild(t.dumy);
                t.hasTransform3d = n();
                t.hasTransform2d = r();
                if (document.readyState == "complete") e()
            }
        }
    };
    t.disableElementSelection = function (e) {
        try {
            e.style.userSelect = "none"
        } catch (e) {}
        try {
            e.style.MozUserSelect = "none"
        } catch (e) {}
        try {
            e.style.webkitUserSelect = "none"
        } catch (e) {}
        try {
            e.style.khtmlUserSelect = "none"
        } catch (e) {}
        try {
            e.style.oUserSelect = "none"
        } catch (e) {}
        try {
            e.style.msUserSelect = "none"
        } catch (e) {}
        try {
            e.msUserSelect = "none"
        } catch (e) {}
        e.onselectstart = function () {
            return false
        }
    };
    t.getUrlArgs = function (t) {
        var n = {};
        var r = t.substr(t.indexOf("?") + 1) || location.search.substring(1);
        var i = r.split("&");
        for (var s = 0; s < i.length; s++) {
            var o = i[s].indexOf("=");
            var u = i[s].substring(0, o);
            var a = i[s].substring(o + 1);
            a = decodeURIComponent(a);
            n[u] = a
        }
        return n
    };
    t.validateEmail = function (e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
            return true
        }
        return false
    };
    t.resizeDoWithLimit = function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
        var t = t - s;
        var n = n - o;
        var p = t / r;
        var d = n / i;
        var v = 0;
        if (p <= d) {
            v = p
        } else if (p >= d) {
            v = d
        }
        var m = Math.round(r * v);
        var g = Math.round(i * v);
        var y = Math.floor((t - r * v) / 2 + u);
        var b = Math.floor((n - i * v) / 2 + a);
        if (f) {
            TweenMax.to(e, l, {
                x: y,
                y: b,
                w: m,
                h: g,
                delay: c,
                ease: h
            })
        } else {
            e.x = y;
            e.y = b;
            e.w = m;
            e.h = g
        }
    };
    t.isReadyMethodCalled_bl = false;
    e.FWDUtils = t
})(window);
(function (e) {
    var t = function (n) {
        var r = this;
        r.init = function () {
            TweenLite.ticker.useRAF(false);
            r.props_obj = n;
            r.isFullScreen_bl = false;
            r.mustHaveHolderDiv_bl = false;
            r.displayType = n.displayType.toLowerCase();
            if (!r.displayType) r.displayType = t.FULL_SCREEN;
            if (r.displayType == t.RESPONSIVE) r.mustHaveHolderDiv_bl = true;
            r.body = document.getElementsByTagName("body")[0];
            if (!r.props_obj) {
                alert("FWDViewer constructor properties object is not defined!");
                return
            }
            if (!r.props_obj.divHolderId) {
                if (r.mustHaveHolderDiv_bl) {
                    alert("Property divHolderId is not defined in the FWDViewer constructor, self property represents the div id into which the grid is added as a child!");
                    return
                }
            }
            if (r.mustHaveHolderDiv_bl && !FWDUtils.getChildById(r.props_obj.divHolderId)) {
                alert("FWDViewer holder div is not found, please make sure that the div exsists and the id is correct! " + r.props_obj.divHolderId);
                return
            }
            if (r.displayType == t.FULL_SCREEN || r.displayType == t.LIGHTBOX) {
                if (FWDUtils.isIEAndLessThen9) {
                    r.stageContainer = r.body
                } else {
                    r.stageContainer = document.documentElement
                }
            } else {
                r.stageContainer = FWDUtils.getChildById(r.props_obj.divHolderId)
            }
            this.customContextMenu = null;
            this.info_do = null;
            this.main_do = null;
            this.preloader_do = null;
            this.navigator_do = null;
            this.controller_do = null;
            this.imageManager_do = null;
            this.descriptionWindow_do = null;
            this.hider = null;
            this.lightBox_do = null;
            this.rotateDumy_sdo = null;
            this.markersDumy_sdo = null;
            this.panDumy_sdo = null;
            this.backgroundColor_str = r.props_obj.backgroundColor || "transparent";
            this.lightBoxBackgroundColor_str = r.props_obj.lightBoxBackgroundColor || "transparent";
            this.viewportWidth = 0;
            this.viewportHeight = 0;
            this.stageWidth = 0;
            this.stageHeight = 0;
            this.pageXOffset = e.pageXOffset;
            this.pageYOffset = e.pageYOffset;
            this.lastScrollY;
            this.lastScrollX;
            this.lightBoxBackgroundOpacity = r.props_obj.lightBoxBackgroundOpacity || 1;
            this.lightBoxWidth = r.props_obj.lightBoxWidth || 500;
            this.lightBoxHeight = r.props_obj.lightBoxHeight || 400;
            this.finalLightBoxWidth;
            this.finalLightBoxHeight;
            this.resizeHandlerId_to;
            this.resizeHandler2Id_to;
            this.lighboxAnimDoneId_to;
            this.startHiderWithDelayId_to;
            this.initPluginId_to;
            this.activateWithDelayImagemanagerId_to;
            this.isMobile_bl = FWDUtils.isMobile;
            this.hibernate_bl = false;
            this.safeToControll_bl = false;
            if (!FWDUtils.isReadyMethodCalled_bl) FWDUtils.checkIfHasTransofrms();
            if (r.displayType == t.LIGHTBOX) {
                this.initPluginId_to = setTimeout(function () {
                    r.setupLightBox()
                }, 50)
            } else {
                this.initPluginId_to = setTimeout(function () {
                    r.setupViewer()
                }, 50)
            }
        };
        r.setupViewer = function () {
            r.setupMainDo();
            r.startResizeHandler();
            r.setupInfo();
            r.setupData();
            if (FWDUtils.hasPointerEvent && FWDUtils.isMobile) e.addEventListener("contextmenu", r.preventContextMenu)
        };
        r.setupMainDo = function () {
            r.main_do = new FWDDisplayObject("div", "relative");
            r.main_do.getStyle().msTouchAction = "none";
            r.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
            r.main_do.setBackfaceVisibility();
            r.main_do.setBkColor(r.backgroundColor_str);
            if (!FWDUtils.isMobile || FWDUtils.isMobile && FWDUtils.hasPointerEvent) r.main_do.setSelectable(false);
            if (r.displayType == t.FULL_SCREEN) {
                r.stageContainer.style.overflow = "hidden";
                r.main_do.getStyle().position = "absolute";
                document.documentElement.style.overflow = "hidden";
                r.stageContainer.appendChild(r.main_do.screen)
            } else if (r.displayType == t.LIGHTBOX) {
                r.main_do.getStyle().position = "absolute";
                r.stageContainer.appendChild(r.main_do.screen)
            } else {
                r.stageContainer.appendChild(r.main_do.screen)
            }
        };
        r.preventContextMenu = function (e) {
            e.preventDefault()
        };
        r.setupInfo = function () {
            FWDInfo.setPrototype();
            r.info_do = new FWDInfo
        };
        r.startResizeHandler = function () {
            if (e.addEventListener) {
                e.addEventListener("resize", r.onResizeHandler);
                e.addEventListener("scroll", r.onScrollHandler)
            } else if (e.attachEvent) {
                e.attachEvent("onresize", r.onResizeHandler);
                e.attachEvent("onscroll", r.onScrollHandler)
            }
            r.onResizeHandler(true);
            r.resizeHandlerId_to = setTimeout(function () {
                r.resizeHandler(true)
            }, 500)
        };
        r.stopResizeHandler = function () {
            if (e.removeEventListener) {
                e.removeEventListener("resize", r.onResizeHandler);
                e.removeEventListener("scroll", r.onScrollHandler)
            } else if (e.detachEvent) {
                e.detachEvent("onresize", r.onResizeHandler);
                e.detachEvent("onscroll", r.onScrollHandler)
            }
            clearTimeout(r.resizeHandlerId_to)
        };
        r.onResizeHandler = function (e) {
            r.resizeHandler()
        };
        r.onScrollHandler = function (e) {
            if (r.hibernate_bl) return;
            if (r.isFullScreen_bl || r.displayType == t.FULL_SCREEN || r.displayType == t.LIGHTBOX) {
                r.scrollHandler()
            }
        };
        r.scrollHandler = function () {
            var e = FWDUtils.getScrollOffsets();
            r.pageXOffset = e.x;
            r.pageYOffset = e.y;
            if (r.displayType == t.LIGHTBOX) {
                r.lightBox_do.setX(e.x);
                r.lightBox_do.setY(e.y)
            } else if (r.isFullScreen_bl || r.displayType == t.FULL_SCREEN) {
                r.main_do.setX(e.x);
                r.main_do.setY(e.y)
            }
        };
        r.resizeHandler = function (e) {
            if (r.hibernate_bl) return;
            var n = FWDUtils.getScrollOffsets();
            var i = FWDUtils.getViewportSize();
            if (r.viewportWidth == i.w && r.viewportHeight == i.h && r.pageXOffset == n.x && r.pageYOffset == n.y && !e) return;
            r.viewportWidth = i.w;
            r.viewportHeight = i.h;
            r.pageXOffset = n.x;
            r.pageYOffset = n.y;
            if (r.displayType == t.LIGHTBOX && !r.isFullScreen_bl) {
                if (r.lightBoxWidth > i.w) {
                    r.finalLightBoxWidth = i.w;
                    r.finalLightBoxHeight = parseInt(r.lightBoxHeight * (i.w / r.lightBoxWidth))
                } else {
                    r.finalLightBoxWidth = r.lightBoxWidth;
                    r.finalLightBoxHeight = r.lightBoxHeight
                }
                r.lightBox_do.setWidth(i.w);
                r.lightBox_do.setHeight(i.h);
                r.lightBox_do.setX(n.x);
                r.lightBox_do.setY(n.y);
                r.lightBox_do.mainLightBox_do.setX(parseInt((i.w - r.finalLightBoxWidth) / 2));
                r.lightBox_do.mainLightBox_do.setY(parseInt((i.h - r.finalLightBoxHeight) / 2));
                if (r.lightBox_do.closeButton_do && !r.lightBox_do.closeButtonIsTweening_bl) {
                    var s = parseInt((i.w + r.finalLightBoxWidth) / 2 - r.lightBox_do.closeButton_do.totalWidth / 2);
                    var o = parseInt((i.h - r.finalLightBoxHeight) / 2 - r.lightBox_do.closeButton_do.totalHeight / 2);
                    if (s + r.lightBox_do.closeButton_do.totalWidth > r.viewportWidth) {
                        s = r.viewportWidth - r.lightBox_do.closeButton_do.totalWidth
                    }
                    if (o < 0) {
                        o = 0
                    }
                    r.lightBox_do.closeButton_do.setX(s);
                    r.lightBox_do.closeButton_do.setY(o)
                }
                r.main_do.setX(0);
                r.main_do.setY(0);
                r.lightBox_do.mainLightBox_do.setWidth(r.finalLightBoxWidth);
                r.lightBox_do.mainLightBox_do.setHeight(r.finalLightBoxHeight);
                r.stageWidth = r.finalLightBoxWidth;
                r.stageHeight = r.finalLightBoxHeight
            } else if (r.isFullScreen_bl || r.displayType == t.FULL_SCREEN) {
                r.main_do.setX(n.x);
                r.main_do.setY(n.y);
                r.stageWidth = i.w;
                r.stageHeight = i.h
            } else {
                r.main_do.setX(0);
                r.main_do.setY(0);
                r.stageWidth = r.stageContainer.offsetWidth;
                r.stageHeight = r.stageContainer.offsetHeight
            }
            r.main_do.setWidth(r.stageWidth);
            r.main_do.setHeight(r.stageHeight);
            if (r.preloader_do) r.preloader_do.positionAndResize();
            if (r.controller_do) r.controller_do.resizeAndPosition();
            if (r.imageManager_do) r.imageManager_do.resizeAndPosition(false);
            if (r.navigator_do) r.navigator_do.resizeAndPosition();
            if (r.descriptionWindow_do && r.descriptionWindow_do.isShowed_bl) r.descriptionWindow_do.resizeAndPosition()
        };
        r.setupLightBox = function () {
            FWDLightBox.setPrototype();
            r.lightBox_do = new FWDLightBox(r, r.lightBoxBackgroundColor_str, r.backgroundColor_str, r.lightBoxBackgroundOpacity, r.lightBoxWidth, r.lightBoxHeight);
            r.lightBox_do.addListener(FWDLightBox.CLOSE, r.lightBoxCloseHandler);
            r.lightBox_do.addListener(FWDLightBox.HIDE_COMPLETE, r.lightBoxHideCompleteHandler);
            r.lighboxAnimDoneId_to = setTimeout(r.setupViewer, 1200)
        };
        r.lightBoxCloseHandler = function () {
            r.stopResizeHandler();
            if (r.data) r.data.stopToLoad()
        };
        r.lightBoxHideCompleteHandler = function () {
            if (r.dispatchEvent) r.dispatchEvent(t.CLOSE_LIGHTBOX);
            r.destroy()
        };
        r.setupContextMenu = function () {
            FWDContextMenu.setPrototype();
            r.customContextMenu = new FWDContextMenu(r, r.data);
            r.customContextMenu.addListener(FWDController.ROTATE, r.contextMenuRotateHandler);
            r.customContextMenu.addListener(FWDController.PAN, r.contextMenuPanHandler);
            r.customContextMenu.addListener(FWDController.GOTO_NEXT_IMAGE, r.contextMenuGoToNextImageHandler);
            r.customContextMenu.addListener(FWDController.GOTO_PREV_IMAGE, r.contextMenuGoToPrevImageHandler);
            r.customContextMenu.addListener(FWDController.ZOOM_IN, r.contextMenuZoomInHandler);
            r.customContextMenu.addListener(FWDController.ZOOM_OUT, r.contextMenuZoomOutHandler);
            r.customContextMenu.addListener(FWDController.START_SLIDE_SHOW, r.contextMenuStartSlideShowHandler);
            r.customContextMenu.addListener(FWDController.STOP_SLIDE_SHOW, r.contextMenuStopSlideShowHandler);
            r.customContextMenu.addListener(FWDController.SHOW_INFO, r.contextMenuShowInfoWindow);
            r.customContextMenu.addListener(FWDController.GO_FULL_SCREEN, r.controllerGoFullScreen);
            r.customContextMenu.addListener(FWDController.GO_NORMAL_SCREEN, r.controllerGoNormalSreen)
        };
        r.contextMenuRotateHandler = function (e) {
            r.controller_do.rotateButtonOnMouseDownHandler(e)
        };
        r.contextMenuPanHandler = function (e) {
            r.controller_do.panButtonOnMouseDownHandler(e.e)
        };
        r.contextMenuGoToNextImageHandler = function (e) {
            r.controller_do.nextButtonStartHandler(e)
        };
        r.contextMenuGoToPrevImageHandler = function (e) {
            r.controller_do.prevButtonStartHandler(e)
        };
        r.contextMenuZoomInHandler = function (e) {
            r.controller_do.zoomInStartHandler(e)
        };
        r.contextMenuZoomOutHandler = function (e) {
            r.controller_do.zoomOutStartHandler(e)
        };
        r.contextMenuStartSlideShowHandler = function (e) {
            r.controller_do.startSlideshow(e)
        };
        r.contextMenuShowInfoWindow = function (e) {
            r.main_do.addChild(r.descriptionWindow_do);
            r.descriptionWindow_do.hide(false, true);
            r.descriptionWindow_do.show(r.data.infoText_str)
        };
        r.contextMenuStopSlideShowHandler = function (e) {
            r.controller_do.stopSlideShow(e)
        };
        r.setupData = function () {
            FWDData.setPrototype();
            r.data = new FWDData(r.props_obj);
            r.data.addListener(FWDData.LIGHBOX_CLOSE_BUTTON_LOADED, r.onLightboxCloseButtonLoadComplete);
            r.data.addListener(FWDData.PRELOADER_LOAD_DONE, r.onPreloaderLoadDone);
            r.data.addListener(FWDData.FIRST_IMAGE_LOAD_COMPLETE, r.firstImageLoadComplete);
            r.data.addListener(FWDData.LOAD_ERROR, r.dataLoadError);
            r.data.addListener(FWDData.SKIN_PROGRESS, r.dataSkinProgressHandler);
            r.data.addListener(FWDData.IMAGES_PROGRESS, r.dataImagesProgressHandler);
            r.data.addListener(FWDData.LOAD_DONE, r.dataLoadComplete);
            r.data.addListener(FWDData.IMAGE_LOADED, r.onImageLoad);
            r.data.addListener(FWDData.IMAGES_LOAD_COMPLETE, r.dataImagesLoadComplete)
        };
        r.onLightboxCloseButtonLoadComplete = function () {
            if (r.displayType == t.LIGHTBOX) r.lightBox_do.setupCloseButton(r.data.mainLightboxCloseButtonN_img, r.data.mainLightboxCloseButtonS_img)
        };
        r.firstImageLoadComplete = function () {
            if (r.data.showNavigator_bl) r.setupNavigator();
            r.imageManager_do.setAlpha(0);
            TweenMax.to(r.imageManager_do, .6, {
                alpha: 1
            });
            r.main_do.addChild(r.preloader_do)
        };
        r.onPreloaderLoadDone = function () {
            r.setupPreloader()
        };
        r.onImageLoad = function (e) {
            r.imageManager_do.showLoadedImage(e.id)
        };
        r.dataLoadError = function (e, t) {
            r.main_do.addChild(r.info_do);
            r.info_do.showText(e.text)
        };
        r.dataSkinProgressHandler = function (e) {
            r.preloader_do.update(e.percent, "Loading skin:" + Math.round(e.percent * 100) + "%")
        };
        r.dataImagesProgressHandler = function (e) {
            r.preloader_do.update(e.percent, r.data.preloaderText_str + Math.round(e.percent * 100) + "%")
        };
        r.dataLoadComplete = function (e) {
            r.setupImageManager();
            r.setupDisableMarkersDumy();
            r.setupController();
            r.main_do.addChild(r.preloader_do);
            if (!r.isMobile_bl) r.setupContextMenu()
        };
        r.dataImagesLoadComplete = function () {
            r.preloader_do.hide(true);
            r.activateWithDelayImagemanagerId_to = setTimeout(function () {
                r.imageManager_do.activate()
            }, 41);
            if (r.data.hideController_bl) {
                r.setupHider();
                r.controller_do.setupHider(r.hider);
                r.imageManager_do.setupHider(r.hider);
                if (r.navigator_do) r.navigator_do.setupHider(r.hider);
                r.startHiderWithDelayId_to = setTimeout(function () {
                    r.hider.start()
                }, r.data.hideControllerDelay)
            }
            if (r.customContextMenu) r.customContextMenu.isActive_bl = true;
            if (r.navigator_do) r.navigator_do.activate();
            r.setupDescriptionWindow();
            r.setupRotationDumy();
            r.setupPanDumy();
            if (r.data.slideShowAutoPlay_bl) r.controller_do.startSlideshow();
            if (r.dispatchEvent) r.dispatchEvent(t.All_IMAGES_LOADED);
            r.safeToControll_bl = true
        };
        r.setupPreloader = function () {
            FWDPreloader.setPrototype();
            r.preloader_do = new FWDPreloader(r, r.data.mainPreloader_img, 40, 43, 60, r.data.preloaderFontColor_str, r.data.preloaderBackgroundColor_str);
            r.preloader_do.addListener(FWDPreloader.HIDE_COMPLETE, r.onPreloaderHideCompleteHandler);
            r.preloader_do.positionAndResize();
            r.preloader_do.hide(false);
            r.preloader_do.show(true);
            r.main_do.addChild(r.preloader_do)
        };
        r.onPreloaderHideCompleteHandler = function () {
            r.main_do.removeChild(r.preloader_do);
            r.preloader_do.destroy();
            r.preloader_do = null
        };
        r.setupHider = function () {
            FWDHider.setPrototype();
            r.hider = new FWDHider(r.data.isMobile_bl, r.main_do, r.data.hideControllerDelay)
        };
        r.setupController = function () {
            FWDController.setPrototype();
            r.controller_do = new FWDController(r.data, r);
            r.controller_do.addListener(FWDController.MOUSE_DOWN, r.controllerOnMouseDownHandler);
            r.controller_do.addListener(FWDController.CHANGE_NAVIGATION_STYLE, r.setImageViewerNavigationStyleHandler);
            r.controller_do.addListener(FWDController.GOTO_NEXT_OR_PREV_IMAGE, r.gotoNextImageHandler);
            r.controller_do.addListener(FWDController.GOTO_NEXT_OR_PREV_IMAGE_COMPLETE, r.gotoNextImageCompleteHandler);
            r.controller_do.addListener(FWDController.DISABLE_PAN_OR_MOVE, r.disablePanOrMoveHandler);
            r.controller_do.addListener(FWDController.ENABLE_PAN_OR_MOVE, r.enablePanOrMoveHandler);
            r.controller_do.addListener(FWDController.SCROLL_BAR_UPDATE, r.controllerScrollBarUpdateHandler);
            r.controller_do.addListener(FWDController.ZOOM_WITH_BUTTONS, r.controllerZoomHandler);
            r.controller_do.addListener(FWDController.START_SLIDE_SHOW, r.controllerStartSlideshowHandler);
            r.controller_do.addListener(FWDController.STOP_SLIDE_SHOW, r.controllerStopSlideshowHandler);
            r.controller_do.addListener(FWDController.SHOW_INFO, r.controllerShowInfoHandler);
            r.controller_do.addListener(FWDController.GO_FULL_SCREEN, r.controllerGoFullScreen);
            r.controller_do.addListener(FWDController.GO_NORMAL_SCREEN, r.controllerGoNormalSreen);
            if (r.controller_do) r.controller_do.resizeAndPosition();
            r.main_do.addChild(r.controller_do)
        };
        r.controllerOnMouseDownHandler = function () {
            r.imageManager_do.hideToolTipWindow()
        };
        r.setImageViewerNavigationStyleHandler = function (e) {
            r.imageManager_do.setDraggingMode(e.draggingMode);
            if (r.customContextMenu) {
                if (e.draggingMode == FWDController.ROTATE) {
                    r.customContextMenu.enablePanButton()
                } else if (e.draggingMode == FWDController.PAN) {
                    r.customContextMenu.enableRotateButton()
                }
            }
        };
        r.gotoNextImageHandler = function (e) {
            if (!r.data.areAllImagesLoaded_bl) return;
            r.imageManager_do.curId += e.dir;
            r.imageManager_do.gotoImage()
        };
        r.gotoNextImageCompleteHandler = function (e) {
            if (!r.data.areAllImagesLoaded_bl) return;
            r.imageManager_do.addLargeImage()
        };
        r.disablePanOrMoveHandler = function () {
            r.imageManager_do.disableOrEnablePanOrTouch(true);
            r.showMarkersDumy()
        };
        r.enablePanOrMoveHandler = function () {
            r.imageManager_do.disableOrEnablePanOrTouch(false);
            r.hideMarkersDumy()
        };
        r.controllerScrollBarUpdateHandler = function (e) {
            r.imageManager_do.zoomInOrOutWithScrollBar(e.percent)
        };
        r.controllerZoomHandler = function (e) {
            r.imageManager_do.zoomInOrOutWithButtons(e.dir, e.withPause)
        };
        r.controllerStartSlideshowHandler = function (e) {
            if (r.customContextMenu) r.customContextMenu.updateSlideShowButton(1)
        };
        r.controllerStopSlideshowHandler = function (e) {
            if (r.customContextMenu) r.customContextMenu.updateSlideShowButton(0)
        };
        r.controllerShowInfoHandler = function () {
            if (r.main_do.contains(r.descriptionWindow_do)) return;
            r.main_do.addChild(r.descriptionWindow_do);
            r.descriptionWindow_do.hide(false, true);
            r.descriptionWindow_do.show(r.data.infoText_str)
        };
        r.controllerGoFullScreen = function () {
            if (r.isFullScreen_bl) return;
            r.goFullScreen();
            r.imageManager_do.centerImage();
            r.controller_do.setFullScreenButtonState(0);
            if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(1);
            if (document.addEventListener) {
                document.addEventListener("fullscreenchange", r.onFullScreenChange);
                document.addEventListener("mozfullscreenchange", r.onFullScreenChange);
                document.addEventListener("webkitfullscreenchange", r.onFullScreenChange)
            }
        };
        r.controllerGoNormalSreen = function () {
            if (!r.isFullScreen_bl) return;
            r.goNormalScreen();
            r.imageManager_do.centerImage();
            r.controller_do.setFullScreenButtonState(1);
            if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(0);
            if (document.removeEventListener) {
                document.removeEventListener("fullscreenchange", r.onFullScreenChange);
                document.removeEventListener("mozfullscreenchange", r.onFullScreenChange);
                document.removeEventListener("webkitfullscreenchange", r.onFullScreenChange)
            }
        };
        this.onFullScreenChange = function (e) {
            if (!(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen)) {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str);
                r.controller_do.setFullScreenButtonState(1);
                if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(0);
                r.isFullScreen_bl = false
            }
        };
        this.onFullScreenChange = function (e) {
            if (!(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen)) {
                if (r.showButtonsLabels_bl) r.fullscreenToolTip_do.setLabel(r.fullscreenToolTip_do.toolTipLabel2_str);
                r.controller_do.setFullScreenButtonState(1);
                if (r.customContextMenu) r.customContextMenu.updateFullScreenButton(0);
                r.controllerGoNormalSreen();
                if (document.removeEventListener) {
                    document.removeEventListener("fullscreenchange", r.onFullScreenChange);
                    document.removeEventListener("mozfullscreenchange", r.onFullScreenChange);
                    document.removeEventListener("webkitfullscreenchange", r.onFullScreenChange)
                }
                r.isFullScreen_bl = false
            }
        };
        r.setupImageManager = function (e) {
            FWDImageManager.setPrototype();
            r.imageManager_do = new FWDImageManager(r.data, r);
            r.imageManager_do.addListener(FWDImageManager.LARGE_IMAGE_LOAD_ERROR, r.imageManagerLoadError);
            r.imageManager_do.addListener(FWDImageManager.SCROLL_BAR_UPDATE, r.imageManagerScrollBarUpdate);
            r.imageManager_do.addListener(FWDImageManager.PAN_START, r.imageManagerPanStartHandler);
            r.imageManager_do.addListener(FWDImageManager.ROTATE_START, r.imageManagerRotateStartHandler);
            r.imageManager_do.addListener(FWDImageManager.ROTATE_UPDATE, r.imageManagerRotateUpdateHandler);
            r.imageManager_do.addListener(FWDImageManager.SHOW_NAVIGATOR, r.imageManagerShowNavigatorHandler);
            r.imageManager_do.addListener(FWDImageManager.HIDE_NAVIGATOR, r.imageManagerHideNavigatorHandler);
            r.imageManager_do.addListener(FWDImageManager.UPDATE_NAVIGATOR, r.imageManagerUpdateNavigatorHandler);
            r.imageManager_do.addListener(FWDImageManager.SHOW_INFO, r.imageManagerShowInfoHandler);
            r.main_do.addChild(r.imageManager_do)
        };
        r.imageManagerLoadError = function (e) {
            r.main_do.addChild(r.info_do);
            r.info_do.showText(e.error)
        };
        r.imageManagerScrollBarUpdate = function (e) {
            r.controller_do.updateScrollBar(e.percent, e.animate)
        };
        r.imageManagerPanStartHandler = function (e) {
            r.controller_do.stopSlideShow()
        };
        r.imageManagerRotateStartHandler = function (e) {
            r.controller_do.stopSlideShow()
        };
        r.imageManagerRotateUpdateHandler = function (e) {
            if (r.navigator_do) r.navigator_do.updateImage(e.id);
            if (r.main_do.contains(r.info_do)) r.main_do.removeChild(r.info_do)
        };
        r.imageManagerShowNavigatorHandler = function () {
            r.navigator_do.show(true)
        };
        r.imageManagerHideNavigatorHandler = function () {
            r.navigator_do.hide(true)
        };
        r.imageManagerUpdateNavigatorHandler = function (e) {
            r.navigator_do.update(e.percentX, e.percentY, e.percentWidth, e.percentHeight, e.animate)
        };
        r.imageManagerShowInfoHandler = function (e) {
            r.main_do.addChild(r.descriptionWindow_do);
            r.descriptionWindow_do.hide(false, true);
            r.descriptionWindow_do.show(e.text)
        };
        r.setupNavigator = function () {
            FWDNavigator.setPrototype();
            r.navigator_do = new FWDNavigator(r, r.data);
            r.navigator_do.addListener(FWDNavigator.MOUSE_DOWN, r.navigatorOnMouseDownHandler);
            r.navigator_do.addListener(FWDNavigator.PAN_START, r.navigatorPanStartHandler);
            r.navigator_do.addListener(FWDNavigator.PAN, r.navigatorPanHandler);
            r.main_do.addChild(r.navigator_do)
        };
        r.navigatorOnMouseDownHandler = function () {
            r.imageManager_do.hideToolTipWindow()
        };
        r.navigatorPanStartHandler = function (e) {
            r.controller_do.stopSlideShow()
        };
        r.navigatorPanHandler = function (e) {
            r.imageManager_do.updateOnNavigatorPan(e.percentX, e.percentY)
        };
        r.setupDescriptionWindow = function () {
            FWDDescriptionWindow.setPrototype();
            r.descriptionWindow_do = new FWDDescriptionWindow(r, r.data);
            r.descriptionWindow_do.addListener(FWDDescriptionWindow.SHOW_START, r.descWindowShowStartHandler);
            r.descriptionWindow_do.addListener(FWDDescriptionWindow.HIDE_COMPLETE, r.descWindowHideComplteHandler)
        };
        r.descWindowShowStartHandler = function () {
            if (r.customContextMenu) r.customContextMenu.disable()
        };
        r.descWindowHideComplteHandler = function () {
            if (r.customContextMenu) r.customContextMenu.enable();
            r.main_do.removeChild(r.descriptionWindow_do)
        };
        this.setupRotationDumy = function () {
            r.rotateDumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) r.rotateDumy_sdo.getStyle().background = "url('dumy')";
            r.rotateDumy_sdo.getStyle().cursor = "url(" + r.data.handGrabRotatePath_str + "), default";
            r.main_do.addChild(r.rotateDumy_sdo)
        };
        this.showRotateDumy = function () {
            r.rotateDumy_sdo.setWidth(r.stageWidth);
            r.rotateDumy_sdo.setHeight(r.stageHeight)
        };
        this.hideRotateDumy = function () {
            r.rotateDumy_sdo.setWidth(0);
            r.rotateDumy_sdo.setHeight(0)
        };
        this.setupPanDumy = function () {
            r.panDumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) r.panDumy_sdo.getStyle().background = "url('dumy')";
            r.panDumy_sdo.getStyle().cursor = "url(" + r.data.handGrabPath_str + "), default";
            r.main_do.addChild(r.panDumy_sdo)
        };
        this.showPanDumy = function () {
            r.panDumy_sdo.setWidth(r.stageWidth);
            r.panDumy_sdo.setHeight(r.stageHeight)
        };
        this.hidePanDumy = function () {
            r.panDumy_sdo.setWidth(0);
            r.panDumy_sdo.setHeight(0)
        };
        this.setupDisableMarkersDumy = function () {
            r.markersDumy_sdo = new FWDSimpleDisplayObject("div");
            if (FWDUtils.isIE) r.markersDumy_sdo.getStyle().background = "url('dumy')";
            r.main_do.addChild(r.markersDumy_sdo)
        };
        this.showMarkersDumy = function () {
            r.markersDumy_sdo.setWidth(r.stageWidth);
            r.markersDumy_sdo.setHeight(r.stageHeight)
        };
        this.hideMarkersDumy = function () {
            r.markersDumy_sdo.setWidth(0);
            r.markersDumy_sdo.setHeight(0)
        };
        r.goFullScreen = function () {
            var e = FWDUtils.getScrollOffsets();
            r.lastScrollX = e.x;
            r.lastScrollY = e.y;
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen()
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen()
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen()
            } else if (document.documentElement.msieRequestFullScreen) {
                document.documentElement.msieRequestFullScreen()
            }
            r.main_do.getStyle().position = "absolute";
            r.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            if (FWDUtils.isIEAndLessThen9) {
                r.body.appendChild(r.main_do.screen)
            } else {
                document.documentElement.appendChild(r.main_do.screen)
            }
            r.main_do.getStyle().zIndex = 100000001;
            r.isFullScreen_bl = true;
            r.resizeHandler(true)
        };
        r.goNormalScreen = function () {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.msieCancelFullScreen) {
                document.msieCancelFullScreen()
            }
            r.addMainDoToTheOriginalParent();
            r.isFullScreen_bl = false;
            r.resizeHandler(true)
        };
        r.addMainDoToTheOriginalParent = function () {
            if (r.displayType != t.FULL_SCREEN) {
                if (FWDUtils.isIEAndLessThen9) {
                    document.documentElement.style.overflow = "auto";
                    this.body.style.overflow = "auto";
                    this.body.style.visibility = "visible"
                } else {
                    document.documentElement.style.overflow = "visible";
                    r.body.style.overflow = "visible";
                    r.body.style.display = "inline"
                }
            }
            if (r.displayType == t.FULL_SCREEN) {
                if (FWDUtils.isIEAndLessThen9) {
                    r.body.appendChild(r.main_do.screen)
                } else {
                    document.documentElement.appendChild(r.main_do.screen)
                }
            } else if (r.displayType == t.LIGHTBOX) {
                r.stageContainer.appendChild(r.main_do.screen)
            } else {
                r.main_do.getStyle().position = "relative";
                r.stageContainer.appendChild(r.main_do.screen)
            }
            r.main_do.getStyle().zIndex = 0;
            e.scrollTo(r.lastScrollX, r.lastScrollY)
        };
        this.pan = function () {
            if (r.safeToControll_bl) r.controller_do.pan()
        };
        this.rotate = function () {
            if (r.safeToControll_bl) r.controller_do.rotate()
        };
        this.rotateLeft = function () {
            if (r.safeToControll_bl) r.controller_do.prevButtonStartHandler()
        };
        this.rotateRight = function () {
            if (r.safeToControll_bl) r.controller_do.nextButtonStartHandler()
        };
        this.zoomOut = function () {
            if (r.safeToControll_bl) r.controller_do.zoomOutStartHandler()
        };
        this.zoomIn = function () {
            if (r.safeToControll_bl) r.controller_do.zoomInStartHandler()
        };
        this.play = function () {
            if (r.safeToControll_bl) r.controller_do.startSlideshow()
        };
        this.pause = function () {
            if (r.safeToControll_bl) r.controller_do.stopSlideShow()
        };
        this.info = function () {
            if (r.safeToControll_bl) r.controller_do.infoButtonStartHandler()
        };
        this.fullScreen = function () {
            if (r.safeToControll_bl) r.controllerGoFullScreen()
        };
        this.normalScreen = function () {
            if (r.safeToControll_bl) r.controllerGoNormalSreen()
        };
        r.cleanMainEvents = function () {
            if (e.removeEventListener) {
                e.removeEventListener("resize", r.onResizeHandler);
                e.removeEventListener("scroll", r.onScrollHandler);
                document.removeEventListener("fullscreenchange", r.onFullScreenChange);
                document.removeEventListener("mozfullscreenchange", r.onFullScreenChange);
                document.removeEventListener("webkitfullscreenchange", r.onFullScreenChange)
            } else if (e.detachEvent) {
                e.detachEvent("onresize", r.onResizeHandler);
                e.detachEvent("onscroll", r.onScrollHandler)
            }
            if (r.isMobile_bl) {
                e.removeEventListener("contextmenu", r.preventContextMenu)
            }
            clearTimeout(r.resizeHandlerId_to);
            clearTimeout(r.resizeHandler2Id_to);
            clearTimeout(r.lighboxAnimDoneId_to);
            clearTimeout(r.startHiderWithDelayId_to);
            clearTimeout(r.initPluginId_to);
            clearTimeout(r.activateWithDelayImagemanagerId_to)
        };
        r.destroy = function () {
            r.cleanMainEvents();
            if (r.data) r.data.destroy();
            if (r.lightBox_do) r.lightBox_do.destroy();
            if (r.preloader_do) r.preloader_do.destroy();
            if (r.customContextMenu) r.customContextMenu.destroy();
            if (r.info_do) r.info_do.destroy();
            if (r.imageManager_do) {
                TweenMax.killTweensOf(r.imageManager_do);
                r.imageManager_do.destroy()
            }
            if (r.controller_do) r.controller_do.destroy();
            if (r.navigator_do) r.navigator_do.destroy();
            if (r.hider) r.hider.destroy();
            if (r.descriptionWindow_do) r.descriptionWindow_do.destroy();
            if (r.rotateDumy_sdo) r.rotateDumy_sdo.destroy();
            if (r.markersDumy_sdo) r.markersDumy_sdo.destroy();
            if (r.panDumy_sdo) r.panDumy_sdo.destroy();
            try {
                r.main_do.screen.parentNode.removeChild(r.main_do.screen)
            } catch (e) {}
            if (r.main_do) {
                r.main_do.setInnerHTML("");
                r.main_do.destroy()
            }
            r.data = null;
            r.lightBox_do = null;
            r.customContextMenu = null;
            r.preloader_do = null;
            r.hider = null;
            r.info_do = null;
            r.main_do = null;
            r.imageManager_do = null;
            r.navigator_do = null;
            r.rotateDumy_sdo = null;
            r.markersDumy_sdo = null;
            r.panDumy_sdo = null;
            r = null
        };
        r.init()
    };
    t.setPrototype = function () {
        t.prototype = new FWDEventDispatcher
    };
    t.CLOSE_LIGHTBOX = "closeLightBox";
    t.FULL_SCREEN = "fullscreen";
    t.LIGHTBOX = "lightbox";
    t.RESPONSIVE = "responsive";
    t.All_IMAGES_LOADED = "allImagesLoaded";
    e.FWDViewer = t
})(window)