import { NgModule } from "@angular/core";

import { SharedModule } from "@bitwarden/web-vault/app/shared/shared.module";

import { InputCheckboxComponent } from "./components/input-checkbox.component";
import { DomainVerificationComponent } from "./manage/domain-verification.component";
import { ScimComponent } from "./manage/scim.component";
import { SsoComponent } from "./manage/sso.component";
import { OrganizationsRoutingModule } from "./organizations-routing.module";

@NgModule({
  imports: [SharedModule, OrganizationsRoutingModule],
  declarations: [InputCheckboxComponent, SsoComponent, ScimComponent, DomainVerificationComponent],
})
export class OrganizationsModule {}
