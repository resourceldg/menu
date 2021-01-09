import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, H as text, f as space, g as claim_element, h as children, J as claim_text, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, n as insert_dev, a as append_dev, D as noop } from './client.bd9f67e2.js';

/* src/routes/press.svelte generated by Svelte v3.24.0 */
const file = "src/routes/press.svelte";

function create_fragment(ctx) {
  let div5;
  let h4;
  let t0;
  let t1;
  let p;
  let t2;
  let a;
  let t3;
  let t4;
  let div4;
  let h6;
  let t5;
  let t6;
  let div0;
  let t7;
  let t8;
  let div1;
  let t9;
  let t10;
  let div2;
  let t11;
  let t12;
  let div3;
  let t13;
  let t14;
  let small;
  let t15;
  const block = {
    c: function create() {
      div5 = element("div");
      h4 = element("h4");
      t0 = text("PRENSA");
      t1 = space();
      p = element("p");
      t2 = text("H1-h6, subtitle, body and caption as well as their respected classes (.h1,\n    .h2...) use Material design\n    ");
      a = element("a");
      t3 = text("type scale");
      t4 = space();
      div4 = element("div");
      h6 = element("h6");
      t5 = text(".h6 header 6");
      t6 = space();
      div0 = element("div");
      t7 = text(".subtitle-1");
      t8 = space();
      div1 = element("div");
      t9 = text(".subtitle-2");
      t10 = space();
      div2 = element("div");
      t11 = text(".body-1");
      t12 = space();
      div3 = element("div");
      t13 = text(".body-2");
      t14 = space();
      small = element("small");
      t15 = text(".caption");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {});
      var div5_nodes = children(div5);
      h4 = claim_element(div5_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t0 = claim_text(h4_nodes, "PRENSA");
      h4_nodes.forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      p = claim_element(div5_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "H1-h6, subtitle, body and caption as well as their respected classes (.h1,\n    .h2...) use Material design\n    ");
      a = claim_element(p_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "type scale");
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h6 = claim_element(div4_nodes, "H6", {
        class: true
      });
      var h6_nodes = children(h6);
      t5 = claim_text(h6_nodes, ".h6 header 6");
      h6_nodes.forEach(detach_dev);
      t6 = claim_space(div4_nodes);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t7 = claim_text(div0_nodes, ".subtitle-1");
      div0_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t9 = claim_text(div1_nodes, ".subtitle-2");
      div1_nodes.forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t11 = claim_text(div2_nodes, ".body-1");
      div2_nodes.forEach(detach_dev);
      t12 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      t13 = claim_text(div3_nodes, ".body-2");
      div3_nodes.forEach(detach_dev);
      t14 = claim_space(div4_nodes);
      small = claim_element(div4_nodes, "SMALL", {});
      var small_nodes = children(small);
      t15 = claim_text(small_nodes, ".caption");
      small_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h4, "class", "pb-8");
      add_location(h4, file, 1, 2, 8);
      attr_dev(a, "class", "a");
      attr_dev(a, "href", "https://material.io/design/typography/the-type-system.html#type-scale");
      add_location(a, file, 5, 4, 158);
      add_location(p, file, 2, 2, 39);
      attr_dev(h6, "class", "mb-3 mt-6");
      add_location(h6, file, 13, 4, 356);
      attr_dev(div0, "class", "subtitle-1");
      add_location(div0, file, 14, 4, 400);
      attr_dev(div1, "class", "subtitle-2");
      add_location(div1, file, 15, 4, 446);
      attr_dev(div2, "class", "body-1");
      add_location(div2, file, 16, 4, 492);
      attr_dev(div3, "class", "body-2");
      add_location(div3, file, 17, 4, 530);
      add_location(small, file, 18, 4, 568);
      attr_dev(div4, "class", "bg-gray-200 dark:bg-dark-700 p-4 my-4");
      add_location(div4, file, 11, 2, 296);
      add_location(div5, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, h4);
      append_dev(h4, t0);
      append_dev(div5, t1);
      append_dev(div5, p);
      append_dev(p, t2);
      append_dev(p, a);
      append_dev(a, t3);
      append_dev(div5, t4);
      append_dev(div5, div4);
      append_dev(div4, h6);
      append_dev(h6, t5);
      append_dev(div4, t6);
      append_dev(div4, div0);
      append_dev(div0, t7);
      append_dev(div4, t8);
      append_dev(div4, div1);
      append_dev(div1, t9);
      append_dev(div4, t10);
      append_dev(div4, div2);
      append_dev(div2, t11);
      append_dev(div4, t12);
      append_dev(div4, div3);
      append_dev(div3, t13);
      append_dev(div4, t14);
      append_dev(div4, small);
      append_dev(small, t15);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc3MuNGZkOTI1NzcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==