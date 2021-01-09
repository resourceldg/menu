import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, H as text, f as space, g as claim_element, h as children, J as claim_text, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, n as insert_dev, a as append_dev, D as noop } from './client.a94fbf28.js';

/* src/routes/press.svelte generated by Svelte v3.24.0 */
const file = "src/routes/press.svelte";

function create_fragment(ctx) {
  let div8;
  let h4;
  let t0;
  let t1;
  let div2;
  let div0;
  let img;
  let img_src_value;
  let t2;
  let div1;
  let p;
  let t3;
  let a;
  let t4;
  let t5;
  let div7;
  let h6;
  let t6;
  let t7;
  let div3;
  let t8;
  let t9;
  let div4;
  let t10;
  let t11;
  let div5;
  let t12;
  let t13;
  let div6;
  let t14;
  let t15;
  let small;
  let t16;
  const block = {
    c: function create() {
      div8 = element("div");
      h4 = element("h4");
      t0 = text("PRENSA");
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t2 = space();
      div1 = element("div");
      p = element("p");
      t3 = text("The Cure are an English rock band formed in Crawley, West Sussex, in 1978.[1][2][3] \n        The band members have changed several times, and guitarist, lead vocalist, and songwriter \n        Robert Smith is the only constant member. The band's debut album was Three Imaginary Boys (1979)\n         and this, along with several early singles, placed the band in the post-punk and new wave movements \n         that had sprung up in the United Kingdom. Beginning with their second album, Seventeen Seconds (1980),\n          the band adopted a new, increasingly dark and tormented style, which, together with Smith's stage look, \n          had a strong influence on the emerging genre of gothic rock as well as the subculture that eventually formed\n          around the genre. \n        ");
      a = element("a");
      t4 = text("type scale");
      t5 = space();
      div7 = element("div");
      h6 = element("h6");
      t6 = text(".h6 header 6");
      t7 = space();
      div3 = element("div");
      t8 = text(".subtitle-1");
      t9 = space();
      div4 = element("div");
      t10 = text(".subtitle-2");
      t11 = space();
      div5 = element("div");
      t12 = text(".body-1");
      t13 = space();
      div6 = element("div");
      t14 = text(".body-2");
      t15 = space();
      small = element("small");
      t16 = text(".caption");
      this.h();
    },
    l: function claim(nodes) {
      div8 = claim_element(nodes, "DIV", {});
      var div8_nodes = children(div8);
      h4 = claim_element(div8_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t0 = claim_text(h4_nodes, "PRENSA");
      h4_nodes.forEach(detach_dev);
      t1 = claim_space(div8_nodes);
      div2 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", {});
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "The Cure are an English rock band formed in Crawley, West Sussex, in 1978.[1][2][3] \n        The band members have changed several times, and guitarist, lead vocalist, and songwriter \n        Robert Smith is the only constant member. The band's debut album was Three Imaginary Boys (1979)\n         and this, along with several early singles, placed the band in the post-punk and new wave movements \n         that had sprung up in the United Kingdom. Beginning with their second album, Seventeen Seconds (1980),\n          the band adopted a new, increasingly dark and tormented style, which, together with Smith's stage look, \n          had a strong influence on the emerging genre of gothic rock as well as the subculture that eventually formed\n          around the genre. \n        ");
      a = claim_element(p_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t4 = claim_text(a_nodes, "type scale");
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      h6 = claim_element(div7_nodes, "H6", {
        class: true
      });
      var h6_nodes = children(h6);
      t6 = claim_text(h6_nodes, ".h6 header 6");
      h6_nodes.forEach(detach_dev);
      t7 = claim_space(div7_nodes);
      div3 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t8 = claim_text(div3_nodes, ".subtitle-1");
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(div7_nodes);
      div4 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t10 = claim_text(div4_nodes, ".subtitle-2");
      div4_nodes.forEach(detach_dev);
      t11 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t12 = claim_text(div5_nodes, ".body-1");
      div5_nodes.forEach(detach_dev);
      t13 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t14 = claim_text(div6_nodes, ".body-2");
      div6_nodes.forEach(detach_dev);
      t15 = claim_space(div7_nodes);
      small = claim_element(div7_nodes, "SMALL", {});
      var small_nodes = children(small);
      t16 = claim_text(small_nodes, ".caption");
      small_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h4, "class", "pb-8");
      add_location(h4, file, 1, 2, 8);
      if (img.src !== (img_src_value = "producciones.svg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "producciones");
      attr_dev(img, "width", "400");
      attr_dev(img, "height", "auto");
      add_location(img, file, 4, 6, 152);
      add_location(div0, file, 3, 4, 140);
      attr_dev(a, "class", "a");
      attr_dev(a, "href", "https://material.io/design/typography/the-type-system.html#type-scale");
      add_location(a, file, 16, 8, 1055);
      add_location(p, file, 7, 6, 261);
      attr_dev(div1, "class", " ");
      add_location(div1, file, 6, 4, 239);
      attr_dev(div2, "class", "grid md:grid-cols-2 gap-2 rounded-bl place-items-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div2, file, 2, 2, 39);
      attr_dev(h6, "class", "mb-3 mt-6");
      add_location(h6, file, 28, 4, 1301);
      attr_dev(div3, "class", "subtitle-1");
      add_location(div3, file, 29, 4, 1345);
      attr_dev(div4, "class", "subtitle-2");
      add_location(div4, file, 30, 4, 1391);
      attr_dev(div5, "class", "body-1");
      add_location(div5, file, 31, 4, 1437);
      attr_dev(div6, "class", "body-2");
      add_location(div6, file, 32, 4, 1475);
      add_location(small, file, 33, 4, 1513);
      attr_dev(div7, "class", "bg-gray-200 dark:bg-dark-700 p-4 my-4");
      add_location(div7, file, 26, 2, 1241);
      add_location(div8, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div8, anchor);
      append_dev(div8, h4);
      append_dev(h4, t0);
      append_dev(div8, t1);
      append_dev(div8, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, p);
      append_dev(p, t3);
      append_dev(p, a);
      append_dev(a, t4);
      append_dev(div8, t5);
      append_dev(div8, div7);
      append_dev(div7, h6);
      append_dev(h6, t6);
      append_dev(div7, t7);
      append_dev(div7, div3);
      append_dev(div3, t8);
      append_dev(div7, t9);
      append_dev(div7, div4);
      append_dev(div4, t10);
      append_dev(div7, t11);
      append_dev(div7, div5);
      append_dev(div5, t12);
      append_dev(div7, t13);
      append_dev(div7, div6);
      append_dev(div6, t14);
      append_dev(div7, t15);
      append_dev(div7, small);
      append_dev(small, t16);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div8);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props) {
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Press> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Press", $$slots, []);
  return [];
}

class Press extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Press",
      options,
      id: create_fragment.name
    });
  }

}

export default Press;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc3MuN2EwYmU2MWYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
