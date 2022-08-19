import { emit } from "src/shared/event";
import { mixin } from "src/shared/utils";
import { Include, include, setExclude, setInclude } from "./Include";

const config: Config = {
  get include() {
    return include;
  },
  set include(v) {
    setInclude(v);
  },
  get exclude() {
    return include;
  },
  set exclude(v) {
    setExclude(v);
  },
};

export function setConfig(_config: Partial<Config>) {
  mixin(config, _config);
  emit("onSetConfig");
}
export function getConfig() {
  return config;
}

interface Config {
  include: Include;
  exclude: Include;
}
