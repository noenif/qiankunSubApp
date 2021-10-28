import "./core/public-path";
import './core/install';
import { lifeCycle, render } from "./core/life-cycle";


if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
const { bootstrap, mount, unmount } = lifeCycle();
export { bootstrap, mount, unmount };

