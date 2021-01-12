import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, a as append_dev, v as validate_slots, f as space, g as claim_element, h as children, j as detach_dev, k as claim_space, l as attr_dev, m as add_location, y as null_to_empty, n as insert_dev, p as listen_dev, I as prevent_default, D as noop, r as run_all } from './client.5efcce0b.js';

/* src/components/Share.svelte generated by Svelte v3.24.0 */
const file = "src/components/Share.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1i8yi5z-style";
  style.textContent = ".social.svelte-1i8yi5z{transition:0.5s ease-out}.social.svelte-1i8yi5z:hover{transform:rotate(360deg);scale:1.50}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmUuc3ZlbHRlIiwic291cmNlcyI6WyJTaGFyZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICBsZXQgYWN0aXZlID0gXCJoaWRkZW5cIjtcbiAgbGV0IG9wZW4gPSBmYWxzZTtcbiAgbGV0IGJ0bj1cIiBcIlxuXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgYnRuPVwiaGlkZGVuXCJcbiAgICAgIGFjdGl2ZSA9IFwiIFwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGJ0biA9IFwiIFwiXG4gICAgICB9LCA4MDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlID0gXCIgXCI7XG4gICAgICBcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5zb2NpYWwge1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gICBcbiAgfVxuICAuc29jaWFsOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHNjYWxlOiAxLjUwO1xuICAgIFxuICB9XG48L3N0eWxlPlxuXG48Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2lzQWN0aXZlfT5cbiAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTMgc2VsZi1jZW50ZXJcIj5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz17YnRufSBvbjpjbGljaz17KCkgPT4gKG9wZW4gPSAhb3Blbil9PlxuICAgICAgICA8aW1nIHNyYz1cInNoYXJlLnN2Z1wiIGFsdD1cInNoYXJlXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJzb2NpYWxcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzcz17YWN0aXZlfT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NvZnR3ZWVsL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIlxuICAgICAgICAgIGFsdD1cIkludGFncmFtIHJvY2tiYW5kXCJcbiAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MFwiXG4gICAgICAgICAgY2xhc3M9XCJzb2NpYWxcIiAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9e2FjdGl2ZX0+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1NvZnR3ZWVsXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvZmFjZS5zdmdcIlxuICAgICAgICAgIGFsdD1cIkZhY2Vib29rIHJvY2tiYW5kXCJcbiAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MFwiXG4gICAgICAgICAgY2xhc3M9XCJzb2NpYWxcIiAvPlxuICAgICAgPC9hPlxuXG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG5cbjwvZm9ybT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkUsT0FBTyxlQUFDLENBQUMsQUFDUCxVQUFVLENBQUUsSUFBSSxDQUFDLFFBQVEsQUFFM0IsQ0FBQyxBQUNELHNCQUFPLE1BQU0sQUFBQyxDQUFDLEFBQ2IsU0FBUyxDQUFFLE9BQU8sTUFBTSxDQUFDLENBQ3pCLEtBQUssQ0FBRSxJQUFJLEFBRWIsQ0FBQyJ9 */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  let form;
  let div3;
  let div0;
  let button;
  let img0;
  let img0_src_value;
  let button_class_value;
  let t0;
  let div1;
  let a0;
  let img1;
  let img1_src_value;
  let div1_class_value;
  let t1;
  let div2;
  let a1;
  let img2;
  let img2_src_value;
  let div2_class_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      form = element("form");
      div3 = element("div");
      div0 = element("div");
      button = element("button");
      img0 = element("img");
      t0 = space();
      div1 = element("div");
      a0 = element("a");
      img1 = element("img");
      t1 = space();
      div2 = element("div");
      a1 = element("a");
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      form = claim_element(nodes, "FORM", {});
      var form_nodes = children(form);
      div3 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {});
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      img0 = claim_element(button_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      img1 = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      a0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      a1 = claim_element(div2_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img0.src !== (img0_src_value = "share.svg")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "share");
      attr_dev(img0, "width", "50");
      attr_dev(img0, "height", "50");
      attr_dev(img0, "class", "social svelte-1i8yi5z");
      add_location(img0, file, 37, 8, 609);
      attr_dev(button, "class", button_class_value = "" + (null_to_empty(
      /*btn*/
      ctx[2]) + " svelte-1i8yi5z"));
      add_location(button, file, 36, 6, 548);
      add_location(div0, file, 35, 4, 536);
      if (img1.src !== (img1_src_value = "/instagram.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Intagram rockband");
      attr_dev(img1, "width", "50");
      attr_dev(img1, "height", "50");
      attr_dev(img1, "class", "social svelte-1i8yi5z");
      add_location(img1, file, 43, 8, 801);
      attr_dev(a0, "href", "https://www.instagram.com/softweel/");
      add_location(a0, file, 42, 6, 746);
      attr_dev(div1, "class", div1_class_value = "" + (null_to_empty(
      /*active*/
      ctx[0]) + " svelte-1i8yi5z"));
      add_location(div1, file, 41, 4, 719);
      if (img2.src !== (img2_src_value = "/face.svg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Facebook rockband");
      attr_dev(img2, "width", "50");
      attr_dev(img2, "height", "50");
      attr_dev(img2, "class", "social svelte-1i8yi5z");
      add_location(img2, file, 53, 8, 1048);
      attr_dev(a1, "href", "https://www.facebook.com/Softweel");
      add_location(a1, file, 52, 6, 995);
      attr_dev(div2, "class", div2_class_value = "" + (null_to_empty(
      /*active*/
      ctx[0]) + " svelte-1i8yi5z"));
      add_location(div2, file, 51, 4, 968);
      attr_dev(div3, "class", "grid grid-cols-3 self-center");
      add_location(div3, file, 34, 2, 489);
      add_location(form, file, 33, 0, 444);
    },
    m: function mount(target, anchor) {
      insert_dev(target, form, anchor);
      append_dev(form, div3);
      append_dev(div3, div0);
      append_dev(div0, button);
      append_dev(button, img0);
      append_dev(div3, t0);
      append_dev(div3, div1);
      append_dev(div1, a0);
      append_dev(a0, img1);
      append_dev(div3, t1);
      append_dev(div3, div2);
      append_dev(div2, a1);
      append_dev(a1, img2);

      if (!mounted) {
        dispose = [listen_dev(button, "click",
        /*click_handler*/
        ctx[4], false, false, false), listen_dev(form, "submit", prevent_default(
        /*isActive*/
        ctx[3]), false, true, false)];
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (dirty &
      /*btn*/
      4 && button_class_value !== (button_class_value = "" + (null_to_empty(
      /*btn*/
      ctx[2]) + " svelte-1i8yi5z"))) {
        attr_dev(button, "class", button_class_value);
      }

      if (dirty &
      /*active*/
      1 && div1_class_value !== (div1_class_value = "" + (null_to_empty(
      /*active*/
      ctx[0]) + " svelte-1i8yi5z"))) {
        attr_dev(div1, "class", div1_class_value);
      }

      if (dirty &
      /*active*/
      1 && div2_class_value !== (div2_class_value = "" + (null_to_empty(
      /*active*/
      ctx[0]) + " svelte-1i8yi5z"))) {
        attr_dev(div2, "class", div2_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(form);
      mounted = false;
      run_all(dispose);
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
  let active = "hidden";
  let open = false;
  let btn = " ";

  function isActive(open) {
    if (open) {
      $$invalidate(2, btn = "hidden");
      $$invalidate(0, active = " ");
      setTimeout(() => {
        $$invalidate(0, active = "hidden");
        $$invalidate(2, btn = " ");
      }, 8000);
    } else {
      $$invalidate(0, active = " ");
    }
  }

  const writable_props = [];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Share> was created with unknown prop '${key}'`);
  });
  let {
    $$slots = {},
    $$scope
  } = $$props;
  validate_slots("Share", $$slots, []);

  const click_handler = () => $$invalidate(1, open = !open);

  $$self.$capture_state = () => ({
    active,
    open,
    btn,
    isActive
  });

  $$self.$inject_state = $$props => {
    if ("active" in $$props) $$invalidate(0, active = $$props.active);
    if ("open" in $$props) $$invalidate(1, open = $$props.open);
    if ("btn" in $$props) $$invalidate(2, btn = $$props.btn);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [active, open, btn, isActive, click_handler];
}

class Share extends SvelteComponentDev {
  constructor(options) {
    super(options);
    if (!document.getElementById("svelte-1i8yi5z-style")) add_css();
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Share",
      options,
      id: create_fragment.name
    });
  }

}

export { Share as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmUuOTM2OTYxNDguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NoYXJlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXG4gIGxldCBhY3RpdmUgPSBcImhpZGRlblwiO1xuICBsZXQgb3BlbiA9IGZhbHNlO1xuICBsZXQgYnRuPVwiIFwiXG5cbiAgZnVuY3Rpb24gaXNBY3RpdmUob3Blbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBidG49XCJoaWRkZW5cIlxuICAgICAgYWN0aXZlID0gXCIgXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWN0aXZlID0gXCJoaWRkZW5cIjtcbiAgICAgICAgYnRuID0gXCIgXCJcbiAgICAgIH0sIDgwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmUgPSBcIiBcIjtcbiAgICAgIFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnNvY2lhbCB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcbiAgIFxuICB9XG4gIC5zb2NpYWw6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgc2NhbGU6IDEuNTA7XG4gICAgXG4gIH1cbjwvc3R5bGU+XG5cbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17aXNBY3RpdmV9PlxuICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMyBzZWxmLWNlbnRlclwiPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPXtidG59IG9uOmNsaWNrPXsoKSA9PiAob3BlbiA9ICFvcGVuKX0+XG4gICAgICAgIDxpbWcgc3JjPVwic2hhcmUuc3ZnXCIgYWx0PVwic2hhcmVcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInNvY2lhbFwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzPXthY3RpdmV9PlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc29mdHdlZWwvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW5zdGFncmFtLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiSW50YWdyYW0gcm9ja2JhbmRcIlxuICAgICAgICAgIHdpZHRoPVwiNTBcIlxuICAgICAgICAgIGhlaWdodD1cIjUwXCJcbiAgICAgICAgICBjbGFzcz1cInNvY2lhbFwiIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz17YWN0aXZlfT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vU29mdHdlZWxcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9mYWNlLnN2Z1wiXG4gICAgICAgICAgYWx0PVwiRmFjZWJvb2sgcm9ja2JhbmRcIlxuICAgICAgICAgIHdpZHRoPVwiNTBcIlxuICAgICAgICAgIGhlaWdodD1cIjUwXCJcbiAgICAgICAgICBjbGFzcz1cInNvY2lhbFwiIC8+XG4gICAgICA8L2E+XG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuPC9mb3JtPlxuIl0sIm5hbWVzIjpbImN0eCIsImFjdGl2ZSIsIm9wZW4iLCJidG4iLCJpc0FjdGl2ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NxQkEsTUFBQUEsR0FBRyxFQUFBOzs7Ozs7Ozs7Ozs7O0FBS1JBLE1BQUFBLEdBQU0sRUFBQTs7Ozs7Ozs7Ozs7O0FBVU5BLE1BQUFBLEdBQU0sRUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQlVBLFFBQUFBLEdBQVEsRUFBQTs7Ozs7Ozs7O0FBR25CQSxNQUFBQSxHQUFHLEVBQUE7Ozs7Ozs7O0FBS1JBLE1BQUFBLEdBQU0sRUFBQTs7Ozs7Ozs7QUFVTkEsTUFBQUEsR0FBTSxFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWpEaEJDLE1BQU0sR0FBRztNQUNUQyxJQUFJLEdBQUc7TUFDUEMsR0FBRyxHQUFDOztXQUVDQyxTQUFTRjtRQUNaQTtzQkFDRkMsR0FBRyxHQUFDO3NCQUNKRixNQUFNLEdBQUc7QUFDVEksTUFBQUEsVUFBVTt3QkFDUkosTUFBTSxHQUFHO3dCQUNURSxHQUFHLEdBQUc7T0FGRSxFQUdQLElBSE8sQ0FBVjs7c0JBS0FGLE1BQU0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7OENBcUI0QkMsSUFBSSxJQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
