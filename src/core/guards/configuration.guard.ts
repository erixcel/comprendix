import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LOCAL_ID, CONFIG_PARAM } from "../constants/configuration.config";

@Injectable({ providedIn: 'root' })
export class ConfigurationGuard implements CanActivateChild {

  constructor(private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    if (!childRoute.queryParamMap.has(CONFIG_PARAM)) {
      const tree = this.router.parseUrl(state.url);
      tree.queryParams[CONFIG_PARAM] = LOCAL_ID;
      return tree;
    }

    return true;
  }
}
