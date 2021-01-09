import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, E as text, f as space, g as claim_element, h as children, F as claim_text, j as detach_dev, k as claim_space, m as add_location, l as attr_dev, n as insert_dev, a as append_dev, D as noop } from './client.1a22e570.js';

/* src/routes/playroom.svelte generated by Svelte v3.24.0 */
const file = "src/routes/playroom.svelte";

function create_fragment(ctx) {
  let h3;
  let t0;
  let t1;
  let div3;
  let div0;
  let img0;
  let img0_src_value;
  let t2;
  let div1;
  let t3;
  let t4;
  let div2;
  let img1;
  let img1_src_value;
  const block = {
    c: function create() {
      h3 = element("h3");
      t0 = text("Escuchar trucks...");
      t1 = space();
      div3 = element("div");
      div0 = element("div");
      img0 = element("img");
      t2 = space();
      div1 = element("div");
      t3 = text("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum");
      t4 = space();
      div2 = element("div");
      img1 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Escuchar trucks...");
      h3_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum");
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      img1 = claim_element(div2_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h3, file, 3, 0, 22);
      if (img0.src !== (img0_src_value = "disc.jpg ")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "disc");
      add_location(img0, file, 6, 42, 190);
      attr_dev(div0, "class", "grid justify-self-start");
      add_location(div0, file, 6, 4, 152);
      attr_dev(div1, "class", "grid cols-span-2 justify-self-center");
      add_location(div1, file, 7, 4, 233);
      if (img1.src !== (img1_src_value = "icon.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "play icon");
      attr_dev(img1, "width", "70");
      attr_dev(img1, "height", "70");
      add_location(img1, file, 8, 39, 396);
      attr_dev(div2, "class", "grid justify-self-end");
      add_location(div2, file, 8, 4, 361);
      attr_dev(div3, "class", "grid md:grid-cols-4 gap-4 rounded-bl place-items-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div3, file, 5, 0, 51);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      append_dev(h3, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, div0);
      append_dev(div0, img0);
      append_dev(div3, t2);
      append_dev(div3, div1);
      append_dev(div1, t3);
      append_dev(div3, t4);
      append_dev(div3, div2);
      append_dev(div2, img1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h3);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div3);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Playroom> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Playroom", $$slots, []);
  return [];
}

class Playroom extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Playroom",
      options,
      id: create_fragment.name
    });
  }

}

export default Playroom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheXJvb20uZWY1Y2EwOWEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==