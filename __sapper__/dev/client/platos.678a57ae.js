import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, F as text, f as space, g as claim_element, h as children, H as claim_text, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, n as insert_dev, a as append_dev, D as noop } from './client.bb9a7269.js';

/* src/routes/platos.svelte generated by Svelte v3.24.0 */
const file = "src/routes/platos.svelte";

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
  let h50;
  let t5;
  let t6;
  let div7;
  let div4;
  let img1;
  let img1_src_value;
  let t7;
  let div5;
  let t8;
  let t9;
  let div6;
  let h51;
  let t10;
  let t11;
  let div11;
  let div8;
  let img2;
  let img2_src_value;
  let t12;
  let div9;
  let t13;
  let t14;
  let div10;
  let h52;
  let t15;
  let t16;
  let div15;
  let div12;
  let img3;
  let img3_src_value;
  let t17;
  let div13;
  let t18;
  let t19;
  let div14;
  let h53;
  let t20;
  let t21;
  let div19;
  let div16;
  let img4;
  let img4_src_value;
  let t22;
  let div17;
  let t23;
  let t24;
  let div18;
  let h54;
  let t25;
  const block = {
    c: function create() {
      h3 = element("h3");
      t0 = text("Nuestras delicias...");
      t1 = space();
      div3 = element("div");
      div0 = element("div");
      img0 = element("img");
      t2 = space();
      div1 = element("div");
      t3 = text("El burrito o burrito de harina1​ es un plato de origen mexicano que consiste en una tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles.");
      t4 = space();
      div2 = element("div");
      h50 = element("h5");
      t5 = text("$ 750");
      t6 = space();
      div7 = element("div");
      div4 = element("div");
      img1 = element("img");
      t7 = space();
      div5 = element("div");
      t8 = text("Las papas fritas o patatas fritas, también conocidas como papas a la francesa o patatas a la francesa, son las patatas que se preparan cortándose en rodajas o en forma de bastones y friéndolas en aceite caliente");
      t9 = space();
      div6 = element("div");
      h51 = element("h5");
      t10 = text("$ 450");
      t11 = space();
      div11 = element("div");
      div8 = element("div");
      img2 = element("img");
      t12 = space();
      div9 = element("div");
      t13 = text("Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.");
      t14 = space();
      div10 = element("div");
      h52 = element("h5");
      t15 = text("$ 750");
      t16 = space();
      div15 = element("div");
      div12 = element("div");
      img3 = element("img");
      t17 = space();
      div13 = element("div");
      t18 = text("El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      t19 = space();
      div14 = element("div");
      h53 = element("h5");
      t20 = text("$ 1250");
      t21 = space();
      div19 = element("div");
      div16 = element("div");
      img4 = element("img");
      t22 = space();
      div17 = element("div");
      t23 = text("El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      t24 = space();
      div18 = element("div");
      h54 = element("h5");
      t25 = text("$ 1250");
      this.h();
    },
    l: function claim(nodes) {
      h3 = claim_element(nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "Nuestras delicias...");
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
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "El burrito o burrito de harina1​ es un plato de origen mexicano que consiste en una tortilla de harina de trigo enrollada en forma cilíndrica rellena de diversos ingredientes y que se suele acompañar de frijoles.");
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h50 = claim_element(div2_nodes, "H5", {
        class: true
      });
      var h50_nodes = children(h50);
      t5 = claim_text(h50_nodes, "$ 750");
      h50_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(nodes);
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
      t7 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t8 = claim_text(div5_nodes, "Las papas fritas o patatas fritas, también conocidas como papas a la francesa o patatas a la francesa, son las patatas que se preparan cortándose en rodajas o en forma de bastones y friéndolas en aceite caliente");
      div5_nodes.forEach(detach_dev);
      t9 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      h51 = claim_element(div6_nodes, "H5", {
        class: true
      });
      var h51_nodes = children(h51);
      t10 = claim_text(h51_nodes, "$ 450");
      h51_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t11 = claim_space(nodes);
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
      t12 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      t13 = claim_text(div9_nodes, "Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal, aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse.");
      div9_nodes.forEach(detach_dev);
      t14 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      h52 = claim_element(div10_nodes, "H5", {
        class: true
      });
      var h52_nodes = children(h52);
      t15 = claim_text(h52_nodes, "$ 750");
      h52_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
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
      t17 = claim_space(div15_nodes);
      div13 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      t18 = claim_text(div13_nodes, "El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      div13_nodes.forEach(detach_dev);
      t19 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      h53 = claim_element(div14_nodes, "H5", {
        class: true
      });
      var h53_nodes = children(h53);
      t20 = claim_text(h53_nodes, "$ 1250");
      h53_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      t21 = claim_space(nodes);
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
      t22 = claim_space(div19_nodes);
      div17 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      t23 = claim_text(div17_nodes, "El lomo es un corte de carne de la región dorsal de los animales de matadero. Contiene un conjunto de músculos que se encuentran a los lados de la columna vertebral de los animales vertebrados");
      div17_nodes.forEach(detach_dev);
      t24 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      h54 = claim_element(div18_nodes, "H5", {
        class: true
      });
      var h54_nodes = children(h54);
      t25 = claim_text(h54_nodes, "$ 1250");
      h54_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h3, "class", "text-xl");
      add_location(h3, file, 4, 0, 23);
      attr_dev(img0, "class", "rounded-full w-40 h-40 w-40 h-40");
      if (img0.src !== (img0_src_value = "burrito.jpg ")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "disc");
      add_location(img0, file, 8, 8, 223);
      attr_dev(div0, "class", "grid justify-center ");
      add_location(div0, file, 7, 4, 179);
      attr_dev(div1, "class", "grid col-span-2 justify-center");
      add_location(div1, file, 10, 4, 316);
      attr_dev(h50, "class", "text-lg");
      add_location(h50, file, 12, 8, 628);
      attr_dev(div2, "class", "grid justify-center");
      add_location(div2, file, 11, 4, 586);
      attr_dev(div3, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div3, file, 6, 0, 70);
      attr_dev(img1, "class", "rounded-full w-40 h-40");
      if (img1.src !== (img1_src_value = "bowl.jpg ")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "disc");
      attr_dev(img1, "width", "150");
      attr_dev(img1, "height", "150");
      add_location(img1, file, 17, 8, 833);
      attr_dev(div4, "class", "grid justify-center ");
      add_location(div4, file, 16, 4, 789);
      attr_dev(div5, "class", "grid col-span-2 justify-center");
      add_location(div5, file, 19, 4, 937);
      attr_dev(h51, "class", "text-lg");
      add_location(h51, file, 21, 8, 1246);
      attr_dev(div6, "class", "grid justify-center");
      add_location(div6, file, 20, 4, 1204);
      attr_dev(div7, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div7, file, 15, 0, 680);
      attr_dev(img2, "class", "rounded-full w-40 h-40");
      if (img2.src !== (img2_src_value = "hamburger.jpg ")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "disc");
      attr_dev(img2, "width", "150");
      attr_dev(img2, "height", "150");
      add_location(img2, file, 29, 8, 1460);
      attr_dev(div8, "class", "grid justify-center ");
      add_location(div8, file, 28, 4, 1416);
      attr_dev(div9, "class", "grid col-span-2 justify-center");
      add_location(div9, file, 31, 4, 1569);
      attr_dev(h52, "class", "text-lg");
      add_location(h52, file, 33, 8, 1860);
      attr_dev(div10, "class", "grid justify-center");
      add_location(div10, file, 32, 4, 1818);
      attr_dev(div11, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div11, file, 27, 0, 1307);
      attr_dev(img3, "class", "rounded-full w-40 h-40");
      if (img3.src !== (img3_src_value = "beef.jpg ")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "disc");
      attr_dev(img3, "width", "150");
      attr_dev(img3, "height", "150");
      add_location(img3, file, 39, 8, 2074);
      attr_dev(div12, "class", "grid justify-center ");
      add_location(div12, file, 38, 4, 2030);
      attr_dev(div13, "class", "grid col-span-2 justify-center");
      add_location(div13, file, 41, 4, 2178);
      attr_dev(h53, "class", "text-lg");
      add_location(h53, file, 43, 8, 2468);
      attr_dev(div14, "class", "grid justify-center");
      add_location(div14, file, 42, 4, 2426);
      attr_dev(div15, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div15, file, 37, 0, 1921);
      attr_dev(img4, "class", "rounded-full w-40 h-40");
      if (img4.src !== (img4_src_value = "steak.jpg ")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "disc");
      attr_dev(img4, "width", "150");
      attr_dev(img4, "height", "150");
      add_location(img4, file, 49, 8, 2683);
      attr_dev(div16, "class", "grid justify-center ");
      add_location(div16, file, 48, 4, 2639);
      attr_dev(div17, "class", "grid col-span-2 justify-center");
      add_location(div17, file, 51, 4, 2788);
      attr_dev(h54, "class", "text-lg");
      add_location(h54, file, 53, 8, 3079);
      attr_dev(div18, "class", "grid justify-center");
      add_location(div18, file, 52, 4, 3037);
      attr_dev(div19, "class", "grid grid-cols-1 md:grid-cols-4 gap-4 rounded-bl content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div19, file, 47, 0, 2530);
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
      append_dev(div2, h50);
      append_dev(h50, t5);
      insert_dev(target, t6, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, div4);
      append_dev(div4, img1);
      append_dev(div7, t7);
      append_dev(div7, div5);
      append_dev(div5, t8);
      append_dev(div7, t9);
      append_dev(div7, div6);
      append_dev(div6, h51);
      append_dev(h51, t10);
      insert_dev(target, t11, anchor);
      insert_dev(target, div11, anchor);
      append_dev(div11, div8);
      append_dev(div8, img2);
      append_dev(div11, t12);
      append_dev(div11, div9);
      append_dev(div9, t13);
      append_dev(div11, t14);
      append_dev(div11, div10);
      append_dev(div10, h52);
      append_dev(h52, t15);
      insert_dev(target, t16, anchor);
      insert_dev(target, div15, anchor);
      append_dev(div15, div12);
      append_dev(div12, img3);
      append_dev(div15, t17);
      append_dev(div15, div13);
      append_dev(div13, t18);
      append_dev(div15, t19);
      append_dev(div15, div14);
      append_dev(div14, h53);
      append_dev(h53, t20);
      insert_dev(target, t21, anchor);
      insert_dev(target, div19, anchor);
      append_dev(div19, div16);
      append_dev(div16, img4);
      append_dev(div19, t22);
      append_dev(div19, div17);
      append_dev(div17, t23);
      append_dev(div19, t24);
      append_dev(div19, div18);
      append_dev(div18, h54);
      append_dev(h54, t25);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h3);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div3);
      if (detaching) detach_dev(t6);
      if (detaching) detach_dev(div7);
      if (detaching) detach_dev(t11);
      if (detaching) detach_dev(div11);
      if (detaching) detach_dev(t16);
      if (detaching) detach_dev(div15);
      if (detaching) detach_dev(t21);
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

function instance($$self, $$props) {
  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Platos> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Platos", $$slots, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdG9zLjY3OGE1N2FlLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
