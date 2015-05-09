require("./chai.helper");
var domHelper = require("./dom.helper");

describe("test user agent detection", function () {
    beforeEach(function () {
        domHelper("<div></div>");
    });



    // --------------------------------------------------------------------------------
    // Android + AndroidICS-Tests
    // --------------------------------------------------------------------------------
    it("should detect android 'ice cream sandwich' (4.0.1) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android 4.0.1; en-us; sdk Build/ICS_MR0) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });


    it("should detect android 'ice cream sandwich' (4.0.3) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Galaxy Nexus Build/IML74K) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Mobile Safari/535.7");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });


    it("should detect android 'jelly bean' (4.1) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android 4.1.1; en-us; Nexus S Build/JRO03E) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);


        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android 4.1; en-gb; Build/JRN84D) AppleWebKit/534.30 (KHTML like Gecko) Version/4.0 Mobile Safari/534.30");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);


        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android 4.1.1; el-gr; MB525 Build/JRO03H; CyanogenMod-10) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);

    });


    it("should detect android 'jelly bean' (4.2) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android 4.2; en-us; Nexus 10 Build/JVP15I) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);

        $.__detectUA($, "Mozilla/5.0 (Linux; U; Android 4.2; ro-ro; LT18i Build/4.1.B.0.431) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);

    });


    it("should detect android 'jelly bean' (4.3) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JWR66D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.111 Safari/537.36");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });


    it("should detect android 'KitKat' (4.4) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; Android 4.4; Nexus 7 Build/KOT24) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.105 Safari/537.36");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);


        $.__detectUA($, "Mozilla/5.0 (Linux; Android 4.4; Nexus 4 Build/KRT16E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.105 Mobile Safari");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });


    it("should detect android 'Lollipop' (5.0) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; Android 5.0; Nexus 5 Build/LPX13D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.102 Mobile Safari/537.36");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });


    it("should detect android 'Lollipop' (5.1) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; Android 5.1; Nexus 5 Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.0.0 Mobile Safari/537.36; DailymotionEmbedSDK 1.0");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });


    it("should detect android 'FUTURE-fake' (10.1) as $.os.androidICS", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (Linux; Android 10.1; Nexus 50 Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.0.0 Mobile Safari/537.36; DailymotionEmbedSDK 1.0");
        $.os.android.should.equal(true);
        $.os.androidICS.should.equal(true);
        $.os.ios.should.equal(false);
    });



    // --------------------------------------------------------------------------------
    // iOS lt 7
    // --------------------------------------------------------------------------------
    it("should detect iOS 6 NOT as $.os.iOS7", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);

        $.__detectUA($, "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A5376e");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });


    it("should detect iOS 6.1 NOT as $.os.iOS7", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B329 Safari/8536.25");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });



    // --------------------------------------------------------------------------------
    // iOS gte 7
    // --------------------------------------------------------------------------------
    it("should detect iOS 7 as $.os.iOS7", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/546.10 (KHTML, like Gecko) Version/6.0 Mobile/7E18WD Safari/8536.25");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(true);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);

        $.__detectUA($, "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(true);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });

    it("should detect iOS 8 as $.os.iOS7", function () {
        "use strict";

        $.__detectUA($, "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(true);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);

        $.__detectUA($, "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/538.34.9 (KHTML, like Gecko) Mobile/12A4265u");
        $.os.ios.should.equal(true);
        $.os.ios7.should.equal(true);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });



    // --------------------------------------------------------------------------------
    // ignore Errors + Edge effects
    // --------------------------------------------------------------------------------
    it("should ignore empty user agents", function () {
        "use strict";

        $.__detectUA($, "");
        $.os.ios.should.equal(false);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });


    it("should ignore fake user agents", function () {
        "use strict";

        $.__detectUA($, "silly fake agent");
        $.os.ios.should.equal(false);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });


    it("should ignore fake android user agents", function () {
        "use strict";

        $.__detectUA($, "silly Android sucks!");
        $.os.ios.should.equal(false);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });


    it("should ignore fake iOS user agents", function () {
        "use strict";

        $.__detectUA($, "silly iPhone iOS sucks!");
        $.os.ios.should.equal(false);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });


    it("should ignore large fake user agents", function () {
        "use strict";

        var a = "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
        for (var t=0; t < 20; t++)
        {
            a += a;
        }

        $.__detectUA($, a);
        $.os.ios.should.equal(false);
        $.os.ios7.should.equal(false);
        $.os.android.should.equal(false);
        $.os.androidICS.should.equal(false);
    });



});
