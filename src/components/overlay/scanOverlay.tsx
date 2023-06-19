import { component$ } from "@builder.io/qwik";
import { Scanline } from "../icon/scanLine";
import { ScanOutlineLB } from "../icon/scanOutlineLeftBottom";
import { ScanOutlineLT } from "../icon/scanOutlineLeftTop";
import { ScanOutlineRB } from "../icon/scanOutlineRightBottom";
import { ScanOutlineRT } from "../icon/scanOutlineRightTop";

interface Props {
  scanClass: string[];
  outlineClass: string[];
}
export default component$<Props>((props) => {
  return (
    <div>
      <Scanline class={["absolute", "top-0", "left-0", ...props.scanClass]} />
      <ScanOutlineLT
        class={["absolute", "top-0", "left-0", ...props.outlineClass]}
      />
      <ScanOutlineRT
        class={["absolute", "top-0", "right-0", ...props.outlineClass]}
      />
      <ScanOutlineLB
        class={["absolute", "bottom-0", "left-0", ...props.outlineClass]}
      />
      <ScanOutlineRB
        class={["absolute", "bottom-0", "right-0", ...props.outlineClass]}
      />
    </div>
  );
});
