/* -------------------------------------------------------------------------- */
/*                          Product Name: VideoEngine                         */
/*                            Author: Mediasoftpro                            */
/*                       Email: support@mediasoftpro.com                      */
/*       License: Read license.txt located on root of your application.       */
/*                     Copyright 2007 - 2020 @Mediasoftpro                    */
/* -------------------------------------------------------------------------- */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

/* custom component */
import { EmbedYoutubeUploaderComponent } from "./process.component";

// shared module
import { PartialModule } from "../../../../partials/shared.module";
import { SharedVideoModule } from "../../../../shared/videos/shared.module";

@NgModule({
  imports: [
    CommonModule,
    PartialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedVideoModule
  ],
  declarations: [EmbedYoutubeUploaderComponent],
  exports: [EmbedYoutubeUploaderComponent]
})
export class YoutubeVideoModule {}
