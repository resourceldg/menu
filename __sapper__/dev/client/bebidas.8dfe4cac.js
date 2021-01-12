import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, G as create_component, f as space, e as element, F as text, I as claim_component, k as claim_space, g as claim_element, h as children, H as claim_text, j as detach_dev, l as attr_dev, m as add_location, K as mount_component, n as insert_dev, a as append_dev, D as noop, t as transition_in, q as transition_out, L as destroy_component } from './client.1de1a69e.js';
import { M as MiniHero } from './MiniHero.dd7ec943.js';

/* src/routes/bebidas.svelte generated by Svelte v3.24.0 */
const file = "src/routes/bebidas.svelte";

function create_fragment(ctx) {
  let minihero;
  let t0;
  let h30;
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
  let h51;
  let t8;
  let t9;
  let div7;
  let div4;
  let img1;
  let img1_src_value;
  let t10;
  let div5;
  let t11;
  let t12;
  let div6;
  let h52;
  let t13;
  let t14;
  let h53;
  let t15;
  let t16;
  let div11;
  let div8;
  let img2;
  let img2_src_value;
  let t17;
  let div9;
  let t18;
  let t19;
  let div10;
  let h54;
  let t20;
  let t21;
  let h55;
  let t22;
  let t23;
  let h31;
  let t24;
  let t25;
  let div15;
  let div12;
  let img3;
  let img3_src_value;
  let t26;
  let div13;
  let t27;
  let t28;
  let div14;
  let h56;
  let t29;
  let t30;
  let div19;
  let div16;
  let img4;
  let img4_src_value;
  let t31;
  let div17;
  let t32;
  let t33;
  let div18;
  let h57;
  let t34;
  let t35;
  let div23;
  let div20;
  let img5;
  let img5_src_value;
  let t36;
  let div21;
  let t37;
  let t38;
  let div22;
  let h58;
  let t39;
  let current;
  minihero = new MiniHero({
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(minihero.$$.fragment);
      t0 = space();
      h30 = element("h3");
      t1 = text("Cervezas");
      t2 = space();
      div3 = element("div");
      div0 = element("div");
      img0 = element("img");
      t3 = space();
      div1 = element("div");
      t4 = text("La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa");
      t5 = space();
      div2 = element("div");
      h50 = element("h5");
      t6 = text("1/2 pinta $ 150");
      t7 = space();
      h51 = element("h5");
      t8 = text("Pinta $ 250");
      t9 = space();
      div7 = element("div");
      div4 = element("div");
      img1 = element("img");
      t10 = space();
      div5 = element("div");
      t11 = text("La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa");
      t12 = space();
      div6 = element("div");
      h52 = element("h5");
      t13 = text("1/2 pinta $ 150");
      t14 = space();
      h53 = element("h5");
      t15 = text("Pinta $ 250");
      t16 = space();
      div11 = element("div");
      div8 = element("div");
      img2 = element("img");
      t17 = space();
      div9 = element("div");
      t18 = text("La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa");
      t19 = space();
      div10 = element("div");
      h54 = element("h5");
      t20 = text("1/2 pinta $ 150");
      t21 = space();
      h55 = element("h5");
      t22 = text("Pinta $ 250");
      t23 = space();
      h31 = element("h3");
      t24 = text("Tragos");
      t25 = space();
      div15 = element("div");
      div12 = element("div");
      img3 = element("img");
      t26 = space();
      div13 = element("div");
      t27 = text("La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa.");
      t28 = space();
      div14 = element("div");
      h56 = element("h5");
      t29 = text("$ 250");
      t30 = space();
      div19 = element("div");
      div16 = element("div");
      img4 = element("img");
      t31 = space();
      div17 = element("div");
      t32 = text("La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa.");
      t33 = space();
      div18 = element("div");
      h57 = element("h5");
      t34 = text("$ 250");
      t35 = space();
      div23 = element("div");
      div20 = element("div");
      img5 = element("img");
      t36 = space();
      div21 = element("div");
      t37 = text("La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa.");
      t38 = space();
      div22 = element("div");
      h58 = element("h5");
      t39 = text("$ 250");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(minihero.$$.fragment, nodes);
      t0 = claim_space(nodes);
      h30 = claim_element(nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t1 = claim_text(h30_nodes, "Cervezas");
      h30_nodes.forEach(detach_dev);
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
        alt: true,
        width: true,
        height: true
      });
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa");
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
      t6 = claim_text(h50_nodes, "1/2 pinta $ 150");
      h50_nodes.forEach(detach_dev);
      t7 = claim_space(div2_nodes);
      h51 = claim_element(div2_nodes, "H5", {
        class: true
      });
      var h51_nodes = children(h51);
      t8 = claim_text(h51_nodes, "Pinta $ 250");
      h51_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(nodes);
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
      t10 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      t11 = claim_text(div5_nodes, "La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa");
      div5_nodes.forEach(detach_dev);
      t12 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      h52 = claim_element(div6_nodes, "H5", {
        class: true
      });
      var h52_nodes = children(h52);
      t13 = claim_text(h52_nodes, "1/2 pinta $ 150");
      h52_nodes.forEach(detach_dev);
      t14 = claim_space(div6_nodes);
      h53 = claim_element(div6_nodes, "H5", {
        class: true
      });
      var h53_nodes = children(h53);
      t15 = claim_text(h53_nodes, "Pinta $ 250");
      h53_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
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
      t17 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      t18 = claim_text(div9_nodes, "La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa");
      div9_nodes.forEach(detach_dev);
      t19 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      h54 = claim_element(div10_nodes, "H5", {
        class: true
      });
      var h54_nodes = children(h54);
      t20 = claim_text(h54_nodes, "1/2 pinta $ 150");
      h54_nodes.forEach(detach_dev);
      t21 = claim_space(div10_nodes);
      h55 = claim_element(div10_nodes, "H5", {
        class: true
      });
      var h55_nodes = children(h55);
      t22 = claim_text(h55_nodes, "Pinta $ 250");
      h55_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t23 = claim_space(nodes);
      h31 = claim_element(nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t24 = claim_text(h31_nodes, "Tragos");
      h31_nodes.forEach(detach_dev);
      t25 = claim_space(nodes);
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
      t26 = claim_space(div15_nodes);
      div13 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      t27 = claim_text(div13_nodes, "La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa.");
      div13_nodes.forEach(detach_dev);
      t28 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      h56 = claim_element(div14_nodes, "H5", {
        class: true
      });
      var h56_nodes = children(h56);
      t29 = claim_text(h56_nodes, "$ 250");
      h56_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      t30 = claim_space(nodes);
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
      t31 = claim_space(div19_nodes);
      div17 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      t32 = claim_text(div17_nodes, "La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa.");
      div17_nodes.forEach(detach_dev);
      t33 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      h57 = claim_element(div18_nodes, "H5", {
        class: true
      });
      var h57_nodes = children(h57);
      t34 = claim_text(h57_nodes, "$ 250");
      h57_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      t35 = claim_space(nodes);
      div23 = claim_element(nodes, "DIV", {
        class: true
      });
      var div23_nodes = children(div23);
      div20 = claim_element(div23_nodes, "DIV", {
        class: true
      });
      var div20_nodes = children(div20);
      img5 = claim_element(div20_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div20_nodes.forEach(detach_dev);
      t36 = claim_space(div23_nodes);
      div21 = claim_element(div23_nodes, "DIV", {
        class: true
      });
      var div21_nodes = children(div21);
      t37 = claim_text(div21_nodes, "La margarita es un cóctel compuesto por tequila, triple sec y jugo de lima o limón. A menudo se sirve con sal en el borde de la copa.");
      div21_nodes.forEach(detach_dev);
      t38 = claim_space(div23_nodes);
      div22 = claim_element(div23_nodes, "DIV", {
        class: true
      });
      var div22_nodes = children(div22);
      h58 = claim_element(div22_nodes, "H5", {
        class: true
      });
      var h58_nodes = children(h58);
      t39 = claim_text(h58_nodes, "$ 250");
      h58_nodes.forEach(detach_dev);
      div22_nodes.forEach(detach_dev);
      div23_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h30, "class", "text-xl");
      add_location(h30, file, 5, 0, 99);
      attr_dev(img0, "class", "rounded-full");
      if (img0.src !== (img0_src_value = "beret.jpg ")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "disc");
      attr_dev(img0, "width", "70");
      attr_dev(img0, "height", "70");
      add_location(img0, file, 9, 8, 278);
      attr_dev(div0, "class", "grid justify-center ");
      add_location(div0, file, 8, 4, 234);
      attr_dev(div1, "class", "grid col-span-2 justify-center");
      add_location(div1, file, 11, 4, 371);
      attr_dev(h50, "class", "text-lg");
      add_location(h50, file, 13, 8, 564);
      attr_dev(h51, "class", "text-lg");
      add_location(h51, file, 14, 8, 616);
      attr_dev(div2, "class", "grid justify-center");
      add_location(div2, file, 12, 4, 522);
      attr_dev(div3, "class", "grid grid-cols-1 md:grid-cols-4 gap-4  content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div3, file, 7, 0, 135);
      attr_dev(img1, "class", "rounded-full");
      if (img1.src !== (img1_src_value = "beret.jpg ")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "disc");
      attr_dev(img1, "width", "70");
      attr_dev(img1, "height", "70");
      add_location(img1, file, 19, 8, 816);
      attr_dev(div4, "class", "grid justify-center ");
      add_location(div4, file, 18, 4, 772);
      attr_dev(div5, "class", "grid col-span-2 justify-center");
      add_location(div5, file, 21, 4, 909);
      attr_dev(h52, "class", "text-lg");
      add_location(h52, file, 23, 8, 1102);
      attr_dev(h53, "class", "text-lg");
      add_location(h53, file, 24, 8, 1154);
      attr_dev(div6, "class", "grid justify-center");
      add_location(div6, file, 22, 4, 1060);
      attr_dev(div7, "class", "grid grid-cols-1 md:grid-cols-4 gap-4  content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div7, file, 17, 0, 673);
      attr_dev(img2, "class", "rounded-full");
      if (img2.src !== (img2_src_value = "beret.jpg ")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "disc");
      attr_dev(img2, "width", "70");
      attr_dev(img2, "height", "70");
      add_location(img2, file, 29, 8, 1354);
      attr_dev(div8, "class", "grid justify-center ");
      add_location(div8, file, 28, 4, 1310);
      attr_dev(div9, "class", "grid col-span-2 justify-center");
      add_location(div9, file, 31, 4, 1447);
      attr_dev(h54, "class", "text-lg");
      add_location(h54, file, 33, 8, 1640);
      attr_dev(h55, "class", "text-lg");
      add_location(h55, file, 34, 8, 1692);
      attr_dev(div10, "class", "grid justify-center");
      add_location(div10, file, 32, 4, 1598);
      attr_dev(div11, "class", "grid grid-cols-1 md:grid-cols-4 gap-4  content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div11, file, 27, 0, 1211);
      attr_dev(h31, "class", "text-xl");
      add_location(h31, file, 38, 0, 1750);
      attr_dev(img3, "class", "rounded-full");
      if (img3.src !== (img3_src_value = "drink.jpg ")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "disc");
      attr_dev(img3, "width", "70");
      attr_dev(img3, "height", "70");
      add_location(img3, file, 42, 8, 1927);
      attr_dev(div12, "class", "grid justify-center ");
      add_location(div12, file, 41, 4, 1883);
      attr_dev(div13, "class", "grid col-span-2 justify-center");
      add_location(div13, file, 44, 4, 2020);
      attr_dev(h56, "class", "text-lg");
      add_location(h56, file, 46, 8, 2253);
      attr_dev(div14, "class", "grid justify-center");
      add_location(div14, file, 45, 4, 2211);
      attr_dev(div15, "class", "grid grid-cols-1 md:grid-cols-4 gap-4  content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div15, file, 40, 0, 1784);
      attr_dev(img4, "class", "rounded-full");
      if (img4.src !== (img4_src_value = "drink.jpg ")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "disc");
      attr_dev(img4, "width", "70");
      attr_dev(img4, "height", "70");
      add_location(img4, file, 52, 8, 2457);
      attr_dev(div16, "class", "grid justify-center ");
      add_location(div16, file, 51, 4, 2413);
      attr_dev(div17, "class", "grid col-span-2 justify-center");
      add_location(div17, file, 54, 4, 2550);
      attr_dev(h57, "class", "text-lg");
      add_location(h57, file, 56, 8, 2782);
      attr_dev(div18, "class", "grid justify-center");
      add_location(div18, file, 55, 4, 2740);
      attr_dev(div19, "class", "grid grid-cols-1 md:grid-cols-4 gap-4  content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div19, file, 50, 0, 2314);
      attr_dev(img5, "class", "rounded-full");
      if (img5.src !== (img5_src_value = "drink.jpg ")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "disc");
      attr_dev(img5, "width", "70");
      attr_dev(img5, "height", "70");
      add_location(img5, file, 62, 8, 2986);
      attr_dev(div20, "class", "grid justify-center ");
      add_location(div20, file, 61, 4, 2942);
      attr_dev(div21, "class", "grid col-span-2 justify-center");
      add_location(div21, file, 64, 4, 3079);
      attr_dev(h58, "class", "text-lg");
      add_location(h58, file, 66, 8, 3312);
      attr_dev(div22, "class", "grid justify-center");
      add_location(div22, file, 65, 4, 3270);
      attr_dev(div23, "class", "grid grid-cols-1 md:grid-cols-4 gap-4  content-center  shadow-lg p-4 mt-10 mb-10");
      add_location(div23, file, 60, 0, 2843);
    },
    m: function mount(target, anchor) {
      mount_component(minihero, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, h30, anchor);
      append_dev(h30, t1);
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
      append_dev(div2, t7);
      append_dev(div2, h51);
      append_dev(h51, t8);
      insert_dev(target, t9, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, div4);
      append_dev(div4, img1);
      append_dev(div7, t10);
      append_dev(div7, div5);
      append_dev(div5, t11);
      append_dev(div7, t12);
      append_dev(div7, div6);
      append_dev(div6, h52);
      append_dev(h52, t13);
      append_dev(div6, t14);
      append_dev(div6, h53);
      append_dev(h53, t15);
      insert_dev(target, t16, anchor);
      insert_dev(target, div11, anchor);
      append_dev(div11, div8);
      append_dev(div8, img2);
      append_dev(div11, t17);
      append_dev(div11, div9);
      append_dev(div9, t18);
      append_dev(div11, t19);
      append_dev(div11, div10);
      append_dev(div10, h54);
      append_dev(h54, t20);
      append_dev(div10, t21);
      append_dev(div10, h55);
      append_dev(h55, t22);
      insert_dev(target, t23, anchor);
      insert_dev(target, h31, anchor);
      append_dev(h31, t24);
      insert_dev(target, t25, anchor);
      insert_dev(target, div15, anchor);
      append_dev(div15, div12);
      append_dev(div12, img3);
      append_dev(div15, t26);
      append_dev(div15, div13);
      append_dev(div13, t27);
      append_dev(div15, t28);
      append_dev(div15, div14);
      append_dev(div14, h56);
      append_dev(h56, t29);
      insert_dev(target, t30, anchor);
      insert_dev(target, div19, anchor);
      append_dev(div19, div16);
      append_dev(div16, img4);
      append_dev(div19, t31);
      append_dev(div19, div17);
      append_dev(div17, t32);
      append_dev(div19, t33);
      append_dev(div19, div18);
      append_dev(div18, h57);
      append_dev(h57, t34);
      insert_dev(target, t35, anchor);
      insert_dev(target, div23, anchor);
      append_dev(div23, div20);
      append_dev(div20, img5);
      append_dev(div23, t36);
      append_dev(div23, div21);
      append_dev(div21, t37);
      append_dev(div23, t38);
      append_dev(div23, div22);
      append_dev(div22, h58);
      append_dev(h58, t39);
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
      if (detaching) detach_dev(h30);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div3);
      if (detaching) detach_dev(t9);
      if (detaching) detach_dev(div7);
      if (detaching) detach_dev(t16);
      if (detaching) detach_dev(div11);
      if (detaching) detach_dev(t23);
      if (detaching) detach_dev(h31);
      if (detaching) detach_dev(t25);
      if (detaching) detach_dev(div15);
      if (detaching) detach_dev(t30);
      if (detaching) detach_dev(div19);
      if (detaching) detach_dev(t35);
      if (detaching) detach_dev(div23);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Bebidas> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Bebidas", $$slots, []);

  $$self.$capture_state = () => ({
    MiniHero
  });

  return [];
}

class Bebidas extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Bebidas",
      options,
      id: create_fragment.name
    });
  }

}

export default Bebidas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmViaWRhcy44ZGZlNGNhYy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
