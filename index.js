(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "index_atlas_",
      frames: [
        [1892, 690, 48, 68],
        [0, 1000, 552, 100],
        [0, 1102, 552, 100],
        [802, 967, 530, 153],
        [0, 872, 800, 126],
        [802, 613, 800, 352],
        [1413, 0, 630, 550],
        [802, 0, 609, 611],
        [1824, 690, 66, 70],
        [1604, 552, 393, 136],
        [1604, 690, 218, 26],
        [1334, 967, 517, 142],
        [0, 0, 800, 870]
      ]
    }
  ];

  // symbols:

  (lib.arrow = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.btn = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.btn_over = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.dan_logo = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.disc = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib.paper = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib.product = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib.s2 = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib.thumb = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();

  (lib.txt1 = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();

  (lib.txt2 = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();

  (lib.txt3 = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();

  (lib.yogurt_bg = function () {
    this.initialize(ss["index_atlas_"]);
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop)
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.Символ29 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.btn_over();
    this.instance.parent = this;
    this.instance.setTransform(-276, -50);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ29,
    new cjs.Rectangle(-276, -50, 552, 100),
    null
  );

  (lib.Символ28 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#990033").s().p("EgrHAH0IAAvnMBWPAAAIAAPng");
    this.shape._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(3).to({ _off: false }, 0).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-276, -50, 552, 100);

  (lib.Символ26 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.txt1();
    this.instance.parent = this;
    this.instance.setTransform(-196.5, -68);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ26,
    new cjs.Rectangle(-196.5, -68, 393, 136),
    null
  );

  (lib.Символ25 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.txt2();
    this.instance.parent = this;
    this.instance.setTransform(-109, -13);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ25,
    new cjs.Rectangle(-109, -13, 218, 26),
    null
  );

  (lib.Символ24 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.paper();
    this.instance.parent = this;
    this.instance.setTransform(-400, -176);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ24,
    new cjs.Rectangle(-400, -176, 800, 352),
    null
  );

  (lib.Символ23 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.txt3();
    this.instance.parent = this;
    this.instance.setTransform(-258.5, -71);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ23,
    new cjs.Rectangle(-258.5, -71, 517, 142),
    null
  );

  (lib.Символ22 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.dan_logo();
    this.instance.parent = this;
    this.instance.setTransform(-265, -76.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ22,
    new cjs.Rectangle(-265, -76.5, 530, 153),
    null
  );

  (lib.Символ21 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.disc();
    this.instance.parent = this;
    this.instance.setTransform(-400, -63);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ21,
    new cjs.Rectangle(-400, -63, 800, 126),
    null
  );

  (lib.Символ19 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.product();
    this.instance.parent = this;
    this.instance.setTransform(-315, -275);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ19,
    new cjs.Rectangle(-315, -275, 630, 550),
    null
  );

  (lib.Символ18 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.yogurt_bg();
    this.instance.parent = this;
    this.instance.setTransform(-400, -435);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ18,
    new cjs.Rectangle(-400, -435, 800, 870),
    null
  );

  (lib.Символ15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.thumb();
    this.instance.parent = this;
    this.instance.setTransform(-33, -35);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ15,
    new cjs.Rectangle(-33, -35, 66, 70),
    null
  );

  (lib.Символ14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.arrow();
    this.instance.parent = this;
    this.instance.setTransform(24, 34, 1, 1, 180);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ14,
    new cjs.Rectangle(-24, -34, 48, 68),
    null
  );

  (lib.Символ13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_1
    this.instance = new lib.arrow();
    this.instance.parent = this;
    this.instance.setTransform(-24, -34);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ13,
    new cjs.Rectangle(-24, -34, 48, 68),
    null
  );

  (lib.Символ10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Слой_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#CC3300")
      .s()
      .p(
        "AtCNCQlZlZgBnpQABnoFZlaQFalZHogBQHpABFZFZQFbFaAAHoQAAHplbFZQlZFbnpAAQnoAAlalbg"
      );

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Слой_1
    this.instance = new lib.s2();
    this.instance.parent = this;
    this.instance.setTransform(-304.5, -305.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.Символ10,
    new cjs.Rectangle(-304.5, -305.5, 609, 611),
    null
  );

  (lib.Символ_1_bg = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // bg
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("Eg+fBdwMAAAi7fMB8/AAAMAAAC7fg");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ20 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, { over: 1, out: 8 });

    // timeline functions:
    this.frame_0 = function () {
      if (typeof this.stopCycle == "undefined") {
        this.stopCycle = true;
        this.btn_area.addEventListener("mouseover", overBtn.bind(this));
        this.btn_area.addEventListener("mouseout", outBtn.bind(this));
        this.btn_area.addEventListener("click", clickBtn.bind(this));
      }

      function overBtn() {
        this.gotoAndPlay("over");
      }

      function outBtn() {
        this.gotoAndPlay("out");
      }

      function clickBtn() {
        //window.open("http://yandex.ru/");
      }
      this.stop();
    };
    this.frame_7 = function () {
      this.stop();
    };
    this.frame_15 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(7)
        .call(this.frame_7)
        .wait(8)
        .call(this.frame_15)
        .wait(1)
    );

    // Слой_2
    this.btn_area = new lib.Символ28();
    this.btn_area.name = "btn_area";
    this.btn_area.parent = this;
    new cjs.ButtonHelper(this.btn_area, 0, 1, 2, false, new lib.Символ28(), 3);

    this.timeline.addTween(cjs.Tween.get(this.btn_area).wait(16));

    // Слой_3
    this.instance = new lib.Символ29();
    this.instance.parent = this;
    this.instance.alpha = 0.0117;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ alpha: 1 }, 6)
        .wait(1)
        .to({ alpha: 0.0117 }, 7)
        .wait(1)
    );

    // Слой_1
    this.instance_1 = new lib.btn();
    this.instance_1.parent = this;
    this.instance_1.setTransform(-276, -50);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-276, -50, 552, 100);

  (lib.Символ17 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_89 = function () {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1)
    );

    // txt3_png
    this.instance = new lib.Символ23();
    this.instance.parent = this;
    this.instance.setTransform(4.5, -598.6);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(29)
        .to({ _off: false }, 0)
        .to({ y: -477, alpha: 1 }, 30, cjs.Ease.quadInOut)
        .wait(31)
    );

    // dan_logo_png
    this.instance_1 = new lib.Символ22();
    this.instance_1.parent = this;
    this.instance_1.setTransform(0, -336.55, 1.163, 1.163);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(42)
        .to({ _off: false }, 0)
        .to(
          { scaleX: 1, scaleY: 1, y: -336.5, alpha: 1 },
          17,
          cjs.Ease.quadInOut
        )
        .wait(31)
    );

    // product_png
    this.instance_2 = new lib.Символ19();
    this.instance_2.parent = this;
    this.instance_2.setTransform(0, 92.2);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(29)
        .to({ _off: false }, 0)
        .to({ y: 41, alpha: 1 }, 30, cjs.Ease.quadInOut)
        .wait(31)
    );

    // disc_png
    this.instance_3 = new lib.Символ21();
    this.instance_3.parent = this;
    this.instance_3.setTransform(0, 535);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(42)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 17)
        .wait(31)
    );

    // white
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("Eg+fAd6MAAAg7zUAb+AF6AihAAAUAiiAAAAb+gF6MAAAA7zg");
    this.shape.setTransform(0, 412.5625);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

    // yogurt_bg_jpg
    this.instance_4 = new lib.Символ18();
    this.instance_4.parent = this;
    this.instance_4.setTransform(0, -163, 2.5448, 2.5448, -84.2369);
    this.instance_4.alpha = 0;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .to(
          { scaleX: 1, scaleY: 1, rotation: 0, alpha: 1 },
          59,
          cjs.Ease.quadInOut
        )
        .wait(31)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1244.5, -1359.7, 2489.2, 2393.5);

  (lib.Символ_1_txt2_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // txt2_png
    this.instance = new lib.Символ25();
    this.instance.parent = this;
    this.instance.setTransform(-389.6, 37);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(31)
        .to({ _off: false }, 0)
        .to({ x: 13, alpha: 1 }, 23, cjs.Ease.quartInOut)
        .to({ _off: true }, 155)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_txt1_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // txt1_png
    this.instance = new lib.Символ26();
    this.instance.parent = this;
    this.instance.setTransform(-162.5, -84);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(31)
        .to({ _off: false }, 0)
        .to({ x: 12.5, alpha: 1 }, 23, cjs.Ease.quartInOut)
        .to({ _off: true }, 155)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_s2_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // s2_png
    this.s2 = new lib.Символ10();
    this.s2.name = "s2";
    this.s2.parent = this;
    this.s2.setTransform(1129.55, -261.3, 0.7345, 0.7345);

    this.timeline.addTween(
      cjs.Tween.get(this.s2)
        .to({ scaleX: 0.7474, scaleY: 0.7474, x: 5.25 }, 18)
        .to({ _off: true }, 191)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_paper_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // paper_png
    this.instance = new lib.Символ24();
    this.instance.parent = this;
    this.instance.setTransform(0, -1);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(15)
        .to({ _off: false }, 0)
        .to({ _off: true }, 194)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_palec = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // palec
    this.palec = new lib.Символ15();
    this.palec.name = "palec";
    this.palec.parent = this;
    this.palec.setTransform(-509.65, 103);
    this.palec.alpha = 0.0117;

    this.timeline.addTween(
      cjs.Tween.get(this.palec)
        .wait(31)
        .to({ x: 2 }, 0)
        .to({ alpha: 1 }, 13)
        .to({ _off: true }, 165)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_packshot = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // packshot
    this.instance = new lib.Символ17("synched", 0, false);
    this.instance.parent = this;
    this.instance.setTransform(0, -4);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(209).to({ _off: false }, 0).wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_btn_png = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // btn_png
    this.instance = new lib.Символ20();
    this.instance.parent = this;
    this.instance.setTransform(720, 383);

    this.timeline.addTween(
      cjs.Tween.get(this.instance).wait(209).to({ x: 0 }, 0).wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_arrow_right = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // arrow_right
    this.arrow_right = new lib.Символ13();
    this.arrow_right.name = "arrow_right";
    this.arrow_right.parent = this;
    this.arrow_right.setTransform(-566.65, 102);
    this.arrow_right.alpha = 0.0117;

    this.timeline.addTween(
      cjs.Tween.get(this.arrow_right)
        .wait(31)
        .to({ x: -55 }, 0)
        .to({ alpha: 1 }, 13)
        .to({ _off: true }, 165)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ_1_arrow_left = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // arrow_left
    this.arrow_left = new lib.Символ14();
    this.arrow_left.name = "arrow_left";
    this.arrow_left.parent = this;
    this.arrow_left.setTransform(-446.65, 102);
    this.arrow_left.alpha = 0.0117;

    this.timeline.addTween(
      cjs.Tween.get(this.arrow_left)
        .wait(31)
        .to({ x: 65 }, 0)
        .to({ alpha: 1 }, 13)
        .to({ _off: true }, 165)
        .wait(91)
    );
  }).prototype = p = new cjs.MovieClip();

  (lib.Символ1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_0 = function () {
      this.s2 = this.s2_png.s2;
      if (this.palec.parent == undefined || this.palec.parent == this)
        this.palec = this.palec.palec;
      if (this.arrow_left.parent == undefined || this.arrow_left.parent == this)
        this.arrow_left = this.arrow_left.arrow_left;
      if (
        this.arrow_right.parent == undefined ||
        this.arrow_right.parent == this
      )
        this.arrow_right = this.arrow_right.arrow_right;

      this.s2.shape.visible = false;

      this.s2.on("mousedown", function (evt) {
        var pt = stage.globalToLocal(evt.stageX, evt.stageY);
        this.offset = { x: this.x - pt.x, y: this.y - pt.y };
      });

      this.s2.on("pressmove", function (evt) {
        var pt = stage.globalToLocal(evt.stageX, evt.stageY);

        this.x = pt.x + this.offset.x;
        this.y = pt.y + this.offset.y;

        delete this.parent.timeline._tweens[0]._curQueueProps.x;
        delete this.parent.timeline._tweens[0]._initQueueProps.x;
      });
    };
    this.frame_18 = function () {
      this.s2 = undefined;
      this.s2 = this.s2_png.s2;
    };
    this.frame_31 = function () {
      if (this.palec.parent == undefined || this.palec.parent == this)
        this.palec = this.palec.palec;
      if (this.arrow_left.parent == undefined || this.arrow_left.parent == this)
        this.arrow_left = this.arrow_left.arrow_left;
      if (
        this.arrow_right.parent == undefined ||
        this.arrow_right.parent == this
      )
        this.arrow_right = this.arrow_right.arrow_right;
    };
    this.frame_44 = function () {
      if (this.palec.parent == undefined || this.palec.parent == this)
        this.palec = this.palec.palec;
      if (this.arrow_left.parent == undefined || this.arrow_left.parent == this)
        this.arrow_left = this.arrow_left.arrow_left;
      if (
        this.arrow_right.parent == undefined ||
        this.arrow_right.parent == this
      )
        this.arrow_right = this.arrow_right.arrow_right;
    };
    this.frame_89 = function () {
      this.stop();
    };
    this.frame_209 = function () {
      this.s2 = undefined;
    };
    this.frame_299 = function () {
      this.___loopingOver___ = true;
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(18)
        .call(this.frame_18)
        .wait(13)
        .call(this.frame_31)
        .wait(13)
        .call(this.frame_44)
        .wait(45)
        .call(this.frame_89)
        .wait(120)
        .call(this.frame_209)
        .wait(90)
        .call(this.frame_299)
        .wait(1)
    );

    // s2_png_obj_
    this.s2_png = new lib.Символ_1_s2_png();
    this.s2_png.name = "s2_png";
    this.s2_png.parent = this;
    this.s2_png.setTransform(1129.5, -261.3, 1, 1, 0, 0, 0, 1129.5, -261.3);
    this.s2_png.depth = 0;
    this.s2_png.isAttachedToCamera = 0;
    this.s2_png.isAttachedToMask = 0;
    this.s2_png.layerDepth = 0;
    this.s2_png.layerIndex = 0;
    this.s2_png.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.s2_png).wait(300));

    // palec_obj_
    this.palec = new lib.Символ_1_palec();
    this.palec.name = "palec";
    this.palec.parent = this;
    this.palec.setTransform(-509.7, 103, 1, 1, 0, 0, 0, -509.7, 103);
    this.palec.depth = 0;
    this.palec.isAttachedToCamera = 0;
    this.palec.isAttachedToMask = 0;
    this.palec.layerDepth = 0;
    this.palec.layerIndex = 1;
    this.palec.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.palec).wait(300));

    // arrow_left_obj_
    this.arrow_left = new lib.Символ_1_arrow_left();
    this.arrow_left.name = "arrow_left";
    this.arrow_left.parent = this;
    this.arrow_left.setTransform(-446.7, 102, 1, 1, 0, 0, 0, -446.7, 102);
    this.arrow_left.depth = 0;
    this.arrow_left.isAttachedToCamera = 0;
    this.arrow_left.isAttachedToMask = 0;
    this.arrow_left.layerDepth = 0;
    this.arrow_left.layerIndex = 2;
    this.arrow_left.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.arrow_left).wait(300));

    // arrow_right_obj_
    this.arrow_right = new lib.Символ_1_arrow_right();
    this.arrow_right.name = "arrow_right";
    this.arrow_right.parent = this;
    this.arrow_right.setTransform(-566.6, 102, 1, 1, 0, 0, 0, -566.6, 102);
    this.arrow_right.depth = 0;
    this.arrow_right.isAttachedToCamera = 0;
    this.arrow_right.isAttachedToMask = 0;
    this.arrow_right.layerDepth = 0;
    this.arrow_right.layerIndex = 3;
    this.arrow_right.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.arrow_right).wait(300));

    // txt1_png_obj_
    this.txt1_png = new lib.Символ_1_txt1_png();
    this.txt1_png.name = "txt1_png";
    this.txt1_png.parent = this;
    this.txt1_png.depth = 0;
    this.txt1_png.isAttachedToCamera = 0;
    this.txt1_png.isAttachedToMask = 0;
    this.txt1_png.layerDepth = 0;
    this.txt1_png.layerIndex = 4;
    this.txt1_png.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.txt1_png).wait(300));

    // txt2_png_obj_
    this.txt2_png = new lib.Символ_1_txt2_png();
    this.txt2_png.name = "txt2_png";
    this.txt2_png.parent = this;
    this.txt2_png.depth = 0;
    this.txt2_png.isAttachedToCamera = 0;
    this.txt2_png.isAttachedToMask = 0;
    this.txt2_png.layerDepth = 0;
    this.txt2_png.layerIndex = 5;
    this.txt2_png.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.txt2_png).wait(300));

    // mask_idn (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_15 = new cjs.Graphics().p("A92eeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_16 = new cjs.Graphics().p("A92eeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_17 = new cjs.Graphics().p("A94eeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_18 = new cjs.Graphics().p("A97eeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_19 = new cjs.Graphics().p("A+BeeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_20 = new cjs.Graphics().p("A+LeeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_21 = new cjs.Graphics().p("A+aeeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_22 = new cjs.Graphics().p("A+weeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_23 = new cjs.Graphics().p("A/MeeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_24 = new cjs.Graphics().p("A/weeMAAAg87MB8/AAAMAAAA87g");
    var mask_graphics_25 = new cjs.Graphics().p(
      "EggeAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_26 = new cjs.Graphics().p(
      "EghVAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_27 = new cjs.Graphics().p(
      "EgiYAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_28 = new cjs.Graphics().p(
      "EgjnAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_29 = new cjs.Graphics().p(
      "EglCAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_30 = new cjs.Graphics().p(
      "EgmsAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_31 = new cjs.Graphics().p(
      "EgolAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_32 = new cjs.Graphics().p(
      "EgquAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_33 = new cjs.Graphics().p(
      "EgtIAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_34 = new cjs.Graphics().p(
      "Egv0AeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_35 = new cjs.Graphics().p(
      "EgyzAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_36 = new cjs.Graphics().p(
      "Eg2HAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_37 = new cjs.Graphics().p(
      "Eg5vAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_38 = new cjs.Graphics().p(
      "Eg9uAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_39 = new cjs.Graphics().p(
      "Eg+fAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_40 = new cjs.Graphics().p(
      "Eg+fAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_41 = new cjs.Graphics().p(
      "Eg+fAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_42 = new cjs.Graphics().p(
      "Eg+fAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_43 = new cjs.Graphics().p(
      "Eg+fAeeMAAAg87MB8/AAAMAAAA87g"
    );
    var mask_graphics_44 = new cjs.Graphics().p(
      "Eg+fAeeMAAAg87MB8/AAAMAAAA87g"
    );

    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(15)
        .to({ graphics: mask_graphics_15, x: 608.875, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_16, x: 608.8582, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_17, x: 608.7409, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_18, x: 608.4224, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_19, x: 607.8021, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_20, x: 606.7794, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_21, x: 605.2538, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_22, x: 603.1247, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_23, x: 600.2915, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_24, x: 596.6535, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_25, x: 592.1103, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_26, x: 586.5611, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_27, x: 579.9055, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_28, x: 572.0429, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_29, x: 562.8726, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_30, x: 552.294, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_31, x: 540.2067, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_32, x: 526.5099, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_33, x: 511.1031, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_34, x: 493.8857, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_35, x: 474.7572, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_36, x: 453.6168, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_37, x: 430.3642, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_38, x: 404.8985, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_39, x: 354.2387, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_40, x: 293.8522, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_41, x: 228.4362, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_42, x: 157.7896, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_43, x: 81.7113, y: -2.6 })
        .wait(1)
        .to({ graphics: mask_graphics_44, x: 0, y: -2.6 })
        .wait(165)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(91)
    );

    // paper_png_obj_
    this.paper_png = new lib.Символ_1_paper_png();
    this.paper_png.name = "paper_png";
    this.paper_png.parent = this;
    this.paper_png.depth = 0;
    this.paper_png.isAttachedToCamera = 0;
    this.paper_png.isAttachedToMask = 0;
    this.paper_png.layerDepth = 0;
    this.paper_png.layerIndex = 6;
    this.paper_png.maskLayerName = 0;

    var maskedShapeInstanceList = [this.paper_png];

    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.paper_png).wait(300));

    // btn_png_obj_
    this.btn_png = new lib.Символ_1_btn_png();
    this.btn_png.name = "btn_png";
    this.btn_png.parent = this;
    this.btn_png.setTransform(720, 383, 1, 1, 0, 0, 0, 720, 383);
    this.btn_png.depth = 0;
    this.btn_png.isAttachedToCamera = 0;
    this.btn_png.isAttachedToMask = 0;
    this.btn_png.layerDepth = 0;
    this.btn_png.layerIndex = 7;
    this.btn_png.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.btn_png).wait(300));

    // packshot_obj_
    this.packshot = new lib.Символ_1_packshot();
    this.packshot.name = "packshot";
    this.packshot.parent = this;
    this.packshot.depth = 0;
    this.packshot.isAttachedToCamera = 0;
    this.packshot.isAttachedToMask = 0;
    this.packshot.layerDepth = 0;
    this.packshot.layerIndex = 8;
    this.packshot.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.packshot).wait(300));

    // bg_obj_
    this.bg = new lib.Символ_1_bg();
    this.bg.name = "bg";
    this.bg.parent = this;
    this.bg.depth = 0;
    this.bg.isAttachedToCamera = 0;
    this.bg.isAttachedToMask = 0;
    this.bg.layerDepth = 0;
    this.bg.layerIndex = 9;
    this.bg.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.bg).wait(300));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1907.8, -2061, 3827.2, 5181.6);

  (lib.Монтажный_кадр_1_mc = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // mc
    this.mc = new lib.Символ1();
    this.mc.name = "mc";
    this.mc.parent = this;
    this.mc.setTransform(400, 600);

    this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));
  }).prototype = getMCSymbolPrototype(lib.Монтажный_кадр_1_mc, null, null);

  // stage content:
  (lib.index = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    this.___GetDepth___ = function (obj) {
      var depth = obj.depth;
      var cameraObj = this.___camera___instance;
      if (cameraObj && cameraObj.depth && obj.isAttachedToCamera) {
        depth += depth + cameraObj.depth;
      }
      return depth;
    };
    this.___needSorting___ = function () {
      for (var i = 0; i < this.getNumChildren() - 1; i++) {
        var prevDepth = this.___GetDepth___(this.getChildAt(i));
        var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
        if (prevDepth < nextDepth) return true;
      }
      return false;
    };
    this.___sortFunction___ = function (obj1, obj2) {
      return (
        this.exportRoot.___GetDepth___(obj2) -
        this.exportRoot.___GetDepth___(obj1)
      );
    };
    this.on("tick", function (event) {
      var curTimeline = event.currentTarget;
      if (curTimeline.___needSorting___()) {
        this.sortChildren(curTimeline.___sortFunction___);
      }
    });

    // timeline functions:
    this.frame_0 = function () {
      if (this.mc.parent == undefined || this.mc.parent == this)
        this.mc = this.mc.mc;
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // mc_obj_
    this.mc = new lib.Монтажный_кадр_1_mc();
    this.mc.name = "mc";
    this.mc.parent = this;
    this.mc.setTransform(781.2, 600, 1, 1, 0, 0, 0, 781.2, 600);
    this.mc.depth = 0;
    this.mc.isAttachedToCamera = 0;
    this.mc.isAttachedToMask = 0;
    this.mc.layerDepth = 0;
    this.mc.layerIndex = 0;
    this.mc.maskLayerName = 0;

    this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(209.4, 600, 1543.8, 600);
  // library properties:
  lib.properties = {
    id: "F1C671A128FAEA48BD68D0B7D62F5BC1",
    width: 800,
    height: 1200,
    fps: 30,
    color: "#FFFFFF",
    opacity: 0.0,
    manifest: [{ src: "index_atlas_.png", id: "index_atlas_" }],
    preloads: []
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["F1C671A128FAEA48BD68D0B7D62F5BC1"] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    }
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  // Layer depth API :

  AdobeAn.Layer = new (function () {
    this.getLayerZDepth = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script =
        "if(timeline." +
        layerName +
        ") timeline." +
        layerName +
        ".depth; else 0;";
      return eval(script);
    };
    this.setLayerZDepth = function (timeline, layerName, zDepth) {
      const MAX_zDepth = 10000;
      const MIN_zDepth = -5000;
      if (zDepth > MAX_zDepth) zDepth = MAX_zDepth;
      else if (zDepth < MIN_zDepth) zDepth = MIN_zDepth;
      if (layerName === "Camera") layerName = "___camera___instance";
      var script =
        "if(timeline." +
        layerName +
        ") timeline." +
        layerName +
        ".depth = " +
        zDepth +
        ";";
      eval(script);
    };
    this.removeLayer = function (timeline, layerName) {
      if (layerName === "Camera") layerName = "___camera___instance";
      var script =
        "if(timeline." +
        layerName +
        ") timeline.removeChild(timeline." +
        layerName +
        ");";
      eval(script);
    };
    this.addNewLayer = function (timeline, layerName, zDepth) {
      if (layerName === "Camera") layerName = "___camera___instance";
      zDepth = typeof zDepth !== "undefined" ? zDepth : 0;
      var layer = new createjs.MovieClip();
      layer.name = layerName;
      layer.depth = zDepth;
      layer.layerIndex = 0;
      timeline.addChild(layer);
    };
  })();
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
