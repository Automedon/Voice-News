(this.webpackJsonpvoice = this.webpackJsonpvoice || []).push([
  [0],
  {
    145: function (e, t, n) {},
    146: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(3),
        a = n(0),
        c = n.n(a),
        r = n(10),
        o = n.n(r),
        s = (n(87), n(37)),
        l = n(169),
        d = n(168),
        j = n(164),
        b = n(160),
        h = Object(b.a)({
          container: { padding: "0 5%", width: "100%", margin: 0 },
          card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "45vh",
            padding: "10%",
            borderRadius: 10,
            color: "white",
          },
          infoCard: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          },
        }),
        m = n(170),
        x = n(162),
        p = n(163),
        f = n(165),
        u = n(166),
        g = n(167),
        O = Object(b.a)({
          media: { height: 250 },
          border: { border: "solid" },
          fullHeightCard: { height: "100%" },
          card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderBottom: "10px solid white",
          },
          activeCard: { borderBottom: "10px solid #22289a" },
          grid: { display: "flex" },
          details: {
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          },
          title: { padding: "0 16px" },
          cardActions: {
            padding: "0 16px 8px 16px",
            display: "flex",
            justifyContent: "space-between",
          },
        }),
        y = function (e) {
          var t = e.article,
            n = e.i,
            c = e.activeArticle,
            r = O(),
            o = Object(a.useState)([]),
            l = Object(s.a)(o, 2),
            d = l[0],
            b = l[1];
          Object(a.useEffect)(function () {
            b(function (e) {
              return Array(20)
                .fill()
                .map(function (t, n) {
                  return e[n] || Object(a.createRef)();
                });
            });
          }, []),
            Object(a.useEffect)(
              function () {
                var e;
                n === c &&
                  d[c] &&
                  ((e = d[c]), window.scroll(0, e.current.offsetTop - 50));
              },
              [n, c, d]
            );
          var h = t.description,
            y = t.publishedAt,
            v = t.source,
            w = t.title,
            C = t.url,
            N = t.urlToImage;
          return Object(i.jsxs)(m.a, {
            ref: d[n],
            className: ""
              .concat(r.card, " ")
              .concat(c === n ? r.activeCard : null),
            children: [
              Object(i.jsxs)(x.a, {
                href: C,
                target: "_blank",
                children: [
                  Object(i.jsx)(p.a, {
                    className: r.media,
                    image:
                      N ||
                      "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",
                  }),
                  Object(i.jsxs)("div", {
                    className: r.details,
                    children: [
                      Object(i.jsx)(j.a, {
                        variant: "body2",
                        color: "textSecondary",
                        component: "h2",
                        children: new Date(y).toDateString(),
                      }),
                      Object(i.jsx)(j.a, {
                        variant: "body2",
                        color: "textSecondary",
                        component: "h2",
                        children: v.name,
                      }),
                    ],
                  }),
                  Object(i.jsx)(j.a, {
                    gutterBottom: !0,
                    variant: "h5",
                    className: r.title,
                    children: w,
                  }),
                  Object(i.jsx)(f.a, {
                    children: Object(i.jsx)(j.a, {
                      variant: "body2",
                      color: "textSecondary",
                      component: "p",
                      children: h,
                    }),
                  }),
                ],
              }),
              Object(i.jsxs)(u.a, {
                className: r.cardActions,
                children: [
                  Object(i.jsx)(g.a, {
                    size: "small",
                    color: "primary",
                    children: "Learn More",
                  }),
                  Object(i.jsx)(j.a, {
                    variant: "h5",
                    color: "textSecondary",
                    children: n + 1,
                  }),
                ],
              }),
            ],
          });
        },
        v = [
          {
            color: "#00838f",
            title: "Latest News",
            text: "Give me the latest news",
          },
          {
            color: "#1565c0",
            title: "News by Categories",
            info:
              "Business, Entertainment, General, Health, Science, Sports, Technology",
            text: "Give me the latest Technology news",
          },
          {
            color: "#4527a0",
            title: "News by Terms",
            info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
            text: "What's up with PlayStation 5",
          },
          {
            color: "#283593",
            title: "News by Sources",
            info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
            text: "Give me the news from CNN",
          },
        ],
        w = function (e) {
          var t = e.articles,
            n = e.activeArticle,
            a = h();
          return t.length
            ? Object(i.jsx)(d.a, {
                in: !0,
                children: Object(i.jsx)(d.a, {
                  className: a.container,
                  container: !0,
                  alignItems: "stretch",
                  spacing: 3,
                  children: t.map(function (e, t) {
                    return Object(i.jsx)(d.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 4,
                      lg: 3,
                      style: { display: "flex" },
                      children: Object(i.jsx)(y, {
                        article: e,
                        activeArticle: n,
                        i: t,
                      }),
                    });
                  }),
                }),
              })
            : Object(i.jsx)(l.a, {
                in: !0,
                children: Object(i.jsx)(d.a, {
                  className: a.container,
                  container: !0,
                  alignItems: "stretch",
                  spacing: 3,
                  children: v.map(function (e) {
                    return Object(i.jsx)(d.a, {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 4,
                      lg: 3,
                      className: a.infoCard,
                      children: Object(i.jsxs)("div", {
                        className: a.card,
                        style: { backgroundColor: e.color },
                        children: [
                          Object(i.jsx)(j.a, {
                            variant: "h5",
                            children: e.title,
                          }),
                          e.info &&
                            Object(i.jsxs)(j.a, {
                              variant: "h6",
                              children: [
                                Object(i.jsxs)("strong", {
                                  children: [e.title.split(" ")[2], ":"],
                                }),
                                Object(i.jsx)("br", {}),
                                e.info,
                              ],
                            }),
                          Object(i.jsxs)(j.a, {
                            variant: "h6",
                            children: [
                              "Try saying:",
                              Object(i.jsx)("br", {}),
                              Object(i.jsx)("i", { children: e.text }),
                            ],
                          }),
                        ],
                      }),
                    });
                  }),
                }),
              });
        },
        C = n(75),
        N = n.n(C),
        A = n(43),
        S = n.n(A),
        k = (n(145), n(26)),
        B = Object(b.a)(function (e) {
          return {
            footer: Object(k.a)(
              {
                textAlign: "center",
                position: "fixed",
                left: 0,
                bottom: 0,
                color: "black",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "120px",
              },
              e.breakpoints.down("sm"),
              { display: "none" }
            ),
            link: { textDecoration: "none", color: "rgba(21, 101, 192)" },
            image: { marginLeft: 20 },
            card: Object(k.a)(
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                padding: "3%",
                borderRadius: 10,
                color: "white",
                backgroundColor: "rgba(21, 101, 192)",
                margin: "0 12px",
                textAlign: "center",
                height: "25vmin",
              },
              e.breakpoints.down("sm"),
              {
                flexDirection: "column-reverse",
                textAlign: "center",
                width: "100%",
                height: "initial",
                "&:nth-of-type(1)": { marginBottom: "12px" },
              }
            ),
            infoContainer: Object(k.a)(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column" }
            ),
            logoContainer: Object(k.a)(
              {
                padding: "0 5%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              },
              e.breakpoints.down("sm"),
              { flexDirection: "column-reverse", textAlign: "center" }
            ),
            alanLogo: Object(k.a)(
              {
                height: "27vmin",
                borderRadius: "15%",
                padding: "0 5%",
                margin: "3% 0",
              },
              e.breakpoints.down("sm"),
              { height: "35vmin" }
            ),
          };
        });
      var D = function () {
        var e = B(),
          t = Object(a.useState)([]),
          n = Object(s.a)(t, 2),
          c = n[0],
          r = n[1],
          o = Object(a.useState)(-1),
          l = Object(s.a)(o, 2),
          d = l[0],
          j = l[1];
        return (
          Object(a.useEffect)(function () {
            S()({
              key:
                "26c09b3b9abe74c29f7ac0be291452852e956eca572e1d8b807a3e2338fdd0dc/stage",
              onCommand: function (e) {
                var t = e.command,
                  n = e.articles,
                  i = e.number;
                if ("newHeadlines" === t) r(n), j(-1);
                else if ("highlight" === t)
                  j(function (e) {
                    return e + 1;
                  });
                else if ("open" === t) {
                  var a = i.length > 2 ? N()(i, { fuzzy: !0 }) : i,
                    c = n[a - 1];
                  a > 20
                    ? S()().playText("Please try that again.")
                    : c &&
                      (window.open(c.url, "_blank"),
                      S()().playText("Opening ..."));
                }
              },
            });
          }, []),
          Object(i.jsxs)("div", {
            children: [
              Object(i.jsx)("div", {
                className: e.logoContainer,
                children: Object(i.jsx)("img", {
                  className: e.alanLogo,
                  src: "https://alan.app/voice/images/previews/preview.jpg",
                  alt: "Alan logo",
                }),
              }),
              Object(i.jsx)(w, { articles: c, activeArticle: d }),
            ],
          })
        );
      };
      o.a.render(
        Object(i.jsx)(c.a.StrictMode, { children: Object(i.jsx)(D, {}) }),
        document.getElementById("root")
      );
    },
    87: function (e, t, n) {},
  },
  [[146, 1, 2]],
]);
//# sourceMappingURL=main.d6d1a888.chunk.js.map
