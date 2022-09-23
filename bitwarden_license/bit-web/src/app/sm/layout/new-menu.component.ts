import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

import { DialogService } from "@bitwarden/components";

import {
  OperationType,
  SecretDialogComponent,
  SecretOperation,
} from "../secrets/dialog/secret-dialog.component";

@Component({
  selector: "sm-new-menu",
  templateUrl: "./new-menu.component.html",
})
export class NewMenuComponent implements OnInit {
  private organizationId: string;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private dialogService: DialogService) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params: any) => {
      this.organizationId = params.organizationId;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openSecretDialog() {
    this.dialogService.open<unknown, SecretOperation>(SecretDialogComponent, {
      data: {
        organizationId: this.organizationId,
        operation: OperationType.Add,
      },
    });
  }
}