import * as auth from "./auth";
import * as product from "./product";
import * as customer from "./customer";
import * as team from "./team";

export default {
  ...auth,
  ...product,
  ...customer,
  ...team
};
