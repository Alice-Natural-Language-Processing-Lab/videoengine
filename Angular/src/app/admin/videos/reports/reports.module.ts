/* -------------------------------------------------------------------------- */
/*                          Product Name: VideoEngine                         */
/*                            Author: Mediasoftpro                            */
/*                       Email: support@mediasoftpro.com                      */
/*       License: Read license.txt located on root of your application.       */
/*                     Copyright 2007 - 2020 @Mediasoftpro                    */
/* -------------------------------------------------------------------------- */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
/* custom component */
import { VideoReportsComponent } from "./reports.components";

/* services */
import { SettingsService } from "../../../shared/videos/services/settings.service";
import { DataService } from "../../../shared/videos/services/data.service";
import { FormService } from "../../../shared/videos/services/form.service";

/* actions */
import { VideoAPIActions } from "../../../reducers/videos/actions";
import { PartialModule } from "../../../partials/shared.module";

import { Ng2GoogleChartsModule } from "ng2-google-charts";

@NgModule({
  imports: [
    CommonModule,
    PartialModule,
    RouterModule,
    FormsModule,
    Ng2GoogleChartsModule
  ],
  declarations: [VideoReportsComponent],
  exports: [VideoReportsComponent],
  providers: [SettingsService, DataService, FormService, VideoAPIActions]
})
export class VideoReportModule {}
