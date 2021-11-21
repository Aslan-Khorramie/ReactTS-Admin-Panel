import "react-i18next";
import { resources } from "./config";

declare module "react-i18next" {
  type DefaultResources = typeof resources["fa"];
  interface Resources extends DefaultResources {}
}
