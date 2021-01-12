import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, F as text, f as space, g as claim_element, h as children, G as claim_text, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, n as insert_dev, a as append_dev, D as noop } from './client.0e1334e2.js';

/* src/components/MiniHero.svelte generated by Svelte v3.24.0 */
const file = "src/components/MiniHero.svelte";

function create_fragment(ctx) {
  let div2;
  let div0;
  let a;
  let button;
  let t0;
  let t1;
  let div1;
  let p;
  let t2;
  const block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      a = element("a");
      button = element("button");
      t0 = text("volver");
      t1 = space();
      div1 = element("div");
      p = element("p");
      t2 = text("Hey! es una gran Demo. Hacé click en volver para obtenter tu menú o catálogo digital");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      button = claim_element(a_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, "volver");
      button_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Hey! es una gran Demo. Hacé click en volver para obtenter tu menú o catálogo digital");
      p_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "rounded-lg p-4 transition duration-500 ease-in-out \n            bg-blue-600 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 ...");
      add_location(button, file, 4, 12, 262);
      attr_dev(a, "href", "https://ofertaweb.com.ar/?utm_source=demo1&utm_medium=btn%20minihero&utm_campaign=getting%20started");
      add_location(a, file, 3, 8, 139);
      attr_dev(div0, "class", "grid self-center justify-center");
      add_location(div0, file, 2, 4, 85);
      attr_dev(p, "class", "text-xs");
      add_location(p, file, 10, 8, 539);
      attr_dev(div1, "class", "grid self-center justify-center");
      add_location(div1, file, 9, 4, 485);
      attr_dev(div2, "class", " grid grid-cols-2  h-30 content-center border-solid border-2");
      add_location(div2, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, a);
      append_dev(a, button);
      append_dev(button, t0);
      append_dev(div2, t1);
      append_dev(div2, div1);
      append_dev(div1, p);
      append_dev(p, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MiniHero> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("MiniHero", $$slots, []);
  return [];
}

class MiniHero extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "MiniHero",
      options,
      id: create_fragment.name
    });
  }

}

export { MiniHero as M };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWluaUhlcm8uZmJjODJiMTAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
