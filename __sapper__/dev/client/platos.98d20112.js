import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, G as create_component, f as space, e as element, F as text, I as claim_component, k as claim_space, g as claim_element, h as children, H as claim_text, j as detach_dev, l as attr_dev, m as add_location, K as mount_component, n as insert_dev, a as append_dev, D as noop, t as transition_in, q as transition_out, L as destroy_component } from './client.405f2f7e.js';
import { M as MiniHero } from './MiniHero.36c819f0.js';

/* src/routes/platos.svelte generated by Svelte v3.24.0 */
const file = "src/routes/platos.svelte";

function create_fragment(ctx) {
  let minihero;
  let t0;
  let h3;
  let t1;
  let t2;
  let div3;
  let div0;
  let img0;
  let img0_src_value;
  let t3;
  let div1;
  let t4;
  let t5;
  let div2;
  let h50;
  let t6;
  let t7;
  let div7;
  let div4;
  let img1;
  let img1_src_value;
  let t8;
  let div5;
  let t9;
  let t10;
  let div6;
  let h51;
  let t11;
  let t12;
  let div11;
  let div8;
  let img2;
  let img2_src_value;
  let t13;
  let div9;
  let t14;
  let t15;
  let div10;
  let h52;
  let t16;
  let t17;
  let div15;
  let div12;
  let img3;
  let img3_src_value;
  let t18;
  let div13;
  let t19;
  let t20;
  let div14;
  let h53;
  let t21;
  let t22;
  let div19;
  let div16;
  let img4;
  let img4_src_value;
  let t23;
  let div17;
  let t24;
  let t25;
  let div18;
  let h54;
  let t26;
  let current;
  minihero = new MiniHero({
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(minihero.$$.fragment);
      t0 = space();
      h3 = element("h3");
      t1 = text("Nuestras delicias...");
      t2 = space();
      div3 = element("div");
      div0 = element("div");
      img0 = element("img");
      t3 = space();
      div1 = element("div");
      t4 = text("El burrito o burrito de harina1​ es un plato de origen mexicano que consiste en una tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles.");
      t5 = space();
      div2 = element("div");
      h50 = element("h5");
      t6 = text("$ 750");
      t7 = space();
      div7 = element("div");
      div4 = element("div");
      img1 = element("img");
      t8 = space();
      div5 = element("div");
      t9 = text("Las papas fritas o patatas fritas, también conocidas como papas a la francesa o patatas a la francesa, son las patatas que se preparan cortándose en rodajas o en forma de bastones y friéndolas en aceite caliente");
      t10 = space();
      div6 = element("div");
      h51 = element("h5");
      t11 = text("$ 450");
      t12 = space();
      div11 = element("div");
      div8 = element("div");
      img2 = element("img");
      t13 = space();
      div9 = element("div");
      t14 = text("Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.");
      t15 = space();
      div10 = element("div");
      h52 = element("h5");
      t16 = text("$ 750");
      t17 = space();
      div15 = element("div");
      div12 = element("div");
      img3 = element("img");
      t18 = space();
      div13 = element("div");
      t19 = text("El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      t20 = space();
      div14 = element("div");
      h53 = element("h5");
      t21 = text("$ 1250");
      t22 = space();
      div19 = element("div");
      div16 = element("div");
      img4 = element("img");
      t23 = space();
      div17 = element("div");
      t24 = text("El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      t25 = space();
      div18 = element("div");
      h54 = element("h5");
      t26 = text("$ 1250");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(minihero.$$.fragment, nodes);
      t0 = claim_space(nodes);
      h3 = claim_element(nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t1 = claim_text(h3_nodes, "Nuestras delicias...");
      h3_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "El burrito o burrito de harina1​ es un plato de origen mexicano que consiste en una tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles.");
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h50 = claim_element(div2_nodes, "H5", {
        class: true
      });
      var h50_nodes = children(h50);
      t6 = claim_text(h50_nodes, "$ 750");
      h50_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div4 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      img1 = claim_element(div4_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div4_nodes.forEach(detach_dev);
      t8 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t9 = claim_text(div5_nodes, "Las papas fritas o patatas fritas, también conocidas como papas a la francesa o patatas a la francesa, son las patatas que se preparan cortándose en rodajas o en forma de bastones y friéndolas en aceite caliente");
      div5_nodes.forEach(detach_dev);
      t10 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      h51 = claim_element(div6_nodes, "H5", {
        class: true
      });
      var h51_nodes = children(h51);
      t11 = claim_text(h51_nodes, "$ 450");
      h51_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t12 = claim_space(nodes);
      div11 = claim_element(nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div8 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      img2 = claim_element(div8_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div8_nodes.forEach(detach_dev);
      t13 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      t14 = claim_text(div9_nodes, "Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.");
      div9_nodes.forEach(detach_dev);
      t15 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      h52 = claim_element(div10_nodes, "H5", {
        class: true
      });
      var h52_nodes = children(h52);
      t16 = claim_text(h52_nodes, "$ 750");
      h52_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t17 = claim_space(nodes);
      div15 = claim_element(nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      div12 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      img3 = claim_element(div12_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div12_nodes.forEach(detach_dev);
      t18 = claim_space(div15_nodes);
      div13 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      t19 = claim_text(div13_nodes, "El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      div13_nodes.forEach(detach_dev);
      t20 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      h53 = claim_element(div14_nodes, "H5", {
        class: true
      });
      var h53_nodes = children(h53);
      t21 = claim_text(h53_nodes, "$ 1250");
      h53_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      t22 = claim_space(nodes);
      div19 = claim_element(nodes, "DIV", {
        class: true
      });
      var div19_nodes = children(div19);
      div16 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      img4 = claim_element(div16_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div16_nodes.forEach(detach_dev);
      t23 = claim_space(div19_nodes);
      div17 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      t24 = claim_text(div17_nodes, "El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      div17_nodes.forEach(detach_dev);
      t25 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      h54 = claim_element(div18_nodes, "H5", {
        class: true
      });
      var h54_nodes = children(h54);
      t26 = claim_text(h54_nodes, "$ 1250");
      h54_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h3, "class", "text-xl");
      add_location(h3, file, 6, 0, 90);
      attr_dev(img0, "class", "rounded-full w-40 h-40 w-40 h-40");
      if (img0.src !== (img0_src_value = "burrito.jpg ")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "disc");
      add_location(img0, file, 10, 8, 290);
      attr_dev(div0, "class", "grid justify-center ");
      add_location(div0, file, 9, 4, 246);
      attr_dev(div1, "class", "grid col-span-2 justify-center");
      add_location(div1, file, 12, 4, 383);
      attr_dev(h50, "class", "text-lg");
      add_location(h50, file, 14, 8, 695);
      attr_dev(div2, "class", "grid justify-center");
      add_location(div2, file, 13, 4, 653);
      attr_dev(div3, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div3, file, 8, 0, 137);
      attr_dev(img1, "class", "rounded-full w-40 h-40");
      if (img1.src !== (img1_src_value = "bowl.jpg ")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "disc");
      attr_dev(img1, "width", "150");
      attr_dev(img1, "height", "150");
      add_location(img1, file, 19, 8, 900);
      attr_dev(div4, "class", "grid justify-center ");
      add_location(div4, file, 18, 4, 856);
      attr_dev(div5, "class", "grid col-span-2 justify-center");
      add_location(div5, file, 21, 4, 1004);
      attr_dev(h51, "class", "text-lg");
      add_location(h51, file, 23, 8, 1313);
      attr_dev(div6, "class", "grid justify-center");
      add_location(div6, file, 22, 4, 1271);
      attr_dev(div7, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div7, file, 17, 0, 747);
      attr_dev(img2, "class", "rounded-full w-40 h-40");
      if (img2.src !== (img2_src_value = "hamburger.jpg ")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "disc");
      attr_dev(img2, "width", "150");
      attr_dev(img2, "height", "150");
      add_location(img2, file, 31, 8, 1527);
      attr_dev(div8, "class", "grid justify-center ");
      add_location(div8, file, 30, 4, 1483);
      attr_dev(div9, "class", "grid col-span-2 justify-center");
      add_location(div9, file, 33, 4, 1636);
      attr_dev(h52, "class", "text-lg");
      add_location(h52, file, 35, 8, 1927);
      attr_dev(div10, "class", "grid justify-center");
      add_location(div10, file, 34, 4, 1885);
      attr_dev(div11, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div11, file, 29, 0, 1374);
      attr_dev(img3, "class", "rounded-full w-40 h-40");
      if (img3.src !== (img3_src_value = "beef.jpg ")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "disc");
      attr_dev(img3, "width", "150");
      attr_dev(img3, "height", "150");
      add_location(img3, file, 41, 8, 2141);
      attr_dev(div12, "class", "grid justify-center ");
      add_location(div12, file, 40, 4, 2097);
      attr_dev(div13, "class", "grid col-span-2 justify-center");
      add_location(div13, file, 43, 4, 2245);
      attr_dev(h53, "class", "text-lg");
      add_location(h53, file, 45, 8, 2535);
      attr_dev(div14, "class", "grid justify-center");
      add_location(div14, file, 44, 4, 2493);
      attr_dev(div15, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div15, file, 39, 0, 1988);
      attr_dev(img4, "class", "rounded-full w-40 h-40");
      if (img4.src !== (img4_src_value = "steak.jpg ")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "disc");
      attr_dev(img4, "width", "150");
      attr_dev(img4, "height", "150");
      add_location(img4, file, 51, 8, 2750);
      attr_dev(div16, "class", "grid justify-center ");
      add_location(div16, file, 50, 4, 2706);
      attr_dev(div17, "class", "grid col-span-2 justify-center");
      add_location(div17, file, 53, 4, 2855);
      attr_dev(h54, "class", "text-lg");
      add_location(h54, file, 55, 8, 3146);
      attr_dev(div18, "class", "grid justify-center");
      add_location(div18, file, 54, 4, 3104);
      attr_dev(div19, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div19, file, 49, 0, 2597);
    },
    m: function mount(target, anchor) {
      mount_component(minihero, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, h3, anchor);
      append_dev(h3, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, div0);
      append_dev(div0, img0);
      append_dev(div3, t3);
      append_dev(div3, div1);
      append_dev(div1, t4);
      append_dev(div3, t5);
      append_dev(div3, div2);
      append_dev(div2, h50);
      append_dev(h50, t6);
      insert_dev(target, t7, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, div4);
      append_dev(div4, img1);
      append_dev(div7, t8);
      append_dev(div7, div5);
      append_dev(div5, t9);
      append_dev(div7, t10);
      append_dev(div7, div6);
      append_dev(div6, h51);
      append_dev(h51, t11);
      insert_dev(target, t12, anchor);
      insert_dev(target, div11, anchor);
      append_dev(div11, div8);
      append_dev(div8, img2);
      append_dev(div11, t13);
      append_dev(div11, div9);
      append_dev(div9, t14);
      append_dev(div11, t15);
      append_dev(div11, div10);
      append_dev(div10, h52);
      append_dev(h52, t16);
      insert_dev(target, t17, anchor);
      insert_dev(target, div15, anchor);
      append_dev(div15, div12);
      append_dev(div12, img3);
      append_dev(div15, t18);
      append_dev(div15, div13);
      append_dev(div13, t19);
      append_dev(div15, t20);
      append_dev(div15, div14);
      append_dev(div14, h53);
      append_dev(h53, t21);
      insert_dev(target, t22, anchor);
      insert_dev(target, div19, anchor);
      append_dev(div19, div16);
      append_dev(div16, img4);
      append_dev(div19, t23);
      append_dev(div19, div17);
      append_dev(div17, t24);
      append_dev(div19, t25);
      append_dev(div19, div18);
      append_dev(div18, h54);
      append_dev(h54, t26);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(minihero.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(minihero.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(minihero, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h3);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div3);
      if (detaching) detach_dev(t7);
      if (detaching) detach_dev(div7);
      if (detaching) detach_dev(t12);
      if (detaching) detach_dev(div11);
      if (detaching) detach_dev(t17);
      if (detaching) detach_dev(div15);
      if (detaching) detach_dev(t22);
      if (detaching) detach_dev(div19);
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

function instance($$self, $$props, $$invalidate) {
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Platos> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Platos", $$slots, []);

  $$self.$capture_state = () => ({
    MiniHero
  });

  return [];
}

class Platos extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Platos",
      options,
      id: create_fragment.name
    });
  }

}

export default Platos;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdG9zLjk4ZDIwMTEyLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
