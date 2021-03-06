import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, F as text, f as space, g as claim_element, h as children, H as claim_text, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, n as insert_dev, a as append_dev, D as noop } from './client.405f2f7e.js';

/* src/routes/press.svelte generated by Svelte v3.24.0 */
const file = "src/routes/press.svelte";

function create_fragment(ctx) {
  let div5;
  let h4;
  let t0;
  let t1;
  let div3;
  let div0;
  let img;
  let img_src_value;
  let t2;
  let div1;
  let t3;
  let t4;
  let div2;
  let t5;
  let div4;
  let p;
  let t6;
  let a;
  let t7;
  const block = {
    c: function create() {
      div5 = element("div");
      h4 = element("h4");
      t0 = text("PRENSA");
      t1 = space();
      div3 = element("div");
      div0 = element("div");
      img = element("img");
      t2 = space();
      div1 = element("div");
      t3 = text("Claro que a medida que la masa de seguidores se iba haciendo más grande,\n      ya no alcanzaba con los buenos oficios como organizadora de la Negra Poli\n      (manager histórica de los Redondos y aún hoy pareja del guitarrista Skay\n      Beilinson) y para algunos conciertos puntuales y enormes debieron\n      asociarse con productores para asegurarse la logística, como hicieron con\n      Daniel Grinbank para los shows del año 2000 en River. Ya separado de los\n      Redondos, el Indio continuó con su independencia a cuestas, editó sus\n      propios discos.");
      t4 = space();
      div2 = element("div");
      t5 = space();
      div4 = element("div");
      p = element("p");
      t6 = text("The Cure are an English rock band formed in Crawley, West Sussex, in\n      1978.[1][2][3] The band members have changed several times, and guitarist,\n      lead vocalist, and songwriter Robert Smith is the only constant member.\n      The band's debut album was Three Imaginary Boys (1979) and this, along\n      with several early singles, placed the band in the post-punk and new wave\n      movements that had sprung up in the United Kingdom. Beginning with their\n      second album, Seventeen Seconds (1980), the band adopted a new,\n      increasingly dark and tormented style, which, together with Smith's stage\n      look, had a strong influence on the emerging genre of gothic rock as well\n      as the subculture that eventually formed around the genre.\n      ");
      a = element("a");
      t7 = text("La Cura");
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
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "Claro que a medida que la masa de seguidores se iba haciendo más grande,\n      ya no alcanzaba con los buenos oficios como organizadora de la Negra Poli\n      (manager histórica de los Redondos y aún hoy pareja del guitarrista Skay\n      Beilinson) y para algunos conciertos puntuales y enormes debieron\n      asociarse con productores para asegurarse la logística, como hicieron con\n      Daniel Grinbank para los shows del año 2000 en River. Ya separado de los\n      Redondos, el Indio continuó con su independencia a cuestas, editó sus\n      propios discos.");
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      children(div2).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      p = claim_element(div4_nodes, "P", {});
      var p_nodes = children(p);
      t6 = claim_text(p_nodes, "The Cure are an English rock band formed in Crawley, West Sussex, in\n      1978.[1][2][3] The band members have changed several times, and guitarist,\n      lead vocalist, and songwriter Robert Smith is the only constant member.\n      The band's debut album was Three Imaginary Boys (1979) and this, along\n      with several early singles, placed the band in the post-punk and new wave\n      movements that had sprung up in the United Kingdom. Beginning with their\n      second album, Seventeen Seconds (1980), the band adopted a new,\n      increasingly dark and tormented style, which, together with Smith's stage\n      look, had a strong influence on the emerging genre of gothic rock as well\n      as the subculture that eventually formed around the genre.\n      ");
      a = claim_element(p_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t7 = claim_text(a_nodes, "La Cura");
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h4, "class", "pb-8");
      add_location(h4, file, 1, 2, 8);
      if (img.src !== (img_src_value = "producciones.svg ")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "disc");
      attr_dev(img, "width", "300");
      attr_dev(img, "height", "auto");
      add_location(img, file, 5, 6, 178);
      attr_dev(div0, "class", "grid self-center");
      add_location(div0, file, 4, 4, 141);
      attr_dev(div1, "class", " grid self-center");
      add_location(div1, file, 7, 4, 262);
      add_location(div2, file, 17, 4, 876);
      attr_dev(div3, "class", "grid md:grid-cols-2 gap-4 rounded-bl place-items-center shadow-lg p-4  mt-10 mb-10");
      add_location(div3, file, 3, 2, 40);
      attr_dev(a, "class", "a");
      attr_dev(a, "href", "https://en.wikipedia.org/wiki/The_Cure");
      add_location(a, file, 32, 6, 1723);
      add_location(p, file, 21, 4, 948);
      attr_dev(div4, "class", "bg-gray-200 dark:bg-dark-700 p-4 ");
      add_location(div4, file, 20, 2, 896);
      add_location(div5, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, h4);
      append_dev(h4, t0);
      append_dev(div5, t1);
      append_dev(div5, div3);
      append_dev(div3, div0);
      append_dev(div0, img);
      append_dev(div3, t2);
      append_dev(div3, div1);
      append_dev(div1, t3);
      append_dev(div3, t4);
      append_dev(div3, div2);
      append_dev(div5, t5);
      append_dev(div5, div4);
      append_dev(div4, p);
      append_dev(p, t6);
      append_dev(p, a);
      append_dev(a, t7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc3MuZmE3ZGRhZTkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
