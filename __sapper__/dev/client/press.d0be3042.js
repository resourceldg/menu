import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, H as text, f as space, g as claim_element, h as children, J as claim_text, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, n as insert_dev, a as append_dev, D as noop } from './client.955f839a.js';

/* src/routes/press.svelte generated by Svelte v3.24.0 */
const file = "src/routes/press.svelte";

function create_fragment(ctx) {
  let div4;
  let h4;
  let t0;
  let t1;
  let div2;
  let div0;
  let img;
  let img_src_value;
  let t2;
  let div1;
  let t3;
  let div3;
  let p;
  let t4;
  let a;
  let t5;
  const block = {
    c: function create() {
      div4 = element("div");
      h4 = element("h4");
      t0 = text("PRENSA");
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t2 = space();
      div1 = element("div");
      t3 = space();
      div3 = element("div");
      p = element("p");
      t4 = text("The Cure are an English rock band formed in Crawley, West Sussex, in 1978.[1][2][3] \n        The band members have changed several times, and guitarist, lead vocalist, and songwriter \n        Robert Smith is the only constant member. The band's debut album was Three Imaginary Boys (1979)\n         and this, along with several early singles, placed the band in the post-punk and new wave movements \n         that had sprung up in the United Kingdom. Beginning with their second album, Seventeen Seconds (1980),\n          the band adopted a new, increasingly dark and tormented style, which, together with Smith's stage look, \n          had a strong influence on the emerging genre of gothic rock as well as the subculture that eventually formed\n          around the genre. \n        ");
      a = element("a");
      t5 = text("La Cura");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      h4 = claim_element(div4_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t0 = claim_text(h4_nodes, "PRENSA");
      h4_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
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
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p = claim_element(div3_nodes, "P", {});
      var p_nodes = children(p);
      t4 = claim_text(p_nodes, "The Cure are an English rock band formed in Crawley, West Sussex, in 1978.[1][2][3] \n        The band members have changed several times, and guitarist, lead vocalist, and songwriter \n        Robert Smith is the only constant member. The band's debut album was Three Imaginary Boys (1979)\n         and this, along with several early singles, placed the band in the post-punk and new wave movements \n         that had sprung up in the United Kingdom. Beginning with their second album, Seventeen Seconds (1980),\n          the band adopted a new, increasingly dark and tormented style, which, together with Smith's stage look, \n          had a strong influence on the emerging genre of gothic rock as well as the subculture that eventually formed\n          around the genre. \n        ");
      a = claim_element(p_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "La Cura");
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
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
      attr_dev(div1, "class", " ");
      add_location(div1, file, 6, 4, 239);
      attr_dev(div2, "class", "grid md:grid-cols-2 gap-2 rounded-bl place-items-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div2, file, 2, 2, 39);
      attr_dev(a, "class", "a");
      attr_dev(a, "href", "https://en.wikipedia.org/wiki/The_Cure");
      add_location(a, file, 22, 8, 1137);
      add_location(p, file, 13, 4, 343);
      attr_dev(div3, "class", "bg-gray-200 dark:bg-dark-700 p-4 ");
      add_location(div3, file, 12, 2, 291);
      add_location(div4, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, h4);
      append_dev(h4, t0);
      append_dev(div4, t1);
      append_dev(div4, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div4, t3);
      append_dev(div4, div3);
      append_dev(div3, p);
      append_dev(p, t4);
      append_dev(p, a);
      append_dev(a, t5);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc3MuZDBiZTMwNDIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
